import { CheckCircle2, Compass, LayoutGrid } from 'lucide-react';

/** Degrees and certifications, shared by the brand site and the CV page. */
export const degrees = [
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

export const certifications = [
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

