import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col items-center justify-center px-4">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-red-600/8 blur-[120px]" />
      </div>

      <div className="relative text-center max-w-lg">
        {/* BJJ belt visual */}
        <div className="mb-6 flex justify-center gap-1">
          {['bg-white', 'bg-blue-500', 'bg-purple-600', 'bg-amber-800', 'bg-zinc-900 border border-zinc-600'].map((color, i) => (
            <div key={i} className={`h-3 w-12 rounded-sm ${color}`} />
          ))}
        </div>

        <div className="text-8xl font-black text-red-600 mb-2">404</div>

        <h1 className="text-3xl font-black text-white mb-4">
          You've Been Submitted
        </h1>

        <p className="text-lg text-zinc-400 mb-3 leading-relaxed">
          This page tapped out. It doesn't exist — or it did and got swept away like a careless guard pass.
        </p>

        <p className="text-sm text-zinc-600 mb-10 italic">
          "Position before submission." — Find your way back first.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-700 transition-colors"
          >
            🏠 Back to Home
          </Link>
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-6 py-3 text-sm font-semibold text-zinc-300 hover:border-zinc-600 hover:text-white transition-colors"
          >
            🥋 Go to Dashboard
          </Link>
        </div>

        <p className="mt-8 text-xs text-zinc-700">
          Lost? Try <Link href="/auth/signup" className="text-red-600 hover:text-red-500">signing up</Link> or <Link href="/auth/signin" className="text-red-600 hover:text-red-500">signing in</Link>.
        </p>
      </div>
    </div>
  )
}
