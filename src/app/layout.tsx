import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "@/components/providers";
import FoundingMemberBanner from "@/components/FoundingMemberBanner";
import PWAInstall from "@/components/PWAInstall";
import NavBar from "@/components/NavBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#dc2626",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://aibjj.com'),
  title: {
    default: 'AIBJJ — AI-Powered Brazilian Jiu-Jitsu Platform',
    template: '%s | AIBJJ',
  },
  description: 'The AI-powered BJJ platform. AI coach, training journal, technique library, game plans, and a marketplace for BJJ instructionals. Built by a black belt.',
  keywords: ['bjj', 'brazilian jiu jitsu', 'ai coach', 'bjj training', 'jiu jitsu techniques', 'bjj instructionals', 'grappling'],
  openGraph: {
    type: 'website',
    siteName: 'AIBJJ',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aibjj',
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'AIBJJ',
    startupImage: '/icons/icon-512x512.png',
  },
  icons: {
    icon: [
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'AIBJJ',
  url: 'https://aibjj.com',
  description: 'The AI-powered BJJ platform. AI coach, training journal, technique library, game plans, and a marketplace for BJJ instructionals.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://aibjj.com/bjj-techniques?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AIBJJ',
  url: 'https://aibjj.com',
  logo: 'https://aibjj.com/og-image.jpg',
  sameAs: [
    'https://twitter.com/aibjj',
  ],
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'AIBJJ',
  applicationCategory: 'SportsApplication',
  operatingSystem: 'Web',
  url: 'https://aibjj.com',
  description: 'AI-powered Brazilian Jiu-Jitsu training platform with AI coach, technique library, training journal, and game plan builder.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Free plan available',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Providers>
          <NavBar />
          <FoundingMemberBanner />
          {children}
          <PWAInstall />
        </Providers>
      </body>
    </html>
  );
}
