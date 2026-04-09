import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ Fanatics Alternative: 5 Options Compared in 2025 | AIBJJ',
  description: 'Looking for a BJJ Fanatics alternative? Compare 5 options: AIBJJ, Grapplers Guide, FloGrappling, YouTube, and Gumroad. Honest breakdown of what each offers.',
  openGraph: {
    title: 'BJJ Fanatics Alternative: 5 Options Compared',
    description: 'Honest comparison of 5 BJJ Fanatics alternatives in 2025. Find the right platform for your learning goals and budget.',
    url: 'https://aibjj.com/bjj-fanatics-alternative',
  },
}

export default function BJJFanaticsAlternativePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <nav className="border-b border-zinc-800/60 bg-zinc-950/90 backdrop-blur-xl px-4 py-4 sticky top-0 z-50">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-tight"><span className="text-red-600">AI</span><span className="text-white">BJJ</span></Link>
          <div className="flex gap-3">
            <Link href="/auth/signin" className="text-sm text-zinc-400 hover:text-white px-4 py-2">Sign In</Link>
            <Link href="/auth/signup" className="text-sm bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Try Free</Link>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-500 mb-3">Alternatives & Comparisons</p>
          <h1 className="text-4xl font-black text-white sm:text-5xl mb-6">
            BJJ Fanatics Alternative: 5 Options Compared in 2025
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            BJJ Fanatics is the dominant force in instructional BJJ content — but it&apos;s not the only option. Whether you&apos;re a buyer looking for better value, a creator looking for better payouts, or someone who needs more than a video library, here are five alternatives worth knowing.
          </p>
        </div>

        <div className="space-y-10">

          {/* Alternative 1: AIBJJ */}
          <section className="rounded-xl border border-red-800/40 bg-red-950/20 p-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-bold text-red-400 uppercase tracking-widest">Best Overall Alternative</span>
                <h2 className="text-2xl font-bold text-white mt-1">1. AIBJJ</h2>
              </div>
              <Link href="/auth/signup" className="flex-shrink-0 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap">Try Free</Link>
            </div>
            <p className="text-zinc-400 leading-relaxed mb-4">
              AIBJJ is the most comprehensive alternative to BJJ Fanatics for practitioners who want more than a video library. While Fanatics is purely a content store, AIBJJ is a full training ecosystem built around the BJJ student&apos;s learning process.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-4">
              <div>
                <p className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-2">What Makes It Different</p>
                <ul className="space-y-1">
                  {[
                    'AI coach that answers technique questions',
                    '10,000+ searchable technique library',
                    'Training journal and session tracking',
                    'Game plan builder',
                    'Creator marketplace with 85% payouts',
                    '$19.99/month subscription (vs. per-instructional buying)',
                  ].map((item) => (
                    <li key={item} className="text-xs text-zinc-300 flex gap-2"><span className="text-green-500">✓</span>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-red-500 uppercase tracking-wide mb-2">Limitations vs. Fanatics</p>
                <ul className="space-y-1">
                  {[
                    'Smaller instructional catalog currently',
                    'Fewer established big-name exclusives',
                    'Newer platform — less content volume',
                  ].map((item) => (
                    <li key={item} className="text-xs text-zinc-400 flex gap-2"><span className="text-zinc-600">→</span>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-sm text-zinc-400"><strong className="text-white">Best for:</strong> Practitioners who want AI coaching integration, tracking tools, and a subscription model rather than per-instructional purchases.</p>
          </section>

          {/* Alternative 2: Grapplers Guide */}
          <section className="rounded-xl border border-zinc-700 bg-zinc-900/40 p-6">
            <div className="mb-4">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Best for Structured Curriculum</span>
              <h2 className="text-2xl font-bold text-white mt-1">2. Grapplers Guide</h2>
            </div>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Grapplers Guide (Jason Scully) is a subscription-based platform with a large library of instructional content organized into structured curricula. It&apos;s one of the original subscription BJJ learning platforms and still represents solid value for practitioners who prefer a curated, organized approach.
            </p>
            <p className="text-sm text-zinc-400 mb-3"><strong className="text-white">Pros:</strong> Large content library, structured curriculum, reasonable subscription price, single reliable instructor voice.</p>
            <p className="text-sm text-zinc-400 mb-3"><strong className="text-white">Cons:</strong> No AI coaching, no training journal, single instructor perspective, no creator marketplace.</p>
            <p className="text-sm text-zinc-400"><strong className="text-white">Best for:</strong> Beginners and intermediate practitioners who want a structured, curriculum-based approach from a single experienced instructor.</p>
          </section>

          {/* Alternative 3: YouTube */}
          <section className="rounded-xl border border-zinc-700 bg-zinc-900/40 p-6">
            <div className="mb-4">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Best Free Option</span>
              <h2 className="text-2xl font-bold text-white mt-1">3. YouTube</h2>
            </div>
            <p className="text-zinc-400 leading-relaxed mb-4">
              YouTube has an enormous amount of free BJJ content — from high-level instructors giving away technique breakdowns to comprehensive free instructional series. The quantity of content is extraordinary.
            </p>
            <p className="text-sm text-zinc-400 mb-3"><strong className="text-white">Pros:</strong> Free. Massive content library. Every major instructor has a presence. Easy to find specific techniques.</p>
            <p className="text-sm text-zinc-400 mb-3"><strong className="text-white">Cons:</strong> No structure or curriculum. Algorithm-driven, not learning-driven. Quality varies wildly. No community or training tools. You can waste hours on content that doesn&apos;t serve your actual game.</p>
            <p className="text-sm text-zinc-400"><strong className="text-white">Best for:</strong> Supplemental learning, finding free content on specific techniques, following instructor channels you already trust.</p>
          </section>

          {/* Alternative 4: FloGrappling */}
          <section className="rounded-xl border border-zinc-700 bg-zinc-900/40 p-6">
            <div className="mb-4">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Best for Live Events</span>
              <h2 className="text-2xl font-bold text-white mt-1">4. FloGrappling</h2>
            </div>
            <p className="text-zinc-400 leading-relaxed mb-4">
              FloGrappling is the premier grappling event streaming service — ADCC, WNO, Fight to Win, EBI. If you want to watch elite competition live, FloGrappling is the product. It&apos;s not really a Fanatics alternative in the instructional sense — it serves a different purpose (watching competition vs. studying technique).
            </p>
            <p className="text-sm text-zinc-400 mb-3"><strong className="text-white">Pros:</strong> Best live event coverage in grappling. ADCC, WNO and more. Good for inspiration and high-level technique observation.</p>
            <p className="text-sm text-zinc-400 mb-3"><strong className="text-white">Cons:</strong> Not instructional content. Competition footage ≠ teaching. No training tools. Doesn&apos;t replace structured learning.</p>
            <p className="text-sm text-zinc-400"><strong className="text-white">Best for:</strong> BJJ fans who want to follow competition at the highest level — not a replacement for instructional content.</p>
          </section>

          {/* Alternative 5: Gumroad/Direct Creator */}
          <section className="rounded-xl border border-zinc-700 bg-zinc-900/40 p-6">
            <div className="mb-4">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Best for Buying Direct</span>
              <h2 className="text-2xl font-bold text-white mt-1">5. Buying Direct (Gumroad, Coach&apos;s Own Site)</h2>
            </div>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Many instructors sell directly through Gumroad, Teachable, or their own websites. Buying direct often gets you a better price (the instructor keeps more, and sometimes passes savings to buyers) and supports the instructor directly.
            </p>
            <p className="text-sm text-zinc-400 mb-3"><strong className="text-white">Pros:</strong> Support your instructor directly. Sometimes better pricing. Direct relationship with the creator.</p>
            <p className="text-sm text-zinc-400 mb-3"><strong className="text-white">Cons:</strong> No BJJ-specific audience or community. No training tools. Hard to discover new instructors. Scattered across dozens of different platforms.</p>
            <p className="text-sm text-zinc-400"><strong className="text-white">Best for:</strong> Buying from a specific instructor you already follow who sells direct.</p>
          </section>

          {/* Summary */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Quick Comparison Summary</h2>
            <div className="overflow-hidden rounded-xl border border-zinc-800">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-800 bg-zinc-900">
                    <th className="px-5 py-3 text-left font-medium text-zinc-400">Platform</th>
                    <th className="px-5 py-3 text-center font-medium text-zinc-400">Type</th>
                    <th className="px-5 py-3 text-center font-medium text-zinc-400">AI Tools</th>
                    <th className="px-5 py-3 text-center font-medium text-zinc-400">Price Model</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/50">
                  {[
                    ['AIBJJ', 'Training platform', '✅ Yes', '$19.99/mo'],
                    ['BJJ Fanatics', 'Video store', '❌ No', 'Per instructional'],
                    ['Grapplers Guide', 'Video library', '❌ No', 'Subscription'],
                    ['FloGrappling', 'Event streaming', '❌ No', '~$12.99/mo'],
                    ['YouTube', 'Free video', '❌ No', 'Free'],
                  ].map(([platform, type, ai, price]) => (
                    <tr key={platform as string} className="bg-zinc-950/50">
                      <td className="px-5 py-3 font-semibold text-zinc-200">{platform}</td>
                      <td className="px-5 py-3 text-center text-zinc-400 text-xs">{type}</td>
                      <td className="px-5 py-3 text-center">{ai}</td>
                      <td className="px-5 py-3 text-center text-zinc-400 text-xs">{price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="p-8 rounded-xl bg-zinc-900/60 border border-zinc-800 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Start with AIBJJ Free</h2>
            <p className="text-zinc-400 mb-6 max-w-xl mx-auto">AI coach, 10,000+ techniques, training journal, creator marketplace. The most complete BJJ training platform — free to start.</p>
            <Link href="/auth/signup" className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">Start AIBJJ Free →</Link>
            <p className="mt-3 text-xs text-zinc-600">No credit card required</p>
          </section>
        </div>
      </div>

      <footer className="border-t border-zinc-800/60 bg-zinc-950 py-8 mt-8">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-600">
          <Link href="/" className="font-black text-base"><span className="text-red-600">AI</span><span className="text-white">BJJ</span></Link>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link href="/aibjj-vs-bjj-fanatics" className="hover:text-zinc-400">vs Fanatics</Link>
            <Link href="/grapplers-guide-alternative" className="hover:text-zinc-400">vs Grapplers Guide</Link>
            <Link href="/pricing" className="hover:text-zinc-400">Pricing</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
