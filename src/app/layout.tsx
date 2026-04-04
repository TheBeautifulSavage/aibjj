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
  title: "AIBJJ - AI-Powered Jiu-Jitsu Coach & Marketplace",
  description:
    "Your AI-powered Brazilian Jiu-Jitsu platform. Get personalized coaching, track your training, master techniques, and access world-class instructional content.",
  keywords: [
    "BJJ",
    "Brazilian Jiu-Jitsu",
    "AI Coach",
    "Martial Arts",
    "Training",
    "Techniques",
  ],
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
