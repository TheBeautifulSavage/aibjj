import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ in Dallas: Find the Best Jiu-Jitsu Gyms & Training | AIBJJ',
  description: 'Looking for BJJ in Dallas, TX? Guide to finding the best jiu-jitsu gyms in the DFW area — what to look for, questions to ask, beginner tips. Supplement with AIBJJ\'s AI coach.',
  openGraph: {
    title: 'BJJ in Dallas: Best Jiu-Jitsu Gyms & Training',
    url: 'https://aibjj.com/bjj-dallas',
  },
}

export default function BJJDallasPage() {
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
          <p className="text-sm font-semibold uppercase tracking-widest text-red-500 mb-3">BJJ in Texas</p>
          <h1 className="text-4xl font-black text-white sm:text-5xl mb-6">BJJ in Dallas: Find the Best Jiu-Jitsu Gyms & Training</h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            The Dallas–Fort Worth metroplex is one of the fastest-growing BJJ markets in the United States. With 7+ million people in the metro area and a booming sports and fitness culture, DFW has developed a serious and competitive grappling scene.
          </p>
        </div>

        <div className="mb-10 p-6 rounded-xl bg-red-950/30 border border-red-900/40">
          <p className="font-semibold text-white mb-1">📱 Supplement Your Dallas Training with AIBJJ</p>
          <p className="text-zinc-400 text-sm mb-4">AI coach, technique library, training journal. Free to start — perfect between mat sessions.</p>
          <Link href="/auth/signup" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors">Try AI Coach Free →</Link>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">The Dallas BJJ Scene</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Dallas has been an important BJJ city for decades, with roots going back to the early days of the sport in Texas. The DFW area has produced a number of notable grapplers and has a robust competition circuit — the Texas Open (IBJJF) and Dallas-area local promotions give practitioners regular competition opportunities.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-4">
              The sprawling nature of DFW means gyms are distributed across Dallas, Fort Worth, Plano, Irving, Arlington, Frisco, and dozens of other suburbs. Each area has its own BJJ micro-community. Frisco and Plano in particular have seen significant growth as the north Dallas suburbs have expanded with young families.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Texas as a state has a strong wrestling culture (high school wrestling is significant here), which often produces athletic BJJ practitioners with solid wrestling bases. Many Dallas-area BJJ gyms incorporate wrestling heavily into their curriculum.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What to Look for in a Dallas BJJ Gym</h2>
            <div className="space-y-4">
              {[
                { title: 'Location in DFW', desc: "DFW traffic is real. A gym in Plano feels very different commuting from Fort Worth. Be honest about what part of the metro you actually live and work in when choosing." },
                { title: 'Instructor Credentials', desc: 'Verify belt rank and lineage. Texas has seen legitimate black belts and fraudulent ones — look for IBJJF-registered credentials and verifiable lineage.' },
                { title: 'Wrestling Integration', desc: 'Many DFW gyms have strong wrestling components. This is a plus for overall grappling development. Ask about the curriculum balance.' },
                { title: 'Competition Opportunities', desc: 'Dallas has a good local competition scene. If competing is a goal, find a gym that supports and actively participates in tournaments.' },
                { title: 'Price and Contract', desc: "DFW has gyms at every price point. Avoid annual contracts until you've trained there for 30+ days. Month-to-month options exist." },
              ].map((item) => (
                <div key={item.title} className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-5">
                  <h3 className="font-bold text-white mb-1 text-sm">✓ {item.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Beginner Tips for Dallas BJJ</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { tip: 'Trial multiple gyms', desc: "DFW has enough quality options that you should trial at least 2–3 gyms before committing. Each has its own culture and teaching style." },
                { tip: 'Tap early, learn faster', desc: "Tapping is how you learn — especially early on. There's no shame in it. Fight smart, survive, and learn from each exchange." },
                { tip: 'Supplement with digital learning', desc: "Between sessions, AIBJJ's AI coach and technique library help you review and build on what you learn at the gym." },
                { tip: 'Build fundamentals first', desc: "Dallas has plenty of advanced training. But foundations first — escape, posture, basic submissions — will serve you far longer than early specialization." },
              ].map((item) => (
                <div key={item.tip} className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                  <p className="font-semibold text-white mb-1 text-sm">💡 {item.tip}</p>
                  <p className="text-xs text-zinc-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="p-8 rounded-xl bg-zinc-900/60 border border-zinc-800 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Accelerate Your BJJ Learning</h2>
            <p className="text-zinc-400 mb-6 max-w-xl mx-auto">While you search for the right Dallas gym, start with AIBJJ&apos;s AI coach and 10,000+ technique library.</p>
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
