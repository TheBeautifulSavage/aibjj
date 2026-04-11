import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "ADCC 1998 Abu Dhabi: Grappling's Premier Championship | AIBJJ",
  description: "Explore ADCC 1998 Abu Dhabi, the groundbreaking submission grappling tournament that launched a legendary championship series and defined modern submission",
};

export default function Page() {
  const tags = ["ADCC 1998", "submission grappling", "Abu Dhabi", "BJJ tournament", "grappling championship"];
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
        <h1 className="text-4xl font-black sm:text-5xl">ADCC 1998 Abu Dhabi: Grappling's Premier Championship</h1>
        <p className="mt-4 text-xl text-zinc-400">Explore ADCC 1998 Abu Dhabi, the groundbreaking submission grappling tournament that launched a legendary championship series and defined modern submission wrestling.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Overview</h2>
            <p>ADCC 1998 marked the inaugural Abu Dhabi Combat Club Submission Wrestling World Championship, held in Abu Dhabi, United Arab Emirates. The event was created to showcase the world's best submission grapplers across multiple weight divisions and an absolute (open weight) category. Sponsored by the royal family and organized by Sheikh Tahnoon Bin Zayed Al Nahyan, the tournament brought together elite competitors from Brazil, Japan, the United States, and Europe. The format featured both gi and no-gi grappling matches with a focus on submission techniques. ADCC 1998 became a watershed moment for combat sports, establishing the gold standard for international submission wrestling competition. The event's prestige and prize money attracted the sport's elite and created a platform that would influence grappling worldwide. With multiple weight classes and accessible rulesets, ADCC 1998 demonstrated that submission grappling could be a legitimate, globally-recognized competitive discipline separate from but complementary to Brazilian Jiu-Jitsu.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Results and Champions</h2>
            <p>The 1998 ADCC tournament crowned champions across several divisions. Fabio Gurgel claimed victory in the lightweight category, while Mario Sperry dominated the middleweight division. At heavyweight, the championship was fiercely contested with technical excellence on display. Kazushi Sakuraba, the legendary Japanese wrestler and mixed martial artist, made a significant impact at the tournament with his superior grappling credentials. The absolute division showcased the tournament's most prestigious crown, attracting the strongest competitors regardless of weight class. Brazilian competitors dominated many categories, reinforcing Brazil's position as the global center of submission grappling excellence. The tournament's success in crowning legitimate world champions helped establish ADCC's credibility as an international governing body for submission wrestling. Winners received substantial prize money, elevating the sport's professional status. The results demonstrated diverse grappling styles: catch wrestling, freestyle wrestling, submission wrestling, and Brazilian Jiu-Jitsu techniques all proved effective. This diversity of approaches highlighted grappling's universal appeal and technical depth across different martial arts traditions.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Notable Matches and Moments</h2>
            <p>ADCC 1998 featured several unforgettable matches that defined the tournament's legacy. The absolute division produced particularly exciting encounters, with competitors pushing the boundaries of submission grappling. Matches demonstrated the evolving technical sophistication of the sport, combining traditional wrestling fundamentals with innovative submission techniques. Kazushi Sakuraba's performances showcased how catch wrestling and Japanese wrestling traditions could compete effectively against Brazilian Jiu-Jitsu specialists. The tournament highlighted various submission victories, leg lock techniques, and positional dominance strategies. Several matches went the distance, decided by advantages and points, emphasizing the tournament's comprehensive ruleset. The lighter weight divisions produced dynamic performances, with competitors displaying explosive takedowns and submission chain sequences. The heavy weight and absolute categories provided displays of strength and technical prowess, with some competitors using superior athleticism while others relied on refined technique. These matches created talking points throughout the global grappling community, with highlights circulating among practitioners and establishing ADCC's reputation for featuring genuine world-class competition and thrilling combat moments.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Historical Significance</h2>
            <p>ADCC 1998 Abu Dhabi fundamentally transformed submission grappling's global landscape. The event established the tournament's legacy as the sport's most prestigious championship, often compared to the Olympics for grappling. By securing high-level sponsorship and prize money, ADCC 1998 proved that submission wrestling could sustain professional-level competition and attract international competitors. The tournament's format became the template for future ADCC events, influencing submission grappling competitions worldwide. It elevated grappling's status beyond Brazilian Jiu-Jitsu circles, demonstrating appeal across wrestling styles and martial arts disciplines. The event's televised broadcasts exposed millions to submission grappling, legitimizing it as serious athletic competition. ADCC 1998 created crossover opportunities, with wrestlers and martial artists from various backgrounds competing on equal footing. The tournament helped establish grappling terminology and rulesets that became internationally standardized. Success at ADCC became a defining credential for elite grapplers, influencing career trajectories and establishing the event's unparalleled prestige. The inaugural tournament's success secured funding for future editions, creating a lasting institution that continues shaping submission grappling's development and maintaining technical standards for the sport.</p>
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
