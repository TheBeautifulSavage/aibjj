import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-03-25.dahlia",
  typescript: true,
});

export const PLANS = {
  FREE: {
    name: "Free",
    price: 0,
    features: [
      "5 AI Coach messages/day",
      "Basic training journal",
      "Limited technique library",
    ],
  },
  PRO: {
    name: "Pro",
    priceMonthly: 14.99,
    stripePriceId: process.env.STRIPE_PRO_PRICE_ID,
    features: [
      "Unlimited AI Coach",
      "Full training journal with analytics",
      "Complete technique library",
      "Game plan builder",
      "Progress dashboard",
      "Priority support",
    ],
  },
  ANNUAL: {
    name: "Annual",
    priceYearly: 99,
    stripePriceId: process.env.STRIPE_ANNUAL_PRICE_ID,
    features: [
      "Everything in Pro",
      "Save $80/year",
      "Exclusive content access",
      "Early feature access",
    ],
  },
  CREATOR_PRO: {
    name: "Creator Pro",
    priceMonthly: 29,
    stripePriceId: process.env.STRIPE_CREATOR_PRO_PRICE_ID,
    platformFee: 10,
    features: [
      "Custom domain (yourdomain.com)",
      "All 3 page templates",
      "Remove AIBJJ branding",
      "Priority support",
      "Advanced analytics",
    ],
  },
  CREATOR_ELITE: {
    name: "Creator Elite",
    priceMonthly: 97,
    stripePriceId: process.env.STRIPE_CREATOR_ELITE_PRICE_ID,
    platformFee: 8,
    features: [
      "3 custom domains",
      "Full white-label",
      "Custom CSS",
      "API access",
      "Dedicated account manager",
    ],
  },
} as const;
