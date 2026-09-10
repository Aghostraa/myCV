import Header from '../components/Header.jsx'
import Services from '../components/Services.jsx'
import Principles from '../components/Principles.jsx'
import Catalogue from '../components/catalogue/Catalogue.jsx'
import Volunteer from '../components/Volunteer.jsx'
import Writing from '../components/Writing.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import PageMeta from '../components/PageMeta.jsx'
import { routeMeta, projectMeta } from '../data/meta'
import { getFeaturedProject, getCatalogueProjects } from '../data/projects'

/**
 * The brand site: what I offer, how I work, and the catalogue of what I built.
 * Deliberately excludes the CV-shaped sections (experience timeline, skills
 * matrix, education) — those live on /cv for a hiring audience.
 */
export default function BrandPage() {
  const { language, setLanguage } = useLanguage()
  const { projectId } = useParams()

  // A case study is a deep link into this same page, so its metadata has to be
  // resolved here rather than on a route of its own — otherwise all nine
  // /work/:id URLs ship the homepage's title and read as duplicates.
  const openProject = useMemo(() => {
    if (!projectId) return null
    const all = [getFeaturedProject(language), ...getCatalogueProjects(language)]
    return all.find((p) => p && p.id === projectId) ?? null
  }, [projectId, language])

  const meta = openProject
    ? projectMeta(openProject, language)
    : {
        title: routeMeta.home.title[language],
        description: routeMeta.home.description[language],
      }

  return (
    <>
      <PageMeta
        title={meta.title}
        description={meta.description}
        path={openProject ? `/work/${openProject.id}` : '/'}
        image={openProject?.media?.image
          ? `https://ahouraazarbin.com${openProject.media.image}`
          : undefined}
        language={language}
      />
      <Header language={language} onUpdateLanguage={setLanguage} />
      <Services language={language} />
      <Principles language={language} />
      <Catalogue language={language} />
      <Volunteer language={language} />
      <Writing language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </>
  )
}
