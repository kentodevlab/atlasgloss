'use client'

import { useLocale } from 'next-intl'
import type { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const locale = useLocale() as 'en' | 'es'
  const quote = typeof testimonial.quoteKey === 'object' ? testimonial.quoteKey[locale] : testimonial.quoteKey
  const location = typeof testimonial.location === 'object' ? testimonial.location[locale] : testimonial.location

  return (
    <div className="bg-surface border border-border rounded-[16px] p-7 text-center transition-all duration-200 hover:shadow-[0_4px_12px_rgba(15,37,71,0.10)] hover:-translate-y-0.5">
      <div className="text-houston text-base tracking-[2px] mb-3">
        {'★'.repeat(testimonial.stars)}
      </div>

      <blockquote className="text-[17px] font-medium leading-relaxed max-w-full">
        {quote}
      </blockquote>

      <p className="text-muted text-sm mt-5">
        <strong className="text-fg font-semibold">{testimonial.name}</strong>{location ? ` · ${location}` : ''}
      </p>
    </div>
  )
}
