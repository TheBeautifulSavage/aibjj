import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ in Denver: Find the Best Jiu-Jitsu Gyms & Training | AIBJJ',
  description: 'Looking for BJJ in Denver, CO? Guide to finding the best jiu-jitsu gyms in Denver — what to look for, questions to ask, beginner tips. Supplement with AIBJJ\'s AI coach.',
  openGraph: {
    title: 'BJJ in Denver: Best Jiu-Jitsu Gyms & Training',
    url: 'https://aibjj.com/bjj-denver',
  },
}

export default function BJJDenverPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
<div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-500 mb-3">BJJ in Colorado</p>
          <h1 className="text-4xl font-black text-white sm:text-5xl mb-6">BJJ in Denver: Find the Best Jiu-Jitsu Gyms & Training</h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            Denver has developed one of the most passionate BJJ communities in the Mountain West. The city's outdoor-oriented, fitness-focused culture maps well onto the discipline and physicality of jiu-jitsu — and the Denver-Boulder corridor has serious grappling depth.
          </p>
        </div>

        <div className="mb-10 p-6 rounded-xl bg-red-950/30 border border-red-900/40">
          <p className="font-semibold text-white mb-1">📱 Supplement Your Denver Training with AIBJJ</p>
          <p className="text-zinc-400 text-sm mb-4">AI coach, technique library, training journal. Free to start — perfect for snowy Colorado days off the mat.</p>
          <Link href="/auth/signup" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors">Try AI Coach Free →</Link>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">The Denver BJJ Scene</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Denver's BJJ scene has been growing rapidly alongside the city's overall population boom. Colorado's strong wrestling heritage — the state has produced numerous NCAA champions — has created a base of athletically gifted grapplers who transition well to BJJ.
            </p>
            <p className="text-zincins-400 leading-relaxed mb-4">
              The Denver-Boulder corridor has a concentration of high-quality gyms. Boulder in particular has an interesting scene driven by the university community and outdoor athlete culture. Denver proper has multiple strong academies across the metro — RiNo, Capitol Hill, and the suburbs all have options.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              The altitude at 5,280 feet (the Mile High City) is a real factor — training at altitude is harder cardiovascularly. New practitioners coming from sea level need 2–3 weeks to acclimate. Colorado athletes who train regularly at altitude often find they have a significant cardio advantage at sea-level competitions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What to Look for in a Denver BJJ Gym</h2>
            <div className="space-y-4">
              {[
                { title: 'Wrestling Integration', desc: "Colorado's wrestling culture means many Denver gyms have strong wrestling components. This is a significant advantage — if your gym has wrestling resources, use them." },
                { title: 'Altitude Consideration', desc: "If you're new to Denver, give yourself time to acclimate before judging your cardio. It's not you — it's the altitude. Most gyms here understand this." },
                { title: 'Credentials and Lineage', desc: 'Standard requirement — verify belt rank and lineage. Colorado has legitimate high-level coaches and some fraudulent ones. Verify.' },
                { title: 'Location in Metro', desc: 'Denver has traffic issues, especially I-25 and I-70 corridors. Consider your typical commute route when selecting a gym location.' },
                { title: 'Competition Culture', desc: 'Colorado has an active competition scene. Denver metro hosts regional events and is within driving distance of major IBJJF events in nearby states.' },
              ].map((item) => (
                <div key={item.title} className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-5">
                  <h3 className="font-bold text-white mb-1 text-sm">✓ {item.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Beginner Tips for Denver BJJ</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { tip: 'Expect altitude adjustment', desc: "Your first few weeks at altitude will feel harder than expected. This is normal — your body is adapting. Stick with it; your cardio will come back stronger." },
                { tip: 'Hydrate more than usual', desc: "Denver's dry mountain air accelerates dehydration. Drink significantly more water than you would at sea level, especially during and after training." },
                { tip: 'Use snowy days productively', desc: "Colorado winters can complicate gym access. AIBJJ's AI coach and technique library keep your learning moving when the weather doesn't cooperate." },
                { tip: 'Embrace the wrestling culture', desc: "Colorado's wrestling heritage can make training physically demanding. Embrace it — wrestlers often make excellent BJJ practitioners with time." },
              ].map((item) => (
                <div key={item.tip} className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                  <p className="font-semibold text-white mb-1 text-sm">💡 {item.tip}</p>
                  <p className="text-xs text-zinc-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="p-8 rounded-xl bg-zinc-900/60 border border-zinc-800 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Train Smarter in the Mile High City</h2>
            <p className="text-zinc-400 mb-6 max-w-xl mx-auto">AIBJJ's AI coach, technique library, and training journal supplement your Denver gym training — on the mat and off.</p>
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
