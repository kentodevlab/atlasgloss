import { hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { locales } from '@/i18n/request'
import type { Metadata } from 'next'
import { Link } from '@/navigation'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const title = locale === 'es' ? 'Política de Cookies | Atlas Gloss' : 'Cookie Policy | Atlas Gloss'
  return {
    title,
    alternates: { canonical: `https://www.atlasgloss.com/${locale}/cookies` },
  }
}

const en = {
  title: 'Cookie Policy',
  updated: 'Last updated: May 21, 2026',
  sections: [
    {
      h: '1. What Are Cookies',
      p: 'Cookies are small text files stored on your device by your web browser. They help websites remember your preferences, analyze site traffic, and improve functionality.',
    },
    {
      h: '2. Cookies We Use',
      items: [
        { name: 'Essential / Strictly Necessary', desc: 'theme (stores your dark/light mode preference), a11y-settings (stores your accessibility preferences), cookie-consent (stores your cookie consent choice). These cookies are required for the site to function properly. No consent is required for these.' },
        { name: 'Analytics (optional)', desc: 'We may use analytics cookies to understand how visitors interact with our site. These are only placed if you accept all cookies.' },
        { name: 'Marketing / Advertising', desc: 'We do not currently serve targeted ads on this site. If this changes, we will update this policy and request your consent before placing any marketing cookies.' },
      ],
    },
    {
      h: '3. Managing Cookies',
      p: 'You can control cookies through your browser settings. You can also withdraw or change your consent at any time by clearing your cookies and reloading the site. Note that disabling essential cookies may affect site functionality.',
    },
    {
      h: '4. Third-Party Cookies',
      p: 'We embed a Google Maps iframe for our location page. Google may set its own cookies. We use Square for online booking. Square may set its own cookies. These third parties have their own cookie policies.',
    },
    {
      h: '5. Contact',
      p: 'For questions about this Cookie Policy, contact us at privacy@atlasgloss.com. See our ',
      link: { href: '/privacy', label: 'Privacy Policy' },
    },
  ],
}

const es = {
  title: 'Política de Cookies',
  updated: 'Última actualización: 21 de mayo de 2026',
  sections: [
    {
      h: '1. ¿Qué Son las Cookies?',
      p: 'Las cookies son pequeños archivos de texto que tu navegador guarda en tu dispositivo. Ayudan a los sitios web a recordar tus preferencias, analizar el tráfico y mejorar la funcionalidad.',
    },
    {
      h: '2. Cookies que Utilizamos',
      items: [
        { name: 'Esenciales / Estrictamente Necesarias', desc: 'theme (guarda tu preferencia de modo claro/oscuro), a11y-settings (guarda tus preferencias de accesibilidad), cookie-consent (guarda tu elección de consentimiento de cookies). Estas cookies son necesarias para el funcionamiento del sitio. No requieren consentimiento.' },
        { name: 'Analíticas (opcional)', desc: 'Podemos usar cookies analíticas para entender cómo los visitantes interactúan con nuestro sitio. Solo se colocan si aceptas todas las cookies.' },
        { name: 'Marketing / Publicidad', desc: 'Actualmente no mostramos anuncios dirigidos en este sitio. Si esto cambia, actualizaremos esta política y solicitaremos tu consentimiento antes de colocar cookies de marketing.' },
      ],
    },
    {
      h: '3. Gestión de Cookies',
      p: 'Puedes controlar las cookies desde la configuración de tu navegador. También puedes retirar o cambiar tu consentimiento en cualquier momento borrando tus cookies y recargando el sitio. Deshabilitar cookies esenciales puede afectar la funcionalidad del sitio.',
    },
    {
      h: '4. Cookies de Terceros',
      p: 'Incrustamos un iframe de Google Maps para nuestra ubicación. Google puede establecer sus propias cookies. Usamos Square para reservas en línea. Square puede establecer sus propias cookies. Estos terceros tienen sus propias políticas de cookies.',
    },
    {
      h: '5. Contacto',
      p: 'Para preguntas sobre esta Política de Cookies, contáctanos en privacy@atlasgloss.com. Consulta nuestra ',
      link: { href: '/privacy', label: 'Política de Privacidad' },
    },
  ],
}

export default async function CookiesPage({ params }: Props) {
  const { locale } = await params

  if (!hasLocale(locales, locale)) notFound()

  const t = locale === 'es' ? es : en

  return (
    <main className="py-[clamp(3rem,6vw,5rem)]">
      <div className="container-ag max-w-[720px]">
        <h1 className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1] mb-2">{t.title}</h1>
        <p className="text-muted text-sm mb-10">{t.updated}</p>
        {t.sections.map((s, i) => (
          <section key={i} className="mb-8">
            <h2 className="font-semibold text-[17px] mb-2">{s.h}</h2>
            {'items' in s ? (
              <ul className="flex flex-col gap-4">
                {(s as any).items.map((item: any, j: number) => (
                  <li key={j} className="text-[15px] leading-relaxed">
                    <strong className="text-fg">{item.name}:</strong>{' '}
                    <span className="text-muted">{item.desc}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted text-[15px] leading-relaxed">
                {s.p}
                {(s as any).link && (
                  <Link href={(s as any).link.href} className="text-blue-bright hover:underline">
                    {(s as any).link.label}
                  </Link>
                )}
              </p>
            )}
          </section>
        ))}
      </div>
    </main>
  )
}
