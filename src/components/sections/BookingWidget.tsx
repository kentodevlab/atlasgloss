'use client'

import { Link } from '@/navigation'

interface BookingWidgetProps {
  locale: string
}

export default function BookingWidget({ locale }: BookingWidgetProps) {
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

  const bookingUrl = `https://squareup.com/appointments/book/${locationId}`

  return (
    <div className="flex flex-col items-center gap-6">
      <a
        href={bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-9 py-4 rounded-[16px] bg-houston text-white text-[17px] font-semibold border border-houston no-underline hover:bg-[#D45A15] hover:shadow-[0_8px_28px_rgba(242,107,31,0.35)] transition-all duration-150"
      >
        {locale === 'es' ? 'Reservar Ahora →' : 'Book Online Now →'}
      </a>
    </div>
  )
}
