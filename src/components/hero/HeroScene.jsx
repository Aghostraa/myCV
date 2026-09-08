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
    return wrapper
  }, [gltf])

  useFrame((state, delta) => {
    if (!group.current) return
    const t = state.clock.elapsedTime

    // Slow ambient turn on a fixed tilt, plus a damped lean toward the cursor —
    // damped rather than tracked so the cluster drifts instead of snapping.
    group.current.rotation.y += delta * 0.14
    const targetTilt = 0.32 + pointer.current.y * 0.18
    const targetShift = pointer.current.x * 0.35
    group.current.rotation.x += (targetTilt - group.current.rotation.x) * delta * 1.8
    group.current.position.x += (targetShift - group.current.position.x) * delta * 1.8
    group.current.position.y = Math.sin(t * 0.5) * 0.1
  })

  return (
    <group ref={group} rotation={[0.32, 0, 0]}>
      <primitive object={model} />
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
