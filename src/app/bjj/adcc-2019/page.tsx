import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400; // Re-generate daily
export const metadata: Metadata = {
  title: "ADCC 2019: Gordon Ryan's Statement Performance | AIBJJ",
  description: "ADCC 2019 in Anaheim, California was one of the greatest grappling events in history. Gordon Ryan's dominant absolute victory cemented his status as the gr",
};

export default function Page() {
  const tags = ["adcc", "gordon-ryan", "no-gi", "leg-locks", "competition"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <nav className="sticky top-0 z-40 border-b border-zinc-800 bg-[#0a0a0a]/95 backdrop-blur px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map(tag => (
            <Link key={tag} href={`/bjj/tag/${tag}`}
              className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:border-red-600/50 hover:text-red-400 transition-colors">
              #{tag}
            </Link>
          ))}
        </div>
        <h1 className="text-4xl font-black sm:text-5xl">ADCC 2019: Gordon Ryan's Statement Performance</h1>
        <p className="mt-4 text-xl text-zinc-400">ADCC 2019 in Anaheim, California was one of the greatest grappling events in history. Gordon Ryan's dominant absolute victory cemented his status as the greatest no-gi grappler alive.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">The Event</h2>
            <p>ADCC 2019 was held in Anaheim, California — the first time the event was held in the United States in many years. The crowd was massive, the competition was deep, and the performances were historic. The event featured the deepest field of talent ever assembled for a submission grappling competition, with world champions from every weight class competing at the peak of their abilities.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Gordon Ryan's Absolute Domination</h2>
            <p>Gordon Ryan entered both the 99kg division and the absolute. He finished every match in the 99kg division by submission, then backed up a full weight class to compete in the absolute against athletes weighing significantly more. He submitted Buchecha, Andre Galvao, and multiple other champions on his way to the absolute title. The performance left no doubt about his status at the top of submission grappling.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Other Highlights</h2>
            <p>Beyond Ryan's performance, ADCC 2019 featured memorable matches throughout. The women's divisions saw high-level technical performances. The lighter weight classes delivered explosive, technical grappling. Felipe Pena's performance, Garry Tonon's submission hunting, and various upsets kept fans engaged throughout a two-day event that many consider the best grappling event ever held.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Impact on the Sport</h2>
            <p>ADCC 2019 accelerated the professionalization of submission grappling. The event's success demonstrated that there was a viable market for high-level no-gi competition. It helped establish the foundation for the explosion of professional grappling events — WNO, SUBVERSIV, and others — that followed in the years after.</p>
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
