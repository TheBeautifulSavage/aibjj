import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Royler Gracie: ADCC Legend | AIBJJ", description: "Royler Gracie is one of the most technically gifted competitors the Gracie family produced. His four ADCC titles and multiple world championships cemented " };
export default function Page() {
  const tags = ["gracie-family", "adcc", "gi-bjj", "no-gi"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <nav className="sticky top-0 z-40 border-b border-zinc-800 bg-[#0a0a0a]/95 backdrop-blur px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">{tags.map(tag => (<Link key={tag} href={`/bjj/tag/${tag}`} className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:text-red-400">#{tag}</Link>))}</div>
        <h1 className="text-4xl font-black sm:text-5xl">Royler Gracie: ADCC Legend</h1>
        <p className="mt-4 text-xl text-zinc-400">Royler Gracie is one of the most technically gifted competitors the Gracie family produced. His four ADCC titles and multiple world championships cemented his place as one of the greatest submission grapplers of his generation.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">
          <section><h2 className="text-2xl font-bold text-white mb-3">Competitive Career</h2><p>Royler Gracie was born in 1965 and competed across multiple decades, winning four ADCC World Championship titles — a record that stood for many years. His technical sophistication and competitive longevity are exceptional, with notable performances well into his 40s in masters competition. Royler competed in the 66kg division and regularly faced opponents significantly heavier in the absolute.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">ADCC Championships</h2><p>Royler won ADCC in 1998, 1999, 2000, and 2001 — a period of total dominance in the lightweight submission wrestling division. His style combined the Gracie family&apos;s foundational guard work with exceptional no-gi modifications that made his game functional across both formats. His performances at early ADCC events helped establish the tournament as the gold standard of submission grappling.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">The Royler vs Eddie Bravo Match</h2><p>Royler&apos;s 2003 ADCC match against Eddie Bravo — where Bravo submitted him with a triangle choke — became one of the most famous matches in grappling history. Bravo used his rubber guard system and the result shocked the BJJ world. Royler and Bravo had a rematch years later, reflecting the match&apos;s lasting significance to both men.</p></section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Teaching Legacy</h2>
            <p>Royler has continued teaching and competing in masters divisions for decades, serving as a living connection between the traditional Gracie approach and modern competitive BJJ. His seminars and instruction reflect decades of refining the techniques he used to become an ADCC champion.</p>
          </section>
        </div>
        <div className="mt-16 rounded-2xl border border-red-900/30 bg-red-950/20 p-8 text-center">
          <h2 className="text-2xl font-black">Train Like the Pros</h2>
          <p className="mt-2 text-zinc-400">AI coaching, technique library, training journal — all in one place.</p>
          <Link href="/auth/signup" className="mt-5 inline-block rounded-xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700">Start Free</Link>
        </div>
        <div className="mt-10 flex flex-wrap gap-2">
          <Link href="/bjj" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">BJJ Encyclopedia</Link>
          <Link href="/brazilian-jiu-jitsu" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">BJJ Guide</Link>
          <Link href="/academies" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">Find Academy</Link>
        </div>
      </article>
    </div>
  );
}
