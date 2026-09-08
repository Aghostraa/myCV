import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import BrandPage from './pages/BrandPage.jsx'
import CVPage from './pages/CVPage.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx'

/** Anchor links still work per page; a route change starts at the top. */
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
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
