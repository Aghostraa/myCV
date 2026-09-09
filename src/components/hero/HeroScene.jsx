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

// The canvas height maps to this many world units — lower means more zoom.
const VIEW_UNITS = 5.6
// Cube size and the volume the cluster is normalised into. These two are a
// pair: 61 cubes of 0.5 do not fit inside a 3.6 cluster (they stay overlapped
// however long you relax them); 5.0 is where it resolves cleanly.
const CUBE_SIZE = 0.5
const CLUSTER_SIZE = 5
const CUBE_GAP = 1.06

// Keep-out handling: cubes start resisting this far from a banned edge, and are
// sent home if released inside one.
const ZONE_MARGIN = 0.35
const ZONE_FORCE = 34
const EDGE_MARGIN = 0.3
const EDGE_FORCE = 26

// Googly eyes: sclera on the front face, pupil springing toward the cursor.
const EYE_RADIUS = 0.105
const PUPIL_RADIUS = 0.052
const EYE_SPACING = 0.115
const EYE_HEIGHT = 0.045
const PUPIL_TRAVEL = EYE_RADIUS - PUPIL_RADIUS - 0.008
const EYE_STIFFNESS = 120
const EYE_DAMPING = 9

const RETURN_STIFFNESS = 5.5
const DAMPING = 3.2
const EXPLODE_IMPULSE = 7.5

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
        const a = cubes[i].group.position
        const b = cubes[j].group.position
        const dx = b.x - a.x
        const dy = b.y - a.y
        const dz = b.z - a.z
        const ox = min - Math.abs(dx)
        const oy = min - Math.abs(dy)
        const oz = min - Math.abs(dz)
        if (ox <= 0 || oy <= 0 || oz <= 0) continue

        const jitter = 1e-4
        let px = 0
        let py = 0
        let pz = 0
        if (ox <= oy && ox <= oz) px = (dx === 0 ? jitter : Math.sign(dx)) * ox
        else if (oy <= oz) py = (dy === 0 ? jitter : Math.sign(dy)) * oy
        else pz = (dz === 0 ? jitter : Math.sign(dz)) * oz

        const aHeld = skip === cubes[i]
        const bHeld = skip === cubes[j]
        if (aHeld && bHeld) continue
        // A held cube shoves its neighbours aside instead of being shoved.
        const aShare = aHeld ? 0 : bHeld ? 1 : 0.5
        a.x -= px * aShare
        a.y -= py * aShare
        a.z -= pz * aShare
        b.x += px * (1 - aShare)
        b.y += py * (1 - aShare)
        b.z += pz * (1 - aShare)
      }
    }
  }
}

/** Keeps the cluster framed at any canvas size. */
function FitCamera() {
  const camera = useThree((state) => state.camera)
  const size = useThree((state) => state.size)

  useLayoutEffect(() => {
    // Height drives the zoom so the cluster keeps its scale on a wide canvas.
    camera.zoom = size.height / VIEW_UNITS
    camera.updateProjectionMatrix()
  }, [camera, size])

  return null
}

function Cluster({ pointer }) {
  const gltf = useLoader(GLTFLoader, MODEL_URL)
  const gl = useThree((state) => state.gl)
  const group = useRef(null)
  const drag = useRef({ cube: null, depth: 0 })
  const zones = useRef([])
  const cameraZoom = useRef(0)
  const bounds = useRef({ minX: -5, maxX: 5, minY: -3, maxY: 3 })
  const fitKey = useRef('')
  const frameCount = useRef(0)

  // Reused every frame — allocating vectors in the frame loop is how you hand
  // the garbage collector a stutter.
  const scratch = useMemo(
    () => ({
      cursor: new THREE.Vector3(),
      point: new THREE.Vector3(),
      world: new THREE.Vector3(),
      force: new THREE.Vector3(),
      quaternion: new THREE.Quaternion(),
      scale: new THREE.Vector3(),
    }),
    []
  )

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

    const box = new THREE.Box3().setFromPoints(kept)
    const centre = box.getCenter(new THREE.Vector3())
    const extent = box.getSize(new THREE.Vector3())
    const scale = CLUSTER_SIZE / (Math.max(extent.x, extent.y) || 1)

    const wrapper = new THREE.Group()
    const materials = createMaterials()

    // Reuse the export's own rounded cube rather than a plain BoxGeometry, so
    // the silhouette still matches the model — but scaled to one uniform size.
    const geometry = template ?? new THREE.BoxGeometry(1, 1, 1)
    geometry.computeBoundingBox()
    const geometrySize = geometry.boundingBox.getSize(new THREE.Vector3())
    const unit = CUBE_SIZE / (Math.max(geometrySize.x, geometrySize.y, geometrySize.z) || 1)

    // Googly eyes, shared geometry and materials across all of them. Unlit on
    // purpose: cartoon eyes should read flat, not gleam like the gem cubes.
    const scleraGeometry = new THREE.CircleGeometry(EYE_RADIUS, 20)
    const pupilGeometry = new THREE.CircleGeometry(PUPIL_RADIUS, 16)
    const scleraMaterial = new THREE.MeshBasicMaterial({ color: '#f7f4ef' })
    const pupilMaterial = new THREE.MeshBasicMaterial({ color: '#141110' })

    const cubes = kept.map((point, index) => {
      // Each cube is a group: the box carries the model's scale, the eyes sit
      // in plain world-sized units in front of it.
      const holder = new THREE.Group()
      holder.position.copy(point).sub(centre).multiplyScalar(scale)

      const mesh = new THREE.Mesh(geometry, pickMaterial(materials, index))
      mesh.scale.setScalar(unit)
      holder.add(mesh)

      const eyes = [-1, 1].map((side) => {
        const sclera = new THREE.Mesh(scleraGeometry, scleraMaterial)
        sclera.position.set(side * EYE_SPACING, EYE_HEIGHT, CUBE_SIZE / 2 + 0.004)
        const pupil = new THREE.Mesh(pupilGeometry, pupilMaterial)
        pupil.position.set(0, 0, 0.003)
        sclera.add(pupil)
        holder.add(sclera)
        return { sclera, pupil, offset: new THREE.Vector2(), velocity: new THREE.Vector2() }
      })

      wrapper.add(holder)
      const entry = {
        group: holder,
        mesh,
        eyes,
        home: new THREE.Vector3(),
        velocity: new THREE.Vector3(),
        returning: false,
      }
      // The eyes are meshes too, so a click lands on whichever part was hit —
      // often an eye, since they sit dead centre on the face. Tag every part
      // with its cube so any of them starts the same drag.
      holder.traverse((part) => {
        part.userData.cube = entry
      })
      return entry
    })

    // Resolve the overlaps baked into the export, then treat the resolved
    // layout as home — otherwise every cube would spring back into a clash.
    separate(cubes, CUBE_SIZE, 60)
    cubes.forEach((cube) => cube.home.copy(cube.group.position))

    // How much room the settled cluster actually needs, cubes included — the
    // fit uses this to scale into the free space rather than assuming
    // CLUSTER_SIZE, which describes the layout before separation and ignores
    // the half-cube sticking out at every edge.
    const settled = new THREE.Box3().setFromPoints(cubes.map((cube) => cube.home))
    const span = settled.getSize(new THREE.Vector3()).addScalar(CUBE_SIZE)

    return {
      wrapper,
      cubes,
      materials,
      span,
      oriented: false,
      disposables: [scleraGeometry, pupilGeometry, scleraMaterial, pupilMaterial],
    }
  }, [gltf])

  /*
   * Deliberately no disposal effect here.
   *
   * StrictMode mounts, unmounts and remounts in development, so a cleanup that
   * disposed these materials and geometries ran while the scene was still on
   * screen — verified: it fired twice with the canvas still mounted — and
   * objects whose GPU resources have been freed simply stop drawing. That was
   * the cluster vanishing a second after load.
   *
   * Disposing correctly across that cycle would mean ref-counting or rebuilding
   * on remount. Not worth it for four materials and two small geometries that
   * live as long as the page does.
   */

  // Double-click anywhere in the hero scatters the cluster; the return spring
  // draws it back together on its own.
  useEffect(() => {
    const canvas = gl.domElement
    const explode = () => {
      const centre = new THREE.Vector3()
      model.cubes.forEach((cube) => centre.add(cube.group.position))
      centre.divideScalar(model.cubes.length || 1)

      model.cubes.forEach((cube) => {
        const direction = cube.group.position.clone().sub(centre)
        if (direction.lengthSq() < 1e-6) direction.set(Math.random() - 0.5, Math.random() - 0.5, 0)
        direction.normalize()
        // A little upward bias so it reads as a burst rather than a flat spread.
        direction.y += 0.25
        cube.velocity.addScaledVector(direction.normalize(), EXPLODE_IMPULSE * (0.75 + Math.random() * 0.5))
        cube.returning = true
      })
    }
    canvas.addEventListener('dblclick', explode)
    return () => canvas.removeEventListener('dblclick', explode)
  }, [gl, model])

  /** Measure the no-go rectangles (nav, hero copy) in world units. */
  const measureZones = () => {
    const canvas = gl.domElement
    const rect = canvas.getBoundingClientRect()
    const zoom = cameraZoom.current
    if (!zoom || !rect.width) return

    const toWorld = (element) => {
      if (!element) return null
      const r = element.getBoundingClientRect()
      if (!r.width || !r.height) return null
      return {
        minX: (r.left - rect.left - rect.width / 2) / zoom,
        maxX: (r.right - rect.left - rect.width / 2) / zoom,
        minY: (rect.height / 2 - (r.bottom - rect.top)) / zoom,
        maxY: (rect.height / 2 - (r.top - rect.top)) / zoom,
      }
    }

    bounds.current = {
      minX: -rect.width / 2 / zoom,
      maxX: rect.width / 2 / zoom,
      minY: -rect.height / 2 / zoom,
      maxY: rect.height / 2 / zoom,
    }

    const navHeight = (document.querySelector('nav')?.getBoundingClientRect().height ?? 0) / zoom
    const copyRect = toWorld(document.querySelector('[data-hero-copy]'))

    // The top bar is a band pinned to the top of the hero, not the nav's live
    // rect. The nav is fixed, so its rect slides down through the hero as the
    // page scrolls — as a force that sweeps the cluster ahead of it and leaves
    // it permanently squashed against the bottom.
    zones.current = [
      {
        name: 'nav',
        minX: bounds.current.minX,
        maxX: bounds.current.maxX,
        minY: bounds.current.maxY - navHeight,
        maxY: bounds.current.maxY,
      },
      copyRect ? { name: 'copy', ...copyRect } : null,
    ].filter(Boolean)

    // Zones and bounds refresh on every measure. The layout fit below is a
    // different matter: it should only respond to the canvas being resized,
    // never to a routine re-measure.
    const key = `${Math.round(rect.width)}x${Math.round(rect.height)}`
    if (key === fitKey.current) return
    fitKey.current = key

    // Fit the cluster into the space that is genuinely free: right of the copy,
    // below the top bar, inside the hero. Anchoring it flush right instead left
    // a quarter of the cubes inside the copy's keep-out zone, so every load
    // began with them being shoved out of the headline.
    const copy = zones.current.find((zone) => zone.name === 'copy')
    const free = {
      minX: copy ? Math.max(bounds.current.minX, copy.maxX + ZONE_MARGIN) : bounds.current.minX,
      maxX: bounds.current.maxX - EDGE_MARGIN,
      minY: bounds.current.minY + EDGE_MARGIN,
      maxY: bounds.current.maxY - navHeight - ZONE_MARGIN,
    }

    const freeWidth = Math.max(free.maxX - free.minX, 0.5)
    const freeHeight = Math.max(free.maxY - free.minY, 0.5)

    // The slot beside the copy is taller than it is wide, while the cloud is
    // wider than it is tall. Standing it on end costs nothing — swapping x and
    // y of a settled layout preserves the non-overlap, since the cubes are
    // cubes — and buys back a fifth of the on-screen size. Done once, before
    // the first frame, and on the home positions rather than by rotating the
    // wrapper, which would tip every pair of eyes onto its side.
    if (!model.oriented) {
      model.oriented = true
      const wantsPortrait = freeHeight > freeWidth
      const isLandscape = model.span.x > model.span.y
      if (wantsPortrait === isLandscape) {
        model.cubes.forEach((cube) => {
          const swapped = cube.home.x
          cube.home.x = cube.home.y
          cube.home.y = swapped
          cube.group.position.copy(cube.home)
        })
        const spanX = model.span.x
        model.span.x = model.span.y
        model.span.y = spanX
      }
    }

    // Floored: a degenerate measurement should never be able to scale the
    // cluster away to a speck.
    const fit = Math.max(0.35, Math.min(1, freeWidth / model.span.x, freeHeight / model.span.y))
    const centreX = (free.minX + free.maxX) / 2
    const centreY = (free.minY + free.maxY) / 2

    // Only touch the transform when it actually changes, so a periodic
    // re-measure never nudges the cluster.
    const wrapper = model.wrapper
    if (Math.abs(wrapper.scale.x - fit) > 1e-3) wrapper.scale.setScalar(fit)
    if (Math.abs(wrapper.position.x - centreX) > 1e-3) wrapper.position.x = centreX
    if (Math.abs(wrapper.position.y - centreY) > 1e-3) wrapper.position.y = centreY
  }

  useFrame((state, delta) => {
    if (!group.current) return
    const step = Math.min(delta, 1 / 30)
    cameraZoom.current = state.camera.zoom

    // The hero scrolls and the nav is fixed, so the no-go rectangles move.
    // Re-measuring a few times a second keeps layout reads off the hot path.
    frameCount.current += 1
    // Measure before anything is drawn, or the first frames render centred and
    // then jump once the zones arrive. After that a few times a second is
    // plenty, and keeps layout reads off the hot path.
    if (frameCount.current === 1 || frameCount.current % 12 === 0) measureZones()

    const held = drag.current.cube

    // A gentle sway rather than a full spin: cubes now hold meaningful screen
    // positions, and a continuous turn would drag them through the copy.
    const t = state.clock.elapsedTime
    group.current.rotation.y = Math.sin(t * 0.12) * 0.3 + pointer.current.x * 0.12
    group.current.rotation.x = 0.22 + pointer.current.y * 0.1
    group.current.position.y = Math.sin(t * 0.4) * 0.06

    const wrapper = model.wrapper
    const worldQuaternion = wrapper.getWorldQuaternion(scratch.quaternion)
    const worldScale = wrapper.getWorldScale(scratch.scale)
    const inverse = worldQuaternion.clone().invert()

    for (const cube of model.cubes) {
      const { group: holder, home, velocity } = cube

      if (held === cube) {
        const cursor = scratch.cursor.set(state.pointer.x, state.pointer.y, 0).unproject(state.camera)
        const point = scratch.point.set(cursor.x, cursor.y, drag.current.depth)
        wrapper.worldToLocal(point)
        holder.position.lerp(point, 1 - Math.exp(-30 * step))
        velocity.set(0, 0, 0)
        continue
      }

      const world = scratch.world.copy(holder.position)
      wrapper.localToWorld(world)
      const force = scratch.force.set(0, 0, 0)

      // Keep-out zones: resistance grows the further in a cube gets, so it feels
      // like pushing against something rather than hitting a wall.
      for (const zone of zones.current) {
        const overlapX = Math.min(world.x - (zone.minX - ZONE_MARGIN), zone.maxX + ZONE_MARGIN - world.x)
        const overlapY = Math.min(world.y - (zone.minY - ZONE_MARGIN), zone.maxY + ZONE_MARGIN - world.y)
        if (overlapX <= 0 || overlapY <= 0) continue

        // Push out the short way.
        if (overlapX < overlapY) {
          const toLeft = world.x < (zone.minX + zone.maxX) / 2
          force.x += (toLeft ? -1 : 1) * overlapX * ZONE_FORCE
        } else {
          const toBottom = world.y < (zone.minY + zone.maxY) / 2
          force.y += (toBottom ? -1 : 1) * overlapY * ZONE_FORCE
        }

        // Deep inside a zone, being nudged is not enough — go home.
        if (overlapX > ZONE_MARGIN * 1.5 && overlapY > ZONE_MARGIN * 1.5) cube.returning = true
      }

      // Stay inside the hero.
      const edge = bounds.current
      if (world.x < edge.minX + EDGE_MARGIN) force.x += (edge.minX + EDGE_MARGIN - world.x) * EDGE_FORCE
      if (world.x > edge.maxX - EDGE_MARGIN) force.x -= (world.x - (edge.maxX - EDGE_MARGIN)) * EDGE_FORCE
      if (world.y < edge.minY + EDGE_MARGIN) force.y += (edge.minY + EDGE_MARGIN - world.y) * EDGE_FORCE
      if (world.y > edge.maxY - EDGE_MARGIN) force.y -= (world.y - (edge.maxY - EDGE_MARGIN)) * EDGE_FORCE

      // World-space forces into the cube's own space.
      force.applyQuaternion(inverse).divide(worldScale)

      if (cube.returning) {
        force.addScaledVector(scratch.point.copy(home).sub(holder.position), RETURN_STIFFNESS)
      }

      velocity.addScaledVector(force, step)
      velocity.multiplyScalar(Math.exp(-DAMPING * step))
      holder.position.addScaledVector(velocity, step)

      if (cube.returning && holder.position.distanceToSquared(home) < 0.0004 && velocity.lengthSq() < 0.0004) {
        holder.position.copy(home)
        velocity.set(0, 0, 0)
        cube.returning = false
      }
    }

    // Googly eyes. The cursor sits on the z=0 plane in world space; each pupil
    // springs toward it rather than snapping, which is what makes it read as a
    // loose googly eye instead of a painted-on dot.
    const gaze = scratch.cursor.set(state.pointer.x, state.pointer.y, 0).unproject(state.camera)
    for (const cube of model.cubes) {
      const eyeWorld = scratch.world.copy(cube.group.position)
      wrapper.localToWorld(eyeWorld)

      for (const eye of cube.eyes) {
        // Offset each eye by its own socket so the two disagree slightly when
        // the cursor is close — that tiny cross-eye is most of the charm.
        const socket = scratch.point
          .set(eye.sclera.position.x, eye.sclera.position.y, 0)
          .applyQuaternion(worldQuaternion)
          .multiply(worldScale)

        const dx = gaze.x - (eyeWorld.x + socket.x)
        const dy = gaze.y - (eyeWorld.y + socket.y)
        const length = Math.hypot(dx, dy) || 1

        // Direction is a world heading; the pupil moves in the sclera's plane.
        const aim = scratch.force
          .set(dx / length, dy / length, 0)
          .applyQuaternion(inverse)

        const targetX = aim.x * PUPIL_TRAVEL
        const targetY = aim.y * PUPIL_TRAVEL

        eye.velocity.x += (targetX - eye.offset.x) * EYE_STIFFNESS * step
        eye.velocity.y += (targetY - eye.offset.y) * EYE_STIFFNESS * step
        eye.velocity.multiplyScalar(Math.exp(-EYE_DAMPING * step))
        eye.offset.x += eye.velocity.x * step
        eye.offset.y += eye.velocity.y * step
        eye.pupil.position.x = eye.offset.x
        eye.pupil.position.y = eye.offset.y
      }
    }

    // A dropped cube stays where it was left, so overlaps have to be resolved
    // continuously rather than only at load.
    separate(model.cubes, CUBE_SIZE, 1, held)

  })

  const endDrag = (event) => {
    const cube = drag.current.cube
    if (!cube) return
    drag.current.cube = null
    const node = event?.nativeEvent?.target ?? event?.target
    node?.releasePointerCapture?.(event?.pointerId)
    document.body.style.cursor = ''

    // Left somewhere it is not allowed to be? Send it home.
    const world = cube.group.getWorldPosition(new THREE.Vector3())
    const banned = zones.current.some(
      (zone) =>
        world.x > zone.minX - ZONE_MARGIN &&
        world.x < zone.maxX + ZONE_MARGIN &&
        world.y > zone.minY - ZONE_MARGIN &&
        world.y < zone.maxY + ZONE_MARGIN
    )
    if (banned) cube.returning = true
  }

  return (
    <group
      ref={group}
      onPointerDown={(event) => {
        event.stopPropagation()
        const cube = event.object.userData.cube ?? event.object.parent?.userData?.cube
        if (!cube) return
        drag.current.cube = cube
        cube.returning = false
        // Remember the grab depth so the cube slides in its own plane rather
        // than flying toward the camera.
        drag.current.depth = cube.group.getWorldPosition(scratch.point).z
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

export default function HeroScene({ onContextLost }) {
  const pointer = useRef({ x: 0, y: 0 })

  useEffect(() => {
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
      gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      dpr={[1, 1.75]}
      style={{ background: 'transparent' }}
      onCreated={({ gl }) => {
        // preventDefault marks the loss as recoverable; the parent then rebuilds
        // this canvas from scratch, which is what actually gets pixels back.
        gl.domElement.addEventListener('webglcontextlost', (event) => {
          event.preventDefault()
          onContextLost?.()
        })
      }}
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
