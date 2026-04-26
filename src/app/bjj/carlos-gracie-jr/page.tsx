import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Carlos Gracie Jr: BJJ Legend and Gracie Family Pioneer | AIBJJ",
  description: "Explore Carlos Gracie Jr's revolutionary impact on Brazilian Jiu-Jitsu, competition record, signature techniques, and lasting legacy in grappling.",
};

export default function Page() {
  const tags = ["Carlos Gracie Jr", "Brazilian Jiu-Jitsu", "BJJ Legend", "Gracie Family", "Grappling"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Carlos Gracie Jr: BJJ Legend and Gracie Family Pioneer</h1>
        <p className="mt-4 text-xl text-zinc-400">Explore Carlos Gracie Jr's revolutionary impact on Brazilian Jiu-Jitsu, competition record, signature techniques, and lasting legacy in grappling.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Carlos Gracie Jr was born into the legendary Gracie family, the pioneering dynasty that developed and revolutionized Brazilian Jiu-Jitsu. As the son of Carlos Gracie Sr, one of the family's most influential figures, Carlos Jr inherited both the technical knowledge and competitive spirit that defined the family's dominance in martial arts. Growing up in Rio de Janeiro, he was immersed in BJJ from childhood, training alongside family members who were shaping the sport's evolution.

Unlike some family members who pursued vale tudo fighting, Carlos Jr focused intently on developing his grappling skills within the BJJ framework. His early training emphasized the technical aspects of jiu-jitsu, building a foundation that would eventually influence how the sport was taught and competed. He achieved his black belt through dedicated training and demonstrating mastery of Gracie Jiu-Jitsu principles, positioning himself as both a competitor and instructor who would carry the family legacy forward into modern competition.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Carlos Gracie Jr established himself as a formidable competitor during the golden era of Brazilian Jiu-Jitsu competition. He participated in numerous high-level tournaments that defined BJJ's competitive landscape, facing some of the sport's most respected athletes. His competition record reflected the technical proficiency and strategic understanding that characterized the Gracie approach to grappling during this period.

Beyond individual tournament victories, Carlos Jr's greatest achievement was establishing the Carlson Gracie Team as a dominant force in BJJ competition. He was instrumental in organizing and developing competitors who would achieve remarkable success at the highest levels of the sport. His influence extended through producing multiple champions and skilled grapplers who represented the team's technical philosophy. While his personal competition career was notable, his lasting impact came through his role as a mentor, organizer, and technical innovator who elevated the competitive standards of Brazilian Jiu-Jitsu during a crucial developmental period for the sport.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Carlos Gracie Jr's approach to Brazilian Jiu-Jitsu emphasized technical precision, positional dominance, and a systematic understanding of grappling mechanics. His style reflected the Gracie family's foundational principles: leverage over strength, superior positioning, and controlled transitions. He was known for maintaining excellent posture and control throughout matches, rarely exposing himself to submissions while methodically improving his position.

His technical arsenal included highly developed passing techniques and top-position control, areas where the Gracie system traditionally excelled. Carlos Jr was particularly skilled at leg lock variations and footlock techniques, which were less emphasized in mainstream BJJ at the time but would eventually become fundamental to modern grappling. He understood the importance of hip mobility and angle manipulation in creating submission opportunities. His coaching philosophy emphasized these principles, teaching students to develop pressure-based control systems rather than relying solely on explosive movements. This methodical, pressure-based approach became a hallmark of competitors trained under his lineage.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Carlos Gracie Jr's legacy encompasses both his contributions to competitive Brazilian Jiu-Jitsu and his role in preserving and evolving Gracie family techniques. He was instrumental in maintaining the technical standards of the Gracie system while adapting to changing competition rules and strategic developments. His work as a teacher and team leader influenced multiple generations of BJJ practitioners who adopted his systematic approach to grappling.

His greatest impact lies in demonstrating how traditional Gracie principles could remain relevant and effective in modern competition. Carlos Jr contributed to the evolution of leg lock theory and application, helping bridge the gap between classical Gracie techniques and contemporary grappling innovations. Through his academy and competitors, he proved that the Gracie system's emphasis on technical fundamentals and positional control could compete effectively against any methodology. His influence extended internationally, inspiring BJJ programs that prioritized systematic technical development. Today, Carlos Gracie Jr is remembered as a key figure who maintained the Gracie family's competitive relevance while influencing how Brazilian Jiu-Jitsu is taught and understood worldwide.</p>
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
