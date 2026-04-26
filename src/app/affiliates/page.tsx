import type { Metadata } from 'next'
import Link from 'next/link'
import AffiliateForm from './AffiliateForm'

export const metadata: Metadata = {
  title: 'AIBJJ Affiliate Program — Earn 30% Recurring Commission',
  description: 'Join the AIBJJ affiliate program. Earn 30% recurring commission on every Pro subscription you refer. $6/month per referral, 60-day cookie, monthly PayPal/Stripe payouts.',
  openGraph: {
    title: 'AIBJJ Affiliate Program — Earn 30% Recurring Commission',
    description: 'Share AIBJJ, earn 30% every month they stay subscribed. Perfect for BJJ coaches, gym owners, YouTubers, and Instagram pages.',
    url: 'https://aibjj.com/affiliates',
  },
}

const FAQS = [
  {
    q: 'How much do I earn per referral?',
    a: 'AIBJJ Pro is $19.99/month. You earn 30% = $6/month for every active subscriber you refer. That compounds: 100 referrals = $600/month, every month, for as long as they stay subscribed.',
  },
  {
    q: 'Is it really recurring?',
    a: "Yes. You don't earn a one-time commission — you earn 30% every billing cycle for the lifetime of the subscription. If someone subscribes for 2 years, you earn for 2 years.",
  },
  {
    q: 'How long does the cookie last?',
    a: "60 days. If someone clicks your link today and signs up 59 days later, the referral is still credited to you. Long cookie windows mean you don't lose sales to timing.",
  },
  {
    q: 'When do I get paid?',
    a: 'Payouts are processed monthly via PayPal or Stripe. Minimum payout threshold is $50 — once you hit that, you get paid the following month.',
  },
  {
    q: 'Do I need an AIBJJ account?',
    a: 'Yes, you need a free AIBJJ account to apply. Once approved, your affiliate dashboard and unique referral link are accessible from your account settings.',
  },
  {
    q: 'Who gets approved?',
    a: 'Anyone with a genuine BJJ audience — academy owners, coaches, competitors, YouTubers, Instagram accounts, podcasters, bloggers. We review every application. Low-quality or spam applications are declined.',
  },
  {
    q: 'Can I promote if I also sell instructionals on AIBJJ?',
    a: "Absolutely. Many of our best affiliates are also creators. You earn commission on subscriptions you refer AND 85% on your instructional sales. Two revenue streams, one platform.",
  },
  {
    q: 'Is there an earning cap?',
    a: "None. There's no limit to how many referrals you can have or how much you can earn. Some affiliates earn more than their day job from this.",
  },
]

export default function AffiliatesPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Nav */}
{/* Hero */}
      <section className="relative overflow-hidden pt-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-red-600/8 blur-[130px]" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 pb-16 pt-24 text-center sm:px-6 sm:pt-32 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-800/50 bg-green-950/40 px-4 py-1.5 text-sm text-green-300">
            💰 30% Recurring Commission — Paid Monthly
          </div>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
            AIBJJ Affiliate Program —{' '}
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Earn 30% Recurring
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            Share AIBJJ with your audience. Every time someone signs up for Pro, you earn 30% every single month they stay subscribed.
            No caps. No expiry. Real passive income from your BJJ network.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#apply"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-xl text-lg font-bold transition-colors"
            >
              Apply Now — It's Free →
            </a>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-zinc-700 hover:border-zinc-500 text-zinc-300 px-8 py-4 rounded-xl text-lg font-semibold transition-colors"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-zinc-800/60 bg-zinc-900/30 py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: '30%', label: 'Commission Rate', sub: 'per subscription' },
              { value: '$6/mo', label: 'Per Referral', sub: 'at $19.99 Pro price' },
              { value: '60 days', label: 'Cookie Duration', sub: 'long attribution window' },
              { value: '$50', label: 'Min. Payout', sub: 'PayPal or Stripe' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-black text-white mb-1">{s.value}</p>
                <p className="text-sm font-medium text-zinc-300">{s.label}</p>
                <p className="text-xs text-zinc-600">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-500 mb-2">How It Works</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Simple. Recurring. Yours.</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { step: '01', title: 'Get Your Unique Link', desc: 'Apply below and get approved. You receive a unique referral link and tracking code. Share it anywhere — Instagram, YouTube, your website, your gym.' },
              { step: '02', title: 'Someone Signs Up for Pro', desc: 'When someone clicks your link and signs up for AIBJJ Pro ($19.99/month), they are attributed to you. Cookie lasts 60 days after their first click.' },
              { step: '03', title: 'Earn 30% Every Month', desc: 'You earn $6/month for every active Pro subscriber you referred — forever. Payouts are monthly via PayPal or Stripe once you hit $50.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-zinc-700 bg-zinc-900 text-2xl font-black text-red-500">
                  {item.step}
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The math */}
      <section className="border-t border-zinc-800/60 py-20 bg-zinc-900/20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-500 mb-2">The Math</p>
            <h2 className="text-3xl font-bold text-white">What Could You Earn?</h2>
            <p className="mt-3 text-zinc-400">Based on Pro plan at $19.99/month — your 30% = <strong className="text-white">$6/month per referral</strong></p>
          </div>
          <div className="overflow-hidden rounded-xl border border-zinc-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-900">
                  <th className="px-6 py-4 text-left font-medium text-zinc-400">Active Referrals</th>
                  <th className="px-6 py-4 text-center font-medium text-zinc-400">Monthly Income</th>
                  <th className="px-6 py-4 text-center font-medium text-zinc-400">Annual Income</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/50">
                {[
                  [10, 60, 720],
                  [25, 150, 1800],
                  [50, 300, 3600],
                  [100, 600, 7200],
                  [250, 1500, 18000],
                  [500, 3000, 36000],
                ].map(([referrals, monthly, annual], i) => (
                  <tr key={referrals} className={i % 2 === 0 ? 'bg-zinc-950/50' : 'bg-zinc-900/30'}>
                    <td className="px-6 py-3 font-semibold text-zinc-200">{referrals} subscribers</td>
                    <td className="px-6 py-3 text-center text-green-400 font-semibold">${monthly.toLocaleString()}/mo</td>
                    <td className="px-6 py-3 text-center text-green-300 font-bold">${annual.toLocaleString()}/yr</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-xs text-zinc-600">No earning cap. No expiry. Compounds as your audience grows.</p>
        </div>
      </section>

      {/* Who should apply */}
      <section className="border-t border-zinc-800/60 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-500 mb-2">Who Should Apply</p>
            <h2 className="text-2xl font-bold text-white">Perfect for Anyone with a BJJ Audience</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { emoji: '🏫', title: 'BJJ Academy Owners', desc: 'Share with your students. If 30 sign up for Pro, you earn $180/month — just for sending one email.' },
              { emoji: '🥋', title: 'Coaches & Instructors', desc: 'Recommend AIBJJ to your students for supplemental training. You earn when they subscribe.' },
              { emoji: '📹', title: 'YouTubers & Content Creators', desc: 'Add your affiliate link in video descriptions. BJJ tutorial videos drive sustained traffic.' },
              { emoji: '📸', title: 'Instagram Pages', desc: 'BJJ Instagram accounts with engaged followings convert well. Link in bio drives consistent signups.' },
              { emoji: '🎙️', title: 'Podcast Hosts', desc: 'BJJ podcast sponsors that align with your audience. Mention AIBJJ naturally during episodes.' },
              { emoji: '✍️', title: 'BJJ Bloggers & Writers', desc: 'Add affiliate links to technique articles and BJJ guides. Evergreen content earns indefinitely.' },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
                <div className="text-2xl mb-2">{item.emoji}</div>
                <h3 className="font-bold text-white mb-1 text-sm">{item.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="border-t border-zinc-800/60 py-20 bg-zinc-900/20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-500 mb-2">Apply Now</p>
            <h2 className="text-3xl font-bold text-white">Join the Affiliate Program</h2>
            <p className="mt-3 text-zinc-400">Fill out the form below. We review applications and respond within 2–3 business days.</p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-8">
            <AffiliateForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-zinc-800/60 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.q} className="rounded-xl border border-zinc-800/60 bg-zinc-900/50 p-6">
                <h3 className="font-semibold text-zinc-100 mb-2">{faq.q}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800/60 bg-zinc-950 py-8">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-600">
          <Link href="/" className="font-black text-base"><span className="text-red-600">AI</span><span className="text-white">BJJ</span></Link>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link href="/" className="hover:text-zinc-400">Home</Link>
            <Link href="/pricing" className="hover:text-zinc-400">Pricing</Link>
            <Link href="/bjj-instructor-platform" className="hover:text-zinc-400">Creator Platform</Link>
            <Link href="/terms" className="hover:text-zinc-400">Terms</Link>
            <Link href="/privacy" className="hover:text-zinc-400">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
