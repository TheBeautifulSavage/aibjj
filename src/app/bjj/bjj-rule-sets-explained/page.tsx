import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "BJJ Rule Sets Explained: IBJJF and Beyond | AIBJJ",
  description: "Complete guide to BJJ rule sets including IBJJF, submission-only, and EBI formats. Learn scoring, penalties, and differences between competition styles.",
};

export default function Page() {
  const tags = ["rules", "ibjjf", "adcc", "submission-only"];
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
        <h1 className="text-4xl font-black sm:text-5xl">BJJ Rule Sets Explained: IBJJF and Beyond</h1>
        <p className="mt-4 text-xl text-zinc-400">Complete guide to BJJ rule sets including IBJJF, submission-only, and EBI formats. Learn scoring, penalties, and differences between competition styles.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">IBJJF Rules Overview</h2>
            <p>The International Brazilian Jiu-Jitsu Federation (IBJJF) establishes the most widely recognized rule set globally. IBJJF competitions emphasize position and point-based scoring, making matches strategic and technical. The rule set includes strict safety regulations, particularly regarding submissions, with illegal techniques varying by belt level and age. Points are awarded for takedowns (2 points), knee on belly (2 points), guard pass (3 points), and mount or back control (4 points). Advantages and penalties create additional scoring opportunities. IBJJF rules promote positional progression, encouraging competitors to work through positions methodically. These standardized rules apply to most local tournaments, national championships, and the IBJJF World Championship. The ruleset prioritizes athlete safety while maintaining competitive integrity. Regular updates ensure rules evolve with the sport, though core principles remain consistent.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Submission-Only and EBI Ruleset</h2>
            <p>Submission-only competitions eliminate points entirely, focusing purely on finishing techniques. Matches end only through submission, tap-out, or referee stoppage. These events reward aggressive, dynamic grappling and encourage leg lock usage. Eddie Bravo Invitational (EBI) pioneered this format with exciting overtime rounds featuring single-leg takedown resets. EBI rules eliminated points while introducing unique sudden-death formats, creating thrilling matches without stalling concerns. Submission-only competitions attract aggressive competitors seeking pure technical expression. These events typically allow broader technique ranges, including leglock diversity restricted in IBJJF lower belts. However, submission-only formats carry increased injury risk due to limited safety restrictions. Many competitors prefer this style for its intensity and lack of conservative, point-grinding tactics. Submission-only events remain popular in professional circuits, attracting elite grapplers seeking ultimate validation through finish-based competition.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Scoring, Advantages, and Penalties</h2>
            <p>IBJJF scoring rewards positional dominance and offensive progression. Takedowns score 2 points and occur from standing position. Guard passes award 3 points when establishing pin control with hips past opponent's legs. Mounted position and back control with hooks each award 4 points. Knee on belly provides 2 points. Advantages occur when near-successful techniques fail narrowly, converted to points in tiebreak situations. Penalties include stalling (inactivity), fleeing the mat, illegal techniques, and improper grip usage. Repeated warnings result in point deductions. Advantages and penalties significantly influence tight matches, making positional control crucial throughout competition. Understanding scoring nuances allows competitors to recognize which positions yield maximum points, shaping strategy accordingly. Point accumulation requires controlled, methodical technique, contrasting submission-focused styles.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Belt-Specific Rules and Age Divisions</h2>
            <p>BJJ rule sets vary significantly across age and belt level categories. White belts face strict illegal technique restrictions, prohibiting heel hooks, neck cranks, and slamming. Blue belts gain some expanded options but retain significant limitations. Purple belts access more techniques, though heel hooks remain restricted. Brown and black belts enjoy full technique availability, including all leg lock variations. Children's divisions (under 18) maintain stricter safety standards than adults. Age categories span youth, young adult, and master divisions, accommodating various experience and physical maturity levels. Masters divisions (typically 30+) sometimes modify rules slightly for safety. These tiered restrictions serve multiple purposes: protecting developing bodies and inexperienced practitioners while allowing skilled athletes expanded technical freedom. Understanding your division's specific rules prevents disqualification and ensures safe training practices aligned with your development level. Always verify current rules before competing, as IBJJF updates classifications regularly.</p>
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
