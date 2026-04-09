import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ for Big Guys: Techniques That Work at Any Size | AIBJJ',
  description: 'BJJ for big guys — the best techniques, guards, and strategies for larger grapplers. Learn how to use your size as an asset, not a liability, on the mat.',
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
        <h1 className="text-4xl md:text-5xl font-black mb-6">BJJ for Big Guys: Techniques That Work at Any Size</h1>
        <p className="text-xl text-zinc-400 mb-8">BJJ is often marketed as "the great equalizer" — and it is, when small people use it. But big guys have their own BJJ challenges and advantages. Here's how to build a game that leverages your size intelligently.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-12 prose prose-invert prose-zinc max-w-none">
        <h2>The Big Guy's BJJ Reality</h2>
        <p>Larger practitioners face a unique BJJ paradox: your size is an advantage against untrained opponents and an advantage in certain positions, but it can work against you when training with skilled smaller grapplers who use technique, leverage, and mobility that your size makes harder to develop. The solution isn't to pretend size doesn't matter — it's to build a game that uses your size intelligently while developing the technique that makes you dangerous regardless of weight class.</p>
        <p>Notable "big guy" BJJ: Buchecha (Marcus Almeida, 235+ lbs) won 13 world championships through a combination of incredible athleticism, pressure passing, and technical precision. Roger Gracie (220 lbs) dominated with a simple, tight game based on fundamental control and submissions. Big guys can reach the top — but they need smart, technical games, not just physical dominance.</p>

        <h2>Guard Options for Bigger Practitioners</h2>
        <h3>Closed Guard</h3>
        <p>Closed guard is highly effective for bigger practitioners. Your weight makes breaking your guard physically demanding for opponents, and your hip power creates stronger breaking-posture mechanics. The challenge: bigger athletes often lack the hip mobility and flexibility to attack efficiently from closed guard. Solution: prioritize hip mobility work and drill basic closed guard attacks (hip bump, scissor sweep, armbar, triangle) until they're reliable before expanding your guard game.</p>

        <h3>Half Guard</h3>
        <p>Half guard is arguably the best guard for most bigger BJJ practitioners. Tom DeBlass — a larger competitor who competed at super-heavy weight — built a career on deep half guard and lockdown. Half guard allows bigger practitioners to use their legs to control opponents without requiring extreme hip mobility, and the underhook battle from half guard rewards physical strength appropriately. Bernardo Faria's over-under passing system was also developed specifically around a game that works for heavier competitors.</p>

        <h3>Butterfly Guard</h3>
        <p>Butterfly guard works at all sizes — the hip lift mechanics aren't size-dependent. Bigger athletes can use butterfly guard to elevate opponents and create sweeps that feel effortless when the leverage is right. The challenge: maintaining the sitting posture required for butterfly guard can be harder for larger practitioners with less core endurance. Build your butterfly guard alongside core conditioning.</p>

        <h2>Top Game Advantages for Bigger Athletes</h2>
        <p>Top game is where bigger practitioners naturally thrive. Key areas to develop:</p>
        <ul>
          <li><strong>Pressure passing</strong> — Your weight is a legitimate weapon from top position. The over-under pass, leg weave, and knee slice all benefit from body weight applied correctly. Bernardo Faria's pressure passing system was designed for this.</li>
          <li><strong>Side control control</strong> — Heavy side control from a bigger practitioner is genuinely difficult to escape, even for technical opponents. Learning to apply weight correctly (not just lie there) makes your control suffocating.</li>
          <li><strong>Mount control</strong> — A heavy mount is hard to escape. Work on maintaining high mount and developing submission chains from it — the arm triangle, ezekiel, and armbar all become significantly more effective with weight advantage.</li>
        </ul>

        <h2>Challenges to Address</h2>
        <h3>Cardio and Conditioning</h3>
        <p>Bigger practitioners typically carry a higher cardiovascular load for the same training intensity. Prioritize your conditioning — not just grappling-specific, but general aerobic conditioning. Larger athletes who are well-conditioned have a massive competitive advantage over larger athletes who fatigue early. Running, cycling, or swimming 3x per week dramatically improves your rolling endurance without adding joint stress.</p>

        <h3>Flexibility and Mobility</h3>
        <p>Limited hip mobility is the most common technical limitation for bigger BJJ practitioners. Invest in regular mobility work — hip flexors, hamstrings, and thoracic spine particularly. Even 15 minutes daily produces noticeable improvement within weeks and opens up guard options that previously felt impossible.</p>

        <h3>Training Partner Awareness</h3>
        <p>Bigger practitioners have a responsibility to calibrate their strength output when training with smaller partners. Using full strength against someone 100 lbs lighter isn't useful training — it's bullying. Develop technical training habits by intentionally limiting strength advantage and focusing on technique. This benefits your own development and keeps smaller partners safe and willing to train with you.</p>

        <h2>Recommended Study for Bigger BJJ Practitioners</h2>
        <p>Study: Buchecha's passing and top game, Bernardo Faria's over-under and half guard work, Tom DeBlass for half guard specifics, and Roger Gracie for mount and back mount finishing mechanics. These practitioners built world-class games at larger body weights and their instruction is directly applicable. Use AIBJJ to track which techniques from these systems are clicking in your rolling and build your game plan accordingly.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block not-prose">Build Your Big Guy Game Plan →</Link>
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
