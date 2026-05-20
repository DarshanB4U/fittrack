"use client";

import { motion } from "framer-motion";
import { Flame, Timer, Dumbbell, Trophy } from "lucide-react";

const stats = [
  {
    label: "Calories Burned",
    value: "2,450",
    unit: "kcal",
    icon: Flame,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    trend: "+12%",
    trendUp: true,
  },
  {
    label: "Active Time",
    value: "4.5",
    unit: "hrs",
    icon: Timer,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    trend: "+5%",
    trendUp: true,
  },
  {
    label: "Workouts",
    value: "5",
    unit: "this week",
    icon: Dumbbell,
    color: "text-primary",
    bgColor: "bg-primary/10",
    trend: "-1",
    trendUp: false,
  },
  {
    label: "Personal Records",
    value: "3",
    unit: "all time",
    icon: Trophy,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    trend: "+2",
    trendUp: true,
  },
];

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="glass rounded-2xl p-5"
        >
          <div className="flex justify-between items-start mb-4">
            <div className={`p-2.5 rounded-xl ${stat.bgColor}`}>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <div className={`text-xs font-bold px-2 py-1 rounded-full ${
              stat.trendUp ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"
            }`}>
              {stat.trend}
            </div>
          </div>
          
          <div>
            <p className="text-sm text-muted-foreground font-medium mb-1">{stat.label}</p>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-bold text-foreground">{stat.value}</span>
              <span className="text-sm text-muted-foreground">{stat.unit}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
