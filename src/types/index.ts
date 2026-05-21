export interface ServicePackage {
  id: string
  nameKey: string
  descriptionKey: string
  price: number
  duration: number
  features: string[]
  featured?: boolean
}

export interface Testimonial {
  id: string
  name: string
  location: string
  stars: number
  quoteKey: string
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
