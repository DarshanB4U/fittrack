"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Activity, LayoutDashboard, Calendar, Dumbbell, Apple, Settings, LogOut, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Sparkles, label: "AI Coach", href: "/dashboard/ai-coach" },
  { icon: Calendar, label: "Schedule", href: "#" },
  { icon: Dumbbell, label: "Workouts", href: "#" },
  { icon: Apple, label: "Nutrition", href: "#" },
  { icon: Settings, label: "Settings", href: "#" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-64 h-full bg-card border-r border-border relative z-20">
      <div className="p-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-primary/20 p-2 rounded-xl text-primary">
            <Activity className="w-5 h-5" />
          </div>
          <span className="font-heading font-bold text-xl tracking-tight text-foreground">
            FitTrack
          </span>
        </Link>
      </div>

      <div className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
        <p className="px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
          Menu
        </p>
        
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          
          return (
            <Link 
              key={item.label} 
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all relative group ${
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {isActive && (
                <motion.div 
                  layoutId="sidebar-active" 
                  className="absolute inset-0 bg-primary/10 rounded-xl"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <item.icon className={`w-5 h-5 relative z-10 ${isActive ? "text-primary" : "group-hover:text-foreground transition-colors"}`} />
              <span className="font-medium relative z-10">{item.label}</span>
            </Link>
          );
        })}
      </div>

      <div className="p-4 mt-auto flex flex-col gap-2">
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl">
          <span className="text-sm font-medium text-muted-foreground">Dark mode</span>
          <ThemeToggle />
        </div>
        <Link 
          href="/"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Sign Out</span>
        </Link>
      </div>
    </aside>
  );
}
