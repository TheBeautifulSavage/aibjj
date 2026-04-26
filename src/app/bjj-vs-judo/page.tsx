import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ vs Judo: Which Should You Train? | AIBJJ',
  description: 'BJJ vs judo compared in depth. Throws, ground work, competition rules, culture, and self-defense applications. Find out which art is right for you.',
}

export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
<section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6">BJJ vs Judo: Which Should You Train?</h1>
        <p className="text-xl text-zinc-400 mb-8">BJJ and judo share the same parent art — Jigoro Kano's Kodokan Judo — yet evolved into radically different sports. Understanding their differences helps you choose the right art and train smarter in either.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-12 prose prose-invert prose-zinc max-w-none">
        <h2>Shared History</h2>
        <p>BJJ descends directly from judo. Mitsuyo Maeda, a Kodokan judo student, emigrated to Brazil in the early 1900s and taught his grappling art to the Gracie family. Carlos and Hélio Gracie adapted and refined Maeda's teachings — emphasizing ground fighting and submission mechanics over the throwing emphasis of Japanese judo. Over decades, the adaptation became its own distinct art: Brazilian Jiu-Jitsu.</p>
        <p>Both arts share foundational techniques: the hip throw (o goshi / seoi nage), the rear naked choke, the armbar, and various pins. But their competitive evolution diverged dramatically, producing very different technical emphases and cultures.</p>

        <h2>Where Judo Excels</h2>
        <h3>Throwing Techniques</h3>
        <p>Judo's throwing game is without parallel. With hundreds of classified throws (nage waza) covering hip throws, shoulder throws, foot sweeps, trips, and sacrifice throws, judo practitioners develop a standup repertoire that BJJ training rarely approaches. Elite judoka develop throws through years of dedicated uchi komi (entry drilling) that builds the timing, muscle memory, and sensitivity needed to throw resisting opponents.</p>
        <p>Key judo throws that translate powerfully to BJJ: osoto gari, seoi nage, tai otoshi, uchi mata, ouchi gari, kouchi gari, tomoe nage. Any BJJ practitioner serious about their standup game should study basic judo throw mechanics.</p>

        <h3>Grip Fighting</h3>
        <p>Judo grip fighting is incredibly sophisticated. Judoka develop nuanced understanding of collar and sleeve control — which grips to establish, which to deny, and how to use grip denial to control the entire standup exchange. This grip-fighting expertise transfers directly to gi BJJ, where collar and sleeve control is equally critical for both passing and guard games.</p>

        <h2>Where BJJ Excels</h2>
        <h3>Ground Work</h3>
        <p>Modern competitive judo has largely abandoned ne waza (groundwork) due to rule changes that penalize extended ground fighting. In competition judo, you have a very limited time to complete a submission or hold before the referee returns the match to standing. This has caused judo's ground game to atrophy significantly at the competitive level — most modern competitive judoka have relatively undeveloped submission game compared to BJJ practitioners of equivalent experience.</p>
        <p>BJJ's entire focus is the ground game — sweeps, passes, submissions, positional advancement. The depth of BJJ's ground work is simply not available anywhere else.</p>

        <h3>Submissions</h3>
        <p>Judo allows chokes and armbars in ne waza but restricts leg locks, wristlocks, and other submissions that BJJ uses freely. BJJ's submission repertoire is far wider, including heel hooks, kneebars, toe holds, triangle chokes from multiple positions, guillotines, and more. For submission-focused training, BJJ offers far more technical development.</p>

        <h2>Competition Rules Compared</h2>
        <p><strong>Judo:</strong> A match ends immediately by ippon (full point) for a clean throw that lands the opponent largely on their back, or for a hold of 20 seconds (osekomi). Waza-ari (half point) is scored for lesser throws or holds of 10-19 seconds. Two waza-ari equal ippon. Ground fighting has strict time limits.</p>
        <p><strong>BJJ:</strong> Points are accumulated for positional dominance (takedown, sweep, guard pass, back take) and submission wins the match immediately. There's no equivalent of ippon for a throw — throws score 2 points (takedown value), the same as a guard pull. Ground time is unlimited.</p>
        <p>These rule differences explain why judo emphasizes explosive throwing and BJJ emphasizes methodical ground work — each sport is optimized for its own scoring system.</p>

        <h2>Training Culture</h2>
        <p>Traditional judo dojos tend to be more formal — formal bowing ceremonies, titles, rigid hierarchy. BJJ academies are generally more casual, especially in Western countries where the sport has a surfing/beach culture influence. Both train hard, but the social environment differs noticeably.</p>
        <p>Judo also tends to be less expensive to start (many community clubs and recreational programs exist through judo's Olympic status) while BJJ can be more expensive at specialized academies.</p>

        <h2>Which Should You Train?</h2>
        <p>Both. The ideal grappler trains judo or wrestling for standup and BJJ for the ground game. If you can only choose one: BJJ offers a more complete self-defense and combat grappling curriculum. If you already train BJJ and want to add standup: judo is the most directly compatible art — the gi work, ground transitions, and submission mechanics overlap significantly. Many BJJ black belts also hold significant judo rank for exactly this reason.</p>
        <p>Use AIBJJ's training journal to log your cross-training sessions from judo and track how the throws and grip work are translating to your BJJ game.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block not-prose">Track Your Grappling Progress →</Link>
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
