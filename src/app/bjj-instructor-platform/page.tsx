import type { Metadata } from 'next'
import Link from 'next/link'
import RevenueCalculator from './RevenueCalculator'

export const metadata: Metadata = {
  title: 'BJJ Instructor Platform — Sell BJJ Instructionals & Keep 85% | AIBJJ',
  description: 'The best BJJ instructor platform for selling instructionals online. Upload your content, keep 85% of every sale. No exclusivity. Better than BJJ Fanatics for creators.',
  openGraph: {
    title: 'BJJ Instructor Platform — Keep 85% | AIBJJ',
    description: 'Sell your BJJ instructionals and keep 85%. AIBJJ is the creator-first platform built for BJJ instructors. No exclusivity, no upfront cost, direct Stripe payments.',
    url: 'https://aibjj.com/bjj-instructor-platform',
  },
}

export default function BJJInstructorPlatformPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/60 bg-zinc-950/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-1 text-xl font-black tracking-tight">
            <span className="text-red-600">AI</span>
            <span className="text-white">BJJ</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/auth/signin" className="text-sm text-zinc-400 hover:text-white px-3 py-1.5">Sign In</Link>
            <Link href="/auth/signup?role=creator" className="text-sm bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
              Become a Creator
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden pt-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-red-600/8 blur-[140px]" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 pb-16 pt-24 text-center sm:px-6 sm:pt-32 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-800/50 bg-red-950/40 px-4 py-1.5 text-sm text-red-300">
            💰 You keep 85% of every sale. Always.
          </div>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            Sell Your BJJ Instructionals Online —{' '}
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Keep 85%
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            AIBJJ is the BJJ instructor platform built to maximize your revenue. Upload once, sell forever.
            No exclusivity contracts. No 50% cuts. No gatekeepers.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/auth/signup?role=creator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-xl text-lg font-bold transition-colors"
            >
              Become a Creator — It's Free →
            </Link>
            <Link
              href="#how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-zinc-700 hover:border-zinc-500 text-zinc-300 px-8 py-4 rounded-xl text-lg font-semibold transition-colors"
            >
              See How It Works
            </Link>
          </div>
          <p className="mt-4 text-sm text-zinc-600">No upfront cost · No exclusivity required · Start in 10 minutes</p>
        </div>
      </section>

      {/* vs Fanatics comparison table */}
      <section className="border-t border-zinc-800/60 py-16 bg-zinc-900/20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-500 mb-2">The Math Is Simple</p>
            <h2 className="text-3xl font-bold text-white">Why Creators Choose AIBJJ Over BJJ Fanatics</h2>
            <p className="mt-3 text-zinc-400">BJJ Fanatics keeps 40–70% of your revenue. We keep 15%.</p>
          </div>
          <div className="overflow-hidden rounded-xl border border-zinc-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-900">
                  <th className="px-6 py-4 text-left font-medium text-zinc-400">What Matters</th>
                  <th className="px-6 py-4 text-center font-bold text-red-400">AIBJJ</th>
                  <th className="px-6 py-4 text-center font-medium text-zinc-500">BJJ Fanatics</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/50">
                {[
                  ['Your payout on a $97 sale', '$82.45 (85%)', '$29–$58 (30–60%)'],
                  ['Exclusivity required?', '❌ Never', '✅ Often required'],
                  ['Your own branded creator page', '✅ [name].aibjj.com', '❌ Buried in catalog'],
                  ['Upfront cost to publish', '✅ Free always', '❌ Sometimes charged'],
                  ['You control your pricing', '✅ 100%', '❌ They set sales/discounts'],
                  ['Student analytics dashboard', '✅ Real-time', '❌ Limited'],
                  ['AI coaching integration', '✅ Built in', '❌ Not available'],
                  ['Direct Stripe payment processing', '✅ Instant to you', '❌ Batched monthly'],
                ].map(([feat, aibjj, fanatics]) => (
                  <tr key={feat as string} className="bg-zinc-950/50 hover:bg-zinc-900/30 transition-colors">
                    <td className="px-6 py-3 font-medium text-zinc-300">{feat}</td>
                    <td className="px-6 py-3 text-center font-semibold text-green-400">{aibjj}</td>
                    <td className="px-6 py-3 text-center text-zinc-500">{fanatics}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="border-t border-zinc-800/60 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-500 mb-2">How It Works</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Upload → Publish → Earn</h2>
            <p className="mt-4 text-zinc-400">Go from footage on your phone to selling instructionals in under a day.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: '01',
                title: 'Upload Your Content',
                desc: 'Record your instructional with a phone or camera. Upload directly through your AIBJJ creator dashboard. We handle encoding, hosting, and CDN delivery worldwide.',
              },
              {
                step: '02',
                title: 'Publish & Set Your Price',
                desc: 'Create your course, set your own price, add your bio and credentials. Your branded subdomain [yourname].aibjj.com goes live immediately. You control everything.',
              },
              {
                step: '03',
                title: 'Earn 85% — Direct to You',
                desc: 'When a student buys, Stripe processes the payment and 85% lands in your account. Automatic payouts. Real-time earnings dashboard. No delays.',
              },
            ].map((item, idx) => (
              <div key={item.step} className="relative text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-zinc-700 bg-zinc-900 text-2xl font-black text-red-500">
                  {item.step}
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Calculator */}
      <section className="border-t border-zinc-800/60 py-24 bg-zinc-900/20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-500 mb-2">Revenue Calculator</p>
            <h2 className="text-3xl font-bold text-white">What Could You Earn?</h2>
            <p className="mt-3 text-zinc-400">Drag the sliders to see your potential revenue vs. what you'd make on Fanatics.</p>
          </div>
          <RevenueCalculator />
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-zinc-800/60 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-500 mb-2">Platform Features</p>
            <h2 className="text-3xl font-bold text-white">Everything a BJJ Instructor Needs</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { emoji: '🏷️', title: 'Your Branded Subdomain', desc: '[yourname].aibjj.com — your own creator page with your bio, credentials, belt rank, and all your content in one place.' },
              { emoji: '💳', title: 'Direct Stripe Payments', desc: 'Real payments via Stripe. Funds go directly to your connected account — no waiting 30+ days for a check.' },
              { emoji: '📊', title: 'Student Analytics', desc: 'See who bought, watch time, completion rates, and revenue data — all in real time from your dashboard.' },
              { emoji: '🤖', title: 'AI Coach Integration', desc: "Students can ask AIBJJ's AI coach questions about your techniques, extending the value of your content beyond the video." },
              { emoji: '🔓', title: 'Zero Exclusivity', desc: "Sell on AIBJJ and everywhere else at the same time. Your content is yours — we never lock you in." },
              { emoji: '🎯', title: 'BJJ-Specific Audience', desc: 'Reach serious BJJ students actively looking to improve — not a general marketplace where BJJ content drowns in noise.' },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
                <div className="text-3xl mb-4">{item.emoji}</div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What sells */}
      <section className="border-t border-zinc-800/60 py-16 bg-zinc-900/20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white">What Sells Well on AIBJJ</h2>
            <p className="mt-3 text-zinc-400">Students buy solutions to specific problems. The most popular instructionals are:</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['Complete position systems', 'e.g., "The Complete Butterfly Guard" — depth over breadth converts'],
              ['Leg lock series', 'Heel hooks, inside sankaku, ashi garami entries — always in demand'],
              ['Competition prep', 'Tournament strategy, bracket reading, peaking for IBJJF or sub-only'],
              ['Beginner fundamentals', 'Always sells — every gym constantly has new white belts'],
              ['Guard passing systems', 'Over-under, leg drag, knee slice — the foundation of top game'],
              ['No-gi specific content', 'Fastest growing segment, still underserved — big opportunity'],
            ].map(([title, desc]) => (
              <div key={title as string} className="flex gap-3 rounded-lg border border-zinc-800 bg-zinc-950/60 p-4">
                <span className="text-red-500 mt-0.5 flex-shrink-0">✓</span>
                <div>
                  <p className="font-semibold text-white text-sm">{title}</p>
                  <p className="text-xs text-zinc-500 mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-zinc-800/60 py-24">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="text-3xl font-black text-white sm:text-4xl mb-4">
            Ready to Start Earning?
          </h2>
          <p className="text-zinc-400 mb-8 text-lg">
            Create your free creator account. Upload your first instructional.
            Start earning 85% of every sale — today.
          </p>
          <Link
            href="/auth/signup?role=creator"
            className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-xl text-lg font-bold transition-colors"
          >
            Become a Creator — Free →
          </Link>
          <p className="mt-4 text-sm text-zinc-600">No credit card required · No exclusivity · Start in 10 minutes</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800/60 bg-zinc-950 py-8">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-600">
          <Link href="/" className="font-black text-base"><span className="text-red-600">AI</span><span className="text-white">BJJ</span></Link>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link href="/sell-bjj-instructionals" className="hover:text-zinc-400">How to Sell</Link>
            <Link href="/affiliates" className="hover:text-zinc-400">Affiliates</Link>
            <Link href="/pricing" className="hover:text-zinc-400">Pricing</Link>
            <Link href="/terms" className="hover:text-zinc-400">Terms</Link>
            <Link href="/privacy" className="hover:text-zinc-400">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
