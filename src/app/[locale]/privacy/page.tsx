import { type ReactNode } from 'react'
import { hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { locales } from '@/i18n/request'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const title = locale === 'es' ? 'Política de Privacidad | Atlas Gloss' : 'Privacy Policy | Atlas Gloss'
  return {
    title,
    alternates: { canonical: `https://www.atlasgloss.com/${locale}/privacy` },
  }
}

const en = {
  title: 'Privacy Policy',
  updated: 'Last updated: May 21, 2026',
  sections: [
    {
      h: '1. Information We Collect',
      p: 'When you use our website or services, we may collect the following categories of personal data: (a) Identifiers such as your name, email address, phone number, and postal address; (b) Commercial information including records of services purchased or considered; (c) Internet or other electronic network activity information such as browsing history, IP address, and device identifiers; (d) Geolocation data at the city level for service area verification.',
    },
    {
      h: '2. How We Use Your Information',
      p: 'We use your personal data for the following purposes: (a) To provide and fulfill our hand car wash services; (b) To process payments and send confirmations; (c) To communicate with you about appointments, promotions, and service updates; (d) To improve our website and customer experience; (e) To comply with legal obligations.',
    },
    {
      h: '3. Sharing With Third Parties',
      p: 'We do not sell your personal information. We may share data with trusted service providers who help us operate our business, including: payment processors (Square), email and communication platforms (Resend), and analytics tools. These providers are contractually bound to protect your data and use it only for the services we request.',
    },
    {
      h: '4. Your Rights Under Texas Law',
      p: 'If you are a resident of Texas, you have the following rights under the Texas Data Privacy and Security Act (TDPSA): (a) Right to access the personal data we hold about you; (b) Right to correct inaccurate personal data; (c) Right to delete personal data you have provided; (d) Right to obtain a copy of your data in a portable format; (e) Right to opt out of the processing of your data for targeted advertising or profiling. To exercise any of these rights, email us at privacy@atlasgloss.com or use our contact form. We will respond within 45 days.',
    },
    {
      h: '5. Sensitive Data',
      p: 'We do not knowingly collect sensitive personal data (such as racial or ethnic origin, religious beliefs, biometric data, or precise geolocation). If we ever need to process such data, we will obtain your explicit consent before doing so.',
    },
    {
      h: '6. Data Retention',
      p: 'We retain your personal data only as long as necessary to fulfill the purposes described in this policy, or as required by law. When no longer needed, we securely delete or anonymize the data.',
    },
    {
      h: '7. Data Security',
      p: 'We implement industry-standard security measures including SSL/TLS encryption, secure data storage, and restricted access to personal data. However, no method of transmission or storage is 100% secure.',
    },
    {
      h: '8. Contact',
      p: 'For questions about this policy or to exercise your rights, contact us at: Atlas Gloss — Houston, TX — privacy@atlasgloss.com',
    },
  ],
}

const es = {
  title: 'Política de Privacidad',
  updated: 'Última actualización: 21 de mayo de 2026',
  sections: [
    {
      h: '1. Información que Recopilamos',
      p: 'Cuando utilizas nuestro sitio web o servicios, podemos recopilar las siguientes categorías de datos personales: (a) Identificadores como nombre, correo electrónico, número de teléfono y dirección postal; (b) Información comercial como registros de servicios adquiridos o considerados; (c) Información de actividad en internet como historial de navegación, dirección IP e identificadores de dispositivo; (d) Datos de geolocalización a nivel de ciudad para verificación del área de servicio.',
    },
    {
      h: '2. Cómo Usamos tu Información',
      p: 'Usamos tus datos personales para: (a) Proveer nuestros servicios de lavado de autos; (b) Procesar pagos y enviar confirmaciones; (c) Comunicarnos sobre citas, promociones y actualizaciones; (d) Mejorar nuestro sitio web y experiencia del cliente; (e) Cumplir con obligaciones legales.',
    },
    {
      h: '3. Compartir con Terceros',
      p: 'No vendemos tu información personal. Podemos compartir datos con proveedores de servicio que nos ayudan a operar, incluyendo: procesadores de pago (Square), plataformas de correo (Resend) y herramientas de análisis. Estos proveedores están contractualmente obligados a proteger tus datos y usarlos solo para los servicios que solicitamos.',
    },
    {
      h: '4. Tus Derechos Bajo la Ley de Texas',
      p: 'Si eres residente de Texas, tienes los siguientes derechos bajo la Ley de Privacidad y Seguridad de Datos de Texas (TDPSA): (a) Derecho a acceder a los datos personales que tenemos sobre ti; (b) Derecho a corregir datos personales inexactos; (c) Derecho a eliminar datos personales que hayas proporcionado; (d) Derecho a obtener una copia de tus datos en formato portátil; (e) Derecho a optar por no participar en el procesamiento de tus datos para publicidad dirigida o perfiles. Para ejercer estos derechos, envía un correo a privacy@atlasgloss.com o usa nuestro formulario de contacto. Responderemos dentro de 45 días.',
    },
    {
      h: '5. Datos Sensibles',
      p: 'No recopilamos datos personales sensibles (como origen racial o étnico, creencias religiosas, datos biométricos o geolocalización precisa). Si alguna vez necesitamos procesar dichos datos, obtendremos tu consentimiento explícito antes de hacerlo.',
    },
    {
      h: '6. Retención de Datos',
      p: 'Conservamos tus datos personales solo mientras sea necesario para los fines descritos en esta política, o según lo requiera la ley. Cuando ya no sean necesarios, los eliminamos o anonimizamos de forma segura.',
    },
    {
      h: '7. Seguridad de Datos',
      p: 'Implementamos medidas de seguridad estándar de la industria, incluyendo cifrado SSL/TLS, almacenamiento seguro de datos y acceso restringido a datos personales. Sin embargo, ningún método de transmisión o almacenamiento es 100% seguro.',
    },
    {
      h: '8. Contacto',
      p: 'Para preguntas sobre esta política o para ejercer tus derechos, contáctanos: Atlas Gloss — Houston, TX — privacy@atlasgloss.com',
    },
  ],
}

export default async function PrivacyPage({ params }: Props) {
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
            <p className="text-muted text-[15px] leading-relaxed">{s.p}</p>
          </section>
        ))}
      </div>
    </main>
  )
}
