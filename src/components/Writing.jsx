import { ArrowUpRight } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from './motion/primitives';

const content = {
  en: {
    eyebrow: 'Writing',
    heading: 'Writing & thinking in public',
    articles: [
      {
        id: 'ethereum-state',
        href: 'https://app.t2.world/article/cm13hjiki91314821mcrbk78i1q',
        meta: 'Award-winning · t2.world',
        title: 'The State of the Ethereum Ecosystem',
        description: 'Analysis of growth metrics, L2 fragmentation, and where the ecosystem is heading.',
      },
      {
        id: 'circles-imagination-gap',
        href: null,
        meta: 'Coming soon',
        title: 'Why the Circles imagination gap is the real UX problem',
        description: 'Product analysis of Gnosis App — what it could become if it showed people what trust-based money actually feels like.',
      },
    ],
  },
  de: {
    eyebrow: 'Schreiben',
    heading: 'Wie ich in der Öffentlichkeit denke',
    articles: [
      {
        id: 'ethereum-state',
        href: 'https://app.t2.world/article/cm13hjiki91314821mcrbk78i1q',
        meta: 'Ausgezeichnet · t2.world',
        title: 'Der Stand des Ethereum Ecosystems',
        description: 'Analyse von Wachstumsmetriken, L2-Fragmentierung und wohin das Ecosystem steuert.',
      },
      {
        id: 'circles-imagination-gap',
        href: null,
        meta: 'In Arbeit',
        title: 'Warum die Circles Imagination Gap das eigentliche UX-Problem ist',
        description: 'Produktanalyse der Gnosis App — was sie werden könnte, wenn sie zeigen würde, wie vertrauensbasiertes Geld sich wirklich anfühlt.',
      },
    ],
  },
};

export default function Writing({ language }) {
  const c = language === 'de' ? content.de : content.en;

  return (
    <section id="writing" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <Reveal as="div" y={20} once amount={0.2} className="max-w-2xl mb-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent mb-3">
            {c.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-neutral-900">
            {c.heading}
          </h2>
        </Reveal>

        {/* Article list */}
        <Stagger as="ul" className="divide-y divide-neutral-200 border-y border-neutral-200">
          {c.articles.map((article) => (
            <StaggerItem key={article.id} as="li" y={20}>
              {article.href ? (
                <a
                  href={article.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-6 py-6 md:py-7 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded"
                >
                  <div className="min-w-0">
                    <p className="text-sm text-neutral-500 mb-1">{article.meta}</p>
                    <h3 className="text-lg font-display font-semibold text-neutral-900 group-hover:text-primary transition-colors duration-200">
                      {article.title}
                    </h3>
                    <p className="text-base leading-relaxed text-neutral-600 mt-1">
                      {article.description}
                    </p>
                  </div>
                  <ArrowUpRight
                    className="h-5 w-5 flex-shrink-0 text-neutral-400 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 mt-1"
                    strokeWidth={1.75}
                  />
                </a>
              ) : (
                <div className="flex items-start justify-between gap-6 py-6 md:py-7 opacity-60">
                  <div className="min-w-0">
                    <p className="text-sm text-neutral-500 mb-1">{article.meta}</p>
                    <h3 className="text-lg font-display font-semibold text-neutral-700">
                      {article.title}
                    </h3>
                    <p className="text-base leading-relaxed text-neutral-500 mt-1">
                      {article.description}
                    </p>
                  </div>
                </div>
              )}
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
