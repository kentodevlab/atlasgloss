'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { useTransition } from 'react'

export default function LanguageToggle() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  function switchLang(next: string) {
    startTransition(() => {
      const path = pathname.replace(/^\/(en|es)/, `/${next}`)
      router.replace(path)
    })
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex gap-1 bg-surface border border-[#DDE2E8] rounded-full p-1 shadow-[0_4px_12px_rgba(15,37,71,0.10)]">
      <button
        onClick={() => switchLang('en')}
        disabled={isPending}
        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors ${
          locale === 'en' ? 'bg-blue-bright text-white' : 'bg-transparent text-muted'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => switchLang('es')}
        disabled={isPending}
        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors ${
          locale === 'es' ? 'bg-blue-bright text-white' : 'bg-transparent text-muted'
        }`}
      >
        ES
      </button>
    </div>
  )
}
