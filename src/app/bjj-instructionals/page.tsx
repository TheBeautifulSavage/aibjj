import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Best BJJ Instructionals Online | Buy & Sell on AIBJJ',
  description: 'Find the best BJJ instructionals online. Buy from world-class coaches and creators. Creators earn 85% — the highest payout in the industry. Better than BJJ Fanatics.',
  openGraph: {
    title: 'Best BJJ Instructionals Online | AIBJJ',
    description: 'The BJJ instructionals marketplace where creators keep 85%. Buy from top coaches. Start your own instructional. Better terms than anywhere else.',
    url: 'https://aibjj.com/bjj-instructionals',
  },
}

export default function BJJInstructionalsPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300">
      {/* Nav */}
      <nav className="border-b border-zinc-800/60 bg-black/80 backdrop-blur-xl px-4 py-4">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-tight">
            <span className="text-red-600">AI</span><span className="text-white">BJJ</span>
          </Link>
          <div className="flex gap-3">
            <Link href="/auth/signin" className="text-sm text-zinc-400 hover:text-white px-4 py-2">Sign In</Link>
            <Link href="/auth/signup" className="text-sm bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Get Started</Link>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-500 mb-3">BJJ Instructionals</p>
          <h1 className="text-4xl font-black text-white sm:text-5xl mb-6">
            The Best BJJ Instructionals Online
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            BJJ instructionals have transformed how the sport is learned. Decades ago, you needed to move to a world-class academy or know the right people. Today, the best techniques in the world are available to anyone willing to invest the time — if you&apos;re buying from the right platform.
          </p>
        </div>

        {/* CTA Banner */}
        <div className="mb-12 p-6 rounded-xl bg-red-950/30 border border-red-900/40">
          <p className="font-semibold text-white mb-1">🎥 Browse the AIBJJ Marketplace</p>
          <p className="text-zinc-400 text-sm mb-4">Discover instructionals from top coaches and creators. Creators earn 85% — the highest payout in the industry.</p>
          <div className="flex gap-3">
            <Link href="/auth/signup" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors">
              Browse Marketplace →
            </Link>
            <Link href="/auth/signup?creator=true" className="inline-flex items-center gap-2 border border-zinc-600 hover:border-zinc-500 text-zinc-300 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors">
              Sell Your Content
            </Link>
          </div>
        </div>

        <div className="space-y-12">

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What Makes a Great BJJ Instructional?</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Not all BJJ instructionals are created equal. The market is flooded with content — some of it world-class, some of it overpriced fluff. Here&apos;s how to evaluate whether an instructional is worth your money and time:
            </p>

            <h3 className="text-xl font-semibold text-white mb-2">Specificity Over Breadth</h3>
            <p className="text-zinc-400 leading-relaxed mb-4">
              The best instructionals are narrow and deep. A 4-volume series on the D&apos;arce choke that covers every setup, every angle, every defense and counter — that&apos;s valuable. A 10-volume &ldquo;complete BJJ system&rdquo; that covers everything at surface level — that&apos;s usually noise. Look for instructors who go deep on what they actually do at the highest level.
            </p>

            <h3 className="text-xl font-semibold text-white mb-2">Credibility Matters</h3>
            <p className="text-zinc-400 leading-relaxed mb-4">
              The instructor should have proven their system works under pressure — competition, high-level training, or both. This doesn&apos;t mean they need to be a world champion, but they should have real-world validation of the techniques they&apos;re teaching.
            </p>

            <h3 className="text-xl font-semibold text-white mb-2">Concept Over Just Moves</h3>
            <p className="text-zinc-400 leading-relaxed mb-4">
              The best instructors teach the &ldquo;why&rdquo; — the underlying principles that make techniques work. An instructor who just shows you the motion of a technique gives you one tool. An instructor who explains the underlying mechanics gives you the ability to troubleshoot, adapt, and invent.
            </p>

            <h3 className="text-xl font-semibold text-white mb-2">Production Quality</h3>
            <p className="text-zinc-400 leading-relaxed mb-4">
              You shouldn&apos;t need to strain to see the grips or hear the instruction. Good camera angles, clear audio, and clean editing aren&apos;t optional — they&apos;re baseline expectations in 2024. Fortunately, AIBJJ creators use our built-in tools to produce quality content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Top Categories of BJJ Instructionals</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              The market has naturally segmented around the areas BJJ athletes want to improve most:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: '🦵 Leg Locks', desc: 'The fastest-growing segment. Heel hooks, knee bars, saddle position, ashi garami systems. Essential for no-gi competition.' },
                { title: '🛡️ Guard Systems', desc: 'Complete guard systems — spider guard, lasso, De La Riva, butterfly, half guard. The foundation of BJJ.' },
                { title: '⬆️ Guard Passing', desc: 'Pressure passing, speed passing, specific passes like the over-under. How top players approach the most important skill in BJJ.' },
                { title: '🔒 Back Attacks', desc: 'Rear naked choke mechanics, body triangle, transitions, retention. The most valuable position in grappling.' },
                { title: '🏆 Competition Prep', desc: 'Specific preparation for IBJJF, ADCC, or sub-only formats. Rules, strategy, cutting weight, mental preparation.' },
                { title: '🥊 Self Defense & MMA', desc: 'Practical applications, striking integration, real-world grappling scenarios for MMA or self defense.' },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                  <p className="font-semibold text-white mb-1">{item.title}</p>
                  <p className="text-sm text-zinc-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Why AIBJJ Is a Better Marketplace Than BJJ Fanatics</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              BJJ Fanatics is the current giant in the instructional market — and they&apos;ve done a lot for the sport. But the economics aren&apos;t creator-friendly, and the platform isn&apos;t built around the student&apos;s learning experience. AIBJJ was built to fix both problems.
            </p>

            <div className="overflow-hidden rounded-xl border border-zinc-800 mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-800 bg-zinc-900">
                    <th className="px-5 py-3 text-left font-medium text-zinc-400">Feature</th>
                    <th className="px-5 py-3 text-center font-bold text-red-500">AIBJJ</th>
                    <th className="px-5 py-3 text-center font-medium text-zinc-500">BJJ Fanatics</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/50">
                  {[
                    ['Creator payout', '85%', '50-60%'],
                    ['Custom creator page', '✅ Free', '❌'],
                    ['AI coaching integration', '✅', '❌'],
                    ['Training journal', '✅', '❌'],
                    ['Game plan builder', '✅', '❌'],
                    ['Student analytics', '✅', '❌'],
                    ['Technique library', '✅ 10,000+', '❌'],
                  ].map(([feature, aibjj, fanatics]) => (
                    <tr key={feature} className="bg-zinc-950/50">
                      <td className="px-5 py-3 font-medium text-zinc-300">{feature}</td>
                      <td className="px-5 py-3 text-center font-semibold text-green-400">{aibjj}</td>
                      <td className="px-5 py-3 text-center text-zinc-500">{fanatics}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-zinc-400 leading-relaxed">
              For buyers, the advantage is the integration with AIBJJ&apos;s learning tools. After watching an instructional, you can ask the AI coach questions about specific techniques, get drilling sequences, or build a game plan around what you just learned. No other platform offers this.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">For Creators: Sell Your BJJ Instructionals</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              If you&apos;re a coach, athlete, or serious practitioner with knowledge worth sharing, AIBJJ&apos;s creator marketplace is the most profitable place to sell it. With an 85% payout and your own custom creator page, you keep significantly more of every sale.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-4">
              You don&apos;t need a production studio. You need a phone, good lighting, and techniques worth teaching. AIBJJ provides the hosting, the payment processing, the creator page, and access to a growing community of BJJ students actively looking for quality content.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Setup takes under 10 minutes. Upload your first instructional and start earning — you keep 85% of every sale from day one.
            </p>
          </section>

          {/* Final CTA */}
          <section className="p-8 rounded-xl bg-zinc-900/60 border border-zinc-800 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Join the AIBJJ Marketplace</h2>
            <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
              Buy instructionals from world-class creators. Or sell yours and keep 85%. Start free.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/auth/signup" className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Get Started Free →
              </Link>
              <Link href="/bjj-ai-coach" className="inline-flex items-center justify-center gap-2 border border-zinc-700 bg-zinc-900 hover:border-zinc-600 text-zinc-300 px-6 py-3 rounded-lg font-semibold transition-colors">
                Learn About AI Coach
              </Link>
            </div>
          </section>

        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-800/60 bg-zinc-950 py-8 mt-16">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-600">
          <Link href="/" className="font-black text-base"><span className="text-red-600">AI</span><span className="text-white">BJJ</span></Link>
          <div className="flex gap-6">
            <Link href="/bjj-techniques" className="hover:text-zinc-400">Techniques</Link>
            <Link href="/bjj-training-journal" className="hover:text-zinc-400">Journal</Link>
            <Link href="/bjj-ai-coach" className="hover:text-zinc-400">AI Coach</Link>
            <Link href="/terms" className="hover:text-zinc-400">Terms</Link>
            <Link href="/privacy" className="hover:text-zinc-400">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
