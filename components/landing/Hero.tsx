"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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

            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/onboarding">
                <Button size="lg" className="px-8 bg-primary hover:opacity-90">
                  Start your free trial
                </Button>
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
              <div className="relative bg-accent  overflow-hidden  shadow-lg border border-border">
                {/* Simulated athlete illustration using CSS/SVG container */}
                <div className=" items-center h-96  bgjustify-center ">
                  {/* Decorative curved minimal avatar illustration */}

                  <img
                    className="w-full h-full object-cover"
                    src={"./jonathan.jpg"}
                    // src={""}
                  ></img>
                </div>

                {/* Simulated Floating Chat Panel */}
                {/* <div className="absolute top-2 right-6 bg-white rounded-2xl p-4 shadow-xl  border-2 border-[#0d6254] max-w-[220px]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <p className="text-xs font-bold text-foreground">
                      Active Recovery
                    </p>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-normal font-medium">
                    "Your HRV indicates ready status. Push harder today."
                  </p>
                </div> */}
              </div>

              {/* Stats Overlay Gauge Box */}
              <div className="absolute -left-48 bg-primary  bottom-6 flex items-end rounded-4xl w-1.5 h-18  ">
                {/* Arc */}
                <div className="relative w-90 h-90 shrink-0">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    {/* Background */}
                    <path
                      d="M40 140 A60 60 0 1 1 160 140"
                      fill="none"
                      stroke="#CFEFE8"
                      strokeWidth="22"
                      strokeLinecap="round"
                    />

                    {/* Progress */}
                    <path
                      d="M40 140 A60 60 0 1 1 160 140"
                      fill="none"
                      stroke="#006B5B"
                      strokeWidth="24"
                      strokeLinecap="round"
                      strokeDasharray="188"
                      strokeDashoffset="112"
                    />
                  </svg>
                </div>

                {/* Text */}
                <div className="-ml-2  relative -left-82 top-6  mb-1 ">
                  <h3 className="  text-[72px] leading-[0.85] font-black font-sans tracking-tight text-black">
                    40<span className="text-3xl align-top">%</span>
                  </h3>

                  <p className="text-[15px] leading-tight font-semibold text-black/70 max-w-[160px]">
                    cost savings per ticket
                  </p>
                </div>
              </div>
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
