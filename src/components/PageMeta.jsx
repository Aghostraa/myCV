const SITE = 'https://ahouraazarbin.com'
const DEFAULT_IMAGE = `${SITE}/images/DSC09272.jpg`

/**
 * Per-route document head.
 *
 * React 19 hoists `<title>`, `<meta>` and `<link>` rendered anywhere in the
 * tree up into `<head>`, so no head-management library is needed. `index.html`
 * still carries a static copy of these tags as the pre-hydration fallback;
 * `scripts/prerender.mjs` drops the duplicates it leaves behind, keeping the
 * route-specific tag (the later one) in the built HTML.
 */
export default function PageMeta({
  title,
  description,
  path = '/',
  ogType = 'website',
  image = DEFAULT_IMAGE,
  language = 'en',
  noindex = false,
}) {
  const canonical = `${SITE}${path}`

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex ? <meta name="robots" content="noindex, follow" /> : null}

      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={language} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  )
}
