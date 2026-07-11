import { useState } from 'react'
import {
  Mail,
  Download,
  CalendarClock,
  MapPin,
  ArrowUpRight,
  Send,
  Linkedin,
  Instagram,
  Twitter,
} from 'lucide-react'
import { motion, Reveal, Pressable } from './motion/primitives'
import './contact-print.css'

const socials = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ahoura-azarbin-a3887b180', icon: Linkedin },
  { name: 'X / Twitter', href: 'https://x.com/ahoura_az', icon: Twitter },
  { name: 'Instagram', href: 'https://instagram.com/ahouraazarbin', icon: Instagram },
  { name: 'Telegram', href: 'https://t.me/AghostraA', icon: Send },
]

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Contact({ language = 'en' }) {
  const selectedCvLanguage = language === 'de' ? 'de' : 'en'
  const mailtoHref = 'mailto:ahouraazarbin@gmail.com'

  const contributedProjects = [
    { label: 'growthepie', href: 'https://www.growthepie.com/' },
    { label: 'Aachen Blockchain Club', href: 'https://www.aachen-blockchain.de/' },
    { label: 'Open Labels Initiative', href: 'https://www.openlabelsinitiative.org/' },
    { label: 'Open Source Observer', href: 'https://www.opensource.observer/' },
  ]

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function validateField(field, value) {
    let message = ''
    if (field === 'name') {
      message = value.trim() ? '' : (language === 'de' ? 'Bitte gib deinen Namen an.' : 'Please enter your name.')
    }
    if (field === 'email') {
      message = emailPattern.test(value.trim())
        ? ''
        : (language === 'de' ? 'Bitte gib eine gültige E-Mail-Adresse an.' : 'Please enter a valid email address.')
    }
    if (field === 'message') {
      message = value.trim().length >= 10
        ? ''
        : (language === 'de' ? 'Nachricht bitte etwas ausführlicher (min. 10 Zeichen).' : 'Message should be at least 10 characters.')
    }
    setErrors((prev) => ({ ...prev, [field]: message }))
    return message
  }

  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function onSubmit(event) {
    event.preventDefault()
    const nameError = validateField('name', form.name)
    const emailError = validateField('email', form.email)
    const messageError = validateField('message', form.message)
    if (nameError || emailError || messageError) return

    const subject = encodeURIComponent(
      language === 'de' ? `Projektanfrage von ${form.name}` : `Project inquiry from ${form.name}`
    )
    const body = encodeURIComponent(`${form.message}\n\n${language === 'de' ? 'Antwort an' : 'Reply to'}: ${form.email}`)
    window.location.href = `mailto:ahouraazarbin@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  async function generatePDF() {
    const { default: html2pdf } = await import('html2pdf.js')
    // Get the CV content based on selected language
    const elementId = selectedCvLanguage === 'de' ? 'cv-content-for-pdf-de' : 'cv-content-for-pdf-en'
    const element = document.getElementById(elementId)
    if (!element) {
      alert('CV content not found.')
      return
    }

    // Apply PDF-specific styling for better output
    const clone = element.cloneNode(true)
    clone.classList.remove('hidden')
    clone.style.padding = '30px'
    clone.style.fontFamily = 'Arial, sans-serif'
    clone.style.color = '#333'

    // Configure PDF options
    const opt = {
      margin: [10, 10, 10, 10],
      filename: selectedCvLanguage === 'de' ? 'Ahoura_Azarbin_CV_DE.pdf' : 'Ahoura_Azarbin_CV_EN.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    }

    // Generate the PDF
    html2pdf().from(clone).set(opt).save()
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-ink text-white py-24 md:py-32 px-6">
      {/* generated ambient backdrop */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <img
          src="/images/generated/contact-bg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/60 to-ink/80" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <Reveal className="max-w-2xl mb-16" delay={0}>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-3">
            {language === 'de' ? 'Kontakt' : 'Contact'}
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-5">
            {language === 'de' ? "Lass uns etwas bauen, das sich rechnet" : "Let's build something that pays off"}
          </h2>
          <p className="text-base leading-relaxed text-neutral-300 mb-2">
            {language === 'de'
              ? 'Hast du einen Prozess, der jede Woche Stunden frisst? Erzähl mir davon.'
              : 'Have a process that eats hours every week? Tell me about it.'}
          </p>
          <p className="text-base leading-relaxed text-neutral-300">
            {language === 'de'
              ? 'Auf der Suche nach Verstärkung? Mein Lebenslauf und meine Profile sind einen Klick entfernt.'
              : "Hiring? My CV and profiles are one click away."}
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: form + primary paths */}
          <Reveal as="div" className="lg:col-span-3" delay={0.08}>
            <form
              className="rounded-xl border border-white/10 bg-white/5 p-6 md:p-8 mb-6"
              onSubmit={onSubmit}
            >
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-neutral-300 mb-1.5">
                    {language === 'de' ? 'Name' : 'Name'}
                  </label>
                  <input
                    id="contact-name"
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    type="text"
                    required
                    aria-invalid={errors.name ? 'true' : 'false'}
                    className={`w-full rounded-lg border bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 outline-none transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary ${errors.name ? 'border-red-400/70' : 'border-white/15'}`}
                    placeholder={language === 'de' ? 'Dein Name' : 'Your name'}
                    onBlur={(e) => validateField('name', e.target.value)}
                  />
                  {errors.name ? <p className="mt-1.5 text-xs text-red-300">{errors.name}</p> : null}
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-neutral-300 mb-1.5">
                    {language === 'de' ? 'E-Mail' : 'Email'}
                  </label>
                  <input
                    id="contact-email"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    type="email"
                    required
                    aria-invalid={errors.email ? 'true' : 'false'}
                    className={`w-full rounded-lg border bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 outline-none transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary ${errors.email ? 'border-red-400/70' : 'border-white/15'}`}
                    placeholder="you@company.com"
                    onBlur={(e) => validateField('email', e.target.value)}
                  />
                  {errors.email ? <p className="mt-1.5 text-xs text-red-300">{errors.email}</p> : null}
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="contact-message" className="block text-sm font-medium text-neutral-300 mb-1.5">
                  {language === 'de' ? 'Nachricht' : 'Message'}
                </label>
                <textarea
                  id="contact-message"
                  value={form.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  rows={4}
                  required
                  aria-invalid={errors.message ? 'true' : 'false'}
                  className={`w-full rounded-lg border bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 outline-none transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary resize-none ${errors.message ? 'border-red-400/70' : 'border-white/15'}`}
                  placeholder={language === 'de'
                    ? 'Worum geht es? Prozess, Rolle oder einfach nur Hallo.'
                    : 'What is this about? A process, a role, or just hello.'}
                  onBlur={(e) => validateField('message', e.target.value)}
                />
                {errors.message ? <p className="mt-1.5 text-xs text-red-300">{errors.message}</p> : null}
              </div>

              <Pressable
                as="button"
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-fg transition-colors duration-150 hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                <Send className="h-4 w-4" strokeWidth={1.75} />
                {language === 'de' ? 'Nachricht senden' : 'Send message'}
              </Pressable>
              {submitted ? (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 text-sm text-emerald-300"
                >
                  {language === 'de' ? 'Danke! Dein E-Mail-Programm sollte sich jetzt öffnen.' : 'Thanks! Your email app should be opening now.'}
                </motion.p>
              ) : null}
            </form>

            {/* Secondary paths */}
            <div className="flex flex-wrap gap-3">
              <Pressable
                as="a"
                href={mailtoHref}
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:border-white/40 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Mail className="h-4 w-4" strokeWidth={1.75} />
                ahouraazarbin@gmail.com
              </Pressable>
              <Pressable
                as="button"
                type="button"
                onClick={generatePDF}
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:border-white/40 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Download className="h-4 w-4" strokeWidth={1.75} />
                {language === 'de' ? 'Lebenslauf herunterladen' : 'Download CV'}
              </Pressable>
              <Pressable
                as="a"
                href="https://calendly.com/ahouraazarbin/30min"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:border-white/40 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <CalendarClock className="h-4 w-4" strokeWidth={1.75} />
                {language === 'de' ? 'Gespräch buchen' : 'Book a call'}
              </Pressable>
            </div>
          </Reveal>

          {/* Right: channels + socials */}
          <Reveal as="div" className="lg:col-span-2 space-y-6" delay={0.14}>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 md:p-8">
              <h3 className="font-display text-xl font-semibold mb-4">
                {language === 'de' ? 'Standort' : 'Location'}
              </h3>
              <p className="flex items-start gap-2 text-neutral-300 text-sm leading-relaxed">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" strokeWidth={1.75} />
                {language === 'de' ? 'Aachen, Nordrhein-Westfalen, Deutschland' : 'Aachen, North Rhine-Westphalia, Germany'}
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6 md:p-8">
              <h3 className="font-display text-xl font-semibold mb-4">
                {language === 'de' ? 'Verbinde dich mit mir' : 'Connect with me'}
              </h3>
              <div className="flex flex-wrap gap-3">
                {socials.map((social) => {
                  const Icon = social.icon
                  return (
                    <Pressable
                      key={social.name}
                      as="a"
                      href={social.href}
                      target="_blank"
                      rel="noopener"
                      aria-label={social.name}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-neutral-300 transition-colors duration-150 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </Pressable>
                  )
                })}
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6 md:p-8">
              <h3 className="font-display text-xl font-semibold mb-3">
                {language === 'de' ? 'Projekte, zu denen ich beigetragen habe' : 'Projects I contributed to'}
              </h3>
              <ul className="space-y-2">
                {contributedProjects.map((p) => (
                  <li key={p.href}>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-1.5 text-sm text-neutral-300 transition-colors duration-150 hover:text-primary"
                    >
                      {p.label}
                      <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Hidden CV content for PDF */}
      <div id="cv-content-for-pdf-en" className="hidden">
        <div className="cv-header">
          <h1>Ahoura Azarbin</h1>
          <p>AI Automation &amp; Software Studio | Agentic Automation, RAG, Ops Efficiency</p>
        </div>

        <div className="cv-section">
          <h2>Contact Information</h2>
          <ul>
            <li>Email: ahouraazarbin@gmail.com</li>
            <li>Location: Aachen, North Rhine-Westphalia, Germany</li>
            <li>LinkedIn: linkedin.com/in/ahoura-azarbin-a3887b180</li>
            <li>Twitter: x.com/ahoura_az</li>
            <li>Telegram: t.me/AghostraA</li>
          </ul>
        </div>

        <div className="cv-section">
          <h2>Professional Experience</h2>
          <div className="cv-job">
            <h3>Researcher</h3>
            <p>growthepie, Remote | Aug 2024 - Jun 2028</p>
            <ul>
              <li>Focus on research and data analytics through Smart contract labeling</li>
              <li>Building a database of all open source and other projects in web3, and adoption of open labels standard</li>
              <li>Tracking growth metrics of projects in the Ethereum ecosystem</li>
            </ul>
          </div>

          <div className="cv-job">
            <h3>Community and Socials Management</h3>
            <p>growthepie, Remote | Jun 2023 - Jul 2024</p>
            <ul>
              <li>Managed community engagement across various social media platforms</li>
              <li>Developed content strategies to increase awareness about blockchain metrics</li>
              <li>Built relationships with key industry stakeholders in the Web3 space</li>
            </ul>
          </div>

          <div className="cv-job">
            <h3>Student Assistant in Design Thinking</h3>
            <p>FH Aachen University of Applied Sciences, Germany | Mar 2022 - Dec 2023</p>
            <ul>
              <li>Supported professors and students in implementing design thinking methodologies</li>
              <li>Facilitated workshops and collaborative problem-solving sessions</li>
              <li>Contributed to curriculum development and instructional materials</li>
            </ul>
          </div>
        </div>

        <div className="cv-section">
          <h2>Education</h2>
          <div className="cv-education">
            <h3>Mechanical Engineering</h3>
            <p>FH Aachen University of Applied Sciences | 2019 - 2025</p>
            <p>Currently pursuing mechanical engineering degree with a focus on innovative mechanical solutions and sustainable technologies.</p>
          </div>

          <div className="cv-education">
            <h3>German Language, Math &amp; Physics</h3>
            <p>FH Aachen University of Applied Sciences | 2018 - 2019</p>
            <p>Completed preparatory coursework for international students, focusing on German language skills, mathematics, and physics for engineering studies.</p>
          </div>
        </div>

        <div className="cv-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>AI &amp; Automation</h3>
              <ul>
                <li>Agentic Automation</li>
                <li>RAG Systems</li>
                <li>Predictive Maintenance</li>
                <li>Support Chatbots</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>Data Analytics</h3>
              <ul>
                <li>SQL</li>
                <li>Data Analysis</li>
                <li>Smart Contract Labeling</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>Professional Skills</h3>
              <ul>
                <li>Leadership</li>
                <li>Research</li>
                <li>Project Management</li>
                <li>Communication</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>Languages</h3>
              <ul>
                <li>English (Full Professional)</li>
                <li>Persian (Native)</li>
                <li>German (Professional Working)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="cv-section">
          <h2>Volunteer Experience</h2>
          <div className="cv-volunteer">
            <h3>Advisor</h3>
            <p>Aachen Blockchain Club e.V. | Mar 2025 - Jun 2028</p>
            <p>As an advisor to the club, I provide strategic guidance to the executive team, mentor new members, and support blockchain education initiatives at FH Aachen.</p>
          </div>

          <div className="cv-volunteer">
            <h3>President</h3>
            <p>Aachen Blockchain Club e.V. | Jun 2024 - Mar 2025</p>
            <p>Led the university blockchain club, organizing educational events, workshops, and networking sessions to promote blockchain technology and Web3 awareness on campus.</p>
          </div>
        </div>
      </div>

      <div id="cv-content-for-pdf-de" className="hidden">
        <div className="cv-header">
          <h1>Ali Azarbin Bousari</h1>
          <p>AI Automation &amp; Software Studio | Agentische Automatisierung, RAG, Prozesseffizienz</p>
        </div>

        <div className="cv-section">
          <h2>Kontaktinformationen</h2>
          <ul>
            <li>E-Mail: ahouraazarbin@gmail.com</li>
            <li>Ort: Aachen, Nordrhein-Westfalen, Deutschland</li>
            <li>LinkedIn: linkedin.com/in/ahoura-azarbin-a3887b180</li>
            <li>Twitter: x.com/ahoura_az</li>
            <li>Telegram: t.me/AghostraA</li>
          </ul>
        </div>

        <div className="cv-section">
          <h2>Berufserfahrung</h2>
          <div className="cv-job">
            <h3>Developer Relations &amp; Blockchain Researcher</h3>
            <p>growthepie, Remote | Aug 2024 - Jun 2026</p>
            <ul>
              <li>Fokus auf Forschung und Datenanalyse durch Smart-Contract-Labeling</li>
              <li>Aufbau einer Datenbank mit Open-Source- und weiteren Web3-Projekten sowie Förderung des Open-Labels-Standards</li>
              <li>Erstellung von Grants und Anträgen zur Finanzierung von Projekten</li>
              <li>Entwicklung und Durchführung von Workshops und Events zur Förderung unserer Entwicklerwerkzeuge und Bewusstseins</li>
            </ul>
          </div>

          <div className="cv-job">
            <h3>Community- und Social-Media-Management</h3>
            <p>growthepie, Remote | Jun 2023 - Jul 2024</p>
            <ul>
              <li>Management der Community-Interaktion über verschiedene Social-Media-Plattformen</li>
              <li>Entwicklung von Content-Strategien zur Steigerung der Bekanntheit von Blockchain-Metriken</li>
              <li>Aufbau von Beziehungen zu zentralen Stakeholdern im Web3-Bereich</li>
            </ul>
          </div>

          <div className="cv-job">
            <h3>Studentische Hilfskraft im Bereich Design Thinking</h3>
            <p>FH Aachen University of Applied Sciences, Germany | Mar 2022 - Dec 2023</p>
            <ul>
              <li>Unterstützung von Professoren und Studierenden bei der Umsetzung von Design-Thinking-Methoden</li>
              <li>Moderation von Workshops und kollaborativen Problemlösungssitzungen</li>
              <li>Beitrag zur Entwicklung von Curriculum und Lehrmaterialien</li>
            </ul>
          </div>
        </div>

        <div className="cv-section">
          <h2>Ausbildung</h2>
          <div className="cv-education">
            <h3>Maschinenbau</h3>
            <p>Fachhochschule Aachen | 2019 - 2025</p>
            <p>Maschinenbau mit Fokus auf innovative mechanische Lösungen und nachhaltige Technologien.</p>
          </div>

          <div className="cv-education">
            <h3>Deutsch, Mathematik &amp; Physik</h3>
            <p>Fachhochschule Aachen | 2018 - 2019</p>
            <p>Absolvierter Vorbereitungskurs für internationale Studierende mit Schwerpunkt auf Deutsch, Mathematik und Physik für das Ingenieurstudium.</p>
          </div>
        </div>

        <div className="cv-section">
          <h2>Kompetenzen</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>KI &amp; Automatisierung</h3>
              <ul>
                <li>Agentische Automatisierung</li>
                <li>RAG-Systeme</li>
                <li>Predictive Maintenance</li>
                <li>Support-Chatbots</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>Datenanalyse</h3>
              <ul>
                <li>SQL</li>
                <li>Datenanalyse</li>
                <li>Smart-Contract-Labeling</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>Überfachliche Kompetenzen</h3>
              <ul>
                <li>Leadership</li>
                <li>Research</li>
                <li>Projektmanagement</li>
                <li>Kommunikation</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>Sprachen</h3>
              <ul>
                <li>Englisch (Verhandlungssicher)</li>
                <li>Persisch (Muttersprache)</li>
                <li>Deutsch (Berufsbezogen)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="cv-section">
          <h2>Ehrenamtliches Engagement</h2>
          <div className="cv-volunteer">
            <h3>Berater</h3>
            <p>Aachen Blockchain Club e.V. | Mar 2025 - Jun 2026</p>
            <p>Als Berater des Clubs unterstütze ich das Executive Team strategisch, begleite neue Mitglieder und fördere Blockchain-Bildungsinitiativen an der Fachhochschule Aachen und RWTH Aachen.</p>
          </div>

          <div className="cv-volunteer">
            <h3>Präsident</h3>
            <p>Aachen Blockchain Club e.V. | Jun 2024 - Mar 2025</p>
            <p>Leitung des universitären Blockchain-Clubs mit Organisation von Events, Workshops und Networking-Formaten zur Förderung von Blockchain-Technologie und Web3-Bewusstsein auf dem Campus der Fachhochschule Aachen und RWTH Aachen.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
