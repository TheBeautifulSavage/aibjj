import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Alliance BJJ Team: History, Achievements & Training | AIBJJ",
  description: "Learn about Alliance BJJ Team, one of the world's largest jiu-jitsu organizations. Explore their history, notable athletes, training philosophy, and global",
};

export default function Page() {
  const tags = ["alliance", "team", "academy"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Alliance BJJ Team: History, Achievements & Training</h1>
        <p className="mt-4 text-xl text-zinc-400">Learn about Alliance BJJ Team, one of the world's largest jiu-jitsu organizations. Explore their history, notable athletes, training philosophy, and global presence.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">History and Foundation</h2>
            <p>Alliance BJJ Team was founded in the 1990s in Rio de Janeiro, Brazil, emerging as one of the most successful and influential jiu-jitsu organizations in the world. The team was established with a vision to promote high-level Brazilian jiu-jitsu training and competition. Over the decades, Alliance has grown from a regional academy into an international powerhouse with affiliated schools across the globe. The organization's commitment to technical excellence and competitive success has made it a respected name in the BJJ community. Alliance's structured approach to training and rank advancement established new standards for BJJ education and professionalism.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Notable Athletes and Champions</h2>
            <p>Alliance BJJ Team has produced numerous world champions and elite competitors who have dominated both gi and no-gi competitions. The organization is renowned for developing exceptional talent across all weight classes and belt levels. Many Alliance athletes have won IBJJF World Championships, Pan American Championships, and other prestigious tournaments. The team's success extends to submission grappling and MMA, with several fighters using their BJJ foundation from Alliance training. These accomplished competitors represent the organization's commitment to technical development and competitive excellence. Alliance's athlete pipeline continues to produce rising stars who maintain the organization's winning tradition and reputation for quality instruction.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Training Philosophy and Methods</h2>
            <p>Alliance BJJ Team emphasizes a structured, systematic approach to jiu-jitsu development that balances technical fundamentals with competitive application. The organization prioritizes proper progression through belt levels, ensuring students build a solid foundation before advancing. Their training methodology incorporates position-specific drilling, controlled rolling, and game development tailored to individual competition goals. Alliance coaches focus on both gi and no-gi techniques, preparing athletes for diverse grappling scenarios. The team culture emphasizes respect, discipline, and continuous improvement. Alliance's teaching methods have been refined through decades of experience, creating a repeatable system that produces consistent results. Their approach to training has influenced numerous other BJJ academies worldwide.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Global Expansion and Affiliations</h2>
            <p>Alliance BJJ Team maintains an extensive network of affiliated academies spanning multiple continents, including North America, Europe, South America, and beyond. This global presence allows Alliance to share its technical expertise and training philosophy with diverse populations while maintaining consistent standards. The organization carefully selects affiliates who demonstrate commitment to quality instruction and the Alliance values. Their international structure supports both recreational and competitive students seeking world-class jiu-jitsu training. Alliance regularly hosts seminars, training camps, and tournaments that unite their global community. The organization's expansion strategy balances growth with quality control, ensuring that affiliated schools maintain the high standards associated with the Alliance name.</p>
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
