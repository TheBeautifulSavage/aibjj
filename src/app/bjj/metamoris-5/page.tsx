import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Metamoris 5: Premier Submission-Only Grappling Event | AIBJJ",
  description: "Explore Metamoris 5, the prestigious submission-only BJJ tournament featuring elite grapplers competing in superfights and brackets.",
};

export default function Page() {
  const tags = ["Metamoris 5", "BJJ Tournament", "Submission Grappling", "Brazilian Jiu-Jitsu"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Metamoris 5: Premier Submission-Only Grappling Event</h1>
        <p className="mt-4 text-xl text-zinc-400">Explore Metamoris 5, the prestigious submission-only BJJ tournament featuring elite grapplers competing in superfights and brackets.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Overview</h2>
            <p>Metamoris 5 took place on November 22, 2014, at the Shrine Exposition Center in Los Angeles, California. The event continued the Metamoris series' tradition of hosting elite-level submission-only grappling competition, featuring both individual superfights and tournament brackets. The promotion emphasized technical excellence and competitive integrity by eliminating point scoring, focusing exclusively on submissions, advantages, and stalling penalties. The event attracted world-class athletes from various martial arts backgrounds, including professional wrestlers, judokas, and Brazilian Jiu-Jitsu champions. Metamoris 5 represented a significant milestone in the promotion's evolution, showcasing the growing legitimacy of submission-only grappling as a serious competitive format. The event drew considerable attention from the grappling community and casual fans interested in watching pure technical exchanges without the constraints of traditional point-based scoring systems that dominated other BJJ tournaments.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Results and Champions</h2>
            <p>Metamoris 5 featured several high-profile matches that determined champions across different weight classes and superfight matchups. Notable competitors included established BJJ legends and rising stars seeking to cement their legacies in the submission-only format. The tournament showcased diverse grappling styles, from classical Brazilian Jiu-Jitsu techniques to wrestling-influenced approaches and leg lock specialists. Winners demonstrated exceptional technical proficiency, adaptability, and the ability to execute submissions under pressure against elite-level opposition. The event's brackets and superfights produced multiple memorable performances that resonated within the grappling community. Competitors who succeeded at Metamoris 5 gained significant credibility and recognition, as victory in such prestigious submission-only events was considered a true measure of technical excellence and competitive prowess in modern grappling circles.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Notable Matches and Moments</h2>
            <p>Metamoris 5 delivered several compelling matchups that exemplified high-level submission grappling. The superfights featured established champions facing dangerous challengers, creating dynamic technical exchanges that kept audiences engaged throughout the event. Notable moments included impressive submission finishes, display of intricate positional dominance, and exciting scrambles that showcased the technical depth of modern grappling. Some matches went the distance without submissions, highlighting the defensive skills of top-level competitors. The event featured grappling personalities known for their submission hunting abilities and others celebrated for their defensive acumen. These matchups demonstrated the evolution of submission-only grappling as a legitimate competitive sport, where technical mastery and strategic planning proved essential. The entertaining displays of skill contributed to Metamoris 5's reputation as a premier showcase for elite grappling talent and innovative techniques.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Historical Significance</h2>
            <p>Metamoris 5 represented a crucial chapter in the promotion's mission to establish submission-only grappling as a legitimate competitive format distinct from traditional point-based BJJ tournaments. The event contributed significantly to the growing recognition that submission grappling deserved dedicated professional platforms. Metamoris's emphasis on eliminating points and focusing on submissions influenced how the broader grappling community evaluated competitor skill and legitimacy. The promotion helped elevate submission-only grappling's profile among fans and athletes, demonstrating sustained interest in this format. Metamoris 5 also highlighted the international scope of elite grappling, attracting competitors from diverse backgrounds and regions. The event's success reinforced the viability of premium submission-only events and inspired future promotions to adopt similar formats. Though Metamoris eventually ceased operations, the promotion's legacy persists in how modern grappling tournaments structure competitions and evaluate technical excellence, with submission-only events now being regular occurrences at major BJJ competitions worldwide.</p>
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
