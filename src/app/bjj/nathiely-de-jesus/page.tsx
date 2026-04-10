import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Nathiely de Jesus: Brazilian Jiu-Jitsu Champion | AIBJJ",
  description: "Discover Nathiely de Jesus's BJJ career, competition victories, signature techniques, and impact on women's Brazilian jiu-jitsu.",
};

export default function Page() {
  const tags = ["Nathiely de Jesus", "Brazilian Jiu-Jitsu", "BJJ Champion", "Women's Grappling", "IBJJF"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Nathiely de Jesus: Brazilian Jiu-Jitsu Champion</h1>
        <p className="mt-4 text-xl text-zinc-400">Discover Nathiely de Jesus's BJJ career, competition victories, signature techniques, and impact on women's Brazilian jiu-jitsu.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Nathiely de Jesus emerged as a prominent figure in Brazilian jiu-jitsu, bringing dedication and technical excellence to women's grappling. Born and raised in Brazil, she was exposed to BJJ from an early age in a country where martial arts culture runs deep. Her introduction to the sport came through family connections and local academies, where she demonstrated exceptional aptitude for learning and adapting techniques.

De Jesus committed herself to rigorous training regimens, working under experienced coaches who recognized her potential. Her early years in BJJ were marked by consistent progression through the belt ranks, showcasing the fundamentals that would later define her competitive style. The foundation built during her formative years in Brazilian academies equipped her with the technical knowledge and mental toughness necessary to compete at elite levels. Her development as a grappler reflected the traditional values of BJJ training emphasizing discipline, respect, and continuous self-improvement.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Nathiely de Jesus has compiled an impressive competition record competing in multiple weight divisions throughout her career. She has participated in major IBJJF tournaments, demonstrating consistency and technical proficiency against top-ranked opponents. Her achievements include wins over notable competitors in her division, establishing herself as a formidable force in women's BJJ competition.

Throughout her competitive tenure, de Jesus has earned recognition for her performances at prestigious events, contributing to her reputation as a skilled grappler. Her tournament results reflect her ability to execute game plans effectively under pressure, navigating the complexities of high-level jiu-jitsu competition. De Jesus has represented her academy and Brazil with pride, competing against international talent and earning respect from peers and coaches alike. Her consistent presence in competition brackets and willingness to face challenging opponents has solidified her standing within the women's BJJ community.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Nathiely de Jesus is known for a technical, fundamentally sound approach to Brazilian jiu-jitsu that emphasizes positional control and methodical advancement. Her style reflects classical BJJ principles with efficient movements and strategic positioning. She demonstrates strong footlock and leglock defense, crucial skills in modern grappling where lower body attacks have become increasingly prevalent.

De Jesus employs solid guard passing techniques and demonstrates comfort in top position, utilizing pressure-based strategies to control opponents. Her ability to transition smoothly between positions shows technical maturity and training experience. She effectively uses grip fighting and distance management to dictate match tempo. De Jesus's approach to BJJ highlights the importance of fundamentals over flashy techniques, making her a representative of traditional Brazilian jiu-jitsu values. Her training emphasizes understanding leverage and body mechanics rather than relying on athleticism alone, making her style sustainable and transferable across weight divisions.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Nathiely de Jesus contributes to the growing prominence of women's Brazilian jiu-jitsu on the global stage. Her career demonstrates the high technical level women bring to the sport, challenging outdated perceptions about female grapplers. Through competition and training, she has influenced younger generations of female athletes pursuing BJJ excellence.

De Jesus represents the evolution of women's grappling, where increased participation and investment have elevated overall competition quality. Her dedication to the sport serves as inspiration for athletes developing their own BJJ journeys. By competing consistently and challenging top opponents, she has helped establish higher standards for women's competition. De Jesus embodies the values of Brazilian jiu-jitsu, including respect, perseverance, and continuous learning. Her presence in the sport contributes to normalizing women's participation at elite levels, paving pathways for future generations. Through her training relationships, coaching influences, and competitive presence, Nathiely de Jesus has left an impact on the broader BJJ community and women's grappling development.</p>
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
