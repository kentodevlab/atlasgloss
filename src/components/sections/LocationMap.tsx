'use client'

import { useLocale } from 'next-intl'
import SectionAnimator from '@/components/ui/SectionAnimator'

export default function LocationMap() {
  const locale = useLocale() as 'en' | 'es'

  return (
    <SectionAnimator as="section" className="py-[clamp(3rem,8vw,6rem)]">
      <div className="container-ag flex flex-col gap-10">
        <div className="max-w-[36ch] text-center mx-auto">
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.08em] uppercase text-blue-bright mb-5">
            {locale === 'es' ? 'UBICACIÓN' : 'LOCATION'}
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-[-0.015em]">
            {locale === 'es' ? 'Encuéntranos en Houston' : 'Find us in Houston'}
          </h2>
        </div>

        <div className="w-full aspect-[4/3] md:aspect-[21/9] min-h-[300px] rounded-[16px] overflow-hidden border border-border bg-surface">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221432.2948537037!2d-95.61969765!3d29.77838235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C+TX!5e0!3m2!1sen!2sus!4v1"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '300px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Atlas Gloss location in Houston, TX"
          />
        </div>
      </div>
    </SectionAnimator>
  )
}
