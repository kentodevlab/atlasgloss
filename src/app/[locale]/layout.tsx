import { type ReactNode } from 'react'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { locales } from '@/i18n/request'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import LanguageToggle from '@/components/layout/LanguageToggle'

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
      <Nav />
      {children}
      <Footer />
      <LanguageToggle />
    </NextIntlClientProvider>
  )
}
