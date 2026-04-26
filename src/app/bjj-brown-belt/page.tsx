import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ Brown Belt: The Last Step Before Black | AIBJJ',
  description: 'BJJ brown belt guide — what it means, what level of skill it represents, how long it takes, and how to navigate the final stage before black belt promotion.',
}

export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
<section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6">BJJ Brown Belt: The Last Step Before Black</h1>
        <p className="text-xl text-zinc-400 mb-8">Brown belt is the final stage before black — a rank that demands mastery of fundamentals, a well-developed personal game, and the beginning of a teaching identity. Here's what brown belt really means and how to approach it.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-12 prose prose-invert prose-zinc max-w-none">
        <h2>What Brown Belt Represents</h2>
        <p>Brown belt represents near-mastery of BJJ fundamentals combined with a well-developed personal game. A brown belt has typically been training for 7-12 years, competed regularly, and developed genuine expertise in multiple areas of the game. They can teach technique accurately and explain principles, not just demonstrate moves. They give most recreational blue and purple belts a thorough workout and can be competitive against early black belts.</p>
        <p>The IBJJF minimum time at brown belt before black is 1 year. In practice, most practitioners spend 1-2 years at brown, though some spend considerably longer. The gap between the fastest brown belt promotions (12-18 months) and the slowest (3+ years) is wider than any other belt.</p>

        <h2>The Brown Belt Standard</h2>
        <p>There's a common saying: "Brown belt is a black belt who isn't quite ready yet." The implication is that brown and black belts have similar technical foundations — the final distinction is about consistency, composure, and completeness. What typically distinguishes a black belt from an advanced brown belt:</p>
        <ul>
          <li><strong>Consistency under pressure</strong> — A black belt's technique doesn't fall apart when things get difficult. Maintaining good mechanics while being exhausted and outmatched is a black belt standard.</li>
          <li><strong>Completeness</strong> — No glaring holes. A black belt can handle every position, not just their preferred ones. The person who's dangerous from everywhere, not just their A-game.</li>
          <li><strong>Teaching ability</strong> — The ability to transmit knowledge effectively, not just possess it. Black belts are expected to contribute to the art by developing students.</li>
          <li><strong>Character</strong> — Humility, respect for the art, good training etiquette, positive contribution to the academy culture.</li>
        </ul>

        <h2>What Brown Belts Should Be Doing</h2>
        <h3>Filling the Gaps</h3>
        <p>By brown belt, your game is well-established. Brown belt is the time to address the holes — the positions you've been avoiding because they're uncomfortable. Do you hate being in closed guard? Start asking higher belts to start there. Uncomfortable with leg locks? This is the time to develop that area, not ignore it. A complete game before black belt means there's no position where you're completely lost.</p>

        <h3>Developing as a Teacher</h3>
        <p>Most brown belts are already teaching classes or assisting instruction. Use this time to consciously develop your teaching ability — not just your technical ability. How clearly can you explain a technique? Can you identify why a student is failing at something and correct the specific issue? Can you modify instruction for different learning styles? Teaching brown belts become better black belts because teaching requires a depth of understanding that pure training doesn't always demand.</p>

        <h3>Competition Refinement</h3>
        <p>If competition has been part of your journey, brown belt competition is serious. IBJJF brown belt divisions are competitive — most competitors at this level have been training 8+ years and competing for most of that time. Win or lose, competition at brown belt tests your readiness for black belt-level expectations. The mental composure required to compete at brown belt level is essentially the same composure required at black belt level.</p>

        <h3>Studying the Big Picture</h3>
        <p>Brown belt is a good time to expand your study of BJJ beyond your personal game. Study the history of the art, study different lineages and their approaches, study the athletes who shaped BJJ's development. This broader perspective develops the wisdom component of black belt that pure technical training doesn't provide. Watching historical competition footage — early ADCC, vintage Mundials — provides context for how techniques and rule sets have evolved.</p>

        <h2>Common Brown Belt Experiences</h2>
        <p>Brown belt often brings a strange psychological experience: you're very good at BJJ, but you're not quite "there." The belt itself carries significant weight — people treat you differently, expect more from you, and you carry those expectations into training. Managing this psychological pressure — training without ego, being willing to look bad in pursuit of development — is part of the brown belt journey.</p>
        <p>Many brown belts also experience their most significant competitive success at this stage. The game is refined, experience is deep, and the body is still capable. If you want to compete seriously, brown belt is often the prime window.</p>

        <h2>How to Approach the Final Step</h2>
        <p>Don't rush it. The worst brown belts are those who are training to get promoted rather than training to be excellent. Your instructor knows the difference. Focus on becoming as complete and capable as possible — the promotion will happen when you're ready. AIBJJ's training journal helps you track your development across all areas of your game during this critical final stage before black belt.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block not-prose">Track Your Journey to Black Belt →</Link>
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
