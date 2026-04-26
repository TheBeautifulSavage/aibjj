"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Check,
  X,
  Zap,
  Crown,
  Star,
  Shield,
  Menu,
  ChevronRight,
  ArrowRight,
  Globe,
  AtSign,
  Rss,
  MessageCircle,
  Infinity,
  Loader2,
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
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const NAV_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/pricing" },
  { label: "For Creators", href: "/pricing#creators" },
  { label: "Marketplace", href: "/#marketplace" },
];

const PRICING_TIERS = [
  {
    key: "free",
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Get started with the essentials",
    icon: Shield,
    features: [
      "5 AI Coach messages per day",
      "Basic training journal",
      "Limited technique library (white belt only)",
    ],
    cta: "Get Started Free",
    ctaHref: "/auth/signup",
    featured: false,
    variant: "outline" as const,
    isLifetime: false,
  },
  {
    key: "pro",
    name: "Pro",
    price: "$19.99",
    period: "/month",
    description: "Everything you need to accelerate your game",
    icon: Zap,
    features: [
      "Unlimited AI Coach conversations",
      "Full training journal with analytics",
      "Complete technique library (all belts)",
      "Game plan builder",
      "Progress dashboard & charts",
      "Priority support",
    ],
    cta: "Start Pro Trial",
    ctaHref: "/auth/signup?plan=pro",
    featured: true,
    variant: "default" as const,
    isLifetime: false,
  },
  {
    key: "annual",
    name: "Annual",
    price: "$149",
    period: "/year",
    savings: "Save $91!",
    description: "Best value for committed grapplers",
    icon: Crown,
    features: [
      "Everything in Pro",
      "Save $91 vs monthly",
      "Exclusive creator content",
      "Early access to new features",
    ],
    cta: "Go Annual",
    ctaHref: "/auth/signup?plan=annual",
    featured: false,
    variant: "outline" as const,
    isLifetime: false,
  },
  {
    key: "lifetime",
    name: "Lifetime",
    price: "$249",
    period: "one-time",
    savings: "Only 500 spots!",
    description: "Pay once, train forever. Founding member status.",
    icon: Infinity,
    features: [
      "Everything in Pro, forever",
      "No subscription — ever",
      "Founding member badge on profile",
      "Priority support (front of the line)",
      "All future features included",
      "Lock in before price increases",
    ],
    cta: "Claim Lifetime Access",
    ctaHref: "#lifetime-checkout",
    featured: false,
    variant: "outline" as const,
    isLifetime: true,
  },
];

const COMPARISON_FEATURES = [
  {
    name: "AI Coach Messages",
    free: "5/day",
    pro: "Unlimited",
    annual: "Unlimited",
    lifetime: "Unlimited",
  },
  {
    name: "Training Journal",
    free: "Basic",
    pro: "Full + Analytics",
    annual: "Full + Analytics",
    lifetime: "Full + Analytics",
  },
  {
    name: "Technique Library",
    free: "White belt only",
    pro: "All belts",
    annual: "All belts",
    lifetime: "All belts",
  },
  {
    name: "Game Plan Builder",
    free: false,
    pro: true,
    annual: true,
    lifetime: true,
  },
  {
    name: "Progress Dashboard",
    free: false,
    pro: true,
    annual: true,
    lifetime: true,
  },
  {
    name: "Creator Content Access",
    free: false,
    pro: false,
    annual: true,
    lifetime: true,
  },
  {
    name: "Priority Support",
    free: false,
    pro: true,
    annual: true,
    lifetime: "Priority",
  },
  {
    name: "Founding Member Badge",
    free: false,
    pro: false,
    annual: false,
    lifetime: true,
  },
  {
    name: "Monthly Fee",
    free: "$0",
    pro: "$19.99/mo",
    annual: "$12.42/mo",
    lifetime: "Never",
  },
];

const PLATFORM_COMPARISON = [
  { feature: "AI Coach", aibjjFree: "5/day", aibjjPro: "Unlimited", others: "❌ None" },
  { feature: "Training Journal", aibjjFree: "✅", aibjjPro: "✅", others: "❌ Manual only" },
  { feature: "Cancel Anytime", aibjjFree: "✅", aibjjPro: "✅", others: "⚠️ Complicated" },
  { feature: "Ads", aibjjFree: "Never", aibjjPro: "Never", others: "Some inject ads" },
  { feature: "Progress Tracking", aibjjFree: "✅", aibjjPro: "✅", others: "❌" },
  { feature: "Structured Curriculum", aibjjFree: "✅", aibjjPro: "✅", others: "❌ Browse only" },
  { feature: "Lifetime Option", aibjjFree: "—", aibjjPro: "$249", others: "❌ Never" },
];

const FAQ_ITEMS = [
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes, absolutely. You can cancel your subscription at any time from your account settings. Your Pro features will remain active until the end of your current billing period. No cancellation fees, no hassle.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes! When you sign up for Pro, you get a 7-day free trial with full access to all Pro features. You will not be charged until the trial ends, and you can cancel at any time during the trial period.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards (Visa, Mastercard, American Express) as well as Apple Pay and Google Pay. All payments are securely processed through Stripe.",
  },
  {
    question: "Can I upgrade or downgrade later?",
    answer:
      "Of course. You can switch between plans at any time. When upgrading, you will be prorated for the remainder of your billing cycle. When downgrading, the change takes effect at the start of your next billing period.",
  },
  {
    question: "Do you offer team or academy pricing?",
    answer:
      "Yes! We offer special pricing for academies and teams with 10 or more members. Contact us at team@aibjj.com for a custom quote tailored to your academy's needs.",
  },
  {
    question: "How does the creator platform work?",
    answer:
      "Sign up for free, claim your subdomain (yourname.aibjj.com), upload your courses, and start selling immediately. We only take 15% on sales — compared to BJJ Fanatics which takes 40-50%. You keep 85% of every sale, get your own branded page, and we handle all the payments and hosting.",
  },
  {
    question: "Why is AIBJJ better than BJJ Fanatics for creators?",
    answer:
      "Three reasons: 1) You keep 85% vs 50-60% on Fanatics. 2) You get your own branded subdomain that looks like your own website, not ours. 3) Zero upfront cost — uploading courses is free. Fanatics charges creators and takes a massive cut. We believe creators should keep more of what they earn.",
  },
];

// ---------------------------------------------------------------------------
// Helper: render comparison cell value
// ---------------------------------------------------------------------------
function ComparisonCell({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
    if (value === "✅") return <Check className="mx-auto h-5 w-5 text-red-500" />;
    if (value === "❌") return <X className="mx-auto h-5 w-5 text-zinc-700" />;
    return <span className="text-sm text-zinc-300">{value}</span>;
  }
  return value ? (
    <Check className="mx-auto h-5 w-5 text-red-500" />
  ) : (
    <X className="mx-auto h-5 w-5 text-zinc-700" />
  );
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function PricingPageClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lifetimeLoading, setLifetimeLoading] = useState(false);

  async function handleLifetimeCheckout() {
    setLifetimeLoading(true);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planType: "LIFETIME" }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else if (data.error) {
        // If not signed in, redirect to signup
        window.location.href = "/auth/signup?plan=lifetime";
      }
    } catch {
      window.location.href = "/auth/signup?plan=lifetime";
    } finally {
      setLifetimeLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-black text-zinc-100">
      {/* ----------------------------------------------------------------- */}
      {/* Navigation                                                        */}
      {/* ----------------------------------------------------------------- */}
{/* ----------------------------------------------------------------- */}
      {/* Hero                                                              */}
      {/* ----------------------------------------------------------------- */}
      <section className="relative overflow-hidden pt-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-red-600/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-20 sm:px-6 sm:pt-28 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-1.5 text-sm text-zinc-300">
              <Star className="h-4 w-4 text-red-500" />
              Simple, transparent pricing
              <ChevronRight className="h-3 w-3 text-zinc-500" />
            </div>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              No BS.{" "}
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                Just BJJ.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
              AIBJJ pricing is simple. No tricks, no predatory annual billing, no ads injected into paid content.
            </p>

            {/* Trust badges */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 max-w-2xl mx-auto">
              {[
                { icon: Check, text: "Cancel anytime in 2 clicks" },
                { icon: Check, text: "No auto-renew surprises" },
                { icon: Check, text: "Your data is yours" },
                { icon: Check, text: "Built by a black belt, not a tech company" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-2 rounded-lg border border-zinc-800/60 bg-zinc-900/50 p-3 text-left">
                  <item.icon className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-300">{item.text}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-zinc-500">
              Other platforms hide cancellation, inject ads into paid content, and lock you into annual contracts. We don't. Every plan can be cancelled in 2 clicks from your account settings.
            </p>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Pricing Cards                                                     */}
      {/* ----------------------------------------------------------------- */}
      <section className="relative pb-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-6 lg:grid-cols-4">
            {PRICING_TIERS.map((tier) => (
              <Card
                key={tier.key}
                className={cn(
                  "relative flex flex-col overflow-hidden transition-all duration-300",
                  tier.featured
                    ? "border-red-600/50 bg-zinc-900 shadow-2xl shadow-red-950/30 lg:scale-[1.05] lg:py-4 z-10"
                    : tier.isLifetime
                    ? "border-amber-500/50 bg-gradient-to-b from-amber-950/30 to-zinc-900 shadow-xl shadow-amber-950/20"
                    : "border-zinc-800/60 bg-zinc-900/50 hover:border-zinc-700"
                )}
              >
                {tier.featured && (
                  <Badge className="absolute right-4 top-4 border-0 bg-red-600 text-white hover:bg-red-600">
                    Most Popular
                  </Badge>
                )}
                {tier.isLifetime && (
                  <Badge className="absolute right-4 top-4 border-0 bg-amber-500 text-black font-bold hover:bg-amber-500">
                    🔥 Limited
                  </Badge>
                )}

                <CardHeader className="pb-4">
                  <div className={cn(
                    "mb-3 flex h-11 w-11 items-center justify-center rounded-lg",
                    tier.isLifetime ? "bg-amber-500/20 text-amber-400" : "bg-red-600/10 text-red-500"
                  )}>
                    <tier.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className={cn("text-xl font-bold", tier.isLifetime && "text-amber-300")}>
                    {tier.name}
                  </CardTitle>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className={cn("text-5xl font-black", tier.isLifetime ? "text-amber-300" : "text-white")}>
                      {tier.price}
                    </span>
                    <span className="text-zinc-500">{tier.period}</span>
                  </div>
                  {tier.savings && (
                    <Badge
                      variant="outline"
                      className={cn(
                        "mt-2 w-fit",
                        tier.isLifetime
                          ? "border-amber-500/40 bg-amber-500/10 text-amber-400"
                          : "border-green-600/40 bg-green-600/10 text-green-400"
                      )}
                    >
                      {tier.savings}
                    </Badge>
                  )}
                  <CardDescription className="mt-2">
                    {tier.description}
                  </CardDescription>
                </CardHeader>

                <Separator className={tier.isLifetime ? "bg-amber-800/40" : "bg-zinc-800/60"} />

                <CardContent className="flex-1 pt-6">
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-zinc-300"
                      >
                        <Check className={cn("mt-0.5 h-4 w-4 flex-shrink-0", tier.isLifetime ? "text-amber-500" : "text-red-500")} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-2">
                  {tier.isLifetime ? (
                    <Button
                      className="w-full text-base font-semibold bg-amber-500 text-black shadow-lg shadow-amber-900/30 hover:bg-amber-400"
                      size="lg"
                      onClick={handleLifetimeCheckout}
                      disabled={lifetimeLoading}
                    >
                      {lifetimeLoading ? (
                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      ) : null}
                      {tier.cta}
                      {!lifetimeLoading && <ArrowRight className="ml-2 h-4 w-4" />}
                    </Button>
                  ) : (
                    <Button
                      className={cn(
                        "w-full text-base font-semibold",
                        tier.featured &&
                          "bg-red-600 text-white shadow-lg shadow-red-900/30 hover:bg-red-700"
                      )}
                      variant={tier.variant}
                      size="lg"
                      asChild
                    >
                      <Link href={tier.ctaHref}>
                        {tier.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-zinc-500">
            All plans include a 7-day money-back guarantee. No questions asked. Cancel in 2 clicks anytime.
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Feature Comparison Table                                          */}
      {/* ----------------------------------------------------------------- */}
      <section className="relative border-t border-zinc-800/60 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Compare Plans
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              See exactly what you get with each plan
            </p>
          </div>

          {/* Desktop table */}
          <div className="mt-16 hidden md:block">
            <div className="overflow-hidden rounded-xl border border-zinc-800/60">
              {/* Header */}
              <div className="grid grid-cols-5 border-b border-zinc-800/60 bg-zinc-900/80">
                <div className="p-4 text-sm font-semibold text-zinc-400">Feature</div>
                <div className="p-4 text-center text-sm font-semibold text-zinc-300">Free</div>
                <div className="p-4 text-center text-sm font-semibold text-red-400">Pro</div>
                <div className="p-4 text-center text-sm font-semibold text-zinc-300">Annual</div>
                <div className="p-4 text-center text-sm font-semibold text-amber-400">Lifetime</div>
              </div>

              {/* Rows */}
              {COMPARISON_FEATURES.map((feature, idx) => (
                <div
                  key={feature.name}
                  className={cn(
                    "grid grid-cols-5",
                    idx < COMPARISON_FEATURES.length - 1 && "border-b border-zinc-800/40",
                    idx % 2 === 0 ? "bg-zinc-950/50" : "bg-zinc-900/30"
                  )}
                >
                  <div className="flex items-center p-4 text-sm font-medium text-zinc-300">{feature.name}</div>
                  <div className="flex items-center justify-center p-4"><ComparisonCell value={feature.free} /></div>
                  <div className="flex items-center justify-center p-4"><ComparisonCell value={feature.pro} /></div>
                  <div className="flex items-center justify-center p-4"><ComparisonCell value={feature.annual} /></div>
                  <div className="flex items-center justify-center p-4"><ComparisonCell value={feature.lifetime} /></div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile accordion */}
          <div className="mt-12 md:hidden">
            <Accordion type="single" collapsible className="space-y-3">
              {COMPARISON_FEATURES.map((feature) => (
                <AccordionItem
                  key={feature.name}
                  value={feature.name}
                  className="rounded-lg border border-zinc-800/60 bg-zinc-900/50 px-4"
                >
                  <AccordionTrigger className="text-sm font-medium">{feature.name}</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {[
                        { label: "Free", value: feature.free },
                        { label: "Pro", value: feature.pro },
                        { label: "Annual", value: feature.annual },
                        { label: "Lifetime", value: feature.lifetime },
                      ].map((plan) => (
                        <div key={plan.label} className="flex items-center justify-between text-sm">
                          <span className={cn("text-zinc-500", plan.label === "Lifetime" && "text-amber-600")}>{plan.label}</span>
                          <ComparisonCell value={plan.value} />
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Platform comparison (No BS table) */}
          <div className="mt-16">
            <h3 className="text-xl font-bold text-center mb-2">AIBJJ vs Other Platforms</h3>
            <p className="text-center text-sm text-zinc-500 mb-8">We don't name names — but you know who they are.</p>
            <div className="hidden md:block overflow-hidden rounded-xl border border-zinc-800/60">
              <div className="grid grid-cols-4 border-b border-zinc-800/60 bg-zinc-900/80">
                <div className="p-4 text-sm font-semibold text-zinc-400">Feature</div>
                <div className="p-4 text-center text-sm font-semibold text-zinc-300">AIBJJ Free</div>
                <div className="p-4 text-center text-sm font-semibold text-red-400">AIBJJ Pro</div>
                <div className="p-4 text-center text-sm font-semibold text-zinc-500">Other Platforms</div>
              </div>
              {PLATFORM_COMPARISON.map((row, idx) => (
                <div key={row.feature} className={cn("grid grid-cols-4", idx % 2 === 0 ? "bg-zinc-950/50" : "bg-zinc-900/30")}>
                  <div className="flex items-center p-4 text-sm font-medium text-zinc-300">{row.feature}</div>
                  <div className="flex items-center justify-center p-4"><span className="text-sm text-zinc-300">{row.aibjjFree}</span></div>
                  <div className="flex items-center justify-center p-4"><span className="text-sm text-zinc-300">{row.aibjjPro}</span></div>
                  <div className="flex items-center justify-center p-4"><span className="text-sm text-zinc-500">{row.others}</span></div>
                </div>
              ))}
            </div>
            {/* Mobile */}
            <div className="md:hidden space-y-3">
              {PLATFORM_COMPARISON.map((row) => (
                <div key={row.feature} className="rounded-lg border border-zinc-800/60 bg-zinc-900/50 p-4">
                  <p className="text-sm font-medium text-zinc-300 mb-2">{row.feature}</p>
                  <div className="grid grid-cols-3 gap-2 text-xs text-center">
                    <div><p className="text-zinc-500 mb-1">AIBJJ Free</p><p className="text-zinc-300">{row.aibjjFree}</p></div>
                    <div><p className="text-red-500 mb-1">AIBJJ Pro</p><p className="text-zinc-300">{row.aibjjPro}</p></div>
                    <div><p className="text-zinc-600 mb-1">Others</p><p className="text-zinc-500">{row.others}</p></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-xl border border-emerald-600/20 bg-emerald-600/5 p-6 text-center">
              <p className="text-lg font-semibold text-zinc-100">
                The difference is simple: we're built <span className="text-emerald-400">for athletes</span>, not for ad revenue.
              </p>
              <p className="mt-1 text-zinc-400 text-sm">
                No dark patterns. No ads in paid content. No making it hard to cancel. Just BJJ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Creator Pricing                                                   */}
      {/* ----------------------------------------------------------------- */}
      <section className="relative border-t border-zinc-800/60 py-24 sm:py-32" id="creators">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-6 border-0 bg-red-600/10 text-red-400 hover:bg-red-600/10">
              For Creators
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Teach BJJ. Keep{" "}
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                85-92%
              </span>{" "}
              of Your Sales.
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              BJJ Fanatics takes 40-50% of your revenue. We take as little as 8%. Upload courses for free,
              get your own subdomain, and start earning from day one.
            </p>
          </div>

          <div className="mt-16 grid items-start gap-6 lg:grid-cols-3">
            {/* FREE Creator */}
            <Card className="relative flex flex-col border-zinc-800/60 bg-zinc-900/50 hover:border-zinc-700 transition-all">
              <CardHeader className="pb-4">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-zinc-800 text-zinc-400">
                  <Shield className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl font-bold">Free Creator</CardTitle>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-5xl font-black text-white">$0</span>
                  <span className="text-zinc-500">/month</span>
                </div>
                <Badge variant="outline" className="mt-2 w-fit border-green-600/40 bg-green-600/10 text-green-400">
                  15% platform fee
                </Badge>
                <CardDescription className="mt-2">
                  Everything you need to start selling courses
                </CardDescription>
              </CardHeader>
              <Separator className="bg-zinc-800/60" />
              <CardContent className="flex-1 pt-6">
                <ul className="space-y-3">
                  {[
                    "Your subdomain (username.aibjj.com)",
                    "1 page template",
                    "Unlimited course uploads",
                    "AI blog",
                    "Basic analytics",
                    "Instant payouts via Stripe",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-zinc-300">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-2">
                <Button className="w-full text-base font-semibold" variant="outline" size="lg" asChild>
                  <Link href="/creator-setup">
                    Claim Your Free Page
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* PRO Creator */}
            <Card className="relative flex flex-col border-red-600/50 bg-zinc-900 shadow-2xl shadow-red-950/30 lg:scale-[1.05] lg:py-4 z-10 transition-all">
              <Badge className="absolute right-4 top-4 border-0 bg-red-600 text-white hover:bg-red-600">
                Best Value
              </Badge>
              <CardHeader className="pb-4">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-red-600/10 text-red-500">
                  <Zap className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl font-bold">Pro Creator</CardTitle>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-5xl font-black text-white">$29</span>
                  <span className="text-zinc-500">/month</span>
                </div>
                <Badge variant="outline" className="mt-2 w-fit border-green-600/40 bg-green-600/10 text-green-400">
                  10% platform fee
                </Badge>
                <CardDescription className="mt-2">
                  For serious instructors who want their own brand
                </CardDescription>
              </CardHeader>
              <Separator className="bg-zinc-800/60" />
              <CardContent className="flex-1 pt-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">Everything in Free, plus:</p>
                <ul className="space-y-3">
                  {[
                    "Custom domain (yourdomain.com)",
                    "All 3 page templates",
                    "Remove AIBJJ branding",
                    "Priority support",
                    "Advanced analytics",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-zinc-300">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-2">
                <Button className="w-full text-base font-semibold bg-red-600 text-white shadow-lg shadow-red-900/30 hover:bg-red-700" size="lg" asChild>
                  <Link href="/auth/signup?plan=creator_pro">
                    Go Pro
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* ELITE Creator */}
            <Card className="relative flex flex-col border-zinc-800/60 bg-zinc-900/50 hover:border-zinc-700 transition-all">
              <CardHeader className="pb-4">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-zinc-800 text-zinc-400">
                  <Crown className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl font-bold">Elite Creator</CardTitle>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-5xl font-black text-white">$97</span>
                  <span className="text-zinc-500">/month</span>
                </div>
                <Badge variant="outline" className="mt-2 w-fit border-green-600/40 bg-green-600/10 text-green-400">
                  8% platform fee
                </Badge>
                <CardDescription className="mt-2">
                  Full white-label for top-tier instructors
                </CardDescription>
              </CardHeader>
              <Separator className="bg-zinc-800/60" />
              <CardContent className="flex-1 pt-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">Everything in Pro, plus:</p>
                <ul className="space-y-3">
                  {[
                    "3 custom domains",
                    "Full white-label (your brand only)",
                    "Custom CSS",
                    "API access",
                    "Dedicated account manager",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-zinc-300">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-2">
                <Button className="w-full text-base font-semibold" variant="outline" size="lg" asChild>
                  <Link href="/auth/signup?plan=creator_elite">
                    Go Elite
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* AIBJJ vs BJJ Fanatics Comparison Table */}
          <div className="mt-20 mx-auto max-w-4xl">
            <h3 className="text-2xl font-bold text-center mb-8">
              AIBJJ vs BJJ Fanatics
            </h3>
            <div className="hidden md:block overflow-hidden rounded-xl border border-zinc-800/60">
              <div className="grid grid-cols-5 border-b border-zinc-800/60 bg-zinc-900/80">
                <div className="p-4 text-sm font-semibold text-zinc-400" />
                <div className="p-4 text-center text-sm font-semibold text-zinc-300">Free</div>
                <div className="p-4 text-center text-sm font-semibold text-red-400">Pro</div>
                <div className="p-4 text-center text-sm font-semibold text-zinc-300">Elite</div>
                <div className="p-4 text-center text-sm font-semibold text-zinc-500">BJJ Fanatics</div>
              </div>
              {[
                { name: "Platform fee", free: "15%", pro: "10%", elite: "8%", fanatics: "40-50%" },
                { name: "Custom domain", free: false, pro: true, elite: true, fanatics: false },
                { name: "Your own website", free: true, pro: true, elite: true, fanatics: false },
                { name: "AI Blog", free: true, pro: true, elite: true, fanatics: false },
                { name: "AI Coach", free: true, pro: true, elite: true, fanatics: false },
                { name: "White-label", free: false, pro: false, elite: true, fanatics: false },
                { name: "Custom CSS", free: false, pro: false, elite: true, fanatics: false },
                { name: "API access", free: false, pro: false, elite: true, fanatics: false },
              ].map((row, idx) => (
                <div
                  key={row.name}
                  className={cn(
                    "grid grid-cols-5",
                    idx % 2 === 0 ? "bg-zinc-950/50" : "bg-zinc-900/30"
                  )}
                >
                  <div className="flex items-center p-4 text-sm font-medium text-zinc-300">{row.name}</div>
                  <div className="flex items-center justify-center p-4"><ComparisonCell value={row.free} /></div>
                  <div className="flex items-center justify-center p-4"><ComparisonCell value={row.pro} /></div>
                  <div className="flex items-center justify-center p-4"><ComparisonCell value={row.elite} /></div>
                  <div className="flex items-center justify-center p-4"><ComparisonCell value={row.fanatics} /></div>
                </div>
              ))}
            </div>

            {/* Mobile version */}
            <div className="md:hidden mt-8 space-y-3">
              {[
                { name: "Platform fee", free: "15%", pro: "10%", elite: "8%", fanatics: "40-50%" },
                { name: "Custom domain", free: false, pro: true, elite: true, fanatics: false },
                { name: "Your own website", free: true, pro: true, elite: true, fanatics: false },
                { name: "AI Blog", free: true, pro: true, elite: true, fanatics: false },
                { name: "AI Coach", free: true, pro: true, elite: true, fanatics: false },
              ].map((row) => (
                <div key={row.name} className="rounded-lg border border-zinc-800/60 bg-zinc-900/50 p-4">
                  <p className="text-sm font-medium text-zinc-300 mb-2">{row.name}</p>
                  <div className="grid grid-cols-4 gap-2 text-xs">
                    {(["free", "pro", "elite", "fanatics"] as const).map((k) => (
                      <div key={k} className="text-center">
                        <p className="text-zinc-500 mb-1 capitalize">{k === "fanatics" ? "Fanatics" : k}</p>
                        <ComparisonCell value={row[k]} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison callout */}
          <div className="mt-12 mx-auto max-w-2xl rounded-xl border border-red-600/20 bg-red-600/5 p-6 text-center">
            <p className="text-lg font-semibold text-zinc-100">
              BJJ Fanatics takes <span className="text-red-500">40-50%</span> of every sale.
            </p>
            <p className="mt-1 text-zinc-400">
              AIBJJ creators keep <span className="text-green-400 font-semibold">85-92%</span> of their revenue. Free to start.
            </p>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* FAQ                                                               */}
      {/* ----------------------------------------------------------------- */}
      <section className="relative border-t border-zinc-800/60 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              Everything you need to know about our plans
            </p>
          </div>

          <div className="mt-12">
            <Accordion type="single" collapsible className="space-y-3">
              {FAQ_ITEMS.map((item) => (
                <AccordionItem
                  key={item.question}
                  value={item.question}
                  className="rounded-lg border border-zinc-800/60 bg-zinc-900/50 px-6"
                >
                  <AccordionTrigger className="text-left text-base font-semibold">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-400 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
            Join thousands of athletes who are using AI to train smarter, learn
            faster, and compete harder. Your next belt is closer than you think.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="w-full sm:w-auto text-base px-8"
              asChild
            >
              <Link href="/auth/signup">
                Get Started for Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
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
            <div className="md:col-span-1">
              <Link
                href="/"
                className="text-xl font-black tracking-tight"
              >
                <span className="text-red-600">AI</span>
                <span className="text-white">BJJ</span>
              </Link>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                The AI-powered platform for Brazilian Jiu-Jitsu athletes at
                every level.
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  href="#"
                  className="text-zinc-600 transition-colors hover:text-zinc-300"
                  aria-label="Twitter"
                >
                  <Globe className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-zinc-600 transition-colors hover:text-zinc-300"
                  aria-label="Instagram"
                >
                  <AtSign className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-zinc-600 transition-colors hover:text-zinc-300"
                  aria-label="YouTube"
                >
                  <Rss className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-zinc-600 transition-colors hover:text-zinc-300"
                  aria-label="Discord"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-zinc-300">Product</h4>
              <ul className="mt-3 space-y-2">
                {[
                  "AI Coach",
                  "Training Journal",
                  "Technique Library",
                  "Game Plans",
                  "Marketplace",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-zinc-300">Company</h4>
              <ul className="mt-3 space-y-2">
                {["About", "Blog", "Careers", "Press", "Partners"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-zinc-300">Legal</h4>
              <ul className="mt-3 space-y-2">
                {[
                  "Privacy Policy",
                  "Terms of Service",
                  "Cookie Policy",
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-800/60 pt-8 sm:flex-row">
            <p className="text-sm text-zinc-600">
              &copy; {new Date().getFullYear()} AIBJJ. All rights reserved.
            </p>
            <p className="text-sm text-zinc-700">Built for the gentle art.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
