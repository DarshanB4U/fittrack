"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/useStore";
import { motion } from "framer-motion";

const LEVELS = [
  { id: "sedentary", label: "Sedentary", desc: "Little or no exercise" },
  { id: "lightly_active", label: "Lightly Active", desc: "Light exercise 1-3 days/week" },
  { id: "moderately_active", label: "Moderately Active", desc: "Moderate exercise 3-5 days/week" },
  { id: "very_active", label: "Very Active", desc: "Heavy exercise 6-7 days/week" },
  { id: "athlete", label: "Athlete", desc: "Very heavy exercise, physical job" },
];

export function Step4Activity({ onNext }: { onNext: () => void }) {
  const { activityLevel, updateData } = useStore();
  const [selected, setSelected] = useState(activityLevel || "");

  const onSubmit = () => {
    updateData({ activityLevel: selected });
    onNext();
  };

  const onSkip = () => {
    updateData({ activityLevel: "" });
    onNext();
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Activity Level</h2>
        <p className="text-muted-foreground">How active are you currently?</p>
      </div>

      <div className="space-y-3 mb-8">
        {LEVELS.map((level, i) => (
          <motion.div
            key={level.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => setSelected(level.id)}
            className={`cursor-pointer p-4 rounded-xl border transition-all flex items-center justify-between ${
              selected === level.id 
                ? "bg-primary/10 border-primary glow" 
                : "bg-background/50 border-white/10 hover:bg-white/5 hover:border-white/20"
            }`}
          >
            <div>
              <h3 className={`font-semibold ${selected === level.id ? "text-primary" : "text-foreground"}`}>
                {level.label}
              </h3>
              <p className="text-sm text-muted-foreground mt-0.5">{level.desc}</p>
            </div>
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
              selected === level.id ? "border-primary" : "border-white/20"
            }`}>
              {selected === level.id && <div className="w-3 h-3 bg-primary rounded-full" />}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <Button 
          onClick={onSubmit} 
          className="w-full h-12 text-base" 
          disabled={!selected}
        >
          Continue
        </Button>
        <button 
          onClick={onSkip}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
        >
          Skip for now
        </button>
      </div>
    </div>
  );
}
