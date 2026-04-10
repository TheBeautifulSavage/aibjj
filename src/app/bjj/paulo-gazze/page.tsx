import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Paulo Gazze | BJJ Competitor & Grappling Pioneer | AIBJJ",
  description: "Discover Paulo Gazze's BJJ career, competition achievements, signature techniques, and lasting influence on Brazilian Jiu-Jitsu.",
};

export default function Page() {
  const tags = ["Paulo Gazze", "Brazilian Jiu-Jitsu", "BJJ Competitor", "Grappling", "Jiu-Jitsu History"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Paulo Gazze | BJJ Competitor & Grappling Pioneer</h1>
        <p className="mt-4 text-xl text-zinc-400">Discover Paulo Gazze's BJJ career, competition achievements, signature techniques, and lasting influence on Brazilian Jiu-Jitsu.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Paulo Gazze emerged as a significant figure in Brazilian Jiu-Jitsu during a transformative period for the sport. Growing up in Brazil, Gazze was immersed in the grappling culture that defined the nation's martial arts landscape. He began his formal BJJ training in his youth, dedicating himself to mastering the fundamental techniques and developing a deep understanding of positional hierarchy and submission mechanics. His early years in the sport coincided with BJJ's evolution from a regional Brazilian phenomenon into an international martial art, placing him among the pioneers who helped shape modern grappling standards. Gazze's commitment to technical excellence and consistent training established him as a respected figure within the Brazilian Jiu-Jitsu community, earning recognition from instructors and competitors alike during the formative decades of competitive grappling.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Throughout his competitive career, Paulo Gazze participated in numerous prestigious BJJ tournaments and grappling events that tested his skills against elite-level competitors. He earned multiple accolades and titles that reflected his technical prowess and competitive consistency. Gazze competed across various weight classes and age divisions, demonstrating versatility and adaptability in high-pressure competition environments. His tournament performances earned him respect within the Brazilian Jiu-Jitsu federation and established him as a notable contributor to the sport's competitive history. Gazze's achievements extended beyond individual victories, as he represented his academy and lineage with distinction, helping elevate the reputation of his team through consistent performances in major competitions. His competitive record showcases a dedicated athlete who maintained high standards throughout his grappling career, competing at times when the sport demanded exceptional technical knowledge and physical conditioning.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Paulo Gazze developed a technical and methodical approach to Brazilian Jiu-Jitsu that emphasized sound fundamentals and strategic positioning. His grappling style reflected the classical BJJ principles that prioritize control, pressure, and efficient energy expenditure during matches. Gazze was known for executing clean, textbook techniques with precise timing and positioning awareness that exemplified proper biomechanics. His approach to submission work demonstrated understanding of leverage principles and anatomical knowledge essential to effective grappling. Gazze incorporated leg lock techniques and positional dominance sequences that were ahead of their time in competitive BJJ contexts. His technical repertoire included effective guard passing, top control positions, and transition strategies that allowed him to maintain advantages throughout matches. The signature methods employed by Gazze reflected systematic training principles and a commitment to technical refinement, making him a study in effective grappling fundamentals.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Paulo Gazze's contributions to Brazilian Jiu-Jitsu extend beyond his individual competition record, encompassing his influence on technical development and athlete mentorship within the sport. He represented an important generation of grapplers who helped establish the competitive standards and technical frameworks that modern BJJ athletes build upon. Gazze's teaching methodology and technical approach have influenced students and training partners who continued spreading his knowledge throughout the grappling community. His dedication to technical excellence and systematic training helped shape how modern Brazilian Jiu-Jitsu athletes approach skill development and competition preparation. Through his academy affiliations and lineage connections, Gazze's legacy persists within the broader BJJ ecosystem, with his principles and techniques carried forward by successive generations of competitors. His historical significance in grappling reflects the important role he played during BJJ's evolution into a globally recognized martial art with established technical standards and competitive frameworks.</p>
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
