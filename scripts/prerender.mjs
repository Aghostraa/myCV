import { createServer } from 'node:http'
import { readFile, mkdir, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join, extname, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import puppeteer from 'puppeteer'

/**
 * Post-build prerender.
 *
 * The app is a client-rendered Vite SPA, which meant the HTML served to every
 * crawler was an empty `<div id="app">` — 100% of the page text existed only
 * after JavaScript ran. Googlebot renders JS eventually; GPTBot, ClaudeBot and
 * PerplexityBot do not, so the site was effectively a meta description to them.
 *
 * This script serves the built `dist/`, walks every route in the sitemap with a
 * headless browser, and writes the rendered DOM back to disk as static HTML.
 * The SPA still boots and takes over on load — this only changes what arrives
 * in the first response.
 *
 * Routes come from `public/sitemap.xml` so the two cannot drift apart.
 */

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const DIST = join(ROOT, 'dist')
const ORIGIN = 'https://ahouraazarbin.com'
const PORT = 4183

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.mp4': 'video/mp4',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml',
}

async function readRoutes() {
  const xml = await readFile(join(ROOT, 'public', 'sitemap.xml'), 'utf8')
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
  if (!locs.length) throw new Error('No <loc> entries found in public/sitemap.xml')
  return locs.map((loc) => new URL(loc).pathname)
}

/**
 * Static file server for dist/, with the SPA fallback the real host applies.
 *
 * `shell` is a snapshot of the untouched build output taken before anything is
 * written back. Without it, prerendering `/` rewrites dist/index.html and every
 * subsequent route falls back to that file, inheriting the homepage's head.
 */
function serveDist(shell) {
  return new Promise((resolve) => {
    const server = createServer(async (req, res) => {
      const urlPath = decodeURIComponent(req.url.split('?')[0])
      const candidate = join(DIST, urlPath)

      // A missing asset must 404, not fall through to the SPA shell — handing
      // HTML back for a .js request surfaces as `SyntaxError: Unexpected token
      // '<'` and silently produces a half-rendered prerender.
      if (extname(urlPath)) {
        if (!existsSync(candidate)) {
          res.writeHead(404).end('Not found')
          return
        }
        res.writeHead(200, { 'Content-Type': MIME[extname(candidate)] ?? 'application/octet-stream' })
        res.end(await readFile(candidate))
        return
      }

      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
      res.end(shell)
    })
    server.listen(PORT, () => resolve(server))
  })
}

/**
 * Safety net for duplicate head tags. React 19 inserts the tags it hoists at the
 * *front* of <head>, so where a duplicate exists the route-specific one is the
 * first occurrence — keep that and drop the rest.
 */
const DEDUPE_IN_PAGE = () => {
  const keyOf = (el) => {
    if (el.tagName === 'TITLE') return 'title'
    if (el.tagName === 'LINK' && el.rel === 'canonical') return 'canonical'
    if (el.tagName === 'META' && el.name) return `name:${el.name}`
    if (el.tagName === 'META' && el.getAttribute('property')) {
      return `property:${el.getAttribute('property')}`
    }
    return null
  }

  const DEDUPED = new Set([
    'title',
    'canonical',
    'name:description',
    'name:robots',
    'name:twitter:card',
    'name:twitter:title',
    'name:twitter:description',
    'name:twitter:image',
    'property:og:type',
    'property:og:url',
    'property:og:title',
    'property:og:description',
    'property:og:image',
    'property:og:locale',
  ])

  const seenFirst = new Map()
  for (const el of [...document.head.children]) {
    const key = keyOf(el)
    if (!key || !DEDUPED.has(key)) continue
    if (seenFirst.has(key)) el.remove()
    else seenFirst.set(key, el)
  }

  // The preload hints are for the SPA's own boot; a prerendered document has
  // already resolved them, and a stale preload just warns in the console.
  document.documentElement.setAttribute('data-prerendered', 'true')
}

async function main() {
  if (!existsSync(join(DIST, 'index.html'))) {
    throw new Error('dist/index.html missing — run `vite build` before prerendering.')
  }

  const routes = await readRoutes()
  const shell = await readFile(join(DIST, 'index.html'))
  const server = await serveDist(shell)
  const browser = await puppeteer.launch({ headless: true })
  const results = []

  try {
    for (const route of routes) {
      const page = await browser.newPage()
      await page.setViewport({ width: 1280, height: 900 })
      // Ambient loops are deferred until `load` in the app; blocking them keeps
      // the prerender from waiting on ~1.5 MB of decorative video per route.
      await page.setRequestInterception(true)
      page.on('request', (req) => {
        if (req.resourceType() === 'media') req.abort()
        else req.continue()
      })

      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: 'networkidle0',
        timeout: 60_000,
      })
      await page.waitForFunction(
        () => document.querySelector('#app')?.childElementCount > 0,
        { timeout: 30_000 },
      )
      await page.evaluate(DEDUPE_IN_PAGE)

      const html = await page.evaluate(() => `<!doctype html>\n${document.documentElement.outerHTML}`)
      const title = await page.title()
      await page.close()

      const outDir = route === '/' ? DIST : join(DIST, route)
      await mkdir(outDir, { recursive: true })
      await writeFile(join(outDir, 'index.html'), html, 'utf8')

      const bytes = Buffer.byteLength(html)
      results.push({ route, bytes, title })
      console.log(`  ${route.padEnd(24)} ${String(bytes).padStart(7)} B  ${title}`)
    }
  } finally {
    await browser.close()
    server.close()
  }

  console.log(`\nPrerendered ${results.length} routes -> ${ORIGIN}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
