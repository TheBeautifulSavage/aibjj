import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ in Los Angeles: Find the Best Jiu-Jitsu Gyms & Training | AIBJJ',
  description: 'Looking for BJJ in Los Angeles? Guide to finding the best jiu-jitsu gyms in LA — what to look for, questions to ask, beginner tips. Supplement your training with AIBJJ\'s AI coach.',
  openGraph: {
    title: 'BJJ in Los Angeles: Best Jiu-Jitsu Gyms & Training',
    description: 'Find BJJ in Los Angeles. What to look for in a gym, how to evaluate coaches, and how to accelerate your learning with AI-powered training.',
    url: 'https://aibjj.com/bjj-los-angeles',
  },
}

export default function BJJLosAngelesPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <nav className="border-b border-zinc-800/60 bg-zinc-950/90 backdrop-blur-xl px-4 py-4 sticky top-0 z-50">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-tight">
            <span className="text-red-600">AI</span><span className="text-white">BJJ</span>
          </Link>
          <Link href="/auth/signup" className="text-sm bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
            Start Training
          </Link>
        </div>
      </nav>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-500 mb-3">BJJ in California</p>
          <h1 className="text-4xl font-black text-white sm:text-5xl mb-6">
            BJJ in Los Angeles: Find the Best Jiu-Jitsu Gyms & Training
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            Los Angeles is one of the deepest Brazilian jiu-jitsu markets in the world. The city is home to some of the most decorated coaches and competitive programs in North America — and with hundreds of gyms across LA County, finding the right one requires some homework.
          </p>
        </div>

        <div className="mb-10 p-6 rounded-xl bg-red-950/30 border border-red-900/40">
          <p className="font-semibold text-white mb-1">📱 Train Smarter While You Search</p>
          <p className="text-zinc-400 text-sm mb-4">Use AIBJJ's AI coach to learn BJJ fundamentals, build your game plan, and get technique breakdowns — before you even step on the mat.</p>
          <Link href="/auth/signup" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors">
            Try AI Coach Free →
          </Link>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">The LA BJJ Scene</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Los Angeles has been a major BJJ hub since the early days of the sport in the United States. The city's diverse martial arts culture and proximity to Brazil helped establish it as one of the premier training destinations in the country.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-4">
              The LA competition scene is robust — the IBJJF regularly hosts major tournaments in the region, and local sub-only events draw competitors from across the Western US. Whether you're training recreationally or competing seriously, LA has infrastructure for both.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Notable practitioners who trained in or around LA include Eddie Bravo (10th Planet founder, West Hollywood), and the city has deep roots in both traditional Gracie lineage and modern no-gi grappling. West LA, Culver City, Hollywood, and the Valley all have active training communities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What to Look for in an LA BJJ Gym</h2>
            <div className="space-y-4">
              {[
                { title: 'Instructor Credentials', desc: 'In LA especially, verify your instructor\'s belt rank and lineage. The city has had issues with fraudulent black belts. Look for IBJJF-verified credentials or a clear lineage you can trace.' },
                { title: 'Class Schedule Compatibility', desc: 'LA traffic is brutal. A gym 20 minutes away can take 60 minutes during rush hour. Be realistic about which gyms you can actually get to consistently. Consistency beats the "best" gym you never attend.' },
                { title: 'Trial Class Policy', desc: 'Any reputable LA gym should offer a free trial class. Take multiple trials at different gyms before committing — don\'t sign a long-term contract before you know you like the place.' },
                { title: 'Competition vs. Recreational Focus', desc: 'Some LA gyms are heavily competition-focused (intense, fast-paced, everyone is drilling hard). Others are more recreational. Neither is wrong — know which environment you want.' },
                { title: 'Mat Time', desc: 'In larger LA gyms, classes can have 40+ students. Ask about student-to-instructor ratio and how much time you\'ll actually spend drilling and sparring versus watching demonstrations.' },
              ].map((item) => (
                <div key={item.title} className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-5">
                  <h3 className="font-bold text-white mb-1 text-sm">✓ {item.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Questions to Ask Before Joining</h2>
            <ul className="space-y-3">
              {[
                "What's the instructor's belt rank and lineage — and can I verify it?",
                "Is there a trial class or introductory period before I commit?",
                "What does the membership contract look like? Month-to-month or annual?",
                "Are there beginner-specific classes or does everyone train together?",
                "How often are there open mat sessions for extra drilling?",
                "What's the gym culture like around hygiene and etiquette?",
                "Do you have competition teams and opportunities to compete?",
              ].map((q) => (
                <li key={q} className="flex gap-3 text-sm text-zinc-300">
                  <span className="text-red-500 flex-shrink-0 mt-0.5">→</span>
                  {q}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Beginner Tips for Starting BJJ in LA</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { tip: 'Start with the fundamentals', desc: "Don't chase fancy techniques from YouTube in your first months. Learn the basics — positions, escapes, submissions — and build on a solid base." },
                { tip: 'Show up consistently', desc: "3x per week beats 6x per week for two weeks then nothing. BJJ rewards consistency above all else. Pick a schedule you can maintain." },
                { tip: "Tap early and often", desc: "Tapping is how you learn. There's no shame in it. Don't try to muscle through submissions — you'll get hurt and learn bad habits." },
                { tip: 'Use supplemental learning', desc: "Between mat sessions, use tools like AIBJJ's AI coach to review concepts, study technique libraries, and build your game plan." },
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
            <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
              While you're searching for the right gym in LA, start building your BJJ foundation with AIBJJ. 
              AI coach, 10,000+ techniques, training journal — free to start.
            </p>
            <Link href="/auth/signup" className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start with AIBJJ Free →
            </Link>
          </section>
        </div>
      </div>

      <footer className="border-t border-zinc-800/60 bg-zinc-950 py-8 mt-8">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-600">
          <Link href="/" className="font-black text-base"><span className="text-red-600">AI</span><span className="text-white">BJJ</span></Link>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link href="/bjj-ai-coach" className="hover:text-zinc-400">AI Coach</Link>
            <Link href="/bjj-techniques" className="hover:text-zinc-400">Techniques</Link>
            <Link href="/bjj-training-journal" className="hover:text-zinc-400">Journal</Link>
            <Link href="/pricing" className="hover:text-zinc-400">Pricing</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
