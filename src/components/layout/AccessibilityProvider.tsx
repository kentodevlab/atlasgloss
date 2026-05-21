'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

type FontSize = 'normal' | 'large' | 'xlarge'
type Contrast = 'normal' | 'high'
type Motion = 'normal' | 'reduced'
type FontStyle = 'normal' | 'accessible'
type LetterSpacing = 'normal' | 'wide'

interface A11ySettings {
  fontSize: FontSize
  contrast: Contrast | 'on'
  motion: Motion | 'on'
  fontStyle: FontStyle | 'on'
  letterSpacing: LetterSpacing | 'on'
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
const STYLE_ID = 'a11y-motion-style'

function map(key: string, val: string): string {
  if (val !== 'on') return val
  switch (key) {
    case 'contrast': return 'high'
    case 'motion': return 'reduced'
    case 'fontStyle': return 'accessible'
    case 'letterSpacing': return 'wide'
    default: return val
  }
}

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

  const contrast = map('contrast', settings.contrast as string)
  if (contrast === 'high') {
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
    ;['--color-page', '--color-surface', '--color-fg', '--color-muted',
      '--color-border', '--color-blue-bright', '--color-blue-deep', '--color-houston'
    ].forEach((p) => s.removeProperty(p))
  }

  const motion = map('motion', settings.motion as string)
  let styleEl = document.getElementById(STYLE_ID) as HTMLStyleElement | null
  if (motion === 'reduced') {
    if (!styleEl) {
      styleEl = document.createElement('style')
      styleEl.id = STYLE_ID
      document.head.appendChild(styleEl)
    }
    styleEl.textContent = '*, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }'
  } else if (styleEl) {
    styleEl.remove()
  }

  const fontStyle = map('fontStyle', settings.fontStyle as string)
  if (fontStyle === 'accessible') {
    s.setProperty('--font-body', "'Tahoma', sans-serif")
    s.setProperty('--font-display', "'Tahoma', sans-serif")
    s.setProperty('--font-mono', "'Courier New', monospace")
  } else {
    s.removeProperty('--font-body')
    s.removeProperty('--font-display')
    s.removeProperty('--font-mono')
  }

  const letterSpacing = map('letterSpacing', settings.letterSpacing as string)
  if (letterSpacing === 'wide') {
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
