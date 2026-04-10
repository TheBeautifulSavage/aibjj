import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ Sparring Tips: How to Roll Smarter | AIBJJ',
  description: 'Learn how to roll smarter in BJJ — sparring mindset, partner selection, how to learn from rolling, intensity management, and building a complete sparring game.',
}

export default function SparringPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <nav className="border-b border-zinc-800 px-4 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">Get Started Free</Link>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6">BJJ Sparring Tips: How to Roll Smarter</h1>
        <p className="text-xl text-zinc-400 mb-8">Rolling is where BJJ lives. Everything you learn in class gets tested in sparring. But not all sparring is equal — how you roll determines how fast you improve. Here's how to make every round a learning opportunity.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <div>
          <h2 className="text-3xl font-black mb-4">Rolling with Intention</h2>
          <p className="text-zinc-300 mb-4">The difference between practitioners who improve quickly and those who plateau is intention. Intentional rolling means every round has a specific learning goal — not "don't get tapped" but "successfully finish two triangle setups regardless of outcome."</p>
          <p className="text-zinc-300 mb-4">Examples of intentional rolling goals:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Only attack from guard (develop guard offense)</li>
            <li>Work one specific passing sequence only</li>
            <li>Focus entirely on guard retention — don't worry about submitting</li>
            <li>Try to take the back in every round</li>
            <li>Survive the first two minutes without being submitted (for beginners)</li>
          </ul>
          <p className="text-zinc-300">Without intention, rolling becomes "try to survive and occasionally win" — this is fine for beginners but insufficient for anyone serious about improvement.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Managing Intensity in Sparring</h2>
          <p className="text-zinc-300 mb-4">Not every round should be 100% intensity. Varied intensity serves different learning purposes:</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Light Technical Rolling (30-50%)</h3>
          <p className="text-zinc-300 mb-4">Focus on technique, feel, and flow. This is where you integrate new techniques — if you're going too hard, you default to what already works and never develop new skills.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Medium Intensity Rolling (60-80%)</h3>
          <p className="text-zinc-300 mb-4">Competitive but not all-out. This develops timing, reactions, and the ability to maintain technical quality under moderate pressure. Most training should be in this range.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Hard Rolling (90-100%)</h3>
          <p className="text-zinc-300 mb-4">Competition simulation. Useful periodically — especially before competition — to develop mental toughness and test what works under maximum pressure. Not appropriate for every round, every day.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Partner Selection Strategy</h2>
          <p className="text-zinc-300 mb-4">Who you choose to roll with shapes your development. An intentional approach to partner selection:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li><strong>Roll up (better partners):</strong> Humbling but essential — they show you what the next level looks like</li>
            <li><strong>Roll even (same level):</strong> Tests your technique against real resistance without extreme skill disparity</li>
            <li><strong>Roll down (newer partners):</strong> Teaches control, application of techniques with precision</li>
          </ul>
          <p className="text-zinc-300 mb-4">The biggest mistake: only rolling with people you can beat. Your ego gets fed; your game stagnates. Actively seek out the best training partners in the gym — even when it's uncomfortable.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Learning from Getting Tapped</h2>
          <p className="text-zinc-300 mb-4">Every tap is information. Practitioners who get better fast treat submissions as data points — they analyze what happened and extract the lesson.</p>
          <p className="text-zinc-300 mb-4">After getting tapped, ask yourself:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>What position was I in when the submission was set up?</li>
            <li>Was there a moment I could have defended earlier?</li>
            <li>Was it a technical error or a positional error?</li>
            <li>Was I too tired to respond properly?</li>
          </ul>
          <p className="text-zinc-300">Asking your training partner "how did you set that up?" after rolling is one of the highest-value learning activities in BJJ. Most experienced practitioners are happy to explain their attacks.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">The Problem with "Survival Mode"</h2>
          <p className="text-zinc-300 mb-4">Survival mode — rolling without any offense, purely trying to not get tapped — is a trap. It feels safe, but it doesn't develop your game. You're training to avoid positions, not to own them.</p>
          <p className="text-zinc-300 mb-4">The counter-intuitive principle: accept bad positions voluntarily and learn to work from them. Put yourself in mount on purpose and practice escaping. Voluntarily play guard against the best guard passer in the gym. This is how you develop real skills — by facing difficult situations deliberately.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Flow Rolling</h2>
          <p className="text-zinc-300 mb-4">Flow rolling is a light, cooperative form of sparring where the goal is movement and technique — not finishing. Both partners allow techniques to happen and try to respond technically rather than athletically. Flow rolling is excellent for:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Learning new positions with an experienced partner</li>
            <li>Recovery days when you're sore but want to stay sharp</li>
            <li>Developing transitions and position flow</li>
            <li>Drilling new techniques with minimal risk of injury</li>
          </ul>
          <p className="text-zinc-300">Flow rolling is not a substitute for hard rolling — it serves a different purpose. Both are necessary.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Sparring Safety</h2>
          <p className="text-zinc-300 mb-4">Staying healthy means staying on the mat. Sparring safely is not weakness — it's longevity:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Tap early — always. The technique can be seen again; the torn ligament takes 6+ months</li>
            <li>Communicate injuries to training partners before rolling</li>
            <li>Don't crank submissions on training partners — slow, controlled pressure</li>
            <li>Know when to skip rolling — fatigued or sick practitioners are injury risks</li>
            <li>Positional sparring before fully resistant sparring when learning new positions</li>
          </ul>
        </div>

        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
          <h2 className="text-2xl font-black mb-3">Get Personalized Sparring Guidance</h2>
          <p className="text-zinc-300 mb-4">Try AIBJJ's AI Coach to get personalized advice on your rolling game. Tell the AI what positions you struggle with and get specific sparring strategies and positional drills to address them.</p>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block">Get Your Sparring Plan →</Link>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Post-Roll Review</h2>
          <p className="text-zinc-300 mb-4">The session isn't over when you shake hands. Take 5 minutes after training to write down what happened — what worked, what didn't, what to drill. This practice alone will accelerate your development faster than almost anything else.</p>
          <p className="text-zinc-300">The combination of intentional rolling + post-roll review creates a feedback loop that compounds over time. You identify patterns, fix problems, and build on what's working systematically.</p>
          <Link href="/bjj-training-tips" className="text-red-400 hover:text-red-300 font-semibold">→ Complete BJJ training tips guide</Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-black mb-4">Ready to level up your BJJ?</h2>
        <p className="text-zinc-400 mb-6">Roll smarter with AIBJJ's AI coaching system — personalized guidance for your specific rolling game.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Join AIBJJ Free</Link>
      </section>

      <footer className="border-t border-zinc-800 px-4 py-8 text-center text-zinc-500 text-sm">
        <Link href="/">AIBJJ</Link> · <Link href="/terms">Terms</Link> · <Link href="/privacy">Privacy</Link>
      </footer>
    </div>
  )
}
