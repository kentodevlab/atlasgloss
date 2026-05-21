import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center px-4">
      <h1 className="font-[family-name:var(--font-display)] text-[clamp(3rem,8vw,6rem)] font-extrabold text-blue-bright leading-none">
        404
      </h1>
      <p className="text-muted text-lg max-w-md">
        Page not found. Let&apos;s get you back on track.
      </p>
      <Link
        href="/en"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px] bg-blue-bright text-white text-sm font-semibold no-underline hover:bg-blue-deep transition-colors"
      >
        Back to Home
      </Link>
    </main>
  )
}
