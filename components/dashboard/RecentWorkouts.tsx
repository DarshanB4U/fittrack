"use client";

import { motion } from "framer-motion";
import { Dumbbell, Activity, Flame } from "lucide-react";

const workouts = [
  {
    id: 1,
    title: "Upper Body Power",
    type: "Strength",
    duration: "45 min",
    calories: "320 kcal",
    icon: Dumbbell,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    time: "Today, 8:00 AM",
  },
  {
    id: 2,
    title: "Morning Run",
    type: "Cardio",
    duration: "30 min",
    calories: "450 kcal",
    icon: Activity,
    color: "text-primary",
    bgColor: "bg-primary/10",
    time: "Yesterday, 7:30 AM",
  },
  {
    id: 3,
    title: "HIIT Session",
    type: "HIIT",
    duration: "25 min",
    calories: "400 kcal",
    icon: Flame,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    time: "Mon, 6:00 PM",
  },
];

export function RecentWorkouts() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="glass rounded-3xl p-6 h-full border border-white/5"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold">Recent Workouts</h3>
        <button className="text-sm text-primary hover:underline">View All</button>
      </div>

      <div className="space-y-4">
        {workouts.map((workout, i) => (
          <motion.div 
            key={workout.id}
            whileHover={{ x: 4 }}
            className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
          >
            <div className={`w-12 h-12 rounded-xl ${workout.bgColor} flex items-center justify-center shrink-0`}>
              <workout.icon className={`w-6 h-6 ${workout.color}`} />
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-foreground truncate">{workout.title}</h4>
              <p className="text-xs text-muted-foreground truncate">{workout.type} • {workout.time}</p>
            </div>
            
            <div className="text-right shrink-0">
              <p className="text-sm font-bold text-foreground">{workout.duration}</p>
              <p className="text-xs text-muted-foreground">{workout.calories}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <button className="w-full mt-6 py-3 rounded-xl border border-dashed border-white/20 text-muted-foreground hover:text-foreground hover:border-white/40 transition-colors text-sm font-medium flex items-center justify-center gap-2">
        <Dumbbell className="w-4 h-4" />
        Log New Workout
      </button>
    </motion.div>
  );
}
