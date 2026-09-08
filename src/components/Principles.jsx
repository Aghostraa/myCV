import { Search, Zap, ShieldCheck, BookOpen } from 'lucide-react'
import { Reveal, Stagger, StaggerItem } from './motion/primitives'

/**
 * How I work — the operating principles behind the catalogue, each one backed by
 * a project that proves it. Distinct from the Services engagement steps
 * (Audit → Pilot → Deploy → Support), which describe the client process rather
 * than the working method.
 */
const principles = [
  {
    icon: Search,
    title: { en: 'Find the expensive gap first', de: 'Zuerst die teure Lücke finden' },
    body: {
      en: 'Before writing code I look for the step that quietly costs the most — the four-hour manual task, the hour-per-contact outreach. That is where a system pays for itself.',
      de: 'Vor dem Code suche ich den Schritt, der still am meisten kostet — die Vier-Stunden-Handarbeit, die Stunde pro Kontakt. Genau dort rechnet sich ein System.',
    },
    proof: { en: 'Proof: €1 → €0.01 per label, 4h → 10min', de: 'Beleg: €1 → €0,01 pro Label, 4h → 10min' },
  },
  {
    icon: Zap,
    title: { en: 'Ship a working slice fast', de: 'Schnell eine funktionierende Scheibe liefern' },
    body: {
      en: 'A small system running against real data beats a large one in a document. The first version goes live in days or weeks, then grows against what actually breaks.',
      de: 'Ein kleines System an echten Daten schlägt ein großes im Dokument. Die erste Version geht in Tagen oder Wochen live und wächst an dem, was tatsächlich bricht.',
    },
    proof: {
      en: 'Proof: outreach workflow built from zero in two days',
      de: 'Beleg: Outreach-Workflow in zwei Tagen von null gebaut',
    },
  },
  {
    icon: ShieldCheck,
    title: { en: 'Verify instead of trusting', de: 'Verifizieren statt vertrauen' },
    body: {
      en: 'Agents and pipelines fail quietly, so I build the check in: verified inference that fails closed, retrieval over real datasheets instead of recalled specs, gates on metrics that matter.',
      de: 'Agenten und Pipelines scheitern leise, also baue ich die Prüfung ein: verifizierte Inferenz, die im Zweifel abbricht, Retrieval über echte Datenblätter statt erinnerter Specs, Gates auf relevanten Metriken.',
    },
    proof: { en: 'Proof: TeeML-verified runtime, hw-rag datasheet server', de: 'Beleg: TeeML-verifizierte Runtime, hw-rag Datenblatt-Server' },
  },
  {
    icon: BookOpen,
    title: { en: 'Leave it running without me', de: 'Es soll ohne mich laufen' },
    body: {
      en: 'A system that needs its author is a liability. I hand over documentation and train the team, so what I build keeps running after I step away from it.',
      de: 'Ein System, das seinen Autor braucht, ist ein Risiko. Ich übergebe Dokumentation und schule das Team, damit Gebautes weiterläuft, wenn ich mich zurückziehe.',
    },
    proof: {
      en: 'Proof: internal AI training + docs, systems still in production',
      de: 'Beleg: internes KI-Training + Doku, Systeme weiterhin in Produktion',
    },
  },
]

export default function Principles({ language = 'en' }) {
  return (
    <section id="method" className="bg-neutral-50 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 max-w-2xl md:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-accent">
            {language === 'de' ? 'Arbeitsweise' : 'How I work'}
          </p>
          <h2 className="mb-4 font-display text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            {language === 'de' ? 'Vier Regeln hinter jedem Projekt' : 'Four rules behind every project'}
          </h2>
          <p className="text-base leading-relaxed text-neutral-600 md:text-lg">
            {language === 'de'
              ? 'Die Projekte im Katalog sehen unterschiedlich aus. Die Arbeitsweise dahinter ist jedes Mal dieselbe.'
              : 'The projects in the catalogue look nothing alike. The method behind them is the same every time.'}
          </p>
        </Reveal>

        <Stagger className="grid items-stretch gap-6 md:grid-cols-2">
          {principles.map((principle, i) => {
            const Icon = principle.icon
            return (
              <StaggerItem key={principle.title.en} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 md:p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon size={18} />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="mb-3 font-display text-xl font-semibold text-neutral-900">
                    {principle.title[language] ?? principle.title.en}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-600">
                    {principle.body[language] ?? principle.body.en}
                  </p>

                  <p className="mt-auto pt-5 text-xs font-semibold uppercase tracking-wide text-accent">
                    {principle.proof[language] ?? principle.proof.en}
                  </p>
                </div>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
