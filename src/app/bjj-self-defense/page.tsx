import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BJJ for Self Defense: Real-World Applications | AIBJJ",
  description: "Is BJJ good for self defense? Learn why Brazilian Jiu-Jitsu is one of the most effective self-defense martial arts and what to focus on for real-world scenarios.",
};

export default function BJJSelfDefensePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "BJJ for Self Defense: Real-World Applications",
            description: "Why Brazilian Jiu-Jitsu is highly effective for real-world self defense and what aspects of BJJ training are most applicable to street situations.",
            author: { "@type": "Organization", name: "AIBJJ" },
            publisher: { "@type": "Organization", name: "AIBJJ", url: "https://aibjj.com" },
          }),
        }}
      />

      {/* Nav */}
{/* Hero */}
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-black sm:text-5xl">BJJ for Self Defense: Real-World Applications</h1>
        <p className="mt-4 text-xl text-zinc-400">When a real physical confrontation happens, it almost always ends on the ground. BJJ is the only martial art that specifically trains you to control, submit, or disengage from someone on the ground — making it the most practical self-defense system available.</p>
        <div className="mt-8 flex gap-4">
          <Link href="/auth/signup" className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700">Try AIBJJ Free</Link>
          <Link href="/pricing" className="rounded-lg border border-zinc-700 px-6 py-3 font-semibold text-zinc-300 hover:border-zinc-500">See Pricing</Link>
        </div>
      </div>

      {/* Content */}
      <article className="mx-auto max-w-4xl px-6 pb-20 prose prose-invert prose-zinc max-w-none">
        <h2 className="text-2xl font-bold text-white">Why BJJ Dominates in Real Confrontations</h2>
        <p className="text-zinc-300">The statistics from early UFC events proved what martial artists had theorized for decades: most fights end up on the ground. Strike-based martial arts practitioners were helpless once taken down. BJJ practitioners — even with no striking training — consistently controlled and submitted opponents twice their size.</p>
        <p className="text-zinc-300">Why? Because BJJ is trained live, against resisting opponents, at full resistance. Most martial arts don't do this. BJJ practitioners actually know their techniques work because they test them every sparring session against partners who don't want to get submitted.</p>

        <h2 className="text-2xl font-bold text-white mt-10">What to Prioritize for Self-Defense BJJ</h2>
        <p className="text-zinc-300">Sport BJJ and self-defense BJJ overlap significantly, but with some important differences. For self-defense applications, prioritize:</p>
        <ul className="text-zinc-300 space-y-2">
          <li><strong>Clinch work and takedowns:</strong> Getting the fight to the ground safely</li>
          <li><strong>Mount and back control:</strong> Dominant positions that let you control without taking damage</li>
          <li><strong>Chokes over joint locks:</strong> Rear naked choke is the gold standard — quick, decisive, allows you to control the unconscious attacker</li>
          <li><strong>Standing clinch and disengage:</strong> Sometimes the best outcome is creating distance and leaving</li>
          <li><strong>Defense against strikes while on the ground:</strong> Posture, framing, getting back to your feet</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-10">What to Deprioritize for Street Scenarios</h2>
        <p className="text-zinc-300">Some BJJ techniques that work well in sport competition are less practical in self-defense situations:</p>
        <ul className="text-zinc-300 space-y-2">
          <li><strong>Inverted guards and berimbolo:</strong> Putting yourself upside down is dangerous on concrete with a striking attacker</li>
          <li><strong>50/50 and leg lock battles:</strong> Extended wrestling for leg positions makes no sense without rules and with possible multiple attackers</li>
          <li><strong>Guard pulling:</strong> Sitting to guard on concrete in street clothes isn't viable</li>
        </ul>
        <p className="text-zinc-300">This doesn't mean leg locks are useless — a heel hook ends a fight fast. But the setup sequence is different from competition leg lock play.</p>

        <h2 className="text-2xl font-bold text-white mt-10">The Size and Strength Equation</h2>
        <p className="text-zinc-300">Gracie Jiu-Jitsu was famously developed as a system for smaller people to defeat larger attackers. The leverage principles of BJJ remain effective regardless of size difference — a properly applied rear naked choke works whether you're 130 lbs or 230 lbs.</p>
        <p className="text-zinc-300">The key is that you actually have the technique down cold, not just "know" it theoretically. Regular live sparring against resisting partners makes your technique real. This is what makes BJJ practitioners actually capable in real situations — not just technically knowledgeable.</p>

        <h2 className="text-2xl font-bold text-white mt-10">Build Your Self-Defense Foundation</h2>
        <p className="text-zinc-300">Start with the fundamentals that transfer directly: mount escapes (in case you're taken down and mounted), clinch control (to neutralize a stand-up attacker), rear naked choke (to end the encounter quickly), and basic takedowns or trips.</p>
        <p className="text-zinc-300">Use AIBJJ's <Link href="/bjj-technique-tracker" className="text-red-400 hover:text-red-300">technique tracker</Link> to catalog your self-defense techniques and track your drilling. The <Link href="/bjj-training-journal" className="text-red-400 hover:text-red-300">training journal</Link> helps you note which scenarios you've trained and what gaps remain. For beginners, see our <Link href="/bjj-for-beginners" className="text-red-400 hover:text-red-300">complete starting guide</Link>.</p>
      </article>

      {/* Bottom CTA */}
      <div className="bg-zinc-900 border-t border-zinc-800 py-16 text-center">
        <h2 className="text-3xl font-black">Ready to level up your jiu-jitsu?</h2>
        <p className="mt-3 text-zinc-400">AI coaching, technique library, training journal — all in one place.</p>
        <Link href="/auth/signup" className="mt-6 inline-block rounded-lg bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700">Start Free Today</Link>
      </div>
    </div>
  );
}
