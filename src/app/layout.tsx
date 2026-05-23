import type { Metadata } from 'next'
import { type ReactNode } from 'react'
import { Saira_Condensed, Manrope, JetBrains_Mono } from 'next/font/google'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'
import './globals.css'

const saira = Saira_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-saira',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Atlas Gloss — Premium Hand Car Wash · Houston, TX',
    template: '%s | Atlas Gloss',
  },
  description:
    'Premium hand car wash in Houston, TX. Hand-washed with precision care. Express, Premium & Signature packages. Book online. Bilingual EN/ES.',
  keywords: ['car wash houston', 'hand car wash', 'premium car wash', 'auto detail houston', 'lavado de autos houston'],
  openGraph: {
    title: 'Atlas Gloss — Premium Hand Car Wash',
    description: 'Your car deserves a mirror finish. Hand-washed with precision care in Houston, TX.',
    url: 'https://www.atlasgloss.com',
    siteName: 'Atlas Gloss',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atlas Gloss — Premium Hand Car Wash',
    description: 'Your car deserves a mirror finish. Hand-washed in Houston, TX.',
    images: ['https://www.atlasgloss.com/opengraph-image'],
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://www.atlasgloss.com'),
   verification: { google: '5Mv3Y6sqSiVLkSYnucPDY2iq5yYwYhxhz5nc6EFmv-w' },
  other: { 'msvalidate.01': '06960FFF9BAA139E1942BDF0A32D1236' },
  robots: { index: true, follow: true },
  alternates: {
    languages: {
      en: 'https://www.atlasgloss.com/en',
      es: 'https://www.atlasgloss.com/es',
      'x-default': 'https://www.atlasgloss.com/en',
    },
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${saira.variable} ${manrope.variable} ${jetbrains.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(t!=='light'&&matchMedia('(prefers-color-scheme:dark)').matches))document.documentElement.classList.add('dark')}catch(e){}})()`
        }} />
        <script dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{'ad_storage':'denied','ad_user_data':'denied','ad_personalization':'denied','analytics_storage':'denied'});`
        }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['Organization', 'LocalBusiness'],
              name: 'Atlas Gloss',
              description: 'Premium hand car wash in Houston, TX',
              url: 'https://www.atlasgloss.com',
              telephone: '(346) 978-7617',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '23050 Morton Ranch Rd Apt 2321',
                addressLocality: 'Katy',
                addressRegion: 'TX',
                postalCode: '77449',
                addressCountry: 'US',
              },
              openingHoursSpecification: [
                { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '07:00', closes: '19:00' },
                { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '08:00', closes: '17:00' },
              ],
              priceRange: '$29-$99',
              image: 'https://www.atlasgloss.com/opengraph-image',
            }),
          }}
        />
      </head>
      <body className="font-body antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-bright focus:text-white focus:rounded-lg focus:outline-none">
          Skip to content
        </a>
        {children}
        {process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  )
}
