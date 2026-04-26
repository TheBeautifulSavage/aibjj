import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "10th Planet Jiu-Jitsu: Complete Guide | AIBJJ",
  description: "Learn about 10th Planet Jiu-Jitsu, Eddie Bravo's no-gi system emphasizing leg lock mastery, rubber guard, and unorthodox techniques for modern grappling.",
};

export default function Page() {
  const tags = ["10th-planet", "eddie-bravo", "no-gi"];
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
        <h1 className="text-4xl font-black sm:text-5xl">10th Planet Jiu-Jitsu: Complete Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Learn about 10th Planet Jiu-Jitsu, Eddie Bravo's no-gi system emphasizing leg lock mastery, rubber guard, and unorthodox techniques for modern grappling.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is 10th Planet Jiu-Jitsu</h2>
            <p>10th Planet Jiu-Jitsu is a no-gi Brazilian Jiu-Jitsu system founded by Eddie Bravo in 1999. Unlike traditional gi-based BJJ, this system focuses exclusively on no-gi grappling, eliminating grips available through jacket control. The system emphasizes leg locks, submissions, and unorthodox positioning that challenged conventional BJJ wisdom at its inception. 10th Planet revolutionized modern grappling by proving that leg lock-heavy approaches could be highly effective and competitive. The system has produced numerous successful competitors in submission-only tournaments and modern IBJJF no-gi competitions. Today, 10th Planet operates as a network of affiliated academies worldwide, with headquarters in Los Angeles. The system's influence extends beyond its dedicated practitioners, as many traditional BJJ schools now incorporate 10th Planet techniques into their curriculum.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Core Techniques and Philosophy</h2>
            <p>The rubber guard represents 10th Planet's most distinctive contribution to BJJ. This position involves wrapping one leg around the opponent's arm and head, creating dynamic offensive opportunities. From there, practitioners execute numerous submissions including the twister, gogoplata, and arm triangle variations. Leg locks form another cornerstone, with emphasis on heel hooks, knee reaps, and footlock sequences. 10th Planet practitioners develop exceptional leg lock defense and counters due to constant exposure. The system prioritizes flow rolling and adaptability rather than rigid positional hierarchies. Eddie Bravo incorporated elements from catch wrestling, creating a hybrid system that challenges traditional BJJ conventions. Practitioners learn creative escapes and transitions that emphasize mobility and unconventional positioning. This philosophy produces grapplers comfortable in uncomfortable positions, developing problem-solving skills applicable across all grappling styles.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Belt Ranking System</h2>
            <p>10th Planet uses a unique belt progression system distinct from traditional IBJJF rankings. The system starts with white belt and progresses through blue, purple, brown, and black belt, but incorporates special designations like 'advanced' levels. Progression typically requires demonstrated competency in the system's core techniques and philosophies rather than purely time-based requirements. Eddie Bravo maintains final authority over rank promotions, particularly for elite-level advancement. Some 10th Planet practitioners hold multiple belt rankings, maintaining IBJJF gi rankings while earning 10th Planet no-gi credentials. This dual-ranking approach reflects the integration of 10th Planet into the broader BJJ landscape. The system emphasizes practical application and tournament success as promotion criteria. Training partners and coaches provide recommendations based on technical understanding, teaching ability, and overall grappling development. Belt rankings typically occur during seminars or major tournaments when academy leaders assess student progress.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Training and Getting Started</h2>
            <p>Beginning 10th Planet training requires locating an affiliated academy, as the system operates through independent schools rather than a centralized organization. Most academies accept all experience levels, welcoming practitioners new to no-gi grappling. Initial training focuses on fundamental positioning, basic submissions, and movement patterns adapted to no-gi mechanics. Classes emphasize drilling techniques before live rolling, allowing practitioners to internalize movements safely. No-gi gear consists of rashguards and shorts or joggers, making training accessible and affordable. Beginners should expect different feels compared to traditional gi training, including faster-paced rolling and increased emphasis on leg attack defense. Many students train at both gi and 10th Planet academies, finding complementary skill development. Eddie Bravo's instructional library, including books and online content, provides supplementary learning resources. The community culture encourages experimentation and creative problem-solving, fostering an open learning environment for all skill levels.</p>
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
