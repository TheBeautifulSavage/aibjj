import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Roberto Cyborg Abreu: BJJ Legend & Pioneer | AIBJJ",
  description: "Learn about Roberto Cyborg Abreu, Brazilian Jiu-Jitsu pioneer and multiple-time world champion who revolutionized grappling.",
};

export default function Page() {
  const tags = ["Roberto Cyborg Abreu", "Brazilian Jiu-Jitsu", "BJJ World Champion", "Grappling Legend", "Jiu-Jitsu History"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Roberto Cyborg Abreu: BJJ Legend & Pioneer</h1>
        <p className="mt-4 text-xl text-zinc-400">Learn about Roberto Cyborg Abreu, Brazilian Jiu-Jitsu pioneer and multiple-time world champion who revolutionized grappling.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Roberto Abreu earned the nickname 'Cyborg' for his relentless work ethic and seemingly superhuman grappling abilities. Born and raised in Rio de Janeiro, Brazil, Cyborg was introduced to Brazilian Jiu-Jitsu during his childhood, a sport that would become his life's passion. He began training in the traditional Carioca style, developing under experienced instructors who recognized his natural talent and competitive drive. Cyborg's early years in BJJ were marked by constant refinement of his technique and an obsessive dedication to mastering the fundamentals. His journey through the ranks was relatively swift, as he demonstrated exceptional athleticism combined with intelligent mat awareness. By his teenage years, Cyborg was already competing at high levels within Rio de Janeiro's competitive BJJ scene. His hunger for competition and self-improvement established the foundation for what would become a legendary career spanning multiple decades in professional Brazilian Jiu-Jitsu.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Roberto Cyborg Abreu's competition record stands as one of the most impressive in BJJ history. He won the IBJJF World Championship multiple times across different weight classes, cementing his status as an elite-level competitor. His dominance extended beyond the world stage, with numerous Brazilian national championship titles and Pan-American Championship victories. Cyborg competed professionally during an era of increasingly sophisticated grappling, facing some of the toughest competitors in Brazilian Jiu-Jitsu. His tournament victories demonstrated his ability to adapt his game against diverse opponents and fighting styles. Beyond traditional BJJ competitions, Cyborg also competed in submission wrestling and catch wrestling formats, showcasing his technical versatility. His competitive career spanned several decades, during which he consistently remained among the top-ranked grapplers in his weight division. The longevity of his success at the highest levels speaks to his exceptional physical conditioning, mental toughness, and continuous technical evolution. Many of his tournament victories came through decisive submissions, highlighting his dominant positional control and submission expertise.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Roberto Cyborg Abreu's fighting style was characterized by aggressive pressure-based grappling and exceptional positional dominance. He excelled in top control, utilizing heavy pressure and methodical advancement toward submission opportunities. Cyborg was particularly renowned for his footlock and leg lock arsenal, techniques that were less common in mainstream BJJ during his competitive peak. His leg lock game was ahead of its time, incorporating heel hooks, knee reaping, and other lower body submissions with devastating effectiveness. Beyond leg attacks, Cyborg demonstrated proficiency in upper body submissions, including armlocks, chokes, and shoulder locks executed from dominant positions. His guard passing was considered exemplary, featuring intelligent weight distribution and relentless pressure that made escape extremely difficult for opponents. Cyborg's approach emphasized controlling the center of gravity and maintaining superior positioning throughout the match. He was known for his technical precision, ensuring that every movement served a strategic purpose. His willingness to engage in submission hunting set him apart from competitors who favored point-based strategies, making him a fan favorite for exciting, high-action matches.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Roberto Cyborg Abreu's legacy profoundly influenced the development of modern Brazilian Jiu-Jitsu, particularly regarding leg lock techniques and submission-oriented grappling. During an era when leg locks were considered secondary to upper body submissions, Cyborg demonstrated their effectiveness at the highest competitive levels, inspiring future generations to develop comprehensive lower body grappling systems. His fearless submission hunting approach challenged the conservative positional philosophy that dominated competitive BJJ, encouraging athletes to pursue finishes rather than relying solely on points. Cyborg mentored numerous students who became accomplished competitors and instructors, spreading his technical knowledge throughout the global BJJ community. His influence extends to modern leg lock specialists who cite him as an inspiration for their technical development. Beyond technique, Cyborg exemplified the warrior spirit and relentless work ethic that defines elite grappling. His longevity at the highest competitive level demonstrated that technical excellence and physical conditioning could sustain success across decades. Today, Cyborg is recognized as a pioneering figure in BJJ history, remembered not only for his championship titles but for his contributions to evolving the sport's technical scope and competitive standards.</p>
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
