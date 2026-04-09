"use client";

import { useEffect, useState } from "react";
import { X, Download } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function PWAInstall() {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSInstructions, setShowIOSInstructions] = useState(false);

  useEffect(() => {
    // Register service worker
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(console.error);
    }

    // Check if iOS
    const ios = /iphone|ipad|ipod/i.test(navigator.userAgent);
    const standalone = window.matchMedia("(display-mode: standalone)").matches;
    setIsIOS(ios);

    // Don't show if already installed
    if (standalone) return;

    // Check if dismissed recently
    const dismissed = localStorage.getItem("pwa-banner-dismissed");
    if (dismissed && Date.now() - parseInt(dismissed) < 7 * 24 * 60 * 60 * 1000) return;

    // Show iOS banner after 30s
    if (ios) {
      setTimeout(() => setShowBanner(true), 30000);
      return;
    }

    // Listen for Chrome/Android install prompt
    const handler = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e as BeforeInstallPromptEvent);
      setTimeout(() => setShowBanner(true), 10000);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (isIOS) {
      setShowIOSInstructions(true);
      return;
    }
    if (!installPrompt) return;
    await installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    if (outcome === "accepted") setShowBanner(false);
  };

  const handleDismiss = () => {
    setShowBanner(false);
    localStorage.setItem("pwa-banner-dismissed", Date.now().toString());
  };

  if (!showBanner) return null;

  if (showIOSInstructions) {
    return (
      <div className="fixed bottom-20 left-4 right-4 z-50 rounded-2xl border border-zinc-700 bg-zinc-900 p-4 shadow-2xl md:bottom-6 md:left-auto md:right-6 md:max-w-sm">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-600 text-xs font-black text-white">AI</div>
            <span className="font-semibold text-white text-sm">Install AIBJJ</span>
          </div>
          <button onClick={handleDismiss} className="text-zinc-500 hover:text-zinc-300">
            <X className="h-4 w-4" />
          </button>
        </div>
        <ol className="space-y-2 text-sm text-zinc-400">
          <li className="flex items-center gap-2"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-600/20 text-xs font-bold text-red-400">1</span> Tap the <strong className="text-zinc-200">Share</strong> button at the bottom of Safari</li>
          <li className="flex items-center gap-2"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-600/20 text-xs font-bold text-red-400">2</span> Scroll down and tap <strong className="text-zinc-200">Add to Home Screen</strong></li>
          <li className="flex items-center gap-2"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-600/20 text-xs font-bold text-red-400">3</span> Tap <strong className="text-zinc-200">Add</strong> — done!</li>
        </ol>
      </div>
    );
  }

  return (
    <div className="fixed bottom-20 left-4 right-4 z-50 rounded-2xl border border-zinc-700 bg-zinc-900 p-4 shadow-2xl md:bottom-6 md:left-auto md:right-6 md:max-w-sm">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600 font-black text-white text-sm">AI</div>
          <div>
            <p className="font-semibold text-white text-sm">Install AIBJJ App</p>
            <p className="text-xs text-zinc-400">Add to home screen for quick access</p>
          </div>
        </div>
        <button onClick={handleDismiss} className="text-zinc-500 hover:text-zinc-300 ml-2">
          <X className="h-4 w-4" />
        </button>
      </div>
      <button
        onClick={handleInstall}
        className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 py-2.5 text-sm font-semibold text-white hover:bg-red-700"
      >
        <Download className="h-4 w-4" />
        {isIOS ? "Add to Home Screen" : "Install App"}
      </button>
    </div>
  );
}
