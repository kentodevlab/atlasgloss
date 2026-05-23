export default function Loading() {
  return (
    <main className="min-h-screen bg-page animate-pulse">
      <div className="h-[85dvh] bg-[#e2e6ec] dark:bg-[#1A2332]" />

      <div className="container-ag py-[clamp(3rem,8vw,6rem)]">
        <div className="max-w-[36ch] mx-auto mb-14 text-center">
          <div className="h-4 w-24 bg-[#e2e6ec] dark:bg-[#1A2332] rounded mx-auto mb-5" />
          <div className="h-8 w-64 bg-[#e2e6ec] dark:bg-[#1A2332] rounded mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-80 bg-[#e2e6ec] dark:bg-[#1A2332] rounded-[16px]" />
          ))}
        </div>
      </div>
    </main>
  )
}
