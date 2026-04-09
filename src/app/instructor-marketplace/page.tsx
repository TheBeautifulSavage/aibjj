import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { db } from "@/lib/db";
import InstructorMarketplaceClient from "./InstructorMarketplaceClient";

export const metadata: Metadata = {
  title: "Sell BJJ Instructionals — Keep 90% of Every Sale | AIBJJ",
  description:
    "Join 500+ black belts earning on AIBJJ. Upload your BJJ instructional once, earn forever. 90% payout, 24hr approval, AI-powered discovery.",
  keywords: [
    "sell bjj instructionals",
    "bjj instructor platform",
    "bjj instructional marketplace",
    "bjj teaching online",
    "bjj black belt income",
  ],
};

interface CreatorProfile {
  id: string;
  userId: string;
  username?: string;
  displayName?: string;
  bio?: string;
  belt?: string;
  avatar?: string;
  user?: { name?: string; image?: string };
}

const COMPARISON = [
  { platform: "AIBJJ", cut: "90%", fee: "$0", ai: true, highlight: true },
  { platform: "BJJ Fanatics", cut: "~40%", fee: "$0", ai: false, highlight: false },
  { platform: "Gumroad", cut: "87–90%", fee: "$0", ai: false, highlight: false },
  { platform: "Teachable", cut: "80–95%", fee: "$39/mo", ai: false, highlight: false },
];

const HOW_IT_WORKS = [
  { step: "1", title: "Create your instructor profile", desc: "Free to set up. Add your bio, belt, and specialty.", icon: "👤" },
  { step: "2", title: "Upload your instructional", desc: "Video + PDF support. Our team approves within 24 hours.", icon: "📹" },
  { step: "3", title: "Set your price", desc: "Price between $15–$997. You're in full control.", icon: "💰" },
  { step: "4", title: "Get paid weekly via Stripe", desc: "Automatic payouts every week. 90% goes to you.", icon: "💳" },
];

export default async function InstructorMarketplacePage() {
  let instructors: CreatorProfile[] = [];
  try {
    instructors = await db.creatorProfile.findMany({
      where: {},
      orderBy: { createdAt: "desc" },
      take: 3,
    }) as CreatorProfile[];
  } catch {
    instructors = [];
  }

  const PLACEHOLDER_INSTRUCTORS = [
    { name: "First Instructor", belt: "Black Belt", specialty: "Guard Passing" },
    { name: "Coming Soon", belt: "Black Belt", specialty: "Leg Locks" },
    { name: "Apply Now", belt: "Any Belt", specialty: "Be First on AIBJJ!" },
  ];

  const showPlaceholders = instructors.length < 3;

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-red-950/30 py-20 px-4">
        <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
        <div className="mx-auto max-w-5xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-600/20 border border-red-600/30 px-4 py-1.5 text-sm text-red-400 mb-6">
            <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            Instructor Marketplace — Now Open
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Sell BJJ Instructionals —{" "}
            <span className="text-red-500">Keep 90% of Every Sale</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Join 500+ black belts earning on AIBJJ. Upload once, earn forever.
            AI-powered discovery puts your content in front of the right students.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {[
              { value: "90%", label: "Instructor Payout" },
              { value: "24hr", label: "Approval Time" },
              { value: "Global", label: "Reach" },
              { value: "AI", label: "Powered Discovery" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-red-400">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          <Link
            href="/auth/signup?role=creator"
            className="inline-flex items-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 transition-colors px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-red-900/30"
          >
            Start Selling Free →
          </Link>
          <p className="text-sm text-gray-500 mt-3">No monthly fees. No contract. Cancel anytime.</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-gray-900/80">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_IT_WORKS.map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-gray-800 bg-gray-800/50 p-6 text-center"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="text-xs font-bold text-red-500 uppercase tracking-widest mb-1">
                  Step {item.step}
                </div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Instructors */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-3">Featured Instructors</h2>
          <p className="text-gray-400 text-center mb-10">The first wave of AIBJJ instructors</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {showPlaceholders
              ? PLACEHOLDER_INSTRUCTORS.map((p, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-gray-800 bg-gray-800/50 p-6 text-center"
                  >
                    <div className="h-16 w-16 rounded-full bg-gray-700 mx-auto mb-4 flex items-center justify-center text-2xl">
                      🥋
                    </div>
                    <h3 className="font-semibold text-white">{p.name}</h3>
                    <p className="text-sm text-red-400 mt-1">{p.belt}</p>
                    <p className="text-xs text-gray-500 mt-1">{p.specialty}</p>
                    <div className="mt-3 text-xs bg-gray-700/50 rounded-full px-3 py-1 inline-block text-gray-400">
                      Coming Soon
                    </div>
                  </div>
                ))
              : instructors.map((inst) => (
                  <div
                    key={inst.id}
                    className="rounded-xl border border-gray-800 bg-gray-800/50 p-6 text-center"
                  >
                    <div className="h-16 w-16 rounded-full bg-gray-700 mx-auto mb-4 overflow-hidden flex items-center justify-center text-2xl">
                      {inst.avatar ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={inst.avatar} alt={inst.displayName || ""} className="h-full w-full object-cover" />
                      ) : (
                        "🥋"
                      )}
                    </div>
                    <h3 className="font-semibold text-white">{inst.displayName || inst.user?.name || "Instructor"}</h3>
                    {inst.belt && <p className="text-sm text-red-400 mt-1">{inst.belt} Belt</p>}
                    {inst.bio && <p className="text-xs text-gray-400 mt-1 line-clamp-2">{inst.bio}</p>}
                  </div>
                ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4 bg-gray-900/80">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-3">Why AIBJJ?</h2>
          <p className="text-gray-400 text-center mb-10">See how we compare to other platforms</p>
          <div className="overflow-x-auto rounded-xl border border-gray-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="px-6 py-4 text-left text-gray-400 font-medium">Platform</th>
                  <th className="px-6 py-4 text-center text-gray-400 font-medium">Instructor Cut</th>
                  <th className="px-6 py-4 text-center text-gray-400 font-medium">Monthly Fee</th>
                  <th className="px-6 py-4 text-center text-gray-400 font-medium">AI Discovery</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr
                    key={row.platform}
                    className={`border-b border-gray-800/50 ${
                      row.highlight ? "bg-red-950/20" : ""
                    }`}
                  >
                    <td className="px-6 py-4 font-semibold text-white">
                      {row.platform}
                      {row.highlight && (
                        <span className="ml-2 text-xs bg-red-600/20 text-red-400 border border-red-600/30 rounded-full px-2 py-0.5">
                          Best Value
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center font-bold text-green-400">{row.cut}</td>
                    <td className="px-6 py-4 text-center text-gray-300">{row.fee}</td>
                    <td className="px-6 py-4 text-center">
                      {row.ai ? (
                        <span className="text-green-400 text-lg">✅</span>
                      ) : (
                        <span className="text-gray-600 text-lg">❌</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Application Form (client) */}
      <InstructorMarketplaceClient />
    </div>
  );
}
