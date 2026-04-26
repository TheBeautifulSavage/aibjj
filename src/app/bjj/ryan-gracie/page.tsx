import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Ryan Gracie: BJJ Pioneer and Combat Sports Legend | AIBJJ",
  description: "Explore Ryan Gracie's influential career in Brazilian Jiu-Jitsu and MMA. Discover his techniques, achievements, and lasting impact on grappling.",
};

export default function Page() {
  const tags = ["Ryan Gracie", "Brazilian Jiu-Jitsu", "BJJ", "MMA fighter", "Gracie family"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Ryan Gracie: BJJ Pioneer and Combat Sports Legend</h1>
        <p className="mt-4 text-xl text-zinc-400">Explore Ryan Gracie's influential career in Brazilian Jiu-Jitsu and MMA. Discover his techniques, achievements, and lasting impact on grappling.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Ryan Gracie, born in 1957, is a prominent member of the legendary Gracie family, the pioneers of Brazilian Jiu-Jitsu. Growing up in Rio de Janeiro during the golden age of the Gracie dynasty, Ryan was immersed in martial arts from childhood, training under the guidance of his father Helio Gracie and uncles. This gave him access to the cutting-edge techniques and philosophies that defined the Gracie style. Ryan's early training period coincided with the family's expansion of BJJ beyond Brazil, making him instrumental in spreading the art internationally during the 1970s and 1980s. His dedication to refining Gracie Jiu-Jitsu techniques while adapting them for modern competition helped establish new standards in grappling. Ryan's journey reflects the Gracie family's commitment to technical excellence and continuous innovation in martial arts.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Ryan Gracie competed extensively in both Brazilian Jiu-Jitsu tournaments and mixed martial arts events, establishing himself as a formidable competitor. He participated in numerous Abu Dhabi Combat Club (ADCC) tournaments and other elite grappling championships where he faced world-class opponents. His MMA career, which spanned several promotions including early UFC events and Japanese fighting organizations, showcased his versatility as a fighter. Ryan earned his black belt through decades of dedicated training and competition, achieving recognition as a legitimate threat in submissions and positional control. His record includes victories over notable grapplers and fighters, demonstrating technical proficiency across all ranges of combat. Throughout his competitive years, Ryan maintained the Gracie family tradition of proving their methods through live competition, contributing to the family's overall dominance in combat sports during this era.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Ryan Gracie embodied the classic Gracie Jiu-Jitsu approach, emphasizing leverage, timing, and efficiency over raw strength. He developed particular expertise in footlock submissions and leg lock progressions, techniques that were relatively uncommon in mainstream BJJ during his competitive years but have since become standard in modern grappling. Ryan's fighting style combined the fundamental guard techniques passed down by Helio Gracie with innovative positional strategies for controlling larger opponents. His approach to submission defense and escape techniques influenced how subsequent generations learned to defend against advanced leg lock attacks. Ryan demonstrated exceptional skill in transitions between positions, using fluid movements to create advantageous situations for submissions. His technical knowledge extended to takedowns and top control, making him a complete grappler. These contributions helped expand the Gracie family's technical arsenal and proved the effectiveness of their systematic approach to Brazilian Jiu-Jitsu.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Ryan Gracie's contributions to Brazilian Jiu-Jitsu extend beyond his competition record to his role in spreading and refining the art globally. As a Gracie family ambassador during critical years of BJJ's international expansion, he helped establish legitimacy for the family's methods against skeptics worldwide. Ryan's emphasis on leg lock techniques preceded the modern leg lock revolution by decades, positioning him as an early innovator in submissions that are now fundamental to contemporary BJJ. His teaching and lineage have produced numerous black belts who continue developing his technical approach. Ryan remains an influential figure in discussions about traditional Gracie Jiu-Jitsu versus modern competition trends, offering insights gained from competing against diverse opponents across multiple martial arts formats. His legacy reflects the Gracie family's broader impact on martial arts evolution, demonstrating how principled technical systems can adapt and remain relevant across generations of competition and different rule sets.</p>
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
