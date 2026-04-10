import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Berimbolo BJJ: The Back-Take Everyone\'s Talking About | AIBJJ',
  description: 'Master the berimbolo BJJ technique. Learn the entry from De La Riva guard, the inversion mechanics, and how to use this advanced back-take in competition.',
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
        <h1 className="text-4xl md:text-5xl font-black mb-6">Berimbolo BJJ: The Back-Take Everyone's Talking About</h1>
        <p className="text-xl text-zinc-400 mb-8">The berimbolo is one of the most distinctive and controversial techniques in modern BJJ. Here's everything you need to know about how it works, who made it famous, and whether you should add it to your game.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-12 prose prose-invert prose-zinc max-w-none">
        <h2>What Is the Berimbolo?</h2>
        <p>The berimbolo is an inversion-based back-take entry performed from De La Riva guard. Instead of sweeping or pulling the opponent down, the bottom player inverts their hips underneath the opponent while maintaining De La Riva hook control, rotates to create a back-facing position, and takes the opponent's back from underneath. It's one of the few techniques that allows the bottom player to take an opponent's back while both are moving — a feature that makes it particularly unpredictable.</p>
        <p>The name "berimbolo" comes from a Brazilian Portuguese word, and the technique was popularized by the Mendes brothers (Rafael and Guilherme Mendes) and subsequently refined by the Miyao brothers (Paulo and João Miyao), among others.</p>

        <h2>Who Made the Berimbolo Famous?</h2>
        <p>The Mendes brothers at Art of Jiu-Jitsu (AOJ) were the first athletes to use the berimbolo systematically at the highest levels of competition. Rafael Mendes, in particular, used it to win multiple world championships and built a game philosophy around De La Riva guard, berimbolo, and back-take combinations that defined a generation of BJJ style.</p>
        <p>The Miyao brothers took the technique even further — developing more complex inversion sequences, double berimbolo chains, and connections to leg lock entries that pushed the berimbolo into increasingly abstract territory.</p>
        <p>Leandro Lo also used modified berimbolo entries (particularly from back-step situations) to great effect at heavyweight — proving the technique wasn't limited to lighter, more flexible practitioners.</p>

        <h2>The Mechanics of the Berimbolo</h2>
        <p>The basic berimbolo sequence from De La Riva guard:</p>
        <ol>
          <li>Establish De La Riva hook — your inside foot hooks around the opponent's far leg from behind</li>
          <li>Control the opponent's ankle with your hand on the same side as your hook</li>
          <li>Scoop your hips underneath the opponent by inverting — your body rotates so your head points toward the floor</li>
          <li>As you invert, your De La Riva hook pulls the opponent's leg with you, destabilizing their base</li>
          <li>Continue rotating until you're facing the opponent's back, then extend to finish the back take</li>
          <li>Secure seat belt grip and establish hooks</li>
        </ol>
        <p>The key mechanical driver is the inversion — the hips must go under the opponent, not just to the side. Many beginners fail to get deep enough in the inversion, which results in a scramble rather than a clean back take.</p>

        <h2>Common Berimbolo Mistakes</h2>
        <ul>
          <li><strong>Insufficient DLR hook</strong> — The De La Riva hook must be deep and active before initiating the inversion. A shallow hook loses the mechanical control needed to rotate through.</li>
          <li><strong>Inverting too slowly</strong> — The berimbolo works on momentum and timing. Hesitating mid-inversion gives the opponent time to counter by sprawling, stepping over, or taking the back themselves.</li>
          <li><strong>Losing grip on the ankle</strong> — Maintaining the ankle grip during the inversion is what prevents the opponent from simply stepping away while you're inverted.</li>
          <li><strong>Not finishing the back take</strong> — Getting to back-facing without securing the seatbelt is a common stopping point. The rotation must continue until full back control is achieved.</li>
        </ul>

        <h2>Who Should Learn the Berimbolo?</h2>
        <p>The berimbolo is genuinely an advanced technique. It requires:</p>
        <ul>
          <li>Established De La Riva guard mechanics</li>
          <li>Comfort with inversion and upside-down positions</li>
          <li>Hip flexibility and body awareness</li>
          <li>Understanding of back-take mechanics to finish</li>
        </ul>
        <p>Blue belts can begin learning the movement pattern and entry mechanics. Most practitioners don't develop it as a functional live tool until purple belt, when they've built the positional awareness and guard game prerequisites. If your De La Riva guard is weak, work on that first.</p>

        <h2>Berimbolo in the Modern Game</h2>
        <p>The berimbolo has become somewhat less dominant in high-level competition than it was in its peak (approximately 2012-2018) as guard passers developed specific defenses: staying tall, not letting the DLR hook establish, and using a "dab" (pressing the inverting player's hip into the mat) to prevent the rotation. The technique still works at all levels but requires counters to these specific defenses at the elite level.</p>
        <p>Modern applications often chain berimbolo entries with leg lock attacks — the inverted position creates natural access to ashi garami and heel hook entries when the back take is defended. The Miyao brothers' late-career work extensively developed these chains.</p>

        <h2>Training the Berimbolo</h2>
        <p>The best way to develop the berimbolo is through slow, deliberate positional drilling from De La Riva guard. Ask a training partner to start in a standing/kneeling position while you work the DLR entry and inversion sequence. Focus on the hip movement pattern and ankle control rather than speed. Once the mechanics feel natural, increase the resistance incrementally.</p>
        <p>Log your berimbolo development in AIBJJ's training journal to track which part of the sequence is breaking down in live rolling — whether it's the DLR hook establishment, the inversion depth, or the back take finish. Knowing exactly where you're losing the technique speeds up the fixing process significantly.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block not-prose">Track Your Advanced Technique Progress →</Link>

        <h2>Berimbolo Resources</h2>
        <p>The Mendes brothers' instructionals at artofjiujitsu.com are the most direct resource for learning berimbolo from the practitioners who systematized it. The AOJ YouTube channel also provides detailed breakdown footage. For competition application, studying Guilherme and Rafael Mendes' tournament matches from their competitive prime is invaluable. The Miyao brothers' matches at World Championships and ADCC trials show the most advanced berimbolo chains in competition context.</p>
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
