import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AIBJJ vs FloGrappling: Different Products for Different Needs | AIBJJ',
  description: 'Honest comparison of AIBJJ vs FloGrappling. FloGrappling = watch live events. AIBJJ = train and improve. They actually complement each other. See how.',
  openGraph: {
    title: 'AIBJJ vs FloGrappling: Honest Comparison',
    url: 'https://aibjj.com/aibjj-vs-flograppling',
  },
}

export default function AIBJJvsFloGrapplingPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
<div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-500 mb-3">Platform Comparison</p>
          <h1 className="text-4xl font-black text-white sm:text-5xl mb-6">
            AIBJJ vs FloGrappling: Different Products for Different Needs
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            If you're comparing AIBJJ and FloGrappling, you might be solving two different problems without realizing it. 
            These platforms serve fundamentally different purposes — and most serious BJJ practitioners actually benefit from having both.
          </p>
        </div>

        <div className="mb-10 p-6 rounded-xl bg-zinc-800/40 border border-zinc-700">
          <p className="font-semibold text-white mb-2">🎯 The Short Version</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-3 rounded-lg bg-blue-950/30 border border-blue-800/30">
              <p className="text-sm font-bold text-blue-300 mb-1">FloGrappling</p>
              <p className="text-xs text-zinc-400">Live event streaming. Watch the best grapplers in the world compete at ADCC, WNO, EBI, and more. Entertainment and inspiration.</p>
            </div>
            <div className="p-3 rounded-lg bg-red-950/30 border border-red-800/30">
              <p className="text-sm font-bold text-red-300 mb-1">AIBJJ</p>
              <p className="text-xs text-zinc-400">Training platform. AI coach, technique library, training journal, instructionals. Actively improve your own jiu-jitsu.</p>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What FloGrappling Does</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              FloGrappling is the premier streaming service for grappling events. They carry ADCC, Who's Number One (WNO), Eddie Bravo Invitational, Fight to Win, and dozens of other top-level competition events live and on-demand.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-4">
              If you want to watch Gordon Ryan vs. Kade Ruotolo live, you need FloGrappling. If you want to watch ADCC Trials or the absolute bracket at a major IBJJF event, you need FloGrappling. They own the live event streaming market for grappling in a way that no competitor comes close to matching.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              What FloGrappling is not: a training tool. You can watch elite grapplers and absorb technique by observation, but there's no structured curriculum, no AI coach, no training journal, and no instructional series built around helping you improve. Their content is competition footage, not instruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What AIBJJ Does</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              AIBJJ is built to help you actively improve. The AI coach answers technique questions, builds drilling sequences, and helps you construct your game plan. The 10,000+ technique library gives you searchable, categorized instructional content. The training journal tracks your sessions and progress.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              AIBJJ also has a creator marketplace where coaches sell instructionals — more structured than competition footage, with step-by-step teaching specifically designed to improve your jiu-jitsu. What AIBJJ is not: live event streaming. We don't carry competition broadcasts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Feature Comparison</h2>
            <div className="overflow-hidden rounded-xl border border-zinc-800">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-800 bg-zinc-900">
                    <th className="px-5 py-4 text-left font-medium text-zinc-400">Feature</th>
                    <th className="px-5 py-4 text-center font-bold text-red-400">AIBJJ</th>
                    <th className="px-5 py-4 text-center font-medium text-blue-400">FloGrappling</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/50">
                  {[
                    ['Live event streaming', '❌ No', '✅ Primary product'],
                    ['ADCC / WNO access', '❌ No', '✅ Yes'],
                    ['AI coaching and Q&A', '✅ Yes', '❌ No'],
                    ['Instructional courses', '✅ Yes', '❌ Limited'],
                    ['Training journal', '✅ Yes', '❌ No'],
                    ['Technique library', '✅ 10,000+', '❌ No'],
                    ['Game plan builder', '✅ Yes', '❌ No'],
                    ['Creator marketplace', '✅ 85% payout', '❌ No'],
                    ['Price', '✅ $19.99/mo', '~$12.99/mo'],
                  ].map(([feat, aibjj, flo]) => (
                    <tr key={feat as string} className="bg-zinc-950/50">
                      <td className="px-5 py-3 font-medium text-zinc-300">{feat}</td>
                      <td className="px-5 py-3 text-center text-green-400 font-medium">{aibjj}</td>
                      <td className="px-5 py-3 text-center text-zinc-400">{flo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">The Case for Having Both</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Serious BJJ practitioners often have both — and use them for completely different purposes:
            </p>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
              <p className="text-zinc-300 leading-relaxed mb-3">
                <strong className="text-white">FloGrappling</strong> for event nights — when ADCC or WNO is live, you watch it like a sports fan. You observe elite technique, get inspired by competition, stay connected to the sport at the highest level.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                <strong className="text-white">AIBJJ</strong> for training days — when you want to actively improve your jiu-jitsu. Ask the AI coach about the heel hook system you saw Gordon Ryan use. Build your own back attack game plan. Log your training session. Study technique breakdowns.
              </p>
            </div>
            <p className="mt-4 text-zinc-400">
              Combined, they cost under $35/month — less than a single instructional from most platforms. Most serious practitioners would find that combination more valuable than either platform alone.
            </p>
          </section>

          <section className="p-8 rounded-xl bg-zinc-900/60 border border-zinc-800 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Try AIBJJ Free</h2>
            <p className="text-zinc-400 mb-6 max-w-xl mx-auto">AI coach, 10,000+ techniques, training journal, instructional marketplace. Start free — no credit card required.</p>
            <Link href="/auth/signup" className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">Start Free →</Link>
          </section>
        </div>
      </div>

      <footer className="border-t border-zinc-800/60 bg-zinc-950 py-8 mt-8">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-600">
          <Link href="/" className="font-black text-base"><span className="text-red-600">AI</span><span className="text-white">BJJ</span></Link>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link href="/aibjj-vs-bjj-fanatics" className="hover:text-zinc-400">vs Fanatics</Link>
            <Link href="/bjj-fanatics-alternative" className="hover:text-zinc-400">Fanatics Alternatives</Link>
            <Link href="/pricing" className="hover:text-zinc-400">Pricing</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
