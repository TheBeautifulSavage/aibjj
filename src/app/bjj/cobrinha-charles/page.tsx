import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Cobrinha Charles: BJJ Legend and Innovator | AIBJJ",
  description: "Explore the remarkable career of Cobrinha Charles, pioneering Brazilian Jiu-Jitsu competitor and influential instructor who revolutionized grappling.",
};

export default function Page() {
  const tags = ["Cobrinha Charles", "Brazilian Jiu-Jitsu", "BJJ Competitor", "Grappling Legend", "Jiu-Jitsu Techniques"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Cobrinha Charles: BJJ Legend and Innovator</h1>
        <p className="mt-4 text-xl text-zinc-400">Explore the remarkable career of Cobrinha Charles, pioneering Brazilian Jiu-Jitsu competitor and influential instructor who revolutionized grappling.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Cobrinha Charles, born Charles Oliveira, emerged from Rio de Janeiro's vibrant martial arts culture to become one of Brazilian Jiu-Jitsu's most respected figures. He began his BJJ training during the sport's explosive growth phase in Brazil, dedicating himself to mastering the fundamental techniques while developing innovative approaches to grappling. His early years were marked by intense training sessions and competition experience that shaped his understanding of positional control and submission mechanics. Charles trained under some of Brazil's most accomplished coaches, absorbing traditional techniques while simultaneously pushing boundaries with creative problem-solving on the mat. His combination of technical precision and competitive drive quickly established him as a rising talent in the Brazilian Jiu-Jitsu community. Through consistent competition and relentless training, Cobrinha Charles built a reputation for excellence that would influence generations of grapplers to follow.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Cobrinha Charles compiled an impressive competition record across multiple weight categories and age divisions, earning multiple medals at prestigious tournaments including the Pan American Championships and Brazilian Nationals. His success stemmed from technical mastery, physical conditioning, and strategic competition planning. Charles demonstrated remarkable versatility, excelling in both gi and no-gi competition environments. His tournament victories came through a combination of positional dominance and intelligent submission attempts, particularly his expertise in leg lock sequences. Beyond individual medals, Charles contributed significantly to team competition success, representing his academy in team championships and helping establish strong grappling programs. His competitive longevity allowed him to compete effectively across different eras of BJJ, adapting his game as the sport evolved. Charles proved himself as both a weight-class champion and absolute division competitor, showcasing the adaptability required at the highest levels of professional grappling. His achievements earned him recognition as a peer among Brazilian Jiu-Jitsu's elite competitors.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Cobrinha Charles developed a distinctive grappling methodology emphasizing positional control, methodical pressure, and technical precision. His fighting style prioritized establishing dominant positions before pursuing submissions, reflecting classical Brazilian Jiu-Jitsu principles. Charles became particularly known for his leg lock expertise, developing intricate sequences that combined hip control with ankle and knee techniques. His approach to footlock submissions demonstrated deep understanding of leverage mechanics and angle manipulation. From top position, Cobrinha excelled at maintaining pressure while systematically dismantling opponent defenses. His guard passing techniques combined patience with explosive finishing movements, allowing him to advance through defensive structures methodically. Charles also developed proficiency in leg drag passes and cross-side pressure applications. His submission defense was notably strong, utilizing proper positioning and timing to neutralize opponent attacks. The technical depth of his game made him valuable as both competitor and instructor, allowing him to adapt strategies based on opponent styles. His systematic approach to problem-solving influenced how many modern grapplers construct their techniques and tactical sequences.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Cobrinha Charles established lasting influence through both competitive accomplishments and instructional contributions to Brazilian Jiu-Jitsu. His detailed approach to technique instruction helped popularize systematic learning methods within BJJ communities worldwide. Through seminars, private instruction, and academy leadership, Charles transmitted his knowledge across generations, establishing strong lineages of technically proficient grapplers. His emphasis on fundamental mastery combined with innovative problem-solving created a distinctive teaching philosophy that valued both tradition and evolution. Many of his students progressed to become accomplished competitors and instructors themselves, extending his influence throughout the sport. Charles demonstrated the importance of adapting classical techniques to modern competition realities while maintaining technical integrity. His contribution to leg lock development particularly influenced how contemporary grapplers approach lower body submissions. Beyond technique, Cobrinha Charles embodied the values of dedicated martial arts practice, earning respect through consistent excellence and humble demeanor. His legacy continues through academies bearing his influence, students teaching his methods, and the technical innovations he pioneered. Cobrinha Charles remains recognized as a foundational figure in Brazilian Jiu-Jitsu history, representing the transition from traditional approaches to more specialized, systematized grappling methodologies.</p>
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
