import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Otavio Sousa: BJJ Grappling Pioneer and Champion | AIBJJ",
  description: "Explore Otavio Sousa's impressive BJJ career, competition achievements, signature techniques, and lasting influence on Brazilian Jiu-Jitsu grappling.",
};

export default function Page() {
  const tags = ["Otavio Sousa", "Brazilian Jiu-Jitsu", "BJJ Champion", "Grappling", "Jiu-Jitsu Techniques"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Otavio Sousa: BJJ Grappling Pioneer and Champion</h1>
        <p className="mt-4 text-xl text-zinc-400">Explore Otavio Sousa's impressive BJJ career, competition achievements, signature techniques, and lasting influence on Brazilian Jiu-Jitsu grappling.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Otavio Sousa emerged as a prominent figure in Brazilian Jiu-Jitsu during a transformative period for the sport. Beginning his grappling journey in Brazil, Sousa demonstrated exceptional dedication to mastering the fundamentals and advanced techniques of BJJ. His early training emphasized strong positional control and submission mastery, which would become hallmarks of his competitive style.

Sousa's rise through the ranks was marked by consistent improvement and a deep understanding of jiu-jitsu principles. Training under respected instructors, he developed a well-rounded game that combined traditional BJJ with innovative approaches to problem-solving on the mat. His commitment to the art extended beyond personal achievement, as he became known for sharing knowledge with training partners and contributing to the broader BJJ community's technical development.

By establishing himself as both a serious competitor and dedicated instructor, Sousa built a reputation as someone who understood jiu-jitsu at a profound level. His journey from student to respected athlete reflected the meritocratic nature of BJJ, where skill and determination determine success.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Throughout his competitive career, Otavio Sousa earned recognition at multiple weight classes and experience levels, demonstrating versatility and technical excellence. He competed in various prestigious BJJ tournaments and grappling events, consistently placing among top competitors and earning victories against notable opponents. His competition record reflects his ability to execute techniques effectively under pressure while adapting to different opponents and styles.

Sousa's achievements extended across different rule sets and competition formats, showcasing his comprehensive understanding of grappling. Whether competing under IBJJF regulations or other grappling formats, he displayed the technical proficiency and mental toughness required to succeed at elite levels. His victories came through precise technique execution rather than relying solely on physical attributes, earning respect from the jiu-jitsu community.

Beyond individual tournament wins, Sousa's consistent performances at reputable competitions established him as a reliable and skillful competitor. His dedication to testing himself against top-tier athletes demonstrated his commitment to validating his techniques and continuously improving his craft through competitive experience.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Otavio Sousa developed a technical, methodical approach to Brazilian Jiu-Jitsu that emphasized positional dominance and controlled submissions. His style focused on establishing superior positions before attacking, reducing unnecessary risk while maximizing effectiveness. This patient, systematic approach reflected deep technical knowledge and strategic thinking about match progression.

Sousa became known for his proficiency in leg lock variations and lower body submissions, techniques that require exceptional timing, pressure management, and anatomical understanding. His leg lock game demonstrated the high level of specialization possible within BJJ, inspiring other athletes to develop deeper expertise in specific submission categories. Beyond leg attacks, he maintained well-developed passing techniques and top position control that allowed him to dictate match pace.

His signature techniques came from relentless drilling and refinement rather than athletic explosiveness. Sousa's approach emphasized that consistent, technically superior execution could overcome size and strength differences, a principle central to BJJ philosophy. His willingness to develop specialized techniques and his ability to implement them against quality opposition made him a complete grappler whose technical innovations contributed to the sport's overall evolution.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Otavio Sousa's impact on Brazilian Jiu-Jitsu extended beyond his personal accomplishments to influence how techniques are taught and understood within the broader grappling community. His technical innovations, particularly in leg lock systems, contributed to evolving strategies that modern competitors continue to develop. Through his teaching and competition work, Sousa demonstrated possibilities within jiu-jitsu that inspired both peers and younger generations of athletes.

As an instructor and mentor, Sousa shared his technical knowledge generously, helping establish training lineages that perpetuated his systematic approach to grappling. His emphasis on technical excellence and methodical training approaches influenced coaching philosophies across multiple academies. Athletes who trained under his guidance carried forward his principles, multiplying his impact throughout the BJJ ecosystem.

Sousa's legacy represents BJJ's continuing evolution as competitors and instructors refine techniques and develop new methodologies. His contributions to technical knowledge, particularly regarding leg lock systems and positional control strategies, remain relevant in contemporary grappling. By demonstrating that technical sophistication and strategic thinking could achieve elite results, Sousa reinforced jiu-jitsu's core principle that skill ultimately determines success on the mat.</p>
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
