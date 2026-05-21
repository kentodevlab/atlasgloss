export interface Bilingual {
  en: string
  es: string
}

export interface ServicePackage {
  id: string
  nameKey: string | Bilingual
  descriptionKey: string | Bilingual
  price: number
  duration: number
  features: (string | Bilingual)[]
  featured?: boolean
}

export interface Testimonial {
  id: string
  name: string
  location: string | Bilingual
  stars: number
  quoteKey: string | Bilingual
}

export interface GalleryImage {
  src: string
  alt: string
  label: string
  span?: 2
}

export interface FormState {
  success: boolean
  message: string
  errors?: Record<string, string[]>
}
