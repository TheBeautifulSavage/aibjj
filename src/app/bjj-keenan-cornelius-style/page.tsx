import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Keenan Cornelius BJJ Style: Lapel Guards and Worm Guard | AIBJJ", description: "Explore Keenan Cornelius's BJJ style — worm guard, lapel systems, and the technical creativity that made him one of the most innovative guard players in BJJ history." };
export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "Keenan Cornelius BJJ Style: Lapel Guards and Worm Guard", "publisher": { "@type": "Organization", "name": "AIBJJ", "url": "https://aibjj.com" } }) }} />
      <nav className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-black">Keenan Cornelius BJJ Style: Lapel Guards and Worm Guard</h1>
        <p className="mt-4 text-xl text-zinc-400">Keenan Cornelius is the most innovative guard developer in modern BJJ, creating the worm guard and lapel guard systems that transformed how the gi is used as a control tool in guard play.</p>
        <div className="mt-10 space-y-8 text-zinc-300">
          <section><h2 className="text-2xl font-bold text-white mb-3">Worm Guard: Redefining Lapel Control</h2><p>Keenan Cornelius invented the worm guard — a guard position using the opponent&apos;s lapel threaded through de la Riva guard to create exceptional control and sweeping power. The worm guard works by using the opponent&apos;s own gi against them, creating a connection point that is extremely difficult to break while generating powerful leverage for sweeps. When he first debuted this position in competition, opponents had no counters and it caused immediate widespread discussion in the BJJ community about rules changes. The worm guard connected to his broader lapel guard system that includes the squid guard and other lapel variations, each using the gi fabric to create control handles that standard grips cannot match. His lapel systems demonstrate that the gi offers control possibilities far beyond traditional collar and sleeve grips — the lapel can be used to anchor the opponent&apos;s posture, limit hip mobility, and generate sweeping leverage from positions that would be weak without the lapel engagement.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Technical Innovation and the Keenan Online System</h2><p>Keenan Cornelius has been exceptionally open about sharing his innovations through Keenan Online, his instructional subscription platform. This openness has allowed the broader BJJ community to study and adopt his systems in detail. His instructional approach is highly technical and systematic — he explains the mechanics and geometry of his positions rather than just demonstrating them, which accelerates practitioner understanding. His technical vocabulary and analytical framework for discussing guard positions influenced how the BJJ community talks about and analyzes guard play. Despite competition rules changes that have limited some lapel techniques, his innovations pushed the boundaries of what was understood as possible in gi guard play. The development of effective counters to his systems also advanced the overall technical level of gi jiu-jitsu, creating a dialogue between offensive innovation and defensive development that elevated the entire competitive landscape.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">What You Can Learn from Keenan Cornelius&apos;s Style</h2><p>Keenan Cornelius represents the frontier of BJJ innovation and shows that the art continues to evolve rapidly. For practitioners, his career demonstrates that creative technical development is a legitimate path to competitive advantage — rather than copying existing systems, Keenan created new ones that opponents had to learn to counter. His approach to understanding the gi as a control resource is broadly applicable: wherever there is fabric, there is potential control, and practitioners who think creatively about grip possibilities will find advantages others miss. His openness with his systems through instructional content also shows a generous approach to knowledge sharing that benefits the entire community. The key lesson is to develop a genuine curiosity about the mechanics of your positions — ask not just what works but why it works, and whether there are undiscovered ways to use the same mechanical principles in new configurations within your existing game.</p></section>
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
