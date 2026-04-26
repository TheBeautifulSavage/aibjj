import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Roberto Tussa Alencar: BJJ Pioneer & Legend | AIBJJ",
  description: "Explore Roberto Tussa Alencar's influential BJJ career, competition achievements, signature techniques, and lasting impact on Brazilian Jiu-Jitsu history.",
};

export default function Page() {
  const tags = ["Roberto Tussa Alencar", "BJJ Legend", "Brazilian Jiu-Jitsu", "Grappling History", "Jiu-Jitsu Pioneer"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Roberto Tussa Alencar: BJJ Pioneer & Legend</h1>
        <p className="mt-4 text-xl text-zinc-400">Explore Roberto Tussa Alencar's influential BJJ career, competition achievements, signature techniques, and lasting impact on Brazilian Jiu-Jitsu history.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Roberto Tussa Alencar emerged as one of Brazilian Jiu-Jitsu's most influential figures during the sport's formative decades. Beginning his grappling journey in Rio de Janeiro, Tussa trained during an era when BJJ was rapidly evolving from a regional Brazilian martial art into an international phenomenon. His early training emphasized technical precision and tactical awareness, qualities that would define his competitive approach and coaching philosophy throughout his career.

Tussa's dedication to the art transcended competition. He became deeply committed to spreading BJJ knowledge and developing the next generation of grapplers. His approach combined traditional Brazilian techniques with innovative training methodologies, creating a lineage of technically proficient athletes. By establishing himself as both a formidable competitor and respected instructor, Tussa helped legitimize BJJ as a systematic martial discipline worthy of serious study and practice.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Throughout his competitive career, Roberto Tussa Alencar achieved notable success in BJJ tournaments and grappling competitions. He competed across multiple weight classes and belt levels, consistently demonstrating technical excellence and ring awareness. His victories came against respected opponents, establishing him as a significant force in Brazilian Jiu-Jitsu during his active competition years.

Beyond individual tournament wins, Tussa's legacy reflects his contributions to establishing competitive standards and elevating technical expectations within BJJ. He was instrumental in developing training methodologies that produced multiple successful competitors from his academy. His influence extended beyond personal achievements, shaping how future generations approached competition preparation and technical development. Tussa's reputation for consistency and technical proficiency made him a respected benchmark for excellence in Brazilian Jiu-Jitsu competition.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Roberto Tussa Alencar was renowned for his methodical, position-focused grappling approach. Rather than relying on explosive athleticism, Tussa emphasized fundamental technique, timing, and leverage to control opponents effectively. His signature style showcased superior footwork, precise hip positioning, and exceptional weight distribution—hallmarks of classical Brazilian Jiu-Jitsu principles.

Tussa excelled in passing guard and maintaining dominant positions, demonstrating remarkable control from top positions. His approach to positional dominance influenced how many coaches teach fundamental BJJ, particularly in teaching students to establish and maintain technical advantages without excessive force. His techniques in side control, mount position, and guard passing became teaching standards that many instructors reference when developing curricula. Tussa's emphasis on efficiency over aggression demonstrated that intelligent grappling could be more effective than athleticism-dependent approaches, a philosophy that remains relevant in modern BJJ instruction.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Roberto Tussa Alencar's influence on Brazilian Jiu-Jitsu extends far beyond his competition record. As a respected instructor and academy owner, Tussa developed a lineage of accomplished competitors and dedicated instructors who propagated his technical philosophies. His academy became a center for technical excellence, producing athletes who competed successfully across various levels and organizations.

Tussa's emphasis on technical fundamentals and systematic instruction helped establish modern BJJ pedagogy standards. He demonstrated that comprehensive instructor training and clear technical progression could create consistent results across student populations. His teaching methodology influenced how academies structured curriculum development and belt advancement criteria. Today, Tussa's contributions to BJJ fundamentals remain evident in training approaches used worldwide. His legacy serves as a reminder that patient technical development and sound foundational principles create more sustainable martial artists than trend-focused training. Roberto Tussa Alencar remains recognized as a pioneering figure who helped solidify BJJ's technical foundation during its international expansion.</p>
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
