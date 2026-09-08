import { Trophy, Github, ArrowUpRight, Flame } from 'lucide-react'
import { motion, Pressable, useReducedMotion } from '../motion/primitives'

/**
 * One catalogue card. Geometry is fixed on purpose so every card in the grid is
 * the same height: 16:9 media, clamped description, capped tag row, footer
 * pinned to the bottom. The case study lives in a modal rather than expanding
 * inline — inline expansion is what used to break the grid.
 */
export default function ProjectCard({ project, onOpen, language = 'en' }) {
  const reduce = useReducedMotion()
  const Icon = project.icon
  const { links = {}, media = {} } = project
  const isBuilding = project.status === 'building'

  const visibleTags = project.stack.slice(0, 4)
  const overflowCount = project.stack.length - visibleTags.length

  return (
    <article className="project-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-shadow duration-200 hover:shadow-lg">
      {/* Media — fixed aspect ratio keeps every card identical */}
      <button
        type="button"
        onClick={() => onOpen(project)}
        aria-label={
          language === 'de' ? `Case Study öffnen: ${project.title}` : `Open case study: ${project.title}`
        }
        className="relative block aspect-video w-full overflow-hidden bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary"
      >
        <img
          src={media.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover grayscale-[15%] transition-all duration-300 ease-out group-hover:grayscale-0 group-hover:scale-[1.03]"
        />
        {media.video && !reduce ? (
          <video
            src={media.video}
            poster={media.image}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/10 to-transparent" />

        {/* Status pill — the only thing that visually distinguishes an
            in-progress project from a shipped one */}
        {isBuilding ? (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-ink/90 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            <Flame size={12} className="text-primary" />
            {project.statusLabel}
          </span>
        ) : null}
      </button>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-neutral-500">
          {Icon ? <Icon size={14} className="text-neutral-400" /> : null}
          <span className="truncate">{project.category}</span>
        </div>

        {/* Fixed two-line title box so the block below always starts at the same y */}
        <h3 className="font-display text-xl font-semibold leading-snug tracking-tight text-neutral-900 line-clamp-2 min-h-[3.5rem]">
          {project.title}
        </h3>

        <div className="mt-2 mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-700">
          <Trophy size={13} />
          <span className="truncate max-w-[16rem]">{project.tagline}</span>
        </div>

        <p className="text-sm leading-relaxed text-neutral-600 line-clamp-3">{project.description}</p>

        <button
          type="button"
          onClick={() => onOpen(project)}
          className="mt-4 inline-flex w-fit items-center gap-1 rounded text-sm font-semibold text-neutral-700 transition-colors duration-150 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          {language === 'de' ? 'Case Study lesen' : 'Read case study'}
          <ArrowUpRight size={15} />
        </button>

        {/* Footer pinned to the bottom — equal-height cards land their links on the same line.
            The tag row is height-locked to two rows so cards match across grid rows too. */}
        <div className="mt-auto pt-5">
          <div className="flex min-h-[3.75rem] flex-wrap content-start gap-1.5">
            {visibleTags.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs font-medium text-neutral-600"
              >
                {tech}
              </span>
            ))}
            {overflowCount > 0 ? (
              <span className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs font-medium text-neutral-500">
                +{overflowCount}
              </span>
            ) : null}
          </div>

          <div className="mt-4 flex h-6 items-center gap-4 border-t border-neutral-100 pt-4">
            {links.code ? (
              <Pressable
                as="a"
                href={links.code}
                target="_blank"
                rel="noopener"
                lift={1.05}
                className="inline-flex items-center gap-1.5 rounded text-sm font-semibold text-neutral-600 transition-colors duration-150 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <Github size={16} />
                Code
              </Pressable>
            ) : null}
            {links.live ? (
              <Pressable
                as="a"
                href={links.live}
                target="_blank"
                rel="noopener"
                lift={1.05}
                className="inline-flex items-center gap-1.5 rounded text-sm font-semibold text-primary transition-colors duration-150 hover:text-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {language === 'de' ? 'Live ansehen' : 'View live'}
                <ArrowUpRight size={16} />
              </Pressable>
            ) : null}
            {!links.code && !links.live ? (
              <span className="text-sm font-medium text-neutral-400">
                {language === 'de' ? 'Noch nicht öffentlich' : 'Not public yet'}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  )
}

/** Wide variant for the single featured project above the grid. */
export function FeaturedProjectCard({ project, onOpen, language = 'en' }) {
  const reduce = useReducedMotion()
  const Icon = project.icon
  const { links = {}, media = {} } = project

  return (
    <article className="project-card group relative grid overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-shadow duration-200 hover:shadow-lg lg:grid-cols-5">
      <button
        type="button"
        onClick={() => onOpen(project)}
        aria-label={
          language === 'de' ? `Case Study öffnen: ${project.title}` : `Open case study: ${project.title}`
        }
        className="relative block aspect-video w-full overflow-hidden bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary lg:col-span-2 lg:aspect-auto lg:h-full"
      >
        <img
          src={media.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover grayscale-[15%] transition-all duration-300 ease-out group-hover:grayscale-0 group-hover:scale-[1.03]"
        />
        {media.video && !reduce ? (
          <video
            src={media.video}
            poster={media.image}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/10 to-transparent" />
      </button>

      <div className="flex flex-col p-6 md:p-8 lg:col-span-3 lg:p-10">
        <div className="mb-3 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-neutral-500">
          {Icon ? <Icon size={14} className="text-neutral-400" /> : null}
          {project.category}
        </div>

        <h3 className="font-display text-2xl font-semibold tracking-tight leading-snug text-neutral-900 md:text-3xl">
          {project.title}
        </h3>

        <div className="mt-3 mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          <Trophy size={13} />
          {project.tagline}
        </div>

        <p className="text-base leading-relaxed text-neutral-600">{project.description}</p>

        <button
          type="button"
          onClick={() => onOpen(project)}
          className="mt-4 inline-flex w-fit items-center gap-1 rounded text-sm font-semibold text-neutral-700 transition-colors duration-150 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          {language === 'de' ? 'Case Study lesen' : 'Read case study'}
          <ArrowUpRight size={15} />
        </button>

        <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-6">
          <div className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs font-medium text-neutral-600"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-4">
            {links.code ? (
              <Pressable
                as="a"
                href={links.code}
                target="_blank"
                rel="noopener"
                lift={1.05}
                className="inline-flex items-center gap-1.5 rounded text-sm font-semibold text-neutral-600 transition-colors duration-150 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <Github size={16} />
                Code
              </Pressable>
            ) : null}
            {links.live ? (
              <Pressable
                as="a"
                href={links.live}
                target="_blank"
                rel="noopener"
                lift={1.05}
                className="inline-flex items-center gap-1.5 rounded text-sm font-semibold text-primary transition-colors duration-150 hover:text-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {language === 'de' ? 'Live ansehen' : 'View live'}
                <ArrowUpRight size={16} />
              </Pressable>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  )
}

export { motion }
