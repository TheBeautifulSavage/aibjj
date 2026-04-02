"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Brain,
  BookOpen,
  Library,
  Map,
  BarChart3,
  Store,
  Menu,
  X,
  ChevronRight,
  Star,
  Zap,
  Users,
  Check,
  ArrowRight,
  Globe,
  Video,
  AtSign,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Marketplace", href: "#marketplace" },
];

const EARLY_ACCESS_BADGES = [
  { label: "Early Access", icon: Zap },
  { label: "Founding Members", icon: Users },
  { label: "Beta Platform", icon: Star },
  { label: "Join Now", icon: ArrowRight },
];

const FEATURES = [
  {
    icon: Brain,
    title: "AI Coach",
    description:
      "Get personalized coaching from an AI that understands your game. Ask questions, drill scenarios, and receive real-time feedback tailored to your belt level and style.",
  },
  {
    icon: BookOpen,
    title: "Training Journal",
    description:
      "Log every session with smart templates. Track techniques drilled, sparring notes, injuries, and breakthroughs. Your AI coach learns from every entry.",
  },
  {
    icon: Library,
    title: "Technique Library",
    description:
      "Browse a comprehensive library of over 10,000 techniques with detailed breakdowns, video references, and AI-generated drilling sequences.",
  },
  {
    icon: Map,
    title: "Game Plan Builder",
    description:
      "Build position-by-position game plans with your AI coach. Map out your A-game, identify gaps, and create structured paths from any position.",
  },
  {
    icon: BarChart3,
    title: "Progress Dashboard",
    description:
      "Visualize your journey with detailed analytics. Track mat time, technique repertoire growth, competition results, and training consistency.",
  },
  {
    icon: Store,
    title: "Marketplace",
    description:
      "Discover and share instructionals, game plans, and training programs created by world-class athletes and coaches from around the globe.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Sign Up & Set Your Game",
    description:
      "Create your profile, set your belt level, weight class, and preferred style. The AI adapts to where you are in your journey.",
  },
  {
    number: "02",
    title: "Train, Log & Ask",
    description:
      "Log your sessions, ask your AI coach anything, and drill techniques from the library. The more you use it, the smarter it gets.",
  },
  {
    number: "03",
    title: "Level Up Your Jiu-Jitsu",
    description:
      "Watch your game evolve with data-driven insights, personalized game plans, and a training system that grows with you.",
  },
];

const PRICING_TIERS = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with the essentials",
    features: [
      "5 AI coach messages per day",
      "Basic training journal",
      "Limited technique library (100+)",
      "Community forum access",
      "Belt progress tracking",
    ],
    cta: "Start Free",
    featured: false,
  },
  {
    name: "Pro",
    price: "$14.99",
    period: "/month",
    description: "Everything you need to accelerate your game",
    features: [
      "Unlimited AI coach messages",
      "Full journal with analytics",
      "Complete technique library (10,000+)",
      "Game plan builder",
      "Progress dashboard & insights",
      "Marketplace access",
      "Priority support",
    ],
    cta: "Go Pro",
    featured: true,
  },
  {
    name: "Annual",
    price: "$99",
    period: "/year",
    description: "Best value -- save $80 per year",
    features: [
      "Everything in Pro",
      "Save $80/year vs monthly",
      "Exclusive instructional content",
      "Early access to new features",
      "Custom AI coach personality",
      "Competition prep mode",
      "1-on-1 onboarding session",
    ],
    cta: "Save $80/year",
    featured: false,
  },
];

const TESTIMONIALS = [
  {
    quote:
      "AIBJJ completely changed how I approach training. The AI coach helped me identify holes in my guard game I didn't even know existed. I went from getting passed constantly to having one of the best guards in my gym.",
    name: "Marcus Rivera",
    role: "Purple Belt, 3 years on the platform",
    avatar: "MR",
  },
  {
    quote:
      "As a coach running a 200-student academy, the training journal and analytics save me hours every week. I can see exactly where each student needs work and tailor my classes accordingly.",
    name: "Sarah Chen",
    role: "Black Belt, Academy Owner",
    avatar: "SC",
  },
  {
    quote:
      "I used the Game Plan Builder to prep for Pans and won gold at my weight class. Having a structured, position-by-position plan that my AI coach helped me refine was an absolute game-changer.",
    name: "Diego Almeida",
    role: "Brown Belt, IBJJF Competitor",
    avatar: "DA",
  },
  {
    quote:
      "The technique library is insane. I was stuck at blue belt for two years. Within six months of using AIBJJ daily, my coach promoted me to purple. The AI just knows what you need to work on next.",
    name: "Jake Thompson",
    role: "Purple Belt, Hobbyist",
    avatar: "JT",
  },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-zinc-100">
      {/* ----------------------------------------------------------------- */}
      {/* Navigation                                                        */}
      {/* ----------------------------------------------------------------- */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/60 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 text-xl font-black tracking-tight">
            <span className="text-red-600">AI</span>
            <span className="text-white">BJJ</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 md:flex">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/auth/signin">Sign In</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/auth/signup">Get Started</Link>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:text-white md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="border-t border-zinc-800 bg-black/95 backdrop-blur-xl md:hidden">
            <div className="space-y-1 px-4 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-zinc-300 hover:bg-zinc-900 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="outline" asChild>
                  <Link href="/auth/signin">Sign In</Link>
                </Button>
                <Button asChild>
                  <Link href="/auth/signup">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* ----------------------------------------------------------------- */}
      {/* Hero                                                              */}
      {/* ----------------------------------------------------------------- */}
      <section className="relative overflow-hidden pt-16">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-red-600/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-24 sm:px-6 sm:pb-28 sm:pt-32 lg:px-8 lg:pb-36 lg:pt-40">
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-1.5 text-sm text-zinc-300">
              <Zap className="h-4 w-4 text-red-500" />
              Now powered by advanced AI models
              <ChevronRight className="h-3 w-3 text-zinc-500" />
            </div>

            <h1 className="text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              Your{" "}
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                AI-Powered
              </span>{" "}
              Jiu-Jitsu Coach
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
              The all-in-one platform for BJJ athletes. AI coaching that learns your game,
              an intelligent training journal, a massive technique library, and a marketplace
              built by the community.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="w-full sm:w-auto text-base px-8" asChild>
                <Link href="/auth/signup">
                  Start Free — No Credit Card
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-base px-8" asChild>
                <Link href="/creator-setup">Claim Your Creator Page</Link>
              </Button>
            </div>

            {/* Early Access Badges */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
              {EARLY_ACCESS_BADGES.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/80 px-4 py-2 text-sm font-medium text-zinc-300"
                >
                  <badge.icon className="h-4 w-4 text-red-500" />
                  {badge.label}
                </div>
              ))}
            </div>

            {/* Comparison Table */}
            <div className="mx-auto mt-20 max-w-2xl">
              <h3 className="text-center text-lg font-bold text-zinc-300 mb-6">Why Creators Choose AIBJJ</h3>
              <div className="overflow-hidden rounded-xl border border-zinc-800">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-800 bg-zinc-900/80">
                      <th className="px-6 py-3 text-left font-medium text-zinc-400">Feature</th>
                      <th className="px-6 py-3 text-center font-bold text-red-500">AIBJJ</th>
                      <th className="px-6 py-3 text-center font-medium text-zinc-500">BJJ Fanatics</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800/50">
                    {[
                      ["Platform Fee", "15%", "40-50%"],
                      ["Custom Website", "✅ Free", "❌"],
                      ["AI Blog", "✅ Included", "❌"],
                      ["Custom Domain", "✅ $29/mo", "❌"],
                      ["AI Coach", "✅ Included", "❌"],
                      ["Technique Library", "✅ 510+", "❌"],
                    ].map(([feature, aibjj, fanatics]) => (
                      <tr key={feature} className="bg-zinc-950/50 hover:bg-zinc-900/50 transition-colors">
                        <td className="px-6 py-3 font-medium text-zinc-300">{feature}</td>
                        <td className="px-6 py-3 text-center font-semibold text-green-400">{aibjj}</td>
                        <td className="px-6 py-3 text-center text-zinc-500">{fanatics}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Features                                                          */}
      {/* ----------------------------------------------------------------- */}
      <section id="features" className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-500">
              Features
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to master the mats
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              From white belt to black belt, AIBJJ gives you the tools, insights, and
              intelligence to elevate every aspect of your training.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <Card
                key={feature.title}
                className="group relative overflow-hidden border-zinc-800/60 bg-zinc-900/50 transition-all duration-300 hover:border-red-900/40 hover:bg-zinc-900/80 hover:shadow-lg hover:shadow-red-950/10"
              >
                <CardHeader>
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-red-600/10 text-red-500 transition-colors group-hover:bg-red-600/20">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Built for Serious Grapplers                                       */}
      {/* ----------------------------------------------------------------- */}
      <section className="relative border-t border-zinc-800/60 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-500">Built for Every Level</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Built for serious grapplers
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              From hobbyist to world champion level — AIBJJ is built to meet you where you are and take you further.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Hobbyists & Beginners",
                description: "Just starting your journey? The AI coach adapts to your level, answers every question without judgment, and builds your foundation from day one.",
              },
              {
                icon: BarChart3,
                title: "Competitors",
                description: "Training for IBJJF, ADCC qualifiers, or local tourneys? Use game plan builder and progress analytics to sharpen your edge before fight day.",
              },
              {
                icon: BookOpen,
                title: "Coaches & Academy Owners",
                description: "Track your students, build curriculum, and run your academy's content — all in one place. Spend less time on admin, more time on the mats.",
              },
            ].map((item) => (
              <Card key={item.title} className="group border-zinc-800/60 bg-zinc-900/50 hover:border-red-900/40 transition-all">
                <CardHeader>
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-red-600/10 text-red-500 group-hover:bg-red-600/20 transition-colors">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* How It Works                                                      */}
      {/* ----------------------------------------------------------------- */}
      <section id="how-it-works" className="relative border-t border-zinc-800/60 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-500">
              How It Works
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Three steps to better Jiu-Jitsu
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {STEPS.map((step, idx) => (
              <div key={step.number} className="relative text-center md:text-left">
                {/* Connector line (desktop only) */}
                {idx < STEPS.length - 1 && (
                  <div className="absolute right-0 top-8 hidden h-px w-full translate-x-1/2 bg-gradient-to-r from-zinc-700 to-transparent md:block" />
                )}
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 text-2xl font-black text-red-500">
                  {step.number}
                </div>
                <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Pricing                                                           */}
      {/* ----------------------------------------------------------------- */}
      <section id="pricing" className="relative border-t border-zinc-800/60 py-24 sm:py-32">
        {/* Glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-red-600/5 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-500">
              Pricing
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Simple pricing, serious results
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              Start free. Upgrade when you are ready to unlock your full potential.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {PRICING_TIERS.map((tier) => (
              <Card
                key={tier.name}
                className={`relative flex flex-col overflow-hidden transition-all duration-300 ${
                  tier.featured
                    ? "border-red-600/50 bg-zinc-900 shadow-xl shadow-red-950/20 lg:scale-105"
                    : "border-zinc-800/60 bg-zinc-900/50 hover:border-zinc-700"
                }`}
              >
                {tier.featured && (
                  <div className="absolute right-4 top-4 rounded-full bg-red-600 px-3 py-0.5 text-xs font-semibold text-white">
                    Most Popular
                  </div>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-bold">{tier.name}</CardTitle>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white">{tier.price}</span>
                    <span className="text-zinc-500">{tier.period}</span>
                  </div>
                  <CardDescription className="mt-2">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-zinc-300">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={tier.featured ? "default" : "outline"}
                    size="lg"
                    asChild
                  >
                    <Link href="/auth/signup">{tier.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Testimonials                                                      */}
      {/* ----------------------------------------------------------------- */}
      <section className="relative border-t border-zinc-800/60 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-500">
              Testimonials
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Trusted by grapplers worldwide
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TESTIMONIALS.map((t) => (
              <Card
                key={t.name}
                className="flex flex-col border-zinc-800/60 bg-zinc-900/50"
              >
                <CardContent className="flex-1 pt-6">
                  {/* Stars */}
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-red-500 text-red-500" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-300">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </CardContent>
                <CardFooter className="gap-3 border-t border-zinc-800/60 pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600/20 text-sm font-bold text-red-400">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-zinc-500">{t.role}</p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Why AIBJJ / Founder Credibility                                   */}
      {/* ----------------------------------------------------------------- */}
      <section className="relative border-t border-zinc-800/60 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60">
            <div className="grid gap-0 md:grid-cols-2">
              {/* Left: badge + copy */}
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <p className="text-sm font-semibold uppercase tracking-widest text-red-500">Why AIBJJ</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  Built by someone who&apos;s been on the mats for 20 years.
                </h2>
                <p className="mt-5 text-zinc-400 leading-relaxed">
                  AIBJJ was built by a retired U.S. Army Infantry Paratrooper with combat deployments to Afghanistan, Iraq, and Syria — and a BJJ black belt who&apos;s been running his own academy in Anchorage, Alaska for over two decades.
                </p>
                <p className="mt-4 text-zinc-400 leading-relaxed">
                  This isn&apos;t some tech startup that discovered jiu-jitsu last year. Every feature was designed from the perspective of someone who has bled on the mats, coached hundreds of students, and lived this art at every level.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "BJJ Black Belt",
                    "Academy Owner",
                    "Combat Veteran",
                    "20+ Years on the Mats",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-zinc-700 bg-zinc-800/80 px-3 py-1 text-xs font-medium text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: quote block */}
              <div className="flex flex-col justify-center border-t border-zinc-800 bg-zinc-950/60 p-8 sm:border-l sm:border-t-0 sm:p-10">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-red-500 text-red-500" />
                  ))}
                </div>
                <blockquote className="text-lg font-medium leading-relaxed text-zinc-200">
                  &ldquo;I built the tool I always wished existed. Something that actually thinks about jiu-jitsu the way a coach does — not just a search engine with a chat box.&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-red-700 to-red-900 text-sm font-black text-white">
                    JB
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-100">Jesse</p>
                    <p className="text-xs text-zinc-500">Founder · BJJ Black Belt · U.S. Army Veteran</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Final CTA                                                         */}
      {/* ----------------------------------------------------------------- */}
      <section className="relative border-t border-zinc-800/60">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-red-600/8 blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:py-32">
          <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
            Ready to transform your{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Jiu-Jitsu
            </span>
            ?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-400">
            Join thousands of athletes who are using AI to train smarter, learn faster, and
            compete harder. Your next belt is closer than you think.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto text-base px-8" asChild>
              <Link href="/auth/signup">
                Get Started for Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-base px-8" asChild>
              <Link href="#pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Footer                                                            */}
      {/* ----------------------------------------------------------------- */}
      <footer className="border-t border-zinc-800/60 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link href="/" className="text-xl font-black tracking-tight">
                <span className="text-red-600">AI</span>
                <span className="text-white">BJJ</span>
              </Link>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                The AI-powered platform for Brazilian Jiu-Jitsu athletes at every level.
              </p>
              <div className="mt-4 flex gap-3">
                <a href="#" className="text-zinc-600 transition-colors hover:text-zinc-300" aria-label="Social">
                  <AtSign className="h-5 w-5" />
                </a>
                <a href="#" className="text-zinc-600 transition-colors hover:text-zinc-300" aria-label="Video">
                  <Video className="h-5 w-5" />
                </a>
                <a href="#" className="text-zinc-600 transition-colors hover:text-zinc-300" aria-label="Community">
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a href="#" className="text-zinc-600 transition-colors hover:text-zinc-300" aria-label="Website">
                  <Globe className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-sm font-semibold text-zinc-300">Product</h4>
              <ul className="mt-3 space-y-2">
                {["AI Coach", "Training Journal", "Technique Library", "Game Plans", "Marketplace"].map(
                  (item) => (
                    <li key={item}>
                      <Link href="#" className="text-sm text-zinc-500 transition-colors hover:text-zinc-300">
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-semibold text-zinc-300">Company</h4>
              <ul className="mt-3 space-y-2">
                {["About", "Blog", "Careers", "Press", "Partners"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-zinc-500 transition-colors hover:text-zinc-300">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm font-semibold text-zinc-300">Legal</h4>
              <ul className="mt-3 space-y-2">
                {["Privacy Policy", "Terms of Service", "Cookie Policy", "Contact"].map(
                  (item) => (
                    <li key={item}>
                      <Link href="#" className="text-sm text-zinc-500 transition-colors hover:text-zinc-300">
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-800/60 pt-8 sm:flex-row">
            <p className="text-sm text-zinc-600">
              &copy; {new Date().getFullYear()} AIBJJ. All rights reserved.
            </p>
            <p className="text-sm text-zinc-700">
              Built for the gentle art.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
