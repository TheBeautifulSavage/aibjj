import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Danaher Death Squad: Elite BJJ Training | AIBJJ",
  description: "Explore the Danaher Death Squad, John Kavanagh's legendary BJJ team. Learn their systematic approach, key members, and revolutionary leg lock techniques.",
};

export default function Page() {
  const tags = ["danaher", "leg-locks", "system"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Danaher Death Squad: Elite BJJ Training</h1>
        <p className="mt-4 text-xl text-zinc-400">Explore the Danaher Death Squad, John Kavanagh's legendary BJJ team. Learn their systematic approach, key members, and revolutionary leg lock techniques.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Danaher Death Squad?</h2>
            <p>The Danaher Death Squad is an elite Brazilian Jiu-Jitsu team based in New York City, founded and coached by the renowned John Danaher. Known for their systematic and scientific approach to BJJ, this squad has produced some of the sport's most dominant competitors. The team earned its nickname due to their devastating leg lock techniques and ability to neutralize opponents through position and control. Members train under Danaher's detailed instruction system, which emphasizes fundamental principles, positional hierarchy, and submission mechanics. The Death Squad represents a paradigm shift in modern jiu-jitsu, moving away from traditional teaching methods toward comprehensive, laser-focused technical instruction. Their success at the highest levels of competition, including IBJJF tournaments and submission-only events, demonstrates the effectiveness of their methodology. The team's culture emphasizes intellectual understanding of technique alongside physical training, creating a learning environment where each position is studied exhaustively.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Members and Champions</h2>
            <p>The Danaher Death Squad boasts an impressive roster of world-class competitors. Gordon Ryan stands as the squad's most celebrated member, having won multiple IBJJF gold medals and submission grappling titles. Nicky Ryan, Gordon's brother, has also achieved exceptional success in both gi and no-gi competition. Craig Jones became famous for his leg lock mastery and innovative submission techniques. Ethan Crelinsten, Garry Tonon, and Lachlan Giles represent additional stars who've earned championship status through Death Squad training. These athletes have collectively won numerous medals at the World Championships, ADCC, and other prestigious tournaments. Their achievements aren't limited to traditional tournaments; several members excel in submission-only events like Submission Underground. The team's success demonstrates Danaher's coaching ability and the effectiveness of his systematic training approach. Each member brings unique strengths while adhering to the fundamental principles taught within the squad.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">The Leg Lock System</h2>
            <p>The Death Squad's most distinctive contribution to BJJ is their revolutionary leg lock system. John Danaher systematized leg lock attacks, defense, and counter-attacks in ways previously unexplored in the sport. Their approach treats leg locks as a complete system rather than occasional submissions, with detailed position hierarchy and escape mechanics. The squad emphasizes footlock entries, heel hooks, and knee reap variations with technical precision that transformed competitive jiu-jitsu. Their leg lock dominance forced the broader jiu-jitsu community to develop better defensive strategies and understanding. Danaher's instructional material on leg locks has become foundational study for modern grapplers. The Death Squad's success with these techniques comes from their understanding that leg locks require specific positional control and systematic progression. Their approach includes detailed study of reaping mechanics, grip variations, and counter-positioning. This comprehensive system has influenced athletes worldwide and remains a cornerstone of contemporary submission grappling.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Training Philosophy and Methods</h2>
            <p>Danaher's coaching philosophy emphasizes intellectual understanding before physical execution. The Death Squad trains using a systematic approach where every position is studied methodically, from fundamental principles to advanced variations. Training sessions focus on concept-based learning rather than drill repetition alone, encouraging athletes to understand the 'why' behind techniques. This approach develops problem-solving abilities essential for competition. The squad practices positional hierarchies, understanding which positions offer advantages and how to progress systematically through them. Drilling is purposeful and targeted, with specific focus on pressure application and timing. The team also emphasizes mental preparation and match strategy alongside technical training. Danaher encourages detailed note-taking and intellectual engagement with jiu-jitsu, treating it as a problem-solving discipline. This methodology has influenced coaching approaches worldwide, inspiring many instructors to adopt more systematic teaching methods. The Death Squad's success validates this educational approach, showing that intellectual understanding combined with consistent training produces elite-level competitors capable of dominating at the highest levels of Brazilian Jiu-Jitsu.</p>
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
