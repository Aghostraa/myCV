import { useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import BrandPage from './pages/BrandPage.jsx'
import CVPage from './pages/CVPage.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx'

/**
 * Route changes start at the top; hash links scroll to their section.
 *
 * A deep link like /#projects cannot be left to the browser: it resolves the
 * anchor while parsing index.html, long before React has rendered the section,
 * so there is no element to scroll to and the page just sits at the top. We
 * retry across frames until the target mounts.
 */
function ScrollManager() {
  const { pathname, hash } = useLocation()
  const firstRender = useRef(true)

  useEffect(() => {
    const isInitialLoad = firstRender.current
    firstRender.current = false

    if (!hash) {
      window.scrollTo(0, 0)
      return undefined
    }

    const id = decodeURIComponent(hash.slice(1))
    let frame
    let attempts = 0

    const scrollToTarget = () => {
      const target = document.getElementById(id)
      if (target) {
        // Landing on a deep link should not smooth-scroll the whole page —
        // that reads as a slow drift past every section on arrival.
        target.scrollIntoView({ behavior: isInitialLoad ? 'auto' : 'smooth', block: 'start' })
        return
      }
      // ~1s of frames: enough for hydration, without spinning if the id is bogus
      if (attempts++ < 60) frame = requestAnimationFrame(scrollToTarget)
    }

    frame = requestAnimationFrame(scrollToTarget)
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollManager />
        <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900 antialiased">
          <Routes>
            <Route path="/" element={<BrandPage />} />
            <Route path="/cv" element={<CVPage />} />
            <Route path="*" element={<BrandPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  )
}
