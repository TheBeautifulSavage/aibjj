import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Quintet 1: Revolutionary Team-Based BJJ Tournament | AIBJJ",
  description: "Discover Quintet 1, the groundbreaking team-based BJJ tournament featuring elite grapplers. Historic matches, legendary competitors, and innovative format.",
};

export default function Page() {
  const tags = ["Quintet", "BJJ Tournament", "Team Grappling", "Brazilian Jiu-Jitsu"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Quintet 1: Revolutionary Team-Based BJJ Tournament</h1>
        <p className="mt-4 text-xl text-zinc-400">Discover Quintet 1, the groundbreaking team-based BJJ tournament featuring elite grapplers. Historic matches, legendary competitors, and innovative format.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Overview</h2>
            <p>Quintet 1 was a landmark team-based Brazilian Jiu-Jitsu tournament held in November 2017 in Los Angeles, California. Organized by Jre Clips and promoted by Joe Rogan, the event introduced an innovative format where teams of five grapplers competed against each other in a relay-style competition. Each match featured individual competitors from opposing teams, with victories contributing points to their respective teams' totals. The tournament brought together some of the most elite BJJ athletes in the world, representing different teams and lineages. The format was revolutionary for professional grappling at the time, emphasizing teamwork and creating a unique spectacle that combined traditional one-on-one matches with team-based competition strategy. Quintet 1 featured competitors from various backgrounds, including IBJJF champions, submission specialists, and renowned instructors, making it a prestigious event that attracted significant attention from the BJJ community and mainstream media alike.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Results and Champions</h2>
            <p>Team Lachlan Giles emerged as the victorious team at Quintet 1, demonstrating superior grappling depth and strategic superiority throughout the competition. The team featured some exceptional talent across multiple weight classes and skill levels. Other competing teams included representatives from prestigious BJJ camps and academies, each bringing their own strengths and competition strategies. Notable individual performers delivered impressive victories during the event, showcasing technical mastery and physical conditioning. The match outcomes highlighted the different approaches teams took to grappling, from leg lock specialists to wrestlers transitioning to BJJ, from submission hunters to positional grapplers. Team composition proved crucial to success, as the relay format required balanced matchups and strategic ordering of competitors. Victories were distributed across various weight classes and skill divisions, with some standout performances coming from lesser-known competitors who elevated their profile through strong showings. The event's scoring system and team format meant that overall victory depended on cumulative success rather than individual champions, rewarding teams that maintained consistency across all their representatives.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Notable Matches and Moments</h2>
            <p>Quintet 1 produced several memorable matches that showcased diverse grappling styles and high-level competition. Matches featured intense scrambles, technical exchanges, and impressive submissions that highlighted the skill level of participating athletes. The leg lock emphasis by certain competitors brought attention to lower body techniques that were gaining prominence in modern BJJ. Several matches went the distance, with judges making close decisions in competitive bouts that had fans debating the outcomes. Unexpected victories from underdogs created exciting moments and demonstrated that team success couldn't be predicted solely by competitor rankings. Submission victories stood out particularly, with several matches ending impressively through various techniques including heel hooks, guillotines, and arm attacks. The relay format created unique momentum shifts, where strong performances could propel teams ahead or comebacks could narrow deficits. Technical exchanges between high-level grapplers displayed the evolution of BJJ, with competitors demonstrating advanced positional transitions and submission defenses. The event's production quality and broadcast presentation made these moments accessible to a global audience, helping popularize the team-based grappling format.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Historical Significance</h2>
            <p>Quintet 1 holds significant historical importance in Brazilian Jiu-Jitsu as the inaugural event that popularized team-based grappling competitions at the professional level. Prior to Quintet, the BJJ competition landscape was dominated by individual tournaments, particularly IBJJF-sanctioned events. The team relay format introduced by Quintet offered a fresh competitive experience that emphasized squad depth and camaraderie while showcasing technical mastery. The event's success on streaming platforms and its mainstream media attention demonstrated growing interest in alternative BJJ competition formats beyond traditional tournaments. Joe Rogan's involvement brought mainstream visibility to professional grappling, helping elevate the sport's profile in popular culture. Quintet 1 inspired subsequent team-based events and tournaments, establishing a new competitive category within BJJ. The event highlighted rising talent and established veteran competitors, creating opportunities for athletes to gain recognition through team competition. It also sparked discussions about the future of professional grappling, the value of different competition formats, and how teams could be structured for maximum competitive balance. The success of Quintet 1 led directly to future installments, establishing a franchise that continues to influence how high-level BJJ competition is organized and presented.</p>
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
