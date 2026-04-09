import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AIBJJ vs BJJ Fanatics: Which is Better for Your Training? | AIBJJ',
  description: 'Honest comparison of AIBJJ vs BJJ Fanatics. Fanatics is a video store. AIBJJ is a training platform. See the difference in features, pricing, and creator economics.',
  openGraph: {
    title: 'AIBJJ vs BJJ Fanatics: Honest Comparison',
    description: 'AIBJJ vs BJJ Fanatics — factual feature comparison. Fanatics has a larger catalog. AIBJJ has AI coaching, better creator economics, and a training ecosystem.',
    url: 'https://aibjj.com/aibjj-vs-bjj-fanatics',
  },
}

export default function AIBJJvsFanaticsPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <nav className="border-b border-zinc-800/60 bg-zinc-950/90 backdrop-blur-xl px-4 py-4 sticky top-0 z-50">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-tight"><span className="text-red-600">AI</span><span className="text-white">BJJ</span></Link>
          <div className="flex gap-3">
            <Link href="/auth/signin" className="text-sm text-zinc-400 hover:text-white px-4 py-2">Sign In</Link>
            <Link href="/auth/signup" className="text-sm bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Try AIBJJ Free</Link>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-500 mb-3">Platform Comparison</p>
          <h1 className="text-4xl font-black text-white sm:text-5xl mb-6">
            AIBJJ vs BJJ Fanatics: Which is Better for Your Training?
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            The honest answer: it depends what you&apos;re looking for. BJJ Fanatics and AIBJJ are fundamentally different products. 
            This comparison breaks down what each actually does so you can choose the right tool for your goals.
          </p>
        </div>

        <div className="mb-10 p-6 rounded-xl bg-red-950/30 border border-red-900/40">
          <p className="font-semibold text-white mb-1">🎯 The Core Difference</p>
          <p className="text-zinc-400 text-sm">BJJ Fanatics is a <strong className="text-white">video store</strong> — browse and buy instructionals. AIBJJ is a <strong className="text-white">training platform</strong> — AI coach, technique library, training journal, instructor marketplace, and more. They serve different needs.</p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What BJJ Fanatics Does Well</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              BJJ Fanatics has built a massive catalog of instructionals from some of the biggest names in BJJ — Gordon Ryan, John Danaher, Craig Jones, Bernardo Faria, and hundreds more. Their volume and brand roster are genuine strengths. If you want to buy an instructional from a world champion you&apos;ve followed for years, Fanatics likely has it.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              They run frequent sales (often 50–70% off) that make individual instructionals very affordable. Their catalog breadth is hard to match — they&apos;ve spent years signing exclusives with top-level instructors across every position and specialization.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What AIBJJ Does Differently</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              AIBJJ isn&apos;t trying to out-catalog Fanatics. The goal is different: building a complete training ecosystem around the BJJ student. That means:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'AI Coach', desc: "Ask questions about technique, get drilling sequences, build game plans. Fanatics has no equivalent — their content is watch-only." },
                { title: '10,000+ Technique Library', desc: "Searchable, categorized technique content that complements any instructional you're studying." },
                { title: 'Training Journal', desc: "Track every session — what you drilled, how you rolled, what to work on. Build your improvement history over time." },
                { title: 'Game Plan Builder', desc: "Structure your BJJ game — your A-game, transitions, backup plans. Think systematically about your jiu-jitsu." },
                { title: 'Creator Marketplace', desc: "Buy instructionals from emerging coaches who offer incredible instruction at better prices, with creators earning 85% (vs. 30–60% on Fanatics)." },
                { title: 'Integrated Learning', desc: "After watching an instructional, ask the AI coach questions about the techniques you just saw. No other platform offers this integration." },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                  <p className="font-semibold text-white mb-1 text-sm">✓ {item.title}</p>
                  <p className="text-xs text-zinc-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Feature Comparison</h2>
            <div className="overflow-hidden rounded-xl border border-zinc-800">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-800 bg-zinc-900">
                    <th className="px-5 py-4 text-left font-medium text-zinc-400">Feature</th>
                    <th className="px-5 py-4 text-center font-bold text-red-400">AIBJJ</th>
                    <th className="px-5 py-4 text-center font-medium text-zinc-500">BJJ Fanatics</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/50">
                  {[
                    ['AI coaching and Q&A', '✅ Yes', '❌ No'],
                    ['Technique library (searchable)', '✅ 10,000+', '❌ No'],
                    ['Training journal', '✅ Yes', '❌ No'],
                    ['Game plan builder', '✅ Yes', '❌ No'],
                    ['Instructional marketplace', '✅ Growing', '✅ Very large catalog'],
                    ['World champion instructionals', '✅ Growing', '✅ Extensive'],
                    ['Creator payout rate', '✅ 85%', '❌ 30–60%'],
                    ['Exclusivity required for creators', '❌ Never', '✅ Often'],
                    ['Monthly subscription option', '✅ $19.99/mo', '❌ Per-instructional only'],
                    ['Free trial available', '✅ Yes', '❌ No'],
                    ['Mobile learning experience', '✅ Optimized', '⚠️ Basic'],
                  ].map(([feat, aibjj, fanatics]) => (
                    <tr key={feat as string} className="bg-zinc-950/50">
                      <td className="px-5 py-3 font-medium text-zinc-300">{feat}</td>
                      <td className="px-5 py-3 text-center text-green-400 font-medium">{aibjj}</td>
                      <td className="px-5 py-3 text-center text-zinc-500">{fanatics}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Who Should Use Which?</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-xl border border-zinc-700 bg-zinc-900/50 p-6">
                <h3 className="font-bold text-white mb-3">Choose BJJ Fanatics if...</h3>
                <ul className="space-y-2">
                  {[
                    "You want a specific instructional from a big-name creator they carry exclusively",
                    "You're building a library of world champion content",
                    "You prefer buying individual instructionals over a subscription",
                    "You want the widest possible catalog selection",
                  ].map((item) => (
                    <li key={item} className="text-sm text-zinc-400 flex gap-2">
                      <span className="text-zinc-500 flex-shrink-0">→</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-red-800/50 bg-red-950/20 p-6">
                <h3 className="font-bold text-white mb-3">Choose AIBJJ if...</h3>
                <ul className="space-y-2">
                  {[
                    "You want an AI coach to help you apply what you learn",
                    "You want to track your training and progress over time",
                    "You're building your game plan systematically",
                    "You want a subscription that gives you ongoing learning tools",
                    "You're an instructor who wants to sell with 85% payout and no exclusivity",
                  ].map((item) => (
                    <li key={item} className="text-sm text-zinc-400 flex gap-2">
                      <span className="text-green-500 flex-shrink-0">✓</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-5 text-zinc-400">
              <strong className="text-white">The honest take:</strong> Many serious BJJ students use both. Fanatics for specific premium instructionals from big names. AIBJJ for the ongoing training tools, AI coaching, and emerging creator content. They&apos;re not really competing — they&apos;re different layers of the same training stack.
            </p>
          </section>

          <section className="p-8 rounded-xl bg-zinc-900/60 border border-zinc-800 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Try AIBJJ Free</h2>
            <p className="text-zinc-400 mb-6 max-w-xl mx-auto">AI coach, 10,000+ techniques, training journal. See what a real training platform feels like — free to start.</p>
            <Link href="/auth/signup" className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">Start Free →</Link>
          </section>
        </div>
      </div>

      <footer className="border-t border-zinc-800/60 bg-zinc-950 py-8 mt-8">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-600">
          <Link href="/" className="font-black text-base"><span className="text-red-600">AI</span><span className="text-white">BJJ</span></Link>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link href="/bjj-fanatics-alternative" className="hover:text-zinc-400">Fanatics Alternatives</Link>
            <Link href="/bjj-ai-coach" className="hover:text-zinc-400">AI Coach</Link>
            <Link href="/pricing" className="hover:text-zinc-400">Pricing</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
