'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col items-center justify-center px-4">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-red-600/8 blur-[120px]" />
      </div>

      <div className="relative text-center max-w-lg">
        {/* Icon */}
        <div className="text-6xl mb-4">⚠️</div>

        <h1 className="text-3xl font-black text-white mb-4">
          Technical Difficulty
        </h1>

        <p className="text-lg text-zinc-400 mb-3 leading-relaxed">
          Something went wrong on our end. Even the best athletes get taken down sometimes — we're working on getting back up.
        </p>

        {error.digest && (
          <p className="text-xs text-zinc-700 mb-6 font-mono">
            Error ID: {error.digest}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-700 transition-colors"
          >
            🔄 Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-6 py-3 text-sm font-semibold text-zinc-300 hover:border-zinc-600 hover:text-white transition-colors"
          >
            🏠 Go Home
          </Link>
        </div>

        <p className="mt-8 text-xs text-zinc-600">
          Problem persists?{' '}
          <a href="mailto:hulljessej@gmail.com" className="text-red-600 hover:text-red-500">
            Contact support
          </a>
        </p>
      </div>
    </div>
  )
}
