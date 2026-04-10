import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ in New York City: Find the Best Jiu-Jitsu Gyms & Training | AIBJJ',
  description: 'Looking for BJJ in New York City? Guide to finding the best jiu-jitsu gyms in NYC — what to look for, questions to ask, beginner tips. Supplement with AIBJJ\'s AI coach.',
  openGraph: {
    title: 'BJJ in New York City: Best Jiu-Jitsu Gyms & Training',
    url: 'https://aibjj.com/bjj-new-york',
  },
}

export default function BJJNewYorkPage() {
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
          <p className="text-sm font-semibold uppercase tracking-widest text-red-500 mb-3">BJJ in New York</p>
          <h1 className="text-4xl font-black text-white sm:text-5xl mb-6">BJJ in New York City: Find the Best Jiu-Jitsu Gyms & Training</h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            New York City has one of the most competitive and diverse BJJ scenes in the world. From Manhattan to Brooklyn to Queens, the city is packed with world-class training options at every price point and skill level.
          </p>
        </div>

        <div className="mb-10 p-6 rounded-xl bg-red-950/30 border border-red-900/40">
          <p className="font-semibold text-white mb-1">📱 Train Between Sessions with AIBJJ</p>
          <p className="text-zinc-400 text-sm mb-4">AI coach, technique library, training journal. Free to start — perfect for busy New Yorkers who want to learn between mat sessions.</p>
          <Link href="/auth/signup" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors">Try AI Coach Free →</Link>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">The NYC BJJ Scene</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              New York has been a BJJ hotbed since the 1990s. The city is home to Renzo Gracie Academy — one of the most famous BJJ gyms in the world — which has produced a who's who of champions and notable practitioners including John Danaher (who developed the Death Squad/New Wave system there), Georges St-Pierre, and numerous UFC fighters.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-4">
              John Danaher spent years at Renzo's developing the leg lock and back attack systems that revolutionized modern no-gi grappling. The "Danaher Death Squad" — Gordon Ryan, Garry Tonon, Eddie Cummings — trained in NYC basements and emerged as the most dominant submission grappling team in history.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Beyond Renzo's, NYC has dozens of high-quality gyms across every borough. The competition scene is active — the IBJJF hosts events at the Javits Center, and smaller local promotions run regularly in Brooklyn and Queens.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">NYC-Specific Considerations</h2>
            <div className="space-y-4">
              {[
                { title: 'Price vs. Quality', desc: 'NYC gyms are expensive — expect $150–$250/month at top schools. This is real money, but the instruction quality at the best gyms justifies it. Cheaper options exist in outer boroughs.' },
                { title: 'Space and Mat Size', desc: 'NYC real estate is tight. Some excellent gyms have small mats, which can mean crowded classes. Ask about class sizes and open mat availability.' },
                { title: 'Subway Access', desc: 'Your gym choice should be near a subway line you actually use. A great gym you can\'t get to easily will result in missed sessions.' },
                { title: 'Trial Classes', desc: 'Every reputable NYC gym should offer at least one free trial class. Given the price point, take trials at multiple gyms before committing.' },
                { title: 'No-Gi vs Gi Focus', desc: 'NYC has a particularly strong no-gi culture, influenced by the submission grappling scene that developed there. Many top NYC gyms have robust no-gi programs.' },
              ].map((item) => (
                <div key={item.title} className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-5">
                  <h3 className="font-bold text-white mb-1 text-sm">✓ {item.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Beginner Tips for NYC BJJ</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { tip: 'Go month-to-month first', desc: 'With NYC prices, never sign an annual contract before you know the gym is right for you. Most reputable gyms offer month-to-month.' },
                { tip: 'Budget for gi and gear', desc: 'A good gi costs $80–$150. Add a rashguard, shorts, and mouthguard. Factor these into your budget when joining.' },
                { tip: 'Take advantage of density', desc: "NYC's density means you can often find open mat sessions and seminars within walking distance. Supplement your home gym with these opportunities." },
                { tip: 'Use AIBJJ between sessions', desc: "NYC gyms can get expensive. Maximize every mat session by using AIBJJ's AI coach to review what you learned and prepare for next class." },
              ].map((item) => (
                <div key={item.tip} className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                  <p className="font-semibold text-white mb-1 text-sm">💡 {item.tip}</p>
                  <p className="text-xs text-zinc-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="p-8 rounded-xl bg-zinc-900/60 border border-zinc-800 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Learn BJJ Fundamentals While You Search</h2>
            <p className="text-zinc-400 mb-6 max-w-xl mx-auto">AIBJJ's AI coach, 10,000+ technique library, and training journal help you accelerate your learning — on and off the mat.</p>
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
