"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  LayoutDashboard,
  MessageSquare,
  BookOpen,
  Library,
  Target,
  ShoppingBag,
  Video,
  Bell,
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import GlobalAIPrompt from "@/components/GlobalAIPrompt";

import { Upload, Palette, PenLine } from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "AI Coach", href: "/coach", icon: MessageSquare },
  { name: "Learning Paths", href: "/learn", icon: GraduationCap },
  { name: "Journal", href: "/journal", icon: BookOpen },
  { name: "Techniques", href: "/library", icon: Library },
  { name: "Game Plan", href: "/gameplan", icon: Target },
  { name: "Progress", href: "/progress", icon: TrendingUp },
  { name: "My Courses", href: "/my-courses", icon: PlayCircle },
  { name: "Competitions", href: "/competitions", icon: Trophy },
  { name: "Meta", href: "/meta", icon: BarChart2 },
  { name: "Marketplace", href: "/marketplace", icon: ShoppingBag },
  { name: "Import", href: "/import", icon: Download },
];

const creatorNavItems = [
  { name: "Creator", href: "/creator", icon: Video },
  { name: "Upload", href: "/upload", icon: Upload },
  { name: "My Page", href: "/creator-setup", icon: Palette },
  { name: "Blog", href: "/blog", icon: PenLine },
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

  const user = session?.user;
  const isCreator = (user as { role?: string })?.role === "creator";

  const navItems = isCreator ? [...navigation, ...creatorNavItems] : navigation;

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  };

  const SidebarContent = () => (
    <>
      {/* Logo */}
      <div className="flex h-16 items-center gap-2 px-6 border-b border-zinc-800/50">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-600 font-bold text-white text-sm">
          AI
        </div>
        <span className="text-lg font-bold tracking-tight text-white">
          AIBJJ
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navItems.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                active
                  ? "bg-red-600/10 text-red-500"
                  : "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200"
              }`}
            >
              <item.icon
                className={`h-5 w-5 flex-shrink-0 ${
                  active ? "text-red-500" : "text-zinc-500"
                }`}
              />
              {item.name}
              {active && (
                <div className="ml-auto h-1.5 w-1.5 rounded-full bg-red-500" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Sidebar footer - user info */}
      <div className="border-t border-zinc-800/50 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-800 text-sm font-medium text-zinc-300">
            {user?.name?.charAt(0)?.toUpperCase() || "U"}
          </div>
          <div className="flex-1 truncate">
            <p className="truncate text-sm font-medium text-zinc-200">
              {user?.name || "Student"}
            </p>
            <p className="truncate text-xs text-zinc-500">
              {user?.email || ""}
            </p>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="flex h-screen bg-background">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar - mobile */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-[#0a0a0a] border-r border-zinc-800/50 transition-transform duration-300 lg:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="absolute right-2 top-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(false)}
            className="text-zinc-400 hover:text-zinc-200"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        <SidebarContent />
      </aside>

      {/* Sidebar - desktop */}
      <aside className="hidden lg:flex w-64 flex-col bg-[#0a0a0a] border-r border-zinc-800/50">
        <SidebarContent />
      </aside>

      {/* Main area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top bar */}
        <header className="flex h-16 items-center justify-between border-b border-zinc-800/50 bg-[#0a0a0a]/80 backdrop-blur-md px-4 lg:px-6">
          {/* Left side - hamburger on mobile */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-zinc-400 hover:text-zinc-200"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-sm font-medium text-zinc-400 hidden sm:block">
              {navItems.find((item) => isActive(item.href))?.name || "Dashboard"}
            </h1>
          </div>

          {/* Right side - notifications, settings, avatar */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="relative text-zinc-400 hover:text-zinc-200"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
            </Button>

            {/* Settings dropdown */}
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="text-zinc-400 hover:text-zinc-200"
                onClick={() => setSettingsOpen(!settingsOpen)}
              >
                <Settings className="h-5 w-5" />
              </Button>

              {settingsOpen && (
                <>
                  <div
                    className="fixed inset-0 z-30"
                    onClick={() => setSettingsOpen(false)}
                  />
                  <div className="absolute right-0 top-full z-40 mt-2 w-48 rounded-lg border border-zinc-800 bg-zinc-900 py-1 shadow-xl">
                    <Link
                      href="/settings"
                      onClick={() => setSettingsOpen(false)}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-800"
                    >
                      <User className="h-4 w-4" />
                      Profile
                    </Link>
                    <Link
                      href="/settings"
                      onClick={() => setSettingsOpen(false)}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-800"
                    >
                      <Settings className="h-4 w-4" />
                      Settings
                    </Link>
                    <hr className="my-1 border-zinc-800" />
                    <button className="flex w-full items-center gap-2 px-4 py-2 text-sm text-red-400 hover:bg-zinc-800">
                      <LogOut className="h-4 w-4" />
                      Sign Out
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* User avatar */}
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-sm font-medium text-zinc-300 ml-1">
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
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 pb-20 md:pb-6 lg:p-6">{children}</main>
      </div>

      {/* Floating AI prompt bar */}
      <GlobalAIPrompt />

      {/* Mobile Bottom Nav */}
      <MobileBottomNav pathname={pathname} />
    </div>
  );
}

function MobileBottomNav({ pathname }: { pathname: string }) {
  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  };

  const navItems = [
    { href: "/dashboard", icon: Home, label: "Home" },
    { href: "/coach", icon: MessageSquare, label: "Coach" },
    { href: "/journal", icon: BookOpen, label: "Journal" },
    { href: "/library", icon: Library, label: "Library" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#0a0a0a] border-t border-zinc-800/70">
      <div className="flex items-center justify-around px-2 h-16">
        {navItems.slice(0, 2).map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-0.5 px-4 py-2 rounded-lg transition-colors ${
                active ? "text-red-500" : "text-zinc-500"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}

        {/* Center "+" quick action */}
        <Link
          href="/journal/new"
          className="flex flex-col items-center gap-0.5 -mt-4"
        >
          <div className="h-12 w-12 rounded-full bg-red-600 flex items-center justify-center shadow-lg shadow-red-900/40">
            <PlusCircle className="h-6 w-6 text-white" />
          </div>
          <span className="text-[10px] font-medium text-zinc-500">Log</span>
        </Link>

        {navItems.slice(2).map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-0.5 px-4 py-2 rounded-lg transition-colors ${
                active ? "text-red-500" : "text-zinc-500"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
