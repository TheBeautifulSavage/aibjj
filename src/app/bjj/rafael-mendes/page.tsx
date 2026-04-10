import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Rafael Mendes: BJJ Legend and Alliance Co-Founder | AIBJJ",
  description: "Learn about Rafael Mendes, legendary BJJ competitor, instructor, and co-founder of Alliance. Discover his techniques and influence on Brazilian Jiu-Jitsu.",
};

export default function Page() {
  const tags = ["Rafael Mendes", "BJJ legend", "Brazilian Jiu-Jitsu", "Alliance Jiu-Jitsu", "grappling"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Rafael Mendes: BJJ Legend and Alliance Co-Founder</h1>
        <p className="mt-4 text-xl text-zinc-400">Learn about Rafael Mendes, legendary BJJ competitor, instructor, and co-founder of Alliance. Discover his techniques and influence on Brazilian Jiu-Jitsu.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Rafael Mendes was born in Rio de Janeiro, Brazil, where he developed a passion for Brazilian Jiu-Jitsu from an early age. Growing up in the sport's birthplace, he was immersed in a culture that celebrated grappling as both an art and a way of life. Under the tutelage of dedicated instructors, Mendes honed his technical skills and competitive spirit, quickly establishing himself as a rising talent in Rio's competitive BJJ scene.

Mendes' early years in the sport coincided with a transformative period in Brazilian Jiu-Jitsu, when the sport was evolving rapidly with new techniques and training methodologies. His dedication to constant improvement and technical refinement set the foundation for an illustrious career. The combination of natural athleticism, intellectual approach to technique, and relentless work ethic propelled him through the ranks, earning recognition among peers and coaches as an exceptional grappler with innovative ideas about jiu-jitsu.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Rafael Mendes built an impressive competitive resume across multiple weight classes and competition formats throughout his career. He competed successfully in prestigious tournaments including the Brazilian National Championship, Pan American Championships, and World Jiu-Jitsu Championship. His versatility allowed him to achieve high-level results whether competing in gi or no-gi competitions, demonstrating mastery across different rule sets.

Beyond individual accolades, Mendes earned respect for his consistency and longevity as a competitor. He maintained a high level of performance over many years, adapting his game as the sport evolved and younger competitors emerged. His competitive experience translated seamlessly into his coaching career, where he became known for developing other athletes who went on to achieve significant success at elite levels. Mendes' ability to compete at the highest levels while simultaneously building a coaching legacy exemplified his profound understanding of Brazilian Jiu-Jitsu.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Rafael Mendes was renowned for developing and refining footlock techniques, particularly heel hooks and ankle locks, which became his signature contributions to BJJ's technical arsenal. His innovative approach to leg lock systems influenced how modern grapplers train and compete, especially at higher belt levels. Mendes demonstrated how leg attacks could be executed with precision, control, and minimal risk when applied with proper technique and timing.

His fighting philosophy emphasized efficiency and technical superiority over pure athleticism. Mendes believed in understanding the mechanical principles underlying each technique, allowing him to adapt and modify movements for different opponents and situations. His grappling style reflected a cerebral approach to BJJ, where positioning and leverage were paramount. Students of his techniques consistently noted his ability to make complex movements appear simple, breaking down submissions and positional transitions into fundamental components that could be understood and replicated by grapplers of various skill levels.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Rafael Mendes' most enduring legacy is his role as co-founder of Alliance Jiu-Jitsu, one of Brazil's most successful and respected BJJ teams. Through Alliance, Mendes created an environment where technical excellence and innovation flourished, producing multiple world champions and shaping the competitive landscape of Brazilian Jiu-Jitsu. His leadership established a lineage of skilled instructors and athletes who continue spreading his methodology and philosophy.

Mendes significantly influenced how the BJJ community approaches leg lock techniques, with his innovations becoming standard curriculum components in academies worldwide. His emphasis on technical precision and detailed instruction elevated coaching standards across the sport. Beyond technique, Mendes exemplified the qualities of a true martial artist: humility, continuous learning, and dedication to the growth of the sport. His contributions to Brazilian Jiu-Jitsu extend far beyond his personal achievements, establishing a foundational legacy that continues influencing how grappling is taught, trained, and competed at all levels.</p>
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
