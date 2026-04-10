import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ in Chicago: Find the Best Jiu-Jitsu Gyms & Training | AIBJJ',
  description: 'Looking for BJJ in Chicago? Guide to finding the best jiu-jitsu gyms in Chicago — what to look for, questions to ask, beginner tips. Supplement with AIBJJ\'s AI coach.',
  openGraph: {
    title: 'BJJ in Chicago: Best Jiu-Jitsu Gyms & Training',
    url: 'https://aibjj.com/bjj-chicago',
  },
}

export default function BJJChicagoPage() {
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
          <p className="text-sm font-semibold uppercase tracking-widest text-red-500 mb-3">BJJ in Illinois</p>
          <h1 className="text-4xl font-black text-white sm:text-5xl mb-6">BJJ in Chicago: Find the Best Jiu-Jitsu Gyms & Training</h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            Chicago has grown into one of the Midwest's premier BJJ cities — a large urban market with a serious grappling community, multiple world-class gyms, and a competitive scene that punches well above its weight.
          </p>
        </div>

        <div className="mb-10 p-6 rounded-xl bg-red-950/30 border border-red-900/40">
          <p className="font-semibold text-white mb-1">📱 Train with AIBJJ Between Sessions</p>
          <p className="text-zinc-400 text-sm mb-4">AI coach, technique library, training journal. Perfect for Chicago winters when getting to the gym is harder.</p>
          <Link href="/auth/signup" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors">Try AI Coach Free →</Link>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">The Chicago BJJ Scene</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Chicago's BJJ community has grown significantly over the past decade. The city benefits from a large population base (3M+ in the city, 9M+ metro area) that supports multiple high-quality academies across the North Side, South Side, and suburbs.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-4">
              The Midwest BJJ scene has produced notable grapplers and the competitive circuit is active — Illinois Open and Chicago-area IBJJF events draw competitors from across the region. Chicago-area gyms have produced competitors at the national level, and the city's wrestling heritage (Illinois is a serious wrestling state) often complements BJJ training here.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Chicago winters are a reality — expect that mat time may be harder to maintain from December through March. Many Chicago BJJ practitioners use online training tools to supplement during harsh weather, making the combination of in-person and digital learning particularly valuable here.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What to Look for in a Chicago BJJ Gym</h2>
            <div className="space-y-4">
              {[
                { title: 'Credentials and Lineage', desc: 'Standard requirement — verify belt rank. Chicago has had its share of fraudulent claims. IBJJF registered black belts with verifiable lineage are preferred.' },
                { title: 'Parking and Transit Access', desc: "Chicago is a transit city but parking can be brutal. Find a gym accessible by either the L train or with reasonable parking. Accessibility determines consistency." },
                { title: 'Winter Flexibility', desc: "Look for gyms with flexible attendance policies. Chicago winters may affect your ability to make every class. Find gyms with good makeup class policies." },
                { title: 'Beginner Program Structure', desc: 'Does the gym have structured beginner classes or do new students get thrown into the general population? Dedicated beginner programs produce better long-term retention.' },
                { title: 'Open Mat Access', desc: 'Open mat is where real improvement happens. Ask about open mat frequency and whether it\'s included in membership.' },
              ].map((item) => (
                <div key={item.title} className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-5">
                  <h3 className="font-bold text-white mb-1 text-sm">✓ {item.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Beginner Tips for Chicago BJJ</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { tip: 'Plan for winter training', desc: 'Have a backup plan for the coldest months — online learning tools, home drills, or a gym close enough to walk to.' },
                { tip: 'Budget realistically', desc: "Chicago gyms range from $100–$200/month. Budget for a gi ($80–$150) and gear on top of membership costs." },
                { tip: 'Take your time finding the right gym', desc: "Chicago has enough quality options that you don't need to settle. Trial multiple gyms before committing." },
                { tip: 'Use AIBJJ to stay sharp', desc: "Between harsh weather days and schedule conflicts, AIBJJ's AI coach keeps your learning moving when mat time is limited." },
              ].map((item) => (
                <div key={item.tip} className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                  <p className="font-semibold text-white mb-1 text-sm">💡 {item.tip}</p>
                  <p className="text-xs text-zinc-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="p-8 rounded-xl bg-zinc-900/60 border border-zinc-800 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Learn BJJ On and Off the Mat</h2>
            <p className="text-zinc-400 mb-6 max-w-xl mx-auto">AIBJJ's AI coach, technique library, and training journal keep your progress going — especially during those Chicago winters.</p>
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
