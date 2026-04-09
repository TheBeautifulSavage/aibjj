import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "@/components/providers";
import FoundingMemberBanner from "@/components/FoundingMemberBanner";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Providers>
          <FoundingMemberBanner />
          {children}
        </Providers>
      </body>
    </html>
  );
}
