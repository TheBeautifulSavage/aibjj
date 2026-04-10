import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Mario Sperry: BJJ Pioneer and MMA Legend | AIBJJ",
  description: "Explore Mario Sperry's legendary grappling career, competitive achievements, and revolutionary impact on Brazilian Jiu-Jitsu and MMA fighting.",
};

export default function Page() {
  const tags = ["Mario Sperry", "Brazilian Jiu-Jitsu", "MMA", "Grappling", "BJJ History"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Mario Sperry: BJJ Pioneer and MMA Legend</h1>
        <p className="mt-4 text-xl text-zinc-400">Explore Mario Sperry's legendary grappling career, competitive achievements, and revolutionary impact on Brazilian Jiu-Jitsu and MMA fighting.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Mario Sperry emerged as one of Brazilian Jiu-Jitsu's most influential figures during the sport's formative years in the 1980s and 1990s. Born in Brazil, Sperry began his grappling journey at a young age, developing a systematic approach to BJJ that emphasized technical precision and innovative leg lock variations. His early training under renowned instructors shaped his understanding of positional control and submission mechanics that would later revolutionize the sport.

Sperry's rise through the BJJ ranks coincided with the explosion of mixed martial arts in Brazil. Rather than pursuing purely traditional grappling competitions, he recognized the potential of applying his skills in the emerging MMA arena. This forward-thinking approach allowed him to bridge the gap between traditional BJJ and combat sports, establishing himself as both a respected grappler and a formidable fighter. His dedication to continuous improvement and technical innovation set him apart from his contemporaries during this pivotal era of Brazilian martial arts development.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Mario Sperry's competitive resume spans multiple disciplines, showcasing remarkable versatility and skill at the highest levels of combat sports. As a BJJ competitor, he achieved notable success in no-gi grappling tournaments and absolute divisions, where his leg lock expertise became his signature weapon. His ability to execute devastating heel hooks, knee reaping techniques, and footlock combinations from unconventional positions made him a feared competitor in submission-based formats.

In mixed martial arts, Sperry competed during the early days of the sport when grappling dominated most competitions. He faced elite-level opponents in Brazilian MMA promotions and international competitions, consistently demonstrating the superiority of advanced Brazilian Jiu-Jitsu fundamentals. His victories came through submission finishes that highlighted his technical mastery of positional transitions and joint lock progressions. Sperry's competitive success established him as a respected authority in both grappling and MMA circles, proving that dedicated BJJ training could produce dominant combat athletes capable of defeating strikers and wrestlers alike.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Mario Sperry's grappling style emphasized leg lock dominance, a specialization that was relatively uncommon during the early years of modern BJJ. He developed sophisticated leg lock progressions that allowed him to control opponents from positions that seemed disadvantageous, transforming lower body attacks into reliable finishing tools. His heel hook technique was particularly devastating, executed with precise timing and mechanical leverage that made escape nearly impossible for unprepared opponents.

Sperry's approach incorporated seamless transitions between positions, utilizing leg entanglements to control larger and stronger fighters. He understood weight distribution, hip positioning, and angle manipulation at a level that seemed ahead of his time. His ability to chain submissions together forced opponents to defend against multiple threats simultaneously, creating openings for brutal finishing techniques. Beyond his technical arsenal, Sperry demonstrated exceptional positional control in top and bottom positions, using pressure and cross-body positioning to dominate the match tempo. His systematic approach to grappling—breaking down complex techniques into repeatable components—influenced how subsequent generations studied and taught Brazilian Jiu-Jitsu.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Mario Sperry's contributions to Brazilian Jiu-Jitsu extended far beyond his personal competition record. As a pioneer of leg lock specialization, he demonstrated the effectiveness of detailed lower body attacks when other instructors dismissed them as secondary techniques. His willingness to innovate and explore unconventional positions challenged traditional BJJ hierarchies and encouraged a more experimental approach to grappling development. Modern leg lock systems taught in academies worldwide trace conceptual lineage to Sperry's early innovations.

Sperry's influence appears most notably in the current generation of leg lock specialists who have elevated his foundational concepts into comprehensive systems. His legacy demonstrates that niche technical specializations, when developed with depth and precision, can create competitive advantages at elite levels. Beyond technique, Sperry exemplified the intellectual approach to grappling—analyzing positions, understanding mechanics, and solving problems systematically. His career bridged traditional Brazilian Jiu-Jitsu and modern mixed martial arts during a crucial transitional period, proving that technical excellence translates across multiple combat sports disciplines. Today, serious BJJ students acknowledge Sperry's fundamental role in establishing leg lock credibility within the sport.</p>
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
