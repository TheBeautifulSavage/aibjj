import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Build a BJJ Game Plan with AI | AIBJJ Game Plan Builder',
  description: 'Build a complete BJJ game plan with AI coaching. Map your A-game positions, identify gaps, and create position-by-position attack chains. Free to start.',
  openGraph: {
    title: 'How to Build a BJJ Game Plan with AI | AIBJJ',
    description: 'AIBJJ\'s AI-powered game plan builder helps you map your positions, identify gaps, and build attack chains. Compete with a real game plan.',
    url: 'https://aibjj.com/bjj-game-plan',
  },
}

export default function BJJGamePlanPage() {
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
          <p className="text-sm font-semibold uppercase tracking-widest text-red-500 mb-3">BJJ Game Plan</p>
          <h1 className="text-4xl font-black text-white sm:text-5xl mb-6">
            How to Build a BJJ Game Plan (With AI)
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            Rolling without a game plan is like competing without warming up. Your most dangerous opponents don&apos;t just know more techniques — they know their game cold. Every position, every transition, every response is mapped out before they ever step on the mat.
          </p>
        </div>

        {/* CTA Banner */}
        <div className="mb-12 p-6 rounded-xl bg-red-950/30 border border-red-900/40">
          <p className="font-semibold text-white mb-1">🗺️ Build Your Game Plan with AI</p>
          <p className="text-zinc-400 text-sm mb-4">AIBJJ&apos;s AI coach helps you map your A-game, identify gaps, and create complete position chains. Start building yours free.</p>
          <Link href="/auth/signup" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors">
            Build My Game Plan →
          </Link>
        </div>

        <div className="space-y-12">

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What Is a BJJ Game Plan?</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              A BJJ game plan is your strategic blueprint for how you intend to win matches. It defines the positions you want to achieve, the attacks you prefer from each position, your responses to common counters, and your physical and mental game plan for competition day.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-4">
              The best game plans are not rigid — they are decision trees. If X happens, I do Y. If my opponent defends Y, I pivot to Z. Elite grapplers like Gordon Ryan, Mikey Musumeci, and Craig Jones are famous for having clearly defined games that they execute with ruthless efficiency, regardless of opponent.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              A game plan isn&apos;t just for competition — it&apos;s a training philosophy. Knowing your game means you train intentionally, drill purposefully, and evolve systematically rather than collecting random techniques.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">The Anatomy of a BJJ Game Plan</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              A complete BJJ game plan has five layers:
            </p>

            <div className="space-y-6">
              {[
                {
                  num: '01',
                  title: 'Entry Sequence',
                  desc: 'How do you get to your A-game positions from the start of a match? Do you prefer takedowns, guard pulls, or specific grips? Your entry sequence is your first move — you need to know it cold.',
                },
                {
                  num: '02',
                  title: 'Primary Positions',
                  desc: 'The 2-3 positions you are most dangerous from. These are your A-game. You should have multiple attacks from each, organized as a tree — primary attack, secondary if defended, tertiary if that\'s defended.',
                },
                {
                  num: '03',
                  title: 'Transitions',
                  desc: 'How do you move between your positions? What do you do if you\'re stuffed? Which positions connect naturally? Transitions are where BJJ really happens — between the set pieces.',
                },
                {
                  num: '04',
                  title: 'Defense & Recovery',
                  desc: 'What do you do when things go wrong? How do you survive being taken down, mounted, or back-taken? Defense is part of your game plan, not separate from it.',
                },
                {
                  num: '05',
                  title: 'Finishing System',
                  desc: 'Where do your submissions come from? Are you a leg locker, a choke specialist, an arm collector? Your finishing system should be tied directly to your primary positions — not an afterthought.',
                },
              ].map((item) => (
                <div key={item.num} className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-red-500 font-black text-sm">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How to Build Your Game Plan Step-by-Step</h2>

            <h3 className="text-xl font-semibold text-white mb-3">Step 1: Audit Your Current Game</h3>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Before you can build a game plan, you need to know where you actually are. Look at your training journal (if you have one — you should): What positions do you end up in most? What submissions do you actually catch? What gets you caught? Your game plan should be built on your natural tendencies, not the game you wish you had.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">Step 2: Choose Your Guard</h3>
            <p className="text-zinc-400 leading-relaxed mb-4">
              If you play off your back primarily, choose your main guard system and commit to it for at least 6 months. Switching guards every few months is one of the most common reasons BJJ players plateau. Go deep on one guard — De La Riva, butterfly, closed guard, half guard, or a modern system like single leg X — before diversifying.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">Step 3: Map Your Attack Chains</h3>
            <p className="text-zinc-400 leading-relaxed mb-4">
              For each primary position, map at least 3 attacks. For each attack, map 2 defensive responses you&apos;ll encounter and your counter to each. This creates a decision tree rather than a single-move plan. This is where AI coaching shines — you can describe your position to AIBJJ&apos;s AI coach and ask it to map attack chains specific to your level and style.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">Step 4: Identify Gaps</h3>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Every game has holes. If you love playing guard but have no takedown defense, that&apos;s a gap. If you&apos;re a top player but have no back attack system, that&apos;s a gap. Identifying gaps doesn&apos;t mean fixing them all immediately — it means knowing where your plan has weaknesses so you can account for them.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">Step 5: Competition-Specific Adjustments</h3>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Different rulesets require different game plans. IBJJF prohibits heel hooks at most levels — your leg lock game needs to account for this. No-gi competitions are different from gi. If you know your opponent, you can add a layer of opponent-specific adjustments based on their tendencies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Using AI to Build a Better Game Plan</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Building a game plan used to require either elite coaching or years of self-study. AIBJJ changes this. The AI coach understands BJJ positions, attack chains, ruleset nuances, and can help you think through your game plan the way a knowledgeable coach would.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-4">
              You can describe your current game to AIBJJ and ask things like: &ldquo;What attacks connect from the single leg X position?&rdquo; or &ldquo;My opponent keeps posturing out of my closed guard — what are my best options?&rdquo; or &ldquo;Build me a leg lock game plan for no-gi competition at brown belt.&rdquo;
            </p>
            <p className="text-zinc-400 leading-relaxed">
              The AIBJJ Game Plan Builder takes this further — it provides structured tools to visually map your positions, attacks, and transitions in a format you can review before competition, share with coaches, and update as your game evolves.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Game Plan Examples by Style</h2>

            <h3 className="text-xl font-semibold text-white mb-2">The Guard Player</h3>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Entry: Guard pull to De La Riva. Primary attacks: berimbolo back take, DLR sweep to single leg, leg drag pass baiting to triangle. Back system: body triangle, RNC or arm triangle. When behind on points: force guard engagement, triangle choke as primary submission chase.
            </p>

            <h3 className="text-xl font-semibold text-white mb-2">The Pressure Wrestler</h3>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Entry: Double leg or snap-down to front headlock. Primary positions: side control, north-south, mount. Guard passing: over-under, knee slice, leg drag. Submission focus: D&apos;arce, arm triangle, mounted armbar. When defending: takedown defense, guard recovery to half guard.
            </p>

            <h3 className="text-xl font-semibold text-white mb-2">The Leg Lock Specialist</h3>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Entry: Guard pull to seated guard, shot defense to ashi garami. Primary positions: single leg X, outside heel hook, saddle. Attack priority: outside heel hook, inside heel hook, compression locks. Top game backup: leg drag to mount for when leg lock entries are denied.
            </p>
          </section>

          {/* Final CTA */}
          <section className="p-8 rounded-xl bg-zinc-900/60 border border-zinc-800 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Build Your Game Plan with AIBJJ</h2>
            <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
              Use AIBJJ&apos;s AI coach and game plan builder to map your A-game, attack chains, and competition strategy. Start free.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/auth/signup" className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Start Building →
              </Link>
              <Link href="/bjj-ai-coach" className="inline-flex items-center justify-center gap-2 border border-zinc-700 bg-zinc-900 hover:border-zinc-600 text-zinc-300 px-6 py-3 rounded-lg font-semibold transition-colors">
                Meet Your AI Coach
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
            <Link href="/bjj-techniques" className="hover:text-zinc-400">Techniques</Link>
            <Link href="/bjj-training-journal" className="hover:text-zinc-400">Journal</Link>
            <Link href="/bjj-ai-coach" className="hover:text-zinc-400">AI Coach</Link>
            <Link href="/terms" className="hover:text-zinc-400">Terms</Link>
            <Link href="/privacy" className="hover:text-zinc-400">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
