import { Metadata } from "next";
import Link from "next/link";
export const revalidate = 86400; // Re-generate daily
export const metadata: Metadata = { title: "BJJ and the Olympics: The Path to Recognition | AIBJJ", description: "Brazilian jiu-jitsu has been pursuing Olympic recognition for years. Understanding the challenges and current status helps practitioners and fans follow th" };
export default function Page() {
  const tags = ["bjj-history", "competition", "ibjjf-worlds", "beginners"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <nav className="sticky top-0 z-40 border-b border-zinc-800 bg-[#0a0a0a]/95 backdrop-blur px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">{tags.map(tag => (<Link key={tag} href={`/bjj/tag/${tag}`} className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:text-red-400">#{tag}</Link>))}</div>
        <h1 className="text-4xl font-black sm:text-5xl">BJJ and the Olympics: The Path to Recognition</h1>
        <p className="mt-4 text-xl text-zinc-400">Brazilian jiu-jitsu has been pursuing Olympic recognition for years. Understanding the challenges and current status helps practitioners and fans follow this important institutional story.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">
          <section><h2 className="text-2xl font-bold text-white mb-3">Current Status</h2><p>As of 2026, BJJ is not an Olympic sport. The IBJJF and related organizations have worked toward Olympic recognition, but several obstacles remain. The International Olympic Committee requires sports to have demonstrated global participation, standardized rules, and effective anti-doping programs. BJJ meets some but not all of these requirements consistently.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">The Argument For Olympic BJJ</h2><p>BJJ is practiced in over 100 countries and growing. Olympic inclusion would dramatically increase global visibility, government funding for practitioners in many countries, and institutional legitimacy. Countries that currently have limited BJJ development would invest substantially if Olympic medals were available. The sport would professionalize further and likely grow to rival wrestling in global participation.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Challenges to Inclusion</h2><p>The IOC has been contracting the number of sports, not expanding it. Rule standardization is difficult when multiple major organizations use different rules. Anti-doping compliance varies significantly across the global BJJ competition circuit. Political relationships with established combat sports federations present obstacles. These challenges are not insurmountable but require sustained institutional effort.</p></section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Alternative Pathways</h2>
            <p>Some practitioners argue that the World Games — which BJJ has participated in — provides sufficient recognition without the political complexity of IOC membership. Others suggest that financial success in private competition (ADCC, WNO) provides a more direct path to sustainability than Olympic funding. The debate reflects genuine uncertainty about the best path forward for the sport institutionally.</p>
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
