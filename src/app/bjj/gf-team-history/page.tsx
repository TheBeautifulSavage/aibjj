import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "GF Team History: Brazilian Jiu-Jitsu Legacy | AIBJJ",
  description: "Explore GF Team's influential history in Brazilian Jiu-Jitsu, from its founding through becoming a global powerhouse in BJJ competition and instruction.",
};

export default function Page() {
  const tags = ["gf-team", "team", "history"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <nav className="sticky top-0 z-40 border-b border-zinc-800 bg-[#0a0a0a]/95 backdrop-blur px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map(tag => (
            <Link key={tag} href={`/bjj/tag/${tag}`}
              className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:border-red-600/50 hover:text-red-400 transition-colors">
              #{tag}
            </Link>
          ))}
        </div>
        <h1 className="text-4xl font-black sm:text-5xl">GF Team History: Brazilian Jiu-Jitsu Legacy</h1>
        <p className="mt-4 text-xl text-zinc-400">Explore GF Team's influential history in Brazilian Jiu-Jitsu, from its founding through becoming a global powerhouse in BJJ competition and instruction.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Origins and Founding</h2>
            <p>GF Team, also known as Gracie Filho Team, emerged as a prominent Brazilian Jiu-Jitsu organization with roots deeply embedded in traditional BJJ culture. The team was established to promote high-level grappling instruction and competition throughout Brazil and internationally. Founded on principles of technical excellence and competitive spirit, GF Team quickly gained recognition for producing skilled competitors and dedicated instructors. The organization's early years focused on developing rigorous training methodologies that combined classical BJJ fundamentals with innovative techniques. This commitment to quality instruction attracted talented athletes seeking to elevate their grappling abilities. The team's foundation was built on respect for BJJ traditions while embracing progressive training approaches that prepared students for modern competitive challenges.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competitive Success and Championships</h2>
            <p>GF Team has established itself as a formidable force in Brazilian Jiu-Jitsu competition, with numerous athletes claiming titles at prestigious tournaments worldwide. The team has consistently produced champions across various weight classes and belt levels, from white belt through black belt divisions. Their competitors have achieved success at major events including the IBJJF World Championships, Pan American Championships, and numerous regional competitions. The organization's training methodology emphasizes developing well-rounded grapplers capable of executing both offensive and defensive techniques effectively. GF Team's competitive record reflects years of dedicated coaching and athlete development. The team's success has been built on creating an environment where competitors continuously push their limits while refining their technical abilities. This competitive focus has become integral to the team's identity and reputation.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Global Expansion and Influence</h2>
            <p>Over the years, GF Team has expanded its presence beyond Brazil, establishing affiliates and partnerships in multiple countries across Europe, North America, and other regions. This international growth has allowed the organization to share its training philosophies with diverse BJJ communities worldwide. The expansion demonstrates GF Team's commitment to spreading quality Brazilian Jiu-Jitsu instruction and fostering global grappling development. Affiliated academies maintain the team's standards while adapting to local BJJ cultures and student needs. International expansion has also facilitated knowledge exchange, with GF Team athletes competing and training alongside practitioners from various BJJ lineages. This global presence has strengthened the organization's reputation and influence within the broader grappling community. Today, GF Team represents one of the well-recognized Brazilian Jiu-Jitsu organizations with meaningful impact across continents.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Modern Era and Legacy</h2>
            <p>In contemporary Brazilian Jiu-Jitsu, GF Team continues contributing meaningfully to the sport's evolution and development. The organization maintains its commitment to producing quality competitors and certified instructors while adapting to modern grappling demands. GF Team's legacy encompasses decades of technical contributions, championship performances, and athlete development programs. Current leadership focuses on preserving core BJJ principles while incorporating contemporary training science and competitive innovations. The team's influence extends beyond competition, impacting how Brazilian Jiu-Jitsu is taught and practiced globally. GF Team's enduring presence demonstrates the organization's ability to remain relevant across different eras of BJJ evolution. Their commitment to excellence, continuous improvement, and community building ensures GF Team's continued significance in Brazilian Jiu-Jitsu for future generations of practitioners.</p>
          </section>
        </div>
        <div className="mt-16 rounded-2xl border border-red-900/30 bg-red-950/20 p-8 text-center">
          <h2 className="text-2xl font-black">Train Smarter with AI Coaching</h2>
          <p className="mt-2 text-zinc-400">Track your training, get personalized coaching, and build your game plan.</p>
          <Link href="/auth/signup" className="mt-5 inline-block rounded-xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700">Start Free</Link>
        </div>
        <div className="mt-10">
          <h3 className="text-lg font-bold text-white mb-4">Explore More</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/bjj" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">BJJ Encyclopedia</Link>
            <Link href="/academies" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">Find an Academy</Link>
            <Link href="/bjj-techniques" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">Technique Library</Link>
            <Link href="/coach" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">AI Coach</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
