import { GraduationCap, Award } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from './motion/primitives';
import { degrees, certifications } from '../data/education';

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
