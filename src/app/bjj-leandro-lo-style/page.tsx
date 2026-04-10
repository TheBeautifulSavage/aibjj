import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Leandro Lo BJJ Style: Passing Genius and Guard Innovation | AIBJJ", description: "Explore Leandro Lo's legendary BJJ style — unstoppable guard passing, unique guard game, and the genius that made him an 8-time World BJJ Champion." };
export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "Leandro Lo BJJ Style: Passing Genius and Guard Innovation", "publisher": { "@type": "Organization", "name": "AIBJJ", "url": "https://aibjj.com" } }) }} />
      <nav className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-black">Leandro Lo BJJ Style: Passing Genius and Guard Innovation</h1>
        <p className="mt-4 text-xl text-zinc-400">Leandro Lo was an eight-time World Champion and widely regarded as one of the most technically gifted grapplers in BJJ history, known for a complete game with revolutionary guard passing.</p>
        <div className="mt-10 space-y-8 text-zinc-300">
          <section><h2 className="text-2xl font-bold text-white mb-3">Revolutionary Guard Passing Approach</h2><p>Leandro Lo's guard passing was unlike anything seen before in BJJ competition. He combined elements of standing passing, knee slice, and torreando with an extraordinary ability to read and react to guard movement in real time. His passing was distinguished by its flow — rather than committing to one direction and forcing it, Lo would use feints and misdirection to create openings that he then exploited instantly. He also used an unusual hip position and body angle during his passes that made it difficult for guard players to generate the hip movement needed for effective guard retention. His guard passing inspired many instructionals and thousands of practitioners studying his techniques. What made Lo special was that his passes did not require exceptional athleticism to understand — the mechanics were sound and applicable, which is why his passing game spread so widely through the BJJ community after practitioners began studying his competition footage.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Guard Game and Competitive Intelligence</h2><p>Despite his fame as a passer, Leandro Lo also played an excellent guard game incorporating closed guard, half guard, and open guard elements. His closed guard was active and threatening, using breaks and off-balancing to create submission opportunities. From half guard, he used classical under-hook mechanics with excellent timing. What truly set Lo apart was his competitive intelligence — he had an exceptional ability to read opponents, identify their game plan early, and adjust his approach accordingly. He could switch from aggressive passer to patient guard player within a match based on what the situation demanded. His mental game and adaptability made him dangerous in ways that pure specialists are not. Practitioners studying Lo should pay attention not just to his techniques but to his decision-making — when he chooses to pass versus guard, when he hunts submissions versus maintaining position reveals a sophisticated tactical mind operating at the highest competition level.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">What You Can Learn from Leandro Lo's Style</h2><p>Leandro Lo's BJJ demonstrates the power of a complete game — his ability to be dangerous from both top and bottom made him nearly impossible to gameplan against. Opponents could not simply choose to play top or bottom to neutralize him. For practitioners, this highlights the importance of developing both sides of your game even if one is your primary focus. Lo also demonstrates exceptional technical creativity — he did not copy existing passing systems but developed his own through intelligent experimentation and refinement. His willingness to use unconventional angles and mechanics shows that BJJ still has technical innovations waiting to be discovered by practitioners willing to think deeply about the mechanics of what they are doing. The tragic loss of Lo in 2022 robbed BJJ of one of its greatest minds at the height of his competitive prime, but his technical legacy lives on through extensive competition footage and instructional content available to all practitioners.</p></section>
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
