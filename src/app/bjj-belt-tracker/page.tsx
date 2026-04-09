import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BJJ Belt Progression Tracker: Know Exactly Where You Stand | AIBJJ",
  description: "Track your BJJ belt progression with clear competency benchmarks. Know what skills each belt requires and measure how close you are to your next promotion.",
};

export default function BJJBeltTrackerPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "BJJ Belt Progression Tracker: Know Exactly Where You Stand",
            description: "Understanding BJJ belt requirements and how to use a progression tracker to measure your development and readiness for promotion.",
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
        <h1 className="text-4xl font-black sm:text-5xl">BJJ Belt Progression Tracker: Know Exactly Where You Stand</h1>
        <p className="mt-4 text-xl text-zinc-400">BJJ belt promotions can feel mysterious — your professor decides when you're ready, and you often don't know why. A belt progression tracker demystifies the process by mapping your actual skills against what each belt requires, so you know exactly where you stand.</p>
        <div className="mt-8 flex gap-4">
          <Link href="/auth/signup" className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700">Try AIBJJ Free</Link>
          <Link href="/pricing" className="rounded-lg border border-zinc-700 px-6 py-3 font-semibold text-zinc-300 hover:border-zinc-500">See Pricing</Link>
        </div>
      </div>

      {/* Content */}
      <article className="mx-auto max-w-4xl px-6 pb-20 prose prose-invert prose-zinc max-w-none">
        <h2 className="text-2xl font-bold text-white">Why BJJ Belt Progression Feels Mysterious</h2>
        <p className="text-zinc-300">Unlike traditional martial arts with formal grading criteria, BJJ belt promotions are largely at the instructor's discretion. Different academies have different standards. Some promote based on competition results, others on technical ability, others on mat time and attitude.</p>
        <p className="text-zinc-300">This ambiguity can be frustrating — especially when you've been training for two years and don't know if you're close to blue belt or still far away. A belt progression tracker doesn't replace your professor's judgment, but it does give you a clear framework for self-assessment.</p>

        <h2 className="text-2xl font-bold text-white mt-10">What Each BJJ Belt Generally Requires</h2>
        <ul className="text-zinc-300 space-y-4">
          <li>
            <strong className="text-white">White Belt (0-2 years):</strong>
            <p>Survival mode. Learn to escape mount, side control, and back. Develop basic closed guard, understand positional hierarchy. Show consistency in showing up. Blue belt is around the corner when you stop being helpless.</p>
          </li>
          <li>
            <strong className="text-white">Blue Belt (2-4 years):</strong>
            <p>Solid fundamentals. Reliable guard (one or two types), 3-5 submissions you can hit from live positions, consistent guard passing, good defensive base. Can hold their own with newer white belts.</p>
          </li>
          <li>
            <strong className="text-white">Purple Belt (4-6 years):</strong>
            <p>Defined A-game. Strong in specific positions, beginning to specialize. Can teach techniques effectively. Competes or demonstrates technical depth. Often the biggest leap in BJJ.</p>
          </li>
          <li>
            <strong className="text-white">Brown Belt (6-9 years):</strong>
            <p>Near-complete game. High-level understanding of all positions, dominant over most colored belts, beginning to think about the meta-game. Close to black belt quality.</p>
          </li>
          <li>
            <strong className="text-white">Black Belt (10+ years):</strong>
            <p>Complete practitioner. Can adapt to any style, any size, any situation. Deep technical knowledge, typically excellent at teaching. This is the beginning, not the end.</p>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-10">How to Use a Belt Progression Tracker</h2>
        <p className="text-zinc-300">A good progression tracker helps you self-assess against competency benchmarks rather than just counting months on the mat. For each belt level, ask yourself:</p>
        <ul className="text-zinc-300 space-y-2">
          <li>Can I reliably escape from the dominant positions at my level?</li>
          <li>Do I have submissions I can hit consistently from live sparring (not just drilling)?</li>
          <li>Am I competitive with training partners who hold my target belt?</li>
          <li>Do I understand WHY techniques work, or just HOW to perform them?</li>
        </ul>
        <p className="text-zinc-300">Log your answers in AIBJJ's <Link href="/bjj-training-journal" className="text-red-400 hover:text-red-300">training journal</Link> and track them against your <Link href="/bjj-progress-tracker" className="text-red-400 hover:text-red-300">progress data</Link> over time. Patterns emerge that tell you clearly where you're advancing and where you still have work to do.</p>

        <h2 className="text-2xl font-bold text-white mt-10">Focus on Skills, Not Stripes</h2>
        <p className="text-zinc-300">The healthiest relationship with belt progression is to focus entirely on skill development and let promotions follow. Practitioners who chase belts often stagnate — they're optimizing for the wrong goal. Practitioners who chase skills get promoted faster because they're genuinely improving.</p>
        <p className="text-zinc-300">Use the belt tracker as a compass, not a destination. Let it show you which technical areas need work, then use the <Link href="/ai-bjj-coach" className="text-red-400 hover:text-red-300">AI coach</Link> to build a training plan around those gaps. The belt will come — focus on becoming the practitioner who deserves it.</p>
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
