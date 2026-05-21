'use client'

import { useState, useEffect } from 'react'
import { useLocale } from 'next-intl'
import { Link } from '@/navigation'

type Consent = 'accepted' | 'rejected' | null

const content: Record<string, { title: string; message: string; accept: string; reject: string; details: string }> = {
  en: {
    title: '🍪 We use cookies',
    message: 'We use essential cookies to make our site work. With your consent, we may also use analytics cookies to improve your experience.',
    accept: 'Accept All',
    reject: 'Only Essential',
    details: 'See our Cookie Policy for details.',
  },
  es: {
    title: '🍪 Usamos cookies',
    message: 'Usamos cookies esenciales para que el sitio funcione. Con tu consentimiento, también podemos usar cookies de análisis para mejorar tu experiencia.',
    accept: 'Aceptar Todas',
    reject: 'Solo Esenciales',
    details: 'Consulta nuestra Política de Cookies para más detalles.',
  },
}

export default function CookieBanner() {
  const locale = useLocale() as 'en' | 'es'
  const [consent, setConsent] = useState<Consent>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('cookie-consent') as Consent | null
    if (stored === 'accepted' || stored === 'rejected') {
      setConsent(stored)
    } else {
      setConsent(null)
    }
    setMounted(true)
  }, [])

  function handleAccept() {
    localStorage.setItem('cookie-consent', 'accepted')
    setConsent('accepted')
  }

  function handleReject() {
    localStorage.setItem('cookie-consent', 'rejected')
    setConsent('rejected')
  }

  if (!mounted || consent !== null) return null

  const t = content[locale]

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[60] bg-surface dark:bg-navy border-t border-border p-4 shadow-lg"
      role="dialog"
      aria-label={t.title}
      aria-modal="false"
    >
      <div className="container-ag flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="max-w-[60ch]">
          <p className="text-sm font-semibold text-fg mb-1">{t.title}</p>
          <p className="text-[13px] text-muted leading-relaxed">
            {t.message}{' '}
            <Link href="/cookies" className="text-blue-bright hover:underline text-[13px]">
              {t.details}
            </Link>
          </p>
        </div>
        <div className="flex flex-col-reverse sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
          <button
            onClick={handleReject}
            className="w-full sm:w-auto px-5 py-2.5 rounded-[10px] text-sm font-medium text-fg border border-border hover:bg-page dark:hover:bg-[#0A1426] transition-colors focus-visible:outline-2 focus-visible:outline-blue-bright"
          >
            {t.reject}
          </button>
          <button
            onClick={handleAccept}
            className="w-full sm:w-auto px-5 py-2.5 rounded-[10px] text-sm font-semibold text-white bg-blue-bright border border-blue-bright hover:bg-blue-deep transition-colors focus-visible:outline-2 focus-visible:outline-blue-bright"
          >
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  )
}
