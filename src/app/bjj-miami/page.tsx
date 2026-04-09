import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ in Miami: Find the Best Jiu-Jitsu Gyms & Training | AIBJJ',
  description: 'Looking for BJJ in Miami? Guide to finding the best jiu-jitsu gyms in South Florida — what to look for, questions to ask, beginner tips. Supplement with AIBJJ\'s AI coach.',
  openGraph: {
    title: 'BJJ in Miami: Best Jiu-Jitsu Gyms & Training',
    url: 'https://aibjj.com/bjj-miami',
  },
}

export default function BJJMiamiPage() {
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
          <p className="text-sm font-semibold uppercase tracking-widest text-red-500 mb-3">BJJ in Florida</p>
          <h1 className="text-4xl font-black text-white sm:text-5xl mb-6">BJJ in Miami: Find the Best Jiu-Jitsu Gyms & Training</h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            Miami is one of the most vibrant BJJ cities in the United States — and given South Florida&apos;s deep Brazilian and Latin American community, the cultural connection to jiu-jitsu runs especially deep here.
          </p>
        </div>

        <div className="mb-10 p-6 rounded-xl bg-red-950/30 border border-red-900/40">
          <p className="font-semibold text-white mb-1">📱 Supplement Your Training with AIBJJ</p>
          <p className="text-zinc-400 text-sm mb-4">AI coach, technique library, training journal — free to start. Learn fundamentals between mat sessions.</p>
          <Link href="/auth/signup" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors">Try AI Coach Free →</Link>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">The Miami BJJ Scene</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Miami&apos;s BJJ scene benefits enormously from its large Brazilian-American population and proximity to Brazil. The city has attracted high-level Brazilian coaches who have built strong programs here, and the competition scene is robust — South Florida runs major IBJJF events regularly, drawing competitors from across the Southeast and Latin America.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-4">
              American Top Team (ATT), headquartered in Coconut Creek just north of Miami, is one of the most famous MMA and BJJ gyms in the world. ATT has produced world champions across multiple combat sports and has a significant BJJ program. The South Florida area generally has excellent MMA crossover with its BJJ training.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              The heat and humidity are a factor — Miami BJJ students build serious conditioning just by training year-round in the Florida climate. No-gi is particularly popular given the weather, though the traditional gi BJJ scene is also very strong given the Brazilian influence.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What to Look for in a Miami BJJ Gym</h2>
            <div className="space-y-4">
              {[
                { title: 'Lineage and Credentials', desc: "Miami has many excellent Brazilian coaches — verify credentials. Look for IBJJF-registered black belts with clear lineage. Don't assume a Brazilian accent equals legitimate credentials." },
                { title: 'AC and Ventilation', desc: "Non-negotiable in Miami. Training in a hot, poorly ventilated space is not just uncomfortable — it's a health risk. Check the gym's cooling system before committing." },
                { title: 'Bilingual Environment', desc: 'Many Miami gyms are bilingual (English/Portuguese/Spanish). If you don\'t speak Portuguese, ensure the instruction is clear in English, especially for beginners.' },
                { title: 'MMA Integration', desc: "Miami has a strong MMA culture. Some BJJ gyms are heavily MMA-oriented. If you want pure BJJ, find gyms that specialize. If you want the crossover, South Florida has excellent options." },
                { title: 'Competition Culture', desc: 'The South Florida competition scene is strong. If you want to compete, find a gym that actively supports competition teams and attends local tournaments.' },
              ].map((item) => (
                <div key={item.title} className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-5">
                  <h3 className="font-bold text-white mb-1 text-sm">✓ {item.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Beginner Tips for Miami BJJ</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { tip: 'Hydrate aggressively', desc: 'Training in Miami heat means you sweat significantly more than in cooler climates. Drink water before, during, and after training. Electrolytes help.' },
                { tip: 'Wash your gi immediately', desc: "Miami humidity makes gi hygiene even more important. Wash your gi after every single session — no exceptions. Bacterial and fungal infections love warm, humid environments." },
                { tip: 'Start with fundamentals', desc: "Miami has excellent high-level training. Don't rush to advanced techniques. Build a solid base and the advanced stuff becomes much easier to learn later." },
                { tip: 'Supplement with AIBJJ', desc: "Between sessions, use AIBJJ's AI coach to review techniques and build your game plan. Accelerates learning dramatically." },
              ].map((item) => (
                <div key={item.tip} className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                  <p className="font-semibold text-white mb-1 text-sm">💡 {item.tip}</p>
                  <p className="text-xs text-zinc-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="p-8 rounded-xl bg-zinc-900/60 border border-zinc-800 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Start Learning BJJ Fundamentals Today</h2>
            <p className="text-zinc-400 mb-6 max-w-xl mx-auto">While you find the perfect Miami gym, start building your BJJ foundation with AIBJJ&apos;s AI coach and 10,000+ technique library.</p>
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
