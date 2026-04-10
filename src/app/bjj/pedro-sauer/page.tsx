import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Pedro Sauer: Brazilian Jiu-Jitsu Pioneer | AIBJJ",
  description: "Explore Pedro Sauer's legendary BJJ career, competition achievements, fighting style, and revolutionary impact on Brazilian Jiu-Jitsu worldwide.",
};

export default function Page() {
  const tags = ["Pedro Sauer", "Brazilian Jiu-Jitsu", "BJJ Legend", "Grappling Pioneer", "Jiu-Jitsu History"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Pedro Sauer: Brazilian Jiu-Jitsu Pioneer</h1>
        <p className="mt-4 text-xl text-zinc-400">Explore Pedro Sauer's legendary BJJ career, competition achievements, fighting style, and revolutionary impact on Brazilian Jiu-Jitsu worldwide.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Pedro Sauer was born in Rio de Janeiro, Brazil, and began his Brazilian Jiu-Jitsu training during the formative years of the sport. He trained under the legendary Luiz França, one of the most respected instructors in BJJ history and a direct student of Luiz França lineage that emphasized technical precision and effective leg lock systems. This mentorship proved instrumental in shaping Sauer's approach to grappling, distinguishing his style from the dominant Gracie family methodology of the era. Growing up in Rio's competitive BJJ environment, Sauer developed exceptional technical skills while maintaining the practical, no-nonsense approach characteristic of non-Gracie lineages. His early competitions established him as a formidable competitor who could compete at the highest levels of Brazilian Jiu-Jitsu during the sport's rapid evolution in the 1970s and 1980s.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Pedro Sauer earned his high rank through exceptional competitive performance and technical mastery. He achieved prominence as a multiple-time Brazilian Jiu-Jitsu champion and competed successfully against the sport's elite competitors throughout his career. Sauer earned the rank of 6th degree red-and-black belt, one of the highest honors in Brazilian Jiu-Jitsu, reflecting decades of dedication and contribution to the art. His competition victories demonstrated his ability to execute techniques under pressure while adapting to different opponent styles. Beyond individual tournament success, Sauer's influence extended through his academy and students, many of whom became accomplished competitors themselves. His consistent success and high ranking established him as one of the most respected technical experts in Brazilian Jiu-Jitsu history, particularly regarding leg lock techniques and submission systems that were less emphasized in mainstream competition during his era.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Pedro Sauer's fighting style emphasized technical efficiency and systematic leg lock approaches that were revolutionary for his time. Unlike the predominantly upper body-focused techniques popularized by the Gracie family, Sauer developed and promoted sophisticated leg lock systems that provided alternative pathways to control and submission. His signature techniques included footlock combinations, heel hook progressions, and reaping positions that became foundational elements in modern leg lock systems. Sauer's methodical approach to lower body submissions predated the current leg lock renaissance by decades, demonstrating remarkable foresight into grappling's technical evolution. His teaching methodology emphasized position before submission, control before technique, and systematic progression through skill levels. These principles created a comprehensive system accessible to students of varying abilities while maintaining technical depth for advanced practitioners. His technical innovations influenced subsequent generations of grapplers who recognized the effectiveness and efficiency of his leg lock methodologies.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Pedro Sauer's legacy fundamentally shaped Brazilian Jiu-Jitsu's technical landscape by validating non-Gracie methodologies and leg lock systems as viable, effective approaches. His lineage produced numerous accomplished instructors, competitors, and black belts who disseminated his technical philosophy worldwide. Sauer Academy locations across multiple countries represented the internationalization of his influence, bringing his systematic teaching approach to diverse populations. His contributions legitimized leg lock specialization within competitive jiu-jitsu during periods when these techniques were underutilized or discouraged by mainstream competition. Modern leg lock innovators acknowledge the foundational work established by Sauer's technical systems. As a 6th degree red-and-black belt and respected elder statesman, Sauer earned recognition as one of Brazilian Jiu-Jitsu's essential figures who expanded the art beyond single lineage dominance. His academy's continued operation, combined with his students' international presence, ensures his technical legacy remains integral to contemporary Brazilian Jiu-Jitsu instruction and competition.</p>
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
