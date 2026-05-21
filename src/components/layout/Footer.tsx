'use client'

import { useLocale } from 'next-intl'
import { t } from '@/lib/dictionary'
import dictionary from '@/lib/dictionary'

export default function Footer() {
  const locale = useLocale() as 'en' | 'es'

  return (
    <footer className="bg-surface dark:bg-[#1A2332] border-t border-border py-14 text-muted text-xs">
      <div className="container-ag">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="max-w-[40ch]">
            <img src="/logo-light.svg" alt="Atlas Gloss" className="block dark:hidden h-[24px] w-auto" />
            <img src="/logo-dark.svg" alt="Atlas Gloss" className="hidden dark:block h-[24px] w-auto" />
            <p className="mt-2 text-[13px] text-muted">
              {t(dictionary.footer.tagline, locale)}
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted hover:text-blue-bright transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted hover:text-blue-bright transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-muted hover:text-blue-bright transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46L20 4" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-right text-[13px]">
            <span className="font-[family-name:var(--font-mono)]">
              {t(dictionary.footer.weekday, locale)}
            </span>
            <span className="font-[family-name:var(--font-mono)]">
              {t(dictionary.footer.sunday, locale)}
            </span>
            <span className="font-[family-name:var(--font-mono)]">
              Houston, TX · [REPLACE: full address]
            </span>
            <span className="font-[family-name:var(--font-mono)]">
              [REPLACE: (713) 000-0000]
            </span>
          </div>
        </div>

        <hr className="border-t border-border my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-[family-name:var(--font-mono)]">
            {t(dictionary.footer.copyright, locale)}
          </span>
          <span className="font-[family-name:var(--font-mono)] text-[11px]">
            Developed with ❤️ by <a href="https://kentodevlab.com" target="_blank" rel="noopener noreferrer" className="text-blue-bright hover:underline font-bold">KentoDevLab</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
