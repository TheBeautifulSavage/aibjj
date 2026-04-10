import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Relson Gracie: BJJ Legend and Gracie Family Pioneer | AIBJJ",
  description: "Learn about Relson Gracie, the legendary BJJ master who brought Brazilian Jiu-Jitsu to Hawaii and revolutionized grappling instruction worldwide.",
};

export default function Page() {
  const tags = ["Relson Gracie", "Brazilian Jiu-Jitsu", "Gracie Family", "BJJ History", "Grappling Legend"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Relson Gracie: BJJ Legend and Gracie Family Pioneer</h1>
        <p className="mt-4 text-xl text-zinc-400">Learn about Relson Gracie, the legendary BJJ master who brought Brazilian Jiu-Jitsu to Hawaii and revolutionized grappling instruction worldwide.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Relson Gracie was born in Rio de Janeiro, Brazil, into the legendary Gracie family, which pioneered Brazilian Jiu-Jitsu as a martial art. As the son of Helio Gracie and brother to Rorion and Rickson, Relson was immersed in BJJ from childhood, training under the direct instruction of his father. The Gracie household served as his first academy, where he learned the technical foundations and philosophical principles that would define his approach to the art.

Relson's early years were marked by rigorous training and competition within Brazil's thriving BJJ scene. He developed a reputation for his technical proficiency and teaching ability, distinguishing himself not just as a fighter but as an educator. His dedication to spreading BJJ beyond Brazil's borders eventually led him to establish a presence in Hawaii, where he would make his most significant impact. This move represented a pivotal moment in his career, as he became instrumental in bringing authentic Gracie Jiu-Jitsu to the Hawaiian islands and beyond, establishing academies and training a new generation of grapplers outside Brazil.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Relson Gracie competed during the golden era of Brazilian Jiu-Jitsu, when matches were fought under minimal rules and technical knowledge varied significantly among competitors. He earned his high rank through countless matches and demonstrated mastery across different weight classes and competitive formats. While specific tournament wins are less documented than his later-generation relatives, Relson's competitive record reflected the quality expected of a Gracie family member during this formative period of the sport.

His greatest achievements, however, extended beyond tournament victories. Relson became known for defeating larger opponents and demonstrating the effectiveness of Gracie Jiu-Jitsu against various martial arts styles. His matches against international competitors helped establish BJJ's credibility worldwide. More importantly, Relson achieved the distinction of earning the highest rank in Brazilian Jiu-Jitsu, becoming a respected authority on technique and tradition. His competitive experience directly informed his teaching methodology, allowing him to pass on practical knowledge gained through real combat to his students across Hawaii and the mainland United States.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Relson Gracie embodied the classical Gracie Jiu-Jitsu style developed by his father Helio, emphasizing technique, leverage, and efficiency over strength and athleticism. His approach prioritized fundamental movements and positional control, reflecting the philosophical foundation of Gracie Jiu-Jitsu: that a smaller, technically superior grappler could overcome a larger opponent. Relson's fighting style was characterized by precise footwork, superior positioning, and a methodical approach to submissions.

He was particularly skilled in leg lock techniques, which were not as commonly emphasized in BJJ during his competitive years as they are today. Relson's leg work demonstrated the effectiveness of these submissions when applied with proper mechanics and timing. His teaching emphasized the importance of understanding the 'why' behind techniques rather than simply memorizing movements. Relson focused on teaching students the principles underlying BJJ, allowing them to adapt techniques to their body type and fighting preferences. This educational philosophy became his trademark, influencing how Brazilian Jiu-Jitsu is taught and understood, particularly in Hawaii where his lineage of instruction continues today.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Relson Gracie's most enduring legacy is his role in establishing and developing authentic Gracie Jiu-Jitsu instruction in Hawaii. By bringing traditional Gracie teaching methods to the islands, he created a lineage of high-quality instruction that has produced numerous accomplished black belts and contributed significantly to BJJ's growth in the Pacific region. His academy became a destination for serious grapplers seeking to learn from a direct student of Helio Gracie, maintaining high standards of technique and tradition.

Beyond his direct students, Relson influenced BJJ philosophy by emphasizing the importance of fundamentals and proper instruction. At a time when the sport was becoming increasingly competitive and sometimes sensationalized, Relson represented continuity with BJJ's roots and principles. His teaching methodology has been passed down through his lineage, creating a recognizable 'Relson Gracie style' of instruction characterized by attention to detail, respect for tradition, and practical application. Today, Relson is remembered as a crucial bridge between the classic era of Gracie Jiu-Jitsu and modern sport BJJ, having trained numerous athletes while preserving the essence of what Helio Gracie developed. His impact extends beyond competition records into the very fabric of how Brazilian Jiu-Jitsu is taught and transmitted worldwide.</p>
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
