"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/useStore";
import { motion } from "framer-motion";
import { Check, Flame, Dumbbell, Heart, Brain, Apple, BatteryCharging } from "lucide-react";

const GOALS = [
  { id: "lose_weight", label: "Lose Weight", icon: Flame, desc: "Burn fat and get lean" },
  { id: "build_muscle", label: "Build Muscle", icon: Dumbbell, desc: "Increase muscle mass" },
  { id: "stay_active", label: "Stay Active", icon: BatteryCharging, desc: "Maintain overall fitness" },
  { id: "improve_flexibility", label: "Flexibility", icon: Heart, desc: "Move better, feel better" },
  { id: "eat_healthier", label: "Eat Healthier", icon: Apple, desc: "Improve your diet" },
  { id: "reduce_stress", label: "Reduce Stress", icon: Brain, desc: "Mental wellness focus" },
];

export function Step3Goals({ onNext }: { onNext: () => void }) {
  const { goals, updateData } = useStore();
  const [selectedGoals, setSelectedGoals] = useState<string[]>(goals || []);

  const toggleGoal = (id: string) => {
    if (selectedGoals.includes(id)) {
      setSelectedGoals(selectedGoals.filter(g => g !== id));
    } else {
      setSelectedGoals([...selectedGoals, id]);
    }
  };

  const onSubmit = () => {
    updateData({ goals: selectedGoals });
    onNext();
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Your Goals</h2>
        <p className="text-muted-foreground">Select all that apply.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {GOALS.map((goal) => {
          const isSelected = selectedGoals.includes(goal.id);
          return (
            <motion.div
              key={goal.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => toggleGoal(goal.id)}
              className={`relative cursor-pointer p-4 rounded-xl border transition-all duration-300 flex items-start gap-3 ${
                isSelected 
                  ? "bg-primary/10 border-primary shadow-md shadow-primary/20" 
                  : "bg-background border-border hover:border-primary/50 hover:bg-muted"
              }`}
            >
              <div className={`p-2 rounded-lg mt-1 transition-colors ${isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                <goal.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className={`font-semibold transition-colors ${isSelected ? "text-primary" : "text-foreground"}`}>
                  {goal.label}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">{goal.desc}</p>
              </div>
              
              {isSelected && (
                <motion.div 
                  initial={{ scale: 0 }} 
                  animate={{ scale: 1 }}
                  className="absolute top-2 right-2 w-5 h-5 bg-primary rounded-full flex items-center justify-center"
                >
                  <Check className="w-3 h-3 text-primary-foreground" />
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      <Button 
        onClick={onSubmit} 
        className="w-full h-12 text-base" 
        disabled={selectedGoals.length === 0}
      >
        Continue
      </Button>
    </div>
  );
}
