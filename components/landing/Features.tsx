"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Features() {
  return (
    <section id="features" className="py-24  w-full flex   bg-[#FAF8F5]">
      <div
        className="container mx-auto
       px-6 "
      >
        {/* Tour Box */}
        <div className="bg-[#f6f1e5] b   p-8 md:p-16 flex flex-col md:flex-row items-end gap-12 max-w-full h-full mx-auto ">
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
            <Button className="bg-primary hover:opacity-90 px-8 h-12 text-sm font-semibold">
              Start my tour
            </Button>
          </div>

          {/* Right Panel (Zendesk-Style Mockup Illustration) */}
          <div className="flex-1 w-full max-w-md relative flex justify-center">
            {/* Zendesk style minimal illustration */}
          </div>
          <div className="h-full w-full ">
            <img
              className="  md:visible border-2  shadow-2xl "
              src="./image.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
