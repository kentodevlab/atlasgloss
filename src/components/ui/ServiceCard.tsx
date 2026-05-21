'use client'

import { useLocale } from 'next-intl'
import Button from './Button'
import type { ServicePackage } from '@/types'

interface ServiceCardProps {
  service: ServicePackage
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const locale = useLocale() as 'en' | 'es'
  const name = typeof service.nameKey === 'object' ? service.nameKey[locale] : service.nameKey
  const desc = typeof service.descriptionKey === 'object' ? service.descriptionKey[locale] : service.descriptionKey
  const features: string[] = service.features.map(f => {
    if (typeof f === 'object' && f !== null && 'en' in f) return f[locale]
    return f as string
  })
  const badge = service.featured ? (locale === 'es' ? 'MÁS POPULAR' : 'MOST POPULAR') : null
  const cta = locale === 'es' ? 'Reservar ahora' : 'Book now'

  return (
    <div className={`relative bg-surface border rounded-[16px] p-8 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(15,37,71,0.16),0_4px_8px_rgba(15,37,71,0.06)] ${service.featured ? 'border-blue-bright border-2' : 'border-border'}`}>
      {service.featured && (
        <span className="absolute top-4 right-0 bg-blue-bright text-white font-[family-name:var(--font-mono)] text-[10px] tracking-[0.08em] px-9 py-1 rotate-45 origin-bottom-right translate-x-8">
          {badge}
        </span>
      )}

      <h3 className="font-[family-name:var(--font-display)] text-[26px] font-bold mb-2">
        {name}
      </h3>

      <p className="text-muted text-sm mb-4">
        {desc}
      </p>

      <div className="font-[family-name:var(--font-display)] text-[40px] font-bold text-blue-bright my-5">
        <span className="text-[0.5em] align-super">$</span>{service.price}
      </div>

      <ul className="list-none p-0 m-5 text-left">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 py-2 border-b border-border text-sm text-muted last:border-none">
            <svg className="w-4 h-4 text-green-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {f}
          </li>
        ))}
      </ul>

      <Button href="#booking" variant={service.featured ? 'primary' : 'secondary'} className="w-full justify-center">
        {cta}
      </Button>
    </div>
  )
}
