"use client";

import { motion } from "framer-motion";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
        <span className="text-xs font-extrabold uppercase tracking-widest text-primary font-sans block mb-6">
          FITTRACK FOR YOU
        </span>

        <div className="grid md:grid-cols-12 gap-12 items-center mb-16">
          {/* Left: Quote */}
          <div className="md:col-span-7">
            <h2 className="text-3xl md:text-4xl font-heading font-medium mb-6 text-foreground">
              Perfect the physical experience
            </h2>
            <p className="text-2xl md:text-3xl font-heading font-normal leading-relaxed text-foreground/80 italic mb-8">
              "FitTrack's custom capabilities, flexibility, and data depth allow
              me to be creative with how I'm training. And they let me scale in
              really interesting and powerful ways."
            </p>
            <div>
              <p className="font-extrabold text-foreground">Laurie Leduc</p>
              <p className="text-sm text-muted-foreground font-semibold">
                Head of Athletic Performance
              </p>
            </div>
          </div>

          {/* Right: Modern drawing avatar placeholder */}
          <div className="md:col-span-5 flex justify-center">
            {/* Zendesk style solid cartoon character placeholder */}
            <img
              className="w-70 h-70 bg-primary rounded-full relative flex items-center justify-center text-8xl"
              src={"./wrist-weight.svg"}
            ></img>
          </div>
        </div>

        {/* Bottom Tab Navigation Style selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-border pt-8 text-center md:text-left">
          {[
            "Personalize all routines",
            "Anticipate recovery with AI",
            "Adapt to energy levels",
            "Make good decisions with metrics",
          ].map((tab, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="h-0.5 w-full bg-border group-hover:bg-primary transition-colors mb-4" />
              <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                {tab}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
