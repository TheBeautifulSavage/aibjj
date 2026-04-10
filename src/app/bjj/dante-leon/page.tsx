import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Dante Leon: BJJ Competitor & Grappling Champion | AIBJJ",
  description: "Explore Dante Leon's BJJ career, competition achievements, signature techniques, and influence on Brazilian Jiu-Jitsu grappling.",
};

export default function Page() {
  const tags = ["Dante Leon", "Brazilian Jiu-Jitsu", "BJJ Competitor", "Grappling", "Martial Arts"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Dante Leon: BJJ Competitor & Grappling Champion</h1>
        <p className="mt-4 text-xl text-zinc-400">Explore Dante Leon's BJJ career, competition achievements, signature techniques, and influence on Brazilian Jiu-Jitsu grappling.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Dante Leon's introduction to Brazilian Jiu-Jitsu began during his formative years, when he discovered the martial art's transformative potential. Growing up with a passion for grappling, Leon dedicated himself to mastering the fundamental techniques and principles that define modern BJJ. His early training focused on building a strong technical foundation, learning from experienced instructors who emphasized proper form, positioning, and controlled progression.

Leon's commitment to his craft extended beyond casual training sessions. He invested countless hours on the mat, studying advanced techniques and competing in local tournaments to test his skills against diverse opponents. This period of intensive development shaped his competitive mindset and refined his ability to adapt strategies under pressure. His journey exemplified the traditional path many elite grapplers take, combining rigorous training with consistent competition experience to accelerate growth.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Throughout his competitive career, Dante Leon earned recognition as a formidable grappler across multiple weight classes and tournaments. His competition resume demonstrates consistent success against quality opposition, with notable performances at regional and national level events. Leon's ability to maintain competitive intensity while continuously improving his technical arsenal set him apart in the BJJ community.

His achievements reflect years of dedication to competition preparation and tactical refinement. Leon competed in prestigious tournaments where he faced seasoned veterans and rising talent, consistently delivering strong performances that showcased his technical proficiency and competitive heart. His tournament results contributed significantly to his reputation as a reliable, skilled competitor. Beyond individual medals and rankings, Leon's involvement in the competitive circuit helped establish him as a respected figure within BJJ circles, known for his serious approach to training and competition at the highest amateur and professional levels.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Dante Leon's grappling approach combines technical precision with intelligent positional control. His fighting style reflects years of systematic study and real-world testing, emphasizing efficiency and effectiveness over flashy movements. Leon demonstrates strong fundamentals in both top and bottom positions, with particular proficiency in leg lock systems and pressure-based passing sequences that characterize modern competitive BJJ.

His signature techniques showcase the evolution of contemporary grappling. Leon employs nuanced footlock entries, demonstrating exceptional leg lock coordination and timing that allows him to threaten submissions while maintaining positional advantage. Additionally, his guard passing methodology reveals a systematic approach to breaking down defensive structures and establishing dominant positions. Leon's technical arsenal reflects the modern shift toward leg lock utilization while maintaining strong traditional BJJ fundamentals, making him a well-rounded competitor capable of controlling matches through multiple tactical approaches.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Dante Leon's contributions to Brazilian Jiu-Jitsu extend beyond his individual competition achievements. As a dedicated competitor and technician, he exemplifies the continuous evolution of grappling systems and the importance of combining traditional BJJ principles with contemporary technical innovations. Leon's approach to training and competition has influenced peers and younger grapplers seeking to develop comprehensive skills in the modern BJJ landscape.

His legacy within the grappling community reflects commitment to technical excellence and competitive integrity. Through tournament participation and training partnership, Leon has contributed to the development of the broader BJJ ecosystem. His work demonstrates the value of systematic training, consistent competition, and technical refinement in pursuing excellence within Brazilian Jiu-Jitsu. As the sport continues evolving, Leon remains recognized as a representative of serious competitive grappling, inspiring others to pursue mastery through dedication and disciplined training methodology.</p>
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
