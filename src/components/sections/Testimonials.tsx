'use client'

import { useLocale } from 'next-intl'
import { useEffect, useState } from 'react'
import { t } from '@/lib/dictionary'
import dictionary from '@/lib/dictionary'
import TestimonialCard from '@/components/ui/TestimonialCard'
import type { Testimonial } from '@/types'
import { client } from '@/lib/sanity'

const fallbackTestimonials: Testimonial[] = [
  { id: '0', name: 'Carlos M.', location: 'Katy, TX', stars: 5, quoteKey: '' },
  { id: '1', name: 'Sarah T.', location: 'River Oaks, TX', stars: 5, quoteKey: '' },
  { id: '2', name: 'James R.', location: 'The Heights, TX', stars: 5, quoteKey: '' },
]

export default function Testimonials() {
  const locale = useLocale() as 'en' | 'es'
  const [testimonials, setTestimonials] = useState<Testimonial[] | null>(null)

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return
    client.fetch<any[]>(`*[_type == "testimonial"] | order(order asc){author, location, quote, stars, order}`)
      .then((data) => {
        const mapped = data.map((t, i) => ({
          id: String(i),
          name: t.author,
          location: t.location || '',
          stars: t.stars || 5,
          quoteKey: t.quote || '',
        }))
        setTestimonials(mapped)
      })
      .catch(() => {})
  }, [])

  const displayTestimonials = testimonials ?? fallbackTestimonials

  return (
    <section id="testimonials" className="py-[clamp(3rem,8vw,6rem)]">
      <div className="container-ag flex flex-col gap-14">
        <div className="max-w-[36ch] text-center mx-auto">
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.08em] uppercase text-blue-bright mb-5">
            {t(dictionary.testimonials.eyebrow, locale)}
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-[-0.015em]">
            {t(dictionary.testimonials.title, locale)}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayTestimonials.map((tst) => (
            <TestimonialCard key={tst.id} testimonial={tst} />
          ))}
        </div>
      </div>
    </section>
  )
}
