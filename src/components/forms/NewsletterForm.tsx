'use client'

import { useActionState } from 'react'
import { useLocale } from 'next-intl'
import { t } from '@/lib/dictionary'
import { subscribeNewsletter } from '@/lib/actions'
import dictionary from '@/lib/dictionary'
import type { FormState } from '@/types'

export default function NewsletterForm() {
  const locale = useLocale() as 'en' | 'es'
  const [state, formAction, pending] = useActionState<FormState, FormData>(subscribeNewsletter, { success: false, message: '' })

  if (state.success) {
    return (
      <p className="text-green-600 text-xs font-medium">
        {t(dictionary.newsletter.success, locale)}
      </p>
    )
  }

  return (
    <form action={formAction} className="flex gap-2">
      <label htmlFor="newsletter-email" className="sr-only">
        {t(dictionary.newsletter.placeholder, locale)}
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        required
        placeholder={t(dictionary.newsletter.placeholder, locale)}
        className="flex-1 px-3.5 py-2.5 border border-border rounded-[10px] bg-surface text-fg text-[13px] outline-2 outline-transparent focus:outline-blue-bright/20 focus:border-blue-bright"
      />
      <button
        type="submit"
        disabled={pending}
        className="px-4 py-2.5 rounded-[10px] bg-blue-bright text-white text-[13px] font-semibold border border-blue-bright hover:bg-blue-deep transition-all duration-150 disabled:opacity-50"
      >
        {pending ? '...' : t(dictionary.newsletter.submit, locale)}
      </button>
      {state.message && !state.success && (
        <p className="text-red-500 text-xs">{state.message}</p>
      )}
    </form>
  )
}
