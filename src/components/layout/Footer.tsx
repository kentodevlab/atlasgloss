'use client'

import { useLocale } from 'next-intl'
import { t } from '@/lib/dictionary'
import dictionary from '@/lib/dictionary'

export default function Footer() {
  const locale = useLocale() as 'en' | 'es'

  return (
    <footer className="bg-surface border-t border-border py-14 text-muted text-xs">
      <div className="container-ag">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="max-w-[40ch]">
            <strong className="font-[family-name:var(--font-display)] text-lg tracking-[0.04em] uppercase">
              ATLAS <span className="text-blue-bright">GLOSS</span>
            </strong>
            <p className="mt-2 text-[13px] text-muted">
              {t(dictionary.footer.tagline, locale)}
            </p>
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
