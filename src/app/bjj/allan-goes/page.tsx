import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Allan Goes: Brazilian Jiu-Jitsu Pioneer | AIBJJ",
  description: "Learn about Allan Goes, legendary BJJ competitor and instructor who revolutionized grappling techniques and founded Alliance team.",
};

export default function Page() {
  const tags = ["Allan Goes", "Brazilian Jiu-Jitsu", "BJJ Pioneer", "Grappling Legend", "Alliance Team"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Allan Goes: Brazilian Jiu-Jitsu Pioneer</h1>
        <p className="mt-4 text-xl text-zinc-400">Learn about Allan Goes, legendary BJJ competitor and instructor who revolutionized grappling techniques and founded Alliance team.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Allan Goes emerged as one of Brazilian Jiu-Jitsu's most influential figures during the sport's formative years in Rio de Janeiro. Beginning his grappling journey in the 1980s, Goes trained under legendary instructors who shaped the technical foundation of modern BJJ. His relentless pursuit of excellence and innovative approach to technique quickly distinguished him from his peers. Goes demonstrated exceptional aptitude for both competition and instruction, earning respect throughout the Brazilian Jiu-Jitsu community for his systematic teaching methodology and tactical expertise. His early competitions established him as a formidable opponent, showcasing remarkable adaptability and technical precision. The combination of his competitive success and pedagogical skills made Goes a natural choice to lead and develop talent. His dedication to understanding grappling mechanics at the deepest level allowed him to create effective training systems that would influence generations of BJJ practitioners worldwide.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Allan Goes compiled an impressive competition record that cemented his status as an elite grappler during Brazilian Jiu-Jitsu's golden era. He achieved multiple victories in prestigious tournaments, demonstrating consistent excellence across different weight classes and competition formats. Goes earned his high rank through dominant performances and technical mastery, progressing through the belt system with distinction. His competitive achievements extended beyond individual medals, as he helped establish the fundamental standards for technical excellence in BJJ. Goes competed successfully against some of the sport's greatest names, proving his ability to execute high-level grappling against elite opposition. His tournament victories and consistent performances established the credential foundation necessary to transition into a highly successful coaching career. Beyond championship belts, Goes earned the respect of the global BJJ community through his professionalism, sportsmanship, and continuous technical innovation during matches.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Allan Goes revolutionized Brazilian Jiu-Jitsu through his systematic, position-based approach to grappling. Rather than relying solely on athleticism, Goes developed methodical sequences that emphasized control, pressure, and technical progression. His fighting philosophy prioritized establishing dominant positions before pursuing submissions, reflecting his deep understanding of leverage and mechanical advantage. Goes mastered footlock techniques during an era when leg lock systems were less developed, contributing significantly to the evolution of lower body grappling. His emphasis on positional hierarchy and methodical advancement became foundational concepts taught throughout the Alliance lineage. Goes demonstrated exceptional proficiency in fundamental positions, showing that mastery of basic techniques executed with precision defeats flashy but less disciplined approaches. His technical innovations in passing guards, maintaining top control, and transitioning between positions became studied extensively by aspiring competitors. The Goes methodology emphasized patience, timing, and understanding opponent reactions rather than explosive, power-dependent movements.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Allan Goes' most enduring legacy is the Alliance team, one of Brazilian Jiu-Jitsu's most successful and influential organizations. As head instructor and founder, Goes created a systematic training environment that produced numerous champions and elevated technical standards throughout the sport. The Alliance team became known for developing well-rounded grapplers with exceptional fundamental skills and competitive mentality. Goes' teaching methodology, emphasizing positional mastery and technical progression, became widely adopted by BJJ academies globally. His contributions to technique development, particularly in leg lock systems and position-based grappling, influenced how modern Brazilian Jiu-Jitsu is taught. Goes demonstrated that effective coaching combines technical expertise, program development, and creating positive team culture. His lineage produced multiple world champions, ADCC competitors, and influential instructors who carried his methodologies forward. Allan Goes transformed from elite competitor to institution-builder, fundamentally shaping Brazilian Jiu-Jitsu's technical and competitive landscape. His influence continues through the Alliance network and the countless practitioners who learned his systematic approach to grappling excellence.</p>
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
