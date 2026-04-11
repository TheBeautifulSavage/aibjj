import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import Link from 'next/link'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    redirect('/auth/signin')
  }

  if (session.user.role !== 'ADMIN') {
    redirect('/dashboard')
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <nav className="border-b border-zinc-800 bg-zinc-900 sticky top-0 z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center gap-4">
            <Link href="/dashboard" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-600 font-bold text-white text-xs">
                AI
              </div>
              <span className="font-mono text-base font-black text-zinc-100 tracking-tight">AIBJJ</span>
            </Link>
            <span className="text-zinc-700">/</span>
            <span className="text-sm font-semibold text-red-500 uppercase tracking-wider">Admin</span>
            <div className="flex-1" />
            <Link
              href="/dashboard"
              className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              ← Back to App
            </Link>
          </div>
        </div>
      </nav>
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  )
}
