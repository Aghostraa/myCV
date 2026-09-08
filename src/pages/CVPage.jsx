import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  MapPin,
  Mail,
  Github,
  Linkedin,
  Download,
  ArrowLeft,
  Printer,
  Award,
  ExternalLink,
} from 'lucide-react'
import { Reveal, Stagger, StaggerItem, Pressable } from '../components/motion/primitives'
import { useLanguage } from '../context/LanguageContext'
import { profile, cvHeadline, cvSummary, cvHighlights } from '../data/profile'
import { roles } from '../data/experience'
import { skillContent } from '../data/skills'
import { degrees, certifications } from '../data/education'
import { getCVProjects } from '../data/projects'
import { getAchievements } from '../data/achievements'
import '../components/cv/cv-print.css'

const CV_ROOT_ID = 'cv-document'

/**
 * The hiring-facing CV. Same underlying data as the brand catalogue, different
 * voice: outcomes and metrics first, no studio pitch or project CTAs.
 * Screen view stays visually rich; `.cv-print` collapses it to a dense
 * two-page document for both the print dialog and the PDF export.
 */
export default function CVPage() {
  const { language } = useLanguage()
  const de = language === 'de'
  const [exporting, setExporting] = useState(false)

  const projects = useMemo(() => getCVProjects(language), [language])
  const achievements = useMemo(() => getAchievements(language), [language])
  const skills = de ? skillContent.de : skillContent.en
  const highlights = de ? cvHighlights.de : cvHighlights.en

  // The browser print dialog gets the same dense layout as the PDF export.
  useEffect(() => {
    const root = () => document.getElementById(CV_ROOT_ID)
    const before = () => root()?.classList.add('cv-print')
    const after = () => root()?.classList.remove('cv-print')
    window.addEventListener('beforeprint', before)
    window.addEventListener('afterprint', after)
    return () => {
      window.removeEventListener('beforeprint', before)
      window.removeEventListener('afterprint', after)
    }
  }, [])

  async function downloadPDF() {
    const element = document.getElementById(CV_ROOT_ID)
    if (!element) return
    setExporting(true)
    try {
      const { default: html2pdf } = await import('html2pdf.js')
      const clone = element.cloneNode(true)
      clone.classList.add('cv-print')
      await html2pdf()
        .from(clone)
        .set({
          margin: [12, 12, 12, 12],
          filename: de ? 'Ahoura_Azarbin_CV_DE.pdf' : 'Ahoura_Azarbin_CV_EN.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true, backgroundColor: '#ffffff' },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
          pagebreak: { mode: ['css', 'legacy'] },
        })
        .save()
    } finally {
      setExporting(false)
    }
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Screen-only utility bar */}
      <div className="cv-screen-only sticky top-0 z-40 border-b border-neutral-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-6 py-3">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 rounded text-sm font-semibold text-neutral-600 transition-colors duration-150 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <ArrowLeft size={16} />
            {de ? 'Zum Studio' : 'Back to studio'}
          </Link>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-700 transition-colors duration-150 hover:border-neutral-300 hover:text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <Printer size={15} />
              {de ? 'Drucken' : 'Print'}
            </button>
            <Pressable
              as="button"
              type="button"
              onClick={downloadPDF}
              disabled={exporting}
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-fg transition-colors duration-150 hover:bg-primary-hover disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <Download size={15} />
              {exporting ? (de ? 'Erstelle…' : 'Building…') : de ? 'PDF laden' : 'Download PDF'}
            </Pressable>
          </div>
        </div>
      </div>

      <div id={CV_ROOT_ID} className="cv-page mx-auto max-w-4xl px-6 py-12 md:py-16">
        {/* Identity */}
        <header className="mb-12">
          <h1 className="font-display text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-2 text-base font-medium text-primary md:text-lg">
            {de ? cvHeadline.de : cvHeadline.en}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-neutral-600">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} className="text-neutral-400" />
              {de ? profile.location.de : profile.location.en}
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 rounded hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <Mail size={14} className="text-neutral-400" />
              {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 rounded hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <Github size={14} className="text-neutral-400" />
              github.com/Aghostraa
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 rounded hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <Linkedin size={14} className="text-neutral-400" />
              LinkedIn
            </a>
          </div>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-700">
            {de ? cvSummary.de : cvSummary.en}
          </p>

          {/* Headline numbers */}
          <div className="cv-highlight-row mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {highlights.map((item) => (
              <div key={item.label} className="cv-card rounded-xl border border-neutral-200 bg-white p-4">
                <div className="cv-highlight-value font-display text-2xl font-bold text-neutral-900">
                  {item.value}
                </div>
                <div className="mt-1 text-xs leading-snug text-neutral-600">{item.label}</div>
              </div>
            ))}
          </div>
        </header>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="mb-6 font-display text-xl font-semibold tracking-tight text-neutral-900">
            {de ? 'Berufserfahrung' : 'Experience'}
          </h2>

          <Stagger className="space-y-6">
            {roles.map((role) => (
              <StaggerItem key={role.id}>
                <div className="cv-card rounded-xl border border-neutral-200 bg-white p-5 md:p-6">
                  <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-neutral-900">
                        {role.title[language]}
                      </h3>
                      <p className="text-sm text-neutral-500">
                        {role.org} · {role.location[language]}
                      </p>
                    </div>
                    <span className="text-sm font-medium text-neutral-500">{role.dates[language]}</span>
                  </div>

                  <ul className="space-y-1.5">
                    {role.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-2 text-sm leading-relaxed text-neutral-700">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span>
                          <strong className="font-semibold text-neutral-900">{bullet.kw[language]}</strong> —{' '}
                          {bullet.detail[language]}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="cv-tag-row mt-4 flex flex-wrap gap-1.5">
                    {role.tags.map((tag) => (
                      <span
                        key={tag.en}
                        className="cv-tag rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs font-medium text-neutral-600"
                      >
                        {tag[language]}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Selected projects — same data, engineering evidence voice */}
        <section className="mb-12">
          <h2 className="mb-6 font-display text-xl font-semibold tracking-tight text-neutral-900">
            {de ? 'Ausgewählte Projekte' : 'Selected projects'}
          </h2>

          <Stagger className="cv-grid grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <StaggerItem key={project.id} className="h-full">
                <div className="cv-card flex h-full flex-col rounded-xl border border-neutral-200 bg-white p-5">
                  <div className="mb-1 flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-base font-semibold text-neutral-900">{project.title}</h3>
                    <span className="shrink-0 text-xs font-medium text-neutral-500">{project.year}</span>
                  </div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">
                    {project.category}
                  </p>
                  <p className="text-sm leading-relaxed text-neutral-700">{project.cv.evidence}</p>

                  <div className="cv-tag-row mt-3 flex flex-wrap gap-1.5">
                    {project.cv.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="cv-tag rounded-full bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-3">
                    <div className="cv-tag-row flex flex-wrap gap-1.5">
                      {project.stack.slice(0, 4).map((tech) => (
                        <span key={tech} className="cv-tag text-xs text-neutral-500">
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.links.code || project.links.live ? (
                      <a
                        href={project.links.code ?? project.links.live}
                        target="_blank"
                        rel="noopener"
                        className="mt-2 inline-flex items-center gap-1 rounded text-xs font-semibold text-primary hover:text-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      >
                        {project.links.code ? 'github.com/Aghostraa' : project.links.live.replace('https://', '')}
                        <ExternalLink size={12} />
                      </a>
                    ) : null}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="mb-6 font-display text-xl font-semibold tracking-tight text-neutral-900">
            {de ? 'Fähigkeiten' : 'Skills'}
          </h2>

          <div className="cv-grid grid gap-5 md:grid-cols-2">
            {skills.groups.map((group) => (
              <div key={group.title} className="cv-card">
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  {group.title}
                </h3>
                <div className="cv-tag-row flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="cv-tag rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-xs text-neutral-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">
              {skills.languagesTitle}
            </h3>
            <div className="cv-tag-row flex flex-wrap gap-4">
              {skills.languages.map((lang) => (
                <span key={lang.name} className="cv-tag text-sm text-neutral-700">
                  <strong className="font-semibold text-neutral-900">{lang.name}</strong> — {lang.level}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="mb-6 font-display text-xl font-semibold tracking-tight text-neutral-900">
            {de ? 'Bildung' : 'Education'}
          </h2>

          <div className="space-y-4">
            {degrees.map((degree) => (
              <div key={degree.id} className="cv-card rounded-xl border border-neutral-200 bg-white p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-base font-semibold text-neutral-900">
                    {degree.title[language]}
                  </h3>
                  <span className="text-sm font-medium text-neutral-500">{degree.years}</span>
                </div>
                <p className="text-sm text-neutral-500">{degree.institution}</p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700">{degree.description[language]}</p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h3 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">
              <Award size={14} className="text-neutral-400" />
              {de ? 'Zertifikate' : 'Certifications'}
            </h3>
            <div className="cv-grid grid gap-3 md:grid-cols-3">
              {certifications.map((cert) => (
                <div key={cert.id} className="cv-card rounded-xl border border-neutral-200 bg-white p-4">
                  <h4 className="text-sm font-semibold text-neutral-900">{cert.title[language]}</h4>
                  <p className="text-xs text-neutral-500">{cert.kind[language]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recognition */}
        <section className="mb-4">
          <h2 className="mb-6 font-display text-xl font-semibold tracking-tight text-neutral-900">
            {de ? 'Auszeichnungen' : 'Recognition'}
          </h2>
          <div className="cv-grid grid gap-3 md:grid-cols-2">
            {achievements.map((item, i) => (
              <div key={i} className="cv-card flex gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-neutral-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Print-only footer line */}
        <p className="cv-print-only hidden text-xs text-neutral-500">
          {profile.name} · {profile.email} · {profile.site} · github.com/Aghostraa
        </p>
      </div>

      <div className="cv-screen-only px-6 pb-16 text-center">
        <Reveal>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 rounded text-sm font-semibold text-neutral-600 transition-colors duration-150 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <ArrowLeft size={16} />
            {de ? 'Zurück zum Studio' : 'Back to the studio site'}
          </Link>
        </Reveal>
      </div>
    </div>
  )
}
