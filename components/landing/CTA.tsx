"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-16 bg-[#3E181D] text-[#FAF8F5]">
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left Text */}
          <h2 className="text-3xl md:text-4xl font-heading font-medium tracking-tight text-center md:text-left leading-normal">
            Exceed every physical expectation.
          </h2>

          {/* Right Action Buttons */}
          <div className="flex flex-wrap gap-4 shrink-0">
            <Button className="bg-[#FAF8F5] text-[#3E181D] hover:bg-[#FAF8F5]/90 px-6 h-11 text-sm font-semibold">
              Free trial
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 h-11 text-sm font-semibold">
              Get a demo
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
