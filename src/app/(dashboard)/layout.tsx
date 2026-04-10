"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import {
  LayoutDashboard,
  MessageSquare,
  BookOpen,
  Library,
  Target,
  ShoppingBag,
  Video,
  Settings,
  Menu,
  X,
  LogOut,
  User,
  Download,
  TrendingUp,
  PlayCircle,
  Trophy,
  Home,
  PlusCircle,
  GraduationCap,
  BarChart2,
  Swords,
  GitBranch,
  Grid,
  Upload,
  Palette,
  PenLine,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import GlobalAIPrompt from "@/components/GlobalAIPrompt";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "AI Coach", href: "/coach", icon: MessageSquare },
  { name: "Sparring AI", href: "/sparring", icon: Swords },
  { name: "Journal", href: "/journal", icon: BookOpen },
  { name: "Techniques", href: "/library", icon: Library },
  { name: "Tech Graph", href: "/techniques/graph", icon: GitBranch },
  { name: "Game Plan", href: "/gameplan", icon: Target },
  { name: "Learning Paths", href: "/learn", icon: GraduationCap },
  { name: "Progress", href: "/progress", icon: TrendingUp },
  { name: "Competitions", href: "/competitions", icon: Trophy },
  { name: "BJJ Encyclopedia", href: "/bjj", icon: BookOpen },
  { name: "Find Academy", href: "/academies", icon: Home },
  { name: "Meta / Stats", href: "/meta", icon: BarChart2 },
  { name: "Marketplace", href: "/marketplace", icon: ShoppingBag },
  { name: "My Courses", href: "/my-courses", icon: PlayCircle },
];

const creatorNavItems = [
  { name: "Creator", href: "/creator", icon: Video },
  { name: "Upload", href: "/upload", icon: Upload },
  { name: "My Page", href: "/creator-setup", icon: Palette },
  { name: "Blog", href: "/blog", icon: PenLine },
];

// Items shown in mobile "More" drawer
const moreNavItems = [
  { name: "Game Plan", href: "/gameplan", icon: Target },
  { name: "Progress", href: "/progress", icon: TrendingUp },
  { name: "Competitions", href: "/competitions", icon: Trophy },
  { name: "Meta", href: "/meta", icon: BarChart2 },
  { name: "Sparring AI", href: "/sparring", icon: Swords },
  { name: "Tech Graph", href: "/techniques/graph", icon: GitBranch },
  { name: "Marketplace", href: "/marketplace", icon: ShoppingBag },
  { name: "My Courses", href: "/my-courses", icon: PlayCircle },
  { name: "Learning Paths", href: "/learn", icon: GraduationCap },
  { name: "Import", href: "/import", icon: Download },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const user = session?.user;
  const isCreator = (user as { role?: string })?.role === "creator";

  const navItems = isCreator ? [...navigation, ...creatorNavItems] : navigation;

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  };

  const currentPage = navItems.find((item) => isActive(item.href))?.name || "Dashboard";

  const SidebarContent = () => (
    <>
      {/* Logo */}
      <div className="flex h-14 items-center gap-2 px-5 border-b border-white/[0.06]">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-600 font-bold text-white text-xs">
          AI
        </div>
        <span className="text-base font-bold tracking-tight text-white">
          AIBJJ
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-0.5 px-2 py-3 overflow-y-auto">
        {navItems.map((item) => {
          const active = isActive(item.href);
          const isCoach = item.href === "/coach";
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 rounded-lg px-3 h-10 text-sm font-medium transition-colors ${
                active
                  ? isCoach
                    ? "bg-red-600/10 text-red-400"
                    : "bg-[#2f2f2f] text-white"
                  : "text-zinc-400 hover:bg-[#2f2f2f] hover:text-zinc-200"
              }`}
            >
              <item.icon
                className={`h-4 w-4 flex-shrink-0 ${
                  active ? (isCoach ? "text-red-400" : "text-white") : "text-zinc-500"
                }`}
              />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Sidebar footer */}
      <div className="border-t border-white/[0.06] p-3">
        <div className="flex items-center gap-3 rounded-lg px-2 py-2">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-zinc-700 text-sm font-semibold text-zinc-200">
            {user?.image ? (
              <Image
                src={user.image}
                alt={user.name || ""}
                width={32}
                height={32}
                className="h-8 w-8 rounded-full object-cover"
              />
            ) : (
              user?.name?.charAt(0)?.toUpperCase() || "U"
            )}
          </div>
          <div className="flex-1 min-w-0">
            <p className="truncate text-sm font-medium text-zinc-200">
              {user?.name || "Student"}
            </p>
            <p className="truncate text-xs text-zinc-500">
              {user?.email || ""}
            </p>
          </div>
          <button
            onClick={() => setSettingsOpen(!settingsOpen)}
            className="flex-shrink-0 text-zinc-500 hover:text-zinc-300 p-1 rounded-md hover:bg-white/[0.04] transition-colors"
          >
            <Settings className="h-4 w-4" />
          </button>
        </div>
      </div>
    </>
  );

  return (
    <div className="flex h-screen bg-[#212121]">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* More sheet overlay */}
      {moreOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
          onClick={() => setMoreOpen(false)}
        />
      )}

      {/* More sheet */}
      {moreOpen && (
        <div className="fixed bottom-[60px] left-0 right-0 z-50 bg-[#141414] border-t border-white/[0.06] rounded-t-2xl lg:hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]">
            <span className="text-sm font-semibold text-zinc-300">More</span>
            <button onClick={() => setMoreOpen(false)} className="text-zinc-500 hover:text-zinc-300">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-1 p-3 max-h-80 overflow-y-auto">
            {moreNavItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMoreOpen(false)}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                    active ? "bg-red-600/10 text-red-400" : "text-zinc-400 hover:bg-white/[0.04] hover:text-zinc-200"
                  }`}
                >
                  <item.icon className={`h-4 w-4 ${active ? "text-red-400" : "text-zinc-500"}`} />
                  {item.name}
                </Link>
              );
            })}
          </div>
          <div className="p-3 border-t border-white/[0.06]">
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-red-400 hover:bg-red-950/30 transition-colors"
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </button>
          </div>
        </div>
      )}

      {/* Sidebar - mobile slide-out */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-[#171717] border-r border-white/[0.06] transition-transform duration-300 lg:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="absolute right-2 top-2 z-10">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(false)}
            className="h-9 w-9 text-zinc-400 hover:text-zinc-200"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <SidebarContent />
      </aside>

      {/* Sidebar - desktop permanent */}
      <aside className="hidden lg:flex w-[260px] flex-shrink-0 flex-col bg-[#171717] border-r border-white/[0.06]">
        <SidebarContent />
      </aside>

      {/* Main area */}
      <div className="flex flex-1 flex-col overflow-hidden min-w-0">
        {/* Top header */}
        <header className="flex h-12 flex-shrink-0 items-center justify-between border-b border-white/[0.06] bg-[#171717]/95 backdrop-blur-md px-4">
          {/* Left */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden h-8 w-8 text-zinc-400 hover:text-zinc-200"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-4 w-4" />
            </Button>
            <span className="text-sm font-medium text-zinc-300">{currentPage}</span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-1">
            {/* Settings dropdown */}
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-zinc-400 hover:text-zinc-200"
                onClick={() => setSettingsOpen(!settingsOpen)}
              >
                <Settings className="h-4 w-4" />
              </Button>

              {settingsOpen && (
                <>
                  <div
                    className="fixed inset-0 z-30"
                    onClick={() => setSettingsOpen(false)}
                  />
                  <div className="absolute right-0 top-full z-40 mt-1 w-48 rounded-xl border border-white/[0.08] bg-[#2f2f2f] py-1 shadow-2xl">
                    <Link
                      href="/settings"
                      onClick={() => setSettingsOpen(false)}
                      className="flex items-center gap-2 px-4 py-2.5 text-sm text-zinc-300 hover:bg-white/[0.04] hover:text-white transition-colors"
                    >
                      <User className="h-4 w-4 text-zinc-500" />
                      Profile
                    </Link>
                    <Link
                      href="/settings"
                      onClick={() => setSettingsOpen(false)}
                      className="flex items-center gap-2 px-4 py-2.5 text-sm text-zinc-300 hover:bg-white/[0.04] hover:text-white transition-colors"
                    >
                      <Settings className="h-4 w-4 text-zinc-500" />
                      Settings
                    </Link>
                    <hr className="my-1 border-white/[0.06]" />
                    <button
                      onClick={() => signOut({ callbackUrl: "/" })}
                      className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-red-400 hover:bg-red-950/30 transition-colors"
                    >
                      <LogOut className="h-4 w-4" />
                      Sign Out
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* User avatar */}
            <div className="ml-1 flex h-7 w-7 items-center justify-center rounded-full bg-zinc-700 text-xs font-semibold text-zinc-200">
              {user?.image ? (
                <Image
                  src={user.image}
                  alt={user.name || ""}
                  width={28}
                  height={28}
                  className="h-7 w-7 rounded-full object-cover"
                />
              ) : (
                user?.name?.charAt(0)?.toUpperCase() || "U"
              )}
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto bg-[#212121] p-4 pb-20 md:pb-6 lg:p-6">
          {children}
        </main>
      </div>

      {/* Floating AI prompt (hidden on coach page) */}
      <GlobalAIPrompt />

      {/* Mobile Bottom Nav */}
      <MobileBottomNav pathname={pathname} onMoreClick={() => setMoreOpen(true)} />
    </div>
  );
}

function MobileBottomNav({
  pathname,
  onMoreClick,
}: {
  pathname: string;
  onMoreClick: () => void;
}) {
  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  };

  const mainNavItems = [
    { href: "/dashboard", icon: Home, label: "Home" },
    { href: "/coach", icon: MessageSquare, label: "Coach" },
    { href: "/journal", icon: BookOpen, label: "Journal" },
    { href: "/library", icon: Library, label: "Library" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-zinc-950/95 backdrop-blur-md border-t border-white/[0.06]">
      <div className="flex items-center justify-around h-[60px]">
        {mainNavItems.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative flex flex-col items-center gap-0.5 px-3 py-2 min-w-[56px] transition-colors ${
                active ? "text-red-500" : "text-zinc-500"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
              {active && (
                <span className="absolute bottom-1 h-1 w-1 rounded-full bg-red-500" />
              )}
            </Link>
          );
        })}

        {/* More button */}
        <button
          onClick={onMoreClick}
          className="relative flex flex-col items-center gap-0.5 px-3 py-2 min-w-[56px] text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          <Grid className="h-5 w-5" />
          <span className="text-[10px] font-medium">More</span>
        </button>
      </div>
    </nav>
  );
}
