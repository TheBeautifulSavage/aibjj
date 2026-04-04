import Link from "next/link";
import {
  DollarSign,
  Users,
  TrendingUp,
  Share2,
  CheckCircle,
  ArrowRight,
  Copy,
  BarChart3,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Affiliate Program – AIBJJ",
  description:
    "Earn 30% recurring commission promoting the AI-powered BJJ platform. Share your link, earn every month.",
};

const STEPS = [
  {
    number: "01",
    title: "Sign Up",
    description:
      "Create your AIBJJ account and apply for the affiliate program from your dashboard. Approval is instant for existing members.",
  },
  {
    number: "02",
    title: "Get Your Link",
    description:
      "You&apos;ll receive a unique referral link and tracking code. Share it anywhere — Instagram, YouTube, your academy, or word of mouth.",
  },
  {
    number: "03",
    title: "Earn Every Month",
    description:
      "You earn 30% of every subscription payment from people you refer — for as long as they stay subscribed. No cap, no expiry.",
  },
];

const EARNING_EXAMPLES = [
  { referrals: 10, monthly: 45, annual: 540 },
  { referrals: 50, monthly: 225, annual: 2700 },
  { referrals: 100, monthly: 450, annual: 5400 },
  { referrals: 500, monthly: 2250, annual: 27000 },
];

const FAQS = [
  {
    q: "How much do I earn?",
    a: "30% recurring commission on every subscription payment. If someone signs up for Pro at $14.99/month, you earn $4.50/month for as long as they're subscribed.",
  },
  {
    q: "When do I get paid?",
    a: "Payouts are processed monthly via Stripe direct deposit. Minimum payout threshold is $25.",
  },
  {
    q: "How long does the cookie last?",
    a: "90 days. If someone clicks your link and signs up any time within 90 days, the sale is attributed to you.",
  },
  {
    q: "Can I promote as an academy owner?",
    a: "Absolutely. Many of our best affiliates are academy owners who share AIBJJ with their students. You earn on every student that subscribes.",
  },
  {
    q: "Is there a limit to how much I can earn?",
    a: "No. There&apos;s no cap. The more people you refer, the more you earn — every single month.",
  },
  {
    q: "What promotional materials are available?",
    a: "We provide banners, social media graphics, email templates, and talking points. Everything you need to promote with confidence.",
  },
];

export default function AffiliatesPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-100">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/60 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-1 text-xl font-black tracking-tight">
            <span className="text-red-600">AI</span>
            <span className="text-white">BJJ</span>
          </Link>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/auth/signin">Sign In</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/auth/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden pt-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-red-600/10 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 pb-16 pt-24 text-center sm:px-6 sm:pt-32 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-1.5 text-sm text-zinc-300">
            <DollarSign className="h-4 w-4 text-green-400" />
            30% Recurring Commission
          </div>
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
            Earn While You Train.
            <br />
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Every Single Month.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            Share AIBJJ with your students, followers, or training partners and earn 30% of every subscription — recurring, for life. No cap. No expiry.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="w-full sm:w-auto px-10 bg-red-600 hover:bg-red-700 text-white" asChild>
              <Link href="/auth/signup">
                Apply Now — It&apos;s Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-zinc-800/60 bg-zinc-950/80 py-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { icon: DollarSign, label: "Commission Rate", value: "30%", sub: "recurring" },
              { icon: Users, label: "Cookie Window", value: "90 days", sub: "attribution" },
              { icon: TrendingUp, label: "Payout", value: "Monthly", sub: "via Stripe" },
              { icon: Zap, label: "Minimum", value: "$25", sub: "to withdraw" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <s.icon className="mx-auto mb-2 h-5 w-5 text-red-500" />
                <p className="text-2xl font-black text-zinc-100">{s.value}</p>
                <p className="text-xs text-zinc-500">{s.label} · {s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-500">How It Works</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Three steps to passive income</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {STEPS.map((step, idx) => (
              <div key={step.number} className="relative text-center">
                {idx < STEPS.length - 1 && (
                  <div className="absolute right-0 top-8 hidden h-px w-full translate-x-1/2 bg-gradient-to-r from-zinc-700 to-transparent md:block" />
                )}
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 text-2xl font-black text-red-500">
                  {step.number}
                </div>
                <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Earnings calculator */}
      <section className="border-t border-zinc-800/60 py-24 sm:py-32 bg-zinc-950/40">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-500">The Math</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">What could you earn?</h2>
            <p className="mt-4 text-zinc-400">Based on Pro plan at $14.99/month — your 30% = $4.50/referral/month</p>
          </div>
          <div className="overflow-hidden rounded-xl border border-zinc-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-900/80">
                  <th className="px-6 py-3 text-left font-medium text-zinc-400">Referrals</th>
                  <th className="px-6 py-3 text-center font-medium text-zinc-400">Monthly Earnings</th>
                  <th className="px-6 py-3 text-center font-medium text-zinc-400">Annual Earnings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/50">
                {EARNING_EXAMPLES.map((row, i) => (
                  <tr key={row.referrals} className={i % 2 === 0 ? "bg-zinc-950/50" : "bg-zinc-900/30"}>
                    <td className="px-6 py-3 font-semibold text-zinc-200">{row.referrals} subscribers</td>
                    <td className="px-6 py-3 text-center text-green-400 font-semibold">${row.monthly}/mo</td>
                    <td className="px-6 py-3 text-center text-green-300 font-bold">${row.annual.toLocaleString()}/yr</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-xs text-zinc-600">Annual plan referrals earn even more. No earning cap.</p>
        </div>
      </section>

      {/* What you get */}
      <section className="border-t border-zinc-800/60 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-500">What You Get</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Everything you need to promote</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Share2, title: "Unique Referral Link", desc: "Track every click and conversion with your personal affiliate dashboard." },
              { icon: Copy, title: "Promo Materials", desc: "Banners, social graphics, email templates, and talking points ready to use." },
              { icon: BarChart3, title: "Real-Time Analytics", desc: "See clicks, signups, and earnings updated in real time from your dashboard." },
              { icon: DollarSign, title: "30% Recurring", desc: "Not a one-time payout. You earn every month for as long as your referrals stay subscribed." },
              { icon: Users, title: "90-Day Cookie", desc: "Long attribution window means you get credit even if someone signs up weeks later." },
              { icon: CheckCircle, title: "Instant Approval", desc: "Existing AIBJJ members get instant access. New signups are approved within 24 hours." },
            ].map((item) => (
              <Card key={item.title} className="border-zinc-800/60 bg-zinc-900/50">
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-red-600/10 text-red-500">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-400">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who&apos;s it for */}
      <section className="border-t border-zinc-800/60 py-16 bg-zinc-950/40">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold mb-8">Perfect for</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "BJJ Academy Owners",
              "Instructors & Coaches",
              "Content Creators",
              "Podcast Hosts",
              "YouTubers",
              "Instagram Influencers",
              "Competitors",
              "BJJ Bloggers",
            ].map((tag) => (
              <span key={tag} className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-zinc-800/60 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">FAQ</h2>
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

      {/* CTA */}
      <section className="border-t border-zinc-800/60 py-24">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="text-3xl font-black sm:text-4xl mb-4">
            Start earning{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              this month
            </span>
          </h2>
          <p className="text-zinc-400 mb-8">
            Sign up for free, get your affiliate link, and start sharing. You could earn your first commission within days.
          </p>
          <Button size="lg" className="px-12 bg-red-600 hover:bg-red-700 text-white" asChild>
            <Link href="/auth/signup">
              Join the Affiliate Program
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <p className="mt-4 text-xs text-zinc-600">Free to join · No approval wait for members · Paid monthly</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800/60 bg-zinc-950 py-8">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="text-sm text-zinc-600">&copy; {new Date().getFullYear()} AIBJJ. All rights reserved.</p>
          <div className="mt-3 flex justify-center gap-6">
            <Link href="/" className="text-sm text-zinc-500 hover:text-zinc-300">Home</Link>
            <Link href="/pricing" className="text-sm text-zinc-500 hover:text-zinc-300">Pricing</Link>
            <Link href="/academies" className="text-sm text-zinc-500 hover:text-zinc-300">For Academies</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
