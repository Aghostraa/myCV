import { useEffect, useRef } from 'react'
import { AnimatePresence } from 'motion/react'
import { X, Check, Github, ArrowUpRight, Trophy } from 'lucide-react'
import { motion, EASE, useReducedMotion } from '../motion/primitives'

/**
 * Case study dialog. Keeping the long-form content here rather than expanding it
 * inside the card is what lets the catalogue grid stay perfectly uniform.
 * Handles Esc, scroll lock, focus move-in and restore.
 */
export default function ProjectModal({ project, onClose, language = 'en' }) {
  const reduce = useReducedMotion()
  const panelRef = useRef(null)
  const lastFocused = useRef(null)

  useEffect(() => {
    if (!project) return undefined

    lastFocused.current = document.activeElement
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'

    function onKeyDown(event) {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key !== 'Tab' || !panelRef.current) return
      const focusable = panelRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    const focusTimer = window.setTimeout(() => panelRef.current?.focus(), 0)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      window.clearTimeout(focusTimer)
      document.body.style.overflow = overflow
      lastFocused.current?.focus?.()
    }
  }, [project, onClose])

  const links = project?.links ?? {}

  return (
    <AnimatePresence>
      {project ? (
        <div className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6">
          <motion.div
            className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            tabIndex={-1}
            layout={false}
            initial={{ opacity: 0, y: reduce ? 0 : 24, scale: reduce ? 1 : 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: reduce ? 0 : 16, scale: reduce ? 1 : 0.98 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-2xl bg-white shadow-2xl outline-none sm:rounded-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label={language === 'de' ? 'Schließen' : 'Close'}
              className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-neutral-700 shadow-sm backdrop-blur transition-colors duration-150 hover:bg-white hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <X size={18} />
            </button>

            <div className="aspect-video w-full shrink-0 overflow-hidden bg-neutral-100">
              <img src={project.media?.image} alt="" className="h-full w-full object-cover" />
            </div>

            <div className="overflow-y-auto p-6 md:p-8">
              <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">
                {project.category} · {project.year}
              </div>
              <h2
                id="project-modal-title"
                className="font-display text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl"
              >
                {project.title}
              </h2>

              <div className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <Trophy size={13} />
                {project.tagline}
              </div>

              <p className="mt-5 text-base leading-relaxed text-neutral-700">{project.description}</p>
              <p className="mt-4 text-sm leading-relaxed text-neutral-600">{project.caseStudy.summary}</p>

              <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-neutral-500">
                {language === 'de' ? 'Was gebaut wurde' : 'What was built'}
              </h3>
              <ul className="mt-3 space-y-2">
                {project.caseStudy.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-neutral-600">
                    <Check size={15} className="mt-0.5 shrink-0 text-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-neutral-500">
                {language === 'de' ? 'Stack' : 'Stack'}
              </h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs font-medium text-neutral-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {links.code || links.live ? (
                <div className="mt-7 flex flex-wrap items-center gap-4 border-t border-neutral-100 pt-5">
                  {links.code ? (
                    <a
                      href={links.code}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-1.5 rounded text-sm font-semibold text-neutral-700 transition-colors duration-150 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      <Github size={16} />
                      {language === 'de' ? 'Code ansehen' : 'View code'}
                    </a>
                  ) : null}
                  {links.live ? (
                    <a
                      href={links.live}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-1.5 rounded text-sm font-semibold text-primary transition-colors duration-150 hover:text-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      {language === 'de' ? 'Live ansehen' : 'View live'}
                      <ArrowUpRight size={16} />
                    </a>
                  ) : null}
                </div>
              ) : null}
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  )
}
