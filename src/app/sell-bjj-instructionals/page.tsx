import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Sell BJJ Instructionals Online in 2025 | AIBJJ',
  description: 'Complete guide on how to sell BJJ instructionals online in 2025. Compare platforms: YouTube, BJJ Fanatics, Gumroad vs AIBJJ (85% payout). Revenue expectations, what sells, how to get started.',
  openGraph: {
    title: 'How to Sell BJJ Instructionals Online in 2025',
    description: 'The complete guide for BJJ instructors who want to monetize their knowledge. Platform comparison, revenue expectations, and step-by-step setup on AIBJJ.',
    url: 'https://aibjj.com/sell-bjj-instructionals',
  },
}

export default function SellBJJInstructionalsPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Nav */}
      <nav className="border-b border-zinc-800/60 bg-zinc-950/90 backdrop-blur-xl px-4 py-4 sticky top-0 z-50">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-tight">
            <span className="text-red-600">AI</span><span className="text-white">BJJ</span>
          </Link>
          <div className="flex gap-3">
            <Link href="/auth/signin" className="text-sm text-zinc-400 hover:text-white px-4 py-2">Sign In</Link>
            <Link href="/auth/signup?role=creator" className="text-sm bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
              Start Selling
            </Link>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-500 mb-3">For BJJ Instructors</p>
          <h1 className="text-4xl font-black text-white sm:text-5xl mb-6">
            How to Sell BJJ Instructionals Online in 2025
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            The market for BJJ instructionals is real and growing. Established instructors are generating $500–$5,000 per month in passive income from instructionals — and some are doing significantly more. 
            If you have knowledge worth sharing, here's exactly how to monetize it.
          </p>
        </div>

        {/* Quick CTA */}
        <div className="mb-12 p-6 rounded-xl bg-red-950/30 border border-red-900/40">
          <p className="font-semibold text-white mb-1">Ready to sell? Start on AIBJJ — creators keep 85%</p>
          <p className="text-zinc-400 text-sm mb-4">The highest payout in the BJJ instructional industry. No exclusivity. No upfront cost.</p>
          <Link href="/auth/signup?role=creator" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors">
            Create Your Creator Account →
          </Link>
        </div>

        <div className="space-y-14">

          {/* Platform Comparison */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Platform Comparison: Where Should You Sell?</h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              There are several platforms you could use to sell BJJ instructionals. They are not equal. 
              Here's an honest breakdown:
            </p>

            <div className="space-y-5">
              {[
                {
                  platform: 'YouTube',
                  emoji: '📹',
                  pros: 'Massive built-in audience. Free to use. Good for brand building.',
                  cons: "Ad revenue is tiny (~$3–5 per 1,000 views). Algorithm can suppress you overnight. You can't charge for content directly. You're building on rented land.",
                  verdict: 'Great for marketing. Terrible for revenue as your primary channel.',
                  color: 'border-yellow-800/40 bg-yellow-950/20',
                },
                {
                  platform: 'BJJ Fanatics',
                  emoji: '🏪',
                  pros: 'Large existing audience of BJJ buyers. Handles all production logistics.',
                  cons: 'Takes 40–70% of revenue. Often requires exclusivity clauses. You lose pricing control — they discount your product whenever they want. Slow payouts. You\'re one of thousands in their catalog.',
                  verdict: "Viable if you're a big name they actively promote. Poor economics for most instructors.",
                  color: 'border-orange-800/40 bg-orange-950/20',
                },
                {
                  platform: 'Gumroad',
                  emoji: '🛒',
                  pros: 'Easy to set up. Low fees (~10%). You keep most revenue.',
                  cons: "No BJJ-specific audience. You bring all your own traffic. No community, no discovery, no AI tools. Gumroad doesn't care about BJJ.",
                  verdict: 'Fine as a payment layer. Not a marketing channel.',
                  color: 'border-zinc-700/40 bg-zinc-900/20',
                },
                {
                  platform: 'AIBJJ',
                  emoji: '🥋',
                  pros: '85% payout — highest in the industry. BJJ-specific audience. Your own branded creator page ([name].aibjj.com). No exclusivity ever. AI coach integration extends value of your content. Real-time analytics.',
                  cons: 'Newer platform — smaller absolute audience than Fanatics today.',
                  verdict: 'Best economics for creators. Built specifically for BJJ. Audience is growing fast.',
                  color: 'border-red-800/40 bg-red-950/20',
                },
              ].map((p) => (
                <div key={p.platform} className={`rounded-xl border p-6 ${p.color}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{p.emoji}</span>
                    <h3 className="text-xl font-bold text-white">{p.platform}</h3>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 mb-3">
                    <div>
                      <p className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">Pros</p>
                      <p className="text-sm text-zinc-300">{p.pros}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-red-500 uppercase tracking-wide mb-1">Cons</p>
                      <p className="text-sm text-zinc-300">{p.cons}</p>
                    </div>
                  </div>
                  <div className="border-t border-zinc-800/60 pt-3 mt-3">
                    <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wide mb-1">Verdict</p>
                    <p className="text-sm text-zinc-300 font-medium">{p.verdict}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Step by Step */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Step-by-Step: How to Sell BJJ Instructionals on AIBJJ</h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              The process is straightforward. Here's exactly what you do:
            </p>
            <div className="space-y-4">
              {[
                {
                  step: 1,
                  title: 'Record Your Instructional',
                  desc: "You don't need a production studio. A modern iPhone in good lighting produces more than acceptable quality. Focus on clear camera angles (get the grips), clean audio (lapel mic if possible), and logical organization. Shoot one technique at a time. You can edit later or keep it raw — students care more about content than cinematography.",
                },
                {
                  step: 2,
                  title: 'Create Your Creator Account on AIBJJ',
                  desc: 'Sign up at aibjj.com/auth/signup?role=creator. Connect your Stripe account for payments. Fill out your profile — belt rank, credentials, competition history, what you specialize in. This is your sales page, so be specific.',
                },
                {
                  step: 3,
                  title: 'Upload and Organize Your Content',
                  desc: 'Upload your videos directly through the creator dashboard. Organize them into logical modules. Add descriptions for each technique — these help students find your content and also help with SEO. AIBJJ handles all encoding and delivery.',
                },
                {
                  step: 4,
                  title: 'Set Your Price',
                  desc: "You control this completely. $47–$97 is a typical range for a solid instructional series. Volume sets often sell for $97–$197. Don't race to the bottom — price signals quality. You can always run promotions to your audience.",
                },
                {
                  step: 5,
                  title: 'Promote to Your Audience',
                  desc: "Announce to your academy students first — they're already believers. Post on Instagram with clips showing technique highlights (Instagram Reels drive significant traffic). Link in YouTube video descriptions. Tell your competition teammates. Share in relevant Reddit communities (genuinely helpful, not spammy).",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-5 p-5 rounded-xl border border-zinc-800 bg-zinc-900/40">
                  <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-red-950/60 border border-red-800/40 text-red-400 font-black text-lg">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* What Sells */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What Sells Well</h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              The market favors depth over breadth. A focused instructional on one specific area consistently 
              outperforms a generic "complete BJJ" series. Here's what converts:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Complete Position Systems', desc: '"My Entire Butterfly Guard System" — students want a complete roadmap, not isolated techniques.' },
                { title: 'Leg Lock Series', desc: 'Massive demand. Heel hooks, ashi garami systems, saddle entries. No-gi especially.' },
                { title: 'Competition Preparation', desc: 'Bracket strategy, peak timing, rules differences (IBJJF vs sub-only). Very specific, very sellable.' },
                { title: 'White Belt Fundamentals', desc: 'Constant demand — every gym always has beginners. Basics taught well by credible instructors sell forever.' },
                { title: 'Guard Passing Systems', desc: 'Everyone wants to improve their passing. Over-under, leg drag, knee slice — frame around a cohesive system.' },
                { title: 'MMA-Specific Grappling', desc: 'Cage wrestling, clinch work, ground and pound defense — underserved, strong demand from MMA fighters.' },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                  <p className="font-semibold text-white mb-1 text-sm">✓ {item.title}</p>
                  <p className="text-xs text-zinc-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Revenue Expectations */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Realistic Revenue Expectations</h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Let's be honest. Here's what BJJ instructors realistically earn from instructionals:
            </p>
            <div className="space-y-4">
              {[
                {
                  tier: 'Just Starting Out',
                  range: '$100–$500/month',
                  desc: 'Small existing audience (under 500 followers). One or two instructionals. Revenue comes mostly from academy students and close training partners. This phase is about building your catalog.',
                  color: 'bg-zinc-800/40 border-zinc-700',
                },
                {
                  tier: 'Growing Instructor',
                  range: '$500–$2,000/month',
                  desc: "1,000–10,000 followers. Competed at regional/national level. Multiple instructionals with a clear specialty. Consistent social media presence showing your techniques in action. This is achievable within 12 months of starting.",
                  color: 'bg-blue-950/30 border-blue-800/40',
                },
                {
                  tier: 'Established Instructor',
                  range: '$2,000–$5,000/month',
                  desc: "Recognizable name in your region or specialty. 10,000+ followers. A catalog of 3–5+ instructionals. Students refer others. YouTube presence that drives organic discovery. Many instructors hit this within 2–3 years.",
                  color: 'bg-purple-950/30 border-purple-800/40',
                },
                {
                  tier: 'High-Level Creator',
                  range: '$5,000–$20,000+/month',
                  desc: 'World-class credentials or massive audience. Gordon Ryan, Craig Jones, John Danaher territory — but the ceiling is high for anyone willing to build seriously. This level requires real investment in marketing and audience building.',
                  color: 'bg-red-950/30 border-red-800/40',
                },
              ].map((tier) => (
                <div key={tier.tier} className={`rounded-xl border p-6 ${tier.color}`}>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-bold text-white">{tier.tier}</h3>
                    <span className="text-lg font-black text-green-400 whitespace-nowrap">{tier.range}</span>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">{tier.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section className="p-8 rounded-xl bg-zinc-900/60 border border-zinc-800 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Start Selling Your BJJ Knowledge</h2>
            <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
              Create your free AIBJJ creator account. Upload your first instructional. 
              Keep 85% of every sale from day one.
            </p>
            <Link href="/auth/signup?role=creator" className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Become a Creator — Free →
            </Link>
            <p className="mt-3 text-xs text-zinc-600">No exclusivity · No upfront cost · 85% payout</p>
          </section>

        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-800/60 bg-zinc-950 py-8 mt-8">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-600">
          <Link href="/" className="font-black text-base"><span className="text-red-600">AI</span><span className="text-white">BJJ</span></Link>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link href="/bjj-instructor-platform" className="hover:text-zinc-400">Creator Platform</Link>
            <Link href="/bjj-online-coaching" className="hover:text-zinc-400">Online Coaching</Link>
            <Link href="/affiliates" className="hover:text-zinc-400">Affiliates</Link>
            <Link href="/pricing" className="hover:text-zinc-400">Pricing</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
