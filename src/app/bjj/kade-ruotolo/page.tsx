import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Kade Ruotolo: BJJ Champion and Grappling Pioneer | AIBJJ",
  description: "Discover Kade Ruotolo's BJJ journey, competition achievements, signature techniques, and his influence on modern grappling.",
};

export default function Page() {
  const tags = ["Kade Ruotolo", "BJJ", "Brazilian Jiu-Jitsu", "grappling", "submission wrestling"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Kade Ruotolo: BJJ Champion and Grappling Pioneer</h1>
        <p className="mt-4 text-xl text-zinc-400">Discover Kade Ruotolo's BJJ journey, competition achievements, signature techniques, and his influence on modern grappling.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Kade Ruotolo emerged from a grappling family, training alongside his twin brother Tye under the guidance of John Kavanagh and other elite coaches. Born into the sport through his family's wrestling and BJJ background, Kade developed his skills from an early age, combining traditional BJJ fundamentals with modern submission-only grappling techniques. His training philosophy emphasized leg lock systems and innovative lower body attacks, which became hallmarks of his competitive style. Growing up in a training environment focused on continuous technical evolution, Kade competed consistently throughout his youth, earning recognition as one of the most promising young grapplers in the sport. His rise through the ranks was marked by aggressive submission hunting and refined positional awareness that set him apart from his peers. The competitive partnership with his twin brother pushed both athletes to constantly refine their techniques and strategies.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Kade Ruotolo has established himself as a formidable competitor in submission-only grappling formats, earning accolades in multiple major tournaments and organizations. He has competed successfully in ADCC trials and other prestigious submission wrestling platforms, demonstrating his ability to perform at the highest levels of the sport. His competition record showcases consistent wins against top-ranked opponents through submission finishes and dominant positional control. Kade has participated in major superfights and tournament events where he has proven his versatility across different rulesets. His achievements extend beyond traditional BJJ competitions into the submission-only realm, where he has gained particular notoriety for his leg lock prowess and finishing ability. Known for his aggressive pace and willingness to engage elite-level competitors, Kade has built a reputation as one of the most exciting young grapplers to watch, consistently delivering intense matches against world-class opponents.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Kade Ruotolo's grappling style is characterized by aggressive leg lock systems, particularly his technical mastery of heel hooks, knee reaping, and leg entanglement sequences. He combines traditional leg lock attacks with superior positional control, consistently transitioning between submissions and dominant positions without allowing opponents to escape. His approach to lower body submissions emphasizes precision and timing, allowing him to finish matches quickly against even defensive grapplers. Kade's guard work is equally sophisticated, featuring intricate leglock setups from both defensive and attacking positions. He excels at reading opponent movement and capitalizing on minor positioning mistakes to establish submission opportunities. His submission-hunting mentality is balanced with solid positional fundamentals, making him dangerous in all phases of grappling. The technical refinement of his attacks, combined with his pace and intensity, creates a unique style that has influenced younger grapplers studying modern submission wrestling mechanics.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Kade Ruotolo represents the modern evolution of submission-focused grappling, where technical leg lock systems have become mainstream competitive tools rather than exotic techniques. His success has contributed to the widespread adoption of lower body submission strategies across all levels of Brazilian Jiu-Jitsu competition. As part of the next generation of elite grapplers, Kade has helped bridge traditional BJJ with submission wrestling-specific training methodologies, influencing how athletes develop technical curricula. His competitive performances have demonstrated the effectiveness of aggressive, submission-oriented strategies in high-level competition, inspiring coaches and athletes worldwide to emphasize leg lock training. The visibility of matches featuring Kade's technical prowess has accelerated the mainstream acceptance of submission wrestling formats within the BJJ community. His partnership with his brother and their collective impact on the sport has established the Ruotolo name as synonymous with technical excellence and innovation in modern grappling. Looking forward, Kade's continued competition and influence will likely shape the technical direction of Brazilian Jiu-Jitsu for years to come.</p>
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
