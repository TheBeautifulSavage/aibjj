import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400; // Re-generate daily
export const metadata: Metadata = {
  title: "Royce Gracie: The Man Who Changed Fighting Forever | AIBJJ",
  description: "Royce Gracie's victories at UFC 1, 2, and 4 single-handedly validated BJJ and ground fighting as essential to any serious martial artist. He is the most hi",
};

export default function Page() {
  const tags = ["royce-gracie", "gracie-family", "bjj-history", "mma"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
<article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map(tag => (
            <Link key={tag} href={`/bjj/tag/${tag}`}
              className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:border-red-600/50 hover:text-red-400 transition-colors">
              #{tag}
            </Link>
          ))}
        </div>
        <h1 className="text-4xl font-black sm:text-5xl">Royce Gracie: The Man Who Changed Fighting Forever</h1>
        <p className="mt-4 text-xl text-zinc-400">Royce Gracie's victories at UFC 1, 2, and 4 single-handedly validated BJJ and ground fighting as essential to any serious martial artist. He is the most historically significant figure in the history of mixed martial arts.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">UFC 1 and the Birth of MMA</h2>
            <p>On November 12, 1993, Royce Gracie entered the first Ultimate Fighting Championship in Denver, Colorado. The event was designed to find the most effective martial art by pitting representatives of different styles against each other with minimal rules. Royce, selected over his more physically imposing brother Rickson for precisely his average build, submitted three opponents in the same night — a boxer, a kickboxer, and a sumo wrestler. The message was undeniable.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">UFC 2 and UFC 4</h2>
            <p>Royce repeated his performance at UFC 2, winning the tournament while fighting four matches in one night. At UFC 4, he won again. His record in early UFC competition stands as one of the most dominant in the event's history. The pattern was the same each time: opponents would engage Royce thinking they could use their striking or wrestling advantage, and he would take them to the ground and submit them.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">The Kimura Match — Ken Shamrock and Dan Severn</h2>
            <p>Royce's victories over Ken Shamrock and Dan Severn — two of the most accomplished wrestlers and submission fighters of the era — demonstrated that BJJ worked even against opponents who understood ground fighting. These matches moved the conversation from 'does ground fighting work?' to 'which ground fighting system is most effective?'</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Impact</h2>
            <p>Royce Gracie's impact on martial arts cannot be overstated. Within years of UFC 1, every serious martial artist in the world was cross-training in BJJ. He single-handedly created the market that now sustains thousands of BJJ academies globally. He continues to compete in masters divisions and teach globally, his place in martial arts history permanently secured.</p>
          </section>
        </div>
        <div className="mt-16 rounded-2xl border border-red-900/30 bg-red-950/20 p-8 text-center">
          <h2 className="text-2xl font-black">Train Like the Pros</h2>
          <p className="mt-2 text-zinc-400">AI coaching, technique library, training journal — everything to level up your BJJ.</p>
          <Link href="/auth/signup" className="mt-5 inline-block rounded-xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700">Start Free</Link>
        </div>
        <div className="mt-10">
          <h3 className="text-lg font-bold text-white mb-4">Explore More</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/bjj" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">BJJ Encyclopedia</Link>
            <Link href="/brazilian-jiu-jitsu" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">Complete BJJ Guide</Link>
            <Link href="/academies" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">Find an Academy</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
