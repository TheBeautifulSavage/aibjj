import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Carlson Gracie Jr: BJJ Legend and Gracie Dynasty | AIBJJ",
  description: "Learn about Carlson Gracie Jr, legendary BJJ master and innovator. Explore his competition record, fighting style, and influence on modern grappling.",
};

export default function Page() {
  const tags = ["Carlson Gracie Jr", "Brazilian Jiu-Jitsu", "BJJ Legend", "Gracie Family", "Grappling"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Carlson Gracie Jr: BJJ Legend and Gracie Dynasty</h1>
        <p className="mt-4 text-xl text-zinc-400">Learn about Carlson Gracie Jr, legendary BJJ master and innovator. Explore his competition record, fighting style, and influence on modern grappling.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Carlson Gracie Jr was born into Brazilian Jiu-Jitsu royalty as the son of Carlson Gracie Sr, one of the most influential figures in BJJ history. Growing up in Rio de Janeiro, Brazil, he was immersed in the martial art from childhood, training under his father's legendary instruction and benefiting from the Gracie family's generations of grappling knowledge. His early years were shaped by the competitive culture of Rio's BJJ scene during the 1970s and 1980s, a period when Brazilian Jiu-Jitsu was rapidly evolving and becoming more systematized.

Under his father's tutelage, Carlson Jr developed into an exceptional competitor, combining technical precision with the innovative approach his father was known for. The Carlson Gracie lineage was distinct from the Helio Gracie branch, emphasizing stronger, more aggressive techniques and leg lock specialization. Growing up in this environment, Carlson Jr absorbed not only techniques but also a philosophy of constant innovation and practical application in grappling. His training regimen was intense and competitive, preparing him for the highest levels of BJJ competition.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Carlson Gracie Jr established himself as a formidable competitor throughout the 1980s and 1990s, competing in some of Brazilian Jiu-Jitsu's most prestigious tournaments. He competed across multiple weight divisions and earned multiple high-level victories against elite opponents from various BJJ lineages. His success demonstrated the effectiveness of the Carlson Gracie system and helped validate his father's innovative approach to the art.

Throughout his competition career, Carlson Jr proved himself as both a skilled tactician and a dynamic grappler capable of adapting to different opponents and fighting styles. His victories came against world-class competitors, earning him respect within the international BJJ community. While not as extensively documented as some of his contemporaries, his competition resume reflects the high level of skill developed within the Carlson Gracie academy. His achievements contributed significantly to the Carlson Gracie lineage's reputation as a competitive powerhouse and innovator in Brazilian Jiu-Jitsu.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Carlson Gracie Jr's fighting style was characterized by the aggressive, pressure-based approach that defined the Carlson Gracie system. He was known for executing leg lock techniques with exceptional proficiency, a specialty that set the Carlson Gracie lineage apart from other major BJJ families. His approach emphasized footlock and heel hook variations, techniques that were revolutionary during his era and remain technically advanced today.

Beyond leg locks, Carlson Jr demonstrated exceptional positional control and the ability to maintain dominant positions while minimizing opponent resistance. His technical arsenal included precise footlock mechanics, positional transitions, and tactical awareness that reflected his years of training in Rio's highly competitive environment. The Carlson Gracie system under his father emphasized strong leg lock fundamentals and practical self-defense applications, principles that Carlson Jr embodied as a competitor and instructor. His technical innovations contributed to the evolution of leg lock techniques in modern grappling, influencing how these techniques are taught and applied internationally.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Carlson Gracie Jr's legacy is intrinsically connected to his father's revolutionary impact on Brazilian Jiu-Jitsu and the continuation of the Carlson Gracie lineage's technical innovations. As a member of one of BJJ's most influential families, he helped preserve and transmit the Carlson Gracie system to subsequent generations of grapplers. The academy and instruction under the Carlson Gracie banner have produced numerous accomplished competitors and instructors who carry forward the family's technical philosophy.

The Carlson Gracie lineage's emphasis on leg lock proficiency and aggressive positional control has had lasting influence on how Brazilian Jiu-Jitsu is taught and practiced globally. Carlson Jr's role in maintaining these standards and training new generations of competitors has contributed to the system's continued relevance in modern grappling. His presence within the Gracie family's competitive landscape helped demonstrate that innovation and technical excellence could thrive alongside the family's martial arts legacy. Today, the Carlson Gracie system remains respected internationally, with schools and practitioners worldwide following the methodologies and principles established by Carlson Sr and carried forward by his son.</p>
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
