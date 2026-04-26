import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ Belt System Explained: All Ranks & Requirements | AIBJJ',
  description: 'Complete guide to the BJJ belt system — white, blue, purple, brown, and black belt. Learn what each belt means, typical timelines, and what separates each rank.',
}

export default function BeltSystemPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
<section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6">BJJ Belt System Explained: All Ranks & Requirements</h1>
        <p className="text-xl text-zinc-400 mb-8">The BJJ belt system is one of the most demanding in martial arts. A BJJ black belt typically takes 8-12 years of consistent training. Each belt represents a real functional ability level — not a test you pass, but a skill threshold you reach.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <div>
          <h2 className="text-3xl font-black mb-4">Overview: The Adult Belt System</h2>
          <p className="text-zinc-300 mb-4">The adult BJJ belt system (16+ years) consists of five belts with degree stripes:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li><strong>White Belt:</strong> No minimum time — beginners to ~2 years</li>
            <li><strong>Blue Belt:</strong> Minimum 16 years old (IBJJF), typically 1-3 years training</li>
            <li><strong>Purple Belt:</strong> Minimum 2 years at blue belt (IBJJF), typically 3-6 years total</li>
            <li><strong>Brown Belt:</strong> Minimum 1 year at purple belt (IBJJF), typically 5-9 years total</li>
            <li><strong>Black Belt:</strong> Minimum 1 year at brown belt (IBJJF), typically 8-12+ years total</li>
          </ul>
          <p className="text-zinc-300">These are IBJJF minimum time requirements. Most quality instructors take significantly longer. A 5-year black belt is rare; most credible black belts have 10+ years of serious training.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">White Belt</h2>
          <p className="text-zinc-300 mb-4">White belt is the beginning. No requirements to receive it — you put it on when you walk in the door. What white belt means: you're learning the foundational language of BJJ. Positions, basic movements, the first submissions. Most people spend 1-3 years here.</p>
          <p className="text-zinc-300 mb-4">White belts with stripes indicate progression within the white belt rank. Typically four stripes before blue belt, though this varies by school.</p>
          <p className="text-zinc-300">Focus: survival, fundamental positions, basic submissions, consistent attendance.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Blue Belt</h2>
          <p className="text-zinc-300 mb-4">The blue belt is the first milestone — it represents genuine BJJ competence. A blue belt can defend themselves effectively, has functional positions, and can submit untrained people easily. It typically takes 1-3 years to earn from consistent training.</p>
          <p className="text-zinc-300 mb-4">Blue belt is often the longest belt in terms of time spent — 2-4 years is common before purple belt. The "blue belt blues" (where many practitioners quit) happens because the blue belt sees how much they don't know.</p>
          <p className="text-zinc-300">Focus: developing a guard system, building a passing game, competition experience.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Purple Belt</h2>
          <p className="text-zinc-300 mb-4">Purple belt is where BJJ practitioners begin developing their unique game. A purple belt has a personal style — specific techniques and systems that reflect their body type, attributes, and preferences. They're dangerous to most blue belts and give brown and black belts real competition.</p>
          <p className="text-zinc-300 mb-4">Purple belt typically requires 4-7 years of serious training. It's considered the "intermediate" rank, but a purple belt with 5 years of training would destroy most martial artists from any other discipline.</p>
          <p className="text-zinc-300">Focus: developing a complete game, understanding transitions, building submission chains, advanced guard work.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Brown Belt</h2>
          <p className="text-zinc-300 mb-4">Brown belt is advanced BJJ. Brown belts typically have a complete A-game, can compete at high levels, and are often teaching or assistant-instructing. The gap between purple and brown is significant — brown belts have fully developed systems that function against elite practitioners.</p>
          <p className="text-zinc-300 mb-4">Brown belt requires minimum 1 year after purple (IBJJF), but most practitioners spend 1-3 years at brown. Total training time: typically 7-10 years.</p>
          <p className="text-zinc-300">Focus: refinement, competition, teaching, filling remaining gaps in the game.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Black Belt</h2>
          <p className="text-zinc-300 mb-4">The BJJ black belt is one of the most respected ranks in martial arts — earned, not given. A black belt represents mastery of the fundamentals, deep knowledge of the art, and typically a decade of consistent training. It's not the end of the journey; it's the beginning of deeper understanding.</p>
          <p className="text-zinc-300 mb-4">Black belt degrees (1st through 6th degree) represent time served and further development. Red and black belt (7th-8th degree) and red belt (9th-10th degree) are the highest ranks, typically requiring 30+ years at black belt.</p>
          <p className="text-zinc-300">Focus: teaching, competition coaching, further technical development, understanding BJJ as a whole art.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Kids and Teen Belt System</h2>
          <p className="text-zinc-300 mb-4">Children (under 16) have a separate belt system:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>White, grey/white, grey, grey/black</li>
            <li>Yellow/white, yellow, yellow/black</li>
            <li>Orange/white, orange, orange/black</li>
            <li>Green/white, green, green/black</li>
          </ul>
          <p className="text-zinc-300">When a student turns 16, their youth rank converts to an adult rank (typically white or blue belt depending on experience level). A youth green belt would typically receive a blue belt at 16.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Why BJJ Belts Take So Long</h2>
          <p className="text-zinc-300 mb-4">BJJ belts represent functional ability tested against resistance — not memorized kata or forms. You can't fake a black belt in BJJ: you'll get exposed on the mat within minutes if your skill doesn't match the belt.</p>
          <p className="text-zinc-300 mb-4">This is why BJJ belt promotions are slower than most martial arts. A karate practitioner can earn a black belt in 2-3 years by passing forms tests. A BJJ black belt has proven their ability thousands of times against resisting training partners over a decade.</p>
          <p className="text-zinc-300">This also explains why BJJ practitioners typically beat practitioners from other martial arts in grappling situations — the BJJ belt system creates people who can actually do what the belt says.</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
          <h2 className="text-2xl font-black mb-3">Track Your BJJ Progress with AI</h2>
          <p className="text-zinc-300 mb-4">Try AIBJJ's AI Coach to get personalized advice for your current belt level and what you need to develop to reach the next one. The AI coach creates a targeted progression plan.</p>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block">Get Your Belt Progression Plan →</Link>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Belt Promotions: How They Work</h2>
          <p className="text-zinc-300 mb-4">Belt promotions in BJJ are given by your instructor, not by a testing committee (unlike many other martial arts). Your instructor watches you train over years, evaluates your skill, and promotes when they feel you've reached the next level.</p>
          <p className="text-zinc-300">This means promotion is not automatic — it's a recognition by someone who has seen you develop. Some schools have formal graduation ceremonies; others simply tie a new belt on you after class. Either way, it means your instructor trusts your skill.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-black mb-4">Ready to level up your BJJ?</h2>
        <p className="text-zinc-400 mb-6">Join AIBJJ and get personalized AI coaching at every belt level.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Join AIBJJ Free</Link>
      </section>

      <footer className="border-t border-zinc-800 px-4 py-8 text-center text-zinc-500 text-sm">
        <Link href="/">AIBJJ</Link> · <Link href="/terms">Terms</Link> · <Link href="/privacy">Privacy</Link>
      </footer>
    </div>
  )
}
