import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "William Tackett: BJJ Pioneer & Grappling Legend | AIBJJ",
  description: "Explore William Tackett's BJJ career, competition achievements, signature techniques, and lasting influence on Brazilian Jiu-Jitsu grappling.",
};

export default function Page() {
  const tags = ["William Tackett", "Brazilian Jiu-Jitsu", "BJJ Competitor", "Grappling", "Jiu-Jitsu Legend"];
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
        <h1 className="text-4xl font-black sm:text-5xl">William Tackett: BJJ Pioneer & Grappling Legend</h1>
        <p className="mt-4 text-xl text-zinc-400">Explore William Tackett's BJJ career, competition achievements, signature techniques, and lasting influence on Brazilian Jiu-Jitsu grappling.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>William Tackett emerged as one of Brazilian Jiu-Jitsu's most respected competitors during a transformative era in the sport. His introduction to BJJ came during the 1990s when grappling was rapidly evolving in North America. Tackett's dedication to mastering fundamental techniques and innovative strategies quickly set him apart from his peers. He trained under respected instructors who emphasized both traditional BJJ principles and modern competition tactics. His early years were marked by relentless mat time and a genuine passion for understanding the nuances of grappling. Tackett's progression through the belt ranks demonstrated exceptional technical proficiency and mental fortitude. He became known for his systematic approach to jiu-jitsu, studying opponents meticulously and adapting his game accordingly. His commitment to the sport extended beyond personal achievement, as he actively contributed to building strong BJJ communities wherever he trained. This foundation established Tackett as a serious competitor and respected voice in the grappling world.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>William Tackett's competitive résumé showcases numerous accolades across multiple weight classes and age divisions. He competed at the highest levels of BJJ tournaments, including IBJJF competitions where he earned medals and recognition. Tackett's consistency as a competitor was remarkable, regularly placing among top finishers in prestigious events. His ability to perform under pressure demonstrated superior conditioning and mental toughness. Throughout his career, Tackett earned promotions through demonstrated technical knowledge and competitive success rather than mere longevity. He proved himself against some of the sport's most challenging opponents, earning their respect through dominant performances and sportsmanship. His tournament results established him as a reliable contender and someone coaches could count on to represent their lineage at elite levels. Beyond individual medals, Tackett's greatest achievement was earning the respect of the BJJ community through his consistent excellence, honest training partnerships, and contributions to elevating grappling standards.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>William Tackett developed a well-rounded grappling approach that emphasized positional dominance and pressure-based control. His fighting style was characterized by technical precision and methodical progression through positions. Tackett excelled at establishing and maintaining top control, using superior positioning to frustrate opponents and create submission opportunities. He demonstrated exceptional footlock expertise, a skill not universally emphasized during his competitive prime. Tackett's guard passing was particularly notable for its systematic approach and relentless pressure. He understood weight distribution intuitively and could shut down even aggressive guard players. His submission game was diverse but never forced, instead flowing naturally from dominant positions. Tackett favored techniques that minimized risk while maximizing control and damage potential. His instructional approach to these techniques emphasized the underlying principles rather than just isolated moves. This emphasis on principle-based grappling allowed his students to adapt and evolve their games independently, a hallmark of his teaching philosophy.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>William Tackett's impact on Brazilian Jiu-Jitsu extends far beyond his competition record. He represented the values of continuous improvement, technical excellence, and genuine community building that define the best in jiu-jitsu culture. Tackett influenced countless students through direct instruction and mentorship, passing along not just techniques but a philosophy of respectful, pressure-based grappling. His approach to BJJ emphasized that longevity in the sport depends on sustainable technique rather than relying solely on athleticism. Many of his students progressed to significant achievements in their own right, carrying forward his technical legacy. Tackett's contributions to the sport include promoting structured learning systems and demystifying advanced techniques for developing grapplers. He demonstrated that success in BJJ comes from dedication to fundamentals and constant refinement rather than flashy innovation. His influence persists in the gyms he's trained, the competitors he's mentored, and the grappling community he's served. William Tackett remains a respected figure whose career exemplifies the highest ideals of Brazilian Jiu-Jitsu.</p>
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
