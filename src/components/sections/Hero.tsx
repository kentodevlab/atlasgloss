'use client'

import { useLocale } from 'next-intl'
import { Link } from '@/navigation'
import { t } from '@/lib/dictionary'
import dictionary from '@/lib/dictionary'

export default function Hero() {
  const locale = useLocale() as 'en' | 'es'

  return (
    <section
      id="hero"
      className="relative min-h-[85dvh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,20,38,0.65)] via-[rgba(10,20,38,0.40)] to-[rgba(10,20,38,0.75)] z-[1]" />

      <div className="relative z-[2] text-center max-w-[780px] px-4 md:px-8 py-14">
        <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.08em] uppercase text-[rgba(255,255,255,0.7)] mb-5">
          {t(dictionary.hero.eyebrow, locale)}
        </p>

        <h1 className="font-[family-name:var(--font-display)] text-white font-extrabold leading-[0.98] tracking-[-0.02em] text-[clamp(2.5rem,7vw,5rem)] mb-5">
          {t(dictionary.hero.titleStart, locale)}
          <span className="text-blue-bright">
            {t(dictionary.hero.titleAccent, locale)}
          </span>
        </h1>

        <p className="text-[clamp(1.0625rem,2vw,1.3125rem)] text-[rgba(255,255,255,0.75)] max-w-[52ch] mx-auto mb-4">
          {t(dictionary.hero.lead, locale)}
        </p>

        <p className="text-[rgba(255,255,255,0.5)] text-sm font-[family-name:var(--font-mono)] mb-8">
          {locale === 'es' ? 'Desde $29 · Lavado a mano · Houston, TX' : 'From $29 · Hand wash · Houston, TX'}
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/#booking"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-[16px] bg-houston text-white text-[17px] font-semibold border border-houston no-underline hover:bg-[#D45A15] hover:shadow-[0_8px_28px_rgba(242,107,31,0.35)] transition-all duration-150"
          >
            {t(dictionary.hero.ctaPrimary, locale)}
          </Link>
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-[16px] bg-transparent text-white text-[17px] font-semibold border border-[rgba(255,255,255,0.35)] no-underline hover:border-white hover:bg-[rgba(255,255,255,0.08)] transition-all duration-150"
          >
            {t(dictionary.hero.ctaSecondary, locale)}
          </Link>
        </div>
      </div>
    </section>
  )
}
