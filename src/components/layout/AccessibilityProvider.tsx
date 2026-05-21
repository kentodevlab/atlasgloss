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

function apply(settings: A11ySettings) {
  const root = document.documentElement
  const s = root.style

  if (settings.fontSize === 'large') {
    s.setProperty('font-size', '112.5%')
  } else if (settings.fontSize === 'xlarge') {
    s.setProperty('font-size', '125%')
  } else {
    s.removeProperty('font-size')
  }

  if (settings.contrast === 'high') {
    const isDark = root.classList.contains('dark')
    s.setProperty('--color-page', isDark ? '#000000' : '#FFFFFF')
    s.setProperty('--color-surface', isDark ? '#000000' : '#FFFFFF')
    s.setProperty('--color-fg', isDark ? '#FFFFFF' : '#000000')
    s.setProperty('--color-muted', isDark ? '#E0E0E0' : '#1A1A1A')
    s.setProperty('--color-border', isDark ? '#FFFFFF' : '#000000')
    s.setProperty('--color-blue-bright', isDark ? '#66B3FF' : '#0044CC')
    s.setProperty('--color-blue-deep', isDark ? '#3399FF' : '#002288')
    s.setProperty('--color-houston', isDark ? '#FF8833' : '#CC5500')
  } else {
    s.removeProperty('--color-page')
    s.removeProperty('--color-surface')
    s.removeProperty('--color-fg')
    s.removeProperty('--color-muted')
    s.removeProperty('--color-border')
    s.removeProperty('--color-blue-bright')
    s.removeProperty('--color-blue-deep')
    s.removeProperty('--color-houston')
  }

  if (settings.motion === 'reduced') {
    s.setProperty('animation-duration', '0.01ms !important')
    s.setProperty('transition-duration', '0.01ms !important')
  } else {
    s.removeProperty('animation-duration')
    s.removeProperty('transition-duration')
  }

  if (settings.fontStyle === 'accessible') {
    s.setProperty('--font-body', "'Tahoma', sans-serif")
    s.setProperty('--font-display', "'Tahoma', sans-serif")
    s.setProperty('--font-mono', "'Courier New', monospace")
  } else {
    s.removeProperty('--font-body')
    s.removeProperty('--font-display')
    s.removeProperty('--font-mono')
  }

  if (settings.letterSpacing === 'wide') {
    s.setProperty('letter-spacing', '0.12em')
    s.setProperty('word-spacing', '0.16em')
  } else {
    s.removeProperty('letter-spacing')
    s.removeProperty('word-spacing')
  }
}

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
    apply(settings)
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
