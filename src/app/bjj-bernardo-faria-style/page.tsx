import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Bernardo Faria BJJ Style: Deep Half and Over-Under Pass | AIBJJ", description: "Explore Bernardo Faria's BJJ style — deep half guard mastery, the over-under pass, and pressure-based grappling that earned him 5 World Championship titles." };
export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "Bernardo Faria BJJ Style: Deep Half and Over-Under Pass", "publisher": { "@type": "Organization", "name": "AIBJJ", "url": "https://aibjj.com" } }) }} />
      <nav className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-black">Bernardo Faria BJJ Style: Deep Half and Over-Under Pass</h1>
        <p className="mt-4 text-xl text-zinc-400">Bernardo Faria is a five-time World Champion known for one of the most specialized yet effective games in BJJ history — built around two techniques mastered to an almost mythical level of proficiency.</p>
        <div className="mt-10 space-y-8 text-zinc-300">
          <section><h2 className="text-2xl font-bold text-white mb-3">Deep Half Guard: The Foundation of Bernardo&apos;s Game</h2><p>Bernardo Faria&apos;s deep half guard is arguably the most refined version of that position ever seen in competition. He enters deep half from virtually any bottom position, threading under the opponent&apos;s near leg to create leverage for sweeps and back takes. What makes his deep half special is the level of detail — his head position, hip angle, grip selection, and weight management are all optimized to make the position nearly inescapable once established. He developed a comprehensive sweep series from deep half that works against standing, squatting, and sprawling opponents, giving him answers to every defense. Bernardo also filmed extensive instructional content on deep half, making it accessible to practitioners worldwide. His game proves that specialization works at the highest levels — by going deeper into one guard position than anyone else, he created an advantage that world-class opponents struggled to counter even when they knew exactly what was coming every match.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">The Over-Under Pass</h2><p>When Bernardo Faria is on top, he uses the over-under pass almost exclusively — and it is devastatingly effective. The pass involves controlling one leg over and one leg under, using chest and hip pressure to flatten the opponent and drive through their guard. Bernardo&apos;s version is distinguished by his exceptional pressure and his ability to time the pass to exploit any reduction in guard tension. He uses the over-under as a pressure tool, grinding opponents down mentally and physically before completing the pass. Combined with his deep half guard, the over-under pass creates a complete game: from bottom he seeks deep half, from top he seeks over-under, and both positions connect to his back take and submission game. This simplicity is deceptive — each technique is developed to a depth most practitioners never reach with any single position despite years of training across many positions.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">What You Can Learn from Bernardo Faria&apos;s Style</h2><p>Bernardo Faria&apos;s career is the ultimate argument for depth over breadth in BJJ. He did not win five world titles with a diverse, unpredictable game — he won with two techniques that he drilled more than anyone else on earth. The lesson for practitioners is to identify your A-game positions early and invest disproportionately in them. Rather than constantly learning new techniques, revisit your best positions and find the 10% refinements that turn good techniques into great ones. Bernardo also demonstrates the value of pressure and patience — his game is not flashy but it is relentlessly effective because he understands exactly how to use his body weight. His instructional series and online presence through BJJ Fanatics have made his game one of the most studied in modern BJJ, offering practitioners at every level access to world-class positional knowledge.</p></section>
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
