import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Metamoris 2: Submission-Only Grappling Showcase | AIBJJ",
  description: "Metamoris 2 was a premier submission-only grappling event featuring elite BJJ competitors in head-to-head matches without points or time limits.",
};

export default function Page() {
  const tags = ["Metamoris 2", "submission grappling", "BJJ tournament", "no-gi grappling"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Metamoris 2: Submission-Only Grappling Showcase</h1>
        <p className="mt-4 text-xl text-zinc-400">Metamoris 2 was a premier submission-only grappling event featuring elite BJJ competitors in head-to-head matches without points or time limits.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Overview</h2>
            <p>Metamoris 2 took place on August 4, 2012, at the Shown in Los Angeles, California, continuing the legacy of the first Metamoris event. The tournament featured submission-only grappling matches under a unique ruleset that eliminated traditional points and time constraints, instead focusing on submission victories or referee decisions. This format revolutionized competitive grappling by emphasizing technical dominance and submission prowess over positional advantages. The event attracted world-class competitors from various grappling disciplines, including Brazilian Jiu-Jitsu, wrestling, and catch wrestling. Matches were conducted in both gi and no-gi formats, showcasing the versatility of submission grappling across different rule systems. The Metamoris series became known for promoting pure grappling without the strategic point-scoring that sometimes dominated traditional BJJ competitions, creating a more submission-focused competitive environment that appealed to purists and fans seeking exciting, decisive finishes.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Results and Champions</h2>
            <p>Metamoris 2 featured several standout performances from elite grapplers. The event's main attractions included matches between top-tier competitors in their respective weight classes and open divisions. Notable participants included some of the most accomplished Brazilian Jiu-Jitsu black belts and submission specialists of the era. The submission-only format rewarded technical excellence and aggressive grappling, leading to numerous exciting finishes throughout the card. Competitors showcased diverse grappling styles, from traditional BJJ techniques to wrestling-based approaches and leg lock systems. The tournament's structure allowed for competitive matches that often went deep into overtime periods, testing competitors' cardio and mental fortitude alongside technical skill. Winners earned recognition for their submission victories and dominant performances, with the event producing memorable moments that resonated throughout the grappling community. The results reinforced the legitimacy of submission-only grappling as a distinct competitive format worthy of serious consideration alongside traditional BJJ tournaments.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Notable Matches and Moments</h2>
            <p>Metamoris 2 delivered multiple memorable encounters that showcased the technical depth and competitive intensity of submission grappling. The submission-only format frequently resulted in extended matches where competitors battled for positional control and submission opportunities without the pressure of accumulating points. Several matches featured back-and-forth action with both competitors threatening submissions, creating dramatic moments where victory hung in balance. The absence of time limits meant matches could continue until a clear victor emerged through submission or referee stoppage. Notable performances highlighted different grappling specialties, including traditional guard players, wrestlers transitioning to submission grappling, and innovators utilizing leg lock systems. Some matches became legendary within the grappling community for their technical brilliance, intensity, or surprising upset victories. The event demonstrated how the submission-only ruleset encouraged different tactical approaches compared to point-based BJJ competitions, often leading to more aggressive and innovative grappling exchanges. These memorable encounters contributed significantly to Metamoris 2's reputation as a premier grappling event.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Historical Significance</h2>
            <p>Metamoris 2 represented a crucial moment in the evolution of modern grappling competition and helped establish submission-only formats as legitimate alternatives to traditional BJJ tournaments. The event demonstrated substantial fan interest in pure submission grappling, attracting both competitors and spectators seeking a different competitive experience. By eliminating points and emphasizing submissions, Metamoris 2 challenged conventional tournament structures and sparked important discussions about competitive grappling's direction. The success of the series influenced how the grappling community viewed submission-focused competition, leading to increased adoption of similar formats by other organizations. The event's emphasis on technical excellence and decisive finishes resonated with purists who felt traditional point-based systems sometimes prioritized stalling prevention over exciting grappling. Metamoris 2 contributed to the broader narrative of grappling's evolution during the early 2010s, a period marked by rapid technical innovation and stylistic diversity. The tournament's legacy influenced subsequent grappling events and helped legitimize submission-only competition as a respected format worthy of elite competitor participation and serious viewership.</p>
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
