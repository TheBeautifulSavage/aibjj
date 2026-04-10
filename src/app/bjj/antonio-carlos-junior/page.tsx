import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Antonio Carlos Junior: BJJ Legend & Pioneer | AIBJJ",
  description: "Discover Antonio Carlos Junior's legendary BJJ career, techniques, and lasting impact on Brazilian Jiu-Jitsu competition and training.",
};

export default function Page() {
  const tags = ["Antonio Carlos Junior", "Brazilian Jiu-Jitsu", "BJJ Legend", "Grappling", "Jiu-Jitsu History"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Antonio Carlos Junior: BJJ Legend & Pioneer</h1>
        <p className="mt-4 text-xl text-zinc-400">Discover Antonio Carlos Junior's legendary BJJ career, techniques, and lasting impact on Brazilian Jiu-Jitsu competition and training.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Antonio Carlos Junior emerged from Brazil's rich martial arts tradition, beginning his Brazilian Jiu-Jitsu training during a transformative period for the sport. Growing up in Brazil, he was immersed in the culture of BJJ from an early age, training under respected instructors who shaped his technical foundation. His early years in the sport coincided with increased global interest in BJJ, and Junior became determined to prove Brazilian techniques on the international stage. Through dedicated training and constant refinement of his craft, he earned his high rank through demonstrated technical proficiency and competition success. Junior's journey exemplifies the path many Brazilian grapplers took during the 1990s and 2000s, combining street-level grappling knowledge with formal academy instruction. His commitment to mastering the art established him as a serious competitor and technical innovator within the BJJ community.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Antonio Carlos Junior built an impressive competition record that earned him respect among elite grapplers worldwide. His victories came against notable opponents in both absolute weight and heavyweight divisions, showcasing his ability to compete at the highest levels. Junior competed in major BJJ tournaments and championships, consistently placing among the top competitors and defeating several well-known athletes. His accomplishments extended beyond single tournaments, as he maintained a strong competitive presence across multiple years and events. The consistency of his results demonstrated technical mastery and competitive intelligence. Junior's success wasn't limited to one federation or region; he proved himself across different competition formats and rule sets. His tournament history reflects the evolution of BJJ during his competitive years, contributing to the sport's growing professionalization and the increasing quality of technical grappling competition.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Antonio Carlos Junior was known for a well-rounded grappling approach that balanced fundamental BJJ principles with innovative technical solutions. His style emphasized strong positional control, methodical progression through positions, and opportunistic submission hunting from dominant postures. Junior developed particular proficiency in leg lock systems, which were gaining prominence during his competitive years, applying them with timing and technical precision. His approach to takedowns combined traditional judo-influenced techniques with pure wrestling, allowing him to control matches from the opening exchange. Junior's guard work reflected the evolving understanding of guard retention and sweep mechanics, using defensive intelligence to neutralize opponent advantages. His submission game was characterized by set-ups and transitions that capitalized on opponent mistakes and positional vulnerabilities. What distinguished Junior was his ability to adapt his technical arsenal to different opponents and competition contexts, adjusting his approach while maintaining his fundamental principles.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Antonio Carlos Junior's contributions to Brazilian Jiu-Jitsu extended beyond his competition victories, influencing how techniques and training methodologies evolved within the sport. His technical innovations and competitive success inspired other grapplers to develop their own tactical approaches. Junior represented the pinnacle of BJJ achievement during his era, demonstrating that Brazilian techniques could compete successfully at elite international levels. Many contemporary grapplers studied his matches and technical approaches, incorporating elements into their own training. His influence on leg lock development and positional control contributed to broader changes in how modern BJJ athletes approach the sport. Junior's legacy includes not just his accolades but his role in elevating the technical and competitive standards of Brazilian Jiu-Jitsu. His career helped establish the credibility of BJJ as a complete grappling system and inspired future generations of athletes to pursue the sport at the highest competitive levels.</p>
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
