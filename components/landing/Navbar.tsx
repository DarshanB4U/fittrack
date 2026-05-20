// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { ThemeToggle } from "@/components/ui/theme-toggle";
// import { HoverStackButton } from "../ui/hover-stack-button";

// export function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-2 ${
//         isScrolled
//           ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto px-6 lg:px-12">
//         <div className="flex items-center justify-between h-20">
//           <Link href="/" className="flex items-center gap-2">
//             <span className=" font-bold text-2xl  text-foreground uppercase font-sans tracking-tight">
//               fittrack
//             </span>
//             {/* <div className="mb-12 overflow-hidden select-none">
//           <h1 className="text-[12vw] font-black tracking-tighter text-[#f6f0e9] leading-none text-center font-sans uppercase">
//             fittrack
//           </h1>
//         </div> */}
//           </Link>

//           {/* Desktop Nav */}
//           <nav className="hidden md:flex items-center gap-8">
//             <Link
//               href="#features"
//               className="text-[15px] font-semibold text-foreground/80 hover:text-foreground transition-colors"
//             >
//               Features
//             </Link>
//             <Link
//               href="#how-it-works"
//               className="text-[15px] font-semibold text-foreground/80 hover:text-foreground transition-colors"
//             >
//               How it works
//             </Link>
//             <Link
//               href="#pricing"
//               className="text-[15px] font-semibold text-foreground/80 hover:text-foreground transition-colors"
//             >
//               Pricing
//             </Link>
//           </nav>

//           <div className="hidden md:flex items-center gap-5">
//             <ThemeToggle />
//             <Link
//               href="/login"
//               className="text-[15px] font-semibold text-foreground/80 hover:text-foreground transition-colors"
//             >
//               Sign in
//             </Link>
//             <Link href="/onboarding">
//               <HoverStackButton className="h-10  text-sm font-semibold">
//                 Free trial
//               </HoverStackButton>
//             </Link>
//           </div>

//           {/* Mobile right actions */}
//           <div className="md:hidden flex items-center gap-2">
//             <ThemeToggle />
//             <button
//               className="p-2 text-foreground"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             >
//               {isMobileMenuOpen ? (
//                 <X className="w-6 h-6" />
//               ) : (
//                 <Menu className="w-6 h-6" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Nav Drawer */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden bg-background border-b border-border overflow-hidden"
//           >
//             <div className="px-6 py-6 flex flex-col gap-4">
//               <Link
//                 href="#features"
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className="text-lg font-bold text-foreground/80 hover:text-foreground transition-colors"
//               >
//                 Features
//               </Link>
//               <Link
//                 href="#how-it-works"
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className="text-lg font-bold text-foreground/80 hover:text-foreground transition-colors"
//               >
//                 How it works
//               </Link>
//               <Link
//                 href="#pricing"
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className="text-lg font-bold text-foreground/80 hover:text-foreground transition-colors"
//               >
//                 Pricing
//               </Link>
//               <hr className="border-border my-2" />
//               <Link
//                 href="/login"
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className="text-lg font-bold text-foreground/80 hover:text-foreground transition-colors"
//               >
//                 Sign in
//               </Link>
//               <Link
//                 href="/onboarding"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 <Button className="w-full mt-2">Free trial</Button>
//               </Link>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { AnimatePresence, motion } from "framer-motion";
// import NavbarDropdown from "./NavbarDropdown";

// const menuItems = [
//   "Products",
//   "Solutions",
//   "Resources",
//   "Docs",
//   "Enterprise",
//   "Pricing",
// ];

// export default function Navbar() {
//   const [activeMenu, setActiveMenu] = useState<string | null>(null);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`
//         fixed top-0 left-0 right-0 z-50
//         transition-all duration-300
//         ${
//           isScrolled
//             ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
//             : "bg-transparent"
//         }
//       `}
//     >
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="h-20 flex items-center justify-between">
//           {/* Logo */}
//           <Link
//             href="/"
//             className="text-white text-2xl font-black tracking-tight"
//           >
//             fittrack
//           </Link>

//           {/* Nav */}
//           <nav
//             className="hidden lg:flex items-center gap-8"
//             onMouseLeave={() => setActiveMenu(null)}
//           >
//             {menuItems.map((item) => (
//               <div
//                 key={item}
//                 className="relative"
//                 onMouseEnter={() => setActiveMenu(item)}
//               >
//                 <button
//                   className="
//                     text-sm font-medium text-white/70
//                     hover:text-white transition-colors
//                   "
//                 >
//                   {item}
//                 </button>
//               </div>
//             ))}
//           </nav>

//           {/* Actions */}
//           <div className="hidden lg:flex items-center gap-4">
//             <button
//               className="
//                 text-sm font-medium text-white/70
//                 hover:text-white transition-colors
//               "
//             >
//               Contact sales
//             </button>

//             <button
//               className="
//                 h-11 px-6 rounded-full
//                 bg-[#ff5b36]
//                 text-black
//                 text-sm font-semibold
//                 hover:scale-[1.03]
//                 transition-all duration-300
//               "
//             >
//               Dashboard
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Dropdown */}
//       <AnimatePresence>
//         {activeMenu && (
//           <NavbarDropdown
//             activeMenu={activeMenu}
//             setActiveMenu={setActiveMenu}
//           />
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import NavbarDropdown from "./NavbarDropdown";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { HoverStackButton } from "../ui/hover-stack-button";
import Logo from "../ui/fit-track-log";

const menuItems = [
  "Products",
  "Solutions",
  "Resources",
  "Docs",
  "Enterprise",
  "Pricing",
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
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
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }
      `}
    >
      <div className="w-full mx-auto px-6">
        <div className="h-20 flex items-center justify-between">
          
            <Logo></Logo>
          

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-8"
            onMouseLeave={() => setActiveMenu(null)}
          >
            {menuItems.map((item) => (
              <div
                key={item}
                className="relative"
                onMouseEnter={() => setActiveMenu(item)}
              >
                <button
                  className="
                    text-sm font-medium
                    text-foreground/70
                    hover:text-foreground
                    transition-colors
                  "
                >
                  {item}
                </button>
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Contact */}
            <button
              className="
                text-sm font-medium
                text-foreground/70
                hover:text-foreground
                transition-colors
              "
            >
              Contact sales
            </button>

            {/* Hover Stack Button */}
            <Link href="/dashboard">
              <HoverStackButton
                className="
                  text-sm
                  font-semibold
                  text-black
                "
              >
                Dashboard
              </HoverStackButton>
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center gap-3">
            <ThemeToggle />

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Dropdown */}
      <AnimatePresence>
        {activeMenu && (
          <NavbarDropdown
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div
            className="
              lg:hidden
              bg-background/95
              backdrop-blur-xl
              border-b border-border
            "
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {menuItems.map((item) => (
                <button
                  key={item}
                  className="
                    text-left
                    text-lg
                    font-semibold
                    text-foreground/80
                    hover:text-foreground
                    transition-colors
                  "
                >
                  {item}
                </button>
              ))}

              <div className="border-t border-border pt-5 flex flex-col gap-4">
                <button
                  className="
                    text-left
                    text-lg
                    font-semibold
                    text-foreground/80
                    hover:text-foreground
                    transition-colors
                  "
                >
                  Contact sales
                </button>

                <Link href="/dashboard">
                  <HoverStackButton className="text-sm font-semibold">
                    Dashboard
                  </HoverStackButton>
                </Link>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
