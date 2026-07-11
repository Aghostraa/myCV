import { GraduationCap, Award, CheckCircle2, Compass, LayoutGrid } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from './motion/primitives';

const degrees = [
  {
    id: 0,
    years: '2019 - 2025',
    title: { en: 'Bachelor of Mechanical Engineering – Renewable Energies', de: 'Bachelor Maschinenbau – Erneuerbare Energien' },
    institution: 'FH Aachen University of Applied Sciences',
    description: {
      en: 'Focus: Climate Energy Systems and Renewable Energy. Final grade: 2.2.',
      de: 'Schwerpunkt: Klimaenergiesysteme und erneuerbare Energien. Abschlussnote: 2,2.',
    },
    tags: [
      { en: 'Renewable Energy', de: 'Erneuerbare Energien' },
      { en: 'Climate Energy Systems', de: 'Klimaenergiesysteme' },
      { en: 'Engineering', de: 'Ingenieurwesen' },
      { en: 'Design', de: 'Design' },
      { en: 'Innovation', de: 'Innovation' },
    ],
  },
  {
    id: 1,
    years: '2018 - 2019',
    title: { en: 'German Language, Math & Physics', de: 'Deutsch, Mathematik & Physik' },
    institution: 'FH Aachen University of Applied Sciences',
    description: {
      en: 'Completed preparatory coursework for international students, focusing on German language skills, mathematics, and physics for engineering studies.',
      de: 'Absolvierter Vorbereitungskurs für internationale Studierende mit Schwerpunkt Deutsch, Mathematik und Physik für das Ingenieurstudium.',
    },
    tags: [
      { en: 'German Language', de: 'Deutsch' },
      { en: 'Mathematics', de: 'Mathematik' },
      { en: 'Physics', de: 'Physik' },
    ],
  },
  {
    id: 2,
    years: '2011 - 2018',
    title: { en: 'Math and Physics', de: 'Mathematik und Physik' },
    institution: 'National Organization for Development of Exceptional Talents (Sampad)',
    description: {
      en: 'Graduated from a specialized high school for gifted students with a focus on mathematics and physics.',
      de: 'Abschluss an einer spezialisierten Schule für hochbegabte Schüler mit Fokus auf Mathematik und Physik.',
    },
    tags: [
      { en: 'Mathematics', de: 'Mathematik' },
      { en: 'Physics', de: 'Physik' },
      { en: 'Advanced Studies', de: 'Vertiefte Studien' },
    ],
  },
];

const certifications = [
  {
    id: 0,
    icon: CheckCircle2,
    title: { en: 'Blockchain Basics', de: 'Blockchain Grundlagen' },
    kind: { en: 'Certification', de: 'Zertifizierung' },
    description: {
      en: 'Comprehensive certification in blockchain fundamentals, covering distributed ledger technology and smart contracts.',
      de: 'Umfassende Zertifizierung zu Blockchain-Grundlagen, inklusive Distributed-Ledger-Technologie und Smart Contracts.',
    },
  },
  {
    id: 1,
    icon: Compass,
    title: { en: 'Design Thinking Summer School', de: 'Design Thinking Summer School' },
    kind: { en: 'Certificate', de: 'Zertifikat' },
    description: {
      en: 'Intensive training in design thinking methodologies and user-centered design approaches for innovation.',
      de: 'Intensives Training in Design-Thinking-Methoden und nutzerzentrierten Innovationsansätzen.',
    },
  },
  {
    id: 2,
    icon: LayoutGrid,
    title: { en: 'Summer School Sustainable Entrepreneurship', de: 'Summer School Nachhaltiges Unternehmertum' },
    kind: { en: 'For Climate Action', de: 'Für Klimaschutz' },
    description: {
      en: 'Training in developing sustainable business models and ventures focused on addressing climate change.',
      de: 'Training zur Entwicklung nachhaltiger Geschäftsmodelle und Projekte mit Fokus auf Klimawandel.',
    },
  },
];

export default function Education({ language }) {
  return (
    <section id="education" className="py-24 md:py-32 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <Reveal className="flex flex-col md:flex-row md:justify-between md:items-end mb-14">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-ink">
              {language === 'de' ? 'Bildung' : 'Education'}
            </h2>
            <div className="w-16 h-1 bg-primary mt-3 rounded-full"></div>
          </div>
          <p className="text-sm text-neutral-500 mt-4 md:mt-0 md:text-right font-medium tracking-wide">
            {language === 'de' ? 'AKADEMISCHER HINTERGRUND' : 'ACADEMIC BACKGROUND'}
          </p>
        </Reveal>

        {/* Degrees: light list style */}
        <Stagger className="space-y-4 max-w-4xl">
          {degrees.map((degree) => (
            <StaggerItem
              key={degree.id}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 bg-white rounded-xl border border-neutral-200 p-6"
            >
              <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:w-36 shrink-0">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5 text-accent" strokeWidth={1.5} />
                </div>
                <span className="text-sm font-semibold text-neutral-500">{degree.years}</span>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-semibold text-ink">{degree.title[language]}</h3>
                <div className="text-sm text-neutral-500 mt-0.5">{degree.institution}</div>
                <p className="text-sm text-neutral-700 leading-relaxed mt-3">
                  {degree.description[language]}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {degree.tags.map((tag) => (
                    <span key={tag.en} className="text-xs font-medium text-neutral-600 bg-neutral-100 border border-neutral-200 rounded-full px-2.5 py-1">
                      {tag[language]}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Certifications */}
        <div className="mt-16 max-w-6xl">
          <Reveal as="h3" className="text-xl font-semibold text-ink mb-6 flex items-center gap-2">
            <Award className="w-5 h-5 text-primary" strokeWidth={1.5} />
            {language === 'de' ? 'Zertifikate' : 'Certifications'}
          </Reveal>

          <Stagger className="grid md:grid-cols-3 gap-4">
            {certifications.map((cert) => {
              const Icon = cert.icon;
              return (
                <StaggerItem key={cert.id} className="bg-white p-5 rounded-xl border border-neutral-200">
                  <div className="flex items-center mb-3">
                    <div className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center mr-3 shrink-0">
                      <Icon className="w-4.5 h-4.5 text-neutral-600" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-ink leading-snug">{cert.title[language]}</h4>
                      <p className="text-xs text-neutral-500">{cert.kind[language]}</p>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {cert.description[language]}
                  </p>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
