import type { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
  title: 'AI-Powered BJJ Training | Technique Library, AI Coach, Game Plans',
  description: 'The AI-powered BJJ platform. AI coach, training journal, 10,000+ technique library, game plans, and a marketplace for BJJ instructionals. Built by a black belt.',
  openGraph: {
    title: 'AIBJJ — AI-Powered Brazilian Jiu-Jitsu Platform',
    description: 'Train smarter with AI coaching, an intelligent training journal, massive technique library, and a creator marketplace built for BJJ.',
    url: 'https://aibjj.com',
  },
  twitter: {
    title: 'AIBJJ — AI-Powered Brazilian Jiu-Jitsu Platform',
    description: 'Train smarter with AI coaching, an intelligent training journal, massive technique library, and a creator marketplace built for BJJ.',
  },
}

export default function Page() {
  return <HomeClient />
}
