"use client";

import React, { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import {
  CreditCard, User, Shield, AlertTriangle, CheckCircle,
  Loader2, ExternalLink, LogOut, ChevronRight
} from "lucide-react";
import Link from "next/link";

const PLAN_LABEL: Record<string, string> = {
  FREE: "Free",
  PRO: "Pro ($14.99/mo)",
  ANNUAL: "Pro Annual ($99/yr)",
  FOUNDING: "Founding Member ($9.99/mo)",
  LIFETIME: "Lifetime Member",
  CREATOR_PRO: "Creator Pro ($29/mo)",
  CREATOR_ELITE: "Creator Elite ($97/mo)",
};

const PLAN_COLOR: Record<string, string> = {
  FREE: "text-zinc-400",
  PRO: "text-blue-400",
  ANNUAL: "text-blue-400",
  FOUNDING: "text-yellow-400",
  LIFETIME: "text-yellow-400",
  CREATOR_PRO: "text-purple-400",
  CREATOR_ELITE: "text-purple-400",
};

export default function SettingsPage() {
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const defaultTab = searchParams.get("tab") || "account";

  const [tab, setTab] = useState(defaultTab);
  const [loading, setLoading] = useState(false);
  const [portalLoading, setPortalLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [userPlan, setUserPlan] = useState<string>("FREE");
  const [isLifetime, setIsLifetime] = useState(false);

  const user = session?.user as { id?: string; name?: string; email?: string; subscriptionTier?: string; image?: string } | undefined;

  useEffect(() => {
    // Fetch user details
    fetch("/api/dashboard/stats")
      .then(r => r.json())
      .then(d => {
        if (d.subscriptionTier) setUserPlan(d.subscriptionTier);
        if (d.isLifetime) setIsLifetime(d.isLifetime);
      })
      .catch(() => {});
  }, []);

  async function openBillingPortal() {
    setPortalLoading(true);
    setMessage(null);
    try {
      const r = await fetch("/api/stripe/portal", { method: "POST" });
      const data = await r.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setMessage({ type: "error", text: data.error || "Failed to open billing portal." });
      }
    } catch {
      setMessage({ type: "error", text: "Network error. Please try again." });
    } finally {
      setPortalLoading(false);
    }
  }

  const isPaid = userPlan !== "FREE";
  const canCancel = isPaid && !isLifetime;

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="text-2xl font-bold text-white mb-6">Settings</h1>

      {/* Tab nav */}
      <div className="flex gap-1 border-b border-white/[0.06] mb-8">
        {[
          { id: "account", label: "Account", icon: User },
          { id: "billing", label: "Billing & Subscription", icon: CreditCard },
          { id: "security", label: "Security", icon: Shield },
        ].map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors -mb-px ${
              tab === id
                ? "border-white text-white"
                : "border-transparent text-zinc-500 hover:text-zinc-300"
            }`}
          >
            <Icon className="h-4 w-4" />
            <span className="hidden sm:inline">{label}</span>
            <span className="sm:hidden">{label.split(" ")[0]}</span>
          </button>
        ))}
      </div>

      {/* Feedback message */}
      {message && (
        <div className={`flex items-center gap-3 rounded-xl p-4 mb-6 ${
          message.type === "success" ? "bg-green-900/20 border border-green-800/40 text-green-300" : "bg-red-900/20 border border-red-800/40 text-red-300"
        }`}>
          {message.type === "success" ? <CheckCircle className="h-5 w-5 flex-shrink-0" /> : <AlertTriangle className="h-5 w-5 flex-shrink-0" />}
          <p className="text-sm">{message.text}</p>
        </div>
      )}

      {/* ── ACCOUNT TAB ──────────────────────────────────────── */}
      {tab === "account" && (
        <div className="space-y-6">
          <div className="rounded-2xl bg-[#1a1a1a] border border-white/[0.06] p-6">
            <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">Profile</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-zinc-700 flex items-center justify-center text-xl font-bold text-white">
                  {user?.name?.charAt(0)?.toUpperCase() || "?"}
                </div>
                <div>
                  <p className="font-semibold text-white">{user?.name || "—"}</p>
                  <p className="text-sm text-zinc-500">{user?.email || "—"}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-[#1a1a1a] border border-white/[0.06] p-6">
            <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">Account Actions</h2>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="flex items-center gap-3 w-full rounded-xl px-4 py-3 text-sm text-red-400 hover:bg-red-950/20 transition-colors"
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </button>
          </div>
        </div>
      )}

      {/* ── BILLING TAB ──────────────────────────────────────── */}
      {tab === "billing" && (
        <div className="space-y-6">

          {/* Current plan */}
          <div className="rounded-2xl bg-[#1a1a1a] border border-white/[0.06] p-6">
            <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">Current Plan</h2>
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-lg font-bold ${PLAN_COLOR[userPlan] || "text-zinc-300"}`}>
                  {PLAN_LABEL[userPlan] || userPlan}
                </p>
                {isLifetime && (
                  <p className="text-xs text-yellow-500 mt-0.5">Lifetime access — no recurring charges</p>
                )}
                {userPlan === "FREE" && (
                  <p className="text-xs text-zinc-500 mt-0.5">5 AI messages/month · 10 journal entries/month</p>
                )}
              </div>
              {!isPaid && (
                <Link
                  href="/pricing"
                  className="flex items-center gap-1.5 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 transition-colors"
                >
                  Upgrade <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              )}
            </div>
          </div>

          {/* Billing management */}
          {isPaid && (
            <div className="rounded-2xl bg-[#1a1a1a] border border-white/[0.06] p-6">
              <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">Manage Billing</h2>
              <p className="text-sm text-zinc-400 mb-5">
                Update your payment method, view invoices, and manage your subscription through our secure billing portal powered by Stripe.
              </p>
              <button
                onClick={openBillingPortal}
                disabled={portalLoading}
                className="flex items-center gap-2 rounded-xl bg-[#2f2f2f] hover:bg-[#3f3f3f] px-5 py-3 text-sm font-medium text-white transition-colors disabled:opacity-50"
              >
                {portalLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <ExternalLink className="h-4 w-4" />}
                Open Billing Portal
              </button>
            </div>
          )}

          {/* Cancel subscription — prominent, easy to find */}
          {canCancel && (
            <div className="rounded-2xl border border-red-900/40 bg-red-950/10 p-6">
              <h2 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-2">Cancel Subscription</h2>
              <p className="text-sm text-zinc-400 mb-5">
                You can cancel your subscription at any time. You will retain access until the end of your current billing period. No refunds are issued for partial periods.
              </p>
              <button
                onClick={openBillingPortal}
                disabled={portalLoading}
                className="flex items-center gap-2 rounded-xl border border-red-800/50 px-5 py-3 text-sm font-medium text-red-400 hover:bg-red-950/30 transition-colors disabled:opacity-50"
              >
                {portalLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <AlertTriangle className="h-4 w-4" />}
                Cancel Subscription
              </button>
              <p className="mt-3 text-xs text-zinc-600">
                Need help? Email us at{" "}
                <a href="mailto:hulljessej@gmail.com" className="text-zinc-500 hover:text-zinc-300 underline">
                  support@aibjj.com
                </a>
              </p>
            </div>
          )}

          {/* Free user upsell */}
          {!isPaid && (
            <div className="rounded-2xl bg-[#1a1a1a] border border-white/[0.06] p-6 text-center">
              <p className="text-sm text-zinc-400 mb-4">You are on the Free plan. Upgrade to unlock unlimited AI coaching, the full technique library, and game plan builder.</p>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-700 transition-colors"
              >
                View Plans & Pricing
              </Link>
            </div>
          )}

          {/* Legal links */}
          <div className="flex gap-4 text-xs text-zinc-600 pt-2">
            <Link href="/terms" className="hover:text-zinc-400 underline">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-zinc-400 underline">Privacy Policy</Link>
            <a href="mailto:support@aibjj.com" className="hover:text-zinc-400 underline">Contact Support</a>
          </div>
        </div>
      )}

      {/* ── SECURITY TAB ─────────────────────────────────────── */}
      {tab === "security" && (
        <div className="space-y-6">
          <div className="rounded-2xl bg-[#1a1a1a] border border-white/[0.06] p-6">
            <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">Login Method</h2>
            <div className="flex items-center gap-3 rounded-xl bg-[#2f2f2f] px-4 py-3">
              <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white">G</div>
              <div>
                <p className="text-sm font-medium text-white">Google OAuth</p>
                <p className="text-xs text-zinc-500">{user?.email}</p>
              </div>
              <CheckCircle className="h-4 w-4 text-green-400 ml-auto" />
            </div>
          </div>

          <div className="rounded-2xl bg-[#1a1a1a] border border-white/[0.06] p-6">
            <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">Data & Privacy</h2>
            <div className="space-y-3">
              <Link href="/privacy" className="flex items-center justify-between rounded-xl px-4 py-3 hover:bg-[#2f2f2f] transition-colors">
                <span className="text-sm text-zinc-300">Privacy Policy</span>
                <ChevronRight className="h-4 w-4 text-zinc-600" />
              </Link>
              <Link href="/terms" className="flex items-center justify-between rounded-xl px-4 py-3 hover:bg-[#2f2f2f] transition-colors">
                <span className="text-sm text-zinc-300">Terms of Service</span>
                <ChevronRight className="h-4 w-4 text-zinc-600" />
              </Link>
              <a
                href="mailto:support@aibjj.com?subject=Data Deletion Request"
                className="flex items-center justify-between rounded-xl px-4 py-3 hover:bg-[#2f2f2f] transition-colors"
              >
                <span className="text-sm text-red-400">Request Account Deletion</span>
                <ChevronRight className="h-4 w-4 text-zinc-600" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
