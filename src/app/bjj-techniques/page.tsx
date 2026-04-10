import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ Techniques: The Complete Guide to Brazilian Jiu-Jitsu',
  description: 'A complete guide to BJJ techniques — from guard passes and sweeps to submissions and takedowns. Learn the fundamentals and advanced concepts used by champions.',
  openGraph: {
    title: 'BJJ Techniques: Complete Guide | AIBJJ',
    description: 'Master Brazilian Jiu-Jitsu techniques with AIBJJ\'s comprehensive guide. Submissions, guard passes, sweeps, takedowns, and more — with AI-powered coaching.',
    url: 'https://aibjj.com/bjj-techniques',
  },
}

export default function BJJTechniquesPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300">
      {/* Nav */}
      <nav className="border-b border-zinc-800/60 bg-black/80 backdrop-blur-xl px-4 py-4">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-tight">
            <span className="text-red-600">AI</span><span className="text-white">BJJ</span>
          </Link>
          <div className="flex gap-3">
            <Link href="/auth/signin" className="text-sm text-zinc-400 hover:text-white px-4 py-2">Sign In</Link>
            <Link href="/auth/signup" className="text-sm bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Get Started</Link>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-500 mb-3">Complete Guide</p>
          <h1 className="text-4xl font-black text-white sm:text-5xl mb-6">
            BJJ Techniques: Everything You Need to Know
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            Brazilian Jiu-Jitsu is built on a library of thousands of interconnected techniques. Whether you're a white belt learning your first armbar or a brown belt refining your leg lock entries, understanding technique systematically is the fastest path to progress.
          </p>
        </div>

        {/* CTA Banner */}
        <div className="mb-12 p-6 rounded-xl bg-red-950/30 border border-red-900/40">
          <p className="font-semibold text-white mb-1">🤖 Learn techniques with your AI Coach</p>
          <p className="text-zinc-400 text-sm mb-4">AIBJJ's AI coach knows over 10,000 BJJ techniques. Ask it anything — from how to set up a triangle to how to defend a heel hook.</p>
          <Link href="/auth/signup" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors">
            Start Free — No Credit Card →
          </Link>
        </div>

        <div className="prose prose-zinc prose-invert max-w-none space-y-12">

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">The Four Pillars of BJJ Technique</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              BJJ techniques generally fall into four major categories, each representing a different phase or aspect of grappling. Understanding these pillars helps you see how techniques connect and build a cohesive game.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">1. Takedowns & Trips</h3>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Every match starts standing (in many rule sets), so takedowns determine who gets to dictate the initial ground position. Common BJJ takedowns include the double leg, single leg, hip throws (O-goshi, Seoi Nage from Judo), foot sweeps, and trips. For BJJ players who prefer to guard pull, understanding takedown defense is still critical for self-defense and MMA contexts.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Key takedown concepts: level change, penetration steps, finishing mechanics, head position, and combining shots with setups. The best BJJ players integrate wrestling and Judo to create a complete standing game.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">2. Guard Techniques</h3>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Guard is where BJJ truly diverges from other grappling arts. The ability to attack, sweep, and control from your back is the hallmark of jiu-jitsu. There are dozens of guard types, each with its own complete system of techniques:
            </p>
            <ul className="space-y-2 text-zinc-400 list-disc pl-5 mb-4">
              <li><strong className="text-zinc-200">Closed Guard:</strong> The foundational position. Attacks include triangles, armbars, kimuras, guillotines, and sweeps like the hip bump and flower sweep.</li>
              <li><strong className="text-zinc-200">Open Guard:</strong> Spider guard, De La Riva, lasso guard, reverse De La Riva, and more. Used to control distance and create sweeping angles.</li>
              <li><strong className="text-zinc-200">Half Guard:</strong> Knee shield, deep half, lockdown. A pressure-based guard system with sweeps and back takes.</li>
              <li><strong className="text-zinc-200">Butterfly Guard:</strong> Underhooks and elevation for sweeps. Highly effective against stacked opponents.</li>
              <li><strong className="text-zinc-200">Modern Guard Systems:</strong> X-guard, single leg X, berimbolo, and leg entanglement entries that dominate modern competition.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">3. Guard Passing</h3>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Guard passing is the art of getting past your opponent's legs to reach side control, mount, or back position. There are two fundamental philosophies — pressure passing and speed/movement passing — and elite grapplers develop proficiency in both.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Essential guard passes: torreando, leg drag, over-under, knee slice, smash pass, headquarters passing, and stack pass. The key to effective guard passing is understanding the connection between breaking grips, controlling the hips, and establishing a passing line before committing.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">4. Submissions</h3>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Submissions are the endgame of BJJ. They fall into several categories:
            </p>
            <ul className="space-y-2 text-zinc-400 list-disc pl-5 mb-4">
              <li><strong className="text-zinc-200">Chokes:</strong> Rear naked choke (RNC), guillotine, triangle choke, arm triangle (anaconda, D'arce), collar chokes, loop choke.</li>
              <li><strong className="text-zinc-200">Arm locks:</strong> Armbar, kimura, Americana, omoplata, wristlock, bicep slicer.</li>
              <li><strong className="text-zinc-200">Leg locks:</strong> Straight ankle lock, heel hook (inside and outside), kneebar, calf slicer. The fastest-growing area of modern BJJ.</li>
              <li><strong className="text-zinc-200">Spine/neck locks:</strong> Neck cranks and spinal compression locks (often restricted in competition).</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How to Learn BJJ Techniques Effectively</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Raw exposure to techniques isn't enough — learning methodology matters enormously. Here's what 20+ years on the mats and thousands of students has taught us:
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">Learn in Chains, Not Isolation</h3>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Never learn a technique in isolation. Every technique is part of a chain — an "if/then" decision tree. If your armbar gets defended, you should already know three follow-ups (triangle, omoplata, back take). Learning technique chains turns individual moves into a system.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">Understand Mechanics, Not Just Motion</h3>
            <p className="text-zinc-400 leading-relaxed mb-4">
              The difference between a white belt and a black belt performing the same technique isn't the motion — it's the understanding of <em>why</em> the technique works. Hip position, base, leverage, timing, and weight distribution are the underlying mechanics that make every technique function. Master these concepts and technique acquisition accelerates dramatically.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">Drill Deliberately</h3>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Drilling builds muscle memory, but purposeless drilling builds bad muscle memory. Focus on one detail per drilling session. Drill slowly enough to do it perfectly, then increase speed. 50 perfect reps beats 500 sloppy ones every time.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">Test Under Pressure</h3>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Techniques must be pressure-tested in sparring. Rolling against resisting training partners exposes the gaps — the parts of the technique you don't actually understand yet. Embrace the tap. Every submission you take is a lesson.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Building a Technical Game Plan</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              The most efficient BJJ practitioners don't know every technique — they know their techniques deeply. A focused game plan built around 3-5 positions with complete chains from each position is more valuable than superficial knowledge of 500 moves.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Your game plan should include: a preferred takedown or guard pull entry, a primary guard system with 2-3 sweeps and 2-3 submissions, a preferred top position with at least one guard pass and one submission, and a back attack system.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              This is exactly what AIBJJ's Game Plan Builder was designed for — helping you map out your positions, identify gaps, and build a coherent system with AI guidance.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">By Belt Level: What to Focus On</h2>

            <h3 className="text-xl font-semibold text-white mb-2">White Belt</h3>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Survival first. Learn to escape bad positions (mount escape, side control escape, back defense) before learning attacks. Master closed guard defense and basic guard retention. Tap early and tap often — there's no shame in survival mode at white belt.
            </p>

            <h3 className="text-xl font-semibold text-white mb-2">Blue Belt</h3>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Start developing your A-game. Pick one guard to become your primary. Learn 2-3 submissions you can set up from that guard. Develop one reliable guard pass. The goal at blue belt is starting to execute techniques against resisting training partners of similar level.
            </p>

            <h3 className="text-xl font-semibold text-white mb-2">Purple Belt</h3>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Deepen your A-game and start filling gaps. If you're a guard player, develop your top game. Learn leg locks. Start competing if you haven't. Purple belt is when most grapplers find their identity — embrace it.
            </p>

            <h3 className="text-xl font-semibold text-white mb-2">Brown & Black Belt</h3>
            <p className="text-zinc-400 leading-relaxed">
              Refinement and connection. Brown and black belts aren't learning many new techniques — they're deepening their understanding of what they already know, finding connections between positions, and developing the intuition to read opponents. Teaching also becomes a major tool for learning.
            </p>
          </section>

          {/* Final CTA */}
          <section className="p-8 rounded-xl bg-zinc-900/60 border border-zinc-800 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Train with an AI Coach That Knows BJJ</h2>
            <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
              AIBJJ's AI coach understands positions, technique chains, and game plans. Ask it anything — "How do I defend the heel hook?" "What are the best sweeps from butterfly guard?" "How do I pass the De La Riva?"
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/auth/signup" className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Start Free →
              </Link>
              <Link href="/bjj-ai-coach" className="inline-flex items-center justify-center gap-2 border border-zinc-700 bg-zinc-900 hover:border-zinc-600 text-zinc-300 px-6 py-3 rounded-lg font-semibold transition-colors">
                Learn About AI Coach
              </Link>
            </div>
          </section>

        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-800/60 bg-zinc-950 py-8 mt-16">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-600">
          <Link href="/" className="font-black text-base"><span className="text-red-600">AI</span><span className="text-white">BJJ</span></Link>
          <div className="flex gap-6">
            <Link href="/bjj-training-journal" className="hover:text-zinc-400">Training Journal</Link>
            <Link href="/bjj-game-plan" className="hover:text-zinc-400">Game Plan</Link>
            <Link href="/bjj-ai-coach" className="hover:text-zinc-400">AI Coach</Link>
            <Link href="/terms" className="hover:text-zinc-400">Terms</Link>
            <Link href="/privacy" className="hover:text-zinc-400">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
