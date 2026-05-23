import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import Gallery from '@/components/sections/Gallery'
import Services from '@/components/sections/Services'
import Testimonials from '@/components/sections/Testimonials'
import BookingCTA from '@/components/sections/BookingCTA'
import ContactForm from '@/components/forms/ContactForm'
import NewsletterForm from '@/components/forms/NewsletterForm'
import LocationMap from '@/components/sections/LocationMap'
import SectionAnimator from '@/components/ui/SectionAnimator'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return {
    alternates: {
      canonical: `https://www.atlasgloss.com/${locale}`,
    },
  }
}

export default function HomePage() {
  return (
    <main id="main-content" className="scroll-smooth">
      <Hero />
      <Stats />
      <SectionAnimator as="div"><Services /></SectionAnimator>
      <SectionAnimator as="div" delay={100}><Gallery /></SectionAnimator>
      <SectionAnimator as="div" delay={100}><Testimonials /></SectionAnimator>
      <SectionAnimator><LocationMap /></SectionAnimator>
      <BookingCTA />
      <SectionAnimator as="div" className="py-[clamp(3rem,8vw,6rem)] bg-surface dark:bg-[#1A2332]">
        <div className="container-ag">
          <div className="max-w-[36ch] text-center mx-auto mb-10">
            <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.08em] uppercase text-blue-bright mb-5">Contact</p>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-[-0.015em]">Get in touch</h2>
          </div>
          <div className="max-w-md mx-auto">
            <ContactForm />
          </div>
          <div className="max-w-md mx-auto mt-10 pt-10 border-t border-border">
            <p className="text-center text-muted text-sm mb-4">Subscribe for updates</p>
            <NewsletterForm />
          </div>
        </div>
      </SectionAnimator>
    </main>
  )
}
