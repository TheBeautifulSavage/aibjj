import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Jean Jacques Machado: BJJ Pioneer & Innovator | AIBJJ",
  description: "Explore Jean Jacques Machado's legendary BJJ career, revolutionary techniques, competition victories, and profound impact on Brazilian Jiu-Jitsu.",
};

export default function Page() {
  const tags = ["Jean Jacques Machado", "Brazilian Jiu-Jitsu", "BJJ Legend", "Grappling Pioneer", "Machado Family"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Jean Jacques Machado: BJJ Pioneer & Innovator</h1>
        <p className="mt-4 text-xl text-zinc-400">Explore Jean Jacques Machado's legendary BJJ career, revolutionary techniques, competition victories, and profound impact on Brazilian Jiu-Jitsu.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Jean Jacques Machado was born into one of Brazilian Jiu-Jitsu's most influential families, part of the legendary Machado clan that shaped modern grappling. Growing up in Rio de Janeiro, Brazil, he was immersed in jiu-jitsu culture from childhood, training alongside his brothers Carlos, Renzo, and Rorion. This family environment provided unparalleled technical development and competitive exposure at the highest levels.

Jean Jacques began competing seriously during the 1980s and 1990s, a transformative era for BJJ competition. He quickly established himself as a technical innovator, earning his black belt and gaining recognition for his sophisticated approach to the sport. His early success came during crucial years when BJJ was rapidly evolving from traditional methods toward modern sport techniques. He trained extensively with his brothers, collectively developing systems that would revolutionize how jiu-jitsu was taught and competed globally.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Jean Jacques Machado compiled an impressive competition record that established him among BJJ's elite competitors. He excelled in both gi and no-gi competitions, demonstrating versatility across different rulesets and formats. His tournament victories came against top-level opponents during periods when the sport's technical standards were rapidly advancing.

Beyond specific tournament wins, Machado's greatest achievement was his influence on competition-level jiu-jitsu strategy and technique development. He competed during the crucial transition period when BJJ evolved from regional Brazilian competitions to international sport. His performances and innovations contributed significantly to establishing modern competitive standards. Machado consistently demonstrated technical superiority through intelligent positioning, chain wrestling sequences, and innovative submissions that influenced how future generations approached sport jiu-jitsu competitions.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Jean Jacques Machado's fighting style emphasized technical superiority, positional control, and innovative submission chains. He was known for his systematic approach to position development, rarely rushing into submissions without establishing dominant control first. His style reflected the Machado family philosophy of technical efficiency and intelligent pressure application.

Among his signature contributions were innovative leg lock systems and footlock sequences that predated the modern leg lock revival by decades. Machado developed sophisticated approaches to foot and ankle submissions, understanding positional transitions and control mechanics that became fundamental to modern no-gi grappling. His submissions from various positions demonstrated deep technical knowledge of leverage and body mechanics. Machado excelled at chaining multiple submission attempts seamlessly, forcing opponents into defensive positions where they faced constant threat. His technical innovations in leg attack positioning and submission sequencing became foundational concepts taught in modern BJJ academies worldwide.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Jean Jacques Machado's legacy extends far beyond his competition record into fundamental contributions reshaping Brazilian Jiu-Jitsu's technical and pedagogical landscape. As part of the Machado family lineage, he helped establish systematic training methodologies that influenced how BJJ is taught globally. The family's emphasis on technical innovation and systematic position development became embedded in modern academy curricula.

Machado's influence on leg lock and submission chain development was particularly significant, establishing technical frameworks that resurged in modern competitive jiu-jitsu. His systematic approach to foot lock positioning and control mechanics provided foundational knowledge for contemporary leg lock specialists. Beyond techniques, Machado represented the intellectual approach to jiu-jitsu, emphasizing understanding over athleticism. His contributions to BJJ philosophy and technical development continue influencing instructors and competitors worldwide. The Machado family's impact on Brazilian Jiu-Jitsu's globalization and evolution into a sophisticated sport with systematic technical principles remains one of the sport's most important legacies.</p>
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
