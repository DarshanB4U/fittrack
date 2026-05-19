"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-2 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className=" font-bold text-2xl  text-foreground uppercase font-sans tracking-tight">
              fittrack
            </span>
            {/* <div className="mb-12 overflow-hidden select-none">
          <h1 className="text-[12vw] font-black tracking-tighter text-[#f6f0e9] leading-none text-center font-sans uppercase">
            fittrack
          </h1>
        </div> */}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-[15px] font-semibold text-foreground/80 hover:text-foreground transition-colors"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-[15px] font-semibold text-foreground/80 hover:text-foreground transition-colors"
            >
              How it works
            </Link>
            <Link
              href="#pricing"
              className="text-[15px] font-semibold text-foreground/80 hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/login"
              className="text-[15px] font-semibold text-foreground/80 hover:text-foreground transition-colors"
            >
              Sign in
            </Link>
            <Link href="/onboarding">
              <Button className="h-10 px-5 text-sm font-semibold">
                Free trial
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              <Link
                href="#features"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-bold text-foreground/80 hover:text-foreground transition-colors"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-bold text-foreground/80 hover:text-foreground transition-colors"
              >
                How it works
              </Link>
              <Link
                href="#pricing"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-bold text-foreground/80 hover:text-foreground transition-colors"
              >
                Pricing
              </Link>
              <hr className="border-border my-2" />
              <Link
                href="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-bold text-foreground/80 hover:text-foreground transition-colors"
              >
                Sign in
              </Link>
              <Link
                href="/onboarding"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button className="w-full mt-2">Free trial</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
