import type { Metadata } from 'next'
import { type ReactNode } from 'react'
import { Saira_Condensed, Manrope, JetBrains_Mono } from 'next/font/google'
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
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atlas Gloss — Premium Hand Car Wash',
    description: 'Your car deserves a mirror finish. Hand-washed in Houston, TX.',
    images: ['/og-image.png'],
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://www.atlasgloss.com'),
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
              image: 'https://www.atlasgloss.com/og-image.png',
            }),
          }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  )
}
