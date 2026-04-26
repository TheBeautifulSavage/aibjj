import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ Online Coaching Platform — Build Your Online Coaching Business | AIBJJ',
  description: 'Learn how to build a BJJ online coaching business in 2025. Platform comparison, pricing strategies, how to combine async courses with live coaching, and how to build your student base.',
  openGraph: {
    title: 'Start Your BJJ Online Coaching Business | AIBJJ',
    description: 'Complete guide to building a BJJ online coaching business. Async courses vs live coaching, pricing, student acquisition — built on AIBJJ.',
    url: 'https://aibjj.com/bjj-online-coaching',
  },
}

export default function BJJOnlineCoachingPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Nav */}
<div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-500 mb-3">For BJJ Coaches & Instructors</p>
          <h1 className="text-4xl font-black text-white sm:text-5xl mb-6">
            Start Your BJJ Online Coaching Business
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            The geography of BJJ coaching has changed permanently. Your best potential students might be in another state — or another country. 
            Here's how to build a real online coaching business that generates income beyond your mat.
          </p>
        </div>

        {/* Quick CTA */}
        <div className="mb-14 p-6 rounded-xl bg-red-950/30 border border-red-900/40">
          <p className="font-semibold text-white mb-1">📚 Start with AIBJJ — Sell your courses, keep 85%</p>
          <p className="text-zinc-400 text-sm mb-4">Host your async courses on AIBJJ while you coach live on Zoom. The complete BJJ coaching stack.</p>
          <Link href="/auth/signup?role=creator" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors">
            Create Your Creator Account →
          </Link>
        </div>

        <div className="space-y-14">

          {/* Async vs Live */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Courses vs. Coaching: Understanding the Difference</h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Most successful BJJ coaches online do both — and they serve different markets and generate different types of revenue.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-xl border border-zinc-700 bg-zinc-900/50 p-6">
                <div className="text-3xl mb-3">📹</div>
                <h3 className="text-xl font-bold text-white mb-2">Async Courses</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  Pre-recorded instructionals and structured courses that students consume on their own time. You record once, sell forever. Pure passive income.
                </p>
                <ul className="space-y-2">
                  {[
                    'You create it once, sell it indefinitely',
                    'No time zones, no scheduling',
                    '85% payout on AIBJJ',
                    'Students learn at their own pace',
                    'Scalable — 1 or 10,000 students, same effort',
                    'Best for: technique systems, position series',
                  ].map((item) => (
                    <li key={item} className="text-xs text-zinc-300 flex gap-2">
                      <span className="text-green-500 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-red-800/50 bg-red-950/20 p-6">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-xl font-bold text-white mb-2">Live Coaching</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  Real-time 1:1 or group sessions via Zoom, Google Meet, or similar. You watch footage, give feedback, answer questions, build plans. Higher value, higher price.
                </p>
                <ul className="space-y-2">
                  {[
                    'Personalized feedback and game planning',
                    'Higher price point ($75–$250/session)',
                    'Deep relationships with students',
                    'Requires your active time',
                    'Limited by your schedule',
                    'Best for: serious competitors, dedicated students',
                  ].map((item) => (
                    <li key={item} className="text-xs text-zinc-300 flex gap-2">
                      <span className="text-red-400 flex-shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-5 text-zinc-400 leading-relaxed">
              <strong className="text-white">The play:</strong> Use AIBJJ for your async courses (passive income, 85% payout), and use Zoom or similar for live sessions. Your courses act as a funnel for live coaching — students who love your instructionals become your highest-paying coaching clients.
            </p>
          </section>

          {/* How to Build on AIBJJ + Zoom */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Using AIBJJ + Zoom: The Complete Stack</h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Here's how to set up a complete BJJ online coaching business using AIBJJ for your course content and Zoom for live sessions:
            </p>
            <div className="space-y-4">
              {[
                {
                  title: 'Step 1: Build Your Course Foundation on AIBJJ',
                  desc: 'Create 1–3 core instructionals covering your specialty area. These are the foundation of your online presence and generate passive income while you sleep. Price them at $47–$97 each. Your AIBJJ creator page becomes your homepage.',
                },
                {
                  title: 'Step 2: Add a Coaching Tier',
                  desc: 'On your AIBJJ creator page, mention that you offer live coaching sessions. Link to a Calendly or similar booking system for 1:1 sessions. Price live sessions at $75–$150/hour. Group workshops (4–8 people on Zoom) at $30–$50/person are great for leverage.',
                },
                {
                  title: 'Step 3: Create a Membership Option',
                  desc: 'A monthly coaching subscription ($49–$99/month) for a fixed number of video reviews or a group coaching call is highly attractive. Students submit footage, you review async via Loom or live on Zoom. Predictable recurring revenue.',
                },
                {
                  title: 'Step 4: Use Your Courses to Pre-Qualify Coaching Clients',
                  desc: 'When a student emails saying they love your instructional, that\'s the moment to mention your coaching program. People who already trust you and benefit from your content are your best coaching clients. The course is the funnel.',
                },
              ].map((item, idx) => (
                <div key={idx} className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Building your student base */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Building Your Online Student Base</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Your existing students and training partners are your first audience. From there:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  channel: 'Instagram / TikTok',
                  strategy: 'Post technique clips. Not full tutorials — just enough to show what you know. Include your AIBJJ creator link in bio. Reels and TikToks with technique breakdowns drive huge organic reach.',
                },
                {
                  channel: 'YouTube',
                  strategy: "Post one free technique video per week. End every video with 'my full system is on AIBJJ.' YouTube has massive organic search traffic for BJJ technique queries — rank for your specialty.",
                },
                {
                  channel: 'Academy Network',
                  strategy: 'Tell your gym owners you coach online. They often refer their competition students to external coaches for specialized training. Have a business card with your AIBJJ creator page URL.',
                },
                {
                  channel: 'Competition Scene',
                  strategy: 'Compete consistently — even if not at the highest level. Competing builds credibility and visibility. When you medal, post about it with your creator link. Results are social proof.',
                },
                {
                  channel: 'BJJ Community',
                  strategy: "Reddit (r/bjj), BJJ Facebook groups, Discord servers. Be genuinely helpful — answer questions, share knowledge. Don't spam links. When people see you're knowledgeable, they find you.",
                },
                {
                  channel: 'Email List',
                  strategy: 'Your email list is the most valuable thing you can build. Offer a free guide or technique PDF in exchange for email. Email subscribers convert at much higher rates than social followers.',
                },
              ].map((item) => (
                <div key={item.channel} className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                  <p className="font-semibold text-white mb-1 text-sm">📍 {item.channel}</p>
                  <p className="text-xs text-zinc-400 leading-relaxed">{item.strategy}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Pricing Your Online BJJ Coaching</h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Underpricing is the most common mistake new online coaches make. Here's what the market supports:
            </p>
            <div className="overflow-hidden rounded-xl border border-zinc-800">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-800 bg-zinc-900">
                    <th className="px-5 py-3 text-left font-medium text-zinc-400">Product</th>
                    <th className="px-5 py-3 text-center font-medium text-zinc-400">Starting Price</th>
                    <th className="px-5 py-3 text-center font-medium text-zinc-400">Experienced Coach</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/50">
                  {[
                    ['Single instructional (2–4 hrs)', '$47', '$97–$147'],
                    ['Full series (4+ volumes)', '$97', '$197–$297'],
                    ['1:1 coaching session (60 min)', '$75', '$150–$250'],
                    ['Group coaching session (Zoom)', '$25/person', '$50/person'],
                    ['Monthly coaching membership', '$49/mo', '$99–$149/mo'],
                    ['Competition prep intensive', '$150', '$300–$500'],
                  ].map(([product, start, exp]) => (
                    <tr key={product as string} className="bg-zinc-950/50">
                      <td className="px-5 py-3 font-medium text-zinc-300">{product}</td>
                      <td className="px-5 py-3 text-center text-zinc-400">{start}</td>
                      <td className="px-5 py-3 text-center text-green-400 font-semibold">{exp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-zinc-500">
              Note: Prices reflect the US/global market. Adjust based on your credentials and current reputation. Don't start at zero — it signals low value.
            </p>
          </section>

          {/* Final CTA */}
          <section className="p-8 rounded-xl bg-zinc-900/60 border border-zinc-800 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Start Your BJJ Online Coaching Business</h2>
            <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
              Create your AIBJJ creator account. Launch your first instructional. Build your coaching business — your knowledge shouldn't be limited by your zip code.
            </p>
            <Link href="/auth/signup?role=creator" className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Become a Creator — Free →
            </Link>
            <p className="mt-3 text-xs text-zinc-600">Free to start · 85% payout · No exclusivity</p>
          </section>

        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-800/60 bg-zinc-950 py-8 mt-8">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-600">
          <Link href="/" className="font-black text-base"><span className="text-red-600">AI</span><span className="text-white">BJJ</span></Link>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link href="/bjj-instructor-platform" className="hover:text-zinc-400">Creator Platform</Link>
            <Link href="/sell-bjj-instructionals" className="hover:text-zinc-400">Sell Instructionals</Link>
            <Link href="/affiliates" className="hover:text-zinc-400">Affiliates</Link>
            <Link href="/pricing" className="hover:text-zinc-400">Pricing</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
