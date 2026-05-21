'use client'

import { useState, useLayoutEffect, useRef } from 'react'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import { t } from '@/lib/dictionary'
import dictionary from '@/lib/dictionary'

interface GalleryImage {
  src: string
  alt: string
  label: string
  story: { en: string; es: string }
}

const images: GalleryImage[] = [
  {
    src: '/images/black-suv.jpg',
    alt: 'Black SUV full detail — River Oaks',
    label: 'SUV — Full Detail · River Oaks',
    story: {
      en: 'This black SUV came in caked with road grime and swirl marks. After a full Premium detail — clay bar, carnauba wax, interior deep clean — the owner said it looked better than the day they drove it off the lot.',
      es: 'Esta SUV negra llegó cubierta de suciedad y marcas de remolino. Después de un detalle Premium completo — clay bar, cera carnauba, limpieza interior profunda — el dueño dijo que lucía mejor que el día que la sacó del concesionario.',
    },
  },
  {
    src: '/images/white-sedan-exterior.jpg',
    alt: 'White sedan exterior wash — The Heights',
    label: 'Sedan — Exterior Wash · The Heights',
    story: {
      en: 'A quick Express wash for a busy professional in The Heights. White paint shows every speck of dirt — but we had it gleaming in 25 minutes. Tire shine and window polish included.',
      es: 'Un lavado Express rápido para un profesional ocupado en The Heights. La pintura blanca muestra cada mota de polvo — pero la dejamos reluciente en 25 minutos. Lustre de llantas y pulido de ventanas incluido.',
    },
  },
  {
    src: '/images/red-sports-car-ceramic.jpg',
    alt: 'Red sports car ceramic coat — Galleria',
    label: 'Sports Car — Ceramic Coat · Galleria',
    story: {
      en: 'A custom ceramic coat application for a red sports car in the Galleria area. The paint correction alone took 3 hours. Finished with a 2-year ceramic coating that beads water like magic.',
      es: 'Una aplicación personalizada de capa cerámica para un deportivo rojo en el área de Galleria. Solo la corrección de pintura tomó 3 horas. Terminado con recubrimiento cerámico de 2 años que repele el agua como magia.',
    },
  },
  {
    src: '/images/silver-truck-premium.jpg',
    alt: 'Silver truck premium wash — Katy',
    label: 'Truck — Premium Wash · Katy',
    story: {
      en: 'This Silverado from Katy gets a Premium wash every month without fail. The owner loves how we clean the bed, the wheel wells, and every nook inside the cab. Mud season? No match for Atlas Gloss.',
      es: 'Esta Silverado de Katy recibe un lavado Premium cada mes sin falta. Al dueño le encanta cómo limpiamos la cama, los pasos de rueda y cada rincón de la cabina. ¿Temporada de lodo? No compite con Atlas Gloss.',
    },
  },
  {
    src: '/images/blue-coupe-full-wash.jpg',
    alt: 'Blue coupe interior and exterior wash — Midtown',
    label: 'Coupe — Interior + Exterior · Midtown',
    story: {
      en: 'A full interior and exterior detail for this blue coupe in Midtown. The owner had spilled coffee in the center console — we got every drop out. Leather conditioned, carpets steamed, paint waxed to a mirror shine.',
      es: 'Un detalle completo interior y exterior para este cupé azul en Midtown. El dueño había derramado café en la consola central — sacamos cada gota. Cuero acondicionado, alfombras vaporizadas, pintura encerada a brillo espejo.',
    },
  },
  {
    src: '/images/white-tesla.jpg',
    alt: 'White Tesla full detail and wax — Sugar Land',
    label: 'Tesla — Full Detail + Wax · Sugar Land',
    story: {
      en: 'A Signature detail for a Model Y in Sugar Land. Paint correction for light scratches, hand-applied carnauba wax, and a meticulous interior detail. The owner said it was the best the car had ever looked.',
      es: 'Un detalle Signature para una Model Y en Sugar Land. Corrección de pintura para rayones ligeros, cera carnauba aplicada a mano y un detalle interior meticuloso. El dueño dijo que era lo mejor que el auto había lucido.',
    },
  },
  {
    src: '/images/gray-mercedes-express.jpg',
    alt: 'Gray Mercedes express wash — Downtown',
    label: 'Mercedes — Express Wash · Downtown',
    story: {
      en: 'A quick lunch-break Express wash for a Mercedes sedan downtown. The gray paint hides dirt well — but the difference after a thorough hand wash and microfiber dry was unmistakable. In and out in 20 minutes.',
      es: 'Un lavado Express rápido en hora de almuerzo para un sedán Mercedes en el centro. La pintura gris oculta bien la suciedad — pero la diferencia después de un lavado a mano y secado con microfibra era inconfundible. Entró y salió en 20 minutos.',
    },
  },
  {
    src: '/images/black-porsche-premium.jpg',
    alt: 'Black Porsche premium detail — Memorial',
    label: 'Porsche — Premium Detail · Memorial',
    story: {
      en: 'The owner of this 911 from Memorial trusts no one else. Black paint is the hardest to perfect — every swirl shows. We did a full paint correction, ceramic wax, and interior detail. The result? Showroom-plus.',
      es: 'El dueño de este 911 de Memorial no confía en nadie más. La pintura negra es la más difícil de perfeccionar — cada remolino se nota. Hicimos corrección completa de pintura, cera cerámica y detalle interior. ¿El resultado? Mejor que vitrina.',
    },
  },
]

const groups = [
  { large: 0, small: [1, 2, 3, 4] },
  { large: 5, small: [6, 7] },
]

function FlipCard({ img, locale, isFlipped, onClick }: {
  img: GalleryImage
  locale: 'en' | 'es'
  isFlipped: boolean
  onClick: () => void
}) {
  const ref = useRef<HTMLButtonElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    if (!isFlipped) {
      el.style.removeProperty('transform')
      return
    }
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const tx = window.innerWidth / 2 - cx
    const ty = window.innerHeight / 2 - cy
    el.style.transform = `translate(${tx}px, ${ty}px) scale(1.5)`
  }, [isFlipped])

  return (
    <button
      ref={ref}
      onClick={onClick}
      aria-label={isFlipped ? `Close story for ${img.label}` : `View story for ${img.label}`}
      className={`relative w-full h-full rounded-[16px] border border-border bg-gradient-to-br from-blue-bright/10 to-[rgba(15,37,71,0.05)] group cursor-pointer text-left p-0 [perspective:800px] transition-all duration-500 focus-visible:outline-2 focus-visible:outline-blue-bright focus-visible:outline-offset-2 ${isFlipped ? 'z-50 overflow-visible' : 'z-0 overflow-hidden'}`}
    >
      <div className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
        <div className="absolute inset-0 [backface-visibility:hidden] overflow-hidden rounded-[16px]">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          <div className="absolute bottom-3 left-3 right-3 bg-[rgba(10,20,38,0.75)] backdrop-blur-sm text-white px-2.5 py-1.5 rounded-md text-[11px] text-center font-medium">
            {img.label}
          </div>
        </div>
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-navy rounded-[16px] p-5 md:p-6 flex flex-col justify-center overflow-y-auto">
          <p className="text-white/85 text-[13px] leading-relaxed">
            {img.story[locale]}
          </p>
          <p className="text-white/40 text-[10px] mt-3 text-center shrink-0">Click to close</p>
        </div>
      </div>
    </button>
  )
}

export default function Gallery() {
  const locale = useLocale() as 'en' | 'es'
  const [flipped, setFlipped] = useState<number | null>(null)

  function handleClick(i: number) {
    setFlipped(flipped === i ? null : i)
  }

  return (
    <section id="gallery" className="py-[clamp(3rem,8vw,6rem)] scroll-mt-24">
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

        <div className="hidden md:flex flex-col gap-4">
          {groups.map((group) => (
            <div key={group.large} className="grid grid-cols-3 gap-4">
              <div className="col-span-1 row-span-2">
                <FlipCard
                  img={images[group.large]}
                  locale={locale}
                  isFlipped={flipped === group.large}
                  onClick={() => handleClick(group.large)}
                />
              </div>
              {group.small.map((idx) => (
                <div key={idx}>
                  <div className="aspect-[4/3]">
                    <FlipCard
                      img={images[idx]}
                      locale={locale}
                      isFlipped={flipped === idx}
                      onClick={() => handleClick(idx)}
                    />
                  </div>
                </div>
              ))}
              {group.small.length < 4 && Array.from({ length: 4 - group.small.length }).map((_, i) => (
                <div key={`empty-${i}`} />
              ))}
            </div>
          ))}
        </div>

        <div className="md:hidden grid grid-cols-2 gap-3">
          {images.map((img, i) => (
            <div key={i} className="aspect-[4/3]">
              <FlipCard
                img={img}
                locale={locale}
                isFlipped={flipped === i}
                onClick={() => handleClick(i)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
