import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Victor Hugo BJJ Grappler | Brazilian Jiu-Jitsu Legend | AIBJJ",
  description: "Discover Victor Hugo's BJJ career, competition victories, signature techniques, and lasting influence on Brazilian Jiu-Jitsu grappling.",
};

export default function Page() {
  const tags = ["Victor Hugo", "Brazilian Jiu-Jitsu", "BJJ Grappler", "Jiu-Jitsu Champion", "Grappling"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Victor Hugo BJJ Grappler | Brazilian Jiu-Jitsu Legend</h1>
        <p className="mt-4 text-xl text-zinc-400">Discover Victor Hugo's BJJ career, competition victories, signature techniques, and lasting influence on Brazilian Jiu-Jitsu grappling.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Victor Hugo emerged from Brazil's vibrant grappling culture during a transformative era for Brazilian Jiu-Jitsu. Growing up in an environment where martial arts were deeply embedded in the community, Hugo was naturally drawn to BJJ as both a sport and lifestyle. His early training formed the foundation for what would become a distinguished career spanning multiple weight classes and competition formats.

Under dedicated coaching and mentorship, Hugo developed the technical proficiency and competitive mindset necessary to compete at elite levels. His journey through the ranks demonstrated exceptional progression, moving from local competitions to national and international stages. The discipline instilled through consistent training and competition refined his grappling philosophy and contributed to his emergence as a respected figure in the sport.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Victor Hugo's competition record reflects consistent excellence across prestigious BJJ tournaments and grappling events. He achieved notable victories at major competitions, establishing himself as a formidable competitor in his weight class. His wins against top-ranked opponents showcased technical superiority and competitive resilience that defined his career trajectory.

Throughout his competitive years, Hugo accumulated accolades that positioned him among Brazil's elite grapplers. His performances at significant events earned him recognition from the international BJJ community and solidified his reputation as a dangerous competitor. Whether competing in gi or no-gi formats, Hugo demonstrated adaptability and mastery of both disciplines, qualities that contributed to sustained success at high levels of competition.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Victor Hugo's grappling style is characterized by technical precision, positional dominance, and efficient submission mechanics. His approach emphasizes control and pressure, methodically advancing through positions while limiting opponent escape options. This systematic style reflects deep technical knowledge and strategic match planning that separates elite competitors from others.

Known for strong guard passing and top position control, Hugo excels in fundamental positions while maintaining the adaptability to execute advanced techniques when opportunities arise. His signature techniques showcase the combination of timing, leverage, and understanding that defines high-level jiu-jitsu. Hugo's ability to flow seamlessly between positions while maintaining tactical superiority exemplifies the technical refinement valued in Brazilian Jiu-Jitsu.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Victor Hugo's contributions to Brazilian Jiu-Jitsu extend beyond his competition accomplishments to his broader influence on the sport's development. His technical approach and competitive performances helped shape training methodologies adopted by subsequent generations of grapplers. Through both competition and instruction, Hugo disseminated knowledge that elevated overall technical standards within the community.

As a respected figure in BJJ, Hugo's legacy encompasses his role in popularizing effective techniques and promoting the sport's growth in Brazil and internationally. His career demonstrated the possibilities available to dedicated grapplers and inspired countless athletes to pursue excellence in Brazilian Jiu-Jitsu. The influence of his technical innovations and competitive example continues resonating through the sport, cementing his position as a significant contributor to BJJ's evolution and ongoing refinement.</p>
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
