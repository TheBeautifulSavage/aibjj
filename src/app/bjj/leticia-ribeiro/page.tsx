import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Leticia Ribeiro: BJJ Pioneer & Competitive Champion | AIBJJ",
  description: "Leticia Ribeiro biography: Brazilian Jiu-Jitsu legend, multiple-time world champion, and pioneering female grappler who shaped women's BJJ.",
};

export default function Page() {
  const tags = ["Leticia Ribeiro", "Brazilian Jiu-Jitsu", "BJJ Champion", "Women's Grappling", "Jiu-Jitsu Legend"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Leticia Ribeiro: BJJ Pioneer & Competitive Champion</h1>
        <p className="mt-4 text-xl text-zinc-400">Leticia Ribeiro biography: Brazilian Jiu-Jitsu legend, multiple-time world champion, and pioneering female grappler who shaped women's BJJ.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Leticia Ribeiro emerged as one of Brazilian Jiu-Jitsu's most accomplished female athletes during an era when women's grappling was still developing globally. Growing up in Brazil, she was introduced to BJJ at a young age, immersing herself in the sport's technical foundations during the 1990s and early 2000s. Her early training emphasized fundamental positioning, leverage-based submissions, and the strategic approach that would define her career. Ribeiro's dedication to technical excellence and continuous improvement set her apart from her peers. She trained extensively under respected coaches who recognized her exceptional talent and competitive drive. Her progression through the belt ranks was marked by consistent excellence, as she rapidly established herself as a dominant force in women's BJJ. By her teenage years, Ribeiro was already competing at the highest levels of female grappling, facing the sport's most formidable competitors. Her early success laid the foundation for what would become an illustrious competitive career spanning decades.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Leticia Ribeiro's competition resume stands as one of the most impressive in women's Brazilian Jiu-Jitsu history. She won multiple IBJJF World Championships across different weight classes and divisions, establishing herself as a dominant force at absolute (open weight) and gi competitions. Her victories came against many of the sport's elite female competitors, cementing her status among BJJ's all-time greats. Ribeiro competed successfully during a transformative period for women's grappling, when international competition was intensifying and technical standards were rapidly evolving. Her podium finishes at the Pan-American Championships further demonstrated her consistency and high-level performance. Beyond traditional point-based grappling, she competed in submission-focused formats and adapted her game across different rule sets. Her ability to win championships while facing increasingly skilled opposition showcased not only her technical prowess but also her mental toughness and adaptability. Ribeiro's championship records placed her among the most decorated female BJJ athletes of her generation.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Leticia Ribeiro's approach to grappling was characterized by technical precision and efficient use of leverage rather than relying on physical strength. She mastered fundamental positions including side control, mount, and back control, using these dominant positions to control matches and set up submissions. Her submission arsenal included devastating chokes, arm locks, and leg lock variations that she applied with proper timing and positional setup. Ribeiro was known for her understanding of pressure-based control, using her body weight strategically to immobilize opponents while maintaining opportunities for advancement. Her guard passing was technically sound and methodical, reflecting deep knowledge of positional BJJ theory. She excelled at identifying opponent weaknesses and exploiting them efficiently without wasting energy. Her competition footage demonstrates intelligent pacing, where she would dominate exchanges while managing her physical output. Ribeiro's style emphasized positional dominance leading to submissions rather than flashy techniques, making her matches instructional examples of high-level BJJ fundamentals. This technical approach to grappling made her an influential figure in demonstrating effective women's jiu-jitsu at the highest competitive level.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on Women's BJJ</h2>
            <p>Leticia Ribeiro's impact on Brazilian Jiu-Jitsu extends far beyond her championship titles and competition victories. She was instrumental in elevating the profile and technical standard of women's grappling during a critical period in the sport's development. By consistently defeating world-class opponents and winning prestigious championships, Ribeiro proved that women's BJJ deserved serious investment and recognition. Her technical excellence provided a template for aspiring female grapplers worldwide, demonstrating that high-level women's jiu-jitsu could achieve the same sophistication and intensity as the men's division. She helped inspire a generation of female athletes to pursue BJJ at elite levels, knowing that championship opportunities and respected competition existed. Ribeiro's success contributed to increased media coverage and sponsorship opportunities for women's grappling, helping to professionalize the female side of the sport. Her legacy continues influencing coaching methodologies and technical development in women's BJJ academies globally. Today, she is remembered not only as a dominant champion but as a pioneer who helped establish women's Brazilian Jiu-Jitsu as a legitimate, thriving competitive sport worthy of admiration and serious pursuit.</p>
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
