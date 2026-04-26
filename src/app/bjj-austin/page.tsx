import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ in Austin: Find the Best Jiu-Jitsu Gyms & Training | AIBJJ',
  description: 'Looking for BJJ in Austin, TX? Guide to finding the best jiu-jitsu gyms in Austin — what to look for, questions to ask, beginner tips. Supplement with AIBJJ\'s AI coach.',
  openGraph: {
    title: 'BJJ in Austin: Best Jiu-Jitsu Gyms & Training',
    url: 'https://aibjj.com/bjj-austin',
  },
}

export default function BJJAustinPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
<div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-500 mb-3">BJJ in Texas</p>
          <h1 className="text-4xl font-black text-white sm:text-5xl mb-6">BJJ in Austin: Find the Best Jiu-Jitsu Gyms & Training</h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            Austin has one of the most exciting BJJ scenes in Texas — a city that has grown dramatically over the past decade, attracting both high-level coaches and an influx of young, athletic practitioners who take their training seriously.
          </p>
        </div>

        <div className="mb-10 p-6 rounded-xl bg-red-950/30 border border-red-900/40">
          <p className="font-semibold text-white mb-1">📱 Train with AIBJJ Between Austin Sessions</p>
          <p className="text-zinc-400 text-sm mb-4">AI coach, technique library, training journal. Free to start — accelerate your learning on and off the mat.</p>
          <Link href="/auth/signup" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors">Try AI Coach Free →</Link>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">The Austin BJJ Scene</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Austin's BJJ community has benefited enormously from the city's population explosion and its connection to the broader Texas and national competition scene. Austin is also deeply intertwined with the MMA world — the Ultimate Fighting Championship (UFC) relocated its performance institute infrastructure to the area, and the city has attracted fighters and coaches who have elevated the training quality.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Joe Rogan, one of BJJ's most prominent advocates and a black belt himself, relocated to Austin — and his presence has been a net positive for the local BJJ culture and awareness. Austin has several excellent academies with high-level black belt instruction across different lineages.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              The city's tech-heavy demographic (similar to Seattle) means Austin gyms attract well-educated, disciplined practitioners who invest seriously in their training. Competition culture is strong — Austin-area competitors regularly attend Texas Opens and sub-only events throughout the state.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What to Look for in an Austin BJJ Gym</h2>
            <div className="space-y-4">
              {[
                { title: 'Instructor Credentials', desc: "Austin's BJJ scene has grown rapidly — some gyms have strong credentials, others are newer and unproven. Verify lineage and IBJJF registration for any black belt instructor." },
                { title: 'Location in Austin', desc: "Austin traffic is increasingly challenging. A gym in South Austin, North Loop, or East Austin can feel very different depending on where you live and work. Be realistic about commute." },
                { title: 'Culture and Atmosphere', desc: "Austin gyms vary wildly in culture — from intensely competition-focused to very recreational. Visit in person during a class to get a feel for the vibe before committing." },
                { title: 'Heat Management', desc: "Austin summers are hot — not quite Houston or Miami, but significant. Ask about AC and ventilation, especially for summer training." },
                { title: 'No-Gi Options', desc: "Austin has a strong no-gi culture. If you want to train no-gi specifically, look for gyms with dedicated no-gi programs rather than just adding shorts to gi classes." },
              ].map((item) => (
                <div key={item.title} className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-5">
                  <h3 className="font-bold text-white mb-1 text-sm">✓ {item.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Beginner Tips for Austin BJJ</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { tip: 'Trial before committing', desc: "Austin has enough quality gyms that you should try at least 2–3 before signing a contract. Each has a different culture and teaching approach." },
                { tip: 'Embrace the competition culture', desc: "Austin has a strong competition culture. Consider signing up for a local tournament early — competing, even as a beginner, accelerates growth dramatically." },
                { tip: 'Start no-gi if undecided', desc: "Austin's culture skews toward no-gi. Starting no-gi requires less gear investment and lets you assess the sport before buying a gi." },
                { tip: 'Use AIBJJ to accelerate', desc: "AIBJJ's AI coach and technique library help you review what you learned and prepare for the next session — critical in Austin's fast-paced training culture." },
              ].map((item) => (
                <div key={item.tip} className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                  <p className="font-semibold text-white mb-1 text-sm">💡 {item.tip}</p>
                  <p className="text-xs text-zinc-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="p-8 rounded-xl bg-zinc-900/60 border border-zinc-800 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Start Your Austin BJJ Journey</h2>
            <p className="text-zinc-400 mb-6 max-w-xl mx-auto">While you search for the right Austin gym, start building your BJJ foundation with AIBJJ's AI coach and 10,000+ technique library.</p>
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
