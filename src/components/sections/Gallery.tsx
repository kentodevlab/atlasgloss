'use client'

import { useLocale } from 'next-intl'
import Image from 'next/image'
import { t } from '@/lib/dictionary'
import dictionary from '@/lib/dictionary'

interface GalleryImage {
  src: string
  alt: string
  label: string
  span?: number
}

const images: GalleryImage[] = [
  { src: '/images/black-suv.jpg', alt: 'Black SUV full detail — River Oaks', label: 'Black SUV — Full Detail · River Oaks', span: 2 },
  { src: '/images/white-sedan-exterior.jpg', alt: 'White sedan exterior wash — The Heights', label: 'White Sedan — Exterior Wash · The Heights' },
  { src: '/images/red-sports-car-ceramic.jpg', alt: 'Red sports car ceramic coat — Galleria', label: 'Red Sports Car — Ceramic Coat · Galleria' },
  { src: '/images/silver-truck-premium.jpg', alt: 'Silver truck premium wash — Katy', label: 'Silver Truck — Premium Wash · Katy' },
  { src: '/images/blue-coupe-full-wash.jpg', alt: 'Blue coupe interior and exterior wash — Midtown', label: 'Blue Coupe — Interior + Exterior · Midtown' },
  { src: '/images/white-tesla.jpg', alt: 'White Tesla full detail and wax — Sugar Land', label: 'White Tesla — Full Detail + Wax · Sugar Land', span: 2 },
  { src: '/images/gray-mercedes-express.jpg', alt: 'Gray Mercedes express wash — Downtown', label: 'Gray Mercedes — Express Wash · Downtown' },
  { src: '/images/black-porsche-premium.jpg', alt: 'Black Porsche premium detail — Memorial', label: 'Black Porsche — Premium Detail · Memorial' },
]

export default function Gallery() {
  const locale = useLocale() as 'en' | 'es'

  return (
    <section id="gallery" className="py-[clamp(3rem,8vw,6rem)]">
      <div className="container-ag flex flex-col gap-14">
        <div className="max-w-[36ch]">
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.08em] uppercase text-blue-bright mb-5">
            {t(dictionary.gallery.eyebrow, locale)}
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-[-0.015em]">
            {t(dictionary.gallery.title, locale)}
          </h2>
          <p className="text-muted text-[19px] leading-relaxed max-w-[60ch] mt-3">
            {t(dictionary.gallery.lead, locale)}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative aspect-[4/3] rounded-[16px] overflow-hidden border border-border bg-gradient-to-br from-blue-bright/10 to-[rgba(15,37,71,0.05)] group ${img.span ? 'sm:col-span-2' : ''}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                sizes={img.span ? '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw' : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'}
              />
              <div className="absolute bottom-3 left-3 right-3 bg-[rgba(10,20,38,0.75)] backdrop-blur-sm text-white px-2.5 py-1.5 rounded-md text-[11px] text-center font-medium">
                {img.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
