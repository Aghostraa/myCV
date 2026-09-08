import { createContext, useContext, useEffect, useState } from 'react'

const LanguageContext = createContext({ language: 'en', setLanguage: () => {} })

const STORAGE_KEY = 'site-language'

function readStored() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored === 'de' || stored === 'en' ? stored : null
  } catch {
    // private mode / blocked storage — fall through to the default
    return null
  }
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => readStored() ?? 'en')

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, language)
    } catch {
      // non-fatal: the toggle still works for this session
    }
    document.documentElement.lang = language
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
