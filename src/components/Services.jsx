import {
  Workflow,
  BookOpenCheck,
  Activity,
  MessagesSquare,
  LayoutDashboard,
  ArrowRight,
} from 'lucide-react';
import { Reveal, Stagger, StaggerItem, Pressable } from './motion/primitives';

const content = {
  en: {
    eyebrow: 'Services',
    heading: 'What I build for businesses',
    intro: 'Consulting and hands-on implementation — I scope the problem, ship a working system, and stay until it runs.',
    howITitle: 'How I work',
    cta: 'Discuss your use case',
    services: [
      {
        icon: Workflow,
        title: 'Agentic Automation & Operations Efficiency',
        body: 'Consulting and implementation of AI agents that take over repetitive back-office work — from process audit to production deployment. Fewer manual steps, lower costs, measurable ROI.',
        tags: ['Process audit', 'AI agents', 'Workflow automation'],
      },
      {
        icon: BookOpenCheck,
        title: 'RAG & Knowledge Assistants',
        body: 'Retrieval-augmented systems over your documents, wikis, and data — so your team and customers get precise answers instead of searching. Private, source-grounded, and auditable.',
        tags: ['RAG pipelines', 'Internal search', 'Document AI'],
      },
      {
        icon: Activity,
        title: 'Predictive Maintenance',
        body: 'Anomaly detection and failure prediction on machine and sensor data, so you fix things before they stop the line. From data assessment to live monitoring.',
        tags: ['Sensor data', 'Anomaly detection', 'Downtime reduction'],
      },
      {
        icon: MessagesSquare,
        title: 'Customer Support Chatbots',
        body: 'Support assistants trained on your products and policies that resolve routine tickets around the clock and hand off cleanly to your team when it matters.',
        tags: ['24/7 support', 'Human handoff', 'Multilingual'],
      },
      {
        icon: LayoutDashboard,
        title: 'Websites & Tools for SMBs',
        body: 'Fast, modern websites and the operational tools around them — reservation systems, shift planning, dashboards — built to fit how your business actually runs.',
        tags: ['Reservation systems', 'Shift planning', 'Dashboards'],
      },
    ],
    steps: [
      { number: '01', title: 'Audit', body: 'Understand the workflow and find the highest-ROI bottleneck.' },
      { number: '02', title: 'Pilot', body: 'A small working system in weeks, not months.' },
      { number: '03', title: 'Deploy', body: 'Production rollout with your team, your data, your stack.' },
      { number: '04', title: 'Support', body: 'Monitoring, iteration, and a clear owner after launch.' },
    ],
  },
  de: {
    eyebrow: 'Leistungen',
    heading: 'Was ich für Unternehmen baue',
    intro: 'Beratung und Umsetzung aus einer Hand – ich analysiere das Problem, liefere ein funktionierendes System und bleibe, bis es läuft.',
    howITitle: 'So arbeite ich',
    cta: 'Use Case besprechen',
    services: [
      {
        icon: Workflow,
        title: 'Agentische Automatisierung & Effizienzberatung',
        body: 'Beratung und Umsetzung von KI-Agenten, die repetitive Backoffice-Arbeit übernehmen – vom Prozess-Audit bis zum Produktiveinsatz. Weniger manuelle Schritte, geringere Kosten, messbarer ROI.',
        tags: ['Prozess-Audit', 'KI-Agenten', 'Workflow-Automatisierung'],
      },
      {
        icon: BookOpenCheck,
        title: 'RAG & Wissensassistenten',
        body: 'Retrieval-Augmented-Systeme über Ihren Dokumenten, Wikis und Daten – damit Team und Kunden präzise Antworten bekommen statt lange zu suchen. Privat, quellenbasiert und nachvollziehbar.',
        tags: ['RAG-Pipelines', 'Interne Suche', 'Dokumenten-KI'],
      },
      {
        icon: Activity,
        title: 'Predictive Maintenance',
        body: 'Anomalieerkennung und Ausfallprognosen auf Maschinen- und Sensordaten – Probleme beheben, bevor die Linie steht. Von der Datenanalyse bis zum Live-Monitoring.',
        tags: ['Sensordaten', 'Anomalieerkennung', 'Weniger Ausfälle'],
      },
      {
        icon: MessagesSquare,
        title: 'Chatbots für den Kundenservice',
        body: 'Support-Assistenten, trainiert auf Ihre Produkte und Prozesse: Routineanfragen rund um die Uhr gelöst, mit sauberer Übergabe an Ihr Team, wenn es darauf ankommt.',
        tags: ['24/7-Support', 'Übergabe an Menschen', 'Mehrsprachig'],
      },
      {
        icon: LayoutDashboard,
        title: 'Websites & Tools für KMU',
        body: 'Schnelle, moderne Websites und die passenden Werkzeuge dahinter – Reservierungssysteme, Schichtplanung, Dashboards – gebaut für Ihre tatsächlichen Abläufe.',
        tags: ['Reservierungssysteme', 'Schichtplanung', 'Dashboards'],
      },
    ],
    steps: [
      { number: '01', title: 'Audit', body: 'Abläufe verstehen und den größten Engpass finden.' },
      { number: '02', title: 'Pilot', body: 'Ein kleines, funktionierendes System in Wochen statt Monaten.' },
      { number: '03', title: 'Deploy', body: 'Produktiv-Rollout mit Ihrem Team, Ihren Daten, Ihrem Stack.' },
      { number: '04', title: 'Support', body: 'Monitoring, Weiterentwicklung und klare Verantwortung nach dem Launch.' },
    ],
  },
};

export default function Services({ language }) {
  const c = language === 'de' ? content.de : content.en;

  return (
    <section id="services" className="relative overflow-hidden py-24 md:py-32">
      {/* generated ambient paper texture, whisper-subtle */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <img
          src="/images/generated/services-bg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/80 via-transparent to-neutral-50" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <Reveal as="div" y={20} once amount={0.2} className="max-w-2xl mb-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent mb-3">
            {c.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-neutral-900 mb-4">
            {c.heading}
          </h2>
          <p className="text-base leading-relaxed text-neutral-600">
            {c.intro}
          </p>
        </Reveal>

        {/* Service cards: 1 col mobile, 2 col md, 3 col lg with last card spanning 2 on lg */}
        <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {c.services.map((service, index) => (
            <StaggerItem
              key={service.title}
              as="div"
              y={20}
              className={[
                'group rounded-xl border border-neutral-200 bg-white p-6 md:p-8 transition-all duration-200 hover:border-neutral-300 hover:shadow-md',
                index === 4 ? 'lg:col-span-1' : '',
              ].join(' ')}
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-neutral-100 text-neutral-700 transition-colors duration-200 group-hover:text-primary">
                <service.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="text-xl font-display font-semibold text-neutral-900 mb-2">
                {service.title}
              </h3>
              <p className="text-base leading-relaxed text-neutral-600 mb-5">
                {service.body}
              </p>
              <ul className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <li
                    key={tag}
                    className="text-sm text-neutral-500 bg-neutral-50 border border-neutral-200 rounded-full px-3 py-1"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>

        {/* How I work strip */}
        <div className="mt-20 md:mt-24">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 mb-8">
            {c.howITitle}
          </h3>
          <Stagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {c.steps.map((step) => (
              <StaggerItem
                key={step.title}
                as="div"
                y={20}
                className="relative pl-4 border-l-2 border-neutral-200"
              >
                <span className="block font-display font-semibold text-2xl text-primary mb-2">
                  {step.number}
                </span>
                <h4 className="text-base font-display font-semibold text-neutral-900 mb-1">
                  {step.title}
                </h4>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {step.body}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* CTA */}
        <div className="mt-16 md:mt-20 flex justify-center">
          <Pressable
            as="a"
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3 text-base font-medium text-neutral-900 transition-all duration-200 hover:border-primary hover:text-primary hover:shadow-sm"
          >
            {c.cta}
            <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
          </Pressable>
        </div>
      </div>
    </section>
  );
}
