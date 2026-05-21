'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

type FontSize = 'normal' | 'large' | 'xlarge'
type Contrast = 'normal' | 'high'
type Motion = 'normal' | 'reduced'
type FontStyle = 'normal' | 'accessible'
type LetterSpacing = 'normal' | 'wide'

interface A11ySettings {
  fontSize: FontSize
  contrast: Contrast
  motion: Motion
  fontStyle: FontStyle
  letterSpacing: LetterSpacing
}

interface A11yContextValue {
  settings: A11ySettings
  update: (patch: Partial<A11ySettings>) => void
  reset: () => void
}

const defaults: A11ySettings = {
  fontSize: 'normal',
  contrast: 'normal',
  motion: 'normal',
  fontStyle: 'normal',
  letterSpacing: 'normal',
}

const A11yContext = createContext<A11yContextValue>({
  settings: defaults,
  update: () => {},
  reset: () => {},
})

export const useA11y = () => useContext(A11yContext)

const STORAGE_KEY = 'a11y-settings'

export default function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<A11ySettings>(defaults)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        setSettings({ ...defaults, ...parsed })
      }
    } catch {}
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const root = document.documentElement

    root.classList.toggle('a11y-font-lg', settings.fontSize === 'large')
    root.classList.toggle('a11y-font-xl', settings.fontSize === 'xlarge')
    root.classList.toggle('a11y-high-contrast', settings.contrast === 'high')
    root.classList.toggle('a11y-reduced-motion', settings.motion === 'reduced')
    root.classList.toggle('a11y-font-accessible', settings.fontStyle === 'accessible')
    root.classList.toggle('a11y-letter-spacing', settings.letterSpacing === 'wide')

    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
  }, [settings, mounted])

  function update(patch: Partial<A11ySettings>) {
    setSettings((prev) => ({ ...prev, ...patch }))
  }

  function reset() {
    setSettings(defaults)
  }

  return (
    <A11yContext.Provider value={{ settings, update, reset }}>
      {children}
    </A11yContext.Provider>
  )
}
