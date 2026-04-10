import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ in Seattle: Find the Best Jiu-Jitsu Gyms & Training | AIBJJ',
  description: 'Looking for BJJ in Seattle, WA? Guide to finding the best jiu-jitsu gyms in Seattle — what to look for, questions to ask, beginner tips. Supplement with AIBJJ\'s AI coach.',
  openGraph: {
    title: 'BJJ in Seattle: Best Jiu-Jitsu Gyms & Training',
    url: 'https://aibjj.com/bjj-seattle',
  },
}

export default function BJJSeattlePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <nav className="border-b border-zinc-800/60 bg-zinc-950/90 backdrop-blur-xl px-4 py-4 sticky top-0 z-50">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-tight"><span className="text-red-600">AI</span><span className="text-white">BJJ</span></Link>
          <Link href="/auth/signup" className="text-sm bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Start Training</Link>
        </div>
      </nav>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-500 mb-3">BJJ in Washington State</p>
          <h1 className="text-4xl font-black text-white sm:text-5xl mb-6">BJJ in Seattle: Find the Best Jiu-Jitsu Gyms & Training</h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            Seattle has emerged as one of the Pacific Northwest's premier BJJ cities. The tech-heavy, fitness-oriented culture of the Puget Sound region has created a strong market for high-quality grappling instruction.
          </p>
        </div>

        <div className="mb-10 p-6 rounded-xl bg-red-950/30 border border-red-900/40">
          <p className="font-semibold text-white mb-1">📱 Train with AIBJJ Between Seattle Sessions</p>
          <p className="text-zinc-400 text-sm mb-4">AI coach, technique library, training journal. Great for rainy Seattle days when getting to the gym is harder.</p>
          <Link href="/auth/signup" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors">Try AI Coach Free →</Link>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">The Seattle BJJ Scene</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Seattle's BJJ community has grown substantially over the past decade, fueled by the city's tech industry workforce — well-paid professionals who invest seriously in training. The result is a market that supports high-quality instruction at premium price points, and gyms have responded by bringing in excellent coaches.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-4">
              The Pacific Northwest competition scene is active. Seattle-area athletes compete regularly at PNW regional events and travel to IBJJF events in Portland, San Jose, and beyond. Seattle has produced some notable grapplers and the training quality at top gyms is genuinely high.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Seattle's rain is a factor for consistency — gray skies and wet commutes can make it harder to maintain motivation for evening classes. The gyms that thrive here tend to build strong communities with dedicated training cultures that keep people coming back even on dark January evenings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What to Look for in a Seattle BJJ Gym</h2>
            <div className="space-y-4">
              {[
                { title: 'Community Culture', desc: "Seattle's tech-heavy demographic means gyms with strong community tend to have high retention. Find a gym where people actually enjoy being there — you'll train more consistently." },
                { title: 'Location and Commute', desc: 'Seattle traffic is brutal. Lake Washington and Puget Sound create geographic constraints. A gym on the wrong side of the water might as well be in another city during commute hours.' },
                { title: 'Instructor Credentials', desc: 'Standard requirement everywhere — verify belt rank and lineage. PNW has had some belt fraud cases. Look for verifiable credentials.' },
                { title: 'Price Point', desc: "Seattle cost of living is high, and gym prices reflect this. Expect $120–$200/month at quality academies. This is normal for the market." },
                { title: 'Evening and Weekend Scheduling', desc: 'Seattle tech workers often have irregular hours. Look for gyms with flexible scheduling — multiple morning and evening options, plus weekend open mats.' },
              ].map((item) => (
                <div key={item.title} className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-5">
                  <h3 className="font-bold text-white mb-1 text-sm">✓ {item.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Beginner Tips for Seattle BJJ</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { tip: 'Use winter for fundamentals', desc: "Seattle's long gray winters are actually great for indoor training. Use the indoor season to build a solid foundation of fundamentals." },
                { tip: 'Find a gym with good culture', desc: "In Seattle especially, culture matters for retention. Train in a place where people are supportive — you'll show up more consistently." },
                { tip: 'Budget for quality gear', desc: "Seattle is not a bargain-hunting city. Budget for a quality gi ($100–$150), rashguards, and proper protective gear from the start." },
                { tip: 'Supplement with AIBJJ', desc: "On rainy days when motivation to drive to the gym is low, AIBJJ's AI coach and technique library keep your learning progressing." },
              ].map((item) => (
                <div key={item.tip} className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                  <p className="font-semibold text-white mb-1 text-sm">💡 {item.tip}</p>
                  <p className="text-xs text-zinc-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="p-8 rounded-xl bg-zinc-900/60 border border-zinc-800 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Train Smarter in Seattle</h2>
            <p className="text-zinc-400 mb-6 max-w-xl mx-auto">AIBJJ's AI coach, technique library, and training journal supplement your in-person training — even on rainy Seattle days.</p>
            <Link href="/auth/signup" className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">Start with AIBJJ Free →</Link>
          </section>
        </div>
      </div>

      <footer className="border-t border-zinc-800/60 bg-zinc-950 py-8 mt-8">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-600">
          <Link href="/" className="font-black text-base"><span className="text-red-600">AI</span><span className="text-white">BJJ</span></Link>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link href="/bjj-ai-coach" className="hover:text-zinc-400">AI Coach</Link>
            <Link href="/bjj-techniques" className="hover:text-zinc-400">Techniques</Link>
            <Link href="/pricing" className="hover:text-zinc-400">Pricing</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
