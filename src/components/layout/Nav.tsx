'use client'

import { useState, useEffect } from 'react'
import { useLocale } from 'next-intl'
import { Link } from '@/navigation'
import { t } from '@/lib/dictionary'
import dictionary from '@/lib/dictionary'
import ThemeToggle from './ThemeToggle'

const navLinks = ['services', 'gallery', 'reviews', 'bookNow'] as const

export default function Nav() {
  const locale = useLocale() as 'en' | 'es'
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 500)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-40 border-b backdrop-blur-xl transition-all duration-300 ${scrolled ? 'bg-page/[0.08] dark:bg-navy/[0.08] border-black/8 dark:border-white/8' : 'bg-page/95 dark:bg-navy/95 border-black/8 dark:border-white/8'}`}>
      <div className="container-ag flex items-center justify-between py-3.5">
        <Link href="/" className="no-underline block leading-none">
          <img src="/logo-light.svg" alt="Atlas Gloss" className="block dark:hidden h-6 w-auto" />
          <img src="/logo-dark.svg" alt="Atlas Gloss" className="hidden dark:block h-6 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main">
          {navLinks.map((key) => {
            const href = key === 'bookNow' ? '/#booking' : `/#${key === 'reviews' ? 'testimonials' : key}`
            return (
              <Link key={key} href={href} className="text-sm font-medium text-fg/65 dark:text-[rgba(255,255,255,0.65)] hover:text-fg dark:hover:text-white no-underline transition-colors focus-visible:outline-2 focus-visible:outline-blue-bright focus-visible:outline-offset-4 rounded-sm">
                {t(dictionary.nav[key], locale)}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <Link
            href="/#booking"
            className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-[10px] bg-blue-bright text-white text-sm font-semibold border border-blue-bright no-underline hover:bg-blue-deep transition-colors focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
          >
            {t(dictionary.nav.bookNow, locale)}
          </Link>

          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-controls="mobile-menu"
            aria-expanded={open}
            className="md:hidden flex flex-col items-center justify-center gap-1.5 min-w-[44px] min-h-[44px] bg-transparent border-none cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-bright focus-visible:outline-offset-2 rounded-sm"
          >
            <span className={`block w-6 h-[2px] bg-fg dark:bg-white rounded transition-all duration-200 ${open ? 'rotate-45 translate-y-[5px]' : ''}`} />
            <span className={`block w-6 h-[2px] bg-fg dark:bg-white rounded transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-[2px] bg-fg dark:bg-white rounded transition-all duration-200 ${open ? '-rotate-45 -translate-y-[5px]' : ''}`} />
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="md:hidden bg-page/98 dark:bg-navy/98 border-t border-black/8 dark:border-white/8">
          <nav className="container-ag flex flex-col py-4 gap-1.5" aria-label="Mobile">
            {navLinks.map((key) => {
              const href = key === 'bookNow' ? '/#booking' : `/#${key === 'reviews' ? 'testimonials' : key}`
              return (
                <Link
                  key={key}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="text-[17px] font-medium text-fg/65 dark:text-[rgba(255,255,255,0.65)] hover:text-fg dark:hover:text-white no-underline transition-colors py-3 focus-visible:outline-2 focus-visible:outline-blue-bright focus-visible:outline-offset-2 rounded-sm"
                >
                  {t(dictionary.nav[key], locale)}
                </Link>
              )
            })}
            <Link
              href="/#booking"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-[10px] bg-blue-bright text-white text-sm font-semibold no-underline mt-2 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
            >
              {t(dictionary.nav.bookNow, locale)}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
