import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Guard Passing in BJJ: Complete System Guide | AIBJJ',
  description: 'Master guard passing in BJJ. Learn pressure passing, speed passing, torreando, knee slice, over-under and how to build a complete guard passing system.',
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
        <h1 className="text-4xl md:text-5xl font-black mb-6">Guard Passing in BJJ: Complete System Guide</h1>
        <p className="text-xl text-zinc-400 mb-8">Guard passing is one of the most valued — and most difficult — skills in BJJ. This complete guide covers every major passing system, the mechanics behind them, and how to develop reliable guard passing that works under pressure.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-12 prose prose-invert prose-zinc max-w-none">
        <h2>The Philosophy of Guard Passing</h2>
        <p>Guard passing in BJJ is fundamentally about solving a positional puzzle where the bottom player controls your movement with their legs and hips while threatening submissions. The passer's job is to neutralize that control — by going around it, through it, over it, or under it — and establish a dominant pin. Every passing system is a different solution to this puzzle.</p>
        <p>John Danaher's conceptual framework for passing is worth understanding: every guard has two fundamental threats (sweep and submission), and a good passer neutralizes both simultaneously by controlling posture, hips, and distance. This "solve both threats at once" principle is what separates systematic passers from scramblers.</p>

        <h2>Pressure Passing Systems</h2>
        <h3>Over-Under Pass</h3>
        <p>The over-under pass involves one arm going over the opponent's leg and one arm going under, creating a powerful hip-control grip that eliminates most guard retention options. The passer then drives forward with body weight, smashing the hip to the mat to prevent hip escape while walking around. Bernardo Faria's version of this pass is the most studied — he won multiple world championships with it.</p>
        <p>Key mechanics: the over arm controls the near hip, the under arm hooks the far thigh, and the passer's head pressure on the chest creates the smashing effect.</p>

        <h3>Leg Drag Pass</h3>
        <p>The leg drag is a hybrid technique that uses momentum and grip control to move the opponent's legs across their body, creating a lateral pass. It works well against De La Riva, spider guard, and single leg guards. Gordon Ryan's leg drag system is connected to his broader passing framework and is considered one of the most reliable modern passing techniques.</p>

        <h3>Knee Slice (Knee Cut) Pass</h3>
        <p>The knee slice is the most fundamental intermediate passing technique. From a standing or kneeling position with the opponent's leg controlled, you drive your knee across their thigh while walking your hips around. It works against closed guard that's been opened, half guard escapes, and various open guard setups. Simple mechanics, high percentage — every grappler needs a reliable knee slice.</p>

        <h2>Speed Passing Systems</h2>
        <h3>Torreando (Bullfighter) Pass</h3>
        <p>The torreando controls both of the opponent's ankles and redirects them away from the passer's body. By moving the legs aside and following quickly, you pass around rather than through the guard. The torreando is a gateway technique — learning it teaches the basic mechanics of footwork and weight transfer that underpin most movement-based passing. Rafael Mendes and the Atos team developed some of the most refined torreando systems.</p>

        <h3>X-Pass</h3>
        <p>The X-pass uses a cross-body step to pass at an angle, changing direction to beat the guard player's rotation. It's particularly effective against open guard players who rely on following hips rather than active retention. The pass requires good athletic timing and works well in combination with the torreando.</p>

        <h3>Long Step Pass</h3>
        <p>Against single leg guard, butterfly guard, and seated guards, the long step involves clearing a hook by stepping your leg over or around it. Combined with a grip break and quick hip transition, it creates very fast passes that bypass complex guard systems entirely.</p>

        <h2>Dealing with Specific Guards</h2>
        <h3>Passing Closed Guard</h3>
        <p>Closed guard passing requires a different approach — you're inside the guard with limited mobility. Fundamentals: maintain posture (don't let them break it), create the guard opening (stand up, or use a stacking pass), then execute the pass. Avoid reaching in blindly, which gives up armbar and triangle entries.</p>

        <h3>Passing De La Riva Guard</h3>
        <p>De La Riva requires addressing the outside hook before passing. Common approaches: the toreando (removing the hook and passing quickly), the leg drag (redirecting the DLR leg across the body), and the knee slide (cutting through the hook with a controlled slice).</p>

        <h3>Passing Butterfly Guard</h3>
        <p>Butterfly guard punishes passers who lean forward into their opponent's hooks. The best butterfly guard passes involve pinning the hooks first (by underhooking or driving hips down) before proceeding. Avoid loading your weight forward until the hooks are neutralized.</p>

        <h2>Building a Passing System</h2>
        <p>A passing "system" means having a coherent set of passes that chain together so every defensive reaction from the bottom player feeds into another pass attempt. Example: attempt torreando → opponent recovers De La Riva → transition to leg drag → opponent defends with knee shield → switch to knee slice. Each pass flows into the next, making defense exhausting for the bottom player.</p>
        <p>AIBJJ's technique library helps you map these passing chains so you can study and drill them as connected sequences rather than isolated moves. The AI coach can suggest which passing chains to focus on based on your rolling notes.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block not-prose">Build Your Passing System in AIBJJ →</Link>

        <h2>Common Passing Mistakes</h2>
        <ul>
          <li><strong>Telegraphing your pass</strong> — Slow, deliberate movements let good guard players preemptively block. Be decisive.</li>
          <li><strong>Over-extending your base</strong> — Reaching too far gives the guard player leverage for sweeps. Stay compact.</li>
          <li><strong>Ignoring weight distribution</strong> — Most failed passes happen because weight is in the wrong place. Correct weight makes passes feel effortless.</li>
          <li><strong>Abandoning a pass at the first sign of resistance</strong> — Learning to ride through initial defensive reactions is what makes passing reliable.</li>
        </ul>

        <h2>Training Guard Passing</h2>
        <p>Positional sparring is the fastest way to develop guard passing. Set up passing-specific rounds where you start in standing versus seated guard and focus exclusively on the passing dynamic. This gives you far more focused reps than free rolling, where passing situations arise unpredictably. Aim for 10-15 minutes of positional passing training every session you're working on your passing game.</p>
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
