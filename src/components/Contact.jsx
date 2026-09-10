import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
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
  Paperclip,
  X,
} from 'lucide-react'
import { motion, Reveal, Pressable } from './motion/primitives'

// Mirrors the server-side cap in api/_lib/validatePrdAttachment.js — this
// check is UX only, the server never trusts it.
const MAX_PRD_BYTES = 8 * 1024 * 1024
const ALLOWED_PRD_EXTENSIONS = ['pdf', 'md']

function prdFileError(file, language) {
  const extension = file.name.split('.').pop()?.toLowerCase()
  if (!ALLOWED_PRD_EXTENSIONS.includes(extension)) {
    return language === 'de' ? 'Bitte nur PDF- oder Markdown-Dateien.' : 'Please attach a PDF or Markdown file.'
  }
  if (file.size > MAX_PRD_BYTES) {
    return language === 'de' ? 'Datei ist zu groß (max. 8 MB).' : 'File is too large (max 8MB).'
  }
  return ''
}

const socials = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ahoura-azarbin-a3887b180', icon: Linkedin },
  { name: 'X / Twitter', href: 'https://x.com/ahoura_az', icon: Twitter },
  { name: 'Instagram', href: 'https://instagram.com/ahouraazarbin', icon: Instagram },
  { name: 'Telegram', href: 'https://t.me/AghostraA', icon: Send },
]

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Contact({ language = 'en' }) {
  const mailtoHref = 'mailto:ahouraazarbin@gmail.com'

  const contributedProjects = [
    { label: 'growthepie', href: 'https://www.growthepie.com/' },
    { label: 'Aachen Blockchain Club', href: 'https://www.aachen-blockchain.de/' },
    { label: 'Open Labels Initiative', href: 'https://www.openlabelsinitiative.org/' },
    { label: 'Open Source Observer', href: 'https://www.opensource.observer/' },
  ]

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({ name: '', email: '', message: '', file: '' })
  const [submitted, setSubmitted] = useState(false)
  const [file, setFile] = useState(null)
  const [sending, setSending] = useState(false)
  const fileInputRef = useRef(null)
  const honeypotRef = useRef(null)
  const renderedAtRef = useRef(Date.now())

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

  function handleFileChange(event) {
    const picked = event.target.files?.[0] || null
    if (!picked) {
      setFile(null)
      setErrors((prev) => ({ ...prev, file: '' }))
      return
    }
    const fileError = prdFileError(picked, language)
    setErrors((prev) => ({ ...prev, file: fileError }))
    setFile(fileError ? null : picked)
    if (fileError && fileInputRef.current) fileInputRef.current.value = ''
  }

  function removeFile() {
    setFile(null)
    setErrors((prev) => ({ ...prev, file: '' }))
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  async function submitWithAttachment() {
    const body = new FormData()
    body.append('name', form.name)
    body.append('email', form.email)
    body.append('message', form.message)
    body.append('renderedAt', String(renderedAtRef.current))
    body.append('honeypot', honeypotRef.current?.value || '')
    body.append('prd', file)

    const response = await fetch('/api/send-prd', { method: 'POST', body })
    if (!response.ok) throw new Error('send-prd failed')
  }

  async function onSubmit(event) {
    event.preventDefault()
    const nameError = validateField('name', form.name)
    const emailError = validateField('email', form.email)
    const messageError = validateField('message', form.message)
    if (nameError || emailError || messageError) return

    if (!file) {
      const subject = encodeURIComponent(
        language === 'de' ? `Projektanfrage von ${form.name}` : `Project inquiry from ${form.name}`
      )
      const body = encodeURIComponent(`${form.message}\n\n${language === 'de' ? 'Antwort an' : 'Reply to'}: ${form.email}`)
      window.location.href = `mailto:ahouraazarbin@gmail.com?subject=${subject}&body=${body}`
      setSubmitted(true)
      return
    }

    setSending(true)
    try {
      await submitWithAttachment()
      setSubmitted(true)
      setFile(null)
      if (fileInputRef.current) fileInputRef.current.value = ''
    } catch {
      setErrors((prev) => ({
        ...prev,
        file: language === 'de'
          ? 'Senden fehlgeschlagen. Bitte versuch es erneut oder schreib mir direkt.'
          : 'Sending failed. Please try again or email me directly.',
      }))
    } finally {
      setSending(false)
    }
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

              <div className="mb-5">
                {/* Honeypot: hidden from sighted users and keyboard tab order, but a
                    scripted bot filling every field will fill this one too. */}
                <input
                  ref={honeypotRef}
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute left-[-9999px] h-0 w-0 opacity-0"
                />
                <label htmlFor="contact-prd" className="block text-sm font-medium text-neutral-300 mb-1.5">
                  {language === 'de' ? 'PRD anhängen (optional)' : 'Attach a PRD (optional)'}
                </label>
                {file ? (
                  <div className="flex items-center justify-between gap-3 rounded-lg border border-white/15 bg-white/5 px-3.5 py-2.5">
                    <span className="flex items-center gap-2 text-sm text-neutral-200 truncate">
                      <Paperclip className="h-4 w-4 shrink-0 text-accent" strokeWidth={1.75} />
                      <span className="truncate">{file.name}</span>
                    </span>
                    <button
                      type="button"
                      onClick={removeFile}
                      aria-label={language === 'de' ? 'Datei entfernen' : 'Remove file'}
                      className="shrink-0 text-neutral-400 transition-colors duration-150 hover:text-white"
                    >
                      <X className="h-4 w-4" strokeWidth={1.75} />
                    </button>
                  </div>
                ) : (
                  <label
                    htmlFor="contact-prd"
                    className="flex cursor-pointer items-center gap-2 rounded-lg border border-dashed border-white/20 px-3.5 py-2.5 text-sm text-neutral-400 transition-colors duration-150 hover:border-white/40 hover:text-neutral-200"
                  >
                    <Paperclip className="h-4 w-4" strokeWidth={1.75} />
                    {language === 'de' ? 'PDF oder Markdown wählen (max. 8 MB)' : 'Choose a PDF or Markdown file (max 8MB)'}
                  </label>
                )}
                <input
                  id="contact-prd"
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.md,application/pdf,text/markdown"
                  onChange={handleFileChange}
                  className="sr-only"
                />
                {errors.file ? <p className="mt-1.5 text-xs text-red-300">{errors.file}</p> : null}
              </div>

              <Pressable
                as="button"
                type="submit"
                disabled={sending}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-fg transition-colors duration-150 hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:opacity-60"
              >
                <Send className="h-4 w-4" strokeWidth={1.75} />
                {sending
                  ? (language === 'de' ? 'Wird gesendet…' : 'Sending…')
                  : (language === 'de' ? 'Nachricht senden' : 'Send message')}
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
              <Link
                to="/cv"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:border-white/40 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Download className="h-4 w-4" strokeWidth={1.75} />
                {language === 'de' ? 'Lebenslauf ansehen' : 'View my CV'}
              </Link>
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

    </section>
  )
}
