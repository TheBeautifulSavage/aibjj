import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Open Guard BJJ: Spider, De La Riva, Butterfly Guide | AIBJJ',
  description: 'Master BJJ open guard with this complete guide to spider guard, De La Riva, butterfly guard, lasso, and X-guard. Attacks, sweeps, and transitions explained.',
}

export default function OpenGuardPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
<section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6">Open Guard BJJ: Spider, De La Riva, Butterfly & More</h1>
        <p className="text-xl text-zinc-400 mb-8">Open guard is the modern BJJ practitioner's domain. Without the legs locked, you use grips, hooks, and angles to control distance and create attacks. Master one open guard system and your whole game transforms.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <div>
          <h2 className="text-3xl font-black mb-4">Understanding Open Guard</h2>
          <p className="text-zinc-300 mb-4">Open guard encompasses any guard position where your legs are not locked. Unlike closed guard — which creates a physical constraint on the opponent's posture — open guard relies on constant adjustment, grip fighting, and positional awareness.</p>
          <p className="text-zinc-300 mb-4">Open guard is fundamentally a distance management problem. Too close and you lose your frames; too far and they can pass around your legs. The open guard practitioner must constantly find the right distance while creating threats.</p>
          <p className="text-zinc-300">For gi players, open guard is the dominant competitive position. Many modern championships are won and lost in open guard battles. No-gi players have adapted many of these principles with grip changes.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Spider Guard</h2>
          <p className="text-zinc-300 mb-4">Spider guard uses sleeve grips with your feet placed on the biceps. You control both arms, creating a web that limits your opponent's ability to posture, pass, or attack. Spider guard is highly effective for practitioners with long legs and strong gripping.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Spider Guard Fundamentals</h3>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Maintain strong sleeve grips — the guard breaks immediately if you lose them</li>
            <li>Alternate tension: push one foot, pull one sleeve to create constant imbalance</li>
            <li>Keep your hips active — use hip movement to shift angles</li>
            <li>Threat of triangle keeps them from posturing; threat of sweep keeps them from backing out</li>
          </ul>
          <h3 className="text-xl font-bold mb-2 text-red-400">Spider Guard Attacks</h3>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Triangle: release one bicep foot, throw the leg over their head</li>
            <li>Omoplata: swing the leg to the shoulder side for the shoulder lock</li>
            <li>Overhead sweep: when they push into your foot pressure, use momentum to sweep over your head</li>
            <li>Lasso transition: switch one foot from bicep to sleeve wrap for the lasso guard</li>
            <li>Balloon sweep: use the tension of both grips to catapult them</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">De La Riva Guard</h2>
          <p className="text-zinc-300 mb-4">De La Riva guard (DLR) hooks the outside of the lead leg — your outside foot wraps around the back of their lead leg while your inside foot pushes on the hip. Combined with sleeve and collar grips, DLR is one of the most dynamic guard systems in competition BJJ.</p>
          <p className="text-zinc-300 mb-4">Ricardo De La Riva developed this guard in the 1980s to counter the leg pressure passes being used against him. Today it's a staple of competition grappling at all levels.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">De La Riva Attacks</h3>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>DLR sweep: control the far leg and sweep them toward the hook side</li>
            <li>Back take: when they try to step out of the hook, follow them to the back</li>
            <li>Berimbolo: invert under them and take their back</li>
            <li>X-guard entry: slide under to X-guard for mechanical sweeps</li>
            <li>Single leg: stand up with the DLR hook for a takedown</li>
          </ul>
          <h3 className="text-xl font-bold mb-2 text-red-400">Reverse De La Riva</h3>
          <p className="text-zinc-300 mb-4">Reverse DLR hooks the inside of the near leg instead. It transitions well to back takes and is often used as a guard recovery position when standard DLR gets compromised. The Mendes brothers and Cobrinha are masters of this position.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Butterfly Guard</h2>
          <p className="text-zinc-300 mb-4">Butterfly guard is the most fundamental open guard. Your feet are inside the opponent's thighs (hooks), and you control their upper body with underhooks, overhooks, or collar grips. What it lacks in complexity, it makes up for in effectiveness.</p>
          <p className="text-zinc-300 mb-4">Marcelo Garcia is the defining practitioner of butterfly guard. His approach: get the double underhook and then elevate and sweep. Simple, but when executed at Marcelo's level, nearly unstoppable.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Butterfly Guard Sweeps</h3>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Butterfly sweep (hook sweep): underhook, lift the hook, drive forward</li>
            <li>Back door escape: when they base wide, slide out the back to take their back</li>
            <li>Technical stand: use the hooks to create space and stand up to a wrestling takedown</li>
            <li>X-guard entry: when they stand, slide under to X-guard</li>
          </ul>
          <p className="text-zinc-300">Butterfly guard is the best open guard for no-gi because it doesn't rely on sleeve grips. It's also excellent for grapplers with shorter legs.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Lasso Guard</h2>
          <p className="text-zinc-300 mb-4">Lasso guard wraps your arm through a sleeve grip in a coiling motion — your leg threads through to create a figure-four-like control on their arm. It limits shoulder mobility dramatically, making it extremely hard for the opponent to pass or posture.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Lasso Guard Principles</h3>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>The lasso arm is your primary lever — don't lose the grip</li>
            <li>Off-balance them toward the lasso side before sweeping</li>
            <li>Triangle is the most common submission from lasso — the shoulder is already compromised</li>
            <li>Tilt them forward before shooting the triangle</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">X-Guard</h2>
          <p className="text-zinc-300 mb-4">X-guard is a deep leg entanglement where both your legs control one of their legs. Marcelo Garcia created this guard and used it to dominate at the highest levels. Once you establish X-guard properly, sweeping is nearly automatic — they have no base.</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Tilt sweep: elevate the near hip while pushing the far hip</li>
            <li>Back take: when they step their trapped leg, follow to the back</li>
            <li>Single leg X transition: adjust the leg position for leg lock attacks</li>
          </ul>
          <p className="text-zinc-300">Getting to X-guard requires the opponent to be standing or posturing — butterfly guard and DLR are the most common entries.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Choosing Your Open Guard</h2>
          <p className="text-zinc-300 mb-4">With so many open guard options, practitioners often make the mistake of sampling too many without mastering any. Here's a framework for choosing:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li><strong>Gi-focused competitor:</strong> Spider guard or DLR — both are proven at every level</li>
            <li><strong>No-gi specialist:</strong> Butterfly guard or single-leg X — no grip dependency</li>
            <li><strong>Short/stocky build:</strong> Butterfly guard — less leverage needed, more upper body control</li>
            <li><strong>Long legs:</strong> Spider guard and DLR — your reach becomes a weapon</li>
            <li><strong>Leg lock focused:</strong> Single leg X, K-guard, ashi garami — connects guard to leg lock system</li>
          </ul>
          <p className="text-zinc-300">Pick one primary guard and develop two or three connecting guards that complement it. Deep mastery of one system beats shallow knowledge of five.</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
          <h2 className="text-2xl font-black mb-3">Build Your Open Guard Game with AI</h2>
          <p className="text-zinc-300 mb-4">Try AIBJJ's AI Coach to get personalized advice on your open guard. Tell the AI your strengths, body type, and competition goals — it builds a custom open guard curriculum for you.</p>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block">Get Your Open Guard Plan →</Link>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Open Guard Retention</h2>
          <p className="text-zinc-300 mb-4">Open guard retention is even more critical than in closed guard. Without the lock, your guard can be broken in an instant. The core principles of keeping your open guard:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2">
            <li>Maintain grips at all costs — when you lose grips, you're on defense</li>
            <li>Move your hips constantly — don't let them pin your hips</li>
            <li>Shrimp and re-frame before they can establish side control</li>
            <li>Know your guard recovery positions — what do you do when DLR gets passed?</li>
            <li>Turtle is a valid last resort — it's better than giving up back mount</li>
          </ul>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-black mb-4">Ready to level up your BJJ?</h2>
        <p className="text-zinc-400 mb-6">AIBJJ's AI coaching system helps you build a complete open guard game with personalized technique recommendations.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Join AIBJJ Free</Link>
      </section>

      <footer className="border-t border-zinc-800 px-4 py-8 text-center text-zinc-500 text-sm">
        <Link href="/">AIBJJ</Link> · <Link href="/terms">Terms</Link> · <Link href="/privacy">Privacy</Link>
      </footer>
    </div>
  )
}
