import { Link } from 'react-router-dom'
import { Linkedin, Instagram, Twitter, Send } from 'lucide-react'
import { Reveal } from './motion/primitives'

const socials = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ahoura-azarbin-a3887b180', icon: Linkedin },
  { name: 'X / Twitter', href: 'https://x.com/ahoura_az', icon: Twitter },
  { name: 'Instagram', href: 'https://instagram.com/ahouraazarbin', icon: Instagram },
  { name: 'Telegram', href: 'https://t.me/AghostraA', icon: Send },
]

export default function Footer({ language = 'en' }) {
  const year = new Date().getFullYear()

  const links = [
    { label: language === 'de' ? 'Leistungen' : 'Services', href: '#services' },
    { label: language === 'de' ? 'Arbeiten' : 'Work', href: '#projects' },
    { label: language === 'de' ? 'Erfahrung' : 'Experience', href: '#experience' },
    { label: language === 'de' ? 'Kontakt' : 'Contact', href: '#contact' },
  ]

  const legal = [
    { label: 'Impressum', to: '/impressum' },
    { label: language === 'de' ? 'Datenschutz' : 'Privacy', to: '/datenschutz' },
  ]

  return (
    <footer className="bg-ink text-white pt-12 pb-8 px-6">
      <Reveal className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 pb-8 border-b border-white/10">
          {/* Identity */}
          <div className="max-w-sm">
            <p className="font-display text-lg font-semibold text-white mb-1">Ahoura Azarbin</p>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {language === 'de'
                ? 'AI Automation & Software Studio — agentische Automatisierung, RAG und Effizienz für kleine Teams.'
                : 'AI Automation & Software Studio — agentic automation, RAG, and efficiency for small teams.'}
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label={language === 'de' ? 'Schnellzugriff' : 'Quick links'}>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-neutral-400 transition-colors duration-150 hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div className="flex gap-3">
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener"
                  aria-label={social.name}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-neutral-400 transition-colors duration-150 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                </a>
              )
            })}
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-neutral-500">
          <p>© {year} Ahoura Azarbin. {language === 'de' ? 'Alle Rechte vorbehalten.' : 'All rights reserved.'}</p>
          {/* § 5 DDG wants these leicht erkennbar und unmittelbar erreichbar —
              one click from every page, labelled with their legal names. */}
          <nav aria-label={language === 'de' ? 'Rechtliches' : 'Legal'} className="flex items-center gap-4">
            {legal.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="hover:text-primary transition-colors duration-150"
              >
                {item.label}
              </Link>
            ))}
            <a href="mailto:ahouraazarbin@gmail.com" className="hover:text-primary transition-colors duration-150">
              ahouraazarbin@gmail.com
            </a>
          </nav>
        </div>
      </Reveal>
    </footer>
  )
}
