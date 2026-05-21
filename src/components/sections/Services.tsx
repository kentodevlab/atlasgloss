'use client'

import { useLocale } from 'next-intl'
import { useEffect, useState } from 'react'
import { t } from '@/lib/dictionary'
import dictionary from '@/lib/dictionary'
import ServiceCard from '@/components/ui/ServiceCard'
import type { ServicePackage } from '@/types'
import { client } from '@/lib/sanity'

const fallbackPackages: ServicePackage[] = [
  {
    id: 'express', nameKey: 'Express', descriptionKey: 'Quick exterior hand wash & dry',
    price: 29, duration: 20,
    features: ['Hand wash & rinse', 'Microfiber dry', 'Tire & rim clean', 'Window polish', '~20 minutes'],
  },
  {
    id: 'premium', nameKey: 'Premium', descriptionKey: 'Full interior + exterior detail',
    price: 59, duration: 45, featured: true,
    features: ['Everything in Express', 'Interior vacuum & wipe', 'Dashboard & console detail', 'Spray wax finish', 'Air freshener', '~45 minutes'],
  },
  {
    id: 'signature', nameKey: 'Signature', descriptionKey: 'Showroom-level full detail',
    price: 99, duration: 90,
    features: ['Everything in Premium', 'Clay bar treatment', 'Hand-applied carnauba wax', 'Leather conditioning', 'Engine bay clean', '~90 minutes'],
  },
]

export default function Services() {
  const locale = useLocale() as 'en' | 'es'
  const [packages, setPackages] = useState<ServicePackage[] | null>(null)

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return
    client.fetch<any[]>(`*[_type == "service"] | order(order asc){name, description, price, duration, featured, features, order}`)
      .then((data) => {
        const mapped = data.map((s, i) => ({
          id: String(i),
          nameKey: s.name || '',
          descriptionKey: s.description || '',
          price: s.price,
          duration: s.duration,
          featured: s.featured,
          features: s.features?.map((f: any) => f) || [],
        }))
        setPackages(mapped)
      })
      .catch(() => {})
  }, [])

  const displayPackages = packages ?? fallbackPackages

  return (
    <section id="services" className="py-[clamp(3rem,8vw,6rem)] bg-surface">
      <div className="container-ag flex flex-col gap-14">
        <div className="max-w-[36ch] text-center mx-auto">
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.08em] uppercase text-blue-bright mb-5">
            {t(dictionary.services.eyebrow, locale)}
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-[-0.015em]">
            {t(dictionary.services.title, locale)}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayPackages.map((pkg) => (
            <ServiceCard key={pkg.id} service={pkg} />
          ))}
        </div>
      </div>
    </section>
  )
}
