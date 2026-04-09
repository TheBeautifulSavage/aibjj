import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ Blue Belt Requirements: What You Need to Know | AIBJJ',
  description: 'What does it take to earn your BJJ blue belt? Complete guide to blue belt requirements, what skills are expected, how long it takes, and what to focus on after getting it.',
}

export default function BlueBeltPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <nav className="border-b border-zinc-800 px-4 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">Get Started Free</Link>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6">BJJ Blue Belt Requirements: What You Need to Know</h1>
        <p className="text-xl text-zinc-400 mb-8">The blue belt is the first major milestone in BJJ — it represents real, functional grappling competence. But what does it actually take to earn one? Here&apos;s what instructors are looking for and what you should be developing.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <div>
          <h2 className="text-3xl font-black mb-4">What the Blue Belt Represents</h2>
          <p className="text-zinc-300 mb-4">The blue belt in BJJ signifies that you have genuine, functional grappling ability. You understand the major positions, can escape from bad positions, have a real offense, and can make significant resistance from other white belts and give blue belts real work.</p>
          <p className="text-zinc-300 mb-4">It&apos;s not a beginner belt — it&apos;s the first real belt. The gap between white and blue is enormous; the gap between blue and purple is larger than most people expect.</p>
          <p className="text-zinc-300">In self-defense terms, a blue belt BJJ practitioner can handle themselves against untrained or poorly-trained attackers, and has genuine competence in ground fighting that no other martial art systematically develops at the early belt levels.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Typical Blue Belt Requirements</h2>
          <p className="text-zinc-300 mb-4">BJJ has no universal belt requirements — each instructor and school evaluates differently. However, most quality black belt instructors look for similar things:</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Time on Mat</h3>
          <p className="text-zinc-300 mb-4">Typically 1-3 years of consistent training (3+ days per week). Some athletic individuals with wrestling backgrounds earn blue belt in 6-12 months; others take 3+ years. Consistency matters more than raw time.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Technical Requirements</h3>
          <p className="text-zinc-300 mb-4">A blue belt should demonstrate:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li><strong>Escapes:</strong> Reliable mount escape, side control escape, and back escape</li>
            <li><strong>Guard:</strong> Functional closed guard with multiple attacks; basic open guard awareness</li>
            <li><strong>Guard passing:</strong> Can pass white belt guards, knows 2-3 reliable passes</li>
            <li><strong>Submissions:</strong> Can finish armbars, triangles, RNC, and basic chokes against resistance</li>
            <li><strong>Positional awareness:</strong> Knows where they are and what to do from every major position</li>
          </ul>
          <h3 className="text-xl font-bold mb-2 text-red-400">Behavioral Requirements</h3>
          <p className="text-zinc-300 mb-4">Most instructors also consider:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Consistent attendance and attitude</li>
            <li>Respectful behavior to all training partners</li>
            <li>Helping newer students when appropriate</li>
            <li>Ego management — tapping without drama</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">How Long Does Blue Belt Take?</h2>
          <p className="text-zinc-300 mb-4">Average time from white to blue belt: 1-2 years for consistent (3x per week) training. Variables that affect timeline:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li><strong>Wrestling/judo background:</strong> Can cut 6-12 months off the timeline</li>
            <li><strong>Training frequency:</strong> 5x per week accelerates; 1x per week extends significantly</li>
            <li><strong>Quality of instruction:</strong> A great coach accelerates progress dramatically</li>
            <li><strong>Private lessons:</strong> Focused instruction closes gaps faster</li>
            <li><strong>Competition experience:</strong> Competing regularly accelerates progress</li>
          </ul>
          <p className="text-zinc-300">Don&apos;t chase the belt. Chase competence. The belt follows the ability — when you&apos;re ready, a good instructor recognizes it.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">The Blue Belt Blues: What Happens After</h2>
          <p className="text-zinc-300 mb-4">The &quot;blue belt blues&quot; is a well-documented phenomenon — many practitioners quit BJJ shortly after receiving their blue belt. The blue belt sees how much they don&apos;t know. It&apos;s humbling in a different way than white belt humility.</p>
          <p className="text-zinc-300 mb-4">What happens: they get tapped by all the other blue belts, they realize purple belt is far away, and they lose motivation. The solution:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Reframe the goal — it&apos;s about mastery, not belt progression</li>
            <li>Pick specific areas to develop, not general &quot;get better at BJJ&quot;</li>
            <li>Compete — external goals maintain motivation</li>
            <li>Train with a variety of partners — not just the same people each week</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">What to Focus on at Blue Belt</h2>
          <p className="text-zinc-300 mb-4">Blue belt is where your game identity begins to form. Key areas to develop:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li><strong>Develop a guard system:</strong> Pick one guard to specialize in and go deep</li>
            <li><strong>Develop a passing game:</strong> 2-3 reliable passes that work together</li>
            <li><strong>Build submission chains:</strong> Don&apos;t just have one submission from guard — build combinations</li>
            <li><strong>Competition:</strong> Compete at blue belt level to calibrate your skills</li>
          </ul>
        </div>

        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
          <h2 className="text-2xl font-black mb-3">Build Your Blue Belt Game with AI</h2>
          <p className="text-zinc-300 mb-4">Try AIBJJ&apos;s AI Coach to get personalized advice on your blue belt development. Whether you&apos;re pursuing blue belt or recently received it, the AI coach creates your next-phase curriculum.</p>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block">Get Your Blue Belt Plan →</Link>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Blue Belt in Competition</h2>
          <p className="text-zinc-300 mb-4">Blue belt divisions in competition are often the most competitive — many practitioners spend 3-5 years at blue belt before receiving purple. This means you&apos;re competing against experienced, skilled grapplers.</p>
          <p className="text-zinc-300">Blue belt world champions have often spent years refining their game at this level. Don&apos;t rush past blue belt — extract every lesson from it.</p>
          <Link href="/bjj-belt-system" className="text-red-400 hover:text-red-300 font-semibold">→ Complete BJJ belt system guide</Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-black mb-4">Ready to level up your BJJ?</h2>
        <p className="text-zinc-400 mb-6">Whether you&apos;re chasing blue belt or developing your blue belt game, AIBJJ&apos;s AI coach has your plan.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Join AIBJJ Free</Link>
      </section>

      <footer className="border-t border-zinc-800 px-4 py-8 text-center text-zinc-500 text-sm">
        <Link href="/">AIBJJ</Link> · <Link href="/terms">Terms</Link> · <Link href="/privacy">Privacy</Link>
      </footer>
    </div>
  )
}
