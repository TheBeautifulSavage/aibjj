import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Felipe Andrew: Brazilian Jiu-Jitsu Pioneer & Champion | AIBJJ",
  description: "Explore Felipe Andrew's BJJ legacy, competition achievements, signature techniques, and influence on modern Brazilian Jiu-Jitsu grappling.",
};

export default function Page() {
  const tags = ["Felipe Andrew", "Brazilian Jiu-Jitsu", "BJJ Champion", "Grappling", "Martial Arts"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Felipe Andrew: Brazilian Jiu-Jitsu Pioneer & Champion</h1>
        <p className="mt-4 text-xl text-zinc-400">Explore Felipe Andrew's BJJ legacy, competition achievements, signature techniques, and influence on modern Brazilian Jiu-Jitsu grappling.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Felipe Andrew emerged as a pivotal figure in Brazilian Jiu-Jitsu during a transformative period for the sport. Beginning his grappling career in the competitive BJJ landscape, Andrew dedicated himself to mastering the fundamental principles and advanced techniques that define elite-level jiu-jitsu. His early training emphasized technical precision and positional dominance, values that would become hallmarks of his fighting philosophy.

Training under experienced instructors, Felipe Andrew developed a systematic approach to BJJ that balanced tradition with innovation. His rise through the competitive ranks demonstrated exceptional consistency and adaptability across different weight classes and rule sets. Andrew's commitment to continuous improvement and technical refinement established him as a respected competitor and mentor within the BJJ community, influencing countless athletes who trained alongside him and studied his match performances.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Felipe Andrew's competitive resume reflects a career marked by significant victories against top-tier opponents. Throughout his competition journey, Andrew competed at the highest levels of Brazilian Jiu-Jitsu tournaments, earning recognition for his consistent performances and technical mastery. His tournament results demonstrated proficiency across multiple divisions and rulesets, showcasing his adaptability as a grappler.

Andrews achievements extended beyond individual tournament victories to include influential performances at prestigious BJJ events. His match archives reveal a competitor who excelled at executing game plans, adapting to opponent styles, and capitalizing on positional advantages. The technical depth displayed in his competitions earned Andrew respect from peers and established him as a significant contributor to the sport's competitive landscape during his active career.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Felipe Andrew's grappling style emphasized positional control, methodical pressure passing, and technical submissions. His approach reflected a deep understanding of leverage mechanics and weight distribution, allowing him to dominate opponents through superior positioning rather than relying solely on athletic explosiveness. Andrew's guard passing techniques were particularly noted for their consistency and effectiveness against skilled defenders.

His submission arsenal included a sophisticated understanding of leg lock progressions, neck cranks, and arm attacks applied from dominant positions. Andrew excelled at transitioning between positions seamlessly, using small adjustments to maintain control while advancing toward submission opportunities. His teaching methodology emphasized the importance of understanding 'why' techniques work, promoting technical literacy among students. This analytical approach to BJJ distinguished his coaching and influenced how many modern grapplers approach problem-solving on the mat.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Felipe Andrew's contributions to Brazilian Jiu-Jitsu extended significantly beyond his individual competition record. As an instructor and technical innovator, Andrew helped shape how modern grapplers approach positional jiu-jitsu and pressure-based control systems. His detailed breakdown of fundamental techniques provided valuable educational content for athletes at all skill levels, making advanced concepts accessible to the broader BJJ community.

Andrew's influence on leg lock development and submission mechanics contributed to evolving technical standards within the sport. His competitors and students carried forward his systematic approach to technical training, perpetuating his legacy through their own achievements and coaching careers. Felipe Andrew remains recognized as a significant figure in BJJ history, remembered for advancing technical understanding, developing consistent pressure-based systems, and dedicating himself to elevating the sport through innovation and education.</p>
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
