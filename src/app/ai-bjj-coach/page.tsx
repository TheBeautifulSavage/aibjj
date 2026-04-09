import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI BJJ Coach: How Artificial Intelligence Is Transforming Jiu-Jitsu Training | AIBJJ",
  description: "Discover how an AI BJJ coach analyzes your training, identifies weaknesses, and builds personalized game plans faster than any human coach can alone.",
};

export default function AIBJJCoachPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "AI BJJ Coach: How Artificial Intelligence Is Transforming Jiu-Jitsu Training",
            description: "How AI coaching technology is changing the way Brazilian Jiu-Jitsu athletes train, track progress, and develop their game.",
            author: { "@type": "Organization", name: "AIBJJ" },
            publisher: { "@type": "Organization", name: "AIBJJ", url: "https://aibjj.com" },
          }),
        }}
      />

      {/* Nav */}
      <nav className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>

      {/* Hero */}
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-black sm:text-5xl">AI BJJ Coach: How Artificial Intelligence Is Transforming Jiu-Jitsu Training</h1>
        <p className="mt-4 text-xl text-zinc-400">Most BJJ athletes train hard but progress slowly — not because they lack effort, but because they lack direction. An AI BJJ coach changes that by giving every practitioner elite-level analysis and personalized feedback, regardless of their gym or belt level.</p>
        <div className="mt-8 flex gap-4">
          <Link href="/auth/signup" className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700">Try AIBJJ Free</Link>
          <Link href="/pricing" className="rounded-lg border border-zinc-700 px-6 py-3 font-semibold text-zinc-300 hover:border-zinc-500">See Pricing</Link>
        </div>
      </div>

      {/* Content */}
      <article className="mx-auto max-w-4xl px-6 pb-20 prose prose-invert prose-zinc max-w-none">
        <h2 className="text-2xl font-bold text-white">What Does an AI BJJ Coach Actually Do?</h2>
        <p className="text-zinc-300">Traditional coaching is limited by time. Even the best black belt can only observe so many rolls, remember so many details, and give feedback during a 90-minute class. An AI coach operates differently — it works from data you feed it: training logs, technique notes, competition results, and session reflections.</p>
        <p className="text-zinc-300">AIBJJ's AI coach analyzes patterns in your training to answer questions like: Which positions are you getting stuck in most? Are you drilling techniques you never use in sparring? How does your submission rate change after competition? These insights take a human coach months to intuitively develop — an AI surfaces them in seconds.</p>

        <h2 className="text-2xl font-bold text-white mt-10">Why Traditional Coaching Has a Ceiling</h2>
        <p className="text-zinc-300">Even world-class instructors operate with constraints:</p>
        <ul className="text-zinc-300 space-y-2">
          <li><strong>Observation bias:</strong> They can only watch a few people at once during open mat</li>
          <li><strong>Memory limits:</strong> They can't recall every detail of your training over 6 months</li>
          <li><strong>Availability:</strong> Private lessons are expensive and rare for most students</li>
          <li><strong>Generalization:</strong> Class curricula are built for the group, not for you</li>
        </ul>
        <p className="text-zinc-300">AI coaching doesn't replace your professor — it fills the massive gap between classes. You get analysis, game plan recommendations, and technique suggestions between sessions so you walk into each class already knowing what to work on.</p>

        <h2 className="text-2xl font-bold text-white mt-10">How AIBJJ's AI Coach Works</h2>
        <p className="text-zinc-300">After each training session, you log what you worked on, what went well, and where you got stuck. AIBJJ's AI processes this data over time and surfaces actionable insights:</p>
        <ul className="text-zinc-300 space-y-2">
          <li><strong>Weakness identification:</strong> "You've noted getting passed from half guard 9 times in the last 3 weeks — here are 3 adjustments to try"</li>
          <li><strong>Game plan building:</strong> Recommends position-by-position strategies based on your submission rate data</li>
          <li><strong>Technique prioritization:</strong> Tells you which moves to drill based on your actual game, not just what's trendy</li>
          <li><strong>Progress tracking:</strong> Shows your improvement over weeks and months so you can see real growth</li>
        </ul>
        <p className="text-zinc-300">This is available 24/7. At midnight before a tournament, you can ask your AI coach to review your game plan. At 6 AM before training, you can check what you were working on last week. The coaching never stops.</p>

        <h2 className="text-2xl font-bold text-white mt-10">Who Benefits Most from AI BJJ Coaching?</h2>
        <p className="text-zinc-300">Honestly, every level benefits differently:</p>
        <ul className="text-zinc-300 space-y-2">
          <li><strong>White and blue belts:</strong> AI helps structure the overwhelming amount of information at early stages and identifies which fundamentals to prioritize</li>
          <li><strong>Purple and brown belts:</strong> The most impactful use — AI helps you systematize your A-game and prepare for competition with precision</li>
          <li><strong>Competitors:</strong> Pre-tournament game plan building, opponent-style analysis, and post-competition review</li>
          <li><strong>Hobbyists:</strong> Makes training more efficient for people with limited mat time — maximize every session</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-10">The Future of BJJ Training Is Data-Driven</h2>
        <p className="text-zinc-300">The best athletes in every sport now use data to gain edges that pure intuition can't provide. MMA fighters study opponents through analytics. NBA teams use shot data to optimize offense. BJJ has lagged behind — until now.</p>
        <p className="text-zinc-300">AIBJJ brings this same level of intelligent coaching to every practitioner, from the weekend warrior to the regional champion. Your <Link href="/bjj-techniques" className="text-red-400 hover:text-red-300">technique library</Link>, <Link href="/bjj-training-journal" className="text-red-400 hover:text-red-300">training journal</Link>, and AI coach all work together in one platform to give you the clearest picture of your BJJ development possible.</p>
        <p className="text-zinc-300">Ready to train smarter? The athletes who win consistently aren't just the hardest workers — they're the ones with the clearest understanding of their own game. That's what an AI BJJ coach gives you.</p>
      </article>

      {/* Bottom CTA */}
      <div className="bg-zinc-900 border-t border-zinc-800 py-16 text-center">
        <h2 className="text-3xl font-black">Ready to level up your jiu-jitsu?</h2>
        <p className="mt-3 text-zinc-400">AI coaching, technique library, training journal — all in one place.</p>
        <Link href="/auth/signup" className="mt-6 inline-block rounded-lg bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700">Start Free Today</Link>
      </div>
    </div>
  );
}
