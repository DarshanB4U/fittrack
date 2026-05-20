"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Button3D } from "../ui/button3d";

import { HoverStackButton } from "../ui/hover-stack-button";

export function Features() {
  return (
    <section id="features" className="py-24  w-full flex   bg-background">
      <div
        className="container mx-auto
       px-6 "
      >
        {/* Tour Box */}
        <div className="bg-accent   p-8 md:p-16 flex flex-col md:flex-row items-end gap-12 max-w-full h-full mx-auto ">
          {/* Left Panel */}
          <div
            className="flex-1 max-w-full
          "
          >
            <span className="text-xs font-extrabold uppercase tracking-widest text-primary font-sans">
              SEE FITTRACK IN ACTION
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-medium mt-4 mb-6 leading-tight">
              Take a tour
            </h2>
            <p className="text-base text-foreground/75 leading-relaxed mb-8 font-medium">
              Experience FitTrack like your muscles will. Our integrated health
              ecosystem comes with everything you need to optimize physical
              recovery and progress.
            </p>
            <HoverStackButton className="z-0  h-12 text-sm w-full text-nowrap font-semibold tracking-tight">
              Start tour
            </HoverStackButton>
          </div>

          {/* Right Panel (Tour Mockup Illustration) */}
          <div className="flex-1 w-full max-w-md relative flex justify-center h-full">
            <img
              className="w-full h-auto border-2 shadow-2xl rounded-2xl object-cover"
              src="./image.png"
              alt="Take a tour"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
