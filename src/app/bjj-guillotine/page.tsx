import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Guillotine Choke BJJ: Arm-In, High Elbow & More | AIBJJ',
  description: 'Master the BJJ guillotine choke — arm-in guillotine, high elbow, Marcelo guard guillotine, and finishing details. Complete guide to setups, defenses, and variations.',
}

export default function GuillotinePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <nav className="border-b border-zinc-800 px-4 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">Get Started Free</Link>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6">Guillotine Choke BJJ: Arm-In, High Elbow & More</h1>
        <p className="text-xl text-zinc-400 mb-8">The guillotine choke is one of the most versatile submissions in no-gi grappling and MMA. Available from standing, guard, and scrambles — if your opponent gives you their head, the guillotine should be your instinctive response.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <div>
          <h2 className="text-3xl font-black mb-4">Guillotine Mechanics</h2>
          <p className="text-zinc-300 mb-4">The guillotine can function as either an air choke (windpipe compression) or a blood choke (carotid compression) depending on positioning. The high-elbow guillotine (also called the arm-in guillotine setup) is the most reliable version — it achieves a blood choke using the forearm and bicep to compress the carotid artery on one side.</p>
          <p className="text-zinc-300 mb-4">Traditional guillotines without an elbow-up position are often air chokes — uncomfortable but possible to power through. High-elbow guillotines are blood chokes that work on everyone when positioned correctly.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Standard Guillotine (Front Headlock)</h2>
          <p className="text-zinc-300 mb-4">The front headlock is the foundation. When your opponent shoots a takedown or puts their head down, you wrap around their neck with your arm, clasp your hands, and squeeze. This is the entry-level guillotine — effective against beginners, but experts can easily escape.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Finishing the Standard Guillotine</h3>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Sit back to guard (closed guard) while maintaining the choke</li>
            <li>Arch your back to apply pressure — don&apos;t just squeeze</li>
            <li>Keep the choking arm&apos;s elbow close to your centerline</li>
            <li>Pull up on the head while arching — creates the leverage</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">High Elbow Guillotine (The Marcelo Style)</h2>
          <p className="text-zinc-300 mb-4">Marcelo Garcia popularized the high-elbow guillotine — arguably the most effective guillotine variation. Instead of clasping hands in front of the throat, you position your choking arm&apos;s elbow high, creating a blood choke rather than an air choke.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">High Elbow Setup</h3>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Wrap around the neck, palm of your choking hand facing up</li>
            <li>Drive your elbow UP toward the ceiling as you grab</li>
            <li>The forearm sits against the carotid on one side; elbow covers the other</li>
            <li>Clasp your free hand around your own wrist, not your fist</li>
            <li>Sit back to guard and finish by lifting the elbow higher while pulling their neck down</li>
          </ul>
          <p className="text-zinc-300">The high elbow compresses the carotid on both sides through the arm-and-forearm vice. Marcelo finished this on world champions and elite grapplers — it works at every level.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Arm-In Guillotine</h2>
          <p className="text-zinc-300 mb-4">The arm-in guillotine (also called arm triangle guillotine or 10-finger guillotine) includes the opponent&apos;s arm inside the choke. This prevents the most common defense (posting the arm) but requires proper positioning to avoid a standard guillotine that&apos;s easy to escape.</p>
          <p className="text-zinc-300 mb-4">For the arm-in to work as a blood choke, you must angle your body to the trapped-arm side. This creates the pressure against the carotid rather than just the windpipe. Many practitioners use it incorrectly — if you&apos;re not at an angle, it&apos;s just an air choke that power athletes can endure.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Arm-In Finishing Details</h3>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Angle your body at least 45 degrees toward the trapped arm side</li>
            <li>Hip into them (don&apos;t lie flat) — this maintains the angle</li>
            <li>Wrist grip or &quot;slice grip&quot; (blade of wrist against throat) for maximum pressure</li>
            <li>Squeeze elbows together while lifting the choking arm wrist up</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Guillotine Entries</h2>
          <h3 className="text-xl font-bold mb-2 text-red-400">Sprawl to Guillotine</h3>
          <p className="text-zinc-300 mb-4">When someone shoots a takedown, sprawl back and immediately wrap around their neck. Drive their head down while pulling the neck up. This is the most natural guillotine entry in no-gi grappling and MMA.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Pulling Guard to Guillotine</h3>
          <p className="text-zinc-300 mb-4">When someone shoots on you and you can&apos;t sprawl effectively, grab the guillotine and pull guard simultaneously. Sit back to closed guard with the guillotine locked — now you&apos;re in a controlled finishing position.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Clinch Guillotine</h3>
          <p className="text-zinc-300 mb-4">From a standing clinch, when the opponent lowers their level (preparing for a takedown), snap their head down into the guillotine. Thai boxing practitioners are familiar with neck ties — the guillotine is the submission version of this clinch position.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Guard Guillotine</h3>
          <p className="text-zinc-300 mb-4">From closed guard, when the opponent reaches to grip your collar or reaches with their head forward, you can snatch the guillotine by wrapping around their neck and falling back.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Guillotine Defense</h2>
          <p className="text-zinc-300 mb-4">The best defense against guillotines is prevention — don&apos;t lower your head in a way that exposes your neck. When caught:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li><strong>Turn into the choke:</strong> When they grab the guillotine, spin to face the choking arm side — this often defeats a standard guillotine</li>
            <li><strong>Posture up:</strong> Drive your hips into them and lift your head — prevents them from locking it tight</li>
            <li><strong>Shoulder in the throat:</strong> Drive your choking-side shoulder into their throat area to create space</li>
            <li><strong>Stack:</strong> If they&apos;re in guard, stand and stack — compromises their position</li>
            <li><strong>Arm-in defense:</strong> If you&apos;re arm-in, your main escape is the tuck-and-roll to the non-choking side</li>
          </ul>
        </div>

        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
          <h2 className="text-2xl font-black mb-3">Develop Your Guillotine Game with AI</h2>
          <p className="text-zinc-300 mb-4">Try AIBJJ&apos;s AI Coach to get personalized advice on your guillotine entries and finishing mechanics. The AI identifies what&apos;s missing from your guillotine game and builds a drill-focused curriculum.</p>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block">Get Your Guillotine Plan →</Link>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Guillotine in No-Gi vs. Gi</h2>
          <p className="text-zinc-300 mb-4">The guillotine is primarily a no-gi weapon, but it exists in the gi as well. In gi, lapel grips and collar grips create additional control for guillotine setups. Ezekiel choke from guard in gi is a related concept — arm-based neck attacks from the guard position.</p>
          <p className="text-zinc-300">In no-gi, the guillotine is critical. Without the collar, many choke options disappear. The guillotine, RNC, and triangle remain primary chokes — making the guillotine an essential weapon for <Link href="/no-gi-bjj" className="text-red-400 hover:text-red-300">no-gi practitioners</Link>.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-black mb-4">Ready to level up your BJJ?</h2>
        <p className="text-zinc-400 mb-6">Build a devastating guillotine game with AIBJJ&apos;s personalized AI coaching system.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Join AIBJJ Free</Link>
      </section>

      <footer className="border-t border-zinc-800 px-4 py-8 text-center text-zinc-500 text-sm">
        <Link href="/">AIBJJ</Link> · <Link href="/terms">Terms</Link> · <Link href="/privacy">Privacy</Link>
      </footer>
    </div>
  )
}
