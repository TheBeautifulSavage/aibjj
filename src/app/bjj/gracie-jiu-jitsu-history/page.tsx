import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Gracie Jiu-Jitsu History: Origins and Legacy | AIBJJ",
  description: "Explore the rich history of Gracie Jiu-Jitsu, from its Japanese roots to Brazilian dominance. Learn how the Gracie family revolutionized martial arts.",
};

export default function Page() {
  const tags = ["gracie", "history", "origins"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Gracie Jiu-Jitsu History: Origins and Legacy</h1>
        <p className="mt-4 text-xl text-zinc-400">Explore the rich history of Gracie Jiu-Jitsu, from its Japanese roots to Brazilian dominance. Learn how the Gracie family revolutionized martial arts.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">The Japanese Foundation</h2>
            <p>Gracie Jiu-Jitsu traces its roots to traditional Japanese jujutsu, a martial art practiced by samurai for centuries. In the early 1900s, Japanese judoka Mitsuyo Maeda traveled to Brazil, bringing his expertise in grappling and leverage-based techniques. Maeda's influence proved transformative, as he taught local students the principles of using an opponent's momentum against them rather than relying purely on strength. This philosophy emphasized technique over athleticism, making the art accessible to people of all sizes and ages. Maeda's teachings laid the groundwork for what would become a distinctly Brazilian interpretation of jiu-jitsu, blending Japanese fundamentals with innovative refinements that prioritized practical application and efficiency in real combat scenarios.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">The Gracie Family's Rise</h2>
            <p>The Gracie family's dominance in jiu-jitsu began when patriarch Luiz França introduced the art to Helio Gracie and his brothers in Rio de Janeiro. Due to his smaller stature and physical limitations, Helio Gracie developed modified techniques emphasizing leverage, angles, and timing over strength. His innovations created what became known as Gracie Jiu-Jitsu, a revolutionary approach that proved remarkably effective. Helio's sons, particularly Rorion and Rickson, further developed the system while establishing it as a family legacy. Their strategic refinements and competitive dominance throughout the mid-20th century solidified the Gracie name as synonymous with jiu-jitsu excellence. The family's commitment to testing techniques through real competition, rather than theoretical practice, became their hallmark.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">UFC and Global Expansion</h2>
            <p>The Ultimate Fighting Championship's creation in 1993 fundamentally changed martial arts globally. Rorion Gracie founded the UFC specifically to demonstrate Gracie Jiu-Jitsu's superiority, selecting his brother Royce as their representative. Royce's dominant victories against larger opponents from diverse fighting backgrounds proved that technical skill could overcome size and strength advantages. This watershed moment introduced millions worldwide to jiu-jitsu's effectiveness, triggering unprecedented global expansion. The family's competitive success inspired martial artists everywhere to study their methods. However, the UFC's evolution and adoption of jiu-jitsu by fighters from all backgrounds eventually democratized the sport. While Gracie techniques remained foundational, modern jiu-jitsu became less exclusively associated with one family, becoming instead a universal martial art accessible to everyone seeking mastery.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Modern Evolution</h2>
            <p>Today, Gracie Jiu-Jitsu represents both a historical tradition and a living, evolving martial art. The family's fundamental principles—using leverage over strength, maintaining position before pursuing submissions, and constant technical refinement—remain central to all jiu-jitsu practice worldwide. Multiple Gracie lineages continue teaching, with prominent figures like the Gracie Humaitá and Gracie Jiu-Jitsu academies maintaining traditional methods. However, modern jiu-jitsu has expanded beyond Gracie teachings through innovations from non-Gracie competitors and coaches. Contemporary practitioners benefit from this synthesis, learning foundational Gracie concepts while incorporating advancements from diverse sources. The family's greatest legacy may be democratizing martial arts knowledge, proving that intelligent technique transcends physical limitations, and establishing a system that continues evolving while honoring its revolutionary origins and fundamental principles.</p>
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
