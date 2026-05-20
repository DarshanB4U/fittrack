"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HoverStackButton } from "../ui/hover-stack-button";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden min-h-[90vh] flex items-center bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 max-w-2xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold tracking-tight mb-8 text-foreground leading-[1.08]">
              Unlock the power of peak physical experiences.
            </h1>

            <p className="text-xl text-foreground mb-10 leading-relaxed max-w-lg font-medium">
              Build lasting habits with our complete wellness solution.
            </p>

            <div className="flex justify-center sm:justify-start flex-wrap items-center gap-4 mb-12">
              <Link href="/onboarding">
                <HoverStackButton className="bg hover:opacity-90">
                  Start your free trial
                </HoverStackButton>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="px-8 border-foreground hover:bg-foreground/5"
              >
                View demo
              </Button>
            </div>

            <div className="border-t border-border pt-6">
              <p className="text-sm font-semibold text-foreground/80">
                #1 in Digital Fitness & Wellness Tracking.
              </p>
            </div>
          </div>

          {/* Right Column (Zendesk Style Widget Mockup) */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Zendesk Screenshot Style Image Box */}
              {/* Simulated athlete illustration using CSS/SVG container */}
              <div className=" items-center h-96  bgjustify-center ">
                {/* Decorative curved minimal avatar illustration */}

                <img
                  className="w-full bg-teal- h-full object-cover"
                  src={"./hero.svg"}
                ></img>
              </div>

              {/* Stats Overlay Gauge Box */}
              
              {/* Caption Line */}
              <p className="text-center text-xs text-muted-foreground font-semibold mt-14">
                Know what your body needs before you do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
