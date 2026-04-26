import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ Purple Belt: What to Focus On & Expect | AIBJJ',
  description: 'Everything you need to know about BJJ purple belt. What it means, what to focus on technically, how long it takes, and how to make the most of this critical stage.',
}

export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
<section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6">BJJ Purple Belt: What to Focus On & Expect</h1>
        <p className="text-xl text-zinc-400 mb-8">Purple belt is when BJJ gets serious. You've survived white and blue belt — now begins the real technical development. Here's what purple belt means, what to work on, and how to make the most of this transformative rank.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-12 prose prose-invert prose-zinc max-w-none">
        <h2>What Purple Belt Means</h2>
        <p>Purple belt is the third belt in the adult BJJ system (white → blue → purple → brown → black). By purple belt, you've built a legitimate foundation: you understand positional hierarchy, you have functional escapes, you can attack from multiple positions, and you can hold your own against most blue belts comfortably. Purple belt is typically awarded after 3-6 years of consistent training, though this varies significantly by academy and individual progress.</p>
        <p>The IBJJF minimum time at blue belt before purple is 2 years. In practice, most practitioners reach purple belt after 3-5 years total, though some exceptional students achieve it faster and many reach it later — consistency matters more than raw time.</p>

        <h2>What Purple Belt Actually Looks Like</h2>
        <p>A purple belt can:</p>
        <ul>
          <li>Reliably submit most blue belts and some purple belts</li>
          <li>Hold their own against higher belts in positional sparring</li>
          <li>Teach basic technique coherently</li>
          <li>Identify holes in their game and work on them systematically</li>
          <li>Compete at purple belt level in regional and national competitions</li>
          <li>Have a recognizable "game" — positions and techniques they're genuinely dangerous from</li>
        </ul>
        <p>What separates good purple belts from average ones: the quality of technical understanding (not just technical familiarity), the ability to deal with unfamiliar situations calmly, and the development of a cohesive game rather than a collection of isolated techniques.</p>

        <h2>What to Focus on at Purple Belt</h2>
        <h3>Game Development</h3>
        <p>Purple belt is when you should be developing your signature game — the positions and techniques that are distinctly "yours." By blue belt you were collecting techniques; at purple belt, you're curating them. Identify your most reliable positions and go deeper into them rather than continuing to collect new things. The purple belts who stagnate are usually still jumping from technique to technique. The ones who excel are usually going 20 layers deep into a specific position.</p>

        <h3>Transitions and Chains</h3>
        <p>Individual techniques are blue belt thinking. Systems are purple belt thinking. Develop chains: submission A → when defended, submission B → when defended, positional advancement C. Guard attacks → when defended, sweep → when defended, guard retention. Thinking in chains rather than individual moves transforms your rolling from reactive to strategic.</p>

        <h3>Positional Refinement</h3>
        <p>White belts think about surviving. Blue belts think about escaping. Purple belts think about controlling. Develop tight, efficient control in your dominant positions — the kind that higher belts can feel as dead weight, not just proximity. Mount control, back control, and side control should be genuinely difficult for lower belts to escape and at least challenging for higher belts.</p>

        <h3>Mental Game</h3>
        <p>Purple belt is where the mental game becomes as important as the technical game. Competing regularly, dealing with adversity in training (getting tapped, working through injuries, handling ego), and developing genuine composure under pressure are purple belt challenges. How do you respond when a lower belt catches you? How do you handle a technique repeatedly failing? Your mental game is being built now.</p>

        <h2>Purple Belt Challenges</h2>
        <p>Purple belt is notorious for being a difficult belt to progress through. Common challenges:</p>
        <ul>
          <li><strong>Purple belt blues</strong> — A real phenomenon where the excitement of early training fades and the grind of intermediate development sets in. The solution: find specific goals, compete, explore new areas of BJJ that reignite curiosity.</li>
          <li><strong>Pressure from above and below</strong> — Higher belts beat you up; lower belts are sometimes closing the gap. The discomfort here is the development.</li>
          <li><strong>Injury accumulation</strong> — Years of training start to leave marks. Developing sustainable training habits and recovery practices is critical at purple belt.</li>
        </ul>

        <h2>Competition at Purple Belt</h2>
        <p>Purple belt competition is where BJJ competition gets genuinely difficult. Your opponents have real games — you can no longer win on athleticism or a single surprise technique. Compete consistently if at all possible. The losses teach more than the wins. IBJJF Masters and open tournaments provide competitive opportunities for all competitive goals.</p>
        <p>Use AIBJJ to track your competition preparation and results, building a data set of what's working and what needs development in tournament contexts.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block not-prose">Track Your Purple Belt Development →</Link>

        <h2>How Long Will You Stay at Purple Belt?</h2>
        <p>Purple belt typically lasts 3-5 years before promotion to brown belt. IBJJF minimum time at purple belt before brown is 1.5 years. In practice, most practitioners spend 3-4 years at purple. This is one of the longer plateaus in BJJ — use it intentionally. Set goals, compete, develop your game systematically, and embrace the process rather than fixating on the next belt.</p>
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
