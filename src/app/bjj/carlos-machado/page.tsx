import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Carlos Machado: BJJ Pioneer and Legendary Grappler | AIBJJ",
  description: "Explore Carlos Machado's influential BJJ career, competition achievements, signature techniques, and lasting impact on Brazilian Jiu-Jitsu.",
};

export default function Page() {
  const tags = ["Carlos Machado", "Brazilian Jiu-Jitsu", "BJJ Legend", "Grappling", "Machado Brothers"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Carlos Machado: BJJ Pioneer and Legendary Grappler</h1>
        <p className="mt-4 text-xl text-zinc-400">Explore Carlos Machado's influential BJJ career, competition achievements, signature techniques, and lasting impact on Brazilian Jiu-Jitsu.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Carlos Machado was born into the prestigious Machado family, a lineage that revolutionized Brazilian Jiu-Jitsu during the 20th century. Growing up in Rio de Janeiro, Brazil, Carlos was immersed in BJJ from childhood, training under his family's instruction and developing skills that would eventually influence the entire sport. The Machado family emphasized technical precision, leg lock systems, and innovative approaches to grappling that diverged from traditional lineages of the time.

During his formative years, Carlos trained intensively with his brothers John, Jean-Jacques, and Renzo, pushing each other to develop increasingly sophisticated techniques. This brotherhood created a laboratory of innovation where new strategies and submissions were constantly tested and refined. Carlos's dedication to the art and his family's legacy positioned him as a key figure in spreading Brazilian Jiu-Jitsu beyond Brazil's borders, particularly to the United States during the 1980s and 1990s.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Carlos Machado compiled an impressive competition record throughout his grappling career, earning multiple titles and recognition as one of the sport's elite competitors. He achieved success at the highest levels of Brazilian Jiu-Jitsu, competing in absolute divisions and weight class categories where he faced some of the sport's most formidable opponents. His competitive achievements helped establish the Machado family's reputation as technical innovators and warriors.

Beyond individual tournament victories, Carlos became renowned for his effectiveness in submission grappling and MMA contexts, demonstrating the practical applications of his technical arsenal. His willingness to compete across different rulesets and formats showcased the versatility of Machado family techniques. Carlos's accomplishments weren't merely about winning matches; they validated the family's systematic approach to technique development and proved that their methods could succeed against any opponent, regardless of style or background.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Carlos Machado is particularly renowned for his mastery of leg lock systems, advanced footlock sequences, and positional control that became hallmarks of the Machado family's approach. His leg lock game was decades ahead of its time, featuring intricate ankle locks, heel hooks, and knee reaping techniques that are now considered fundamental to modern grappling. Carlos's technical innovations in lower body submissions provided a systematic framework that influenced how leg locks are taught and applied today.

Beyond leg locks, Carlos demonstrated exceptional proficiency in upper body submissions, transitions, and cage control. His fighting style emphasized efficiency, timing, and understanding of leverage principles rather than relying on athleticism or strength. Carlos's approach to footlock sequences created logical progressions that allowed practitioners of all sizes to access high-percentage submissions. His willingness to experiment with techniques and adapt his game made him a complete martial artist who could adjust to any opponent's style while maintaining technical superiority.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Carlos Machado's influence on Brazilian Jiu-Jitsu extends far beyond his competition record, fundamentally shaping how modern grapplers approach leg lock systems and submission wrestling. Alongside his brothers, particularly John and Jean-Jacques, Carlos helped establish the Machado family as pioneers of leg lock methodology, a legacy that continues to influence contemporary BJJ instruction worldwide. Their systematic approach to footlock sequences became a blueprint for technical development across multiple martial arts disciplines.

Carlos's contributions helped democratize advanced techniques by breaking down complex submissions into teachable, logical progressions. His emphasis on technical precision over athletic dominance made Brazilian Jiu-Jitsu more accessible to practitioners of varying body types and physical capabilities. Today, virtually every serious grappler studies variations of techniques pioneered and refined by Carlos Machado and his family. His legacy persists in BJJ academies globally, where leg lock systems directly descended from Machado family methodology remain central to competition preparation and technical advancement.</p>
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
