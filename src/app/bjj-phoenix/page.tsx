import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ in Phoenix: Find the Best Jiu-Jitsu Gyms & Training | AIBJJ',
  description: 'Looking for BJJ in Phoenix, AZ? Guide to finding the best jiu-jitsu gyms in Phoenix — what to look for, questions to ask, beginner tips. Supplement with AIBJJ\'s AI coach.',
  openGraph: {
    title: 'BJJ in Phoenix: Best Jiu-Jitsu Gyms & Training',
    url: 'https://aibjj.com/bjj-phoenix',
  },
}

export default function BJJPhoenixPage() {
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
          <p className="text-sm font-semibold uppercase tracking-widest text-red-500 mb-3">BJJ in Arizona</p>
          <h1 className="text-4xl font-black text-white sm:text-5xl mb-6">BJJ in Phoenix: Find the Best Jiu-Jitsu Gyms & Training</h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            Phoenix and the greater Scottsdale/Tempe/Mesa area has developed into a serious BJJ market. Arizona&apos;s warm climate, growing population, and MMA culture have made the Valley of the Sun a strong hub for grappling.
          </p>
        </div>

        <div className="mb-10 p-6 rounded-xl bg-red-950/30 border border-red-900/40">
          <p className="font-semibold text-white mb-1">📱 Supplement Your Phoenix Training with AIBJJ</p>
          <p className="text-zinc-400 text-sm mb-4">AI coach, technique library, training journal. Learn fundamentals between sessions — free to start.</p>
          <Link href="/auth/signup" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors">Try AI Coach Free →</Link>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">The Phoenix BJJ Scene</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Arizona has been a significant MMA state since the early UFC days, and BJJ grew alongside that culture. Phoenix is home to several notable academies — including the original home base of Ryan Bader and other notable fighters who trained in the area.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-4">
              The Valley&apos;s spread-out geography means you&apos;ll find gyms across Phoenix, Scottsdale, Tempe, Mesa, Chandler, and Gilbert — different neighborhoods have different options. Scottsdale tends to have higher-end facilities, while Tempe (ASU area) often has more value-priced options with a younger competitive crowd.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Phoenix summers are brutal — training in a non-air-conditioned gym in July is genuinely dangerous. AC is not optional here. The flip side: Phoenix winters are mild, making it a great year-round training city outside of summer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What to Look for in a Phoenix BJJ Gym</h2>
            <div className="space-y-4">
              {[
                { title: 'Air Conditioning', desc: 'This is non-negotiable in Phoenix. Training in summer heat without AC is a health risk. Confirm the gym has adequate cooling before committing.' },
                { title: 'Location in the Valley', desc: "Phoenix metro is massive. Driving 30 minutes daily to a gym is unsustainable. Find something realistic for your home-to-work commute." },
                { title: 'MMA Integration', desc: "Arizona has a strong MMA culture. Some Phoenix gyms are primarily MMA gyms that offer BJJ as part of the curriculum. Others are pure BJJ academies. Know which you want." },
                { title: 'Evening Class Availability', desc: 'Phoenix is a car-commute city, so expect some traffic evening commutes. Look for gyms with multiple evening class options in case one doesn\'t work.' },
                { title: 'Trial Policy', desc: 'Phoenix has enough gyms that you should be able to trial 2–3 before deciding. Any reputable academy will offer this.' },
              ].map((item) => (
                <div key={item.title} className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-5">
                  <h3 className="font-bold text-white mb-1 text-sm">✓ {item.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Beginner Tips for Phoenix BJJ</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { tip: 'Train early in summer', desc: 'Morning classes are significantly more bearable in Phoenix summers. If you can adjust your schedule to morning sessions from May–September, do it.' },
                { tip: 'Hydrate constantly', desc: "Arizona is desert climate — you're dehydrated before you even start training. Drink water proactively throughout the day." },
                { tip: 'Focus on fundamentals', desc: "Good foundations will serve you forever. Don't rush to advanced techniques before your basics (escape, posture, guard) are solid." },
                { tip: 'Supplement with AIBJJ', desc: "On days when Phoenix heat keeps you from training, AIBJJ's AI coach keeps your mental game sharp and your knowledge growing." },
              ].map((item) => (
                <div key={item.tip} className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                  <p className="font-semibold text-white mb-1 text-sm">💡 {item.tip}</p>
                  <p className="text-xs text-zinc-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="p-8 rounded-xl bg-zinc-900/60 border border-zinc-800 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Start Your BJJ Journey Today</h2>
            <p className="text-zinc-400 mb-6 max-w-xl mx-auto">While you find the right Phoenix gym, start with AIBJJ&apos;s AI coach and 10,000+ technique library.</p>
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
