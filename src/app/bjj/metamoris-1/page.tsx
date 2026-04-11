import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Metamoris 1: Revolutionary Submission-Only Grappling | AIBJJ",
  description: "Metamoris 1 pioneered submission-only professional grappling. Explore historic matches, champions, and its impact on BJJ competition.",
};

export default function Page() {
  const tags = ["Metamoris 1", "submission-only grappling", "BJJ tournament", "professional grappling"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Metamoris 1: Revolutionary Submission-Only Grappling</h1>
        <p className="mt-4 text-xl text-zinc-400">Metamoris 1 pioneered submission-only professional grappling. Explore historic matches, champions, and its impact on BJJ competition.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Overview</h2>
            <p>Metamoris 1 took place on November 11, 2012, at the Belasco Theatre in Los Angeles, California. Founded by Ralek Gracie, the event introduced a revolutionary format to professional grappling by eliminating points and emphasizing submission-based competition. This submission-only ruleset challenged the traditional IBJJF point-based system that had dominated Brazilian Jiu-Jitsu tournaments for decades. The event featured elite-level competitors from around the world, ranging from lightweight to heavyweight divisions. Matches were structured with time limits varying by weight class, allowing grapplers to focus entirely on positional dominance and submission techniques. The intimate venue setting, combined with the exclusive format, created an electrifying atmosphere that attracted both hardcore grappling enthusiasts and curious spectators seeking an alternative competitive experience. Metamoris 1 marked the beginning of what would become one of professional grappling's most influential tournament series.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Results and Champions</h2>
            <p>The inaugural event featured several dominant performances that established early champions across multiple weight divisions. Marcio Cruz defeated Damien Brown in the lightweight final, showcasing technical excellence in a hard-fought battle. Cobrinha defeated Teco Shinzato in one of the event's standout performances, demonstrating the effectiveness of his guard passing and positional control. The middleweight division saw competitive action with high-level grappling from multiple contenders. Heavyweight matchups featured some of the event's most intense exchanges, with larger athletes testing submission combinations in the submission-only environment. The superfight division, reserved for special exhibition matches, included competition between notable names who generated significant fan interest. These results established that submission-only grappling rewarded technical proficiency, patience, and deep positional understanding differently than point-based competition, often extending match lengths and emphasizing methodical advancement.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Notable Matches and Moments</h2>
            <p>Several matches at Metamoris 1 became legendary within the grappling community for their technical brilliance and dramatic conclusions. Competitors demonstrated innovative guard techniques, creative submissions, and positional strategies specifically adapted for submission-only rulesets. The absence of points created a unique strategic dynamic where athletes couldn't rely on scoring advantages, instead forcing continuous offensive pressure and defensive awareness. Matches extended longer than traditional competitions, allowing for extended scrambles and back-and-forth positional exchanges. Submission attempts came from unexpected positions, showcasing the diverse technical arsenal available when points weren't awarded for position. Certain matches featured dramatic near-submission sequences where escapes and reversals captivated audiences. The intimate venue setting amplified crowd reactions to exciting moments, creating an energetic atmosphere that contrasted with larger tournament events. These memorable performances helped popularize submission-only grappling as a legitimate format and demonstrated that eliminating points actually enhanced technical competition rather than diminishing it.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Historical Significance</h2>
            <p>Metamoris 1 fundamentally challenged how professional grappling could be presented and structured. By prioritizing submissions over points, Ralek Gracie created an alternative competitive pathway that influenced subsequent tournament formats worldwide. The event demonstrated significant market interest in high-level grappling outside traditional IBJJF competitions, encouraging the development of additional submission-only events. This pioneering approach influenced how many grappling organizations subsequently structured their competitions, with numerous promotions adopting similar rulesets. Metamoris 1 elevated submission-only competition's legitimacy among elite grapplers, attracting competitors who previously focused exclusively on point-based tournaments. The event's success spawned a successful Metamoris franchise with multiple subsequent events that continued pushing professional grappling's boundaries. Its impact extended beyond ruleset innovations, establishing that grappling could function as compelling professional entertainment outside traditional sporting structures. Metamoris 1 remains historically significant as the catalyst for modern submission-only grappling's evolution into a respected competitive format.</p>
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
