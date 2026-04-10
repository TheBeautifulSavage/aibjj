import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ in Houston: Find the Best Jiu-Jitsu Gyms & Training | AIBJJ',
  description: 'Looking for BJJ in Houston, TX? Guide to finding the best jiu-jitsu gyms in Houston — what to look for, questions to ask, beginner tips. Supplement with AIBJJ\'s AI coach.',
  openGraph: {
    title: 'BJJ in Houston: Best Jiu-Jitsu Gyms & Training',
    url: 'https://aibjj.com/bjj-houston',
  },
}

export default function BJJHoustonPage() {
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
          <h1 className="text-4xl font-black text-white sm:text-5xl mb-6">BJJ in Houston: Find the Best Jiu-Jitsu Gyms & Training</h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            Houston is one of Texas's largest BJJ markets — a city of 2.3 million people with a robust grappling community, active competition scene, and gyms ranging from traditional Brazilian academies to cutting-edge no-gi focused facilities.
          </p>
        </div>

        <div className="mb-10 p-6 rounded-xl bg-red-950/30 border border-red-900/40">
          <p className="font-semibold text-white mb-1">📱 Supplement Your Houston Training with AIBJJ</p>
          <p className="text-zinc-400 text-sm mb-4">AI coach, technique library, training journal. Learn fundamentals between mat sessions — free to start.</p>
          <Link href="/auth/signup" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors">Try AI Coach Free →</Link>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">The Houston BJJ Scene</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Houston has long been a significant BJJ city, with deep roots in both traditional gi BJJ and the MMA crossover that flourished in Texas during the sport's growth. The city's diverse population — including a large Latino community with cultural ties to martial arts — has helped BJJ grow rapidly here.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Houston is home to several well-known academies and has produced notable competitors over the years. The Texas competition circuit (IBJJF Texas Open and various local promotions) gives Houston practitioners regular competition opportunities without traveling to the coasts.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Like Miami, Houston's heat and humidity are factors to consider. No-gi training is popular year-round, and many gyms offer both gi and no-gi programs. Houston also has a strong MMA scene — many gyms offer integrated curricula.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What to Look for in a Houston BJJ Gym</h2>
            <div className="space-y-4">
              {[
                { title: 'Instructor Credentials', desc: 'Verify belt rank and lineage. Texas has had some well-publicized belt fraud cases. IBJJF registration and verifiable lineage are important.' },
                { title: 'Location and Commute', desc: "Houston's spread-out geography means commute matters enormously. A gym 30 minutes away can easily become 60 during rush hour. Find something near your home or work route." },
                { title: 'Class Size and Mat Time', desc: 'Some Houston gyms have grown large. Ask about average class sizes — you want actual drilling and sparring time, not watching demos in large groups.' },
                { title: 'Gi vs. No-Gi Focus', desc: 'Decide what your primary goal is. Many Houston gyms offer both, but some lean heavily one direction. Find one that matches your interests.' },
                { title: 'Price and Contract Terms', desc: 'Houston has gyms at every price point. Month-to-month memberships exist — avoid long contracts at a new gym until you know it\'s the right fit.' },
              ].map((item) => (
                <div key={item.title} className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-5">
                  <h3 className="font-bold text-white mb-1 text-sm">✓ {item.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Beginner Tips for Houston BJJ</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { tip: 'Take a free trial first', desc: 'Never sign a contract without a trial class. Houston has enough gym options that you should shop around before committing.' },
                { tip: 'Manage the heat', desc: 'Houston summers are intense. Stay hydrated, consider electrolytes, and give yourself time to acclimate to the physical demand of training in heat.' },
                { tip: 'Build fundamentals first', desc: "Escapes, guard retention, basic positions. These fundamentals will serve you forever. Don't chase YouTube techniques before your basics are solid." },
                { tip: 'Use AIBJJ to accelerate', desc: "AIBJJ's AI coach helps you review what you learned on the mat and prepare for next session. Dramatically speeds up the learning curve." },
              ].map((item) => (
                <div key={item.tip} className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                  <p className="font-semibold text-white mb-1 text-sm">💡 {item.tip}</p>
                  <p className="text-xs text-zinc-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="p-8 rounded-xl bg-zinc-900/60 border border-zinc-800 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Start Learning BJJ Today</h2>
            <p className="text-zinc-400 mb-6 max-w-xl mx-auto">While you search for the right Houston gym, start building your BJJ foundation with AIBJJ's AI coach and 10,000+ technique library.</p>
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
