import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Felipe Pena: BJJ Champion & Grappling Legend | AIBJJ",
  description: "Explore Felipe Pena's BJJ career, competition achievements, signature techniques, and lasting impact on Brazilian Jiu-Jitsu. Complete athlete biography.",
};

export default function Page() {
  const tags = ["Felipe Pena", "Brazilian Jiu-Jitsu", "BJJ Champion", "Grappling", "Jiu-Jitsu Athletes"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Felipe Pena: BJJ Champion & Grappling Legend</h1>
        <p className="mt-4 text-xl text-zinc-400">Explore Felipe Pena's BJJ career, competition achievements, signature techniques, and lasting impact on Brazilian Jiu-Jitsu. Complete athlete biography.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Felipe Pena emerged as one of Brazil's most talented grappling prospects in the early 2000s, beginning his BJJ training at a young age in the competitive Brazilian martial arts environment. His early development was shaped by exposure to high-level instruction and intense training partners, which accelerated his technical growth and competitive instincts. Pena quickly distinguished himself as a prodigious talent, demonstrating exceptional athleticism, technical proficiency, and a relentless competitive drive that would define his career trajectory.

Throughout his formative years, Pena trained under renowned coaches who recognized his potential and cultivated his skills across all aspects of grappling. His progression through the belt ranks was marked by consistent excellence and breakthrough performances at regional and national competitions. These early successes established Pena as a rising star in Brazilian Jiu-Jitsu and set the foundation for his transition into elite-level competition. His dedication to mastering fundamental techniques while developing innovative approaches to grappling established patterns that would characterize his entire athletic career.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Felipe Pena's competitive resume reflects consistent success across multiple prestigious BJJ tournaments and grappling events. He demonstrated exceptional performance in weight-class competitions while also competing effectively in absolute divisions, showcasing remarkable versatility and adaptability against diverse opponents. Pena's achievements include victories over numerous top-ranked competitors and strong performances at major Brazilian Jiu-Jitsu tournaments that attract elite athletes from worldwide.

Throughout his competitive career, Pena earned recognition as a skilled technician capable of executing flawless matches and adapting his strategy based on opponent strengths and weaknesses. His competition record reflects his ability to consistently perform at the highest levels of BJJ competition, earning respect from peers and establishing himself as a formidable competitor. Whether competing in gi or no-gi formats, Pena displayed the technical mastery and tactical intelligence required to succeed against elite opposition. His accomplishments demonstrated his commitment to excellence and positioned him among Brazil's most accomplished modern grapplers.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Felipe Pena's grappling approach combines technical precision with dynamic athleticism, creating a comprehensive and effective fighting style. His game is characterized by strong positional control, efficient transitions, and excellent understanding of timing and leverage principles fundamental to Brazilian Jiu-Jitsu. Pena demonstrates particular proficiency in leg lock entries and foot lock mechanics, techniques increasingly important in modern grappling competitions. His leg lock game showcases advanced understanding of leg lock sequencing and the ability to threaten multiple submissions from various positions.

Beyond leg attacks, Pena's technical arsenal includes solid top position control, intelligent guard passing sequences, and effective submission threats from dominant positions. His fighting style emphasizes maintaining control while generating scoring opportunities, reflecting classical Brazilian Jiu-Jitsu principles combined with contemporary grappling innovations. Pena's ability to transition smoothly between techniques and capitalize on positional advantages makes him particularly dangerous in competition. His signature techniques demonstrate years of dedicated technical refinement and intelligent approach to problem-solving within grappling contexts.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Felipe Pena's contributions to Brazilian Jiu-Jitsu extend beyond his impressive competition record, influencing how modern grapplers approach technical development and competitive strategy. His success with advanced leg lock techniques helped popularize these methods within competitive BJJ circles, contributing to the evolution of contemporary grappling tactics and technical innovation. Pena's performances demonstrated the effectiveness of intelligent leg lock applications, inspiring subsequent generations of grapplers to develop sophisticated foot lock and heel hook strategies.

As an accomplished Brazilian grappler, Pena helped maintain Brazil's position as a dominant force in elite-level jiu-jitsu competition during his active years. His technical approach and competitive excellence serve as inspiration for young Brazilian grapplers pursuing excellence in BJJ. Through his accomplishments and technical innovations, Pena contributed to the broader evolution of Brazilian Jiu-Jitsu, demonstrating how traditional grappling principles could be effectively combined with emerging technical approaches. His legacy reflects his commitment to advancing the sport and his significant contributions to jiu-jitsu's technical and competitive development.</p>
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
