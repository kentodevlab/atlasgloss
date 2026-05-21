import { type ReactNode } from 'react'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { locales } from '@/i18n/request'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import LanguageToggle from '@/components/layout/LanguageToggle'
import ThemeProvider from '@/components/layout/ThemeProvider'
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
        <SkipLink />
        <Nav />
        {children}
        <Footer />
        <LanguageToggle />
      </ThemeProvider>
    </NextIntlClientProvider>
  )
}
