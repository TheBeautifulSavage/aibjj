import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BJJ Game Plan Builder: Create Your Personalized Position-by-Position Strategy | AIBJJ",
  description: "Build a position-by-position BJJ game plan that matches your strengths. Stop winging it in sparring — create a systematic strategy with AIBJJ's game plan builder.",
};

export default function BJJGamePlanBuilderPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "BJJ Game Plan Builder: Create Your Personalized Position-by-Position Strategy",
            description: "How to build a BJJ game plan that flows position-by-position based on your strengths, technique success rates, and physical attributes.",
            author: { "@type": "Organization", name: "AIBJJ" },
            publisher: { "@type": "Organization", name: "AIBJJ", url: "https://aibjj.com" },
          }),
        }}
      />

      {/* Nav */}
{/* Hero */}
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-black sm:text-5xl">BJJ Game Plan Builder: Create Your Personalized Position-by-Position Strategy</h1>
        <p className="mt-4 text-xl text-zinc-400">Top competitors don't walk onto the mat hoping something works. They have a game plan — a sequence of positions and techniques that flows from standing to finish. Building yours is one of the highest-leverage things you can do for your BJJ.</p>
        <div className="mt-8 flex gap-4">
          <Link href="/auth/signup" className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700">Try AIBJJ Free</Link>
          <Link href="/pricing" className="rounded-lg border border-zinc-700 px-6 py-3 font-semibold text-zinc-300 hover:border-zinc-500">See Pricing</Link>
        </div>
      </div>

      {/* Content */}
      <article className="mx-auto max-w-4xl px-6 pb-20 prose prose-invert prose-zinc max-w-none">
        <h2 className="text-2xl font-bold text-white">What Is a BJJ Game Plan?</h2>
        <p className="text-zinc-300">A game plan is your personal decision tree on the mat. It starts with your preferred way to engage (clinch, guard pull, level change) and branches through every likely position — where you go from guard, what you do when you pass, how you finish from dominant positions.</p>
        <p className="text-zinc-300">Without a game plan, you react. With one, you initiate. That mental shift alone dramatically changes how you perform under pressure — in competition and in tough sparring rounds.</p>

        <h2 className="text-2xl font-bold text-white mt-10">The Four Layers of a Complete BJJ Game Plan</h2>
        <ul className="text-zinc-300 space-y-4">
          <li>
            <strong className="text-white">1. Standing (Takedowns & Guard Pulls):</strong>
            <p>What's your preferred entry? Single leg, double leg, judo throw, or guard pull? Know this before you ever grip up. Your standing game sets up everything below.</p>
          </li>
          <li>
            <strong className="text-white">2. Guard Game (When on Bottom):</strong>
            <p>Which guard do you play? Closed guard, half guard, butterfly, De La Riva? What are your primary sweeps and submissions from each? What's your backup if your main guard gets neutralized?</p>
          </li>
          <li>
            <strong className="text-white">3. Passing (When on Top):</strong>
            <p>How do you break posture and pass? Pressure passing, speed passing, or leg drag? Where do you go after you pass — mount, side control, or back?</p>
          </li>
          <li>
            <strong className="text-white">4. Finishing (From Dominant Positions):</strong>
            <p>What are your primary submissions from mount, back, and side control? Do you have a clear path from passing to a finish?</p>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-10">Building Your Game Plan Based on Your Strengths</h2>
        <p className="text-zinc-300">The biggest mistake practitioners make when building a game plan is copying someone else's. Rogerio Almeida's game plan doesn't work for a 140 lb flexible guard player. Your game plan should be built on what YOU do well.</p>
        <p className="text-zinc-300">This is where AIBJJ's <Link href="/bjj-technique-tracker" className="text-red-400 hover:text-red-300">technique tracker</Link> and <Link href="/ai-bjj-coach" className="text-red-400 hover:text-red-300">AI coach</Link> become powerful. By analyzing your training data — which submissions you hit most, which guards you play from, which passes work — the AI can recommend a game plan built around your actual strengths rather than generic advice.</p>

        <h2 className="text-2xl font-bold text-white mt-10">Sample Game Plan Structure</h2>
        <p className="text-zinc-300">Here's an example of what a simple, complete game plan looks like:</p>
        <ul className="text-zinc-300 space-y-2">
          <li><strong>Standing:</strong> Grip fight → single leg entry → finish or guard pull to closed guard</li>
          <li><strong>Closed guard:</strong> Hip bump sweep → mount OR armbar OR triangle choke setup</li>
          <li><strong>Half guard (bottom):</strong> Deep half entry → back take OR sweep to top</li>
          <li><strong>Top passing:</strong> Knee slice → side control → move to mount</li>
          <li><strong>Mount finish:</strong> Arm bar → RNC if they roll → back attack</li>
        </ul>
        <p className="text-zinc-300">Notice how each position flows into the next. That's the goal. When you drill this sequence, you're not just practicing individual techniques — you're ingraining a complete system.</p>

        <h2 className="text-2xl font-bold text-white mt-10">Game Plan Builds Confidence</h2>
        <p className="text-zinc-300">Beyond technique, a game plan is a psychological tool. When you step into competition or a tough sparring match, having a clear strategy reduces anxiety and increases execution. You're not thinking "what should I do?" — you're executing the plan you've already built.</p>
        <p className="text-zinc-300">Use AIBJJ's game plan tools alongside your <Link href="/bjj-competition-prep" className="text-red-400 hover:text-red-300">competition prep</Link> to walk into every match with a clear, personalized strategy.</p>
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
