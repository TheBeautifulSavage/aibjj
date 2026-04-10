import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "BJJ Brown Belt Training in Dallas | AIBJJ", description: "Find BJJ academies and brown belt training in Dallas. Connect with instructors, training partners, and competitions for your level." };
export default function Page() {
  const tags = ["competition", "beginners", "competition"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <nav className="sticky top-0 z-40 border-b border-zinc-800 bg-[#0a0a0a]/95 backdrop-blur px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">{tags.map(tag => (<Link key={tag} href={`/bjj/tag/${tag}`} className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:text-red-400">#{tag}</Link>))}</div>
        <h1 className="text-4xl font-black sm:text-5xl">BJJ Brown Belt Training in Dallas</h1>
        <p className="mt-4 text-xl text-zinc-400">Find BJJ academies and brown belt training in Dallas. Connect with instructors, training partners, and competitions for your level.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">
          <section><h2 className="text-2xl font-bold text-white mb-3">Brown Belt BJJ in Dallas</h2><p>The brown belt level represents a specific stage in Brazilian jiu-jitsu development, and Dallas offers excellent resources for practitioners at this stage. Whether you are newly promoted to brown belt or approaching your next promotion, Dallas academies provide structured training, regular sparring, and coaching from experienced instructors. The Dallas BJJ community includes practitioners at all levels, creating a training environment where brown belt students can work with partners of appropriate skill levels.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">What to Focus on as a Brown Belt in Dallas</h2><p>Training priorities vary significantly by belt level. Brown Belt practitioners in Dallas should focus on the technical areas appropriate for their stage of development. Local competition opportunities allow brown belt practitioners to test their skills against others at the same level. IBJJF events in the region provide a pathway to national and international competition for those with competitive goals. Finding the right academy in Dallas — one with a good concentration of training partners at your level — is important for efficient development.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Using AIBJJ to Accelerate Your Development</h2><p>AIBJJ helps brown belt practitioners in Dallas accelerate their development between sessions. Log your training, get AI-powered coaching on specific techniques, track your progress toward your next promotion, and build a personalized game plan. The combination of quality mat time at a Dallas academy with AI coaching between sessions creates compound learning that significantly accelerates BJJ development.</p></section>
        </div>
        <div className="mt-16 rounded-2xl border border-red-900/30 bg-red-950/20 p-8 text-center">
          <h2 className="text-2xl font-black">Train Like the Pros</h2>
          <p className="mt-2 text-zinc-400">AI coaching, technique library, training journal.</p>
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
