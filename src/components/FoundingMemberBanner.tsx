"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Zap } from "lucide-react";

export default function FoundingMemberBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="relative z-[60] w-full bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2.5 sm:px-6">
        <Zap className="h-4 w-4 flex-shrink-0 text-yellow-300" />
        <p className="text-center text-sm font-semibold">
          <span className="hidden sm:inline">Limited Time: </span>
          Join as a Founding Member —{" "}
          <Link
            href="/auth/signup?plan=founding"
            className="underline underline-offset-2 hover:text-yellow-200 transition-colors font-bold"
          >
            Lock In $9.99/month Forever
          </Link>
          <span className="ml-2 hidden sm:inline text-red-200 font-normal">(First 500 members only)</span>
        </p>
        <button
          onClick={() => setDismissed(true)}
          className="ml-auto flex-shrink-0 rounded p-0.5 hover:bg-red-500 transition-colors"
          aria-label="Dismiss"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
