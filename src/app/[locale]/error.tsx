'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 text-center px-4 bg-page">
      <h1 className="font-[family-name:var(--font-display)] text-[clamp(3rem,8vw,5rem)] font-extrabold text-blue-bright leading-none">
        Oops!
      </h1>
      <p className="text-muted text-lg max-w-md">
        Something went wrong. Please try again.
      </p>
      <button
        onClick={reset}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px] bg-blue-bright text-white text-sm font-semibold hover:bg-blue-deep transition-colors"
      >
        Try Again
      </button>
    </main>
  )
}
