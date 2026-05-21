import { type ReactNode } from 'react'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { locales } from '@/i18n/request'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import LanguageToggle from '@/components/layout/LanguageToggle'
import ThemeProvider from '@/components/layout/ThemeProvider'
import AccessibilityProvider from '@/components/layout/AccessibilityProvider'
import AccessibilityPanel from '@/components/layout/AccessibilityPanel'
import CookieBanner from '@/components/layout/CookieBanner'
import SkipLink from '@/components/ui/SkipLink'

interface LocaleLayoutProps {
  children: ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params

  if (!hasLocale(locales, locale)) {
    notFound()
  }

  return (
    <NextIntlClientProvider>
      <ThemeProvider>
        <AccessibilityProvider>
          <SkipLink />
          <Nav />
          {children}
          <Footer />
          <LanguageToggle />
          <AccessibilityPanel />
          <CookieBanner />
        </AccessibilityProvider>
      </ThemeProvider>
    </NextIntlClientProvider>
  )
}
