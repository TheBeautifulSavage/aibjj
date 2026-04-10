import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Mendes Brothers BJJ Style: Berimbolo and X-Guard System | AIBJJ", description: "Learn the Mendes Brothers' BJJ style — berimbolo, de la Riva guard, X-guard sweeps, and the AOJ system that revolutionized modern competitive BJJ guard play." };
export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "Mendes Brothers BJJ Style: Berimbolo and X-Guard System", "publisher": { "@type": "Organization", "name": "AIBJJ", "url": "https://aibjj.com" } }) }} />
      <nav className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-black">Mendes Brothers BJJ Style: Berimbolo and X-Guard System</h1>
        <p className="mt-4 text-xl text-zinc-400">Rafael and Gui Mendes — the Mendes Brothers — revolutionized guard play in modern BJJ, popularizing the berimbolo and developing the AOJ system that has produced world champions globally.</p>
        <div className="mt-10 space-y-8 text-zinc-300">
          <section><h2 className="text-2xl font-bold text-white mb-3">The Berimbolo Revolution</h2><p>The Mendes Brothers popularized the berimbolo — an inverted guard movement that allows the practitioner to take the back from de la Riva guard by inverting under the opponent's leg. While not invented by them, they refined and systematized the berimbolo into a complete competitive weapon that transformed how lightweight gi jiu-jitsu was played. Their berimbolo was combined with excellent X-guard transitions and back take systems that made their guard nearly impossible to pass without walking into a back take. The brilliance of their system was its logical structure: de la Riva guard created berimbolo entries, berimbolo created back takes or led to 50/50, and the system connected into a web of positions that always threatened. Rafael Mendes in particular developed one of the most complete modern guard games ever seen, combining technical innovation with exceptional athleticism and precision drilling that made his techniques function at the absolute highest level of competition.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">AOJ System and Technical Precision</h2><p>The Art of Jiu-Jitsu (AOJ) Academy system developed by the Mendes Brothers emphasizes technical precision, drilling quality, and systematic game development. Their methodology influenced how many modern academies approach guard development. The AOJ system builds guard games around connected positions rather than isolated techniques, creating athletes who can flow between positions based on opponent reactions. Their top game is equally developed — both brothers were excellent guard passers who used pressure and movement effectively. Their approach to drilling and technical refinement set a new standard for how seriously competitive practitioners approach game development. The Mendes Brothers also demonstrated that creative, innovative guard play could be sustainable at the highest competition levels — their berimbolo-based games worked consistently against world-class opposition who had studied and prepared specifically to stop their techniques.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">What You Can Learn from the Mendes Brothers' Style</h2><p>The Mendes Brothers teach the power of systematic innovation — taking existing positions and developing them further than anyone else, building connections between positions and creating complete systems rather than just adding techniques. Their approach to drilling is instructive: they are known for exceptional drilling quality, doing fewer techniques with greater precision rather than drilling many things superficially. For practitioners, their example suggests that modern guard games require a willingness to study inversion mechanics and learn the geometry of guard positions in three dimensions. Their success with the berimbolo also shows that athletic investment in movement quality pays dividends — their flexibility and inversions require physical preparation as well as technical knowledge. AOJ's continued production of world champions demonstrates that their system is teachable and not dependent on the exceptional individual talent of the founders.</p></section>
        </div>
        <div className="mt-12 rounded-2xl border border-red-900/30 bg-red-950/20 p-8 text-center">
          <h2 className="text-2xl font-black">Train Smarter with AI</h2>
          <p className="mt-2 text-zinc-400">AI coaching, technique tracker, training journal.</p>
          <Link href="/auth/signup" className="mt-5 inline-block rounded-xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700">Start Free</Link>
        </div>
      </article>
    </div>
  );
}
