import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Paulo Miyao: BJJ Legend & Innovative Grappler | AIBJJ",
  description: "Explore Paulo Miyao's BJJ career, achievements, and revolutionary techniques that transformed competitive grappling and leg lock systems.",
};

export default function Page() {
  const tags = ["Paulo Miyao", "Brazilian Jiu-Jitsu", "leg lock specialist", "IBJJF champion", "grappling techniques"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Paulo Miyao: BJJ Legend & Innovative Grappler</h1>
        <p className="mt-4 text-xl text-zinc-400">Explore Paulo Miyao's BJJ career, achievements, and revolutionary techniques that transformed competitive grappling and leg lock systems.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Paulo Miyao emerged from the competitive Brazilian Jiu-Jitsu scene as one of the sport's most innovative and technical grapplers. Born in Brazil, Miyao was introduced to BJJ at a young age and quickly demonstrated exceptional aptitude for the martial art. He trained under renowned instructors who recognized his natural talent for footlock systems and lower body submissions. His early career saw him competing across multiple weight divisions and earning recognition for his systematic approach to leg attacks during an era when leg lock techniques were considered secondary in mainstream BJJ. Miyao's relentless pursuit of technical mastery and his willingness to develop unconventional submission systems set him apart from his contemporaries. By his late teens and early twenties, he had already begun making waves in the Brazilian Jiu-Jitsu community, catching the attention of top competitors and coaches with his innovative approaches to competition.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Paulo Miyao compiled an impressive competitive record across the major Brazilian Jiu-Jitsu organizations. He earned multiple medals at the prestigious IBJJF World Championship, establishing himself as a consistent threat across several weight classes. Miyao achieved notable victories against elite-level competitors and demonstrated his ability to perform under pressure at the highest levels of the sport. His success at absolute weight divisions showcased his technical proficiency and physical conditioning against larger opponents. Beyond IBJJF competitions, Miyao competed in submission grappling tournaments and specialized leg lock competitions, where he consistently proved his dominance. His medal-heavy resume includes placements at Pan-American Championships and other significant international tournaments. Miyao's competitive longevity and ability to remain competitive across multiple rule sets and weight divisions underscore his technical depth and adaptability. His performances influenced how modern competitors approach leg lock submissions and footlock defense strategies in contemporary BJJ.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Paulo Miyao is renowned for his revolutionary approach to leg lock systems and lower body submissions. His fighting style emphasizes technical precision, positional control, and systematic leg attack sequences that have become fundamental to modern BJJ. Miyao developed intricate footlock systems combining heel hooks, knee reap positions, and innovative entry methods that maximize control while minimizing risk. His signature techniques include advanced entry systems to the 50/50 guard position and devastating heel hook finishes that he executes with remarkable efficiency. Miyao's approach to leg locks involves methodical step-by-step progressions rather than explosive submissions, allowing him to control opponents while pursuing finishing options. His ability to transition seamlessly between attacks creates constant pressure and forces opponents into defensive positions. Miyao's technical innovations in the lower body have influenced how professional grapplers train and compete, making his systematic methodology a cornerstone of contemporary leg lock instruction across BJJ academies worldwide.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Paulo Miyao's impact on Brazilian Jiu-Jitsu extends far beyond his competition record. He fundamentally transformed how the global BJJ community approaches leg lock techniques and lower body submissions. His systematic teaching methodology and technical innovations have been adopted by thousands of grapplers, from recreational students to elite competitors. Miyao's influence is evident in modern competition tactics, where leg lock systems have become primary attack options rather than secondary techniques. His instructional content and seminars have educated generations of BJJ athletes on proper footlock mechanics, positioning, and submission sequences. Miyao helped establish leg lock specialization as a legitimate and highly effective competition strategy in Brazilian Jiu-Jitsu. Beyond technique innovation, his competitive success demonstrated that athletes could compete at the highest levels by prioritizing leg attacks. Today, Paulo Miyao is recognized as one of BJJ's most influential technical developers, and his contributions continue shaping how new generations learn and apply leg lock systems in training and competition.</p>
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
