import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "EBI 1: Eddie Bravo Invitational - Submission Only Grappling | AIBJJ",
  description: "EBI 1 Eddie Bravo Invitational pioneered submission-only grappling tournaments in 2015, featuring elite BJJ competitors in innovative overtime rules.",
};

export default function Page() {
  const tags = ["EBI", "Eddie Bravo", "Submission Only", "Grappling Tournament", "BJJ"];
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
        <h1 className="text-4xl font-black sm:text-5xl">EBI 1: Eddie Bravo Invitational - Submission Only Grappling</h1>
        <p className="mt-4 text-xl text-zinc-400">EBI 1 Eddie Bravo Invitational pioneered submission-only grappling tournaments in 2015, featuring elite BJJ competitors in innovative overtime rules.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Overview</h2>
            <p>The first Eddie Bravo Invitational (EBI 1) took place on June 6, 2015, at the Los Angeles Convention Center, revolutionizing competitive grappling by introducing submission-only ruleset. Unlike traditional IBJJF tournaments that award points and advantages, EBI 1 featured matches where only submissions, pins, and positional advantages in overtime determined winners. The format included multiple weight divisions showcasing elite Brazilian Jiu-Jitsu athletes competing for titles and substantial prize money. Eddie Bravo, the legendary BJJ instructor and 10th Planet founder, spearheaded this innovative competition format to emphasize finishing techniques and aggressive grappling. The event attracted international competitors and demonstrated growing appetite for alternative tournament structures in the grappling community. EBI 1's success established a blueprint for future submission-only tournaments worldwide, fundamentally influencing how professional grappling competitions were organized and marketed.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Results and Champions</h2>
            <p>EBI 1 crowned multiple weight class champions across various divisions. Garry Tonon, the young phenom from 10th Planet, delivered outstanding performances throughout the tournament, establishing himself as a submission-only specialist. Rafael Lovato Jr. competed at heavyweight, showcasing his wrestling-based grappling approach. The lightweight and middleweight divisions featured fierce competition among established and rising grapplers. Jon Satava, another 10th Planet standout, demonstrated the team's dominance in the event. Multiple competitors successfully advanced through brackets using leg lock attacks, footlock variations, and creative submission chains that submission-only rules specifically encouraged. The tournament's prize purse structure rewarded aggressive finishers, incentivizing dynamic performances. These results validated the submission-only format and proved that eliminating point-based incentives produced more action-oriented matches. Champions gained significant recognition in the grappling community, with many subsequently competing in other prestigious submission-only events and establishing themselves as elite submission specialists.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Notable Matches and Moments</h2>
            <p>EBI 1 featured compelling matches that showcased grappling's highest levels. Garry Tonon's performances particularly stood out, displaying leg lock mastery and submission expertise that captivated audiences. Multiple matches went to overtime rounds, where the innovative format required wrestlers to attack and defend from unique positional scenarios, creating thrilling climactic moments. Competitors executed spectacular submissions including leg lock sequences, shoulder lock combinations, and creative choke variations rarely seen in traditional point-based tournaments. The event highlighted significant stylistic differences between 10th Planet lineage grapplers emphasizing footlocks and leg attacks versus traditional BJJ competitors favoring upper body techniques. Several matches showcased remarkable escapes and defensive positioning, with athletes demonstrating exceptional grappling range. The overall atmosphere reflected genuine competition intensity without the strategic stalling often associated with point-based scoring. These matches generated significant social media attention and replays, helping establish EBI 1's reputation for exciting, submission-focused grappling that prioritized entertainment value and technical excellence.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Historical Significance</h2>
            <p>EBI 1 fundamentally transformed competitive grappling by proving submission-only formats could succeed commercially and athletically. The event challenged IBJJF's dominant tournament structure, demonstrating alternative rule systems appealed to competitors and spectators seeking more action-oriented competition. Eddie Bravo's vision validated leg lock techniques and footlock systems previously underutilized in traditional BJJ, influencing technical development across the sport. The tournament's success spawned multiple sequels and inspired numerous submission-only events globally, including promotions like Submission Underground and other independent circuits. EBI 1 elevated several competitors' careers, establishing them as submission-only specialists and influential figures in modern grappling. The event's emphasis on finishing techniques prompted broader technical evolution in BJJ, with leg lock systems gaining respectability and integration into traditional lineages. Media coverage and online distribution demonstrated strong audience interest in alternative grappling formats beyond IBJJF tournaments. EBI 1's legacy extends beyond the event itself, representing a pivotal moment when submission-only grappling gained legitimacy as serious competitive enterprise, influencing how major organizations subsequently developed their rule structures and tournament offerings.</p>
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
