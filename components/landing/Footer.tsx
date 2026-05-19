import Link from "next/link";
import { Globe, MessageSquare, Award, Video, Heart } from "lucide-react";
import {
  ImTwitter,
  ImFacebook,
  ImLinkedin2,
  ImYoutube,
  ImTwitch,
} from "react-icons/im";

const columns = [
  {
    title: "Products",
    links: [
      "FitTrack for Strength",
      "FitTrack for Cardio",
      "Integrations",
      "Product updates",
      "System status",
      "Sign in",
      "FitTrack for Enterprise",
      "FitTrack for Small Business",
      "FitTrack for Startups",
      "FitTrack Benchmark",
    ],
  },
  {
    title: "Features",
    links: [
      "Workout Logs",
      "Messaging & live coach chat",
      "Help center",
      "Knowledge base",
      "Biometrics tracking",
      "Community forums",
      "Reporting & analytics",
      "AI and automation",
    ],
  },
  {
    title: "Resources",
    links: [
      "Security",
      "Support",
      "Blog",
      "Training",
      "Partners",
      "Events and webinars",
      "Professional services",
      "Customer stories",
      "What is FitTrack?",
      "Routine guide",
    ],
  },
  {
    title: "Company",
    links: [
      "About us",
      "Newsroom",
      "What is FitTrack?",
      "Careers",
      "Diversity and inclusion",
      "Social impact",
      "FitTrack Foundation",
      "Legal",
    ],
  },
  {
    title: "Trending",
    links: [
      { name: "Habit Trends 2026", badge: "NEW" },
      "Health calculator",
      "Gartner Magic Quadrant",
      "Sustainability report",
      "Join our research panel",
      "Active tracking software",
      "Routine builder",
      "Live advisory service",
      "Fitness forums",
      "Personal coaching desk",
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#17120F] text-[#EFEBE1] pt-20 pb-12 font-sans border-t border-black/10">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Top Multi-column Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {columns.map((column, colIdx) => (
            <div key={colIdx}>
              <h4 className="text-white font-bold text-sm mb-6 tracking-wide">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIdx) => {
                  if (typeof link === "object") {
                    return (
                      <li key={linkIdx}>
                        <Link
                          href="#"
                          className="text-[#A8A39D] hover:text-white transition-colors text-[13px] font-semibold flex items-center gap-2"
                        >
                          <span>{link.name}</span>
                          <span className="bg-[#CEFA5A] text-[#17120F] text-[9px] px-1.5 py-0.5 rounded font-extrabold">
                            {link.badge}
                          </span>
                        </Link>
                      </li>
                    );
                  }
                  return (
                    <li key={linkIdx}>
                      <Link
                        href="#"
                        className="text-[#A8A39D] hover:text-white transition-colors text-[13px] font-semibold"
                      >
                        {link}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <hr className="border-[#2E2824] my-10" />

        {/* Contact & Social Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-medium text-white text-center md:text-left">
            How can we help?{" "}
            <span className="underline decoration-[#CEFA5A] decoration-2 underline-offset-4 cursor-pointer hover:opacity-80 transition-opacity">
              Contact us.
            </span>
          </h2>

          {/* Social Icons */}
          <div className="flex gap-6 text-[#A8A39D]">
            <a href="#" className="hover:text-white transition-colors">
              <ImTwitter className="w-5 h-5 fill-current stroke-0" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <ImFacebook className="w-5 h-5 fill-current stroke-0" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <ImLinkedin2 className="w-5 h-5 fill-current stroke-0" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <ImYoutube className="w-5 h-5 fill-current stroke-0" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <ImTwitch className="w-5 h-5 stroke-2" />
            </a>
          </div>
        </div>

        <hr className="border-[#2E2824] my-10" />

        {/* Giant Logo Text */}
        <div className="mb-12 overflow-hidden select-none">
          <h1 className="text-[12vw] font-black tracking-tighter text-[#f6f0e9] leading-none text-center font-sans uppercase">
            fittrack
          </h1>
        </div>

        {/* Bottom Legal Links Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold text-[#A8A39D] mb-8 border-t border-[#2E2824]/50 pt-8">
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Notice
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Cookie Notice
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              F+ Cookie settings
            </Link>
          </div>
          <p>&copy; FitTrack {new Date().getFullYear()}</p>
        </div>

        {/* Disclaimer Text */}
        <div className="text-[10px] text-[#A8A39D]/50 leading-relaxed font-semibold">
          <p>
            FitTrack, Critical Capabilities for the CRM Customer Engagement
            Center, 8 June 2026, Nadine LeBlanc, Brian Manusama. FitTrack does
            not endorse any vendor, product or service depicted in its research
            publications and does not advise technology users to select only
            those vendors with the highest ratings or other designations.
            FitTrack research publications consist of the opinions of FitTrack's
            Research & Advisory organization and should not be construed as
            statements of fact. FitTrack disclaims all warranties, expressed or
            implied, with respect to this research, including any warranties of
            merchantability or fitness for a particular purpose. FITTRACK is a
            registered trademark and service mark of FitTrack, Inc. and/or its
            affiliates in the U.S. and internationally and is used herein with
            permission. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
