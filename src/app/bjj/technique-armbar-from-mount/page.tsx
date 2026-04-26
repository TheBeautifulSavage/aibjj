import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Mount Armbar: Complete BJJ Technique Guide | AIBJJ",
  description: "Master the armbar from mount position with step-by-step instructions, key details, and strategic applications for all skill levels.",
};

export default function Page() {
  const tags = ["armbar", "mount position", "submissions", "bjj techniques"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Mount Armbar: Complete BJJ Technique Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the armbar from mount position with step-by-step instructions, key details, and strategic applications for all skill levels.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Armbar?</h2>
            <p>The armbar from mount is one of Brazilian Jiu-Jitsu's most fundamental and effective submissions. It's a joint lock that targets the opponent's elbow, hyperextending the arm when pressure is applied. From the mount position, you control your opponent's upper body while attacking their arm, making this one of the highest-percentage finishing techniques in grappling. The armbar is taught early in BJJ training because it's relatively simple to execute yet devastatingly effective. It works against opponents of all sizes and is legal in every belt level. The beauty of the armbar lies in its simplicity: you trap the arm and rotate your hips to create pressure on the elbow joint. Once properly locked, opponents have limited escape options, making it a staple in both training and competition. Understanding the mount armbar gives you a critical attacking tool from one of grappling's most dominant positions.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Start in a strong mount position with your knees high on your opponent's ribcage and your weight distributed through your hips. Secure a high collar grip with one hand while controlling their opposite shoulder with your other hand. Isolate one of their arms by trapping it across their body. To set up the armbar, post your hand on the mat near their head for balance. Swing your leg over their head in a smooth motion, placing your shin across their throat or neck. This transition is crucial—keep your weight heavy in mount as you begin the swing. Once your leg crosses over, immediately shift your hips up and backward, creating space between you and your opponent. Lock your ankles together on the opposite side of their body. Position your hips to create a V-shape with the trapped arm running through the center. Keep the arm tight against your chest and straighten your legs while pulling on their wrist to complete the submission. The finish comes from rotating your hips upward while maintaining pressure on the elbow joint.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>Control the wrist throughout the technique—never let your opponent's hand come toward their chest, as this relieves pressure on the elbow. Many beginners fail to isolate the arm properly before attempting the technique, giving their opponent escape opportunities. Your shin should be perpendicular to their arm for maximum efficiency; angling it incorrectly reduces leverage. Keep your hips tight to their body during the initial setup; loose positioning allows them to turn into you and escape. A frequent mistake is pulling up on the wrist without straightening your legs—both actions are necessary for a complete lock. Don't post your head hand too close to their body; maintain proper distance so you can rotate fully. Maintain constant downward pressure with your upper body throughout the transition. Your locked ankles should be secure and tight, not loose or positioned too high on the body. Finally, squeeze with your legs while straightening them rather than just pulling with your arms, as your legs generate the most pressure for the finish.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The mount armbar is most effective when you've established dominant control and your opponent is defending their neck or bridge attempts. Use it when your opponent extends their arms to create distance or frames against your chest. If they trap one arm while defending with the other, that exposed arm becomes prime for the armbar. In competition, it's an excellent finishing option when you've accumulated points and want to secure victory. During training, practice it against resisting opponents of similar skill level to develop proper timing and pressure. The armbar is particularly valuable against stronger opponents because it relies on technique and leverage rather than strength. Use it early in rounds when you're fresh and can execute it smoothly. It's also effective after failed escape attempts by your opponent—if they bridge hard or attempt to turn, capitalize immediately. The mount armbar works well in no-gi and gi formats, though the gi allows additional gripping options. It's suitable for all competition levels and training intensities, making it universally applicable to any grappler's toolkit.</p>
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
