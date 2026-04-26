import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "JT Torres: Elite BJJ Competitor & Grappling Champion | AIBJJ",
  description: "Explore JT Torres' BJJ career, competition achievements, signature techniques, and impact on modern grappling. Complete athlete biography.",
};

export default function Page() {
  const tags = ["JT Torres", "Brazilian Jiu-Jitsu", "grappling champion", "BJJ competitor", "submission wrestling"];
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
        <h1 className="text-4xl font-black sm:text-5xl">JT Torres: Elite BJJ Competitor & Grappling Champion</h1>
        <p className="mt-4 text-xl text-zinc-400">Explore JT Torres' BJJ career, competition achievements, signature techniques, and impact on modern grappling. Complete athlete biography.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>JT Torres emerged as one of the most dynamic grapplers in modern Brazilian Jiu-Jitsu, developing his skills through dedicated training and competition experience. Beginning his BJJ journey at a young age, Torres demonstrated exceptional athleticism and technical prowess that would distinguish him throughout his career. His early training foundation emphasized fundamental techniques combined with high-intensity wrestling-style grappling, creating a unique approach that blended traditional BJJ with submission-focused wrestling principles.

Torres trained under respected coaches and competed extensively in the sub-only grappling circuit, where he refined his understanding of leg lock systems and positional control. His willingness to compete frequently against top-tier opponents accelerated his development significantly. The sub-only ruleset allowed Torres to experiment with advanced submission techniques and leg lock chains that became hallmarks of his competitive style. His journey reflects the evolution of modern BJJ, where wrestlers and grapplers increasingly adopt Brazilian Jiu-Jitsu as their primary grappling art.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>JT Torres built an impressive competition resume across multiple grappling platforms and BJJ tournaments. He competed successfully in prestigious sub-only events including Submission Underground and other invitation-only grappling competitions featuring elite-level athletes. Torres demonstrated consistent performance against world-class opponents, earning recognition for his technical ability and competitive durability.

Throughout his career, Torres participated in high-profile matches against established grapplers, showcasing his capacity to perform against elite competition. His results across various weight classes and ruleset formats proved his adaptability and technical depth. The combination of match victories, submission wins, and competitive performances against ranked opponents established Torres as a credible voice in modern grappling discussions. His competition experience spanning multiple organizations and formats contributed to his reputation as a complete grappler capable of succeeding in diverse competitive environments.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>JT Torres is known for his aggressive leg lock game and submission-oriented approach to grappling. His style emphasizes lower body attacks, incorporating heel hooks, knee reaping, and intricate leg lock chains into his strategic arsenal. Torres displays proficiency in transitioning between leg lock positions, creating high-pressure situations that force opponents into defensive positions or submission attempts. His wrestling background manifests in his strong positional control and pressure-based grappling style.

Beyond leg locks, Torres demonstrates solid fundamentals across all grappling ranges. His top position control, guard passing sequences, and submission transitions reflect comprehensive technical development. Torres employs footlock systems with particular sophistication, understanding entry angles and pressure applications that maximize submission likelihood. His ability to chain submissions together and maintain control while attacking demonstrates advanced technical understanding. This multifaceted approach makes Torres a challenging opponent across various ruleset formats, whether competing in leg lock-friendly sub-only events or traditional BJJ tournaments with restricted footlock rules.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on Modern Grappling</h2>
            <p>JT Torres contributed significantly to the evolution of modern grappling by competing at the highest levels during the leg lock renaissance in Brazilian Jiu-Jitsu. His performances in sub-only competitions helped popularize advanced leg lock systems and demonstrated their viability against elite grapplers. Torres' technical approach influenced how newer competitors approach lower body submissions and emphasize leg lock systems as primary attacking strategies.

Torres represents the modern hybrid grappler, successfully merging wrestling principles with Brazilian Jiu-Jitsu technical depth. His career trajectory demonstrates the viability of submission-focused grappling against traditional BJJ specialists. Through his competition record and technical displays, Torres contributed to shifting competitive grappling culture toward embracing diverse submission systems. His presence in high-level grappling forums and his willingness to compete frequently established him as a noteworthy figure in contemporary BJJ discourse, influencing how athletes approach leg lock training and competition strategy throughout the community.</p>
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
