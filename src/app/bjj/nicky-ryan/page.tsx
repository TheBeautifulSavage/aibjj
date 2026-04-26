import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Nicky Ryan: BJJ Prodigy and Grappling Champion | AIBJJ",
  description: "Explore Nicky Ryan's remarkable BJJ career, achievements, fighting style, and influence on modern grappling competition.",
};

export default function Page() {
  const tags = ["Nicky Ryan", "Brazilian Jiu-Jitsu", "Grappling Champion", "BJJ Techniques", "Combat Sports"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Nicky Ryan: BJJ Prodigy and Grappling Champion</h1>
        <p className="mt-4 text-xl text-zinc-400">Explore Nicky Ryan's remarkable BJJ career, achievements, fighting style, and influence on modern grappling competition.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Nicky Ryan burst onto the grappling scene as a prodigy, quickly establishing himself as one of the most talented submission grapplers of his generation. Growing up in a household deeply connected to combat sports, Ryan was exposed to high-level instruction and competition from an early age. His development as a grappler was accelerated through consistent training and mentorship from established competitors in the submission grappling community.

Ryan's rise through the competitive ranks was marked by his technical proficiency and innovative approach to leg lock systems. He demonstrated exceptional versatility across different rulesets, competing successfully in both submission grappling and BJJ contexts. His willingness to experiment with techniques while maintaining fundamental soundness set him apart from peers. By his early twenties, Ryan had already compiled an impressive resume of victories against top-ranked competitors, establishing himself as a legitimate contender at the highest levels of competition.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Nicky Ryan's competition record reflects dominance across multiple prestigious grappling platforms and ruleset variations. He has competed extensively in ADCC Submission Wrestling World Championships, the sport's most prestigious submission grappling tournament, where he faced the world's elite competitors. Ryan has secured notable victories against ranked opponents and consistently performed well in high-stakes matches that tested his technical repertoire and adaptability.

Throughout his career, Ryan has claimed multiple championships and accolades in submission grappling circuits. His ability to compete effectively under various rule structures, from strict submission-only formats to points-based systems, demonstrates technical depth and strategic intelligence. Ryan's tournament placements and head-to-head records against elite-level opponents solidify his status among the sport's most accomplished contemporary grapplers. His consistency in major competitions and willingness to face the toughest competition available have earned him respect throughout the grappling community.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Nicky Ryan is renowned for his advanced leg lock systems and footlock techniques, which have become hallmark elements of his grappling arsenal. His approach to lower body submissions demonstrates technical sophistication, precise positioning, and excellent timing. Ryan's leg lock game extends beyond basic techniques, incorporating positional transitions and setup sequences that showcase deep systematic understanding. He executes heel hooks, knee reaps, and other lower body attacks with consistency that reflects thousands of hours of dedicated practice and refinement.

Beyond leg locks, Ryan possesses well-rounded technical skills across all grappling ranges. His upper body submissions, top control, and positional wrestling contribute to a comprehensive skill set that keeps opponents guessing. Ryan's submission defense and ability to escape compromised positions demonstrate technical competency in countering modern attacks. His fighting style emphasizes control, timing, and exploiting opponent vulnerabilities rather than relying solely on athleticism. This technical approach has proven sustainable across different competition levels and opponent styles.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Nicky Ryan's contributions to modern grappling extend beyond his individual competition results. He has influenced the evolution of leg lock systems and submission-focused grappling by demonstrating their effectiveness against elite-level opponents. Ryan's technical innovations and strategic approaches have inspired other competitors to develop their own leg lock expertise, contributing to a broader shift in grappling methodology across the sport.

As a younger generation competitor, Ryan represents the advancement and professionalization of submission grappling. His performances have elevated the standard of competition and technical expectation for upcoming grapplers. Through competition, coaching contributions, and his visible presence in the grappling community, Ryan continues shaping how modern competitors approach technique development and match strategy. His legacy represents the current evolution of BJJ and submission wrestling, emphasizing technical depth, systematic instruction, and strategic application of sophisticated grappling systems.</p>
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
