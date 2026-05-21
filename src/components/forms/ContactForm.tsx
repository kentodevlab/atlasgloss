'use client'

import { useActionState } from 'react'
import { useLocale } from 'next-intl'
import { t } from '@/lib/dictionary'
import { submitContact } from '@/lib/actions'
import dictionary from '@/lib/dictionary'
import type { FormState } from '@/types'

export default function ContactForm() {
  const locale = useLocale() as 'en' | 'es'
  const [state, formAction, pending] = useActionState<FormState, FormData>(submitContact, { success: false, message: '' })

  if (state.success) {
    return (
      <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="16 8 10 16 7 12" />
        </svg>
        {t(dictionary.contact.success, locale)}
      </div>
    )
  }

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-muted text-xs font-medium">
          {t(dictionary.contact.nameLabel, locale)}
        </label>
        <input
          id="name"
          name="name"
          required
          minLength={2}
          className="w-full px-3.5 py-3 border border-border rounded-[10px] bg-surface text-fg text-[15px] outline-2 outline-transparent focus:outline-blue-bright/20 focus:border-blue-bright"
        />
        {state.errors?.name && <p className="text-red-500 text-xs">{state.errors.name[0]}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-muted text-xs font-medium">
          {t(dictionary.contact.emailLabel, locale)}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full px-3.5 py-3 border border-border rounded-[10px] bg-surface text-fg text-[15px] outline-2 outline-transparent focus:outline-blue-bright/20 focus:border-blue-bright"
        />
        {state.errors?.email && <p className="text-red-500 text-xs">{state.errors.email[0]}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="phone" className="text-muted text-xs font-medium">
          {t(dictionary.contact.phoneLabel, locale)}
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="w-full px-3.5 py-3 border border-border rounded-[10px] bg-surface text-fg text-[15px] outline-2 outline-transparent focus:outline-blue-bright/20 focus:border-blue-bright"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-muted text-xs font-medium">
          {t(dictionary.contact.messageLabel, locale)}
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          rows={4}
          className="w-full px-3.5 py-3 border border-border rounded-[10px] bg-surface text-fg text-[15px] outline-2 outline-transparent focus:outline-blue-bright/20 focus:border-blue-bright resize-y"
        />
        {state.errors?.message && <p className="text-red-500 text-xs">{state.errors.message[0]}</p>}
      </div>

      {state.message && !state.success && (
        <p className="text-red-500 text-xs">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full px-6 py-3 rounded-[10px] bg-blue-bright text-white text-[15px] font-semibold border border-blue-bright hover:bg-blue-deep transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {pending && (
          <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
            <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="4" className="opacity-75" />
          </svg>
        )}
        {t(dictionary.contact.submit, locale)}
      </button>
    </form>
  )
}
