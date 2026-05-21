'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/navigation'
import { useTransition } from 'react'

export default function LanguageToggle() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  function switchLang(next: string) {
    startTransition(() => {
      router.replace(pathname, { locale: next })
    })
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex gap-1 bg-surface border border-border rounded-full p-1.5 shadow-[0_4px_12px_rgba(15,37,71,0.10)]" role="group" aria-label="Language selector">
      <button
        onClick={() => switchLang('en')}
        disabled={isPending}
        aria-pressed={locale === 'en'}
        className={`min-w-[44px] min-h-[44px] rounded-full text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-blue-bright focus-visible:outline-offset-2 ${
          locale === 'en' ? 'bg-blue-bright text-white' : 'bg-transparent text-muted'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => switchLang('es')}
        disabled={isPending}
        aria-pressed={locale === 'es'}
        className={`min-w-[44px] min-h-[44px] rounded-full text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-blue-bright focus-visible:outline-offset-2 ${
          locale === 'es' ? 'bg-blue-bright text-white' : 'bg-transparent text-muted'
        }`}
      >
        ES
      </button>
    </div>
  )
}
