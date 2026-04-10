import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Edwin Najmi: BJJ Pioneer and Grappling Legend | AIBJJ",
  description: "Discover Edwin Najmi's influential BJJ career, competition achievements, signature techniques, and lasting impact on modern grappling.",
};

export default function Page() {
  const tags = ["Edwin Najmi", "Brazilian Jiu-Jitsu", "Grappling", "BJJ Competitor", "Submission Wrestling"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Edwin Najmi: BJJ Pioneer and Grappling Legend</h1>
        <p className="mt-4 text-xl text-zinc-400">Discover Edwin Najmi's influential BJJ career, competition achievements, signature techniques, and lasting impact on modern grappling.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Edwin Najmi emerged as a formidable force in Brazilian Jiu-Jitsu during the early 2000s, bringing a technical and submission-focused approach to the sport. Beginning his grappling journey at a young age, Najmi developed a passion for the intricate details of BJJ that would define his competitive career. His early training emphasized strong fundamentals and relentless pursuit of positional excellence. Najmi's dedication to understanding the mechanics of submissions and positional transitions set him apart from his contemporaries. He trained extensively in high-level academies, absorbing knowledge from experienced instructors and competing regularly to test his skills against elite opposition. His willingness to embrace both traditional BJJ and catch wrestling principles shaped his unique approach to grappling. By the mid-2000s, Najmi had established himself as a serious competitor capable of competing at the highest levels of international BJJ competition.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Throughout his competitive career, Edwin Najmi accumulated an impressive record of victories against top-tier opponents in multiple weight classes and age divisions. He competed extensively in IBJJF tournaments, sub-only competitions, and submission wrestling events, demonstrating versatility across different rulesets. Najmi's competition résumé includes victories over numerous notable competitors and consistent placements in major tournaments including the World Championships, Pan-American Championships, and European Open events. His success spanned several weight classes, showcasing his adaptability and technical proficiency. Najmi competed during an era when BJJ was rapidly evolving, and he proved capable of adapting to new techniques and strategies. His submission rate was notably high, reflecting his emphasis on attacking sequences and finishing positions. Beyond traditional IBJJF competitions, Najmi also competed in submission grappling tournaments, further cementing his status as a complete grappler capable of succeeding under various rule systems.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Edwin Najmi's grappling style was characterized by aggressive submission hunting, technical precision, and a remarkable understanding of chain wrestling sequences. He developed a systematic approach to attacking submissions, often setting up complex combinations that made his position nearly inescapable. Najmi was particularly known for his leg lock expertise, utilizing foot lock attacks, heel hooks, and knee reap techniques with impressive efficiency. His guard passing demonstrated excellent base control and pressure, breaking opponent guards with methodical progressions. Najmi's top position control was suffocating, utilizing cross-face pressure and hip control to neutralize opponent defenses. His open guard was dynamic and threatening, capable of attacking from multiple angles simultaneously. What distinguished Najmi was his ability to seamlessly transition between techniques, creating continuous attacking opportunities. His submission sequences often appeared inevitable once initiated, reflecting years of refinement and practice. He understood the importance of grip fighting and base control, never allowing opponents comfortable positioning from which to defend or counter-attack.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Edwin Najmi's contributions to Brazilian Jiu-Jitsu extended beyond his competition achievements, influencing how modern grapplers approach submission attacks and positional transitions. His emphasis on submission chains and systematic attacking sequences became increasingly relevant as BJJ evolved toward more dynamic, offense-focused competition. Najmi's work in developing and refining leg lock techniques contributed to the broader community's understanding of lower body submission mechanics. His teaching and technical content helped elevate the level of instruction available to serious BJJ students worldwide. Najmi demonstrated that success in grappling required constant technical refinement and willingness to explore evolving methodologies. Many competitors and instructors credit him with influencing their approach to submissions and positional control. His legacy persists in the continued emphasis on attacking sequences and chain wrestling within modern BJJ. Through his competition results, technical innovations, and influence on training methodologies, Edwin Najmi remains a respected figure in grappling history, remembered for his technical excellence and contributions to the sport's evolution.</p>
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
