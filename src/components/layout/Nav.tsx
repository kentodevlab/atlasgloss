'use client'

import { useLocale } from 'next-intl'
import { Link } from '@/navigation'
import { t } from '@/lib/dictionary'
import dictionary from '@/lib/dictionary'

export default function Nav() {
  const locale = useLocale() as 'en' | 'es'

  return (
    <header className="sticky top-0 z-40 bg-[rgba(15,37,71,0.96)] backdrop-blur-md border-b border-[rgba(255,255,255,0.08)]">
      <div className="container-ag flex items-center justify-between py-3.5">
        <Link href="/" className="font-[family-name:var(--font-display)] text-[22px] font-bold tracking-[0.04em] uppercase text-white no-underline">
          ATLAS <span className="text-blue-bright">GLOSS</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/#services" className="text-sm font-medium text-[rgba(255,255,255,0.65)] hover:text-white no-underline transition-colors">
            {t(dictionary.nav.services, locale)}
          </Link>
          <Link href="/#gallery" className="text-sm font-medium text-[rgba(255,255,255,0.65)] hover:text-white no-underline transition-colors">
            {t(dictionary.nav.gallery, locale)}
          </Link>
          <Link href="/#testimonials" className="text-sm font-medium text-[rgba(255,255,255,0.65)] hover:text-white no-underline transition-colors">
            {t(dictionary.nav.reviews, locale)}
          </Link>
          <Link href="/#booking" className="text-sm font-medium text-[rgba(255,255,255,0.65)] hover:text-white no-underline transition-colors">
            {t(dictionary.nav.bookNow, locale)}
          </Link>
        </nav>

        <Link
          href="/#booking"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-[10px] bg-blue-bright text-white text-sm font-semibold border border-blue-bright no-underline hover:bg-blue-deep transition-colors"
        >
          {t(dictionary.nav.bookNow, locale)}
        </Link>
      </div>
    </header>
  )
}
