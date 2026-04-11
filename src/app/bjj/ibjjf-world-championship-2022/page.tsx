import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "IBJJF World Championship 2022 | AIBJJ",
  description: "Complete coverage of the 2022 IBJJF World Championship in jiu-jitsu. Learn about champions, results, and historic moments.",
};

export default function Page() {
  const tags = ["IBJJF", "World Championship", "BJJ", "Grappling", "2022"];
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
        <h1 className="text-4xl font-black sm:text-5xl">IBJJF World Championship 2022</h1>
        <p className="mt-4 text-xl text-zinc-400">Complete coverage of the 2022 IBJJF World Championship in jiu-jitsu. Learn about champions, results, and historic moments.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Overview</h2>
            <p>The 2022 IBJJF World Championship took place in Long Beach, California, from November 28 to December 4, 2022. This prestigious annual event is considered the most important jiu-jitsu tournament in the world, attracting elite competitors from every continent. The championship featured competitions across all belt levels, from white belt through coral belt, and included both gi and no-gi divisions. Athletes competed in numerous weight categories across multiple age divisions, showcasing the sport's incredible depth and technical mastery. The event served as the culmination of the competitive jiu-jitsu season and offered world ranking points crucial for establishing legitimacy and sponsorship opportunities. Over 3,000 competitors registered for the tournament, making it one of the largest gatherings of jiu-jitsu athletes globally. The championship demonstrated jiu-jitsu's continued growth and the rising standards of competition, with athletes displaying increasingly sophisticated techniques and athletic conditioning.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Results and Champions</h2>
            <p>The 2022 World Championship crowned numerous champions across weight divisions and belt levels. In the black belt absolute division, highly competitive matches determined who would claim the prestigious open-weight title. Notable champions included Erick Cardoso in heavyweight, while other divisions saw intense battles between established names and emerging competitors. The female divisions showcased remarkable talent, with champions like Larissa Paes and other top-level athletes defending their positions at the sport's pinnacle. Multiple-time world champions successfully retained their titles, while new champions emerged, signifying the tournament's role in establishing new leaders in Brazilian jiu-jitsu. The brown belt and purple belt divisions highlighted future stars of the sport, with many competitors using the platform to gain international recognition. The comprehensive results across all divisions reflected the tournament's scale and importance. Medalists earned substantial ranking points that influenced their standing in the global jiu-jitsu hierarchy for the following season.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Notable Matches and Moments</h2>
            <p>The 2022 World Championship featured several memorable matches that demonstrated elite-level grappling. Competitive encounters in the black belt heavyweight and absolute divisions provided technical masterclasses in modern jiu-jitsu, showcasing leg lock systems, guard passing innovations, and submission defense. Several matches went to overtime, emphasizing the closely matched skill levels among world-class competitors. Upset victories by lesser-favored competitors provided dramatic moments throughout the tournament. The female black belt divisions offered exciting performances, with athletes displaying aggressive guard work and advanced passing systems. Several matches highlighted the evolution of leg lock attacks in high-level competition, reflecting broader technical trends in contemporary jiu-jitsu. Young black belts challenged seasoned veterans, creating intergenerational matchups that captivated spectators. The no-gi divisions featured different technical focuses compared to gi competition, with athletes emphasizing wrestling-based approaches and upper body control. Multiple submissions and successful takedowns demonstrated competitors' technical proficiency and competitive intensity at sport's highest level.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Historical Significance</h2>
            <p>The 2022 IBJJF World Championship represented Brazilian jiu-jitsu's maturation as a global sport. The tournament's significant attendance demonstrated jiu-jitsu's exponential growth over the previous decade, with competitors representing dozens of countries competing at unprecedented technical levels. The championship continued the IBJJF's legacy of establishing standards for legitimate world titles and competitive rankings. This event reinforced the sport's professionalization, as top competitors earned sponsorships and prize money through their performances. The technical evolution displayed at 2022 Worlds reflected systematic advancement in training methods, with competitors integrating diverse grappling styles including wrestling, judo, and leg lock systems. The tournament served as a reference point for coaching methodologies worldwide, as athletes and coaches analyzed performances and studied winning strategies. The championship's presence in Long Beach, California emphasized North America's growing importance in jiu-jitsu's global infrastructure. Results from the 2022 Worlds influenced competitive landscapes for years, establishing new benchmark standards and launching athletes toward professional success and legacy status in Brazilian jiu-jitsu history.</p>
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
