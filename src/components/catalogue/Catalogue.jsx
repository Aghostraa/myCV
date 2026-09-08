import { useMemo, useState } from 'react'
import { AnimatePresence } from 'motion/react'
import { Trophy } from 'lucide-react'
import { Reveal, motion, EASE, useReducedMotion } from '../motion/primitives'
import ProjectCard, { FeaturedProjectCard } from './ProjectCard'
import ProjectModal from './ProjectModal'
import { getFeaturedProject, getCatalogueProjects, getDisciplines } from '../../data/projects'
import { getAchievements } from '../../data/achievements'

/**
 * The brand catalogue: one featured project, then a filterable grid of
 * uniform cards. Filtering reflows with a layout animation; every card keeps
 * identical geometry so the grid never goes ragged.
 */
export default function Catalogue({ language = 'en' }) {
  const [filter, setFilter] = useState('all')
  const [openProject, setOpenProject] = useState(null)
  const reduce = useReducedMotion()

  const featured = useMemo(() => getFeaturedProject(language), [language])
  const projects = useMemo(() => getCatalogueProjects(language), [language])
  const disciplines = useMemo(() => getDisciplines(language), [language])
  const achievements = useMemo(() => getAchievements(language), [language])

  // Under a filter the featured project joins the grid as an ordinary card, so
  // filtering covers the whole catalogue rather than everything-but-the-hero.
  const visible =
    filter === 'all'
      ? projects
      : [featured, ...projects].filter((p) => p.discipline === filter)

  // A discipline chip only earns its place if something sits behind it.
  const availableDisciplines = disciplines.filter(
    (d) => d.id === 'all' || [featured, ...projects].some((p) => p.discipline === d.id)
  )

  return (
    <section id="projects" className="bg-white px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-10 max-w-2xl md:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-primary">
            {language === 'de' ? 'Werkkatalog' : 'Work catalogue'}
          </p>
          <h2 className="mb-4 font-display text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            {language === 'de' ? 'Systeme, die live sind und sich rechnen' : 'Systems that shipped and paid off'}
          </h2>
          <p className="text-base leading-relaxed text-neutral-600 md:text-lg">
            {language === 'de'
              ? 'Von preisgekrönten Agenten-Frameworks über Ethereum-Foundation-geförderte Infrastruktur bis zu eigenen Produkten — filtere nach Disziplin, öffne eine Karte für die Case Study.'
              : 'From award-winning agent frameworks to Ethereum Foundation-funded infrastructure to products of my own — filter by discipline, open a card for the case study.'}
          </p>
        </div>

        {/* Featured — hidden while a filter is active, since it rejoins the grid */}
        {filter === 'all' ? (
          <Reveal className="mb-10">
            <FeaturedProjectCard project={featured} onOpen={setOpenProject} language={language} />
          </Reveal>
        ) : null}

        {/* Filter chips */}
        <div
          className="mb-8 flex flex-wrap gap-2"
          role="group"
          aria-label={language === 'de' ? 'Nach Disziplin filtern' : 'Filter by discipline'}
        >
          {availableDisciplines.map((discipline) => {
            const active = filter === discipline.id
            return (
              <button
                key={discipline.id}
                type="button"
                onClick={() => setFilter(discipline.id)}
                aria-pressed={active}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  active
                    ? 'border-ink bg-ink text-white'
                    : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:text-neutral-900'
                }`}
              >
                {discipline.label}
              </button>
            )
          })}
        </div>

        {/* Uniform grid */}
        <motion.div layout className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: reduce ? 0 : 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduce ? 0 : -8 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="h-full"
              >
                <ProjectCard project={project} onOpen={setOpenProject} language={language} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Achievements */}
        <Reveal className="mt-16 overflow-hidden rounded-2xl border border-neutral-200 bg-white md:mt-20">
          <div className="flex items-center gap-3 border-b border-neutral-200 bg-neutral-900 px-6 py-5 md:px-8">
            <Trophy size={20} className="text-primary" />
            <h3 className="font-display text-xl font-semibold text-white">
              {language === 'de' ? 'Erfolge & Auszeichnungen' : 'Achievements & Recognition'}
            </h3>
          </div>
          <div className="p-6 md:p-8">
            <div className="grid gap-x-8 gap-y-6 md:grid-cols-2">
              {achievements.map((item, i) => {
                const ItemIcon = item.icon
                return (
                  <div key={i} className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <ItemIcon size={17} />
                    </div>
                    <div>
                      <h4 className="mb-1 text-sm font-semibold text-neutral-900">{item.title}</h4>
                      <p className="text-sm leading-relaxed text-neutral-600">
                        {item.description}
                        {item.link ? (
                          <a
                            href={item.link.href}
                            target="_blank"
                            rel="noopener"
                            className="ml-1 font-semibold text-primary underline underline-offset-2 transition-colors duration-150 hover:text-primary-hover"
                          >
                            {item.link.label}
                          </a>
                        ) : null}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>

      <ProjectModal project={openProject} onClose={() => setOpenProject(null)} language={language} />
    </section>
  )
}
