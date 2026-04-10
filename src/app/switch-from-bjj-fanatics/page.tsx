import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BJJ Fanatics Alternative for Instructors — Keep 85% on AIBJJ",
  description:
    "Stop giving BJJ Fanatics 60% of your revenue. AIBJJ pays instructors 85% on every sale. Free migration help, you own your student list, full analytics. Switch today.",
  keywords: [
    "bjj fanatics alternative for instructors",
    "sell bjj instructionals keep more money",
    "bjj instructor platform better than fanatics",
    "bjj fanatics competitor",
    "sell bjj instructionals 85 percent",
    "bjj fanatics payout percentage",
  ],
};

const PAIN_POINTS = [
  {
    icon: "📊",
    title: "No Analytics",
    desc: "You can't see who's watching, what they rewatch, or what questions they have. You're flying blind.",
  },
  {
    icon: "📧",
    title: "They Own Your Audience",
    desc: "BJJ Fanatics controls your student list. If they shut you down or change the deal, you lose everything.",
  },
  {
    icon: "💸",
    title: "60% Revenue Cut",
    desc: "Most instructors keep only 35–40% of sales. They take more than half of what you earned.",
  },
  {
    icon: "🚫",
    title: "No Pricing Control",
    desc: "They run flash sales and discounts without your approval, devaluing your brand and content.",
  },
];

const AIBJJ_BENEFITS = [
  {
    icon: "💰",
    title: "85% Payout",
    desc: "You keep $85 of every $100 sold. That's the highest payout in BJJ.",
  },
  {
    icon: "👥",
    title: "Own Your Students",
    desc: "Full access to your student list. Email them, offer discounts, build a community — they're yours.",
  },
  {
    icon: "📈",
    title: "Real Analytics",
    desc: "See exactly who's watching, completion rates, and which lessons get rewatched most.",
  },
  {
    icon: "🤖",
    title: "AI-Powered Discovery",
    desc: "Our AI recommends your courses to students based on their game, goals, and skill gaps.",
  },
  {
    icon: "🎯",
    title: "Set Your Own Prices",
    desc: "Price between $15–$997. Run your own sales. No one touches your pricing without permission.",
  },
  {
    icon: "🚀",
    title: "Free Migration Help",
    desc: "Our team will help you import your existing course catalog and get everything set up right.",
  },
];

export default function SwitchFromBJJFanaticsPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-red-950/30 py-20 px-4">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-600/20 border border-red-600/30 px-4 py-1.5 text-sm text-red-400 mb-6">
            <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            BJJ Fanatics Alternative — Free Migration Help
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Stop Giving BJJ Fanatics{" "}
            <span className="text-red-500">50% of Your Revenue</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            You create the content. You do the hard work. Why should they keep most of the money?
            AIBJJ pays you <strong className="text-white">85%</strong> on every sale.
          </p>

          <Link
            href="/auth/signup?role=creator"
            className="inline-flex items-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 transition-colors shadow-lg shadow-red-900/30"
          >
            Switch to AIBJJ — Free Migration Help →
          </Link>

          <p className="mt-4 text-sm text-gray-500">
            No monthly fees. No contracts. Free to join.
          </p>
        </div>
      </section>

      {/* The Math Section */}
      <section className="py-20 px-4 bg-gray-900/80">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Run the Numbers
          </h2>
          <p className="text-gray-400 text-center mb-12 text-lg">
            If you sell $100,000/year in instructionals...
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {/* BJJ Fanatics column */}
            <div className="rounded-2xl border border-gray-700 bg-gray-800/50 p-8">
              <div className="text-center mb-6">
                <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">BJJ Fanatics</p>
                <p className="text-3xl font-bold text-gray-300">~40% payout</p>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Revenue generated</span>
                  <span className="font-semibold">$100,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Their cut (60%)</span>
                  <span className="font-semibold text-red-400">−$60,000</span>
                </div>
                <div className="border-t border-gray-700 pt-3 flex justify-between text-lg font-bold">
                  <span>You keep</span>
                  <span className="text-red-400">$40,000</span>
                </div>
              </div>
            </div>

            {/* AIBJJ column */}
            <div className="rounded-2xl border-2 border-red-600/50 bg-red-950/20 p-8 relative overflow-hidden">
              <div className="absolute top-3 right-3">
                <span className="text-xs bg-red-600 text-white rounded-full px-2 py-0.5 font-semibold">
                  AIBJJ
                </span>
              </div>
              <div className="text-center mb-6">
                <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">AIBJJ</p>
                <p className="text-3xl font-bold text-green-400">85% payout</p>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Revenue generated</span>
                  <span className="font-semibold">$100,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Platform fee (15%)</span>
                  <span className="font-semibold text-gray-400">−$15,000</span>
                </div>
                <div className="border-t border-red-800/50 pt-3 flex justify-between text-lg font-bold">
                  <span>You keep</span>
                  <span className="text-green-400">$85,000</span>
                </div>
              </div>
            </div>
          </div>

          {/* The difference */}
          <div className="rounded-2xl bg-gradient-to-r from-green-950/40 to-green-900/20 border border-green-700/40 p-8 text-center">
            <p className="text-gray-300 text-lg mb-2">AIBJJ advantage per year</p>
            <p className="text-5xl sm:text-6xl font-black text-green-400">+$45,000</p>
            <p className="text-gray-400 mt-3">
              That's an extra $45,000 in your pocket every year — just by switching platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-4">
            Why Instructors Are Leaving BJJ Fanatics
          </h2>
          <p className="text-gray-400 text-center mb-12">
            These aren't minor complaints. They're real business problems.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {PAIN_POINTS.map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-gray-800 bg-gray-800/30 p-6 flex gap-4"
              >
                <span className="text-3xl flex-shrink-0">{p.icon}</span>
                <div>
                  <h3 className="font-bold text-white mb-1">{p.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What AIBJJ gives */}
      <section className="py-20 px-4 bg-gray-900/80">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-4">
            What You Get on AIBJJ
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Built specifically for BJJ instructors who want to build real businesses.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AIBJJ_BENEFITS.map((b) => (
              <div
                key={b.title}
                className="rounded-xl border border-gray-800 bg-gray-800/30 p-6"
              >
                <span className="text-3xl mb-3 block">{b.icon}</span>
                <h3 className="font-bold text-white mb-2">{b.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-red-950/20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Switch to AIBJJ in Under 24 Hours
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Our team will help you migrate your entire course catalog for free.
            Import your titles, descriptions, and lesson lists — and start keeping more money immediately.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/auth/signup?role=creator"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 transition-colors"
            >
              Switch to AIBJJ — Free Migration Help →
            </Link>
            <Link
              href="/instructor-marketplace"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-700 hover:border-gray-600 text-gray-300 font-semibold text-lg px-8 py-4 transition-colors"
            >
              Learn More
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span>✓ Free to join</span>
            <span>✓ No monthly fees</span>
            <span>✓ No contracts</span>
            <span>✓ Free migration help</span>
            <span>✓ 85% payout from day one</span>
          </div>
        </div>
      </section>
    </div>
  );
}
