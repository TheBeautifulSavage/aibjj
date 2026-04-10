import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Best BJJ Rash Guard Guide | AIBJJ", description: "The rash guard is essential for no-gi training. Learn what to look for, which brands dominate, and how to care for your rash guard." };
export default function Page() {
  const tags = ["no-gi", "beginners"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <nav className="sticky top-0 z-40 border-b border-zinc-800 bg-[#0a0a0a]/95 backdrop-blur px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">{tags.map(tag => (<Link key={tag} href={`/bjj/tag/${tag}`} className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:text-red-400">#{tag}</Link>))}</div>
        <h1 className="text-4xl font-black sm:text-5xl">Best BJJ Rash Guard Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">The rash guard is essential for no-gi training. Learn what to look for, which brands dominate, and how to care for your rash guard.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">
          <section><h2 className="text-2xl font-bold text-white mb-3">Why Rash Guards Matter in BJJ</h2><p>Rash guards protect your skin from mat burns, reduce direct skin contact with training partners, and regulate temperature. In no-gi training, a quality rash guard stays in place during scrambles without bunching. The compression fit also provides mild joint support. Long-sleeve rash guards provide more coverage; short-sleeve versions are cooler for hot gyms.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Materials and Fit</h2><p>Quality rash guards use compression-grade spandex blends — typically 85% polyester, 15% spandex or similar. Flat-lock stitching prevents chafing. The fabric should feel tight when worn but should not restrict breathing or movement. Board shorts and spats (compression tights) are the standard bottom options for no-gi training.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Top Rash Guard Brands</h2><p>Hayabusa, Tatami, Scramble, Kingz, and Hyperfly produce quality rash guards at various price points. Custom-print shops allow teams to create branded rash guards. For competition, verify that your organization allows the specific colors and designs you want to wear.</p></section>
        </div>
        <div className="mt-16 rounded-2xl border border-red-900/30 bg-red-950/20 p-8 text-center">
          <h2 className="text-2xl font-black">Train Smarter with AI</h2>
          <p className="mt-2 text-zinc-400">AI coaching, training journal, technique library — all free to start.</p>
          <Link href="/auth/signup" className="mt-5 inline-block rounded-xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700">Start Free</Link>
        </div>
        <div className="mt-10 flex flex-wrap gap-2">
          <Link href="/bjj" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">BJJ Encyclopedia</Link>
          <Link href="/academies" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">Find Academy</Link>
          <Link href="/coach" className="rounded-full bg-red-600/10 border border-red-700/30 px-3 py-1.5 text-sm text-red-400">AI Coach →</Link>
        </div>
      </article>
    </div>
  );
}
