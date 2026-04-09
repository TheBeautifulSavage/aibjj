import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ Mental Game: Mindset for the Mat | AIBJJ',
  description: 'Master the BJJ mental game — mindset for training and competition, dealing with frustration and plateaus, ego management, and the psychology of jiu-jitsu progress.',
}

export default function MentalGamePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <nav className="border-b border-zinc-800 px-4 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">Get Started Free</Link>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6">BJJ Mental Game: Mindset for the Mat</h1>
        <p className="text-xl text-zinc-400 mb-8">Technique wins matches; mindset wins championships. The mental game in BJJ is not secondary to the physical game — at high levels, it is inseparable from it. Here&apos;s how to develop the mental game that separates good from elite.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <div>
          <h2 className="text-3xl font-black mb-4">The Training Mindset</h2>
          <p className="text-zinc-300 mb-4">Most practitioners focus on what they&apos;re doing physically but not on how they&apos;re approaching it mentally. The training mindset involves several interconnected elements:</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Growth vs. Fixed Mindset</h3>
          <p className="text-zinc-300 mb-4">Carol Dweck&apos;s growth mindset research applies directly to BJJ. A fixed mindset person thinks talent is fixed — &quot;I&apos;m not good at guard.&quot; A growth mindset person thinks ability develops — &quot;I haven&apos;t developed my guard yet.&quot; The fixed mindset protects ego at the cost of growth; the growth mindset accepts discomfort in service of development.</p>
          <p className="text-zinc-300 mb-4">In BJJ: every tap is feedback. Every bad round is data. Every position you struggle with is a clear indication of where to focus your drilling. The growth mindset turns every failure into a learning event.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Present Focus</h3>
          <p className="text-zinc-300 mb-4">The best practitioners have complete present-moment focus during training. They&apos;re not thinking about the last tap or the upcoming match — they&apos;re in this round, in this position, right now. Developing this presence is a skill that must be cultivated deliberately.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Dealing with Ego</h2>
          <p className="text-zinc-300 mb-4">Ego is the biggest obstacle to BJJ development. The practitioners who tap most frequently, who seek out better training partners, who don&apos;t defend against new techniques, and who ask questions without embarrassment — these are the practitioners who improve fastest.</p>
          <p className="text-zinc-300 mb-4">Ego in BJJ manifests as:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Refusing to tap to certain training partners</li>
            <li>Avoiding positions where you&apos;re weak</li>
            <li>Defending criticism from instructors</li>
            <li>Comparing belt level rather than developing skill</li>
            <li>Going 100% against newer students to &quot;win&quot;</li>
          </ul>
          <p className="text-zinc-300">The antidote to ego is deliberate exposure to your weaknesses. Train in your worst positions. Roll with the people who tap you most. Ask for feedback. The short-term discomfort compounds into long-term excellence.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Managing Frustration and Plateaus</h2>
          <p className="text-zinc-300 mb-4">Every BJJ practitioner hits plateaus — periods where progress feels invisible. Understanding why they happen makes them easier to navigate:</p>
          <p className="text-zinc-300 mb-4">Progress in BJJ is not linear. It comes in jumps — often after a period of apparent stagnation. During the plateau, your brain is integrating new patterns, building neural pathways, processing all the information from recent training. The plateau is not a failure; it&apos;s preparation for the next jump.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Breaking Through Plateaus</h3>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Get a private lesson to identify unseen technical issues</li>
            <li>Train with different partners — fresh resistance reveals new problems</li>
            <li>Take a short break (1-2 weeks) — sometimes rest is what the body and mind need</li>
            <li>Change your focus area — if guard has been your focus, work passing for a month</li>
            <li>Add drilling — if you&apos;ve been sparring-heavy, more drilling may be the missing piece</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Competition Psychology</h2>
          <p className="text-zinc-300 mb-4">Competition fear — nervousness, anxiety, fear of losing — is universal and expected. The question is how you respond to it. Elite competitors don&apos;t feel less fear; they&apos;ve developed a different relationship with it.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Pre-Competition Mental Preparation</h3>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li><strong>Visualization:</strong> Mentally rehearse your game plan executing successfully</li>
            <li><strong>Acceptance:</strong> Accept that you might lose — the outcome is not under your full control</li>
            <li><strong>Process focus:</strong> Focus on what you&apos;re going to do, not whether you&apos;ll win</li>
            <li><strong>Reframe nerves:</strong> Adrenaline is a performance enhancer — don&apos;t fight it, use it</li>
          </ul>
          <h3 className="text-xl font-bold mb-2 text-red-400">During Competition</h3>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Breathe — slow, controlled breathing reduces panic under pressure</li>
            <li>Stay in the process — one position at a time, one technique at a time</li>
            <li>Trust your training — if you&apos;ve drilled it thousands of times, your body knows what to do</li>
            <li>Don&apos;t panic from bad positions — stay calm and problem-solve</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">The Long Game: Sustained Motivation</h2>
          <p className="text-zinc-300 mb-4">BJJ is a decade-long minimum commitment to reach black belt. Sustained motivation requires more than excitement — it requires a sustainable relationship with the practice that survives the inevitable hard periods.</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Connect to your deeper purpose — why does BJJ matter to you beyond the sport?</li>
            <li>Find training partners who inspire you — their energy is contagious</li>
            <li>Compete periodically — external goals maintain focus</li>
            <li>Take breaks without guilt — rest is training</li>
            <li>Track your progress — journals and notes show how far you&apos;ve come during hard periods</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Pressure Testing Your Mental Game</h2>
          <p className="text-zinc-300 mb-4">You can&apos;t develop mental toughness in comfortable situations — it requires intentional exposure to discomfort and pressure. Ways to pressure-test your mental game:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Compete — nothing tests the mental game like a stranger trying to submit you</li>
            <li>Roll with the best training partners you have access to</li>
            <li>Deliberately put yourself in bad positions and practice staying calm</li>
            <li>Time yourself in uncomfortable positions and stay technical</li>
          </ul>
        </div>

        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
          <h2 className="text-2xl font-black mb-3">Develop Your BJJ Mental Game with AI</h2>
          <p className="text-zinc-300 mb-4">Try AIBJJ&apos;s AI Coach to get personalized advice on your mental game. Tell the AI your current struggles — plateaus, competition anxiety, frustration — and get targeted strategies to address them.</p>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block">Get Your Mental Game Plan →</Link>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">The High-Performance Mindset</h2>
          <p className="text-zinc-300 mb-4">Elite BJJ practitioners share common mental characteristics — not talent characteristics, but developed ones:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2">
            <li>Long-term orientation: willingness to sacrifice short-term results for long-term development</li>
            <li>Coachability: genuine openness to feedback and instruction</li>
            <li>Problem-solving frame: seeing difficulties as problems to solve, not evidence of limitation</li>
            <li>Identity beyond results: their self-worth doesn&apos;t live or die with match outcomes</li>
            <li>Curiosity: genuine interest in technique, strategy, and the art itself</li>
          </ul>
          <p className="text-zinc-300 mt-4">These characteristics can be developed. They aren&apos;t personality traits you either have or don&apos;t — they&apos;re habits of mind that deliberate practice builds over time.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-black mb-4">Ready to level up your BJJ?</h2>
        <p className="text-zinc-400 mb-6">Develop both the technical and mental dimensions of your game with AIBJJ&apos;s complete coaching system.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Join AIBJJ Free</Link>
      </section>

      <footer className="border-t border-zinc-800 px-4 py-8 text-center text-zinc-500 text-sm">
        <Link href="/">AIBJJ</Link> · <Link href="/terms">Terms</Link> · <Link href="/privacy">Privacy</Link>
      </footer>
    </div>
  )
}
