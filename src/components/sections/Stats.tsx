'use client'

import { useLocale } from 'next-intl'
import { t } from '@/lib/dictionary'
import dictionary from '@/lib/dictionary'

export default function Stats() {
  const locale = useLocale() as 'en' | 'es'

  const items = [
    { value: '1,500+', label: t(dictionary.stats.coated, locale) },
    { value: '100%', label: t(dictionary.stats.quality, locale) },
    { value: '4.9\u2605', label: t(dictionary.stats.rating, locale) },
    { value: '3+', label: t(dictionary.stats.years, locale) },
  ]

  return (
    <section className="relative -mt-16 z-[3] pb-[clamp(2rem,5vw,4rem)]">
      <div className="container-ag">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden bg-border dark:bg-[#2D3748] shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center justify-center gap-1 py-8 md:py-10 px-4 bg-surface dark:bg-[#1A2332]"
            >
              <span className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-extrabold text-blue-bright leading-none">
                {item.value}
              </span>
              <span className="text-xs md:text-sm text-muted text-center leading-tight max-w-[18ch]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
