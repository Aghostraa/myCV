import { Component, Suspense, lazy, useCallback, useRef, useState } from 'react'
import { useReducedMotion } from '../motion/primitives'

// three.js plus the loader is a large dependency and this is decoration, not
// content — keep it out of the main bundle so it never delays the hero copy.
const HeroScene = lazy(() => import('./HeroScene.jsx'))

/**
 * WebGL can fail for reasons that have nothing to do with us: no GPU, a blocked
 * context, a driver that refuses. None of that should take the hero down, so a
 * failure here just renders nothing.
 */
class SceneBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { failed: false }
  }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  render() {
    return this.state.failed ? null : this.props.children
  }
}

export default function HeroVisual() {
  const reduce = useReducedMotion()
  const [generation, setGeneration] = useState(0)
  const attempts = useRef(0)

  /*
   * A lost WebGL context leaves a live canvas drawing nothing — the scene just
   * disappears. React's StrictMode provokes exactly this in development: it
   * mounts, unmounts and remounts, and the unmount has r3f dispose the renderer
   * and force the context loss, which the remount then inherits. Real GPUs do
   * the same thing for their own reasons (driver resets, tab eviction).
   *
   * Rebuilding under a fresh key gets a brand new canvas and context. Capped,
   * because retrying forever against a GPU that keeps failing would be worse
   * than showing nothing.
   */
  const handleContextLost = useCallback(() => {
    if (attempts.current >= 3) return
    attempts.current += 1
    setGeneration((value) => value + 1)
  }, [])

  // A continuously rotating cluster is exactly what prefers-reduced-motion asks
  // us not to autoplay.
  if (reduce) return null

  return (
    // Spans the whole hero so cubes can be dragged anywhere in it, sitting
    // above the backdrop and below the copy. Pointer events stay on; the copy
    // column above re-enables its own, so the CTAs still take clicks. Still
    // aria-hidden: dragging cubes is play, not function, and exposes nothing.
    <div
      aria-hidden="true"
      className="absolute inset-0 z-[5] hidden select-none lg:block"
    >
      <SceneBoundary>
        <Suspense fallback={null}>
          <HeroScene key={generation} onContextLost={handleContextLost} />
        </Suspense>
      </SceneBoundary>
    </div>
  )
}
