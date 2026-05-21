'use client'

import { useState } from 'react'
import { useA11y } from './AccessibilityProvider'

interface Option<T> {
  value: T
  label: string
}

const fontSizes: Option<'normal' | 'large' | 'xlarge'>[] = [
  { value: 'normal', label: 'Normal' },
  { value: 'large', label: 'Large' },
  { value: 'xlarge', label: 'X-Large' },
]

const toggles: {
  key: 'contrast' | 'motion' | 'fontStyle' | 'letterSpacing'
  label: string
  onLabel: string
  offLabel: string
}[] = [
  { key: 'contrast', label: 'High contrast', onLabel: 'On', offLabel: 'Off' },
  { key: 'motion', label: 'Reduced motion', onLabel: 'On', offLabel: 'Off' },
  { key: 'fontStyle', label: 'Readable font', onLabel: 'On', offLabel: 'Off' },
  { key: 'letterSpacing', label: 'Letter spacing', onLabel: 'On', offLabel: 'Off' },
]

export default function AccessibilityPanel() {
  const [open, setOpen] = useState(false)
  const { settings, update, reset } = useA11y()

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Accessibility settings"
        aria-expanded={open}
        className="fixed bottom-5 left-5 z-50 w-11 h-11 rounded-full bg-navy dark:bg-surface text-white dark:text-navy grid place-items-center shadow-lg hover:scale-110 transition-transform border-2 border-white/20"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4" />
          <path d="M12 16h.01" />
        </svg>
      </button>

      {open && (
        <div
          className="fixed bottom-20 left-5 z-50 w-[280px] bg-surface dark:bg-navy border border-border rounded-[16px] p-5 shadow-xl"
          role="dialog"
          aria-label="Accessibility settings"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-fg">Accessibility</h2>
            <button
              onClick={reset}
              className="text-[11px] text-muted hover:text-blue-bright transition-colors"
              aria-label="Reset accessibility settings"
            >
              Reset
            </button>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <span className="text-[11px] text-muted font-medium">Font size</span>
              <div className="flex gap-1">
                {fontSizes.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => update({ fontSize: opt.value })}
                    className={`flex-1 min-h-[44px] px-2 py-1.5 rounded-md text-[11px] font-medium transition-colors ${
                      settings.fontSize === opt.value
                        ? 'bg-blue-bright text-white'
                        : 'bg-page dark:bg-[#0A1426] text-fg'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {toggles.map((t) => {
              const isOn = settings[t.key] !== 'normal'
              return (
                <div key={t.key} className="flex items-center justify-between">
                  <span className="text-[13px] text-fg">{t.label}</span>
                  <button
                    onClick={() => update({ [t.key]: isOn ? 'normal' : 'on' } as any)}
                    className={`relative shrink-0 w-11 h-6 rounded-full transition-colors overflow-hidden p-0 border-0 cursor-pointer ${
                      isOn ? 'bg-blue-bright' : 'bg-border'
                    }`}
                    role="switch"
                    aria-checked={isOn}
                    aria-label={t.label}
                  >
                    <span
                      className={`absolute top-[3px] w-[18px] h-[18px] rounded-full bg-white transition-all shadow-sm ${
                        isOn ? 'left-[23px]' : 'left-[3px]'
                      }`}
                    />
                  </button>
                </div>
              )
            })}
          </div>

          <p className="text-[10px] text-muted mt-4 text-center">WCAG-compliant settings saved locally</p>
        </div>
      )}
    </>
  )
}
