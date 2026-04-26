import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Polaris 1: Historic Submission-Only Grappling Event | AIBJJ",
  description: "Discover Polaris 1, the groundbreaking submission-only grappling tournament that revolutionized competitive BJJ with innovative rule sets and elite talent.",
};

export default function Page() {
  const tags = ["Polaris 1", "submission-only grappling", "BJJ tournament", "competitive grappling"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Polaris 1: Historic Submission-Only Grappling Event</h1>
        <p className="mt-4 text-xl text-zinc-400">Discover Polaris 1, the groundbreaking submission-only grappling tournament that revolutionized competitive BJJ with innovative rule sets and elite talent.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Overview</h2>
            <p>Polaris 1 took place in London in February 2015, marking the debut of what would become one of the most innovative submission-only grappling promotions in Brazilian Jiu-Jitsu history. The event featured a unique tournament format emphasizing submission victories over points, fundamentally changing how competitive grappling was presented. Polaris introduced several distinctive rule variations designed to encourage aggressive, entertaining matches while maintaining safety standards. The promotion's aesthetic presentation, high production quality, and emphasis on elite-level competitors immediately distinguished it from traditional BJJ tournaments. The event showcased international talent from multiple disciplines, including wrestlers, judokas, and submission specialists. Polaris 1 established the foundation for a promotion that would attract some of the sport's most dynamic and creative grapplers. The tournament format allowed for multiple matches throughout the evening, providing extensive action and showcasing different weight classes and skill levels. The emphasis on submissions created matches where competitors aggressively pursued victory rather than playing for points, resonating strongly with fans seeking authentic grappling competition.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Results and Champions</h2>
            <p>Polaris 1 featured competitive matches across multiple weight divisions, showcasing exceptional grappling talent. The tournament highlighted matches between some of Europe's finest submission wrestlers and Brazilian Jiu-Jitsu competitors. Several veterans of the grappling scene demonstrated their technical proficiency and submission prowess throughout the card. The event produced memorable victories that established momentum for competitors' future careers. Top-level grappling exchanges occurred throughout, with competitors displaying diverse techniques from leg lock systems to upper body submissions. The tournament structure allowed emerging talent to gain significant exposure alongside established names. Key matches demonstrated the highest level of submission-only grappling competition available at the time. Competitors from various backgrounds, including catch wrestling, folkstyle wrestling, and sport BJJ, contributed to the diverse technical showcase. The results established Polaris as a serious competitive platform attracting elite international talent. Victories gained at Polaris 1 carried significant credibility within the grappling community, with success translating to recognition among submission specialists worldwide. The tournament's competitive depth set the standard for future Polaris events.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Notable Matches and Moments</h2>
            <p>Polaris 1 delivered compelling grappling exchanges that exemplified submission-only competition at its finest. Matches featured creative positional exchanges, technical leg lock systems, and decisive submission finishes. Several competitors demonstrated innovative submission sequences that captivated the audience and influenced future grappling trends. The event showcased the contrast between different grappling styles, with wrestlers' pressure-based approaches meeting BJJ competitors' technical guard systems. Matches highlighted the effectiveness of various submission systems, from footlock progressions to neck cranks and chokes. Notable performances established emerging competitors while validating veterans' continued excellence. The production quality enhanced fan engagement, with commentary and replay systems providing technical analysis of submissions and positional transitions. Several matches became benchmarks for submission-only grappling competition, with techniques demonstrated influencing how competitors approached the ruleset. The event successfully balanced competitive intensity with entertainment value, creating matches that were both technically sophisticated and exciting for spectators. Polaris 1's matches generated significant discussion within the grappling community regarding rulesets, submission systems, and competitive standards for submission-only events.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Historical Significance</h2>
            <p>Polaris 1 revolutionized submission-only grappling competition, establishing a new standard for how competitive BJJ could be presented and structured. The event emerged during a period when traditional IBJJF-style tournaments dominated competitive grappling, providing an alternative format emphasizing submission finishes. Polaris 1's success demonstrated significant audience appetite for submission-focused competition without point-based scoring systems. The promotion pioneered high-production presentation standards for grappling events, influencing how subsequent promotions approached broadcasting and media presentation. Polaris established submission-only competition as a legitimate, sustainable competitive format with dedicated fan bases and sponsor support. The event's emphasis on entertaining, aggressive grappling influenced competitors' approaches to ruleset adaptation and match strategy. Polaris 1 elevated submission wrestling's profile internationally, attracting mainstream attention to grappling beyond traditional BJJ communities. The promotion's success inspired numerous imitators and alternative submission-only events, demonstrating the market demand for competition formats beyond conventional IBJJF tournaments. Polaris 1 remains historically significant as the launching point for a promotion that continues shaping submission-only grappling's competitive landscape and technical development worldwide.</p>
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
