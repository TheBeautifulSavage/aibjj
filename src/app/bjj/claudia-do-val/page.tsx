import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Claudia Do Val: Brazilian Jiu-Jitsu Pioneer | AIBJJ",
  description: "Learn about Claudia Do Val, influential BJJ athlete and instructor. Career highlights, fighting style, and legacy in Brazilian Jiu-Jitsu.",
};

export default function Page() {
  const tags = ["Claudia Do Val", "Brazilian Jiu-Jitsu", "BJJ Athletes", "Women's Grappling", "BJJ Instructors"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Claudia Do Val: Brazilian Jiu-Jitsu Pioneer</h1>
        <p className="mt-4 text-xl text-zinc-400">Learn about Claudia Do Val, influential BJJ athlete and instructor. Career highlights, fighting style, and legacy in Brazilian Jiu-Jitsu.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Claudia Do Val emerged as a significant figure in Brazilian Jiu-Jitsu during a transformative period for women's grappling. Growing up in Brazil, she was exposed to the rich tradition of BJJ from an early age, eventually developing a serious commitment to the sport that would define her career. Her entry into competitive grappling came during the 1990s and early 2000s, when opportunities for female athletes in BJJ were considerably more limited than today. Despite these challenges, Do Val pursued training with dedication, earning her black belt and establishing herself as a respected instructor and competitor. Her journey reflects the pioneering spirit of early women's BJJ athletes who helped pave the way for future generations. Do Val's background in Brazilian culture and her family's connection to martial arts provided a foundation that shaped her approach to both training and teaching.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Claudia Do Val competed at the highest levels of Brazilian Jiu-Jitsu, participating in major tournaments and championships that tested her skills against elite opponents. Throughout her competitive career, she demonstrated technical proficiency and competitive heart in both gi and no-gi grappling formats. Her achievements in competition established her credibility within the BJJ community and contributed to the growing recognition of women's abilities in the sport. Do Val's tournament performances earned her respect among peers and helped elevate the profile of female grapplers during a crucial period in BJJ history. Beyond individual medals and titles, her competitive legacy includes the matches and rivalries that helped define women's BJJ during her era. Her willingness to compete consistently and challenge herself against quality opponents set an example for aspiring female athletes entering the sport during the 2000s and beyond.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Claudia Do Val's grappling approach reflected the technical foundation of traditional Brazilian Jiu-Jitsu combined with her own strategic innovations. Her fighting style emphasized strong fundamentals, positional control, and precise technique execution. Do Val was known for her ability to manage distance effectively and utilize leverage-based movements that exemplified sound BJJ principles. She employed a methodical approach to competition that prioritized maintaining dominant positions before pursuing submissions. Her technical repertoire included proficiency in leg lock systems, guard passing, and top control positions that allowed her to dominate matches against opponents of varying styles. Do Val's instruction revealed her deep understanding of mechanics and body positioning, demonstrating how proper technique could overcome strength differences. Her teaching legacy emphasizes the timeless aspects of BJJ that remain effective regardless of rule set changes or competitive trends.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Claudia Do Val's contributions to Brazilian Jiu-Jitsu extend beyond her individual competition record to her broader influence on women's grappling and BJJ instruction. As a black belt instructor and academy leader, she has mentored numerous students and helped develop the next generation of Brazilian Jiu-Jitsu athletes. Do Val's presence in the sport during its pivotal growth period contributed to normalizing women's participation and demonstrating that female athletes could compete at elite levels. Her teaching methodology has influenced how technical BJJ is approached and communicated within the community. Do Val's academy has served as a training hub where serious grapplers develop their craft and pursue competition at various levels. Her legacy represents the quiet but significant work of building BJJ infrastructure and culture at the grassroots level, ensuring sustainable growth and quality instruction for aspiring athletes. Through her continued involvement in the sport, Do Val remains a respected elder statesman of Brazilian Jiu-Jitsu.</p>
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
