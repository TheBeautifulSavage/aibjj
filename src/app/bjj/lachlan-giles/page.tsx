import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Lachlan Giles: BJJ Pioneer & Leg Lock Specialist | AIBJJ",
  description: "Explore Lachlan Giles' BJJ career, revolutionary leg lock techniques, competition achievements, and lasting impact on modern grappling.",
};

export default function Page() {
  const tags = ["Lachlan Giles", "BJJ", "leg lock", "grappling", "Brazilian Jiu-Jitsu"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Lachlan Giles: BJJ Pioneer & Leg Lock Specialist</h1>
        <p className="mt-4 text-xl text-zinc-400">Explore Lachlan Giles' BJJ career, revolutionary leg lock techniques, competition achievements, and lasting impact on modern grappling.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Lachlan Giles is an Australian Brazilian Jiu-Jitsu competitor and instructor who emerged as one of the sport's most innovative technical minds. Born and raised in Brisbane, Australia, Giles developed a passion for grappling that would eventually transform modern leg lock theory and application. He began his BJJ journey as a young athlete, training under experienced coaches who recognized his exceptional analytical abilities and technical aptitude.

Giles' early years in the sport were characterized by relentless experimentation and study. Rather than simply accepting traditional teaching methods, he questioned conventional wisdom and sought to understand the underlying mechanics of submissions and positional control. This investigative approach to learning would become the hallmark of his career. His dedication to mastering the fundamentals while simultaneously exploring the outer boundaries of technique set him apart from his peers. As he progressed through the ranks, Giles developed a growing reputation as both a formidable competitor and an emerging technical innovator, particularly in the leg lock game that would later define his legacy.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Lachlan Giles has established himself as a multiple-time champion at prestigious BJJ competitions worldwide. He has consistently performed at the highest levels of professional grappling, securing victories against elite-level competitors and earning multiple podium finishes at major tournaments. His competitive resume includes notable wins at international competitions and domestic Australian championships, where he has repeatedly demonstrated his technical superiority.

Beyond tournament success, Giles gained prominence through high-profile submission-only events and specialized grappling competitions that emphasized the techniques he pioneered. His willingness to compete in formats that highlighted leg lock exchanges helped revolutionize how the grappling community viewed lower body submissions. While always competitive, Giles prioritized technical innovation and educational impact over raw medal count. His performances served as laboratories for developing and refining techniques that he would later teach to thousands of students. This balance between competing at elite levels and advancing the sport's collective knowledge has made his achievements particularly influential in shaping modern grappling standards and methodologies.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Lachlan Giles is renowned for his mastery of leg lock systems, particularly his systematic approaches to heel hooks, knee reaping, and lower body submission chains. His fighting style emphasizes efficiency, mechanical precision, and deep positional understanding rather than explosive athleticism. Giles developed comprehensive frameworks for understanding leg lock entries, positioning, and transitions that transformed how grapplers approach lower body submissions.

His signature techniques include advanced heel hook sequences, leg lock entry chains from various positions, and innovative approaches to footlock attacks. Giles excels at creating submission opportunities through superior positioning and timing rather than brute force. His analytical approach breaks down complex movements into fundamental principles, making elite-level leg lock knowledge accessible to students of all levels. He has pioneered understanding of angles, pressure distribution, and threat sequencing in leg lock exchanges. Giles' technical innovations in positions like saddle rig, outside heel hook entries, and knee reaping mechanics have become foundational concepts taught in modern BJJ. His teaching emphasizes the 'why' behind techniques, enabling students to adapt and innovate independently rather than memorizing rigid sequences.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on Modern BJJ</h2>
            <p>Lachlan Giles' impact on Brazilian Jiu-Jitsu extends far beyond his competition record. He fundamentally shifted how the global grappling community understands and applies leg lock techniques. Through his instructional content, seminars, and online platforms, Giles democratized knowledge that was previously siloed among elite competitors, enabling athletes worldwide to study advanced leg lock systems. His systematic approach to teaching has influenced countless grapplers across all belt levels and competition divisions.

Giles' emphasis on mechanical principles over rigid techniques has encouraged a more scientific approach to BJJ instruction and learning. He demonstrated that leg locks could be systematically refined and taught rather than considered mysterious submissions. His educational philosophy, which prioritizes understanding over memorization, has influenced how many modern coaches structure their curriculums. The widespread adoption of leg lock systems in contemporary BJJ—from high school wrestling to professional grappling events—owes significantly to Giles' contributions. His legacy represents a paradigm shift toward evidence-based technical development and continuous innovation. Today, Giles remains an active educator and innovator, continuing to influence the evolution of grappling through his teaching methods, technical refinements, and commitment to advancing the sport's collective understanding.</p>
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
