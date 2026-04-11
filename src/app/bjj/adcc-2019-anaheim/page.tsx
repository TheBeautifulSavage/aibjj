import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "ADCC 2019 Anaheim: Submission Grappling Championship | AIBJJ",
  description: "ADCC 2019 Anaheim brought elite submission grappling to California with historic performances from top international competitors.",
};

export default function Page() {
  const tags = ["ADCC", "grappling", "BJJ", "2019", "submission wrestling"];
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
        <h1 className="text-4xl font-black sm:text-5xl">ADCC 2019 Anaheim: Submission Grappling Championship</h1>
        <p className="mt-4 text-xl text-zinc-400">ADCC 2019 Anaheim brought elite submission grappling to California with historic performances from top international competitors.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Overview</h2>
            <p>ADCC 2019 took place in Anaheim, California, representing one of the premier submission grappling tournaments in the world. The event showcased the highest level of no-gi Brazilian Jiu-Jitsu and submission wrestling talent from across the globe. Athletes competed in multiple weight divisions with both men's and women's brackets, featuring competitors from Europe, South America, Asia, and North America. The tournament maintained ADCC's strict ruleset emphasizing submission finishes and positional control without the gi. The event drew massive crowds of grappling enthusiasts eager to witness world-class technical exchanges and dramatic submissions. ADCC 2019 served as a crucial testing ground for elite grapplers preparing for submission-only competition at the highest levels, with performances that would significantly impact rankings and future matchmaking in the sport.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Results and Champions</h2>
            <p>Gordon Ryan dominated the heavyweight division, cementing his position as one of the sport's most dominant forces with a decisive performance. In the middleweight division, Giancarlo Bodoni showcased exceptional technique, while the lighter weight classes featured intense competition among internationally ranked competitors. The women's division produced standout performances from elite female grapplers demonstrating the sport's growing strength in women's submission wrestling. Multiple weight classes saw competitors from different backgrounds and training lineages competing at the absolute peak of the sport. Several matches went the distance, with judges' decisions adding drama to the tournament's conclusion. The results reflected the global evolution of submission grappling, with athletes from various continents proving their technical proficiency. Champions earned significant prize money and elevated status within the submission grappling community, validating their training and preparation strategies.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Notable Matches and Moments</h2>
            <p>ADCC 2019 Anaheim produced several memorable performances that became iconic within the grappling community. High-level exchanges showcased the technical sophistication of modern submission wrestling, with competitors demonstrating advanced leg lock systems, upper body submissions, and positional transitions. Several matches featured dramatic comebacks and last-second scrambles that captivated audiences. The tournament highlighted the increasing athleticism and technical depth across multiple weight divisions. Notable competitors delivered intense performances emphasizing submission attempts and calculated risk-taking. Women's matches generated significant enthusiasm, with athletes displaying world-class technique and intensity. Multiple weight divisions featured unexpected upsets alongside dominant performances from favored competitors. The event successfully balanced technical grappling with entertainment value, delivering matches that satisfied both casual observers and technical analysts. These performances established benchmarks for submission grappling excellence and influenced training methodologies worldwide.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Historical Significance</h2>
            <p>ADCC 2019 Anaheim represented a crucial moment in submission grappling's mainstream evolution and acceptance as a legitimate elite sport. The event demonstrated significant growth in women's participation and competitiveness at the highest levels. It showcased the maturation of leg lock systems and modern positional strategies that had developed since previous ADCC events. The tournament reinforced North America's importance as a grappling hub, attracting international competitors seeking prestigious titles. Results from ADCC 2019 influenced future tournament matchmaking, sponsorship opportunities, and athlete rankings throughout the submission wrestling world. The event highlighted the globalization of grappling expertise, with successful competitors representing diverse training backgrounds and international lineages. ADCC 2019 contributed to the sport's accelerating professionalization, with prize money and sponsorships attracting elite athletes. The tournament's success validated ADCC's continued relevance as the premier submission grappling championship, influencing the sport's trajectory for years following the event.</p>
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
