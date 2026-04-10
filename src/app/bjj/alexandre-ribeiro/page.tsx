import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Alexandre Ribeiro: BJJ Pioneer and Technique Innovator | AIBJJ",
  description: "Explore Alexandre Ribeiro's remarkable BJJ career, competition victories, signature techniques, and lasting influence on Brazilian Jiu-Jitsu.",
};

export default function Page() {
  const tags = ["Alexandre Ribeiro", "Brazilian Jiu-Jitsu", "BJJ Champion", "Grappling Techniques", "Jiu-Jitsu History"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Alexandre Ribeiro: BJJ Pioneer and Technique Innovator</h1>
        <p className="mt-4 text-xl text-zinc-400">Explore Alexandre Ribeiro's remarkable BJJ career, competition victories, signature techniques, and lasting influence on Brazilian Jiu-Jitsu.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Alexandre Ribeiro emerged as a prominent figure in Brazilian Jiu-Jitsu during the 1990s, a transformative era for the sport. Growing up in Rio de Janeiro, Ribeiro was immersed in the rich grappling culture that defined carioca BJJ. He began his training at a young age, developing under some of the most respected instructors of the period. His early years in the sport coincided with BJJ's evolution from a regional Brazilian martial art to an international phenomenon.

Ribeiro's dedication to technical mastery set him apart from his peers. He spent countless hours refining his fundamentals while simultaneously exploring innovative approaches to positions and transitions. His systematic approach to problem-solving in grappling earned him respect throughout the Rio de Janeiro BJJ community. By the early 1990s, Ribeiro had established himself as a serious competitor, combining traditional techniques with creative variations that would become hallmarks of his style.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Alexandre Ribeiro distinguished himself through impressive performances at major BJJ tournaments throughout the 1990s and 2000s. He competed extensively in the Brazilian Jiu-Jitsu World Championships and other significant events, facing top-tier opponents and securing victories against formidable grapplers. His tournament success wasn't merely about winning matches; Ribeiro earned recognition for the technical quality of his performances and his ability to adapt to different opponents and styles.

Beyond individual competition accolades, Ribeiro's influence extended through his representation of the technical principles he developed. He earned his high-level belt ranking through demonstrated mastery and contributed to the growth of his academy and lineage. His competition experience provided valuable insights that he would later translate into his teaching methodology, making him not just a successful competitor but a knowledge keeper within the BJJ community.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Alexandre Ribeiro became renowned for his precise, technical approach to Brazilian Jiu-Jitsu. Rather than relying on athleticism or strength, he emphasized positional control, leverage, and timing. His game reflected a deep understanding of biomechanics and the interconnected nature of BJJ positions. Ribeiro's approach to guard passing, pressure-based top control, and submission transitions showcased a methodical thinking process that influenced how many grapplers approach technical development.

His signature techniques included refined leg lock systems and strategic positional sequences that set up finishing techniques with minimal wasted motion. Ribeiro excelled at creating dominant positions from which his opponents had limited escape options. His ability to chain techniques together seamlessly demonstrated a comprehensive understanding of positional flow. These technical contributions became valuable reference points for students and fellow instructors seeking to deepen their BJJ knowledge and improve their technical efficiency.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Alexandre Ribeiro's impact on Brazilian Jiu-Jitsu extends far beyond his personal competition record. As an instructor and technical authority, he shaped the development of numerous students and contributed to the evolution of technical standards within the sport. His systematic approach to teaching emphasized understanding principles over memorizing techniques, encouraging students to develop their own styles grounded in fundamental concepts.

Ribeiro's legacy is evident in the continued success of his academy lineage and the technical preferences of his students. He represented a generation of BJJ pioneers who elevated the sport's technical complexity while maintaining accessibility for new practitioners. His contributions to leg lock technology and positional control systems influenced subsequent generations of competitors and instructors. Through his teaching, mentorship, and technical innovations, Alexandre Ribeiro secured his place as an important figure in Brazilian Jiu-Jitsu history, demonstrating how technical excellence and thoughtful instruction create lasting impact on the martial art.</p>
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
