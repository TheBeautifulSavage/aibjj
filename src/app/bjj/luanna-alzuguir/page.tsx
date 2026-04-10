import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Luanna Alzuguir: BJJ Champion & Grappling Pioneer | AIBJJ",
  description: "Explore Luanna Alzuguir's BJJ career, achievements, fighting style, and lasting influence on competitive grappling and women's jiu-jitsu.",
};

export default function Page() {
  const tags = ["Luanna Alzuguir", "BJJ Champion", "Brazilian Jiu-Jitsu", "Women's Grappling", "Jiu-Jitsu Techniques"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Luanna Alzuguir: BJJ Champion & Grappling Pioneer</h1>
        <p className="mt-4 text-xl text-zinc-400">Explore Luanna Alzuguir's BJJ career, achievements, fighting style, and lasting influence on competitive grappling and women's jiu-jitsu.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Luanna Alzuguir emerged as one of Brazil's most talented grapplers during the early 2000s, a transformative period for women's Brazilian Jiu-Jitsu. Growing up in Brazil, she was introduced to BJJ at a young age and quickly demonstrated exceptional natural ability and technical prowess. Her early training laid a foundation in fundamental techniques while developing the competitive mindset necessary to excel at the highest levels.

Alzuguir's rise through the ranks coincided with increasing global recognition of women's jiu-jitsu. She trained rigorously at top-level academies, absorbing knowledge from experienced coaches and competitors. Her dedication to continuous improvement and technical refinement became defining characteristics of her approach. This period established her reputation as a serious competitor willing to challenge the sport's best athletes, paving the way for a career marked by consistent excellence and notable victories against formidable opponents throughout her competitive journey.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Luanna Alzuguir compiled an impressive competition record that solidified her status among the elite female grapplers of her era. She claimed multiple titles at prestigious tournaments including the IBJJF World Championships, demonstrating her ability to perform under maximum pressure against the world's best competitors. Her consistency across different competition formats showcased technical versatility and mental toughness.

Beyond individual tournament victories, Alzuguir earned recognition for competing in multiple weight classes and divisions, displaying adaptability and technical depth. She achieved success in both gi and no-gi competitions, proving her techniques transcended format variations. Her medal count at international tournaments reflects years of disciplined training and strategic competition planning. These accomplishments established her legacy not merely as a champion, but as a complete grappler who could excel in any competitive environment while inspiring the next generation of female BJJ athletes to pursue excellence at the highest competitive levels.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Luanna Alzuguir's grappling approach combined technical precision with strategic intelligence. She developed a balanced game incorporating both positional control and submission proficiency, refusing to rely exclusively on single strategies. Her ability to adapt techniques based on opponent tendencies and match circumstances distinguished her from competitors with more one-dimensional approaches.

Her signature techniques reflected deep technical understanding rather than reliance on athleticism alone. Alzuguir excelled in leg lock systems, guard passing, and top control positions, executing techniques with exceptional timing and pressure application. Her leg lock mastery, in particular, established her as a pioneer in an area where many female competitors lacked equivalent technical development. She demonstrated how consistent practice in specific techniques, combined with positional dominance, created overwhelming advantages. Her methodical approach to submissions, emphasizing control before committing to finishing positions, exemplified technical maturity and risk management. This comprehensive technical arsenal made her a complete grappler respected across the international BJJ community for both skill execution and fighting intelligence.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on Women's BJJ</h2>
            <p>Luanna Alzuguir's career significantly contributed to elevating women's Brazilian Jiu-Jitsu on the global stage. During an era when female grapplers received considerably less attention than their male counterparts, she competed fearlessly and accumulated impressive credentials that demanded respect. Her achievements helped legitimize women's competition within the BJJ community and inspired younger female athletes to pursue serious competitive careers.

Beyond competition, Alzuguir influenced technical development in women's grappling by demonstrating sophisticated techniques traditionally associated with male-dominated positions. Her mastery of leg lock systems inspired increased technical focus among female competitors in these previously underdeveloped areas. She exemplified how dedicated training and technical depth could overcome physical disparities, proving that superior technique and strategic intelligence determined grappling success more than any other factor.

Alzuguir's legacy extends to institutional recognition of women's jiu-jitsu within the IBJJF and global BJJ community. As an athlete who competed at the absolute highest levels during transformative years, she contributed to shifting perceptions about female grappling capabilities. Her career trajectory and achievements remain referenced in discussions about women's BJJ development, representing a critical bridge between earlier eras and the present prominence of female competitive grappling worldwide.</p>
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
