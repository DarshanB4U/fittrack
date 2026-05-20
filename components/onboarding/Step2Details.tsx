"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/useStore";
import { motion } from "framer-motion";

export function Step2Details({ onNext }: { onNext: () => void }) {
  const { dob, gender, height, weight, updateData } = useStore();
  
  // Local state initialized with store values
  const [localDob, setLocalDob] = useState(dob || "1995-01-01");
  const [localGender, setLocalGender] = useState(gender || "Male");
  const [localHeight, setLocalHeight] = useState(height || 170);
  const [localWeight, setLocalWeight] = useState(weight || 70);

  const isValid = localDob !== "" && localGender !== "";

  const onSubmit = () => {
    updateData({
      dob: localDob,
      gender: localGender,
      height: localHeight,
      weight: localWeight
    });
    onNext();
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">About You</h2>
        <p className="text-muted-foreground">This helps us tailor your experience.</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium ml-1">Gender</label>
          <div className="flex gap-3">
            {["Male", "Female", "Other"].map((g) => (
              <button
                key={g}
                onClick={() => setLocalGender(g)}
                className={`flex-1 py-3 px-4 rounded-xl border transition-all text-sm font-medium ${
                  localGender === g 
                    ? "bg-primary/20 border-primary text-primary glow" 
                    : "bg-background border-border text-muted-foreground hover:bg-muted"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium ml-1">Date of Birth</label>
          <input
            type="date"
            value={localDob}
            onChange={(e) => setLocalDob(e.target.value)}
            className="w-full h-12 px-4 rounded-xl bg-background border border-border transition-all focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 text-foreground"
          />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-end">
            <label className="text-sm font-medium ml-1">Height (cm)</label>
            <span className="text-2xl font-bold text-primary">{localHeight}</span>
          </div>
          <input
            type="range"
            min="120"
            max="220"
            value={localHeight}
            onChange={(e) => setLocalHeight(parseInt(e.target.value))}
            className="w-full accent-primary h-2 bg-muted rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-end">
            <label className="text-sm font-medium ml-1">Weight (kg)</label>
            <span className="text-2xl font-bold text-primary">{localWeight}</span>
          </div>
          <input
            type="range"
            min="40"
            max="150"
            value={localWeight}
            onChange={(e) => setLocalWeight(parseInt(e.target.value))}
            className="w-full accent-primary h-2 bg-muted rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <Button onClick={onSubmit} className="w-full h-12 mt-8 text-base" disabled={!isValid}>
          Continue
        </Button>
      </div>
    </div>
  );
}
