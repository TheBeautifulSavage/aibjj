import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ Black Belt: What It Really Takes | AIBJJ',
  description: 'What does it really take to earn a BJJ black belt? The timeline, the skills required, what the journey demands, and what black belt actually means in Brazilian jiu-jitsu.',
}

export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
<section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6">BJJ Black Belt: What It Really Takes</h1>
        <p className="text-xl text-zinc-400 mb-8">A BJJ black belt is one of the most respected ranks in martial arts — and one of the hardest to earn. This guide gives you the honest picture of what it takes, what it means, and why so few people complete the journey.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-12 prose prose-invert prose-zinc max-w-none">
        <h2>The Most Respected Belt in Martial Arts</h2>
        <p>The BJJ black belt is widely regarded as the most difficult black belt to earn of any martial art. Unlike many martial arts where black belt represents an advanced beginner, a BJJ black belt is a genuine expert — someone who has spent approximately 10+ years developing real, functional grappling skill that can be tested against trained opponents. It's not ceremonial. It has to be earned on the mat.</p>
        <p>The IBJJF minimum age for black belt is 19 years, and the minimum total training time is approximately 10 years (with minimum times at each preceding belt). In practice, most legitimate black belts have been training 10-15 years.</p>

        <h2>The Black Belt Timeline</h2>
        <p>A rough typical timeline for a dedicated practitioner training 3-5 times per week:</p>
        <ul>
          <li>White belt: 6 months – 2 years</li>
          <li>Blue belt: 2-4 years (IBJJF minimum: 2 years)</li>
          <li>Purple belt: 3-5 years total (IBJJF minimum 1.5 years at purple)</li>
          <li>Brown belt: 7-10 years total (IBJJF minimum 1 year at brown)</li>
          <li>Black belt: 10-15+ years total</li>
        </ul>
        <p>These are guidelines, not rules. Exceptional athletes competing at high levels and training full-time can progress faster. Less frequent trainers will take longer. The minimum legitimate black belt timeline under ideal conditions is approximately 8-10 years. Sub-5-year black belts, outside of exceptional circumstances, are rare and often questioned in the BJJ community.</p>

        <h2>What a Black Belt Can Do</h2>
        <p>A BJJ black belt can:</p>
        <ul>
          <li>Handle any basic technique from any position with correct mechanics</li>
          <li>Submit most lower belts reliably from any position they choose</li>
          <li>Be competitive against peers in their age and size class</li>
          <li>Teach technique accurately, identify student errors, and correct them effectively</li>
          <li>Maintain composure under extreme physical and mental pressure</li>
          <li>Have a comprehensive personal game with no glaring positional gaps</li>
          <li>Adapt to unfamiliar situations without completely losing their game</li>
        </ul>
        <p>More importantly, a black belt represents something beyond technical skill: the commitment to train through injuries, setbacks, life changes, and long plateaus that the decade-plus journey requires. The psychological resilience is as much the credential as the technical skill.</p>

        <h2>What the Journey Actually Demands</h2>
        <p>The black belt journey requires:</p>
        <ul>
          <li><strong>Sustained commitment</strong> — 10+ years of consistent training. Life will intervene — injuries, career changes, family, relocation. The black belt journey is navigating all of that without quitting.</li>
          <li><strong>Physical durability</strong> — Years of grappling accumulate physical wear. Developing sustainable training habits, prioritizing recovery, and managing injuries intelligently is mandatory for the long journey.</li>
          <li><strong>Ego management</strong> — You will be beaten by people smaller than you, younger than you, and less experienced than you on your way up. Learning not to define yourself by daily wins and losses is part of the psychological development the journey requires.</li>
          <li><strong>Intellectual engagement</strong> — The black belt journey rewards people who study, analyze, and think about BJJ, not just those who show up and grind. Structured, thoughtful training accelerates development. AIBJJ is built for this kind of deliberate, reflective BJJ study.</li>
        </ul>

        <h2>The Degrees of Black Belt</h2>
        <p>Black belt itself has a degree system in BJJ. A first-degree black belt (no stripe) typically takes 3+ years to reach a first degree. Degrees continue through to tenth degree (reserved for the art's founders and grandmasters). Most active competitors and coaches hold 1st through 4th degree black belts. Notable examples: Roger Gracie is a 2nd degree black belt. Rickson Gracie is an 8th degree red-and-black belt. Hélio Gracie was promoted to 9th degree red belt before his death.</p>

        <h2>The Black Belt as a Beginning</h2>
        <p>Many practitioners describe receiving their black belt as a revelation that they know far less than they thought. The belt doesn't signal completion — it signals readiness to truly begin studying BJJ at depth. This is the paradox of the BJJ black belt: the journey to it produces the capabilities to now genuinely study the art, whereas before you were too busy just surviving training to appreciate the depth available. The black belt is a beginning, not an ending.</p>

        <h2>Should the Belt Be Your Goal?</h2>
        <p>The healthiest approach to the black belt: don't make it the goal. Make becoming as skilled, complete, and capable as possible the goal. The belt will come when you're ready. Students who train to get promoted often miss the point of each stage and don't develop the depth that makes each belt level meaningful. Train to be excellent — the promotions take care of themselves.</p>
        <p>Track your long-term development systematically in AIBJJ. The training data you accumulate over years of journaling your sessions becomes a remarkable record of a journey that most people never complete.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block not-prose">Start Your Journey to Black Belt →</Link>
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
