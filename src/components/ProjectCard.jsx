import { useState } from 'react'
import { AnimatePresence } from 'motion/react'
import { Trophy, Check, ChevronDown, Github, ArrowUpRight } from 'lucide-react'
import { motion, Pressable, EASE, useReducedMotion } from './motion/primitives'

export default function ProjectCard({
  title,
  category = '',
  tagline = '',
  description,
  fullDescription = '',
  technologies = [],
  features = [],
  bgImage = '',
  bgVideo = '',
  liveLink = '',
  codeLink = '',
  icon: Icon = null,
  featured = false,
  language = 'en',
}) {
  const [expanded, setExpanded] = useState(false)
  const reduce = useReducedMotion()
  const hasCaseStudy = Boolean(fullDescription || (features && features.length))

  return (
    <motion.article
      layout
      className={`project-card group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-shadow duration-200 hover:shadow-lg ${featured ? 'lg:grid lg:grid-cols-5 lg:items-stretch' : ''}`}
    >
      {/* Image */}
      {bgImage ? (
        <div
          className={`relative overflow-hidden bg-neutral-100 ${featured ? 'h-56 lg:h-auto lg:col-span-2' : 'h-44'}`}
        >
          <img
            src={bgImage}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover grayscale-[15%] transition-all duration-300 ease-out group-hover:grayscale-0 group-hover:scale-[1.03]"
          />
          {/* ambient loop for the featured card; the still above serves reduced-motion users */}
          {bgVideo && !reduce ? (
            <video
              src={bgVideo}
              poster={bgImage}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/10 to-transparent"></div>
        </div>
      ) : null}

      {/* Content */}
      <div className={`flex flex-1 flex-col ${featured ? 'p-6 md:p-8 lg:p-10 lg:col-span-3' : 'p-6 md:p-8'}`}>
        {/* Eyebrow: category */}
        <div className="mb-3 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-neutral-500">
          {Icon ? <Icon size={14} className="text-neutral-400" /> : null}
          {category}
        </div>

        {/* Title */}
        <h3
          className={`font-display font-semibold tracking-tight text-neutral-900 leading-snug ${featured ? 'text-2xl md:text-3xl mb-3' : 'text-xl mb-2'}`}
        >
          {title}
        </h3>

        {/* Meta line: achievement / outcome badge */}
        {tagline ? (
          <div
            className={`mb-4 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${featured ? 'bg-primary/10 text-primary' : 'bg-neutral-100 text-neutral-700'}`}
          >
            <Trophy size={13} />
            {tagline}
          </div>
        ) : null}

        {/* Body */}
        <p className={`text-base leading-relaxed text-neutral-600 ${featured ? '' : 'text-sm'}`}>
          {description}
        </p>

        {/* Expandable case study */}
        <AnimatePresence initial={false}>
          {expanded ? (
            <motion.div
              key="case-study"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-neutral-100 mt-4">
                <p className="text-sm leading-relaxed text-neutral-600 mb-4">{fullDescription}</p>
                <ul className="space-y-2">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                      <Check size={15} className="mt-0.5 shrink-0 text-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        {hasCaseStudy ? (
          <button
            type="button"
            className="mt-4 inline-flex w-fit items-center gap-1 text-sm font-semibold text-neutral-700 transition-colors duration-150 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded"
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? (language === 'de' ? 'Weniger' : 'Show less') : (language === 'de' ? 'Case Study lesen' : 'Read case study')}
            <ChevronDown size={15} className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} />
          </button>
        ) : null}

        {/* Footer: tags + links */}
        <div className="mt-auto pt-6 flex flex-wrap items-end justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {technologies.map((tech, i) => (
              <span
                key={i}
                className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs font-medium text-neutral-600"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 shrink-0">
            {codeLink ? (
              <Pressable
                as="a"
                href={codeLink}
                target="_blank"
                rel="noopener"
                lift={1.05}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-600 transition-colors duration-150 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded"
              >
                <Github size={16} />
                {language === 'de' ? 'Code' : 'Code'}
              </Pressable>
            ) : null}
            {liveLink ? (
              <Pressable
                as="a"
                href={liveLink}
                target="_blank"
                rel="noopener"
                lift={1.05}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors duration-150 hover:text-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded"
              >
                {language === 'de' ? 'Live ansehen' : 'View live'}
                <ArrowUpRight size={16} className="transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Pressable>
            ) : null}
          </div>
        </div>
      </div>
    </motion.article>
  )
}
