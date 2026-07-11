import { useState } from 'react'
import Header from './components/Header.jsx'
import Services from './components/Services.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Volunteer from './components/Volunteer.jsx'
import Writing from './components/Writing.jsx'
import Education from './components/Education.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [language, setLanguage] = useState('en')

  return (
    <div className="min-h-screen font-sans antialiased bg-neutral-50 text-neutral-900">
      <Header language={language} onUpdateLanguage={setLanguage} />
      <Services language={language} />
      <Projects language={language} />
      <Experience language={language} />
      <Volunteer language={language} />
      <Writing language={language} />
      <Education language={language} />
      <Skills language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  )
}
