import { Reveal, Stagger, StaggerItem } from './motion/primitives';
import { roles } from '../data/experience';


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
