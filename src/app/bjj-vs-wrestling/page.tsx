import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ vs Wrestling: Key Differences Explained | AIBJJ',
  description: 'BJJ vs wrestling compared — rules, techniques, culture, and practical applications. Learn what each art does best and how they complement each other.',
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
        <h1 className="text-4xl md:text-5xl font-black mb-6">BJJ vs Wrestling: Key Differences Explained</h1>
        <p className="text-xl text-zinc-400 mb-8">BJJ and wrestling are the two most influential grappling arts in the world. Understanding their differences — in technique, culture, and application — helps you train smarter and know what each brings to your game.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-12 prose prose-invert prose-zinc max-w-none">
        <h2>The Core Difference</h2>
        <p>The fundamental distinction: wrestling is primarily about controlling an opponent on their feet and scoring by putting them on the ground (takedowns) or pinning them briefly once there. BJJ is primarily about controlling an opponent on the ground and forcing a submission. Wrestling wins at the standup; BJJ wins in the ground game. Neither is complete without the other — which is why the best MMA fighters and no-gi grapplers develop both.</p>

        <h2>Rules and Scoring</h2>
        <p><strong>Wrestling (Freestyle/Greco-Roman):</strong> Points awarded for takedowns, exposure (turning opponent's shoulders toward the mat), and activity. A match ends early by "fall" — pinning the opponent's shoulders to the mat for a count. Submissions are not used; there is no tapping out. Matches are typically 2-3 periods of a few minutes each.</p>
        <p><strong>BJJ:</strong> Points awarded for takedowns, sweeps, guard passes, back takes, and positional dominance. A match ends early by submission — the opponent taps, verbal taps, or the referee stops the match due to unconsciousness (rare in sport BJJ). IBJJF gi competition and no-gi formats have varying rules, but submission is always the highest-value outcome.</p>

        <h2>Technical Differences</h2>
        <h3>Standup and Takedowns</h3>
        <p>Wrestling has a dramatically more developed takedown game. Single legs, double legs, high crotches, fireman's carries, suplexes (in folkstyle and Greco), and hundreds of trips and sweeps are developed through years of specialized training. BJJ takedowns tend to be a subset of basic wrestling and judo throws — functional, but rarely developed to wrestling depth.</p>
        <p>In mixed competition contexts (no-gi submission wrestling, MMA), trained wrestlers have a significant advantage in dictating where the fight happens — standing or ground — because of their superior takedown and takedown defense abilities.</p>

        <h3>Ground Control</h3>
        <p>Wrestlers prioritize pinning and controlling top position. The pin, in wrestling, ends the match — so maintaining tight chest-to-back or chest-to-chest control with hip control is central to wrestling ground strategy. This creates excellent pressure passers and top players when wrestlers transition to BJJ.</p>
        <p>BJJ prioritizes submissions over pins. A pin without a submission threat is incomplete. BJJ ground work is focused on advancing to submission opportunities, which requires more nuanced positional work than wrestling's relatively binary "control or don't control" framework.</p>

        <h3>Guard Game</h3>
        <p>Wrestling has no guard game. In wrestling, being on your back is defensive — you're working to escape immediately, not attack. There's no concept of closed guard, butterfly guard, or using the bottom position offensively. This is the biggest adjustment for wrestlers learning BJJ: accepting that the bottom position can be a weapon, not just a defensive problem.</p>

        <h2>Culture and Training Methods</h2>
        <p>Wrestling culture is historically more intense, more athlete-focused, and more physically demanding. High school and collegiate wrestling programs involve year-round conditioning, drilling, and competition that BJJ academies rarely match in training volume. This produces athletes with exceptional physical conditioning, mental toughness, and competitive experience.</p>
        <p>BJJ culture tends to be more accessible to adult beginners, more tolerant of recreational practitioners, and more diverse in age range. The tap-out mechanism makes BJJ's sparring safer than wrestling's full-contact scrambles, which contributes to longer athletic careers.</p>

        <h2>How Wrestlers Do in BJJ</h2>
        <p>Wrestlers who transition to BJJ typically adapt quickly. Their physical strength, explosive movement, and takedown skills immediately translate. Their base and pressure make them difficult to sweep. The primary challenge: adapting to the guard game (both playing and passing), learning submission mechanics, and developing patience for positional advancement rather than explosively fighting for pins.</p>
        <p>Many of the greatest no-gi BJJ competitors have wrestling backgrounds: Nick Rodriguez, Nicky Ryan, Jon Jones (MMA). They combine wrestling athleticism with developed submission skills to create a dominant overall game.</p>

        <h2>How BJJ Practitioners Do in Wrestling</h2>
        <p>BJJ practitioners without wrestling background typically struggle in wrestling contexts because their takedown game is underdeveloped. Their guard game is irrelevant (guards aren't used in wrestling), and their ground work, while technically sophisticated, is oriented around submission rather than pinning. In pure wrestling competition, raw wrestling skill dominates. In submission wrestling or MMA, BJJ guard work and submission knowledge becomes valuable again.</p>

        <h2>Should You Cross-Train?</h2>
        <p>Yes — if your goal is complete grappling. Wrestling makes your BJJ standup dangerous and your top game physically dominant. BJJ makes your wrestling ground game sophisticated and gives you submission options wrestling doesn't develop. The combination is the foundation of what we call "modern no-gi grappling." Track your cross-training progress and observations in AIBJJ to see how wrestling training is affecting your BJJ rolling.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block not-prose">Track Your Cross-Training Progress →</Link>
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
