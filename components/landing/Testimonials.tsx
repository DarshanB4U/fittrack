"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-24 bg-bg2">
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Panel: Mock Video Player */}
          <div className="relative aspect-video rounded-3xl overflow-hidden bg-accent border border-black/5 shadow-lg group cursor-pointer">
            {/* Visual aesthetic gradient simulating play layout */}
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/40 via-background to-primary/20 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                <Play className="w-6 h-6 fill-primary" />
              </div>
            </div>
            {/* Overlay description tag */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md py-1.5 px-3 rounded-full text-xs font-bold text-foreground border border-black/5">
              Personal Coaching Video
            </div>
          </div>

          {/* Right Panel: Content */}
          <div className="max-w-md">
            <span className="text-sm px-1 font-extrabold uppercase tracking-widest dark:text-black text-primary font-sans">
              PERSONALIZED COACHING
            </span>
            <h2 className="text-4xl md:text-5xl font-heading  text-background  font-medium mt-4 mb-6 leading-tight">
              Take your progress personally
            </h2>
            <p className="text-base text-background/75 leading-relaxed mb-8 font-medium">
              For long-term health, every habit should feel tailor-made for you.
              FitTrack offers the personalization features and dynamic
              adjustment protocols you need to keep moving forward.
            </p>
            <Button
              variant="secondary"
              className="px-6 h-12 text-sm font-semibold  hover:text-white border-foreground hover:bg-foreground/5 text-secondery  hover:bg-destructive"
            >
              Explore all features
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
