import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Metamoris 6: Grappling Elite Compete in Epic Showdown | AIBJJ",
  description: "Metamoris 6 featured world-class submission grappling matches with elite competitors. Explore key results, notable moments, and historical impact.",
};

export default function Page() {
  const tags = ["Metamoris 6", "submission grappling", "BJJ tournament", "professional grappling"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Metamoris 6: Grappling Elite Compete in Epic Showdown</h1>
        <p className="mt-4 text-xl text-zinc-400">Metamoris 6 featured world-class submission grappling matches with elite competitors. Explore key results, notable moments, and historical impact.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Overview</h2>
            <p>Metamoris 6 took place on September 12, 2015, at the Los Angeles Memorial Sports Arena, continuing the prestigious submission grappling series. The event featured world-class grapplers competing in absolute and weight class divisions, showcasing pure grappling without points or advantages—only submissions and positional control determined victory. This format emphasized technical skill and submission mastery, distinguishing Metamoris from traditional point-based BJJ competitions. The event attracted top talent from Brazilian Jiu-Jitsu, catch wrestling, and submission grappling communities worldwide. Competitors faced extended match times, ranging from 15 to 40 minutes depending on their division, creating intense battles of endurance and technical proficiency. The production quality reflected Metamoris's commitment to professional presentation, with expert commentary and high-definition broadcasting. The atmosphere was electric, drawing dedicated grappling enthusiasts and professionals seeking to test themselves against elite-level opponents in the most challenging format available.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Results and Champions</h2>
            <p>Metamoris 6 delivered decisive victories and thrilling performances across multiple divisions. Notable champions and winners demonstrated exceptional technical mastery in their respective matches. The absolute division showcased the tournament's most competitive bracket, featuring heavy weights competing without weight restrictions. Several matches concluded with spectacular submissions, highlighting the dangerous leg lock systems and upper body techniques prevalent in modern submission grappling. Competitors employed diverse strategies ranging from aggressive positional pressure to calculated submission hunting. The weight-class divisions ensured fair competition while allowing specialists in different size categories to demonstrate their prowess. Multiple matches went the distance, showcasing incredible conditioning and technical resilience. The event solidified Metamoris's reputation for hosting legitimate, competitive grappling at the highest professional level. Winners earned significant prize purses and elevated status within the grappling community. The performances established benchmarks for technical excellence and submission grappling standards, influencing training methodologies across the international BJJ scene.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Notable Matches and Moments</h2>
            <p>Metamoris 6 featured several standout matches that captivated audiences and demonstrated the evolution of submission grappling techniques. High-level leg lock exchanges showcased the sophisticated leg lock systems that had become fundamental to modern grappling. Competitors executed complex heel hook transitions, reap variations, and knee reap combinations with precision and speed. Several matches featured dramatic momentum swings, with grapplers reversing seemingly dominant positions or escaping submission attempts through superior technique. Extended wrestling sequences tested competitors' conditioning and fundamental wrestling abilities. The event highlighted the increasing emphasis on leg lock training and sophistication, reflecting broader trends in contemporary BJJ. Multiple matches featured exciting scrambles and transitions that demonstrated dynamic problem-solving under pressure. Spectacular finishes and near-submissions created memorable moments that resonated throughout the grappling community. The technical level displayed at Metamoris 6 influenced training camps worldwide, with competitors studying match footage to improve their grappling systems and submission defenses. These performances contributed significantly to professional grappling's legitimacy as a showcase for elite technical skill.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Historical Significance</h2>
            <p>Metamoris 6 represented a pivotal moment in professional submission grappling's evolution, continuing the series' mission to promote pure grappling without point-based scoring systems. The event demonstrated sustained commercial viability and fan enthusiasm for submission-only competition, validating the format's appeal to audiences seeking legitimate technical grappling. Metamoris established standards for professional presentation in submission grappling, influencing how subsequent events approached broadcasting and production quality. The tournament highlighted the increasing technical sophistication of the international grappling community, with competitors pushing boundaries in leg lock systems and positional control. By 2015, Metamoris had established itself as the premier showcase for submission grappling excellence, attracting competitors seeking legitimate tests against elite-level opposition. The event contributed to leg lock techniques becoming mainstream in BJJ training curricula worldwide. Metamoris 6 reinforced that submission grappling could sustain professional athlete careers and attract dedicated audiences, paving pathways for future professional grappling promotions. The technical innovations displayed at this event continue influencing modern BJJ methodologies and competition strategies across all levels of the sport today.</p>
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
