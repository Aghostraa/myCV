import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, AlertTriangle } from 'lucide-react'
import { Reveal } from '../components/motion/primitives'
import Footer from '../components/Footer.jsx'
import { useLanguage } from '../context/LanguageContext'
import { getLegalDoc, hasUnfilledLegalFields } from '../data/legal'
import PageMeta from '../components/PageMeta.jsx'
import { routeMeta } from '../data/meta'

/**
 * Impressum and Datenschutzerklärung share this shell — same structure, same
 * typography, different document from `src/data/legal.js`.
 *
 * Deliberately not wrapped in <Header>: that component owns the hero and its
 * scroll-zoom, which a plain legal document has no use for. A slim bar with a
 * back link and the language toggle is all this page needs.
 */
export default function LegalPage({ slug }) {
  const { language, setLanguage } = useLanguage()
  const de = language === 'de'
  const doc = useMemo(() => getLegalDoc(slug, language), [slug, language])

  if (!doc) return null

  const meta = routeMeta[slug] ?? routeMeta.impressum

  return (
    <>
      <PageMeta
        title={meta.title[language]}
        description={meta.description[language]}
        path={`/${slug}`}
        language={language}
      />
      <div className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors duration-150 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
            {de ? 'Zurück zur Startseite' : 'Back to home'}
          </Link>

          <div className="flex items-center gap-1 text-sm">
            {['en', 'de'].map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLanguage(code)}
                aria-pressed={language === code}
                className={`rounded px-2 py-1 uppercase tracking-wide transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  language === code
                    ? 'text-primary font-semibold'
                    : 'text-neutral-400 hover:text-neutral-700'
                }`}
              >
                {code}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <Reveal>
          <h1 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">
            {doc.title[language]}
          </h1>
          <p className="mt-3 text-sm text-neutral-500">{doc.intro[language]}</p>
        </Reveal>

        {/* Never ship the placeholder address: loud in dev, invisible in prod. */}
        {import.meta.env.DEV && hasUnfilledLegalFields() && (
          <div className="mt-8 flex gap-3 rounded-lg border border-primary/40 bg-primary/5 p-4 text-sm text-neutral-700">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.75} />
            <p>
              <span className="font-semibold">Dev warning:</span> placeholder details are still in{' '}
              <code className="font-mono text-xs">src/data/legal.js</code>. § 5 DDG needs a real
              postal address and a second contact channel before this page goes live.
            </p>
          </div>
        )}

        <div className="mt-12 space-y-10">
          {doc.sections.map((section) => (
            <Reveal as="section" key={section.heading.en} className="space-y-4">
              <h2 className="font-display text-xl font-semibold text-neutral-900">
                {section.heading[language]}
              </h2>
              {section.body.map((block, index) => (
                <Block key={index} block={block} language={language} address={doc.address} />
              ))}
            </Reveal>
          ))}
        </div>

        <p className="mt-16 border-t border-neutral-200 pt-6 text-sm text-neutral-500">
          {de
            ? 'Es gilt die deutsche Fassung; die englische Übersetzung dient nur der Verständlichkeit.'
            : 'The German version is the binding one; this English translation is provided for convenience only.'}
        </p>
      </main>

      <Footer language={language} />
    </>
  )
}

function Block({ block, language, address }) {
  if (block.type === 'address') {
    return (
      <address className="not-italic text-base leading-relaxed text-neutral-700">
        {address.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </address>
    )
  }

  if (block.type === 'lines') {
    return (
      <div className="text-base leading-relaxed text-neutral-700">
        {block[language].map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </div>
    )
  }

  if (block.type === 'list') {
    return (
      <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-neutral-700">
        {block[language].map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )
  }

  return <p className="text-base leading-relaxed text-neutral-700">{block[language]}</p>
}
