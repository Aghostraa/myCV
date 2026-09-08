import { Component, Suspense, lazy } from 'react'
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
          <HeroScene />
        </Suspense>
      </SceneBoundary>
    </div>
  )
}
