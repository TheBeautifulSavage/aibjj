import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Pedro Marinho: BJJ Legend and Grappling Pioneer | AIBJJ",
  description: "Discover Pedro Marinho's legendary BJJ career, competition achievements, signature techniques, and lasting influence on Brazilian Jiu-Jitsu.",
};

export default function Page() {
  const tags = ["Pedro Marinho", "Brazilian Jiu-Jitsu", "BJJ Legend", "Grappling", "Jiu-Jitsu History"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Pedro Marinho: BJJ Legend and Grappling Pioneer</h1>
        <p className="mt-4 text-xl text-zinc-400">Discover Pedro Marinho's legendary BJJ career, competition achievements, signature techniques, and lasting influence on Brazilian Jiu-Jitsu.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Pedro Marinho emerged as one of Brazilian Jiu-Jitsu's most accomplished competitors during the sport's most formative era. Growing up in Brazil during the 1970s and 1980s, Marinho immersed himself in the grappling culture that defined the nation's martial arts landscape. He began his BJJ training at a young age, developing a deep understanding of fundamental techniques before specializing in the advanced methodologies that would distinguish his career.

Marinho's early training emphasized traditional Gracie Jiu-Jitsu principles while incorporating innovative approaches to positional control and leg lock transitions. His dedication to technical mastery and relentless training regimen set him apart from contemporaries. Through competition at regional and national levels, Marinho refined his craft and established himself as a formidable grappler. His rise through the ranks demonstrated exceptional adaptability and intelligence on the mat, earning respect from both competitors and instructors across Brazil's competitive circuit.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Pedro Marinho's competition record reflects one of the most consistent and impressive careers in BJJ history. He captured multiple Brazilian national championships across different weight classes and age divisions, dominating opponents through superior technique and strategic execution. Marinho's success extended to international competitions, where he represented Brazil with distinction against elite grapplers from around the world.

His achievements include victories over numerous notable competitors and consistent placements in prestigious tournaments throughout his active competition years. Marinho competed during an era when BJJ matches were shorter and more submission-focused, showcasing his finishing abilities and positional dominance. Beyond individual titles, his competitive success established him as a benchmark for excellence within the Brazilian Jiu-Jitsu community. His performance record contributed significantly to elevating the sport's profile and demonstrating the effectiveness of technical grappling at the highest competitive levels.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Pedro Marinho's grappling style exemplified technical precision and positional dominance. He was renowned for his exceptional leg lock systems, footlock entries, and heel hook transitions that predated their widespread adoption in modern BJJ. His leg lock mastery provided him with multiple submission angles and escape pathways that frustrated opponents unfamiliar with these techniques.

Marinho's approach emphasized control before submission, methodically advancing position and limiting opponent options. His guard passing techniques were particularly noted for their systematic progression and pressure application. He developed innovative ways to neutralize opponent advantages and create submission opportunities from seemingly neutral positions. Marinho's technical innovations in leglocking influenced subsequent generations of grapplers who studied his competition footage and methodology. His ability to adapt techniques based on opponent style and size demonstrated high-level problem-solving intelligence that characterized elite-level BJJ performance.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Pedro Marinho's contributions to Brazilian Jiu-Jitsu extend beyond his competition record into the sport's technical and philosophical development. As a respected instructor and mentor, he passed forward his knowledge to numerous students who carried his teaching methodology into their own BJJ careers. His emphasis on fundamental soundness combined with innovative techniques influenced how BJJ instruction evolved.

Marinho is recognized as a pioneer in systematizing leg lock techniques during an era when these submissions were less emphasized in mainstream BJJ training. His competitive demonstrations of leglock effectiveness helped legitimize these techniques within the broader grappling community. Today, his legacy persists through students, instructors he influenced, and the technical innovations documented through his competition record. Marinho represents a crucial bridge between traditional Gracie Jiu-Jitsu principles and the modern technical innovations that define contemporary BJJ, cementing his place among the sport's most important historical figures and technical innovators.</p>
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
