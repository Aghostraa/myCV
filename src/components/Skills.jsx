import { Reveal, Stagger, StaggerItem } from './motion/primitives';
import { skillContent } from '../data/skills';

export default function Skills({ language }) {
  const c = language === 'de' ? skillContent.de : skillContent.en;

  return (
    <section id="skills" className="relative overflow-hidden py-24 md:py-32">
      {/* shared ambient paper texture, mirrored so it reads fresh */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <img
          src="/images/generated/services-bg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40 -scale-x-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/80 via-transparent to-neutral-50" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-4">
          <Reveal as="div" y={20} once amount={0.2} className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent mb-3">
              {c.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-neutral-900">
              {c.heading}
            </h2>
          </Reveal>
        </div>

        {/* GitHub activity */}
        <Reveal as="div" y={20} once amount={0.2} className="mb-16 rounded-xl border border-neutral-200 bg-white p-6 md:p-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-display font-semibold text-neutral-900">
              {c.githubTitle}
            </h3>
            <a
              href="https://github.com/Aghostraa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-500 hover:text-primary transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded"
            >
              @Aghostraa
            </a>
          </div>
          <div className="overflow-x-auto">
            <a href="https://github.com/Aghostraa" target="_blank" rel="noopener noreferrer" className="block min-w-[760px]">
              <img
                src="https://ghchart.rshah.org/Aghostraa"
                alt={c.githubAlt}
                loading="lazy"
                className="w-full"
              />
            </a>
          </div>
        </Reveal>

        {/* Skill categories */}
        <Stagger className="grid md:grid-cols-2 gap-x-10 gap-y-12">
          {c.groups.map((group) => (
            <StaggerItem key={group.id} as="div" y={20}>
              <div className="flex items-center gap-2 mb-4">
                <group.icon className="h-5 w-5 text-neutral-500" strokeWidth={1.75} />
                <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
                  {group.title}
                </h3>
              </div>
              <Stagger as="ul" stagger={0.02} className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <StaggerItem
                    key={skill}
                    as="li"
                    y={8}
                    className="text-sm text-neutral-700 bg-neutral-100 border border-neutral-200 rounded-full px-3 py-1.5"
                  >
                    {skill}
                  </StaggerItem>
                ))}
              </Stagger>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Languages */}
        <div className="mt-16 md:mt-20">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 mb-6">
            {c.languagesTitle}
          </h3>
          <Stagger className="grid sm:grid-cols-3 gap-6">
            {c.languages.map((lang) => (
              <StaggerItem
                key={lang.name}
                as="div"
                y={20}
                className="rounded-xl border border-neutral-200 bg-white p-5"
              >
                <h4 className="text-base font-display font-semibold text-neutral-900">{lang.name}</h4>
                <p className="text-sm text-neutral-500">{lang.level}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
