import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Best BJJ Training Journal App | Track Your Jiu-Jitsu Progress',
  description: 'The best BJJ training journal app. Log your sessions, track techniques, monitor sparring notes, and let AI analyze your progress. Built for serious grapplers.',
  openGraph: {
    title: 'Best BJJ Training Journal App | AIBJJ',
    description: 'Track every roll, log every technique, and let AI coach analyze your training patterns. The smartest BJJ journal app ever built.',
    url: 'https://aibjj.com/bjj-training-journal',
  },
}

export default function BJJTrainingJournalPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300">
      {/* Nav */}
      <nav className="border-b border-zinc-800/60 bg-black/80 backdrop-blur-xl px-4 py-4">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-tight">
            <span className="text-red-600">AI</span><span className="text-white">BJJ</span>
          </Link>
          <div className="flex gap-3">
            <Link href="/auth/signin" className="text-sm text-zinc-400 hover:text-white px-4 py-2">Sign In</Link>
            <Link href="/auth/signup" className="text-sm bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Get Started</Link>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-500 mb-3">BJJ Training Journal</p>
          <h1 className="text-4xl font-black text-white sm:text-5xl mb-6">
            The Best BJJ Training Journal App
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            Most BJJ practitioners have no idea how many hours they've actually trained, which techniques they hit most, or what patterns are holding them back. A training journal changes everything — and an AI-powered one changes it even more.
          </p>
        </div>

        {/* CTA Banner */}
        <div className="mb-12 p-6 rounded-xl bg-red-950/30 border border-red-900/40">
          <p className="font-semibold text-white mb-1">📓 Start Your BJJ Journal Today</p>
          <p className="text-zinc-400 text-sm mb-4">Log your sessions, track your growth, and get AI insights on your training patterns — free to start.</p>
          <Link href="/auth/signup" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors">
            Create Free Account →
          </Link>
        </div>

        <div className="space-y-12">

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Why Every Serious BJJ Athlete Needs a Training Journal</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              The best BJJ practitioners in the world are deliberate about their training. They know what they worked on, what didn't go well, and what they need to drill more. This isn't just organizational discipline — it's how you accelerate the learning curve that separates a 5-year blue belt from a 5-year purple belt.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-4">
              A training journal is your external memory. Every insight you've had on the mat, every technique click, every detail your coach gave you — these are gone within days if not written down. Over months and years, a training journal becomes an irreplaceable record of your evolution as a grappler.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Studies on skill acquisition consistently show that deliberate practice with feedback accelerates learning faster than high-volume unfocused practice. A training journal provides both — it creates the habit of reflecting on your training (deliberate practice) and tracking outcomes over time (feedback loop).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What to Log in Your BJJ Journal</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Not all journal entries are created equal. Here's what actually matters to track:
            </p>

            <h3 className="text-xl font-semibold text-white mb-2">Session Basics</h3>
            <ul className="space-y-1 text-zinc-400 list-disc pl-5 mb-4">
              <li>Date, duration, and type (drilling, sparring, competition, open mat)</li>
              <li>Training partners (optional but useful for pattern spotting)</li>
              <li>Physical state: energy level, injuries, weight</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-2">Technical Notes</h3>
            <ul className="space-y-1 text-zinc-400 list-disc pl-5 mb-4">
              <li>Techniques drilled and key details that clicked</li>
              <li>Techniques you hit in sparring successfully</li>
              <li>Techniques used against you — especially ones that worked well</li>
              <li>Questions that came up during training</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-2">Sparring Notes</h3>
            <ul className="space-y-1 text-zinc-400 list-disc pl-5 mb-4">
              <li>Positions you ended up in frequently (and why)</li>
              <li>Submissions you caught and submissions you received</li>
              <li>What your instincts did vs. what you planned</li>
              <li>Moments where you felt lost or overwhelmed</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-2">Focus Areas</h3>
            <p className="text-zinc-400 leading-relaxed mb-4">
              What was your specific intention for that session? What are you working on this week? Did your focus produce results? Intentional training beats random rolling every time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Physical Journal vs. App: Why Digital Wins</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              A physical notebook works — but it has serious limitations. You can't search it. You can't analyze patterns across 6 months of entries. You can't ask it "how many times have I logged that I got caught in a triangle this month?"
            </p>
            <p className="text-zinc-400 leading-relaxed mb-4">
              A digital BJJ training journal solves all of this. The AIBJJ training journal goes further — your AI coach reads your journal entries and provides contextual coaching based on actual training patterns. If you keep getting submitted with the same position, your AI coach will notice and address it.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {[
                { title: '📊 Analytics', desc: 'Track mat time, technique frequency, sparring ratios, and progress trends over time.' },
                { title: '🤖 AI Insights', desc: 'Your AI coach analyzes your journal to identify patterns, gaps, and coaching priorities.' },
                { title: '🔍 Searchable', desc: 'Find any technique, partner, or session instantly. Your whole BJJ history at your fingertips.' },
                { title: '📱 Always Available', desc: 'Log from your phone right after class while it\'s fresh. Never lose a detail again.' },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                  <p className="font-semibold text-white mb-1">{item.title}</p>
                  <p className="text-sm text-zinc-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Building the Journaling Habit</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              The biggest obstacle to journaling isn't discipline — it's friction. If it takes more than 2 minutes to log a session, you won't do it after a hard training. AIBJJ is designed for rapid logging with smart templates that prompt the right information without requiring an essay.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-4">
              The habit is simple: log before you leave the gym or immediately after. Even five bullet points of notes compounds dramatically over time. Your 6-month-ago self's notes become gold when you look back at them.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Elite competitors journal before major tournaments to review their game plan, their opponent tendencies (if known), and their mental state. It's not just a training tool — it's a competition tool.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Compare: AIBJJ vs. Other BJJ Journal Solutions</h2>
            <div className="overflow-hidden rounded-xl border border-zinc-800">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-800 bg-zinc-900">
                    <th className="px-5 py-3 text-left font-medium text-zinc-400">Feature</th>
                    <th className="px-5 py-3 text-center font-bold text-red-500">AIBJJ</th>
                    <th className="px-5 py-3 text-center font-medium text-zinc-500">Notebook</th>
                    <th className="px-5 py-3 text-center font-medium text-zinc-500">Generic App</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/50">
                  {[
                    ['AI-powered insights', '✅', '❌', '❌'],
                    ['BJJ-specific templates', '✅', '❌', '❌'],
                    ['Technique tracking', '✅', '⚠️', '⚠️'],
                    ['Progress analytics', '✅', '❌', '⚠️'],
                    ['AI coach integration', '✅', '❌', '❌'],
                    ['Searchable history', '✅', '❌', '✅'],
                    ['Free to start', '✅', '✅', '✅'],
                  ].map(([feature, aibjj, notebook, generic]) => (
                    <tr key={feature} className="bg-zinc-950/50">
                      <td className="px-5 py-3 font-medium text-zinc-300">{feature}</td>
                      <td className="px-5 py-3 text-center font-semibold text-green-400">{aibjj}</td>
                      <td className="px-5 py-3 text-center text-zinc-500">{notebook}</td>
                      <td className="px-5 py-3 text-center text-zinc-500">{generic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Final CTA */}
          <section className="p-8 rounded-xl bg-zinc-900/60 border border-zinc-800 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Start Your BJJ Training Journal</h2>
            <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
              Free to start. Log your first session in under 2 minutes. Your AI coach will be ready to help as soon as you begin training.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/auth/signup" className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Start Free →
              </Link>
              <Link href="/bjj-techniques" className="inline-flex items-center justify-center gap-2 border border-zinc-700 bg-zinc-900 hover:border-zinc-600 text-zinc-300 px-6 py-3 rounded-lg font-semibold transition-colors">
                BJJ Techniques Guide
              </Link>
            </div>
          </section>

        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-800/60 bg-zinc-950 py-8 mt-16">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-600">
          <Link href="/" className="font-black text-base"><span className="text-red-600">AI</span><span className="text-white">BJJ</span></Link>
          <div className="flex gap-6">
            <Link href="/bjj-techniques" className="hover:text-zinc-400">Techniques</Link>
            <Link href="/bjj-game-plan" className="hover:text-zinc-400">Game Plan</Link>
            <Link href="/bjj-ai-coach" className="hover:text-zinc-400">AI Coach</Link>
            <Link href="/terms" className="hover:text-zinc-400">Terms</Link>
            <Link href="/privacy" className="hover:text-zinc-400">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
