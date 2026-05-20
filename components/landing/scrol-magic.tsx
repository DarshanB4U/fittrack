"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  {
    id: "1",
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
    id: "2",
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
    id: "3",
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
    id: "4",
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
    <section className="relative bg-background   text-foreground">
      <div className=" w-full mx-0 sm:grid grid-cols-12  gap-8">
        {/* LEFT FIXED NAV */}
        <div className="col-span-2  hidden  lg:block">
          <div className="sticky top-20 h-fit  py-1">
            <div className="flex flex-col  gap-3">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  className="flex items-center gap-2 text-left group"
                >
                  <div
                    className={`
    size-10  shrink-0
    
    
    flex items-center justify-center
    text-md font-bold
    transition-all duration-300
    ${
      activeSection === index
        ? "bg-bg2 text-white border-white"
        : "border-white/20 text-foreground/40"
    }
  `}
                  >
                    {section.id}
                  </div>

                  <span
                    className={`
                      text-xs tracking-wider  font-medium transition-colors duration-300
                      ${
                        activeSection === index
                          ? "text-foreground"
                          : "text-foreground/40"
                      }
                    `}
                  >
                    {section.title}
                  </span>
                </button>
              ))}
            </div>
            {/* dots */}
            <div
              className="
    mt-8
    h-150
    w-full
    opacity-40
    bg-[radial-gradient(currentColor_1px,transparent_1px)]
    bg-size-[10px_10px]
    text-foreground
  "
            />
          </div>
        </div>

        {/* MIDDLE CONTENT */}
        <div className="col-span-12 lg:col-span-4">
          {sections.map((section, index) => (
            <div
              key={section.id}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              className="min-h-screen flex items-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-xl"
              >
                <p className="text-sm tracking-[0.2em] text-foreground/40 mb-5">
                  {section.title}
                </p>

                <h2 className="text-5xl font-semibold leading-tight mb-6">
                  {section.heading}
                </h2>

                <p className="text-lg leading-relaxed text-foreground/70 mb-8">
                  {section.description}
                </p>

                <ul className="space-y-4 mb-10">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-center gap-3 text-foreground/90"
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
        <div className="hidden lg:block lg:col-span-6 h-full">
          <div className="sticky top-20 h-screen flex items-center">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="
                relative
                w-full
                h-full
                aspect-[0.9]
                overflow-hidden

                bg-neutral-900
                
              "
            >
              <img
                src={sections[activeSection].image}
                alt={sections[activeSection].title}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
