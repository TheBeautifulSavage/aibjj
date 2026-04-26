import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ Training Tips: Train Smarter, Improve Faster | AIBJJ',
  description: 'Expert BJJ training tips to accelerate your progress — drilling methods, sparring strategies, mental approach, injury prevention, and how to structure your training week.',
}

export default function TrainingTipsPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
<section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6">BJJ Training Tips: Train Smarter, Improve Faster</h1>
        <p className="text-xl text-zinc-400 mb-8">Two people can both train three times a week for five years and end up at completely different levels. The difference isn't how much they trained — it's how they trained. Here are the principles that separate rapid progress from stagnation.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <div>
          <h2 className="text-3xl font-black mb-4">Train with Intention</h2>
          <p className="text-zinc-300 mb-4">The most impactful change any practitioner can make: have a specific intention for every training session. Not "get better at BJJ" — a specific target. "Today I'm working on not getting my guard passed" or "today I'm drilling the triangle from every setup I can create."</p>
          <p className="text-zinc-300 mb-4">Without intention, rolling becomes random — you react, you survive, you occasionally submit someone, but you're not systematically developing. With intention, every round serves a specific developmental purpose.</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2">
            <li>Set one technical goal for each session</li>
            <li>Stick to it even when you're in survival mode</li>
            <li>Review at the end of class — did you accomplish your intention?</li>
            <li>Write it down — training journals dramatically accelerate progress</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">The 80/20 of BJJ Progress</h2>
          <p className="text-zinc-300 mb-4">80% of your improvement will come from 20% of what you drill. Identify what that 20% is for your game and spend disproportionate time on it.</p>
          <p className="text-zinc-300 mb-4">For most practitioners, the highest-leverage areas are: fundamental escapes, one solid passing sequence, one dominant guard, and 2-3 submission finishes from that guard. That's a complete game. Everything else is extra.</p>
          <p className="text-zinc-300">The trap: spending time on low-percentage techniques that are interesting but not improving your overall game. Flying armbars are fun; reliable hip bump sweeps win matches.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">How to Structure Your Training Week</h2>
          <p className="text-zinc-300 mb-4">For most practitioners training 3-4 days per week:</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">3 Days Per Week</h3>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Day 1: Focus on a weakness — what position do you hate being in?</li>
            <li>Day 2: Focus on a strength — develop what's already working</li>
            <li>Day 3: Free rolling — apply everything, no specific intention</li>
          </ul>
          <h3 className="text-xl font-bold mb-2 text-red-400">4-5 Days Per Week</h3>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Add a drilling-only session (no sparring, just reps)</li>
            <li>Add a conditioning-focused session with lighter technical rolling</li>
            <li>Maintain at least one full rest day per week</li>
          </ul>
          <p className="text-zinc-300">Recovery is training. Chronic overtraining leads to injuries, stagnation, and burnout. More is not always better — smarter is better.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Drilling vs. Sparring: Getting the Ratio Right</h2>
          <p className="text-zinc-300 mb-4">Many BJJ academies under-drill. Drilling creates muscle memory; sparring tests it. You need both, but they do different things:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li><strong>Drilling builds the movement pattern</strong> — before sparring, you can't execute technique under pressure if you haven't built the pattern first</li>
            <li><strong>Sparring pressure-tests technique</strong> — if a technique only works in drilling, it's not ready</li>
            <li><strong>Optimal ratio:</strong> Most practitioners benefit from more drilling, not less — aim for at least 50% drilling in your training sessions</li>
          </ul>
          <Link href="/bjj-drilling" className="text-red-400 hover:text-red-300 font-semibold">→ Complete BJJ drilling guide</Link>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Partner Selection and Ego Management</h2>
          <p className="text-zinc-300 mb-4">Who you train with determines how you develop. The practitioners who improve fastest train with:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>People better than them (gets humbled, sees the next level)</li>
            <li>People at their level (tests and refines what's developing)</li>
            <li>People worse than them (teaches, applies techniques with control)</li>
          </ul>
          <p className="text-zinc-300 mb-4">Avoid the trap of only rolling with people you can beat. Your ego feels great; your game stagnates. The people who improve fastest are the ones who voluntarily seek out the toughest training partners.</p>
          <p className="text-zinc-300">Ego is the enemy of improvement. Every time you tap, you're learning something. The tap is a gift from your training partner — it's free information about a gap in your game.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Post-Session Review</h2>
          <p className="text-zinc-300 mb-4">The five minutes after class can be some of the most valuable training time. Before you shower and go home:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>What worked today?</li>
            <li>What got me tapped, and why?</li>
            <li>What position did I struggle with most?</li>
            <li>What should I focus on next session?</li>
          </ul>
          <p className="text-zinc-300">Writing these answers down is even better. A training journal accumulated over years is an incredible resource — you can track the evolution of your game and revisit problems you've already solved.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Injury Prevention in BJJ</h2>
          <p className="text-zinc-300 mb-4">Injuries are the biggest setback to BJJ progress. They're partially unavoidable, but many common injuries can be prevented:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li><strong>Warm up properly:</strong> Cold muscles and joints tear more easily</li>
            <li><strong>Tap early:</strong> The ego injury (being tapped) heals in seconds; the physical injury takes months</li>
            <li><strong>Communicate with training partners:</strong> New people don't know your injury history</li>
            <li><strong>Listen to your body:</strong> Training injured makes injuries worse</li>
            <li><strong>Strength train:</strong> Stronger muscles protect joints</li>
            <li><strong>Sleep:</strong> Inadequate sleep doubles injury risk</li>
          </ul>
        </div>

        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
          <h2 className="text-2xl font-black mb-3">Train Smarter with AI Coaching</h2>
          <p className="text-zinc-300 mb-4">Try AIBJJ's AI Coach to get personalized training advice. Tell the AI your schedule, current level, and goals — it creates a structured training plan that maximizes your progress.</p>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block">Get Your Training Plan →</Link>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Supplemental Training: What Actually Helps</h2>
          <p className="text-zinc-300 mb-4">Outside of the academy, these supplemental practices directly improve your BJJ:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2">
            <li><strong>Strength training:</strong> Particularly hip hinges, pulls, and pressing movements</li>
            <li><strong>Flexibility work:</strong> Hip flexors, hip external rotation, shoulders</li>
            <li><strong>Visualization:</strong> Mental rehearsal of specific positions and techniques</li>
            <li><strong>Video study:</strong> Watch competition footage with a technical focus</li>
            <li><strong>Rest and nutrition:</strong> The unsexy fundamentals that make everything else work</li>
          </ul>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-black mb-4">Ready to level up your BJJ?</h2>
        <p className="text-zinc-400 mb-6">Get a personalized training plan from AIBJJ's AI coaching system — designed around your specific goals and schedule.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Join AIBJJ Free</Link>
      </section>

      <footer className="border-t border-zinc-800 px-4 py-8 text-center text-zinc-500 text-sm">
        <Link href="/">AIBJJ</Link> · <Link href="/terms">Terms</Link> · <Link href="/privacy">Privacy</Link>
      </footer>
    </div>
  )
}
