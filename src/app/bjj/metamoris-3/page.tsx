import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Metamoris 3: Historic Submission-Only Grappling Event | AIBJJ",
  description: "Metamoris 3 was a premier submission-only grappling tournament featuring elite BJJ athletes competing in innovative match formats and rule sets.",
};

export default function Page() {
  const tags = ["Metamoris 3", "submission-only grappling", "BJJ tournament", "elite competition"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Metamoris 3: Historic Submission-Only Grappling Event</h1>
        <p className="mt-4 text-xl text-zinc-400">Metamoris 3 was a premier submission-only grappling tournament featuring elite BJJ athletes competing in innovative match formats and rule sets.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Overview</h2>
            <p>Metamoris 3 took place on November 16, 2013, at the Shrine Exposition Center in Los Angeles, continuing the prestigious submission-only grappling series. The event featured some of the world's most elite Brazilian Jiu-Jitsu athletes competing under innovative rule sets designed to encourage dynamic, submission-focused grappling. Unlike traditional IBJJF competitions that relied heavily on points and advantages, Metamoris matches emphasized positional dominance and submission attempts. The tournament showcased athletes across multiple weight classes and included both individual matches and team-based competitions. Metamoris 3 represented a significant moment in the evolution of modern BJJ competition, attracting international talent and setting high standards for technical excellence. The event was broadcast to a global audience, reflecting growing mainstream interest in submission grappling as a sport and martial art discipline.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Results and Champions</h2>
            <p>Metamoris 3 featured several exceptional performances from world-class competitors. Marcio Cruz and Roger Gracie engaged in high-level matches that demonstrated their technical proficiency and competitive spirit. Rafael Mendes, known for his innovative leg lock systems and explosive style, competed against elite-level opposition, showcasing techniques that would influence modern grappling. André Galvão brought his renowned technical prowess and wrestling-based approach to his matches. The competition saw various submission-only victories and draws, with some matches going the distance without submissions but displaying excellent positional grappling. The results highlighted the depth of talent in the submission-only grappling world, with victories often decided by near-submission situations, escape attempts, and dominant control positions. These outcomes contributed significantly to the event's reputation for showcasing authentic, technical grappling where submission attempts and escapes directly influenced match outcomes.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Notable Matches and Moments</h2>
            <p>Metamoris 3 produced several memorable matchups that exemplified high-level grappling. Matches featured world champions competing under submission-only rules, creating intense moments where any lapse in technique could result in submission. The event showcased innovative guard systems, impressive leg lock exchanges, and dominant top position control sequences. Athletes demonstrated their commitment to submission grappling by actively pursuing finishes rather than playing safe, positional strategies. Notable matches featured technical exchanges that highlighted both the offensive and defensive components of modern BJJ, including heel hook sequences, arm lock attempts, and triangle choke setups. The event's format encouraged continuous action and submission-oriented grappling throughout each match. Draws in several matches demonstrated the difficulty of securing submissions against elite-level opponents, with both competitors showing exceptional defense and escape skills. These matches became reference points for submission-only grappling enthusiasts and influenced how athletes approached technical training and competition strategy.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Historical Significance</h2>
            <p>Metamoris 3 represented a crucial moment in the legitimization of submission-only grappling as a major competitive format within Brazilian Jiu-Jitsu. The series helped establish an alternative to points-based IBJJF competitions, influencing how elite athletes trained and competed. By showcasing submission-only matches with substantial prize purses and high-level athletes, Metamoris demonstrated that this format could attract world-class talent and sustained audience interest. The event contributed to the growing emphasis on leg lock systems and foot lock techniques in modern BJJ, as these submission methods flourished under submission-only rule sets. Metamoris 3 helped shape conversations about competition formats within the grappling community, encouraging innovation in rule sets and match structures. The tournament's success influenced subsequent submission-only events and tournaments worldwide. Athletes who competed at Metamoris 3 became ambassadors for submission-focused grappling, bringing these techniques and philosophies back to their home academies. The event's legacy continues influencing how BJJ is taught, trained, and competed at elite levels globally.</p>
          </section>
        </div>
        <div className="mt-16 rounded-2xl border border-red-900/30 bg-red-950/20 p-8 text-center">
          <h2 className="text-2xl font-black">Train Smarter with AI Coaching</h2>
          <p className="mt-2 text-zinc-400">Track your training, get personalized coaching, and build your game plan.</p>
          <Link href="/auth/signup" className="mt-5 inline-block rounded-xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700">Start Free</Link>
        </div>
        <div className="mt-10">
          <h3 className="text-lg font-bold text-white mb-4">Explore More</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/bjj" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">BJJ Encyclopedia</Link>
            <Link href="/academies" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">Find an Academy</Link>
            <Link href="/bjj-techniques" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">Technique Library</Link>
            <Link href="/coach" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">AI Coach</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
