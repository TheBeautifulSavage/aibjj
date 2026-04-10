import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "BJJ Ear Guards: Preventing Cauliflower Ear | AIBJJ", description: "Cauliflower ear is one of the most visible side effects of BJJ training. Ear guards can prevent it — here is everything you need to know." };
export default function Page() {
  const tags = ["beginners", "gi-bjj", "no-gi"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <nav className="sticky top-0 z-40 border-b border-zinc-800 bg-[#0a0a0a]/95 backdrop-blur px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">{tags.map(tag => (<Link key={tag} href={`/bjj/tag/${tag}`} className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:text-red-400">#{tag}</Link>))}</div>
        <h1 className="text-4xl font-black sm:text-5xl">BJJ Ear Guards: Preventing Cauliflower Ear</h1>
        <p className="mt-4 text-xl text-zinc-400">Cauliflower ear is one of the most visible side effects of BJJ training. Ear guards can prevent it — here is everything you need to know.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">
          <section><h2 className="text-2xl font-bold text-white mb-3">What Is Cauliflower Ear</h2><p>Cauliflower ear occurs when repeated trauma to the outer ear causes blood to pool between the cartilage and the skin — a hematoma. If not drained quickly, this blood hardens and permanently deforms the ear. Common in wrestling and BJJ due to constant friction and impact with training partners. Some practitioners view it as a badge of honor; others prefer to prevent it.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">How Ear Guards Work</h2><p>Ear guards cover and cushion the outer ear, reducing the friction and impact that causes hematomas. They are most effective when used consistently from the beginning of training — once cauliflower ear begins to develop, prevention becomes harder. Cliff Keen, Brute, and various BJJ-specific brands produce ear guards specifically designed for grappling with secure attachment and low-profile design.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">When to Seek Medical Treatment</h2><p>If you feel warmth, swelling, or a fluid accumulation in your ear after training, see a doctor within 24-48 hours. Draining the hematoma while it is still fluid prevents permanent deformation. Waiting even a few days allows the blood to begin hardening, making treatment more difficult. Quick intervention is the difference between a minor medical procedure and permanent ear deformity.</p></section>
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
