import { Linkedin, Twitter, Instagram, Send, Github, Mail } from 'lucide-react'

/** Identity + contact, shared by the brand site footer and the CV header. */
export const profile = {
  name: 'Ahoura Azarbin',
  email: 'ahouraazarbin@gmail.com',
  location: { en: 'Aachen, Germany', de: 'Aachen, Deutschland' },
  site: 'ahouraazarbin.com',
  github: 'https://github.com/Aghostraa',
  linkedin: 'https://www.linkedin.com/in/ahoura-azarbin-a3887b180',
}

export const socials = [
  { name: 'GitHub', href: 'https://github.com/Aghostraa', icon: Github },
  { name: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
  { name: 'X / Twitter', href: 'https://x.com/ahoura_az', icon: Twitter },
  { name: 'Instagram', href: 'https://instagram.com/ahouraazarbin', icon: Instagram },
  { name: 'Telegram', href: 'https://t.me/AghostraA', icon: Send },
  { name: 'Email', href: `mailto:${profile.email}`, icon: Mail },
]

/** Hiring-voiced positioning for the CV page — deliberately not the studio pitch. */
export const cvHeadline = {
  en: 'AI & Product Engineer — agentic systems, developer tooling, and products shipped to production',
  de: 'AI & Product Engineer — agentische Systeme, Developer-Tooling und Produkte in Produktion',
}

export const cvSummary = {
  en: 'Engineer who finds the expensive manual gap and closes it with a system that stays in production. Built an AI classification pipeline that cut cost 100× at 95% accuracy, took an open data standard from empty repo to Ethereum Foundation-funded infrastructure adopted by Blockscout and Sourcify, and secured $50,000 across three independent grants. Comfortable owning a product end to end — spec, build, launch, and the documentation that lets it run without me.',
  de: 'Ingenieur, der die teure manuelle Lücke findet und sie mit einem System schließt, das in Produktion bleibt. KI-Klassifizierungs-Pipeline gebaut, die Kosten um das 100-fache senkte bei 95% Genauigkeit; einen offenen Datenstandard vom leeren Repo zu Ethereum-Foundation-geförderter Infrastruktur gebracht, adoptiert von Blockscout und Sourcify; $50.000 über drei unabhängige Grants gesichert. Verantwortet Produkte end-to-end — Spezifikation, Umsetzung, Launch und die Dokumentation, die den Betrieb ohne mich ermöglicht.',
}

/** The headline numbers a recruiter should see in the first five seconds. */
export const cvHighlights = {
  en: [
    { value: '100×', label: 'cost & time reduction, AI classification in production' },
    { value: '$50k', label: 'secured across 3 independent grants' },
    { value: '2', label: 'hackathon wins — ETH Global Open Agents, Mammothan' },
    { value: '3', label: 'hires of manual workload replaced by automation' },
  ],
  de: [
    { value: '100×', label: 'Kosten- & Zeitreduktion, KI-Klassifizierung in Produktion' },
    { value: '$50k', label: 'über 3 unabhängige Grants gesichert' },
    { value: '2', label: 'Hackathon-Siege — ETH Global Open Agents, Mammothan' },
    { value: '3', label: 'Stellen an manueller Arbeit durch Automatisierung ersetzt' },
  ],
}
