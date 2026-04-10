import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Ralph Gracie: Brazilian Jiu-Jitsu Pioneer & Legend | AIBJJ",
  description: "Learn about Ralph Gracie, BJJ pioneer and legendary grappler. Explore his competition record, fighting style, and lasting impact on martial arts.",
};

export default function Page() {
  const tags = ["Ralph Gracie", "Brazilian Jiu-Jitsu", "BJJ Pioneer", "Gracie Family", "Grappling Legend"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Ralph Gracie: Brazilian Jiu-Jitsu Pioneer & Legend</h1>
        <p className="mt-4 text-xl text-zinc-400">Learn about Ralph Gracie, BJJ pioneer and legendary grappler. Explore his competition record, fighting style, and lasting impact on martial arts.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Ralph Gracie was born into the legendary Gracie family, one of Brazil's most influential martial arts dynasties. Growing up in Rio de Janeiro during the early development of Brazilian Jiu-Jitsu, Ralph was immersed in the art from childhood, training under his family members who were pioneering the sport. As a member of the prestigious Gracie clan, he inherited both the technical knowledge and competitive spirit that defined the family's approach to grappling.

Ralph's early training coincided with a transformative period in BJJ history, when the Gracie family was establishing their dominance in Brazilian martial arts. He developed his skills during an era when jiu-jitsu matches were often brutal affairs, fought in challenge matches and public competitions. Unlike some family members who gained fame through dramatic victories, Ralph earned respect through consistent technical skill and dedication to the art's development. His contributions helped solidify the Gracie family's reputation as both guardians and innovators of Brazilian Jiu-Jitsu.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Ralph Gracie competed extensively throughout his grappling career, establishing himself as a formidable competitor during Brazilian Jiu-Jitsu's formative decades. While specific match records are sometimes difficult to verify given the era in which he competed, Ralph participated in numerous significant matches that helped establish BJJ as a legitimate combat sport. He faced many notable opponents and contributed to the family's legacy of competitive excellence.

His achievements extended beyond individual victories to his role in legitimizing BJJ competition standards. Ralph was instrumental during a period when Brazilian Jiu-Jitsu was transitioning from street challenges and informal matches to organized sporting events. He competed in various weight classes and against diverse grappling styles, demonstrating the effectiveness of Gracie Jiu-Jitsu techniques. His competitive experience informed his teaching methodology and helped establish training principles that continue to benefit modern grapplers. Ralph's willingness to test his skills against various opponents strengthened the credibility of the Gracie lineage.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Ralph Gracie embodied the technical foundation of Gracie Jiu-Jitsu, emphasizing efficient movements, leverage, and positional control. His approach reflected the family's philosophy of using proper technique to overcome larger opponents. Ralph was known for his solid fundamentals and systematic approach to grappling, focusing on establishing dominant positions before applying submissions. His style represented the classical Gracie methodology that prioritized leverage-based techniques over strength and athleticism.

Ralph's technical contributions included refinements to fundamental positions and transitions. He excelled at controlling opponents through positional dominance, utilizing the mount, side control, and back control positions effectively. His ground control sequences demonstrated the effectiveness of the top control positions that became hallmarks of Gracie Jiu-Jitsu. Ralph's emphasis on positional hierarchy and strategic advancement influenced how modern BJJ practitioners approach grappling sequences. His technical demonstrations and teaching emphasized the importance of proper weight distribution, hip movement, and transition timing that remain cornerstones of Brazilian Jiu-Jitsu instruction today.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Ralph Gracie's legacy is intertwined with the broader history of Brazilian Jiu-Jitsu's development and international expansion. As a member of the pioneering Gracie family, he contributed to establishing jiu-jitsu as a respected martial art and competitive sport. His participation in matches and teaching helped validate the effectiveness of BJJ techniques during a critical period when the art needed to prove its legitimacy against skeptics and practitioners of other martial arts.

Ralph's influence extends through the lineage of students and family members he trained and influenced. His technical knowledge and competitive experience informed the next generation of Gracie practitioners and contributed to the systematic approach to BJJ instruction that characterizes the family's schools. The Gracie family's eventual domination of mixed martial arts competitions validated the groundwork laid by pioneers like Ralph during jiu-jitsu's earlier eras. Today, Ralph Gracie is remembered as an important figure in Brazilian Jiu-Jitsu history, representing a foundational generation that transformed a regional martial art into a global phenomenon. His contributions continue to resonate through the technical principles and competitive spirit that define modern grappling.</p>
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
