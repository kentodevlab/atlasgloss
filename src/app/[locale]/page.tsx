import Hero from '@/components/sections/Hero'
import Gallery from '@/components/sections/Gallery'
import Services from '@/components/sections/Services'
import Testimonials from '@/components/sections/Testimonials'
import BookingCTA from '@/components/sections/BookingCTA'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Gallery />
      <Services />
      <Testimonials />
      <BookingCTA />
    </main>
  )
}
