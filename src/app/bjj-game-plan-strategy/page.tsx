import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Build Your BJJ Game Plan from Scratch | AIBJJ',
  description: 'Build a BJJ game plan that works for your body and style. Learn how to identify your A-game, develop chains, plug holes, and create a coherent BJJ strategy.',
}

export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <nav className="border-b border-zinc-800 px-4 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">Get Started Free</Link>
        </div>
      </nav>
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6">How to Build Your BJJ Game Plan from Scratch</h1>
        <p className="text-xl text-zinc-400 mb-8">The best BJJ players have a game plan — a coherent strategy that connects their preferred positions, submissions, and transitions into a system that works under pressure. Here's how to build yours.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-12 prose prose-invert prose-zinc max-w-none">
        <h2>What a Game Plan Is</h2>
        <p>A BJJ game plan is your personal system — the coherent set of positions, techniques, and strategies you use when you don't have time to think. It's the answer to "what do I do from standing?", "what do I do when I'm on top?", and "what do I do when I'm on the bottom?" A good game plan has answers for every situation that doesn't require mental deliberation — it's been drilled until it's automatic.</p>
        <p>Without a game plan, you're reactive — you do whatever occurs to you in the moment, which changes every roll. With a game plan, you're proactive — you create situations rather than respond to them, and you get to practice your strengths over and over rather than training at random.</p>

        <h2>Step 1: Identify What's Already Working</h2>
        <p>Start with your current game. Ask yourself: What positions do I feel comfortable in? What submissions have I been finishing in rolling? What situations feel natural versus awkward? These are the seeds of your game plan — the things you can do with less conscious effort, because they've already started to become automatic.</p>
        <p>Review your training journal if you've been keeping one. AIBJJ's logging system helps you identify patterns over time — which techniques appear repeatedly in your notes as successful versus which rarely come up. The data tells you where your game naturally lives.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block not-prose">Use AIBJJ to Analyze Your Game →</Link>

        <h2>Step 2: Choose a Primary Guard</h2>
        <p>Your guard is the foundation of your bottom game. Pick one and commit to developing it deeply rather than dabbling in many. Guard options for a starting game plan:</p>
        <ul>
          <li><strong>Closed guard</strong> — Excellent for control, works at all body types, gi and no-gi</li>
          <li><strong>Half guard</strong> — Accessible for larger athletes, strong sweep and back-take potential</li>
          <li><strong>Butterfly guard</strong> — Fast, dynamic, excellent for smaller athletes and no-gi contexts</li>
          <li><strong>De La Riva</strong> — Strong for advanced guard players, gi-focused but adaptable</li>
        </ul>
        <p>Your choice should consider your body type, athleticism, training context (gi vs no-gi), and honestly, what excites you enough to spend thousands of reps drilling it. You won't develop a guard you don't enjoy working on.</p>

        <h2>Step 3: Build Your Submission Chains</h2>
        <p>From your primary guard, develop 2-3 connected submission threats. The connections matter more than the individual submissions. From closed guard, a simple chain: hip bump sweep → when they post a hand, kimura → when they pull the arm back, armbar → when they defend the armbar, triangle. Each defense feeds the next attack. Your opponent is always reacting to you, never getting to play offense.</p>
        <p>Strong guard submission chains for different guards:</p>
        <ul>
          <li><strong>Closed guard:</strong> Hip bump → kimura → armbar → triangle</li>
          <li><strong>Half guard:</strong> Kimura → sweep → back take</li>
          <li><strong>Butterfly:</strong> Arm drag → back take → RNC</li>
          <li><strong>No-gi open:</strong> Single leg X → heel hook → sweep</li>
        </ul>

        <h2>Step 4: Build Your Top Game</h2>
        <p>A complete game plan addresses both top and bottom game. From top, you need: a passing system (2-3 connected passes), a dominant control position (side control or mount preference), and a submission chain from that position. Example top game plan: over-under pass → side control → arm triangle or kimura → mount → rear naked or armbar from mount. Each position connects to the next.</p>

        <h2>Step 5: Plan Your Standup</h2>
        <p>Every match starts standing. Your game plan needs a standup answer: guard pull, takedown, or clinch-to-takedown. Don't leave this to improvisation — it's the first thing that happens every roll. Even a simple game plan (pull to butterfly guard) is better than no plan at all. Ideally, have both a takedown option and a guard pull option so you can adapt to the opponent's approach.</p>

        <h2>Step 6: Identify and Address Your Weaknesses</h2>
        <p>Your game plan needs not just attack paths but defensive answers. What happens when someone passes your guard? What's your plan from bottom side control? From back mount? These defensive answers complete the game plan — they prevent your system from having exploitable gaps. Build at least one reliable escape from every major bad position before considering your game plan complete.</p>

        <h2>Drilling Your Game Plan</h2>
        <p>A game plan only works if it's been drilled to automaticity. Once you've sketched your plan, drill the individual techniques and chains in positional sparring. Set up specific rounds to practice your plan against increasing resistance. Over time, the plan becomes automatic — you stop thinking about what to do and start just doing it.</p>
        <p>Use AIBJJ's training journal to track your game plan development — noting when specific elements are working, when chains are connecting, and when you're being taken out of your game plan. This reflection loop accelerates the game development process dramatically.</p>

        <h2>Competition Game Planning</h2>
        <p>For competition, your game plan becomes even more specific: tailored to the opponent, the ruleset, and the stakes. Research your opponent if possible. Identify their tendencies and connect them to your game plan — if they like guard pulling, prepare your passing; if they pressure pass, strengthen your guard retention. Compete with an intention, not just hope.</p>
      </section>
      <section className="bg-zinc-900 border-t border-zinc-800 px-4 py-16 text-center">
        <h2 className="text-3xl font-black mb-4">Take your BJJ to the next level</h2>
        <p className="text-zinc-400 mb-8">AI coach, training journal, technique library — all in one platform.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Join AIBJJ Free →</Link>
      </section>
      <footer className="border-t border-zinc-800 px-4 py-8 text-center text-zinc-500 text-sm">
        © 2025 AIBJJ · <Link href="/terms" className="hover:text-zinc-300">Terms</Link> · <Link href="/privacy" className="hover:text-zinc-300">Privacy</Link>
      </footer>
    </div>
  )
}
