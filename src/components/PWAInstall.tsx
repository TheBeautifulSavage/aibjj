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
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(console.error);
    }

    const ios = /iphone|ipad|ipod/i.test(navigator.userAgent);
    const standalone = window.matchMedia("(display-mode: standalone)").matches;
    setIsIOS(ios);
    if (standalone) return;

    const dismissed = localStorage.getItem("pwa-banner-dismissed");
    if (dismissed && Date.now() - parseInt(dismissed) < 7 * 24 * 60 * 60 * 1000) return;

    if (ios) {
      setTimeout(() => setShowBanner(true), 30000);
      return;
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e as BeforeInstallPromptEvent);
      setTimeout(() => setShowBanner(true), 10000);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (isIOS) { setShowIOSInstructions(true); return; }
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

  // Compact bottom bar — not a card, just a slim strip
  return (
    <div className="fixed bottom-16 md:bottom-4 left-0 right-0 z-50 px-3">
      <div className="mx-auto max-w-md">
        {showIOSInstructions ? (
          <div className="rounded-xl border border-zinc-700 bg-zinc-900/95 backdrop-blur px-4 py-3 shadow-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-white">Add to Home Screen</span>
              <button onClick={handleDismiss}><X className="h-4 w-4 text-zinc-500" /></button>
            </div>
            <p className="text-xs text-zinc-400">Tap <strong className="text-zinc-200">Share ↑</strong> → <strong className="text-zinc-200">Add to Home Screen</strong> → <strong className="text-zinc-200">Add</strong></p>
          </div>
        ) : (
          <div className="flex items-center gap-3 rounded-xl border border-zinc-700 bg-zinc-900/95 backdrop-blur px-4 py-2.5 shadow-xl">
            <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-red-600 text-[10px] font-black text-white">AI</div>
            <p className="flex-1 text-xs text-zinc-300">Install <strong className="text-white">AIBJJ</strong> — add to home screen</p>
            <button onClick={handleInstall} className="flex items-center gap-1 rounded-lg bg-red-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-red-700">
              <Download className="h-3 w-3" /> Install
            </button>
            <button onClick={handleDismiss}><X className="h-4 w-4 text-zinc-600" /></button>
          </div>
        )}
      </div>
    </div>
  );
}
