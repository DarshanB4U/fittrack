"use client";

import { useStore } from "@/store/useStore";
import { StatsGrid } from "@/components/dashboard/StatsGrid";
import { ActivityChart } from "@/components/dashboard/ActivityChart";
import { RecentWorkouts } from "@/components/dashboard/RecentWorkouts";
import { Bell, Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const { name, username } = useStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const displayName = name ? name.split(" ")[0] : username || "Athlete";

  if (!mounted) return null;

  return (
    <main className="p-4 sm:p-8 w-full max-w-7xl mx-auto">
      {/* Header */}
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, {displayName}!</h1>
          <p className="text-muted-foreground mt-1">Here is your fitness summary for today.</p>
        </div>
        
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text"
              placeholder="Search..."
              className="w-full h-10 pl-9 pr-4 rounded-full bg-card border border-border focus:outline-none focus:border-primary/50 text-sm"
            />
          </div>
          <button className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border/80 transition-colors shrink-0">
            <Bell className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="flex flex-col gap-8">
        <StatsGrid />
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ActivityChart />
          </div>
          <div className="lg:col-span-1">
            <RecentWorkouts />
          </div>
        </div>
      </div>
    </main>
  );
}
