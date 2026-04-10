import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Tye Ruotolo: BJJ Prodigy and Submission Wrestling Champion | AIBJJ",
  description: "Discover Tye Ruotolo's rise as a BJJ prodigy. Learn about his competition record, signature techniques, and impact on modern grappling.",
};

export default function Page() {
  const tags = ["Tye Ruotolo", "Brazilian Jiu-Jitsu", "Submission Wrestling", "BJJ Champion", "Grappling"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Tye Ruotolo: BJJ Prodigy and Submission Wrestling Champion</h1>
        <p className="mt-4 text-xl text-zinc-400">Discover Tye Ruotolo's rise as a BJJ prodigy. Learn about his competition record, signature techniques, and impact on modern grappling.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Tye Ruotolo emerged as one of Brazilian Jiu-Jitsu's most promising young talents, training alongside his twin brother Jt at a formative age. Growing up in New Jersey, both brothers were introduced to grappling early and quickly demonstrated exceptional aptitude for the sport. Their training under the guidance of experienced instructors helped develop their technical foundation and competitive mindset. Tye's dedication to BJJ during his youth years set the stage for a remarkable ascent through the competitive ranks. Unlike many grapplers who specialize late, Tye committed to the sport wholeheartedly, treating it with professional-level intensity while still in his teenage years. This early commitment and consistent training established him as a standout prospect in the North American BJJ circuit. His partnership with his twin brother created a unique training dynamic, pushing both athletes to continuously improve and innovate their grappling approaches. Together, the Ruotolo brothers became synonymous with cutting-edge BJJ technique and an exciting, aggressive style that captivated audiences.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Tye Ruotolo has established himself as a formidable force in both gi and no-gi grappling competitions. His breakthrough came through high-profile victories at prestigious tournaments including IBJJF events and submission-only competitions where he demonstrated his lethal finishing ability. Competing primarily at lighter weight divisions, Tye has consistently faced and defeated experienced grapplers, earning respect for his technical prowess and competitive heart. His accomplishments extend across multiple competition formats, showcasing his versatility as an athlete. Notably, Tye's success in submission wrestling tournaments highlighted his no-gi expertise, particularly his leg lock game and top pressure dynamics. His matches often serve as technical demonstrations for aspiring competitors, featuring crisp execution and high-percentage techniques. Beyond tournament victories, Tye's performances on major platforms like FloGrappling and in professional submission wrestling leagues have elevated his profile within the grappling community. His ability to perform under pressure against elite-level opponents has made him a sought-after competitor for invitational events. The consistency of his results across different rule sets underscores his technical depth and competitive maturity.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Tye Ruotolo's grappling style combines technical precision with aggressive positioning, making him distinctly effective in both offensive and defensive situations. His leg lock game stands out as particularly refined, employing sophisticated footlock and heel hook mechanics that reflect modern leg lock evolution in BJJ. Tye utilizes exceptional hip mobility and positional control to establish dominant positions, often transitioning seamlessly between attacks. His top game pressure strategy forces opponents into reactive positions where his submission chains become increasingly difficult to defend. Guard passing demonstrates technical maturity, employing toreando passes and pressure-based approaches that frustrate opponents' offensive capabilities. Tye's guard game showcases excellent escapes and positional awareness, preventing dominant opponents from establishing sustained pressure. His back control sequences are particularly dangerous, combining crossface pressure with choke and arm attack threats. One defining characteristic is his ability to remain patient in positions while systematically increasing pressure until submissions become inevitable. His instructional approach and match analysis reveal deep understanding of leverage mechanics and positional hierarchy. These technical foundations explain why Tye consistently defeats opponents across weight and skill categories, earning recognition as one of modern BJJ's most technically sound practitioners.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on Modern Grappling</h2>
            <p>Tye Ruotolo represents the new generation of Brazilian Jiu-Jitsu athletes who have elevated technical standards and competitive expectations within the sport. His achievements at a young age have inspired countless grapplers to pursue excellence with greater intensity and dedication. Through social media presence and instructional content, Tye contributes significantly to BJJ's educational landscape, sharing technical insights with global audiences. His performances influence how modern techniques are understood and applied, particularly regarding leg lock systems and pressure dynamics that shape contemporary grappling strategy. The Ruotolo brothers' combined success has created a distinctive lineage and training methodology that other athletes seek to emulate. Tye's competitive trajectory demonstrates the viability of specialized training approaches and early commitment for aspiring professional grapplers. His influence extends beyond competition, impacting coaching methodologies and training camp development across numerous academies. As BJJ continues evolving, Tye Ruotolo stands as a representative of the sport's highest technical and competitive standards, actively shaping how future generations approach grappling education and competition. His legacy will likely encompass not only tournament accomplishments but also significant contributions to technical innovation and athlete development within the Brazilian Jiu-Jitsu community.</p>
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
