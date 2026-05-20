"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Step1Account } from "./Step1Account";
import { Step2Details } from "./Step2Details";
import { Step3Goals } from "./Step3Goals";
import { Step4Activity } from "./Step4Activity";
import { Step5Profile } from "./Step5Profile";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export function OnboardingFlow() {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
    else router.push("/dashboard");
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
    else router.push("/");
  };

  const steps = [
    { component: <Step1Account onNext={handleNext} /> },
    { component: <Step2Details onNext={handleNext} /> },
    { component: <Step3Goals onNext={handleNext} /> },
    { component: <Step4Activity onNext={handleNext} /> },
    { component: <Step5Profile onNext={handleNext} /> },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="w-full max-w-xl z-10">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <button 
            onClick={handleBack}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-card border border-border hover:bg-muted text-foreground transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((s) => (
              <div 
                key={s} 
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  s === step ? "w-8 bg-primary" : s < step ? "w-4 bg-primary/50" : "w-4 bg-muted"
                }`}
              />
            ))}
          </div>
          
          <div className="w-10" /> {/* Spacer for alignment */}
        </div>

        {/* Content Container */}
        <div className="glass rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {steps[step - 1].component}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
