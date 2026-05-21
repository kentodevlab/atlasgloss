import { hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { locales } from '@/i18n/request'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const title = locale === 'es' ? 'Términos y Condiciones | Atlas Gloss' : 'Terms & Conditions | Atlas Gloss'
  return {
    title,
    alternates: { canonical: `https://www.atlasgloss.com/${locale}/terms` },
  }
}

const en = {
  title: 'Terms & Conditions',
  updated: 'Last updated: May 21, 2026',
  sections: [
    {
      h: '1. Services',
      p: 'Atlas Gloss provides premium hand car wash and detailing services in Houston, TX. All services are performed at our location or mobile service area as agreed at the time of booking. We reserve the right to refuse service to any vehicle that we determine, in our sole discretion, is unsafe or unsuitable for our services.',
    },
    {
      h: '2. Booking & Payment',
      p: 'Appointments are confirmed through our online booking system (Square). Payment is due at the time of service unless otherwise agreed. We accept major credit cards and digital payment methods. Prices are subject to change without notice, but confirmed bookings will be honored at the quoted price.',
    },
    {
      h: '3. Cancellation & Refunds',
      p: 'You may cancel or reschedule your appointment free of charge up to 2 hours before your scheduled time. Late cancellations or no-shows may be subject to a fee. If you are unsatisfied with our service, please contact us within 24 hours and we will make it right at no additional charge.',
    },
    {
      h: '4. Vehicle Condition',
      p: 'While we take the utmost care with every vehicle, Atlas Gloss is not liable for pre-existing damage, manufacturer defects, or wear and tear. We recommend removing all personal valuables before service. We are not responsible for lost or misplaced items.',
    },
    {
      h: '5. Limitation of Liability',
      p: 'To the fullest extent permitted by law, Atlas Gloss shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with our services. Our total liability for any claim shall not exceed the amount paid for the specific service giving rise to the claim.',
    },
    {
      h: '6. Intellectual Property',
      p: 'All content on this website — including text, images, logos, and designs — is the property of Atlas Gloss and may not be reproduced without our written permission.',
    },
    {
      h: '7. Changes to Terms',
      p: 'We reserve the right to update these terms at any time. Changes will be posted on this page with an updated revision date. Continued use of our services after changes constitutes acceptance of the new terms.',
    },
    {
      h: '8. Governing Law',
      p: 'These terms are governed by the laws of the State of Texas. Any disputes shall be resolved in the courts of Harris County, Texas.',
    },
    {
      h: '9. Contact',
      p: 'For questions about these terms, contact us at: Atlas Gloss — Houston, TX — info@atlasgloss.com',
    },
  ],
}

const es = {
  title: 'Términos y Condiciones',
  updated: 'Última actualización: 21 de mayo de 2026',
  sections: [
    {
      h: '1. Servicios',
      p: 'Atlas Gloss ofrece servicios premium de lavado de autos a mano y detallado en Houston, TX. Todos los servicios se realizan en nuestra ubicación o en el área de servicio móvil acordada al momento de la reserva. Nos reservamos el derecho de rechazar servicio a cualquier vehículo que determinemos, a nuestra sola discreción, inseguro o inadecuado para nuestros servicios.',
    },
    {
      h: '2. Reserva y Pago',
      p: 'Las citas se confirman a través de nuestro sistema de reservas en línea (Square). El pago se realiza al momento del servicio a menos que se acuerde lo contrario. Aceptamos tarjetas de crédito principales y métodos de pago digital. Los precios están sujetos a cambios sin previo aviso, pero las reservas confirmadas se respetarán al precio cotizado.',
    },
    {
      h: '3. Cancelación y Reembolsos',
      p: 'Puedes cancelar o reprogramar tu cita sin costo hasta 2 horas antes de la hora programada. Las cancelaciones tardías o las ausencias pueden estar sujetas a un cargo. Si no estás satisfecho con nuestro servicio, contáctanos dentro de las 24 horas y lo resolveremos sin costo adicional.',
    },
    {
      h: '4. Condición del Vehículo',
      p: 'Aunque tomamos el máximo cuidado con cada vehículo, Atlas Gloss no es responsable por daños preexistentes, defectos de fabricación o desgaste normal. Recomendamos retirar todos los objetos de valor antes del servicio. No somos responsables por objetos perdidos o extraviados.',
    },
    {
      h: '5. Limitación de Responsabilidad',
      p: 'En la máxima medida permitida por la ley, Atlas Gloss no será responsable por daños indirectos, incidentales, especiales o consecuentes que surjan de o en relación con nuestros servicios. Nuestra responsabilidad total por cualquier reclamo no excederá el monto pagado por el servicio específico que dio lugar al reclamo.',
    },
    {
      h: '6. Propiedad Intelectual',
      p: 'Todo el contenido de este sitio web — incluyendo texto, imágenes, logotipos y diseños — es propiedad de Atlas Gloss y no puede ser reproducido sin nuestro permiso por escrito.',
    },
    {
      h: '7. Cambios a los Términos',
      p: 'Nos reservamos el derecho de actualizar estos términos en cualquier momento. Los cambios se publicarán en esta página con una fecha de revisión actualizada. El uso continuo de nuestros servicios después de los cambios constituye la aceptación de los nuevos términos.',
    },
    {
      h: '8. Ley Aplicable',
      p: 'Estos términos se rigen por las leyes del Estado de Texas. Cualquier disputa se resolverá en los tribunales del Condado de Harris, Texas.',
    },
    {
      h: '9. Contacto',
      p: 'Para preguntas sobre estos términos, contáctanos en: Atlas Gloss — Houston, TX — info@atlasgloss.com',
    },
  ],
}

export default async function TermsPage({ params }: Props) {
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
