import { motion, useReducedMotion } from 'motion/react'

/*
 * Standardized motion primitives for the whole site.
 * All scroll entrances, staggers, and pressable feedback go through these
 * so every section animates with the same timing, easing, and reduced-motion
 * behavior. Every primitive is layout-aware (`layout` prop) so elements
 * animate smoothly when surrounding content reflows (e.g. expanding cards).
 */

export const EASE = [0.22, 1, 0.36, 1]

const tagCache = {}
function motionTag(as) {
  if (!tagCache[as]) tagCache[as] = motion.create(as)
  return tagCache[as]
}

/** Scroll-triggered fade + rise for a single block. */
export function Reveal({
  as = 'div',
  delay = 0,
  y = 20,
  once = true,
  amount = 0.2,
  duration = 0.45,
  layout = true,
  children,
  ...rest
}) {
  const reduce = useReducedMotion()
  const Tag = motionTag(as)
  return (
    <Tag
      layout={layout}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/**
 * Staggered reveal group. Wrap siblings in <StaggerItem>.
 * <Stagger className="grid ...">
 *   {items.map(i => <StaggerItem key={i.id}>…</StaggerItem>)}
 * </Stagger>
 *
 * Key children on a STABLE id, never on a translated string. With `once`, the
 * viewport observer disconnects after the group has animated in, so a child
 * that remounts later inherits `initial="hidden"` with nothing left to move it
 * to "show" — it mounts at opacity 0 and stays invisible. Changing the language
 * is exactly that: new keys, full remount, cards gone.
 */
export function Stagger({
  as = 'div',
  stagger = 0.08,
  once = true,
  amount = 0.2,
  children,
  ...rest
}) {
  const Tag = motionTag(as)
  return (
    <Tag
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function StaggerItem({ as = 'div', y = 20, layout = true, children, ...rest }) {
  const reduce = useReducedMotion()
  const Tag = motionTag(as)
  return (
    <Tag
      layout={layout}
      variants={{
        hidden: { opacity: 0, y: reduce ? 0 : y },
        show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
      }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/**
 * Interactive wrapper for buttons/links: subtle lift on hover, press feedback.
 * Renders a motion element; pass `as="a"` (default) or `as="button"`.
 */
export function Pressable({ as = 'a', lift = 1.02, children, ...rest }) {
  const reduce = useReducedMotion()
  const Tag = motionTag(as)
  return (
    <Tag
      whileHover={reduce ? undefined : { scale: lift }}
      whileTap={reduce ? undefined : { scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export { motion, useReducedMotion }
