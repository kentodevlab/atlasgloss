export type Locale = 'en' | 'es'

const dictionary = {
  nav: {
    services: { en: 'Services', es: 'Servicios' },
    gallery: { en: 'Gallery', es: 'Galería' },
    reviews: { en: 'Reviews', es: 'Reseñas' },
    bookNow: { en: 'Book Now', es: 'Reservar' },
  },
  hero: {
    eyebrow: { en: 'PREMIUM HAND CAR WASH · HOUSTON, TX', es: 'LAVADO DE AUTOS PREMIUM A MANO · HOUSTON, TX' },
    titleStart: { en: 'Your car deserves a ', es: 'Tu auto merece un ' },
    titleAccent: { en: 'mirror finish', es: 'acabado espejo' },
    lead: { en: 'Hand-washed with precision care. Every detail, every curve — finished to a showroom shine.', es: 'Lavado a mano con cuidado y precisión. Cada detalle, cada curva — con brillo de vitrina.' },
    ctaPrimary: { en: 'Book Your Wash', es: 'Reserva tu Lavado' },
    ctaSecondary: { en: 'See Packages', es: 'Ver Paquetes' },
  },
  gallery: {
    eyebrow: { en: 'OUR WORK', es: 'NUESTRO TRABAJO' },
    title: { en: 'See the difference a hand wash makes', es: 'Mira la diferencia de un lavado a mano' },
    lead: { en: 'Real results from real clients across Houston. Every photo taken after an Atlas Gloss detail.', es: 'Resultados reales de clientes en Houston. Cada foto tomada después de un detalle Atlas Gloss.' },
  },
  services: {
    eyebrow: { en: 'WASH PACKAGES', es: 'PAQUETES DE LAVADO' },
    title: { en: 'Choose your level of clean', es: 'Elige tu nivel de limpieza' },
    express: {
      name: { en: 'Express', es: 'Express' },
      desc: { en: 'Quick exterior hand wash & dry', es: 'Lavado y secado rápido exterior' },
      features: [
        { en: 'Hand wash & rinse', es: 'Lavado y enjuague a mano' },
        { en: 'Microfiber dry', es: 'Secado con microfibra' },
        { en: 'Tire & rim clean', es: 'Llantas y rines limpios' },
        { en: 'Window polish', es: 'Pulido de ventanas' },
        { en: '~20 minutes', es: '~20 minutos' },
      ],
      cta: { en: 'Book Express', es: 'Reservar Express' },
    },
    premium: {
      name: { en: 'Premium', es: 'Premium' },
      desc: { en: 'Full interior + exterior detail', es: 'Detalle interior y exterior completo' },
      features: [
        { en: 'Everything in Express', es: 'Todo en Express' },
        { en: 'Interior vacuum & wipe', es: 'Aspirado y limpieza interior' },
        { en: 'Dashboard & console detail', es: 'Detalle de tablero y consola' },
        { en: 'Spray wax finish', es: 'Acabado con cera spray' },
        { en: 'Air freshener', es: 'Aromatizante' },
        { en: '~45 minutes', es: '~45 minutos' },
      ],
      cta: { en: 'Book Premium', es: 'Reservar Premium' },
      badge: { en: 'MOST POPULAR', es: 'MÁS POPULAR' },
    },
    signature: {
      name: { en: 'Signature', es: 'Signature' },
      desc: { en: 'Showroom-level full detail', es: 'Detalle completo nivel vitrina' },
      features: [
        { en: 'Everything in Premium', es: 'Todo en Premium' },
        { en: 'Clay bar treatment', es: 'Tratamiento clay bar' },
        { en: 'Hand-applied carnauba wax', es: 'Cera carnauba aplicada a mano' },
        { en: 'Leather conditioning', es: 'Acondicionado de cuero' },
        { en: 'Engine bay clean', es: 'Limpieza de compartimiento' },
        { en: '~90 minutes', es: '~90 minutos' },
      ],
      cta: { en: 'Book Signature', es: 'Reservar Signature' },
    },
  },
  testimonials: {
    eyebrow: { en: 'CLIENT REVIEWS', es: 'RESEÑAS DE CLIENTES' },
    title: { en: 'What Houston drivers say', es: 'Lo que dicen los conductores de Houston' },
    items: [
      {
        quote: { en: '"Best hand wash in Houston. They treated my truck like it was their own. The mirror finish is no joke."', es: '"El mejor lavado a mano en Houston. Trataron mi camioneta como si fuera suya. El acabado espejo es real."' },
        author: 'Carlos M.',
        location: { en: 'Katy, TX', es: 'Katy, TX' },
      },
      {
        quote: { en: '"I\'ve tried every car wash in the area. Atlas Gloss is the only one I trust with my Porsche. Worth every penny."', es: '"He probado todos los car wash de la zona. Atlas Gloss es el único en quien confío con mi Porsche. Vale cada centavo."' },
        author: 'Sarah T.',
        location: { en: 'River Oaks, TX', es: 'River Oaks, TX' },
      },
      {
        quote: { en: '"Booked online, showed up, and my car was done in 40 minutes. Interior looked brand new. Incredible attention to detail."', es: '"Reservé en línea, llegué, y mi carro estaba listo en 40 minutos. El interior parecía nuevo. Increíble atención al detalle."' },
        author: 'James R.',
        location: { en: 'The Heights, TX', es: 'The Heights, TX' },
      },
    ],
  },
  booking: {
    eyebrow: { en: 'BOOK YOUR APPOINTMENT', es: 'RESERVA TU CITA' },
    title: { en: 'Ready for a mirror finish?', es: '¿Listo para un acabado espejo?' },
    lead: { en: 'Book online in 30 seconds. Pick your package, choose a time, and we\'ll handle the rest.', es: 'Reserva en línea en 30 segundos. Elige tu paquete, selecciona una hora y nosotros nos encargamos.' },
    cta: { en: 'Book Online Now →', es: 'Reservar Ahora →' },
    step1Title: { en: 'Pick Your Package', es: 'Elige tu Paquete' },
    step1Desc: { en: 'Express, Premium, or Signature — choose the level of clean you need.', es: 'Express, Premium o Signature — elige el nivel de limpieza que necesitas.' },
    step2Title: { en: 'Select a Time', es: 'Selecciona una Hora' },
    step2Desc: { en: 'Browse available slots and pick the date and time that works for you.', es: 'Explora horarios disponibles y elige la fecha y hora que te convenga.' },
    step3Title: { en: 'Drive In & Relax', es: 'Llega y Relájate' },
    step3Desc: { en: 'Show up at your scheduled time. We\'ll have your car looking showroom-fresh.', es: 'Llega en tu hora programada. Tendremos tu carro como nuevo.' },
  },
  contact: {
    title: { en: 'Contact Us', es: 'Contáctanos' },
    nameLabel: { en: 'Name', es: 'Nombre' },
    emailLabel: { en: 'Email', es: 'Correo' },
    phoneLabel: { en: 'Phone', es: 'Teléfono' },
    messageLabel: { en: 'Message', es: 'Mensaje' },
    submit: { en: 'Send Message', es: 'Enviar Mensaje' },
    success: { en: 'Thanks! We\'ll get back to you soon.', es: '¡Gracias! Te responderemos pronto.' },
    error: { en: 'Something went wrong. Please try again.', es: 'Algo salió mal. Intenta de nuevo.' },
  },
  newsletter: {
    placeholder: { en: 'Enter your email', es: 'Ingresa tu correo' },
    submit: { en: 'Subscribe', es: 'Suscribirse' },
    success: { en: 'You\'re subscribed!', es: '¡Estás suscrito!' },
    error: { en: 'Something went wrong.', es: 'Algo salió mal.' },
  },
  footer: {
    tagline: { en: 'Premium hand car wash. Mirror-finished, every time. Serving Houston, TX since 2023.', es: 'Lavado premium a mano. Acabado espejo, siempre. Sirviendo Houston, TX desde 2023.' },
    weekday: { en: 'Mon–Sat: 7:00 AM – 7:00 PM', es: 'Lun–Sáb: 7:00 AM – 7:00 PM' },
    sunday: { en: 'Sun: 8:00 AM – 5:00 PM', es: 'Dom: 8:00 AM – 5:00 PM' },
    copyright: { en: '© 2026 Atlas Gloss. All rights reserved.', es: '© 2026 Atlas Gloss. Todos los derechos reservados.' },
    tag: { en: 'Hand-washed. Mirror-finished.', es: 'Lavado a mano. Acabado espejo.' },
  },
} as const

export default dictionary

export function t(obj: { en: string; es: string }, locale: Locale): string {
  return obj[locale]
}
