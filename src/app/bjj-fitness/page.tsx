import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BJJ Fitness: Get in the Best Shape of Your Life on the Mats | AIBJJ",
  description: "BJJ fitness is unlike any other workout. Learn what physical attributes matter most in jiu-jitsu and how to develop the strength, cardio, and flexibility to dominate.",
};

export default function BJJFitnessPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "BJJ Fitness: Get in the Best Shape of Your Life on the Mats",
            description: "The physical demands of Brazilian Jiu-Jitsu and how to develop BJJ-specific fitness: strength, cardio, flexibility, and sport-specific conditioning.",
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
        <h1 className="text-4xl font-black sm:text-5xl">BJJ Fitness: Get in the Best Shape of Your Life on the Mats</h1>
        <p className="mt-4 text-xl text-zinc-400">BJJ training is one of the most complete fitness activities available. A single hour of live sparring burns 800-1200 calories while developing full-body strength, cardiovascular endurance, flexibility, and explosive power simultaneously. No gym machine replicates it.</p>
        <div className="mt-8 flex gap-4">
          <Link href="/auth/signup" className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700">Try AIBJJ Free</Link>
          <Link href="/pricing" className="rounded-lg border border-zinc-700 px-6 py-3 font-semibold text-zinc-300 hover:border-zinc-500">See Pricing</Link>
        </div>
      </div>

      {/* Content */}
      <article className="mx-auto max-w-4xl px-6 pb-20 prose prose-invert prose-zinc max-w-none">
        <h2 className="text-2xl font-bold text-white">What Makes BJJ Fitness Unique</h2>
        <p className="text-zinc-300">Most exercise is either cardio or strength. BJJ is both simultaneously — plus flexibility, coordination, mental problem-solving, and emotional regulation under physical stress. When you're 5 minutes into a hard round, trying to escape a mount, your heart rate is at 85% max and your brain is computing geometry and leverage while your body executes technique. Nothing else trains all of this at once.</p>
        <p className="text-zinc-300">The result: BJJ practitioners are often some of the most well-rounded athletes in any gym. They're not just fit — they're functionally fit in ways that transfer to real life.</p>

        <h2 className="text-2xl font-bold text-white mt-10">The Physical Demands of BJJ</h2>
        <ul className="text-zinc-300 space-y-3">
          <li>
            <strong className="text-white">Cardiovascular endurance:</strong>
            <p>A 5-minute BJJ round can take you from 60% to 95% of max heart rate multiple times. Building your aerobic base means you can sustain higher intensity for longer and recover between rounds faster.</p>
          </li>
          <li>
            <strong className="text-white">Grip strength:</strong>
            <p>Your grip is your primary connection to your opponent. Weak grips mean lost underhooks, failed collar ties, and escaped submissions. Grip training is specific BJJ conditioning that most gym programs ignore.</p>
          </li>
          <li>
            <strong className="text-white">Core stability:</strong>
            <p>Every position in BJJ demands core engagement — maintaining guard, bridging from bottom, applying pressure from top. BJJ training develops functional core strength that crunches never build.</p>
          </li>
          <li>
            <strong className="text-white">Hip mobility and flexibility:</strong>
            <p>Guard play, triangle setups, hip escapes, and guard retention all demand hip flexibility. BJJ naturally develops this over time, but deliberate mobility work accelerates it.</p>
          </li>
          <li>
            <strong className="text-white">Explosive strength:</strong>
            <p>Bridging from bottom, shooting for takedowns, standing up against pressure — BJJ demands short bursts of maximum power output embedded in sustained grappling.</p>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-10">Supplemental Training for BJJ Performance</h2>
        <p className="text-zinc-300">Training on the mat builds most of what you need. Supplement intelligently:</p>
        <ul className="text-zinc-300 space-y-2">
          <li><strong>Strength training:</strong> Compound lifts (deadlift, squat, bench, row) 2-3x per week to build the base. Keep reps moderate — strength endurance matters more than max strength</li>
          <li><strong>Conditioning:</strong> Kettlebell circuits, rowing, cycling — anything that builds aerobic capacity without joint stress that competes with mat time</li>
          <li><strong>Mobility:</strong> 10-15 minutes daily of hip flexor, shoulder, and thoracic mobility work prevents injury and improves guard play dramatically</li>
          <li><strong>Recovery:</strong> Sleep is the highest-ROI recovery tool. 7-9 hours consistently matters more than ice baths and supplements combined</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-10">Tracking Your BJJ Fitness Progress</h2>
        <p className="text-zinc-300">Fitness improvements in BJJ show up in ways that are hard to track without a journal. Log these after training:</p>
        <ul className="text-zinc-300 space-y-2">
          <li>How many rounds did you do and how did you feel in the later ones?</li>
          <li>Are you recovering faster between rounds than you were 2 months ago?</li>
          <li>Are you getting tired in the same positions you used to gas out in?</li>
        </ul>
        <p className="text-zinc-300">AIBJJ's <Link href="/bjj-training-journal" className="text-red-400 hover:text-red-300">training journal</Link> lets you log these observations over time. Combined with the <Link href="/bjj-progress-tracker" className="text-red-400 hover:text-red-300">progress tracker</Link> and <Link href="/ai-bjj-coach" className="text-red-400 hover:text-red-300">AI coach</Link>, you'll have a clear picture of how your BJJ fitness is evolving alongside your technique.</p>

        <h2 className="text-2xl font-bold text-white mt-10">The Long-Term BJJ Body</h2>
        <p className="text-zinc-300">Practitioners who train BJJ consistently for years develop a distinctive fitness: lean but strong, flexible but powerful, with the cardiovascular capacity of an athlete half their age. Black belts in their 40s and 50s regularly outperform sedentary people decades younger. That's what consistent BJJ training builds over time. Start now — the compound returns of consistent training are unlike anything else.</p>
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
