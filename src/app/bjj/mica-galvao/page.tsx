import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Mica Galvao: BJJ Champion & Grappling Legend | AIBJJ",
  description: "Comprehensive biography of Mica Galvao, Brazilian Jiu-Jitsu world champion. Learn about his competition record, techniques, and influence on modern grappli",
};

export default function Page() {
  const tags = ["Mica Galvao", "Brazilian Jiu-Jitsu", "BJJ Champion", "Grappling", "Submission Wrestling"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Mica Galvao: BJJ Champion & Grappling Legend</h1>
        <p className="mt-4 text-xl text-zinc-400">Comprehensive biography of Mica Galvao, Brazilian Jiu-Jitsu world champion. Learn about his competition record, techniques, and influence on modern grappling.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Mica Galvao emerged as one of the most talented grapplers of his generation, beginning his Brazilian Jiu-Jitsu journey at a young age in Brazil. Growing up immersed in BJJ culture, Galvao developed a deep understanding of fundamental techniques and positional control that would define his competitive career. He trained extensively under renowned coaches who shaped his technical foundation and competitive mindset. His early years competing in local and regional tournaments demonstrated exceptional promise, catching the attention of elite-level programs. By his teenage years, Galvao had already established himself as a formidable competitor in youth divisions, showcasing the dedication and work ethic that characterizes his approach to the sport. His progression through the belt ranks was marked by consistent victories and technical refinement, positioning him for success at the highest levels of international competition.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Mica Galvao has compiled an impressive competition resume, earning multiple world titles and prestigious accolades in Brazilian Jiu-Jitsu. He has competed successfully in major international tournaments including the IBJJF World Championship, earning gold medals and establishing himself as a top-ranked competitor in his weight class and age division. His victories against elite opponents demonstrate technical superiority and competitive excellence. Beyond traditional BJJ competitions, Galvao has also competed in submission grappling events, showcasing his versatility across different rule sets and formats. His consistent podium finishes and championship performances have solidified his status among the sport's elite athletes. The combination of his technical skill, physical attributes, and competitive intelligence has resulted in a win-loss record that reflects dominance over opponents of the highest caliber, making him one of the most successful contemporary grapplers in the sport.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Mica Galvao is known for a dynamic and technical grappling style that emphasizes position before submission. His approach combines excellent footwork, weight distribution, and timing, allowing him to control larger opponents through superior technique. Galvao demonstrates particular proficiency in leg lock systems, utilizing modern heel hook and leg reap techniques with precision and control. His guard passing mechanics are exceptionally refined, utilizing pressure passing and lateral movement to advance position methodically. From top position, he excels at maintaining control while systematically breaking down opponent defenses. His submission chains are expertly constructed, flowing seamlessly between attacks as opponents attempt to defend. Galvao's ground awareness and ability to transition between positions display the hallmark of a complete grappler who understands the intricacies of positional hierarchy. His technical repertoire includes innovative approaches to traditional techniques, reflecting the modern evolution of Brazilian Jiu-Jitsu competition and his contribution to technical advancement in the sport.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Mica Galvao has left a significant mark on contemporary Brazilian Jiu-Jitsu through his competitive achievements and technical contributions. As a world champion and elite-level competitor, he represents the pinnacle of modern grappling excellence and serves as inspiration for aspiring BJJ athletes worldwide. His technical innovations and refined approaches to traditional submissions have influenced how the sport is taught and trained at all levels. Galvao's success has elevated the standard of competition, pushing other athletes to refine their techniques and develop more sophisticated grappling strategies. Through competition and instruction, he has contributed to the global proliferation of technical knowledge in Brazilian Jiu-Jitsu. His legacy extends beyond championship titles to include his role in advancing the sport's technical sophistication and competitive standards. Galvao exemplifies the dedication, discipline, and continuous improvement that defines elite grappling, inspiring future generations to pursue excellence in Brazilian Jiu-Jitsu and contributing to the sport's ongoing evolution as a competitive discipline.</p>
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
