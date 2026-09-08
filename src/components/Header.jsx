import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, useScroll, useTransform, useMotionTemplate } from 'motion/react'
import { Menu, X, ArrowRight, MapPin, BadgeCheck, Trophy, FileText } from 'lucide-react'
import { motion, useReducedMotion, Pressable, EASE } from './motion/primitives'

const navLinks = [
  { href: '#services', label: { en: 'Services', de: 'Leistungen' } },
  { href: '#method', label: { en: 'How I work', de: 'Arbeitsweise' } },
  { href: '#projects', label: { en: 'Work', de: 'Arbeiten' } },
  { href: '#writing', label: { en: 'Writing', de: 'Blog' } },
  { href: '#contact', label: { en: 'Contact', de: 'Kontakt' } },
]

function LangToggle({ language, onUpdateLanguage }) {
  return (
    <div
      className="inline-flex items-center rounded-full border border-white/15 bg-white/5 p-0.5"
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        className={`border-none bg-transparent text-[0.75rem] font-bold tracking-[0.03em] px-[0.7rem] py-[0.35rem] rounded-full cursor-pointer transition-colors duration-150 ease-out ${
          language === 'en' ? 'bg-white text-ink' : 'text-neutral-300/80'
        }`}
        onClick={() => onUpdateLanguage('en')}
      >
        EN
      </button>
      <button
        type="button"
        className={`border-none bg-transparent text-[0.75rem] font-bold tracking-[0.03em] px-[0.7rem] py-[0.35rem] rounded-full cursor-pointer transition-colors duration-150 ease-out ${
          language === 'de' ? 'bg-white text-ink' : 'text-neutral-300/80'
        }`}
        onClick={() => onUpdateLanguage('de')}
      >
        DE
      </button>
    </div>
  )
}

export default function Header({ language = 'en', onUpdateLanguage }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const reduce = useReducedMotion()
  const heroRef = useRef(null)

  /*
   * Scroll-zoom hero: as the hero leaves the viewport the backdrop pushes in,
   * blurs out and fades to the ink background while the copy lifts away.
   * Progress is measured across the hero's own scroll range, so the effect
   * completes exactly as the section clears the top of the screen.
   */
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  // One transform set on the wrapper — filtering each layer separately would
  // blur the image and the video independently and cost a lot more per frame.
  // The zoom and blur are front-loaded and the fade is held back: fading early
  // flattens the backdrop to solid ink before the push-in ever reads.
  const backdropScale = useTransform(scrollYProgress, [0, 1], [1, 1.4])
  const backdropBlurPx = useTransform(scrollYProgress, [0, 0.8], [0, 16])
  const backdropFilter = useMotionTemplate`blur(${backdropBlurPx}px)`
  const backdropOpacity = useTransform(scrollYProgress, [0.35, 1], [1, 0])

  // Copy stays fully legible while the hero owns the screen, then leaves.
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const contentOpacity = useTransform(scrollYProgress, [0.3, 0.9], [1, 0])

  // Reduced motion keeps the hero exactly as it renders at rest.
  const backdropStyle = reduce
    ? undefined
    : { scale: backdropScale, filter: backdropFilter, opacity: backdropOpacity }
  const contentStyle = reduce ? undefined : { y: contentY, opacity: contentOpacity }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.7)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header>
      {/* Sticky nav */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
          scrolled ? 'bg-ink/90 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#top" className="font-display text-lg font-semibold tracking-tight text-white">
              Ahoura Azarbin
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-neutral-300 hover:text-white transition-colors duration-150"
                >
                  {link.label[language]}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <Link
                to="/cv"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/25 px-4 py-2 text-sm font-medium text-neutral-200 transition-colors duration-150 hover:border-white/50 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <FileText size={15} />
                {language === 'de' ? 'Lebenslauf' : 'CV'}
              </Link>

              <LangToggle language={language} onUpdateLanguage={onUpdateLanguage} />

              <Pressable
                as="a"
                href="#contact"
                className="inline-flex items-center rounded-full bg-primary hover:bg-primary-hover text-primary-fg text-sm font-semibold px-5 py-2.5 transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {language === 'de' ? 'Projekt starten' : 'Start a project'}
              </Pressable>
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-white hover:bg-white/10 transition-colors duration-150"
              aria-expanded={mobileOpen}
              aria-label="Toggle menu"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="md:hidden bg-ink/95 backdrop-blur-md border-t border-white/10 overflow-hidden"
            >
              <div className="px-6 py-6 space-y-6">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-base font-medium text-neutral-200 hover:text-white transition-colors duration-150"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label[language]}
                    </a>
                  ))}
                  <Link
                    to="/cv"
                    className="inline-flex items-center gap-1.5 text-base font-medium text-neutral-200 transition-colors duration-150 hover:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    <FileText size={16} />
                    {language === 'de' ? 'Lebenslauf' : 'CV'}
                  </Link>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <LangToggle language={language} onUpdateLanguage={onUpdateLanguage} />

                  <a
                    href="#contact"
                    className="inline-flex items-center rounded-full bg-primary hover:bg-primary-hover text-primary-fg text-sm font-semibold px-5 py-2.5 transition-colors duration-150 active:scale-[0.97]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {language === 'de' ? 'Projekt starten' : 'Start a project'}
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero */}
      <div
        id="top"
        ref={heroRef}
        className="relative overflow-hidden bg-ink text-white pt-32 pb-20 md:pt-44 md:pb-28"
      >
        {/* generated ambient backdrop — scales, blurs and fades on scroll */}
        <motion.div
          className="pointer-events-none absolute inset-0 will-change-[transform,filter,opacity]"
          style={backdropStyle}
        >
          <img
            src="/images/generated/hero-bg.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          {/* seamless ambient loop (starts and ends on the still frame above);
              skipped entirely under prefers-reduced-motion */}
          {!reduce && (
            <video
              src="/videos/hero-loop.mp4"
              poster="/images/generated/hero-bg.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
          )}
          {/* scrim: keeps text contrast over the image */}
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink" />
        </motion.div>

        {/* subtle backdrop accents — slow breathing animation */}
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary blur-3xl"
            initial={{ opacity: 0.07 }}
            animate={
              reduce
                ? { opacity: 0.07 }
                : { scale: [1, 1.08, 1], opacity: [0.07, 0.1, 0.07] }
            }
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-accent blur-3xl"
            initial={{ opacity: 0.07 }}
            animate={
              reduce
                ? { opacity: 0.07 }
                : { scale: [1, 1.08, 1], opacity: [0.07, 0.1, 0.07] }
            }
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <motion.div className="container mx-auto px-6 relative z-10" style={contentStyle}>
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: reduce ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-neutral-300 uppercase mb-6"
              >
                {language === 'de' ? 'KI-Automatisierung & Software-Studio' : 'AI Automation & Software Studio'}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: reduce ? 0 : 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08, ease: EASE }}
                className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
              >
                {language === 'de' ? (
                  <>
                    KI-Automatisierung und Software, die sich <span className="text-primary">selbst bezahlt</span>.
                  </>
                ) : (
                  <>
                    AI automation and software that <span className="text-primary">pays for itself</span>.
                  </>
                )}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: reduce ? 0 : 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.16, ease: EASE }}
                className="text-lg md:text-xl leading-relaxed text-neutral-300 mb-10 max-w-xl"
              >
                {language === 'de'
                  ? 'Ich helfe kleinen und mittleren Unternehmen, manuelle Arbeit mit KI-Agenten, RAG-Systemen und maßgeschneiderten Tools zu reduzieren – vom ersten Audit bis zum Produktivbetrieb.'
                  : 'I help small and mid-sized businesses cut manual work with AI agents, RAG systems, and custom tools — from first audit to running in production.'}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: reduce ? 0 : 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.24, ease: EASE }}
                className="flex flex-wrap gap-4 mb-10"
              >
                <Pressable
                  as="a"
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primary-hover text-primary-fg font-semibold px-6 py-3.5 transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {language === 'de' ? 'Projekt starten' : 'Start a project'}
                  <ArrowRight size={18} />
                </Pressable>
                <Pressable
                  as="a"
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 hover:border-white/50 hover:bg-white/5 text-white font-semibold px-6 py-3.5 transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {language === 'de' ? 'Meine Arbeit' : 'See my work'}
                </Pressable>
              </motion.div>

              {/* Credibility meta row */}
              <motion.div
                initial={{ opacity: 0, y: reduce ? 0 : 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.32, ease: EASE }}
                className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-neutral-400"
              >
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={15} className="text-neutral-500" />
                  {language === 'de' ? 'Aachen, Deutschland' : 'Based in Aachen, Germany'}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <BadgeCheck size={15} className="text-neutral-500" />
                  {language === 'de' ? 'Ethereum Foundation-gefördert' : 'Ethereum Foundation–funded work'}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Trophy size={15} className="text-neutral-500" />
                  {language === 'de' ? 'ETH Global Open Agents Gewinner' : 'ETH Global Open Agents winner'}
                </span>
              </motion.div>
            </div>

          </div>
        </motion.div>
      </div>
    </header>
  )
}
