'use client'

import { useLocale } from 'next-intl'
import Button from './Button'
import type { ServicePackage } from '@/types'
import dictionary from '@/lib/dictionary'

interface ServiceCardProps {
  service: ServicePackage
}

interface ServiceTranslations {
  name: { en: string; es: string }
  desc: { en: string; es: string }
  features: { en: string; es: string }[]
  cta: { en: string; es: string }
  badge?: { en: string; es: string }
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const locale = useLocale() as 'en' | 'es'
  const svc = dictionary.services[service.id as keyof typeof dictionary.services] as unknown as ServiceTranslations

  return (
    <div className={`relative bg-surface border rounded-[16px] p-8 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(15,37,71,0.16),0_4px_8px_rgba(15,37,71,0.06)] ${service.featured ? 'border-blue-bright border-2' : 'border-[#DDE2E8]'}`}>
      {service.featured && svc.badge && (
        <span className="absolute top-4 right-0 bg-blue-bright text-white font-[family-name:var(--font-mono)] text-[10px] tracking-[0.08em] px-9 py-1 rotate-45 origin-bottom-right translate-x-8">
          {svc.badge[locale]}
        </span>
      )}

      <h3 className="font-[family-name:var(--font-display)] text-[26px] font-bold mb-2">
        {svc.name[locale]}
      </h3>

      <p className="text-muted text-sm mb-4">
        {svc.desc[locale]}
      </p>

      <div className="font-[family-name:var(--font-display)] text-[40px] font-bold text-blue-bright my-5">
        <span className="text-[0.5em] align-super">$</span>{service.price}
      </div>

      <ul className="list-none p-0 m-5 text-left">
        {svc.features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 py-2 border-b border-[#DDE2E8] text-sm text-muted last:border-none">
            <svg className="w-4 h-4 text-green-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {f[locale]}
          </li>
        ))}
      </ul>

      <Button href="#booking" variant={service.featured ? 'primary' : 'secondary'} className="w-full justify-center">
        {svc.cta[locale]}
      </Button>
    </div>
  )
}
