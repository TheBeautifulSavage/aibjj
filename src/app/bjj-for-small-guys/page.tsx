import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ for Small Guys: Techniques That Level the Field | AIBJJ',
  description: 'BJJ for smaller grapplers — the best guards, techniques, and strategies for smaller athletes. Learn how Marcelo Garcia and others dominated bigger opponents.',
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
        <h1 className="text-4xl md:text-5xl font-black mb-6">BJJ for Small Guys: The Techniques That Level the Field</h1>
        <p className="text-xl text-zinc-400 mb-8">BJJ was literally created to allow smaller people to defeat larger ones. The techniques, guards, and strategies that make this possible aren't theoretical — they're proven at the highest levels of competition by athletes who made size irrelevant.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-12 prose prose-invert prose-zinc max-w-none">
        <h2>The Promise of BJJ for Smaller Practitioners</h2>
        <p>The Gracie family built BJJ's reputation on demonstrations where smaller family members defeated much larger opponents. Hélio Gracie, who was physically frail by his own account, needed techniques that didn't depend on strength — and that necessity drove innovations in leverage, position, and submission mechanics that became the foundation of modern BJJ. Smaller practitioners aren't disadvantaged in BJJ — they're training the art that was built for them.</p>
        <p>The proof: Marcelo Garcia (170 lbs) regularly beat 220+ lb opponents in absolute (no weight class) ADCC competition. Caio Terra competed successfully against much larger opponents using technical mastery. Rafael Mendes dominated absolute divisions against larger athletes. Size can be overcome — but only with the right technical approach.</p>

        <h2>Why Technique Beats Size</h2>
        <p>BJJ's leverage-based submissions — armbar, triangle, rear naked choke — don't require strength to finish. The lever created by an armbar across the hip doesn't care how large the person being armbarred is. The carotid compression of a rear naked choke doesn't require muscular force. What's required is positional control — getting to the position where the submission is available. That positional game is where technique and strategy live.</p>

        <h2>Best Guards for Smaller Practitioners</h2>
        <h3>Closed Guard</h3>
        <p>The original "level the field" guard. Hélio Gracie's closed guard kept larger opponents trapped and vulnerable to submissions. For smaller grapplers, closed guard neutralizes size by controlling the opponent's posture and creating submission opportunities that don't require overpowering the opponent. The hip bump sweep, scissor sweep, armbar, and triangle are all available from closed guard with correct technique regardless of size differential.</p>

        <h3>Butterfly Guard</h3>
        <p>Marcelo Garcia's butterfly guard is the definitive evidence that smaller practitioners can sweep larger opponents. The butterfly hooks create mechanical elevation that doesn't depend on strength — by positioning your hooks under the opponent's hips, you control their center of gravity. Garcia regularly swept opponents 50+ lbs heavier using this position. Butterfly guard rewards technique and hip mobility, not mass.</p>

        <h3>X-Guard</h3>
        <p>X-guard is mechanically size-independent — the elevation and sweep mechanics work through leverage, not strength. Garcia's X-guard sweeps against larger opponents at ADCC are among the most compelling demonstrations that position beats size in BJJ.</p>

        <h3>Spider Guard and Lasso (Gi)</h3>
        <p>Spider guard and lasso guard use the gi grips on the opponent's sleeves to maintain distance and control larger opponents. These guards are particularly effective for smaller practitioners because they use the opponent's size against them — the more they lean in to pass, the easier the sweep becomes. Rafael and Guilherme Mendes used these guards extensively against larger opponents.</p>

        <h2>Submission Strategies for Smaller Practitioners</h2>
        <p>Smaller grapplers should prioritize high-percentage submissions that don't require muscular force:</p>
        <ul>
          <li><strong>Triangle choke</strong> — Uses your hip and leg strength (powerful muscles) against the opponent's neck. Size doesn't help them against a well-locked triangle.</li>
          <li><strong>Guillotine choke</strong> — High elbow guillotine uses mechanical leverage. Garcia's version is particularly effective because it doesn't rely on arm strength.</li>
          <li><strong>Rear naked choke</strong> — Blood choke that requires positioning more than strength. Controlling the back and applying a correct RNC requires technical precision, not physical dominance.</li>
          <li><strong>Armbar</strong> — Using your hips as a fulcrum makes the armbar mechanically overwhelming regardless of size difference.</li>
          <li><strong>Heel hooks</strong> (no-gi) — Knee joint anatomy doesn't care about body weight. Inside heel hooks are arguably the most size-equalizing submission in grappling.</li>
        </ul>

        <h2>Dealing with Larger Training Partners</h2>
        <p>Rolling with people significantly larger than you is the best training for smaller BJJ practitioners. Key mental shift: approach these rolls as problem-solving exercises, not survival tests. The goal isn't to "beat" them — it's to execute your technique against a difficult test case. If your technique fails against someone larger, it's diagnostic information about where the technique breaks down. Fix those details and the technique becomes more reliable against everyone.</p>
        <p>Additionally: avoid strength-based solutions. The temptation when a larger partner is passing your guard is to strength-fight them back. This trains habits that fail against same-size or larger opponents. Use your technique and accept the uncomfortable feeling of being out-physicaled as the price of developing real skill.</p>

        <h2>Movement and Speed as Weapons</h2>
        <p>Smaller practitioners often have advantages in speed, mobility, and cardiovascular efficiency relative to body weight. Build a game that leverages these attributes: movement-based guard passing (torreando, X-pass), dynamic guard games (butterfly, single leg X), and transitions that change the position quickly enough that larger, slower opponents can't settle in. Use AIBJJ to track which strategies are working against your larger training partners.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block not-prose">Build Your Small Guy Game Plan →</Link>
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
