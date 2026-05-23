'use client'

import { useLocale } from 'next-intl'
import Button from './Button'
import type { ServicePackage } from '@/types'
import dictionary from '@/lib/dictionary'

interface ServiceCardProps {
  service: ServicePackage
}

const icons: Record<string, React.ReactNode> = {
  express: (
    <svg className="w-10 h-10 text-blue-bright" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><path d="M8 12l2 2 4-4" />
    </svg>
  ),
  premium: (
    <svg className="w-10 h-10 text-blue-bright" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  signature: (
    <svg className="w-10 h-10 text-blue-bright" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const locale = useLocale() as 'en' | 'es'
  const svc = dictionary.services[service.id as keyof typeof dictionary.services] as any

  return (
    <div className={`relative bg-card border rounded-[16px] p-5 md:p-8 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(15,37,71,0.16),0_4px_8px_rgba(15,37,71,0.06)] ${service.featured ? 'border-blue-bright border-2' : 'border-border'}`}>
      {service.featured && svc.badge && (
        <span className="absolute top-4 right-4 bg-blue-bright text-white font-[family-name:var(--font-mono)] text-[10px] tracking-[0.08em] px-3 py-1 rounded-md">
          {svc.badge[locale]}
        </span>
      )}

      <div className="mb-5 grid place-items-center">{icons[service.id]}</div>

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
        {svc.features.map((f: any, i: number) => (
          <li key={i} className="flex items-center gap-2 py-2 border-b border-border text-sm text-muted last:border-none">
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
