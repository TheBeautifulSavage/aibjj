import type { Metadata } from 'next'
import PricingPageClient from './PricingClient'

export const metadata: Metadata = {
  title: 'BJJ Training Plans & Pricing',
  description: 'Choose the right AIBJJ plan for your training. Free tier, Founding Member at $9.99/mo (locked forever), and Pro at $14.99/mo. Full AI coach, technique library, game plans, and marketplace access.',
  openGraph: {
    title: 'BJJ Training Plans & Pricing | AIBJJ',
    description: 'Start free. Lock in $9.99/mo as a Founding Member. Full access to AI coach, technique library, game plans, and more.',
    url: 'https://aibjj.com/pricing',
  },
}

export default function PricingPage() {
  return <PricingPageClient />
}
