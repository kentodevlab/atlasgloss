'use client'

import { useLocale } from 'next-intl'
import { t } from '@/lib/dictionary'
import dictionary from '@/lib/dictionary'
import ServiceCard from '@/components/ui/ServiceCard'
import type { ServicePackage } from '@/types'

const packages: ServicePackage[] = [
  {
    id: 'express',
    nameKey: 'Starter',
    descriptionKey: 'Starting 149$',
    price: 149,
    duration: 0, // Duration will be handled by the feature list
    features: ['Foam wash', 'Deep cleaning of wheels and tires', 'Paint and Wheel decontamination', 'Clay Bar Treatment', '1 Step Gloss Enhancement Polish', 'Premium Paint Sealant Protection'],
  },
  {
    id: 'premium',
    nameKey: 'Ceramic Coating',
    descriptionKey: '399$',
    price: 399,
    duration: 0, // Duration will be handled by the feature list (8/9 hours)
    featured: true,
    features: ['Detailed washing with foam', 'Decontamination of Paint and tires', 'Clay bar', '1 Paint correction step', 'Prep', 'Installation of ceramic coating throughout the car including Windows', 'Recovery of black plastics', 'Basic internal cleaning', 'Sealant - up to 8 months.', 'The process lasts approximately 8/9 hours.'],
  },
  {
    id: 'signature',
    nameKey: 'Signature',
    descriptionKey: 'Showroom-level full detail',
    price: 99,
    duration: 90,
    features: ['Everything in Premium', 'Clay bar treatment', 'Hand-applied carnauba wax', 'Leather conditioning', 'Engine bay clean', '~90 minutes'],
  },
]

export default function Services() {
  const locale = useLocale() as 'en' | 'es'

  return (
    <section id="services" className="py-[clamp(4rem,10vw,8rem)] bg-surface dark:bg-[#111827] scroll-mt-24">
      <div className="container-ag flex flex-col gap-14">
        <div className="max-w-[36ch] text-center mx-auto">
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.08em] uppercase text-blue-bright mb-5">
            {t(dictionary.services.eyebrow, locale)}
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-[-0.015em] text-balance">
            {t(dictionary.services.title, locale)}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <ServiceCard key={pkg.id} service={pkg} />
          ))}
        </div>
      </div>
    </section>
  )
}
