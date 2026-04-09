import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ Guard: Complete Guide to All Guard Positions | AIBJJ',
  description: 'Master every BJJ guard position — closed, half, open, spider, De La Riva, butterfly and more. Complete guide with attacks, sweeps, and transitions.',
}

export default function BJJGuardPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <nav className="border-b border-zinc-800 px-4 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">Get Started Free</Link>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6">BJJ Guard: Complete Guide to All Guard Positions</h1>
        <p className="text-xl text-zinc-400 mb-8">The guard is the heart of Brazilian Jiu-Jitsu. Whether you&apos;re playing closed guard, half guard, or any of the many open guard variations, mastering guard positions transforms you from a survivor to a threat from your back.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <div>
          <h2 className="text-3xl font-black mb-4">Why the Guard Is the Foundation of BJJ</h2>
          <p className="text-zinc-300 mb-4">Unlike most martial arts where being on your back equals losing, BJJ turns the bottom position into a weapon. The guard allows a smaller, weaker person to control, attack, and submit a larger opponent using leverage, hip movement, and technique.</p>
          <p className="text-zinc-300 mb-4">Understanding guard isn&apos;t just about surviving—it&apos;s about creating the offensive platform. Every guard position has its own set of sweeps, submissions, and transitions. The practitioner who understands all guard families becomes extraordinarily difficult to pass and dangerous to engage.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Closed Guard</h2>
          <p className="text-zinc-300 mb-4">The closed guard is where most BJJ journeys begin. With your legs locked around your opponent&apos;s waist, you control their posture and limit their options. From here the attack tree is enormous: armbars, triangles, omoplatas, kimuras, guillotines, sweeps.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Key Closed Guard Principles</h3>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Break posture before attacking — a posturing opponent is hard to submit</li>
            <li>Control the sleeve/wrist and collar simultaneously for maximum control</li>
            <li>Use hip escapes (shrimping) to create angles for attacks</li>
            <li>The cross collar choke is a reliable submission even against experienced opponents</li>
            <li>When they posture, threaten the armbar; when they hunch, go for the choke</li>
          </ul>
          <p className="text-zinc-300">Closed guard is the testing ground. If you can&apos;t control someone in closed guard, your open guard will fall apart even faster. Spend real time here before chasing flashier positions.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Half Guard</h2>
          <p className="text-zinc-300 mb-4">Half guard exists in the space between closed guard and being passed. What started as a desperation position has evolved into one of the deepest guards in modern BJJ. Deep half guard, lockdown, Z-guard, and K-guard are entire systems in themselves.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Half Guard Concepts</h3>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Underhook battle: getting the underhook from half guard opens the whole offense</li>
            <li>The lockdown controls the leg and creates a framing tool for reversal</li>
            <li>Deep half guard allows sweeps to a dominant top position</li>
            <li>Half guard is a realistic transitional position — don&apos;t panic when you end up here</li>
          </ul>
          <Link href="/bjj-half-guard" className="text-red-400 hover:text-red-300 font-semibold">→ Full half guard guide</Link>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Open Guard Variations</h2>
          <p className="text-zinc-300 mb-4">Open guard is a broad category covering any guard where the legs aren&apos;t closed. The practitioner must use feet, grips, and angles to control distance and create attacks. Here are the major open guard systems:</p>

          <h3 className="text-xl font-bold mb-2 text-red-400">Spider Guard</h3>
          <p className="text-zinc-300 mb-4">Spider guard uses sleeve grips with feet on the biceps to control both arms. It&apos;s highly effective in the gi and creates excellent leverage for sweeps like the lasso-to-overhead and triangle setups. The foot-on-bicep frame limits your opponent&apos;s ability to pass or posture.</p>

          <h3 className="text-xl font-bold mb-2 text-red-400">De La Riva Guard</h3>
          <p className="text-zinc-300 mb-4">DLR hooks around the outside of the lead leg with the other foot on the hip. It&apos;s a dynamic guard that transitions easily to berimbolo, back takes, X-guard, and single legs. DLR became famous through Caio Terra and the Mendes brothers, who used it to dominate competition.</p>

          <h3 className="text-xl font-bold mb-2 text-red-400">Butterfly Guard</h3>
          <p className="text-zinc-300 mb-4">Butterfly guard uses both hooks inside the opponent&apos;s thighs with your feet inside. Combined with upper body control (underhooks, overhooks, collar), butterfly guard creates powerful sweeps. It&apos;s Marcelo Garcia&apos;s signature position — proof that mastery of fundamentals beats exotic guards.</p>

          <h3 className="text-xl font-bold mb-2 text-red-400">X-Guard</h3>
          <p className="text-zinc-300 mb-4">X-guard is a deep single-leg control where both legs entangle one of the opponent&apos;s legs. Created by Marcelo Garcia, it&apos;s one of the highest-percentage sweeps in competition grappling. Once you establish X-guard, sweeping is almost mechanical.</p>

          <h3 className="text-xl font-bold mb-2 text-red-400">Lasso Guard</h3>
          <p className="text-zinc-300 mb-4">Lasso guard wraps one arm through a sleeve grip, creating a coiled control that limits shoulder movement. Highly effective for off-balancing opponents before sweeps or triangles. Common in flexible practitioners and gi-focused competitors.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Rubber Guard</h2>
          <p className="text-zinc-300 mb-4">Eddie Bravo&apos;s rubber guard system requires significant flexibility but creates a closed guard variation where the leg is pushed over the opponent&apos;s shoulder. The Meathook, Invisible Collar, and Zombie positions chain into submission attempts that are genuinely difficult to defend. Best for flexible practitioners.</p>
          <Link href="/bjj-rubber-guard" className="text-red-400 hover:text-red-300 font-semibold">→ Full rubber guard guide</Link>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Leg Entanglement Guards: 50/50, Ashi Garami, Single Leg X</h2>
          <p className="text-zinc-300 mb-4">Modern leg lock systems have created their own guard family. Ashi garami (single leg X) and 50/50 are positional guards that set up heel hooks, knee bars, and ankle locks. These positions are dominant in no-gi competition and have changed the strategic landscape of BJJ.</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2">
            <li>50/50 creates a mutual threat scenario — whoever attacks first often wins</li>
            <li>Inside heel hook from ashi garami is one of the highest percentage finishes in modern grappling</li>
            <li>Single leg X transitions to outside heel hooks, knee bars, and calf slicers</li>
            <li>Leg entanglement guards require understanding both offense and defense simultaneously</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Guard Retention: Keeping Your Guard</h2>
          <p className="text-zinc-300 mb-4">Guard retention is arguably more important than any specific guard position. The best guard players are those who can recover when their guard gets broken. Key retention principles:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Hip movement is everything — frame and shrimp before they can establish side control</li>
            <li>Use the knee shield as a defensive frame to buy time to recover</li>
            <li>Learn to spin to turtle position when guard recovery isn&apos;t available</li>
            <li>Anticipate the pass direction and move pre-emptively</li>
            <li>Grip the pants, sleeve, or collar to slow the pass and create time</li>
          </ul>
          <p className="text-zinc-300">Guard retention is a cardio problem as much as a technique problem. If you&apos;re too tired to move your hips, your guard will be passed regardless of how good your technique is.</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
          <h2 className="text-2xl font-black mb-3">Build Your Guard Game with AI Coaching</h2>
          <p className="text-zinc-300 mb-4">Try AIBJJ&apos;s AI Coach to get personalized advice on which guard positions suit your body type, flexibility, and game. Upload your training notes and get a customized guard curriculum.</p>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block">Get Your Guard Game Plan →</Link>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">How to Choose Your Guard</h2>
          <p className="text-zinc-300 mb-4">With so many options, choosing a guard to specialize in depends on several factors:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li><strong>Body type:</strong> Longer legs favor spider and lasso; shorter, stocky builds may prefer butterfly or half guard</li>
            <li><strong>Flexibility:</strong> Rubber guard and DLR require more flexibility; butterfly and closed guard do not</li>
            <li><strong>Gi vs No-Gi:</strong> Many open guards rely on gi grips; butterfly and closed guard translate well to both</li>
            <li><strong>Your instructor&apos;s expertise:</strong> Learn what your instructor excels at — you&apos;ll get better feedback</li>
          </ul>
          <p className="text-zinc-300">Don&apos;t scatter. Pick one guard family, learn it deeply, then build connecting guards around it. The practitioners who get good fastest are those who go deep rather than wide.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Guard in Competition vs. Training</h2>
          <p className="text-zinc-300 mb-4">Your competition guard and training guard should overlap but not be identical. In competition, you want your highest-percentage positions — the ones that work under pressure against resistant opponents. In training, experiment with new guards, take risks, and learn from failures.</p>
          <p className="text-zinc-300">Track your guard pass rate in training. If someone is passing you at a high rate, identify which position is failing and address it directly. <Link href="/bjj-training-tips" className="text-red-400 hover:text-red-300">Systematic training</Link> beats random drilling.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-black mb-4">Ready to level up your BJJ?</h2>
        <p className="text-zinc-400 mb-6">AIBJJ gives you an AI coach that analyzes your game and builds a personalized training plan around your guard.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Join AIBJJ Free</Link>
      </section>

      <footer className="border-t border-zinc-800 px-4 py-8 text-center text-zinc-500 text-sm">
        <Link href="/">AIBJJ</Link> · <Link href="/terms">Terms</Link> · <Link href="/privacy">Privacy</Link>
      </footer>
    </div>
  )
}
