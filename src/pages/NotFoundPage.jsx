import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import PageMeta from '../components/PageMeta.jsx'
import { routeMeta } from '../data/meta'
import Footer from '../components/Footer.jsx'

/**
 * The catch-all route used to render the brand page, which meant every typo,
 * stale link and bot probe returned HTTP 200 with the full homepage at a
 * foreign URL — a soft 404 that lets arbitrary paths get indexed as duplicates
 * of `/`. Vercel cannot return a true 404 status for a client-routed SPA
 * fallback without an edge function, so this page carries `noindex` instead:
 * the status stays 200, but nothing here is eligible for the index.
 */
export default function NotFoundPage() {
  const { language } = useLanguage()
  const de = language === 'de'

  return (
    <>
      <PageMeta
        title={routeMeta.notFound.title[language]}
        description={routeMeta.notFound.description[language]}
        path="/404"
        language={language}
        noindex
      />
      <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
        <p className="font-display text-6xl font-semibold text-neutral-300">404</p>
        <h1 className="mt-4 font-display text-2xl font-semibold text-ink">
          {de ? 'Seite nicht gefunden' : 'Page not found'}
        </h1>
        <p className="mt-3 max-w-md text-neutral-500">
          {de
            ? 'Diese Adresse gibt es nicht — vielleicht ein Tippfehler oder ein veralteter Link.'
            : 'That address does not exist — likely a typo or an out-of-date link.'}
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-fg transition-colors duration-150 hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
          {de ? 'Zurück zur Startseite' : 'Back to home'}
        </Link>
      </main>
      <Footer language={language} />
    </>
  )
}
