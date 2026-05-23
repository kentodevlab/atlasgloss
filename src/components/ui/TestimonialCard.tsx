'use client'

import { useLocale } from 'next-intl'
import dictionary from '@/lib/dictionary'
import type { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

const colors = ['bg-blue-bright', 'bg-houston', 'bg-green-500', 'bg-purple-500']

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const locale = useLocale() as 'en' | 'es'
  const item = dictionary.testimonials.items[parseInt(testimonial.id)]
  const initials = testimonial.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
  const bg = colors[parseInt(testimonial.id) % colors.length]

  return (
    <div className="rounded-[1.75rem] p-[2px] bg-black/[0.04] dark:bg-white/[0.06] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5">
      <div className="bg-card rounded-[calc(1.75rem-4px)] p-7 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_4px_12px_rgba(15,37,71,0.10),inset_0_1px_0_rgba(255,255,255,0.12)]">
        <div className={`w-12 h-12 mx-auto mb-4 rounded-full ${bg} text-white grid place-items-center font-[family-name:var(--font-display)] text-sm font-bold`}>
          {initials}
        </div>

        <div className="text-houston text-base tracking-[2px] mb-3">
          {'★'.repeat(testimonial.stars)}
        </div>

        <blockquote className="text-[17px] font-medium leading-relaxed max-w-full">
          {item.quote[locale]}
        </blockquote>

        <p className="text-muted text-sm mt-5">
          <strong className="text-fg font-semibold">{testimonial.name}</strong> · {item.location[locale]}
        </p>
      </div>
    </div>
  )
}
