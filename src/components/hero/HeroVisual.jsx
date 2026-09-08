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
    // Pointer events stay on so the cubes are draggable. Safe here because the
    // visual owns the hero's right column and no CTA sits underneath it. Still
    // aria-hidden: dragging cubes is play, not function, and exposes nothing.
    <div
      aria-hidden="true"
      className="relative hidden h-[420px] w-full select-none lg:block xl:h-[500px]"
    >
      <SceneBoundary>
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </SceneBoundary>
    </div>
  )
}
