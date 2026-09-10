/**
 * Per-route titles and descriptions.
 *
 * The two audiences the site serves are split by route — `/` sells the studio,
 * `/cv` is written for a hiring reader — but until now both shipped the same
 * static `<head>`, so search engines saw `/cv` as a near-duplicate of `/` and
 * recruiters got a "Software Studio" snippet. These strings are what make the
 * split legible to a crawler.
 */

export const routeMeta = {
  home: {
    title: {
      en: 'Ahoura Azarbin Bousari — AI Automation & Software Studio',
      de: 'Ahoura Azarbin Bousari — KI-Automatisierung & Software-Studio',
    },
    description: {
      en: 'Ahoura Azarbin Bousari is an AI automation consultant in Aachen, Germany, building agentic automation, RAG systems, predictive maintenance and custom software for small and mid-sized businesses.',
      de: 'Ahoura Azarbin Bousari ist KI-Automatisierungsberater in Aachen: agentische Automatisierung, RAG-Systeme, vorausschauende Wartung und individuelle Software für kleine und mittlere Unternehmen.',
    },
  },
  cv: {
    title: {
      en: 'Ahoura Azarbin Bousari — AI & Product Engineer | CV',
      de: 'Ahoura Azarbin Bousari — AI & Product Engineer | Lebenslauf',
    },
    description: {
      en: 'CV of Ahoura Azarbin Bousari, AI & Product Engineer in Aachen, Germany: agentic systems, developer tooling and products shipped to production, with Ethereum Foundation-funded infrastructure work and an ETH Global win.',
      de: 'Lebenslauf von Ahoura Azarbin Bousari, AI & Product Engineer in Aachen: agentische Systeme, Developer-Tooling und Produkte in Produktion, inklusive von der Ethereum Foundation geförderter Infrastruktur und einem ETH-Global-Sieg.',
    },
  },
  impressum: {
    title: { en: 'Impressum — Ahoura Azarbin Bousari', de: 'Impressum — Ahoura Azarbin Bousari' },
    description: {
      en: 'Legal notice and provider identification under § 5 DDG for Ahoura Azarbin Bousari, Aachen, Germany.',
      de: 'Anbieterkennzeichnung gemäß § 5 DDG für Ahoura Azarbin Bousari, Aachen.',
    },
  },
  datenschutz: {
    title: { en: 'Privacy Policy — Ahoura Azarbin Bousari', de: 'Datenschutzerklärung — Ahoura Azarbin Bousari' },
    description: {
      en: 'How this site handles personal data, under the GDPR.',
      de: 'Wie diese Website personenbezogene Daten gemäß DSGVO verarbeitet.',
    },
  },
  notFound: {
    title: { en: 'Page not found — Ahoura Azarbin Bousari', de: 'Seite nicht gefunden — Ahoura Azarbin Bousari' },
    description: {
      en: 'This page does not exist.',
      de: 'Diese Seite existiert nicht.',
    },
  },
}

/** Title/description for a single case study, from the localized project. */
export function projectMeta(project, language = 'en') {
  const suffix = language === 'de' ? 'Case Study' : 'Case Study'
  return {
    title: `${project.title} — ${suffix} | Ahoura Azarbin Bousari`,
    description: project.description,
  }
}
