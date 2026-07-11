import { Reveal, Stagger, StaggerItem } from './motion/primitives';

const roles = [
  {
    id: 0,
    current: true,
    title: { en: 'Ecosystem & Product Builder', de: 'Ecosystem & Product Builder' },
    org: 'growthepie / orbal GmbH',
    location: { en: 'Remote', de: 'Remote' },
    dates: { en: 'Aug 2024 – Jun 2028', de: 'Aug 2024 – Jun 2026' },
    bullets: [
      {
        kw: { en: 'AI labeling agent, and RL pipelines', de: 'KI Labeling Agent' },
        detail: { en: '€1→€0.01/label, 4h→10min (100×)', de: '€1→€0,01/Label, 4h→10min (100×)' },
      },
      {
        kw: { en: 'AI sales engine for research backed outreach and lead tracking', de: 'KI Sales Engine' },
        detail: { en: '30 simultaneous conversations, 1h→10min per contact', de: '30 simultane Gespräche, 1h→10min pro Kontakt' },
      },
      {
        kw: { en: '3 grants secured and shipped · $50,000', de: '3 Grants · $50.000' },
        detail: { en: 'EF ESP DevTooling, Gitcoin GG25 OSS Developer Tooling & Infra, Arbitrum Questbook Dev Tooling', de: 'EF ESP DevTooling, Gitcoin GG25 OSS Developer Tooling & Infra, Arbitrum Questbook Dev Tooling' },
      },
      {
        kw: { en: 'Open Labels Initiative', de: 'Open Labels Initiative' },
        detail: { en: 'TypeScript SDK, Hardhat plugin, web frontend; adopted by Blockscout, Enscribe, Sourcify', de: 'TypeScript SDK, Hardhat Plugin, Web-Frontend; adoptiert von Blockscout, Enscribe, Sourcify' },
      },
      {
        kw: { en: 'L2 ecosystem research', de: 'L2 Ecosystem Research' },
        detail: { en: 'metrics & insights; protocols & data teams', de: 'Metriken & Insights; Protokolle & Daten-Teams' },
      },
      {
        kw: { en: 'Frontend development and tools integrations', de: 'Frontend' },
        detail: { en: 'Turned hard dev tasks into intuitive user input agentic flows', de: 'Forschung in Produkt-Interfaces überführt' },
      },
      {
        kw: { en: 'Internal AI advocate', de: 'KI Advocate' },
        detail: { en: 'tools, workflows & agents across engineering, research, product', de: 'Tools, Workflows & Agenten: Engineering, Research, Produkt' },
      },
    ],
    tags: [
      { en: 'TypeScript', de: 'TypeScript' },
      { en: 'Blockchain', de: 'Blockchain' },
      { en: 'AI Agents', de: 'KI Agenten' },
      { en: 'Grants', de: 'Grants' },
      { en: 'Open Source', de: 'Open Source' },
      { en: 'Product', de: 'Produkt' },
    ],
  },
  {
    id: 1,
    current: false,
    title: { en: 'Community & Growth Manager', de: 'Community & Growth Manager' },
    org: 'growthepie',
    location: { en: 'Remote', de: 'Remote' },
    dates: { en: 'Jun 2023 – Jul 2024', de: 'Jun 2023 – Jul 2024' },
    bullets: [
      {
        kw: { en: 'Community management', de: 'Community Management' },
        detail: { en: 'Web3 developers & researchers; blockchain analytics awareness', de: 'Web3-Entwickler & Researcher; Blockchain-Analytics-Awareness' },
      },
      {
        kw: { en: 'Content strategy', de: 'Content Strategie' },
        detail: { en: 'on-chain data translated into accessible narratives', de: 'On-Chain-Daten in zugängliche Narrative übersetzt' },
      },
      {
        kw: { en: 'Sales & partnerships', de: 'Sales & Partnerschaften' },
        detail: { en: 'protocol relationships; contribution to growth engine', de: 'Protokoll-Beziehungen; Beitrag zur Wachstums-Engine' },
      },
    ],
    tags: [
      { en: 'Community', de: 'Community' },
      { en: 'Content Strategy', de: 'Content Strategie' },
      { en: 'Web3', de: 'Web3' },
      { en: 'Sales', de: 'Sales' },
    ],
  },
  {
    id: 2,
    current: false,
    title: { en: 'Design Thinking Coach & Student Assistant', de: 'Design Thinking Coach & Studentische Hilfskraft' },
    org: 'FH Aachen University',
    location: { en: 'Germany', de: 'Deutschland' },
    dates: { en: 'Mar 2022 – Dec 2023', de: 'Mrz 2022 – Dez 2023' },
    bullets: [
      {
        kw: { en: 'DT workshops', de: 'DT Workshops' },
        detail: { en: 'students & faculty; problem framing before solutioning', de: 'Studierende & Lehrende; Problem-Framing vor Lösungssuche' },
      },
      {
        kw: { en: 'HCD methodology', de: 'HCD Methodik' },
        detail: { en: 'engineering curriculum; human-centered design', de: 'Ingenieur-Curriculum; menschzentrierte Designprozesse' },
      },
      {
        kw: { en: 'Curriculum', de: 'Curriculum' },
        detail: { en: 'instructional materials & course design', de: 'Lernmaterialien & Kursgestaltung' },
      },
    ],
    tags: [
      { en: 'Design Thinking', de: 'Design Thinking' },
      { en: 'Education', de: 'Bildung' },
      { en: 'Facilitation', de: 'Facilitation' },
    ],
  },
];

export default function Experience({ language }) {
  return (
    <section id="experience" className="relative overflow-hidden py-24 md:py-32 px-6 bg-neutral-50">
      {/* shared ambient paper texture, rotated so it reads fresh */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <img
          src="/images/generated/services-bg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40 rotate-180"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/80 via-transparent to-neutral-50" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section header */}
        <Reveal className="flex flex-col md:flex-row md:justify-between md:items-end mb-16">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-ink">
              {language === 'de' ? 'Berufserfahrung' : 'Professional Experience'}
            </h2>
            <div className="w-16 h-1 bg-primary mt-3 rounded-full"></div>
          </div>
          <p className="text-sm text-neutral-500 mt-4 md:mt-0 md:text-right font-medium tracking-wide">
            {language === 'de' ? 'LÜCKEN IDENTIFIZIERT. SYSTEME GEBAUT. ERGEBNISSE GELIEFERT.' : 'GAPS IDENTIFIED. SYSTEMS BUILT. RESULTS SHIPPED.'}
          </p>
        </Reveal>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical rail (md+) */}
          <div className="hidden md:block absolute left-5 top-2 bottom-2 w-px bg-neutral-200"></div>

          <Stagger className="space-y-10">
            {roles.map((role) => (
              <StaggerItem key={role.id} className="relative md:pl-16">
                {/* Marker (md+) */}
                <div
                  className={`hidden md:flex absolute left-0 top-6 w-10 h-10 rounded-full items-center justify-center z-10 ${role.current ? 'bg-primary shadow-sm shadow-primary/30' : 'bg-white border-2 border-neutral-300'
                    }`}
                >
                  <span
                    className={`rounded-full ${role.current ? 'w-2.5 h-2.5 bg-white' : 'w-2 h-2 bg-neutral-400'}`}
                  ></span>
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl border border-neutral-200 p-6 md:p-8 hover:shadow-md transition-shadow duration-200">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-ink">{role.title[language]}</h3>
                      <p className="text-sm text-neutral-500 mt-1">{role.org} · {role.location[language]}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {role.current && (
                        <span className="flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                          {language === 'de' ? 'Aktuell' : 'Current'}
                        </span>
                      )}
                      <span className="text-xs text-neutral-500 font-medium">{role.dates[language]}</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    {role.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3 text-sm text-neutral-700 leading-relaxed">
                        <span className="mt-2 w-1 h-1 rounded-full bg-accent shrink-0"></span>
                        <span><strong className="text-ink font-semibold">{bullet.kw[language]}</strong> — {bullet.detail[language]}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {role.tags.map((tag) => (
                      <span key={tag.en} className="text-xs font-medium text-neutral-600 bg-neutral-100 border border-neutral-200 rounded-full px-2.5 py-1">
                        {tag[language]}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

      </div>
    </section>
  );
}
