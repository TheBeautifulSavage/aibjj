import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Murilo Santana: BJJ Legend & Grappling Pioneer | AIBJJ",
  description: "Discover Murilo Santana's legendary BJJ career, competition achievements, signature techniques, and lasting influence on Brazilian Jiu-Jitsu.",
};

export default function Page() {
  const tags = ["Murilo Santana", "Brazilian Jiu-Jitsu", "BJJ Legend", "Grappling", "Jiu-Jitsu History"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Murilo Santana: BJJ Legend & Grappling Pioneer</h1>
        <p className="mt-4 text-xl text-zinc-400">Discover Murilo Santana's legendary BJJ career, competition achievements, signature techniques, and lasting influence on Brazilian Jiu-Jitsu.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Murilo Santana emerged as one of Brazilian Jiu-Jitsu's most influential figures during the sport's formative years in Brazil. Born and raised in Rio de Janeiro, Santana was introduced to BJJ during a period when the martial art was rapidly evolving beyond the Gracie family's traditional teachings. He began his training at a young age, developing a deep passion for the technical aspects of grappling that would define his career. Santana's early dedication to BJJ coincided with the sport's expansion throughout Brazil, and he quickly established himself as a serious competitor and innovator. His training methodology emphasized fundamental techniques combined with creative problem-solving on the mat. Unlike many of his contemporaries who focused solely on competition success, Santana dedicated himself equally to teaching and refining the art. His approach to BJJ training became foundational for many academies throughout Brazil, establishing principles that remain relevant in modern grappling instruction today.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Murilo Santana's competition record showcased exceptional skill across multiple weight classes and tournament formats. He competed successfully during BJJ's golden era, facing and defeating some of the sport's most formidable competitors. Santana earned multiple medals at prestigious tournaments, establishing himself as a consistent threat at the highest levels of Brazilian Jiu-Jitsu competition. His victories came against notable opponents who would themselves become legends in the sport, demonstrating his technical superiority and strategic acumen. Santana's tournament success spanned decades, proving his longevity and adaptability as the sport evolved. He earned respect not just for winning matches, but for the manner in which he won them, often showcasing clean technique and intelligent positioning. His competition accomplishments served as a foundation for his greater influence in BJJ, establishing credibility that enhanced his teaching career and allowed him to shape the next generation of grapplers.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Murilo Santana was renowned for his technical proficiency and methodical approach to grappling. His fighting style emphasized superior positioning, leverage mechanics, and positional control rather than relying on explosive athleticism. Santana possessed exceptional knowledge of leg lock systems, footlock transitions, and heel hook variations during an era when leg attack techniques were less developed than modern submissions. His understanding of pressure-based positional strategies made him particularly effective in top-control situations. Santana's signature techniques included sophisticated guard passing sequences, innovative side control transitions, and refined submission chain combinations. He demonstrated remarkable ability to flow between techniques, adapting seamlessly as opponents adjusted their defenses. His technical innovations contributed significantly to the evolution of modern grappling methodology. Santana's teaching emphasized understanding the 'why' behind techniques rather than mechanical repetition, encouraging students to develop intuitive grappling sense. This philosophical approach to technique instruction distinguished his academy and influenced how contemporary BJJ is taught worldwide.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Murilo Santana's legacy extends far beyond his personal competition achievements, establishing him as a foundational figure in Brazilian Jiu-Jitsu's development. His academy produced numerous high-level competitors and respected instructors who continued spreading his technical philosophy throughout Brazil and internationally. Santana's emphasis on technical excellence, systematic instruction, and innovative problem-solving became embedded in BJJ culture, influencing how the sport is taught today. He demonstrated that success in grappling comes from deep technical understanding rather than physical dominance alone, a principle now universally accepted in modern BJJ training. His lineage of students and their students created a network of practitioners dedicated to preserving and advancing the technical foundations he established. Santana's contributions to leg lock development and positional strategy remain studied by contemporary grapplers seeking to understand BJJ's technical evolution. His influence appears throughout modern competition where his techniques and principles are standard methodology. Murilo Santana remains celebrated as a visionary who elevated BJJ's technical standards and proved that intelligent, systematic grappling creates lasting success and meaningful impact on the martial art itself.</p>
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
