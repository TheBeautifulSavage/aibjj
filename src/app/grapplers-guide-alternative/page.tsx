import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Best Grapplers Guide Alternative in 2025 | AIBJJ',
  description: "Looking for a Grapplers Guide alternative? AIBJJ offers AI coaching, technique library, training journal, and an instructionals marketplace. Better for systematic BJJ learning.",
  openGraph: {
    title: 'Best Grapplers Guide Alternative in 2025 | AIBJJ',
    description: "The best Grapplers Guide alternative with AI coaching, 10,000+ techniques, and a training ecosystem built for BJJ.",
    url: 'https://aibjj.com/grapplers-guide-alternative',
  },
}

export default function GrapplersGuideAlternativePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <nav className="border-b border-zinc-800/60 bg-zinc-950/90 backdrop-blur-xl px-4 py-4 sticky top-0 z-50">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-tight"><span className="text-red-600">AI</span><span className="text-white">BJJ</span></Link>
          <div className="flex gap-3">
            <Link href="/auth/signin" className="text-sm text-zinc-400 hover:text-white px-4 py-2">Sign In</Link>
            <Link href="/auth/signup" className="text-sm bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Try Free</Link>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-500 mb-3">Alternatives & Comparisons</p>
          <h1 className="text-4xl font-black text-white sm:text-5xl mb-6">
            Best Grapplers Guide Alternative in 2025
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            If you're looking for a Grapplers Guide alternative — whether you're looking for something with AI coaching, a different content approach, or a more comprehensive training ecosystem — here's what's available in 2025.
          </p>
        </div>

        <div className="mb-10 p-6 rounded-xl bg-red-950/30 border border-red-900/40">
          <p className="font-semibold text-white mb-1">🤖 AIBJJ: The AI-Powered Alternative</p>
          <p className="text-zinc-400 text-sm mb-4">AI coach that answers your BJJ questions, 10,000+ technique library, training journal, and an instructionals marketplace. The training platform Grapplers Guide inspired — rebuilt with AI.</p>
          <Link href="/auth/signup" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors">Try AIBJJ Free →</Link>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What Grapplers Guide Offers</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Grapplers Guide, created by Jason Scully, was one of the pioneering subscription-based BJJ learning platforms. It offers a large library of instructional content — hundreds of hours of technique videos organized by position and concept. Jason Scully has built a solid, comprehensive curriculum that covers a wide range of BJJ topics.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Grapplers Guide was innovative for its time and still represents solid value for practitioners looking for structured, curriculum-based learning. However, it was built before AI coaching became a possibility, and its ecosystem is primarily video-based without many of the training tools that modern BJJ platforms offer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Why People Look for Alternatives</h2>
            <div className="space-y-3">
              {[
                { reason: 'Wanting AI coaching integration', desc: "Grapplers Guide can't answer your specific questions or help you troubleshoot problems in real time. AI coaching changes this." },
                { reason: 'Looking for more creator diversity', desc: "A marketplace with multiple coaches and perspectives gives you access to different teaching styles and specializations." },
                { reason: 'Needing a training journal', desc: "Tracking sessions, what you drilled, what worked, what to fix — this requires tools beyond video content." },
                { reason: 'Game plan building', desc: "Systematically building your A-game, transitions, and backup plans isn't something a video library helps with directly." },
                { reason: 'Different price point or model', desc: "Evaluating whether a subscription is worth it relative to other options in the market." },
              ].map((item) => (
                <div key={item.reason} className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-4">
                  <p className="font-semibold text-white text-sm mb-1">→ {item.reason}</p>
                  <p className="text-xs text-zinc-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">AIBJJ as the Best Alternative</h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              AIBJJ is specifically designed to be the next evolution of the subscription BJJ learning platform — built with AI at its core rather than as an afterthought.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'AI Coach', desc: "Ask any BJJ question and get immediate, detailed answers. Troubleshoot specific problems. Generate drilling sequences. Build game plans with guidance." },
                { title: '10,000+ Technique Library', desc: "Comprehensive, searchable technique content organized by position, submission, guard type, and more. Comparable breadth to Grapplers Guide." },
                { title: 'Training Journal', desc: "Log every session. Track your progress over time. Build your improvement history. Know what to work on at the next training." },
                { title: 'Creator Marketplace', desc: "Buy instructionals from coaches across different specializations and lineages. Multiple perspectives accelerate learning." },
                { title: 'Game Plan Builder', desc: "Systematically construct your BJJ game — positions, transitions, submissions, counters. Think about your jiu-jitsu strategically." },
                { title: 'Pricing', desc: "$19.99/month — competitive with Grapplers Guide, but with AI coaching and additional tools included." },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                  <p className="font-semibold text-white mb-1 text-sm">✓ {item.title}</p>
                  <p className="text-xs text-zinc-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Comparison at a Glance</h2>
            <div className="overflow-hidden rounded-xl border border-zinc-800">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-800 bg-zinc-900">
                    <th className="px-5 py-4 text-left font-medium text-zinc-400">Feature</th>
                    <th className="px-5 py-4 text-center font-bold text-red-400">AIBJJ</th>
                    <th className="px-5 py-4 text-center font-medium text-zinc-500">Grapplers Guide</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/50">
                  {[
                    ['AI coaching and Q&A', '✅ Yes', '❌ No'],
                    ['Technique video library', '✅ 10,000+', '✅ Large library'],
                    ['Structured curriculum', '✅ Yes', '✅ Yes'],
                    ['Training journal', '✅ Yes', '❌ No'],
                    ['Game plan builder', '✅ Yes', '❌ No'],
                    ['Creator marketplace', '✅ Multiple coaches', '❌ Single instructor'],
                    ['Mobile experience', '✅ Optimized', '⚠️ Basic'],
                    ['Price', '$19.99/mo', 'Similar range'],
                  ].map(([feat, aibjj, gg]) => (
                    <tr key={feat as string} className="bg-zinc-950/50">
                      <td className="px-5 py-3 font-medium text-zinc-300">{feat}</td>
                      <td className="px-5 py-3 text-center text-green-400 font-medium">{aibjj}</td>
                      <td className="px-5 py-3 text-center text-zinc-500">{gg}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="p-8 rounded-xl bg-zinc-900/60 border border-zinc-800 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Try the AI-Powered Alternative</h2>
            <p className="text-zinc-400 mb-6 max-w-xl mx-auto">AI coach, 10,000+ techniques, training journal, and creator marketplace. Start free — no credit card required.</p>
            <Link href="/auth/signup" className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">Start AIBJJ Free →</Link>
          </section>
        </div>
      </div>

      <footer className="border-t border-zinc-800/60 bg-zinc-950 py-8 mt-8">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-600">
          <Link href="/" className="font-black text-base"><span className="text-red-600">AI</span><span className="text-white">BJJ</span></Link>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link href="/bjj-fanatics-alternative" className="hover:text-zinc-400">Fanatics Alternatives</Link>
            <Link href="/aibjj-vs-bjj-fanatics" className="hover:text-zinc-400">vs Fanatics</Link>
            <Link href="/pricing" className="hover:text-zinc-400">Pricing</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
