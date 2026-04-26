import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Igor Gracie: BJJ Pioneer and Family Legacy | AIBJJ",
  description: "Explore Igor Gracie's contributions to Brazilian Jiu-Jitsu, his competition achievements, and lasting impact on grappling.",
};

export default function Page() {
  const tags = ["Igor Gracie", "Brazilian Jiu-Jitsu", "BJJ History", "Gracie Family", "Grappling"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
<article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map(tag => (
            <Link key={tag} href={`/bjj/tag/${tag}`}
              className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:border-red-600/50 hover:text-red-400 transition-colors">
              #{tag}
            </Link>
          ))}
        </div>
        <h1 className="text-4xl font-black sm:text-5xl">Igor Gracie: BJJ Pioneer and Family Legacy</h1>
        <p className="mt-4 text-xl text-zinc-400">Explore Igor Gracie's contributions to Brazilian Jiu-Jitsu, his competition achievements, and lasting impact on grappling.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Igor Gracie emerged from one of Brazilian Jiu-Jitsu's most prestigious lineages, born into the legendary Gracie family that revolutionized martial arts in the 20th century. Growing up in Rio de Janeiro, Igor was immersed in BJJ from childhood, training under family members who were instrumental in developing and refining grappling techniques. His early training combined the classical Gracie principles emphasizing leverage and technique over raw strength with innovations emerging from his family's continued evolution of the art.

During the formative years of his BJJ career, Igor developed a reputation as a dedicated student and innovative practitioner. He benefited from direct instruction within the Gracie family's inner circle, absorbing decades of accumulated knowledge passed down through generations. His commitment to technical excellence and constant refinement of fundamental positions helped establish him as a respected figure in BJJ during an era when the sport was gaining international recognition beyond Brazil.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Igor Gracie's competition career showcased the technical proficiency synonymous with the Gracie name. He competed at the highest levels of Brazilian Jiu-Jitsu, earning multiple victories against formidable opponents and establishing himself as a serious threat in his weight class. His wins demonstrated mastery of positional control and submission techniques, cornerstones of Gracie Jiu-Jitsu philosophy.

Throughout his competitive journey, Igor contributed to his family's dominant presence in BJJ competitions. He participated in major tournaments that shaped the sport's early competitive landscape, earning respect through consistent performances and technical displays. While not always in the headlines compared to some family members, Igor's achievements reflected the depth of talent within the Gracie lineage. His competition experience informed his understanding of practical application, distinguishing theoretical knowledge from real-world execution in high-pressure situations.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Igor Gracie exemplified the classical Gracie approach to Brazilian Jiu-Jitsu, prioritizing position before submission and using superior positioning to create technical advantages. His fighting style emphasized fundamental techniques executed with precision, reflecting the family's philosophy that proper mechanics trump athletic attributes. Igor developed particular proficiency in positional transitions and control systems that allowed him to dominate matches from top and bottom positions.

His technical arsenal included strong fundamentals in mount position, side control transitions, and guard passing sequences. Igor demonstrated the Gracie family's characteristic patience, methodically advancing position before pursuing submissions. His approach to leg lock techniques and lower body control represented evolution in Gracie grappling methodology. By focusing on establishing dominant positions before committing to submissions, Igor exemplified a strategic approach that prioritized consistency and control over spectacular but risky techniques.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Igor Gracie's contributions to Brazilian Jiu-Jitsu extend beyond his personal competition record into his role as a representative of Gracie family values and technical standards. He participated in preserving and transmitting core BJJ principles during a pivotal period when the sport transitioned from family-dominated instruction to broader commercialization. His dedication to technical excellence helped maintain standards within Gracie lineages worldwide.

As part of the extended Gracie family network, Igor influenced countless students through teaching and demonstration of Gracie Jiu-Jitsu fundamentals. His presence in the BJJ community reinforced the family's continued relevance and technical authority. Igor's career exemplifies how family members contributed collectively to establishing BJJ as a globally respected martial art, even when individual members weren't always in prominent spotlights. His legacy reflects the Gracie family's philosophical commitment to technical mastery, measured progression, and the principle that effective grappling stems from understanding leverage rather than relying on strength.</p>
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
