import { Beaker, GraduationCap, ArrowRight } from 'lucide-react';
import { Reveal, Stagger, StaggerItem, Pressable } from './motion/primitives';

const roles = [
  {
    id: 0,
    title: { en: 'Advisor', de: 'Berater' },
    org: 'Aachen Blockchain Club e.V.',
    dates: { en: 'Mar 2025 - present', de: 'Mrz 2025 - heute' },
    description: {
      en: 'As an advisor to the club, I provide strategic guidance to the executive team, mentor new members, and support blockchain education initiatives at FH Aachen.',
      de: 'Als Berater des Clubs unterstütze ich das Executive Team strategisch, begleite neue Mitglieder und fördere Blockchain-Bildungsinitiativen an der FH Aachen.',
    },
    tags: [
      { en: 'Mentoring', de: 'Mentoring' },
      { en: 'Strategic Planning', de: 'Strategische Planung' },
      { en: 'Blockchain Education', de: 'Blockchain Bildung' },
    ],
    icon: Beaker,
    sector: { en: 'Science and Technology sector', de: 'Wissenschafts- und Technologiesektor' },
  },
  {
    id: 1,
    title: { en: 'President', de: 'Präsident' },
    org: 'Aachen Blockchain Club e.V.',
    dates: { en: 'Jun 2024 - Mar 2025', de: 'Jun 2024 - Mrz 2025' },
    description: {
      en: 'Secured $15k in grant funding for hackathon participation — including a Celestia grant for the Mammothan hackathon and the Solana Ideathon — plus a separate travel scholarship covering 10 students for an international conference.',
      de: 'Fördermittel in Höhe von $15.000 für Hackathon-Teilnahmen gesichert — u.a. ein Celestia-Grant für den Mammothan-Hackathon und das Solana-Ideathon — sowie ein separates Reisestipendium für 10 Studierende zu einer internationalen Konferenz.',
    },
    tags: [
      { en: 'Leadership', de: 'Führung' },
      { en: 'Event Management', de: 'Event-Management' },
      { en: 'Education', de: 'Bildung' },
    ],
    icon: GraduationCap,
    sector: { en: 'Education sector', de: 'Bildungssektor' },
  },
  {
    id: 2,
    title: { en: 'Vice President', de: 'Vizepräsident' },
    org: 'Aachen Blockchain Club e.V.',
    dates: { en: 'Dec 2023 - Jun 2024', de: 'Dez 2023 - Jun 2024' },
    description: {
      en: "Supported the club president in administration and operations, while focusing on building relationships with industry partners and expanding the club's network.",
      de: 'Unterstützung des Präsidenten in Administration und Betrieb mit Fokus auf Partnerschaften und Ausbau des Club-Netzwerks.',
    },
    tags: [
      { en: 'Administration', de: 'Administration' },
      { en: 'Partnership Building', de: 'Partnerschaften' },
      { en: 'Networking', de: 'Netzwerken' },
    ],
    icon: Beaker,
    sector: { en: 'Education sector', de: 'Bildungssektor' },
  },
  {
    id: 3,
    title: { en: 'Board Member Research and Teaching', de: 'Vorstand Forschung und Lehre' },
    org: 'Aachen Blockchain Club e.V.',
    dates: { en: 'Nov 2022 - Dec 2023', de: 'Nov 2022 - Dez 2023' },
    description: {
      en: 'Developed educational curriculum and research initiatives focusing on blockchain technologies, smart contracts, and decentralized applications for university students.',
      de: 'Entwicklung von Lehrinhalten und Forschungsinitiativen zu Blockchain-Technologien, Smart Contracts und dezentralen Anwendungen für Studierende.',
    },
    tags: [
      { en: 'Curriculum Development', de: 'Curriculum-Entwicklung' },
      { en: 'Research', de: 'Forschung' },
      { en: 'Teaching', de: 'Lehre' },
    ],
    icon: GraduationCap,
    sector: { en: 'Education sector', de: 'Bildungssektor' },
  },
];

export default function Volunteer({ language }) {
  return (
    <section id="volunteer" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <Reveal className="flex flex-col md:flex-row md:justify-between md:items-end mb-14">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-ink">
              {language === 'de' ? 'Ehrenamt & Führung' : 'Volunteer & Leadership'}
            </h2>
            <div className="w-16 h-1 bg-primary mt-3 rounded-full"></div>
          </div>
          <p className="text-sm text-neutral-500 mt-4 md:mt-0 md:text-right font-medium tracking-wide">
            {language === 'de' ? 'FÜHRUNG IN DER BLOCKCHAIN-COMMUNITY' : 'LEADERSHIP IN THE BLOCKCHAIN COMMUNITY'}
          </p>
        </Reveal>

        <Stagger className="grid md:grid-cols-2 gap-5">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <StaggerItem
                key={role.id}
                className="bg-neutral-50 rounded-xl border border-neutral-200 p-6 hover:shadow-sm transition-shadow duration-200"
              >
                <div className="flex justify-between items-start gap-3 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-ink">{role.title[language]}</h3>
                    <div className="text-sm text-neutral-500 mt-0.5">{role.org}</div>
                  </div>
                  <span className="shrink-0 text-xs font-medium text-neutral-600 bg-neutral-100 border border-neutral-200 px-2.5 py-1 rounded-full">
                    {role.dates[language]}
                  </span>
                </div>

                <p className="text-sm text-neutral-700 leading-relaxed mb-4">
                  {role.description[language]}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {role.tags.map((tag) => (
                    <span key={tag.en} className="text-xs font-medium text-neutral-600 bg-white border border-neutral-200 rounded-full px-2.5 py-1">
                      {tag[language]}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-sm text-neutral-500">
                  <Icon className="w-4 h-4 mr-1.5 text-accent" strokeWidth={1.5} />
                  <span>{role.sector[language]}</span>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Call to Action */}
        <Reveal className="mt-10 bg-neutral-50 border border-neutral-200 p-8 rounded-xl text-center">
          <h3 className="text-xl font-semibold text-ink mb-3">{language === 'de' ? 'Blockchain-Bildung voranbringen' : 'Facilitating Blockchain Education'}</h3>
          <p className="text-neutral-600 max-w-2xl mx-auto mb-6 text-sm leading-relaxed">
            {language === 'de'
              ? 'Durch meine Rollen im Aachen Blockchain Club fördere ich das Verständnis und die Anwendung von Blockchain-Technologie bei Studierenden und Lehrenden der FH Aachen.'
              : "Through my leadership roles at Aachen Blockchain Club, I'm dedicated to fostering understanding and adoption of blockchain technology among students and faculty at FH Aachen University."}
          </p>
          <Pressable
            as="a"
            href="#contact"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-primary-fg bg-primary rounded-full hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
          >
            {language === 'de' ? 'Kontakt' : 'Contact Me'}
            <ArrowRight className="w-3.5 h-3.5 ml-2" strokeWidth={2} />
          </Pressable>
        </Reveal>
      </div>
    </section>
  );
}
