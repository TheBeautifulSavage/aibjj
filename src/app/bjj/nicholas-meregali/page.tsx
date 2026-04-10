import { Metadata } from "next";
import Link from "next/link";
export const revalidate = 86400; // Re-generate daily
export const metadata: Metadata = { title: "Nicholas Meregali: The New Brazilian Giant | AIBJJ", description: "Nicholas Meregali is one of the most dominant heavyweight practitioners of his generation, winning multiple world championships and ADCC titles with a comb" };
export default function Page() {
  const tags = ["ibjjf-worlds", "adcc", "gi-bjj", "no-gi"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <nav className="sticky top-0 z-40 border-b border-zinc-800 bg-[#0a0a0a]/95 backdrop-blur px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">{tags.map(tag => (<Link key={tag} href={`/bjj/tag/${tag}`} className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:text-red-400">#{tag}</Link>))}</div>
        <h1 className="text-4xl font-black sm:text-5xl">Nicholas Meregali: The New Brazilian Giant</h1>
        <p className="mt-4 text-xl text-zinc-400">Nicholas Meregali is one of the most dominant heavyweight practitioners of his generation, winning multiple world championships and ADCC titles with a combination of physical gifts and exceptional technical development.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">
          <section><h2 className="text-2xl font-bold text-white mb-3">Rise to Prominence</h2><p>Nicholas Meregali was born in 1997 in Blumenau, Brazil, and began training BJJ as a child. He rapidly developed into one of the most physically imposing and technically gifted heavyweight prospects ever seen. His combination of size, athleticism, and technical sophistication made him exceptional from an early age.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">World Championship Success</h2><p>Meregali won multiple IBJJF World Championship titles in the super-heavyweight division, defeating established champions with relative ease. His ability to generate submissions from dominant positions reflects excellent positional training combined with legitimate finishing ability across multiple submission types.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">ADCC Performance</h2><p>Meregali competed at ADCC with strong performances, demonstrating that his gi-based skills translated effectively to no-gi competition. His size advantage is even more pronounced in no-gi where gi grips are unavailable, and his wrestling-influenced top game is highly effective in submission wrestling contexts.</p></section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Technical Profile</h2>
            <p>Meregali is known for powerful guard passing and exceptional upper body submission hunting from top positions. His pressure and chest control make him extremely difficult to escape from when he establishes dominant position. Continued development of his guard game and leg lock system will determine his ceiling as an all-around submission grappler.</p>
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
