export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-page">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 rounded-full border-2 border-blue-bright border-t-transparent animate-spin" />
        <p className="text-muted text-sm">Loading…</p>
      </div>
    </main>
  )
}
