'use client'

import { useLocale } from 'next-intl'
import { t } from '@/lib/dictionary'
import dictionary from '@/lib/dictionary'
import BookingWidget from './BookingWidget'

export default function BookingCTA() {
  const locale = useLocale() as 'en' | 'es'

  return (
    <section id="booking" className="py-[clamp(3rem,8vw,6rem)] bg-surface dark:bg-navy text-fg dark:text-white text-center scroll-mt-24">
      <div className="container-ag flex flex-col gap-14">
        <div className="max-w-[36ch] mx-auto">
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.08em] uppercase text-blue-bright mb-5">
            {t(dictionary.booking.eyebrow, locale)}
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-[-0.015em] text-fg dark:text-white mb-5">
            {t(dictionary.booking.title, locale)}
          </h2>
          <p className="text-muted dark:text-[rgba(255,255,255,0.65)] text-[19px] leading-relaxed max-w-[60ch] mx-auto mb-8">
            {t(dictionary.booking.lead, locale)}
          </p>
        </div>

        <BookingWidget locale={locale} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-5 grid place-items-center rounded-full bg-blue-bright text-white font-[family-name:var(--font-display)] text-[22px] font-bold">
              1
            </div>
            <h3 className="text-fg dark:text-white text-lg font-semibold mb-1.5">
              {t(dictionary.booking.step1Title, locale)}
            </h3>
            <p className="text-muted dark:text-[rgba(255,255,255,0.55)] text-sm">
              {t(dictionary.booking.step1Desc, locale)}
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-5 grid place-items-center rounded-full bg-blue-bright text-white font-[family-name:var(--font-display)] text-[22px] font-bold">
              2
            </div>
            <h3 className="text-fg dark:text-white text-lg font-semibold mb-1.5">
              {t(dictionary.booking.step2Title, locale)}
            </h3>
            <p className="text-muted dark:text-[rgba(255,255,255,0.55)] text-sm">
              {t(dictionary.booking.step2Desc, locale)}
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-5 grid place-items-center rounded-full bg-blue-bright text-white font-[family-name:var(--font-display)] text-[22px] font-bold">
              3
            </div>
            <h3 className="text-fg dark:text-white text-lg font-semibold mb-1.5">
              {t(dictionary.booking.step3Title, locale)}
            </h3>
            <p className="text-muted dark:text-[rgba(255,255,255,0.55)] text-sm">
              {t(dictionary.booking.step3Desc, locale)}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
