import type { Metadata } from 'next'
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: 'BJJ Academies Platform | AIBJJ for Gyms',
  description: 'AIBJJ for BJJ academies. Give your students AI coaching, a training journal, and a technique library. Manage curriculum, track student progress, and grow your gym.',
  openGraph: {
    title: 'BJJ Academies Platform | AIBJJ for Gyms',
    description: 'Power your BJJ academy with AI. Student tracking, curriculum tools, and the full AIBJJ platform under your brand.',
    url: 'https://aibjj.com/academies',
  },
}
import {
  BarChart3,
  BookOpen,
  Shield,
  ArrowRight,
  Check,
  Star,
  Calendar,
  MessageSquare,
  Layout,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "For BJJ Academies – AIBJJ",
  description:
    "The all-in-one platform for BJJ academy owners. Track student progress, manage curriculum, log attendance, and communicate with your students — all in one place.",
};

const FEATURES = [
  {
    icon: BarChart3,
    title: "Student Progress Dashboard",
    desc: "See every student's training hours, technique proficiency, and consistency at a glance. Know who's ready to promote before they even ask.",
  },
  {
    icon: BookOpen,
    title: "Curriculum Management",
    desc: "Assign techniques to students by belt level. Build structured programs from white to black belt that students can follow inside the app.",
  },
  {
    icon: Calendar,
    title: "Attendance Tracking",
    desc: "Log session attendance per student. Track who's showing up, who's falling off, and intervene before you lose them.",
  },
  {
    icon: MessageSquare,
    title: "Student Messaging",
    desc: "Send announcements, technique reminders, or personal check-ins directly through the platform. No more chasing people on WhatsApp.",
  },
  {
    icon: Layout,
    title: "Academy Branded Page",
    desc: "Get your own page at aibjj.com/youracademy to send students to. Clean, professional, yours.",
  },
  {
    icon: GraduationCap,
    title: "AI Coach for Every Student",
    desc: "Every student gets access to an AI coach trained on BJJ. They get answers between classes. You get students who show up prepared.",
  },
];

const PRICING = [
  {
    name: "Academy Starter",
    price: "$97",
    period: "/month",
    students: "Up to 50 students",
    features: [
      "Student progress dashboards",
      "Curriculum assignment by belt",
      "Attendance logging",
      "Academy branded page",
      "Student messaging",
      "AI coach for all students",
      "Technique library access",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Academy Pro",
    price: "$197",
    period: "/month",
    students: "Unlimited students",
    features: [
      "Everything in Starter",
      "Unlimited students",
      "Custom domain (youracademy.com)",
      "White-label — your branding only",
      "Course sales & revenue sharing",
      "Advanced analytics & reports",
      "Priority support",
      "Early access to new features",
    ],
    cta: "Go Pro Academy",
    featured: true,
  },
];

const TESTIMONIALS = [
  {
    quote:
      "I used to track student progress in a spreadsheet. Now I can see in 30 seconds which of my 80 students is behind on mat time and who's ready for their next stripe.",
    name: "Academy Owner",
    role: "BJJ Black Belt · 80+ students",
  },
  {
    quote:
      "My students love that they can ask the AI coach questions between classes. They come in better prepared and I spend less time repeating fundamentals.",
    name: "Head Coach",
    role: "BJJ Black Belt · Competitor",
  },
];

async function getAcademies() {
  try {
    const academies = await prisma.user.findMany({
      where: {
        role: "CREATOR",
        academyName: { not: null },
        username: { not: null },
      },
      select: {
        username: true,
        name: true,
        academyName: true,
        profilePhoto: true,
        bio: true,
        belt: true,
        verified: true,
        _count: { select: { courses: true } },
      },
      orderBy: { createdAt: "desc" },
      take: 20,
    });
    return academies;
  } catch {
    return [];
  }
}

const BELT_COLORS: Record<string, string> = {
  WHITE: "bg-white text-black",
  BLUE: "bg-blue-600 text-white",
  PURPLE: "bg-purple-600 text-white",
  BROWN: "bg-amber-800 text-white",
  BLACK: "bg-zinc-800 text-white border border-zinc-600",
};

export default async function AcademiesPage() {
  const academies = await getAcademies();

  return (
    <div className="min-h-screen bg-black text-zinc-100">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/60 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-1 text-xl font-black tracking-tight">
            <span className="text-red-600">AI</span>
            <span className="text-white">BJJ</span>
          </Link>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/auth/signin">Sign In</Link>
            </Button>
            <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white" asChild>
              <Link href="/auth/signup?plan=academy">Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden pt-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-red-600/10 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-24 text-center sm:px-6 sm:pt-32 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-1.5 text-sm text-zinc-300">
            <Shield className="h-4 w-4 text-red-500" />
            Built for Academy Owners
          </div>
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
            Run Your Academy
            <br />
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Like a Pro.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            Track student progress, manage curriculum, log attendance, and communicate with your students — all in one platform built specifically for BJJ academies.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="w-full sm:w-auto px-10 bg-red-600 hover:bg-red-700 text-white" asChild>
              <Link href="/auth/signup?plan=academy">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto px-10 border-zinc-700" asChild>
              <Link href="#pricing">View Pricing</Link>
            </Button>
          </div>
          <p className="mt-4 text-sm text-zinc-600">No credit card required · 14-day free trial · Cancel anytime</p>
        </div>
      </section>

      {/* Pain point */}
      <section className="border-t border-zinc-800/60 bg-zinc-950/60 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl mb-4">
            Running an academy without the right tools is a full-time job.
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            You&apos;re tracking attendance in notebooks, sending messages on WhatsApp, and trying to remember which student needs to work on their guard — while also coaching, teaching, and running a business. There&apos;s a better way.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-500">Features</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything your academy needs
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <Card key={f.title} className="border-zinc-800/60 bg-zinc-900/50 hover:border-red-900/40 transition-all">
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-red-600/10 text-red-500">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base">{f.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-400 leading-relaxed">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founder credibility */}
      <section className="border-t border-zinc-800/60 bg-zinc-950/40 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60">
            <div className="grid md:grid-cols-2">
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <p className="text-sm font-semibold uppercase tracking-widest text-red-500 mb-3">Built by an Academy Owner</p>
                <h2 className="text-2xl font-black tracking-tight sm:text-3xl mb-4">
                  I built this because I needed it.
                </h2>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  I&apos;m a retired U.S. Army Infantry Paratrooper with combat deployments to Afghanistan, Iraq, and Syria. BJJ black belt. Academy owner in Anchorage, Alaska for over 20 years.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  I know exactly what it&apos;s like to be the coach, the manager, the marketer, and the janitor. I built AIBJJ to take at least one of those hats off.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["BJJ Black Belt", "Academy Owner", "Combat Veteran", "Anchorage, AK"].map((tag) => (
                    <span key={tag} className="rounded-full border border-zinc-700 bg-zinc-800/80 px-3 py-1 text-xs font-medium text-zinc-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-center border-t border-zinc-800 bg-zinc-950/60 p-8 sm:border-l sm:border-t-0 sm:p-10">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-red-500 text-red-500" />
                  ))}
                </div>
                <blockquote className="text-lg font-medium leading-relaxed text-zinc-200">
                  &ldquo;I designed the academy features around what I actually needed — not what some tech company thought gym owners needed. There&apos;s a big difference.&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-red-700 to-red-900 text-sm font-black text-white">
                    JB
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-100">Jesse</p>
                    <p className="text-xs text-zinc-500">Founder · Black Belt · 20+ years on the mats</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="border-t border-zinc-800/60 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <Card key={i} className="border-zinc-800/60 bg-zinc-900/50">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-red-500 text-red-500" />
                    ))}
                  </div>
                  <p className="text-zinc-300 leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <p className="font-semibold text-zinc-100">{t.name}</p>
                    <p className="text-xs text-zinc-500">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-zinc-800/60 py-24 sm:py-32 bg-zinc-950/40">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-500">Pricing</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Academy Plans</h2>
            <p className="mt-4 text-zinc-400">14-day free trial on both plans. No credit card required.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 items-start max-w-3xl mx-auto">
            {PRICING.map((tier) => (
              <Card
                key={tier.name}
                className={`flex flex-col ${
                  tier.featured
                    ? "border-red-600/50 bg-zinc-900 shadow-xl shadow-red-950/20"
                    : "border-zinc-800/60 bg-zinc-900/50"
                }`}
              >
                {tier.featured && (
                  <div className="px-6 pt-4">
                    <span className="inline-block rounded-full bg-red-600 px-3 py-0.5 text-xs font-semibold text-white">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl">{tier.name}</CardTitle>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white">{tier.price}</span>
                    <span className="text-zinc-500">{tier.period}</span>
                  </div>
                  <p className="text-sm text-red-400 font-medium mt-1">{tier.students}</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-zinc-300">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full text-base font-semibold ${tier.featured ? "bg-red-600 hover:bg-red-700 text-white" : ""}`}
                    variant={tier.featured ? "default" : "outline"}
                    size="lg"
                    asChild
                  >
                    <Link href="/auth/signup?plan=academy">
                      {tier.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center mt-8 text-sm text-zinc-500">
            Need a custom plan for a large organization?{" "}
            <a href="mailto:academy@aibjj.com" className="text-red-400 hover:text-red-300 underline">
              Contact us
            </a>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-800/60 py-24">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="text-3xl font-black sm:text-4xl mb-4">
            Ready to run a{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              better academy?
            </span>
          </h2>
          <p className="text-zinc-400 mb-8">
            Start your free 14-day trial. No credit card. No commitment. If it doesn&apos;t make your life easier, cancel in one click.
          </p>
          <Button size="lg" className="px-12 bg-red-600 hover:bg-red-700 text-white" asChild>
            <Link href="/auth/signup?plan=academy">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Academy Directory */}
      {academies.length > 0 && (
        <section className="border-t border-zinc-800/60 py-20 bg-zinc-950/40">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-red-500">Directory</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">Academies on AIBJJ</h2>
              <p className="mt-4 text-zinc-400">BJJ academies already using AIBJJ to train smarter.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {academies.map((academy) => (
                <Link
                  key={academy.username}
                  href={`/s/${academy.username}`}
                  className="group rounded-xl border border-zinc-800/60 bg-zinc-900/50 p-5 hover:border-red-900/40 hover:bg-zinc-900 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-lg font-bold text-zinc-300 shrink-0">
                      {academy.profilePhoto ? (
                        <img src={academy.profilePhoto} alt={academy.name || ""} className="h-12 w-12 rounded-xl object-cover" />
                      ) : (
                        (academy.name?.charAt(0) || "A")
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-zinc-100 truncate group-hover:text-red-400 transition-colors">
                        {academy.academyName}
                      </p>
                      <p className="text-sm text-zinc-500 truncate">{academy.name}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold ${BELT_COLORS[academy.belt] || BELT_COLORS.WHITE}`}>
                          {academy.belt.charAt(0) + academy.belt.slice(1).toLowerCase()} Belt
                        </span>
                        {academy._count.courses > 0 && (
                          <span className="text-xs text-zinc-500">{academy._count.courses} courses</span>
                        )}
                        {academy.verified && (
                          <span className="text-xs text-red-400">✓ Verified</span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-zinc-800/60 bg-zinc-950 py-8">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="text-sm text-zinc-600">&copy; {new Date().getFullYear()} AIBJJ. All rights reserved.</p>
          <div className="mt-3 flex justify-center gap-6">
            <Link href="/" className="text-sm text-zinc-500 hover:text-zinc-300">Home</Link>
            <Link href="/pricing" className="text-sm text-zinc-500 hover:text-zinc-300">Pricing</Link>
            <Link href="/affiliates" className="text-sm text-zinc-500 hover:text-zinc-300">Affiliates</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
