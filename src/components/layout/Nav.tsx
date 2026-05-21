'use client'

import { useState } from 'react'
import { useLocale } from 'next-intl'
import { Link } from '@/navigation'
import { t } from '@/lib/dictionary'
import dictionary from '@/lib/dictionary'

const navLinks = ['services', 'gallery', 'reviews', 'bookNow'] as const

export default function Nav() {
  const locale = useLocale() as 'en' | 'es'
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-[rgba(15,37,71,0.96)] backdrop-blur-md border-b border-[rgba(255,255,255,0.08)]">
      <div className="container-ag flex items-center justify-between py-3.5">
        <Link href="/" className="font-[family-name:var(--font-display)] text-[22px] font-bold tracking-[0.04em] uppercase text-white no-underline">
          ATLAS <span className="text-blue-bright">GLOSS</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((key) => {
            const href = key === 'bookNow' ? '/#booking' : `/#${key === 'reviews' ? 'testimonials' : key}`
            return (
              <Link key={key} href={href} className="text-sm font-medium text-[rgba(255,255,255,0.65)] hover:text-white no-underline transition-colors">
                {t(dictionary.nav[key], locale)}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#booking"
            className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-[10px] bg-blue-bright text-white text-sm font-semibold border border-blue-bright no-underline hover:bg-blue-deep transition-colors"
          >
            {t(dictionary.nav.bookNow, locale)}
          </Link>

          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer"
          >
            <span className={`block w-6 h-[2px] bg-white rounded transition-all duration-200 ${open ? 'rotate-45 translate-y-[5px]' : ''}`} />
            <span className={`block w-6 h-[2px] bg-white rounded transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-[2px] bg-white rounded transition-all duration-200 ${open ? '-rotate-45 -translate-y-[5px]' : ''}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[rgba(15,37,71,0.98)] border-t border-[rgba(255,255,255,0.08)]">
          <nav className="container-ag flex flex-col py-4 gap-3">
            {navLinks.map((key) => {
              const href = key === 'bookNow' ? '/#booking' : `/#${key === 'reviews' ? 'testimonials' : key}`
              return (
                <Link
                  key={key}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-[rgba(255,255,255,0.65)] hover:text-white no-underline transition-colors py-2"
                >
                  {t(dictionary.nav[key], locale)}
                </Link>
              )
            })}
            <Link
              href="/#booking"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-[10px] bg-blue-bright text-white text-sm font-semibold no-underline mt-2"
            >
              {t(dictionary.nav.bookNow, locale)}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
