import { useEffect, useLayoutEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import * as THREE from 'three'

const MODEL_URL = '/models/interactive-ai.gltf'

/*
 * Palette lifted from the design tokens in style.css. The exported model ships
 * with no materials and no animations at all, so every surface and every bit of
 * motion here is ours to author.
 */
const INK_SOFT = '#2b2622'
const STONE = '#6b625b'
const PRIMARY = '#ea580c' // burnt orange — the one hot accent
const ACCENT = '#0f766e' // deep teal — used sparingly

// World size the cluster is normalised to, and the frame it is framed against.
const CLUSTER_SIZE = 3.6
const VIEW_UNITS = 5

// Every cube is this size. The export mixes two cube sizes and nests a smaller
// one inside each larger one; both are discarded in favour of one uniform box.
const CUBE_SIZE = 0.34
// A hair of breathing room so neighbours read as separate blocks, not a mass.
const CUBE_GAP = 1.06

/**
 * Four shared materials, assigned by index — 120-odd meshes each owning a
 * material instance is a lot of GPU state for what is really four looks.
 * Deterministic rather than random so the composition is identical on every
 * load; a hero that reshuffles its accents each refresh reads as noise.
 *
 * Finish follows the "Gem" reference: glossy, clearcoated, lit from within.
 */
function createMaterials() {
  const gem = (color, emissiveIntensity, iridescence) =>
    new THREE.MeshPhysicalMaterial({
      color,
      emissive: new THREE.Color(color),
      emissiveIntensity,
      roughness: 0.18,
      metalness: 0.15,
      clearcoat: 1,
      clearcoatRoughness: 0.12,
      iridescence,
      iridescenceIOR: 1.35,
      sheen: 0.4,
      sheenColor: new THREE.Color(PRIMARY),
    })

  return [
    gem(INK_SOFT, 0.04, 0.35),
    gem(STONE, 0.06, 0.3),
    gem(PRIMARY, 0.85, 0.5),
    gem(ACCENT, 0.5, 0.65),
  ]
}

function pickMaterial(materials, index) {
  const [dark, stone, primary, accent] = materials
  if (index % 9 === 4) return primary
  if (index % 14 === 6) return accent
  return index % 5 === 2 ? stone : dark
}

/**
 * Resolve overlaps between equal, axis-aligned cubes.
 *
 * Cubes only overlap when they overlap on all three axes at once, so the fix is
 * to separate along whichever axis is least penetrated — a distance-based push
 * would either leave corners intersecting or blow the cluster apart to the
 * conservative sqrt(3) radius.
 */
function separate(cubes, size, iterations, skip = null) {
  const min = size * CUBE_GAP
  for (let pass = 0; pass < iterations; pass += 1) {
    for (let i = 0; i < cubes.length; i += 1) {
      for (let j = i + 1; j < cubes.length; j += 1) {
        const a = cubes[i].position
        const b = cubes[j].position
        const dx = b.x - a.x
        const dy = b.y - a.y
        const dz = b.z - a.z
        const ox = min - Math.abs(dx)
        const oy = min - Math.abs(dy)
        const oz = min - Math.abs(dz)
        if (ox <= 0 || oy <= 0 || oz <= 0) continue

        // Two cubes exactly on top of each other have no axis to prefer.
        const jitter = 1e-4
        let px = 0
        let py = 0
        let pz = 0
        if (ox <= oy && ox <= oz) px = (dx === 0 ? jitter : Math.sign(dx)) * ox
        else if (oy <= oz) py = (dy === 0 ? jitter : Math.sign(dy)) * oy
        else pz = (dz === 0 ? jitter : Math.sign(dz)) * oz

        const aFixed = skip === cubes[i]
        const bFixed = skip === cubes[j]
        if (aFixed && bFixed) continue
        // A held cube shoves its neighbours aside instead of being shoved.
        const aShare = aFixed ? 0 : bFixed ? 1 : 0.5
        const bShare = 1 - aShare
        a.x -= px * aShare
        a.y -= py * aShare
        a.z -= pz * aShare
        b.x += px * bShare
        b.y += py * bShare
        b.z += pz * bShare
      }
    }
  }
}

/** Keeps the cluster framed at any canvas size. */
function FitCamera() {
  const camera = useThree((state) => state.camera)
  const size = useThree((state) => state.size)

  useLayoutEffect(() => {
    camera.zoom = Math.min(size.width, size.height) / VIEW_UNITS
    camera.updateProjectionMatrix()
  }, [camera, size])

  return null
}

function Cluster({ pointer }) {
  const gltf = useLoader(GLTFLoader, MODEL_URL)
  const group = useRef(null)
  const drag = useRef({ cube: null, depth: 0 })

  // Reused every frame — allocating vectors in the frame loop is how you hand
  // the garbage collector a stutter.
  const scratch = useMemo(() => ({ cursor: new THREE.Vector3(), point: new THREE.Vector3() }), [])

  const model = useMemo(() => {
    const source = gltf.scene.clone(true)
    source.updateWorldMatrix(true, true)

    // The export nests a smaller cube inside each larger one, which shows
    // through the moment a cube is moved. Take one position per cube — the
    // parent group each nested pair shares — and rebuild from scratch.
    const holders = new Set()
    const points = []
    let template = null

    source.traverse((child) => {
      if (!child.isMesh) return
      if (!template) template = child.geometry
      const holder = child.parent && child.parent !== source ? child.parent : child
      if (holders.has(holder.uuid)) return
      holders.add(holder.uuid)
      points.push(holder.getWorldPosition(new THREE.Vector3()))
    })

    // Drop the stray sitting far outside the pack — by distance rather than by
    // name, so this survives a re-export that renames things.
    const median = (values) => {
      const sorted = [...values].sort((a, b) => a - b)
      return sorted[Math.floor(sorted.length / 2)] ?? 0
    }
    const hub = new THREE.Vector3(
      median(points.map((p) => p.x)),
      median(points.map((p) => p.y)),
      median(points.map((p) => p.z))
    )
    const spread = [...points.map((p) => p.distanceTo(hub))].sort((a, b) => a - b)
    const limit = Math.max((spread[Math.floor(spread.length * 0.9)] ?? 0) * 2.2, 1e-6)
    const kept = points.filter((p) => p.distanceTo(hub) <= limit)

    // Centre and normalise against the widest face. Normalising against the
    // longest axis would shrink it to nothing: the cluster is far deeper than
    // it is wide, and depth costs no screen space.
    const bounds = new THREE.Box3().setFromPoints(kept)
    const centre = bounds.getCenter(new THREE.Vector3())
    const extent = bounds.getSize(new THREE.Vector3())
    const scale = CLUSTER_SIZE / (Math.max(extent.x, extent.y) || 1)

    const wrapper = new THREE.Group()
    const materials = createMaterials()

    // Reuse the export's own rounded cube rather than a plain BoxGeometry, so
    // the silhouette still matches the model — but scaled to one uniform size.
    const geometry = template ?? new THREE.BoxGeometry(1, 1, 1)
    geometry.computeBoundingBox()
    const geometrySize = geometry.boundingBox.getSize(new THREE.Vector3())
    const unit = CUBE_SIZE / (Math.max(geometrySize.x, geometrySize.y, geometrySize.z) || 1)

    const cubes = kept.map((point, index) => {
      const mesh = new THREE.Mesh(geometry, pickMaterial(materials, index))
      mesh.position.copy(point).sub(centre).multiplyScalar(scale)
      mesh.scale.setScalar(unit)
      wrapper.add(mesh)
      return mesh
    })

    // Resolve the overlaps baked into the export before the first frame. 40
    // passes is what it takes to reach zero overlapping pairs from this
    // layout (12 leaves 2, 24 leaves 1); it runs once, at load.
    separate(cubes, CUBE_SIZE, 40)

    return { wrapper, cubes, materials, geometry }
  }, [gltf])

  // Materials and the rebuilt cubes are ours, so we own disposing of them.
  useEffect(() => {
    const { materials } = model
    return () => materials.forEach((material) => material.dispose())
  }, [model])

  useFrame((state, delta) => {
    if (!group.current) return
    const held = drag.current.cube

    // Slow ambient turn on a fixed tilt, plus a damped lean toward the cursor.
    // The turn pauses while dragging, or the cube crawls out from under you.
    if (!held) group.current.rotation.y += delta * 0.14
    const targetTilt = 0.32 + pointer.current.y * 0.18
    const targetShift = pointer.current.x * 0.35
    group.current.rotation.x += (targetTilt - group.current.rotation.x) * delta * 1.8
    group.current.position.x += (targetShift - group.current.position.x) * delta * 1.8
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1

    if (held) {
      // Orthographic and axis-aligned, so the pointer maps straight to a world
      // x/y; depth is kept at whatever the cube had when it was grabbed.
      const cursor = scratch.cursor.set(state.pointer.x, state.pointer.y, 0).unproject(state.camera)
      const point = scratch.point.set(cursor.x, cursor.y, drag.current.depth)
      model.wrapper.worldToLocal(point)
      held.position.lerp(point, 1 - Math.exp(-30 * delta))
    }

    // Keep cubes out of each other every frame: a dropped cube stays where it
    // was left, so overlaps have to be resolved continuously rather than once.
    separate(model.cubes, CUBE_SIZE, 1, held)
  })

  const endDrag = (event) => {
    if (!drag.current.cube) return
    drag.current.cube = null
    const node = event?.nativeEvent?.target ?? event?.target
    node?.releasePointerCapture?.(event?.pointerId)
    document.body.style.cursor = ''
  }

  return (
    <group
      ref={group}
      rotation={[0.32, 0, 0]}
      onPointerDown={(event) => {
        event.stopPropagation()
        const cube = event.object
        drag.current.cube = cube
        // Remember the grab depth so the cube slides in its own plane rather
        // than flying toward the camera.
        drag.current.depth = cube.getWorldPosition(scratch.point).z
        const node = event.nativeEvent?.target ?? event.target
        node?.setPointerCapture?.(event.pointerId)
        document.body.style.cursor = 'grabbing'
      }}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onPointerMissed={endDrag}
      onPointerOver={() => {
        if (!drag.current.cube) document.body.style.cursor = 'grab'
      }}
      onPointerOut={() => {
        if (!drag.current.cube) document.body.style.cursor = ''
      }}
    >
      <primitive object={model.wrapper} />
    </group>
  )
}

export default function HeroScene() {
  const pointer = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Tracked on the window, not the canvas, so the lean responds to the whole
    // hero rather than only to the corner the canvas occupies.
    const onMove = (event) => {
      pointer.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: (event.clientY / window.innerHeight) * 2 - 1,
      }
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <Canvas
      orthographic
      // Straight down -z at the origin. An offset position would need an
      // explicit lookAt — an R3F camera aims along its own -z, not at the scene.
      camera={{ position: [0, 0, 10], near: -50, far: 50 }}
      // alpha keeps the hero backdrop showing through; dpr is capped because a
      // decorative cluster does not deserve a full retina render budget
      gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      dpr={[1, 1.75]}
      style={{ background: 'transparent' }}
    >
      {/* deliberately no <color attach="background"> — that would paint an
          opaque clear colour and throw away the alpha the hero shows through */}
      <FitCamera />
      <ambientLight intensity={0.9} color={'#fdf6ef'} />
      <directionalLight position={[4, 6, 8]} intensity={2.4} color={'#fff4e8'} />
      {/* warm rim from the primary, cool fill from the accent — the same two
          hot colours the rest of the site is allowed to use */}
      <pointLight position={[-4, -2, 4]} intensity={26} distance={16} color={PRIMARY} />
      <pointLight position={[4, 3, 2]} intensity={14} distance={18} color={ACCENT} />
      <Cluster pointer={pointer} />
    </Canvas>
  )
}
