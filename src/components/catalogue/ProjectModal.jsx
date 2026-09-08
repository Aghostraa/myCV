import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, useScroll, useTransform, useMotionTemplate } from 'motion/react'
import { X, Check, Github, ArrowUpRight, Trophy, Link2 } from 'lucide-react'
import { motion, EASE, useReducedMotion } from '../motion/primitives'

/**
 * A wide, shallow chevron — deliberately not lucide's ChevronDown, which is
 * square and reads as a control. This one spans the media like a hint.
 */
function WideChevron() {
  return (
    <svg viewBox="0 0 140 26" fill="none" className="h-5 w-28 md:w-36" aria-hidden="true">
      <path
        d="M6 6 L70 20 L134 6"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/**
 * Case study dialog. Keeping the long-form content here rather than expanding it
 * inside the card is what lets the catalogue grid stay perfectly uniform.
 *
 * The media is pinned behind the content: as you scroll, it blurs and dims while
 * the text sheet rides up over it, so the reading area grows without the image
 * ever jumping. A wide chevron hints that there is more below.
 * Handles Esc, scroll lock, focus move-in and restore.
 */
export default function ProjectModal({ project, onClose, language = 'en' }) {
  const reduce = useReducedMotion()
  const panelRef = useRef(null)
  const scrollRef = useRef(null)
  const lastFocused = useRef(null)
  const [copied, setCopied] = useState(false)

  // Progress across the first stretch of scrolling — the media has fully
  // receded well before the reader reaches the end of a long case study.
  const { scrollYProgress } = useScroll({ container: scrollRef, offset: ['start start', '340px start'] })

  const mediaBlurPx = useTransform(scrollYProgress, [0, 1], [0, 12])
  const mediaFilter = useMotionTemplate`blur(${mediaBlurPx}px)`
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, 1.12])
  const mediaOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.25])
  const hintOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0])

  const mediaStyle = reduce
    ? undefined
    : { filter: mediaFilter, scale: mediaScale, opacity: mediaOpacity }

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

  // Reset the copied confirmation when moving between case studies
  useEffect(() => setCopied(false), [project])

  const links = project?.links ?? {}
  const TaglineIcon = project?.taglineIcon ?? Trophy

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard blocked (insecure context, denied permission) — the URL bar
      // still carries the shareable link, so fail quietly
    }
  }

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
            className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-2xl bg-ink shadow-2xl outline-none sm:rounded-2xl"
          >
            <div className="absolute right-4 top-4 z-20 flex items-center gap-2">
              <button
                type="button"
                onClick={copyLink}
                aria-label={language === 'de' ? 'Link kopieren' : 'Copy link'}
                className="inline-flex h-9 items-center gap-1.5 rounded-full bg-white/90 px-3 text-xs font-semibold text-neutral-700 shadow-sm backdrop-blur transition-colors duration-150 hover:bg-white hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <Link2 size={14} />
                {copied
                  ? language === 'de' ? 'Kopiert' : 'Copied'
                  : language === 'de' ? 'Link' : 'Link'}
              </button>
              <button
                type="button"
                onClick={onClose}
                aria-label={language === 'de' ? 'Schließen' : 'Close'}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-neutral-700 shadow-sm backdrop-blur transition-colors duration-150 hover:bg-white hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <X size={18} />
              </button>
            </div>

            <div ref={scrollRef} className="relative overflow-y-auto overscroll-contain">
              {/* Pinned media: stays put while the sheet below rides up over it */}
              <div className="sticky top-0 z-0 h-56 w-full overflow-hidden bg-ink md:h-72">
                <motion.img
                  src={project.media?.image}
                  alt=""
                  style={mediaStyle}
                  className="h-full w-full object-cover will-change-[transform,filter,opacity]"
                />

                {/* Scrim: these hero renders are light, so the hint needs
                    something to sit against to stay legible on every card */}
                <motion.div
                  style={reduce ? undefined : { opacity: hintOpacity }}
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/55 to-transparent"
                />

                {/* Wide chevron: hints that the sheet moves, fades once it does.
                    Sits clear of the sheet, which overlaps the media's bottom 24px. */}
                <motion.div
                  style={reduce ? undefined : { opacity: hintOpacity }}
                  className="pointer-events-none absolute inset-x-0 bottom-10 flex justify-center text-white/75 drop-shadow"
                >
                  <motion.div
                    animate={reduce ? undefined : { y: [0, 5, 0] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <WideChevron />
                  </motion.div>
                </motion.div>
              </div>

              {/* Content sheet */}
              <div className="relative z-10 -mt-6 rounded-t-2xl bg-white p-6 md:p-8">
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
                  <TaglineIcon size={13} />
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
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  )
}
