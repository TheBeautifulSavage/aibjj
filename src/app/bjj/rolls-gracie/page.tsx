import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Rolls Gracie: BJJ Pioneer and Legendary Innovator | AIBJJ",
  description: "Explore Rolls Gracie's revolutionary impact on Brazilian Jiu-Jitsu. Learn about his techniques, competition record, and lasting legacy.",
};

export default function Page() {
  const tags = ["Rolls Gracie", "Brazilian Jiu-Jitsu", "BJJ History", "Gracie Family", "Grappling Legend"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Rolls Gracie: BJJ Pioneer and Legendary Innovator</h1>
        <p className="mt-4 text-xl text-zinc-400">Explore Rolls Gracie's revolutionary impact on Brazilian Jiu-Jitsu. Learn about his techniques, competition record, and lasting legacy.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Rolls Gracie was born in 1951 to Helio Gracie and was immersed in Brazilian Jiu-Jitsu from birth. Growing up in the heart of the Gracie family dynasty in Rio de Janeiro, Rolls demonstrated exceptional talent and innovation from his earliest training days. He trained extensively with his father Helio and other family members, absorbing the technical foundations while developing his own revolutionary approach to the art.

Rolls' early development was marked by his willingness to challenge traditional methods and explore new possibilities within jiu-jitsu. Unlike some family members who strictly adhered to established techniques, Rolls actively experimented with leverage, positioning, and footlock variations. His training methodology combined rigorous conditioning with technical precision, setting him apart as both a thoughtful technician and a committed athlete. By his teenage years, Rolls had already begun earning respect throughout Rio's jiu-jitsu community for his innovative approach and technical excellence.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Rolls Gracie's competition record stands as one of the most impressive in early BJJ history. He dominated Brazilian Jiu-Jitsu competitions throughout the 1970s, winning multiple titles and establishing himself as the most formidable heavyweight competitor of his era. His technical prowess and innovative approaches earned him widespread recognition and respect among competitors and instructors worldwide.

Beyond specific titles, Rolls' true achievement lay in revolutionizing how jiu-jitsu was trained and competed. He brought a scientific approach to the art, studying movement, leverage, and timing with unprecedented depth. His success in competition validated his innovative techniques and training methods, inspiring a generation of grapplers to think beyond traditional boundaries. Rolls' influence extended beyond his personal victories, as his technical innovations and training philosophy influenced how jiu-jitsu was taught and developed globally during a critical period in the art's evolution.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Rolls Gracie was renowned for his technical versatility and signature leg lock mastery, particularly his devastating footlock systems. While the Gracie family traditionally emphasized upper body techniques and positional control, Rolls pioneered advanced lower body attacking sequences that became hallmarks of modern jiu-jitsu. His footlock game was far ahead of its time, combining precise positioning with relentless pressure to submit opponents thought untouchable by leg attacks.

His overall fighting style emphasized leverage over strength, intelligent positioning, and calculated attacks. Rolls demonstrated exceptional mat awareness and the ability to anticipate opponent movements, allowing him to control matches with efficiency. He was equally skilled at wrestling-based takedowns and ground dominance, seamlessly transitioning between positions. His emphasis on cardiovascular conditioning and movement efficiency influenced training methodologies globally. Rolls' technical innovations, particularly in leglock transitions and pressure-based control systems, became fundamental components of modern jiu-jitsu, evident in how elite competitors train today.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Rolls Gracie's legacy profoundly shaped the trajectory of Brazilian Jiu-Jitsu's technical evolution. His pioneering work with footlocks and leg attacks established systems that modern competitors still reference and develop. While his life was tragically cut short in a motorcycle accident in 1982 at age 31, the innovations he introduced continued influencing the sport for decades.

His greatest contribution was demonstrating that jiu-jitsu could be continuously innovated and improved through systematic study and experimentation. Rolls embodied the scientific approach to grappling, treating each technique as a problem to solve through leverage and timing rather than strength. This philosophical approach influenced how modern jiu-jitsu is taught and coached worldwide. Generations of instructors and competitors have built upon Rolls' technical foundations, particularly his leglock systems now considered essential knowledge for serious grapplers. His emphasis on conditioning and efficient movement also became standard in elite jiu-jitsu training. Though his competitive career was relatively brief, Rolls Gracie remains a foundational figure whose technical innovations and training philosophy continue shaping Brazilian Jiu-Jitsu's development.</p>
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
