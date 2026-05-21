'use client'

import { useEffect, useRef } from 'react'
import { Link } from '@/navigation'

interface BookingWidgetProps {
  locale: string
}

export default function BookingWidget({ locale }: BookingWidgetProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const locationId = process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID
    if (!locationId) return

    const container = ref.current
    if (!container) return

    container.innerHTML = ''

    const script = document.createElement('script')
    script.src = `https://square.site/appointments/buyer/widget/${locationId}/ITEM_ID.js`
    script.async = true
    container.appendChild(script)

    return () => {
      container.innerHTML = ''
    }
  }, [])

  const locationId = process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID

  if (!locationId) {
    return (
      <div>
        <Link
          href="#booking"
          className="inline-flex items-center gap-3 px-9 py-4 rounded-[16px] bg-houston text-white text-[17px] font-semibold border border-houston no-underline hover:bg-[#D45A15] hover:shadow-[0_8px_28px_rgba(242,107,31,0.35)] transition-all duration-150"
        >
          {locale === 'es' ? 'Reservar Ahora →' : 'Book Online Now →'}
        </Link>
      </div>
    )
  }

  return <div ref={ref} id="square-appointments-widget" />
}
