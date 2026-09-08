import Header from '../components/Header.jsx'
import Services from '../components/Services.jsx'
import Principles from '../components/Principles.jsx'
import Catalogue from '../components/catalogue/Catalogue.jsx'
import Volunteer from '../components/Volunteer.jsx'
import Writing from '../components/Writing.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'
import { useLanguage } from '../context/LanguageContext'

/**
 * The brand site: what I offer, how I work, and the catalogue of what I built.
 * Deliberately excludes the CV-shaped sections (experience timeline, skills
 * matrix, education) — those live on /cv for a hiring audience.
 */
export default function BrandPage() {
  const { language, setLanguage } = useLanguage()

  return (
    <>
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
