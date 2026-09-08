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

// How far the cursor's influence reaches, and how hard it shoves (world units).
const PUSH_RADIUS = 1.1
const PUSH_STRENGTH = 0.55

/**
 * Four shared materials, built once and assigned by index — 123 meshes each
 * owning a material instance is a lot of GPU state for what is really four
 * looks. Deterministic rather than random so the composition is identical on
 * every load; a hero that reshuffles its accents each refresh reads as noise.
 *
 * Finish follows the "Gem" reference: glossy, clearcoated, lit from within,
 * rather than the matte clay of the still-life renders.
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

  return {
    primary: gem(PRIMARY, 0.85, 0.5),
    accent: gem(ACCENT, 0.5, 0.65),
    // Charcoal on a near-black hero needs a little lift and a lot of gloss, or
    // the cluster reads as a hole in the page rather than an object.
    dark: gem(INK_SOFT, 0.04, 0.35),
    stone: gem(STONE, 0.06, 0.3),
  }
}

function pickMaterial(materials, index) {
  if (index % 9 === 4) return materials.primary
  if (index % 14 === 6) return materials.accent
  return index % 5 === 2 ? materials.stone : materials.dark
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
  const drag = useRef({ mesh: null })

  // Reused across every cube on every frame — allocating vectors in the frame
  // loop is how you hand the garbage collector a stutter.
  const scratch = useMemo(
    () => ({
      cursor: new THREE.Vector3(),
      rest: new THREE.Vector3(),
      target: new THREE.Vector3(),
      grabbed: new THREE.Vector3(),
      push: new THREE.Vector3(),
      quaternion: new THREE.Quaternion(),
      scale: new THREE.Vector3(),
    }),
    []
  )

  const model = useMemo(() => {
    const scene = gltf.scene.clone(true)
    const materials = createMaterials()

    // The export carries its own cameras and lights; we light it ourselves.
    scene.traverse((child) => {
      if (child.isCamera || child.isLight) child.visible = false
    })

    // The export has one cube sitting far outside the pack, which on the hero
    // reads as a stray floating in empty space. Drop outliers by distance rather
    // than by name, so this survives a re-export that renames things.
    scene.updateWorldMatrix(true, true)
    const meshes = []
    scene.traverse((child) => {
      if (child.isMesh) meshes.push(child)
    })

    const positions = meshes.map((mesh) => mesh.getWorldPosition(new THREE.Vector3()))
    const median = (values) => {
      const sorted = [...values].sort((a, b) => a - b)
      return sorted[Math.floor(sorted.length / 2)] ?? 0
    }
    const hub = new THREE.Vector3(
      median(positions.map((p) => p.x)),
      median(positions.map((p) => p.y)),
      median(positions.map((p) => p.z))
    )
    const distances = positions.map((p) => p.distanceTo(hub))
    const sortedDistances = [...distances].sort((a, b) => a - b)
    const p90 = sortedDistances[Math.floor(sortedDistances.length * 0.9)] ?? 0
    const outlierLimit = Math.max(p90 * 2.2, 1e-6)

    let meshIndex = 0
    meshes.forEach((mesh, i) => {
      if (distances[i] > outlierLimit) {
        mesh.removeFromParent()
        return
      }
      mesh.material = pickMaterial(materials, meshIndex)
      meshIndex += 1
    })

    // Centre on the origin and normalise against the widest face. Scaling by the
    // longest of all three axes would shrink it to nothing: this cluster is far
    // deeper (~17 units) than it is wide, and depth costs no screen space.
    const box = new THREE.Box3().setFromObject(scene)
    const centre = box.getCenter(new THREE.Vector3())
    const extent = box.getSize(new THREE.Vector3())
    const widestFace = Math.max(extent.x, extent.y) || 1

    scene.position.sub(centre)
    const wrapper = new THREE.Group()
    wrapper.add(scene)
    wrapper.scale.setScalar(CLUSTER_SIZE / widestFace)

    // Every cube remembers where it belongs, so it can be shoved around and
    // still find its way back.
    const cubes = meshes
      .filter((mesh) => mesh.parent)
      .map((mesh) => ({ mesh, home: mesh.position.clone(), offset: new THREE.Vector3() }))

    return { wrapper, cubes }
  }, [gltf])

  useFrame((state, delta) => {
    if (!group.current) return
    const t = state.clock.elapsedTime
    const dragging = drag.current.mesh

    // Slow ambient turn on a fixed tilt, plus a damped lean toward the cursor —
    // damped rather than tracked so the cluster drifts instead of snapping.
    // The turn pauses while dragging, or the cube crawls out from under you.
    if (!dragging) group.current.rotation.y += delta * 0.14
    const targetTilt = 0.32 + pointer.current.y * 0.18
    const targetShift = pointer.current.x * 0.35
    group.current.rotation.x += (targetTilt - group.current.rotation.x) * delta * 1.8
    group.current.position.x += (targetShift - group.current.position.x) * delta * 1.8
    group.current.position.y = Math.sin(t * 0.5) * 0.1

    // The camera is orthographic and axis-aligned, so a pointer maps to a world
    // x/y directly — no ray/plane intersection needed, and depth is irrelevant.
    const cursor = scratch.cursor.set(state.pointer.x, state.pointer.y, 0).unproject(state.camera)

    for (const cube of model.cubes) {
      const { mesh, home, offset } = cube
      const parent = mesh.parent
      if (!parent) continue

      // Where this cube would sit if undisturbed, in world space.
      const rest = scratch.rest.copy(home)
      parent.localToWorld(rest)

      let targetOffset = scratch.target.set(0, 0, 0)

      if (dragging === mesh) {
        // Drag: follow the cursor exactly, converted back into the cube's own
        // parent space so the cluster's rotation and scale are accounted for.
        const grabbed = scratch.grabbed.set(cursor.x, cursor.y, rest.z)
        parent.worldToLocal(grabbed)
        targetOffset.copy(grabbed).sub(home)
      } else {
        // Repulsion measured on screen (world x/y), so what looks near the
        // cursor is what moves, regardless of how deep it sits in the cluster.
        const dx = rest.x - cursor.x
        const dy = rest.y - cursor.y
        const distance = Math.hypot(dx, dy)

        if (distance < PUSH_RADIUS) {
          const falloff = 1 - distance / PUSH_RADIUS
          const strength = falloff * falloff * PUSH_STRENGTH
          const push = scratch.push
            .set(dx, dy, 0.35)
            .normalize()
            .multiplyScalar(strength)

          // World-space shove converted into the cube's parent space.
          const parentQuaternion = parent.getWorldQuaternion(scratch.quaternion)
          const parentScale = parent.getWorldScale(scratch.scale)
          push.applyQuaternion(parentQuaternion.invert())
          push.divide(parentScale)
          targetOffset.copy(push)
        }
      }

      // Frame-rate independent spring. Dragged cubes track tightly; released
      // ones ease home.
      const stiffness = dragging === mesh ? 26 : 7
      offset.lerp(targetOffset, 1 - Math.exp(-stiffness * delta))
      mesh.position.copy(home).add(offset)
    }
  })

  const endDrag = (event) => {
    if (!drag.current.mesh) return
    drag.current.mesh = null
    const node = event?.nativeEvent?.target ?? event?.target
    node?.releasePointerCapture?.(event.pointerId)
    document.body.style.cursor = ''
  }

  return (
    <group
      ref={group}
      rotation={[0.32, 0, 0]}
      onPointerDown={(event) => {
        event.stopPropagation()
        drag.current.mesh = event.object
        const node = event.nativeEvent?.target ?? event.target
        node?.setPointerCapture?.(event.pointerId)
        document.body.style.cursor = 'grabbing'
      }}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onPointerMissed={endDrag}
      onPointerOver={() => {
        if (!drag.current.mesh) document.body.style.cursor = 'grab'
      }}
      onPointerOut={() => {
        if (!drag.current.mesh) document.body.style.cursor = ''
      }}
    >
      <primitive object={model.wrapper} />
    </group>
  )
}

export default function HeroScene() {
  const pointer = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Tracked on the window, not the canvas: the canvas has pointer-events off
    // so it would never see the move itself.
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
