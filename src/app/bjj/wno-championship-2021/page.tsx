import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "WNO Championship 2021 - Results & Highlights | AIBJJ",
  description: "Comprehensive coverage of WNO Championship 2021, featuring top BJJ competitors, match results, and tournament highlights.",
};

export default function Page() {
  const tags = ["WNO", "BJJ", "Grappling", "Tournament", "2021"];
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
        <h1 className="text-4xl font-black sm:text-5xl">WNO Championship 2021 - Results & Highlights</h1>
        <p className="mt-4 text-xl text-zinc-400">Comprehensive coverage of WNO Championship 2021, featuring top BJJ competitors, match results, and tournament highlights.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Overview</h2>
            <p>The WNO Championship 2021 was a prestigious grappling and Brazilian Jiu-Jitsu tournament that showcased elite competitors from around the world. Held as part of the Who's Number One series, the event featured both gi and no-gi divisions across multiple weight classes. The tournament attracted top-ranked athletes representing various academies and nations, competing at the highest levels of professional BJJ. WNO events are known for their competitive format, fair rulesets, and production quality that emphasizes technical excellence and entertainment value. The 2021 edition continued this tradition, bringing together some of the sport's most accomplished grapplers. The event featured rigorous bracket-style competition with athletes competing for titles, prize money, and prestige within the grappling community. The championship format ensured that only the most skilled and dedicated competitors could claim victory in their respective divisions.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Results and Champions</h2>
            <p>The WNO Championship 2021 crowned several notable champions across its divisions. Top competitors demonstrated exceptional technical skill, strength, and tactical awareness throughout the tournament. The light heavyweight and heavyweight divisions featured particularly intense competition with multiple submission victories and impressive performances. Champions earned recognition and prize purses, solidifying their status among the world's elite grapplers. Standout performances included displays of high-level leg lock systems, guard passing sequences, and positional control that exemplified modern BJJ competition standards. The tournament results reflected the evolution of grappling techniques and training methodologies across different academies worldwide. Multiple competitors showcased their specializations, whether in leg lock attacks, wrestling-based approaches, or traditional guard-based games. The 2021 championship results contributed to updated rankings and provided momentum for athletes heading into subsequent competitions throughout the grappling season.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Notable Matches and Moments</h2>
            <p>Several matches at WNO Championship 2021 delivered memorable performances that captivated the grappling audience. Technical exchanges between world-class competitors highlighted the sophistication of modern BJJ, with athletes executing advanced guard systems, guard passes, and submission transitions with precision. Back-and-forth battles showcased the defensive improvements in the sport, with athletes countering leg lock attacks and maintaining composure under pressure. Submission victories proved particularly exciting, with athletes securing victories through leg locks, arm triangles, and traditional chokes. The tournament featured compelling narratives as established competitors faced rising challengers determined to make statements on the world stage. Several matches went the distance, decided by advantages and points in tightly contested affairs. The production quality allowed viewers to appreciate technical details and positioning nuances that characterized championship-level competition. These performances generated discussion within the BJJ community regarding technique innovation and the highest standards of grappling excellence.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Historical Significance</h2>
            <p>WNO Championship 2021 represented a significant moment in professional grappling as the sport continued its global expansion and mainstream recognition. The event reflected BJJ's evolution beyond traditional tournament formats, emphasizing entertainment and accessibility while maintaining competitive integrity. The championship contributed to establishing clearer hierarchies among elite grapplers and provided benchmarks for ranking systems. The 2021 edition occurred during a period of significant growth for professional grappling platforms, with increased viewership and sponsorship opportunities. Results from the tournament influenced athlete trajectories, match-making decisions, and ranking updates across the community. The event demonstrated the viability of high-production grappling events that attract diverse audiences beyond traditional BJJ insiders. WNO Championship 2021 remains part of the documented history of modern professional BJJ competition, showcasing the technical sophistication and athletic caliber the sport had achieved by this point. The tournament contributed to ongoing conversations about competition rules, weight class structures, and how best to promote grappling worldwide.</p>
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
