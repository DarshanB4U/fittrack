"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  {
    id: "01",
    title: "WORKOUT TRACKING",
    heading: "Track every workout with precision",
    description:
      "Monitor reps, calories, sets, intensity, and weekly progress with powerful analytics.",
    bullets: [
      "Real-time workout logging",
      "Track strength progression",
      "Performance analytics",
      "Custom workout plans",
    ],
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: "02",
    title: "AI FITNESS COACH",
    heading: "Personalized AI fitness coaching",
    description:
      "Get intelligent recommendations based on recovery, activity, and performance.",
    bullets: [
      "Smart recovery insights",
      "AI-generated plans",
      "Daily recommendations",
      "Adaptive intensity",
    ],
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: "03",
    title: "NUTRITION",
    heading: "Optimize nutrition and recovery",
    description:
      "Track meals, macros, hydration, and recovery patterns in one place.",
    bullets: [
      "Macro tracking",
      "Meal suggestions",
      "Hydration monitoring",
      "Recovery optimization",
    ],
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: "04",
    title: "PROGRESS ANALYTICS",
    heading: "Visualize long-term body progress",
    description:
      "Understand trends in strength, endurance, and body performance over time.",
    bullets: [
      "Weekly reports",
      "Body metrics",
      "Strength graphs",
      "Habit consistency",
    ],
    image:
      "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function FitnessSections() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionRefs.current.forEach((section, index) => {
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(index);
          }
        },
        {
          threshold: 0.5,
        },
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="relative bg-foreground  text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-10">
        {/* LEFT FIXED NAV */}
        <div className="col-span-2  hidden  lg:block">
          <div className="sticky top-24 h-screen pt-24">
            <div className="flex flex-col gap-6">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  className="flex items-center gap-4 text-left group"
                >
                  <div
                    className={`
    size-10  shrink-0
    
    
    flex items-center justify-center
    text-sm font-bold
    transition-all duration-300
    ${
      activeSection === index
        ? "bg-white text-black border-white"
        : "border-white/20 text-white/40"
    }
  `}
                  >
                    {section.id}
                  </div>

                  <span
                    className={`
                      text-xs tracking-wider font-medium transition-colors duration-300
                      ${
                        activeSection === index ? "text-white" : "text-white/40"
                      }
                    `}
                  >
                    {section.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* MIDDLE CONTENT */}
        <div className="col-span-12 lg:col-span-5">
          {sections.map((section, index) => (
            <div
              key={section.id}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              className="min-h-screen flex items-start pt-40"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-xl"
              >
                <p className="text-sm tracking-[0.2em] text-white/40 mb-5">
                  {section.title}
                </p>

                <h2 className="text-5xl font-semibold leading-tight mb-6">
                  {section.heading}
                </h2>

                <p className="text-lg leading-relaxed text-white/70 mb-8">
                  {section.description}
                </p>

                <ul className="space-y-4 mb-10">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-center gap-3 text-white/90"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <button
                  className="
                    border border-white/20
                    rounded-full
                    px-6 py-3
                    text-sm font-medium
                    hover:bg-white hover:text-black
                    transition-all duration-300
                  "
                >
                  Explore feature
                </button>
              </motion.div>
            </div>
          ))}
        </div>

        {/* RIGHT FIXED IMAGE */}
        <div className="hidden lg:block lg:col-span-5">
          <div className="sticky top-24 h-screen flex items-center">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="
                relative
                w-full
                aspect-[0.9]
                overflow-hidden
                rounded-[32px]
                border border-white/10
                bg-neutral-900
              "
            >
              <img
                src={sections[activeSection].image}
                alt={sections[activeSection].title}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              {/* Floating Card */}
              <div
                className="
                  absolute bottom-6 left-6 right-6
                  rounded-2xl
                  border border-white/10
                  bg-black/70
                  backdrop-blur-xl
                  p-6
                "
              >
                <p className="text-sm text-white/50 mb-2">
                  {sections[activeSection].title}
                </p>

                <h3 className="text-2xl font-semibold">
                  {sections[activeSection].heading}
                </h3>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
