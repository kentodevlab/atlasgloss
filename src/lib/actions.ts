'use server'

import { Resend } from 'resend'
import type { FormState } from '@/types'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function submitContact(prev: FormState, formData: FormData): Promise<FormState> {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const phone = formData.get('phone') as string
  const message = formData.get('message') as string

  const errors: Record<string, string[]> = {}

  if (!name || name.length < 2) errors.name = ['Name must be at least 2 characters']
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = ['Valid email is required']
  if (!message || message.length < 10) errors.message = ['Message must be at least 10 characters']

  if (Object.keys(errors).length > 0) {
    return { success: false, message: 'Please fix the errors below.', errors }
  }

  if (!resend) {
    return { success: false, message: 'Email service not configured.' }
  }

  try {
    await resend.emails.send({
      from: 'Atlas Gloss <onboarding@resend.dev>',
      to: process.env.RESEND_CONTACT_EMAIL || 'contact@atlasgloss.com',
      subject: `New contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nMessage: ${message}`,
    })
    return { success: true, message: '' }
  } catch {
    return { success: false, message: 'Something went wrong. Please try again.' }
  }
}

export async function subscribeNewsletter(prev: FormState, formData: FormData): Promise<FormState> {
  const email = formData.get('email') as string

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, message: 'Valid email is required.' }
  }

  if (!resend) {
    return { success: false, message: 'Newsletter service not configured.' }
  }

  try {
    await resend.contacts.create({
      email,
      audienceId: process.env.RESEND_AUDIENCE_ID || '',
    })
    return { success: true, message: '' }
  } catch {
    return { success: false, message: 'Something went wrong.' }
  }
}
