import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ Drilling: How to Drill Techniques Effectively | AIBJJ',
  description: 'Learn how to drill BJJ techniques for maximum retention and performance. Solo drilling, partner drilling, progressive resistance, and how to structure your drilling practice.',
}

export default function DrillingPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <nav className="border-b border-zinc-800 px-4 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">Get Started Free</Link>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6">BJJ Drilling: How to Drill Techniques Effectively</h1>
        <p className="text-xl text-zinc-400 mb-8">Drilling is the bridge between knowing a technique and owning it. Most practitioners don&apos;t drill enough, and those who do often drill ineffectively. Here&apos;s how to make every drilling rep count.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <div>
          <h2 className="text-3xl font-black mb-4">Why Drilling Matters</h2>
          <p className="text-zinc-300 mb-4">Technique in sparring isn&apos;t learned during sparring — it&apos;s applied during sparring. The learning happens in drilling. You build the neural pathways that allow you to execute under pressure through repetition, not through rolling.</p>
          <p className="text-zinc-300 mb-4">Research on skill acquisition consistently shows that deliberate practice (focused, repetitive work on specific skills with feedback) is the mechanism for improvement — not just &quot;experience.&quot; BJJ drilling is deliberate practice applied to grappling.</p>
          <p className="text-zinc-300">The practitioner who drills 30 minutes before class will outpace the practitioner who shows up right when sparring starts. Over years, this gap becomes enormous.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Types of Drilling</h2>
          <h3 className="text-xl font-bold mb-2 text-red-400">Solo Drilling</h3>
          <p className="text-zinc-300 mb-4">Solo drilling doesn&apos;t require a partner and can be done at home. It builds movement patterns for the fundamental BJJ motions:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Hip escapes (shrimping) across the floor</li>
            <li>Bridges — upa motion</li>
            <li>Technical stand-up</li>
            <li>Guard recovery shadow drilling (without a partner, simulate the motion)</li>
            <li>Submission movement patterns (armbar hip swing, triangle leg throw)</li>
          </ul>
          <p className="text-zinc-300">Solo drilling is underutilized. Even 10 minutes per day of solo fundamental movement drilling compounds enormously over months.</p>

          <h3 className="text-xl font-bold mb-2 text-red-400 mt-6">Cooperative Partner Drilling</h3>
          <p className="text-zinc-300 mb-4">The most common form — your partner cooperates fully to let you drill the technique perfectly. This is for learning movement patterns and building initial motor memory. The goal is perfect reps at a comfortable pace.</p>

          <h3 className="text-xl font-bold mb-2 text-red-400">Constrained/Flow Drilling</h3>
          <p className="text-zinc-300 mb-4">Drilling with light resistance or within a specific constraint. Example: &quot;drill armbars from guard, and your partner can only use a two-handed grip to defend.&quot; This bridges cooperative drilling and full sparring.</p>

          <h3 className="text-xl font-bold mb-2 text-red-400">Positional Sparring (Specific Training)</h3>
          <p className="text-zinc-300 mb-4">Start from a specific position with full resistance. Example: &quot;start in closed guard and only escape if a submission is attempted or a sweep succeeds.&quot; This is the highest-intensity drilling and the closest to sparring while maintaining specificity.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">How Many Reps?</h2>
          <p className="text-zinc-300 mb-4">The number of reps needed to own a technique is higher than most people think. General guidance:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>50-100 reps to start building the movement pattern</li>
            <li>500+ reps to have it available under moderate resistance</li>
            <li>1,000+ reps to have it in competition-pressure situations</li>
            <li>10,000+ reps to own it automatically regardless of pressure</li>
          </ul>
          <p className="text-zinc-300 mb-4">These numbers explain why techniques learned in one class don&apos;t appear in sparring — you haven&apos;t built sufficient reps yet. Consistent drilling is the only path to owning technique.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Progressive Resistance Drilling</h2>
          <p className="text-zinc-300 mb-4">The most effective drilling methodology: progressively increase resistance as you master the technique at each level.</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li><strong>Level 1:</strong> Cooperative — partner offers no resistance, perfect form focus</li>
            <li><strong>Level 2:</strong> Light resistance — partner makes you work but doesn&apos;t prevent the technique</li>
            <li><strong>Level 3:</strong> Moderate resistance — partner actively defends but with limited tools</li>
            <li><strong>Level 4:</strong> Full resistance — sparring with positional specificity</li>
          </ul>
          <p className="text-zinc-300">Only move to the next level when the technique is reliable at the current level. Jumping to full resistance before you own the movement creates bad habits.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">What to Drill</h2>
          <p className="text-zinc-300 mb-4">Not all techniques deserve equal drilling time. Prioritize based on:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li><strong>Highest frequency positions:</strong> What positions come up most in your sparring?</li>
            <li><strong>Your A-game techniques:</strong> The 20% that generates 80% of your results</li>
            <li><strong>Identified weaknesses:</strong> What consistently gets you tapped or passed?</li>
          </ul>
          <p className="text-zinc-300">Don&apos;t drill exotic techniques when your basic ones are still unreliable. Flying armbars don&apos;t matter if your armbar from guard is inconsistent.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Combination Drilling</h2>
          <p className="text-zinc-300 mb-4">Drilling technique combinations rather than single techniques builds the ability to chain attacks. Instead of drilling armbar 50 times, drill &quot;hip bump sweep attempt → kimura when they post → finish or sweep&quot; as one fluid sequence. This is how high-level BJJ actually works — in flows, not single techniques.</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
          <h2 className="text-2xl font-black mb-3">Build Your Drilling Practice with AI</h2>
          <p className="text-zinc-300 mb-4">Try AIBJJ&apos;s AI Coach to get personalized advice on your drilling practice. Tell the AI your current game and it identifies exactly what to drill, in what order, and with what methodology.</p>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block">Build Your Drilling Plan →</Link>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Drilling Partner Etiquette</h2>
          <p className="text-zinc-300 mb-4">Good drilling partners make each other better. Key etiquette:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2">
            <li>Give appropriate resistance — too little teaches bad habits; too much prevents learning</li>
            <li>Give honest feedback when you feel something is wrong</li>
            <li>Alternate who drills — both partners benefit from giving and receiving</li>
            <li>Stay focused during drilling — no phone, no chatting</li>
          </ul>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-black mb-4">Ready to level up your BJJ?</h2>
        <p className="text-zinc-400 mb-6">Transform your drilling practice with AIBJJ&apos;s personalized AI coaching system.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Join AIBJJ Free</Link>
      </section>

      <footer className="border-t border-zinc-800 px-4 py-8 text-center text-zinc-500 text-sm">
        <Link href="/">AIBJJ</Link> · <Link href="/terms">Terms</Link> · <Link href="/privacy">Privacy</Link>
      </footer>
    </div>
  )
}
