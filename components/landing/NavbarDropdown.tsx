"use client";

import { motion } from "framer-motion";

const menuContent: Record<
  string,
  {
    title: string;
    items: string[];
  }[]
> = {
  Products: [
    {
      title: "Fitness Tracking",
      items: [
        "Workout Planner",
        "Progress Tracking",
        "Activity Dashboard",
        "Goal System",
      ],
    },

    {
      title: "Health & Recovery",
      items: [
        "Nutrition Tracking",
        "Recovery Insights",
        "Sleep Analysis",
        "Heart Rate Monitor",
      ],
    },

    {
      title: "AI Coaching",
      items: [
        "AI Fitness Coach",
        "Smart Recommendations",
        "Habit Builder",
        "Personalized Plans",
      ],
    },
  ],

  Solutions: [
    {
      title: "Use Cases",
      items: [
        "Personal Fitness",
        "Gym Management",
        "Athlete Performance",
        "Corporate Wellness",
      ],
    },
  ],
};

export default function NavbarDropdown({
  activeMenu,
  setActiveMenu,
}: {
  activeMenu: string;
  setActiveMenu: (v: string | null) => void;
}) {
  const content = menuContent[activeMenu];

  if (!content) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.18 }}
      onMouseEnter={() => setActiveMenu(activeMenu)}
      onMouseLeave={() => setActiveMenu(null)}
      className="
        absolute left-0 right-0 top-full
        bg-bg2
        border-t border-white/10
        
      "
    >
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-3 gap-10">
          {content.map((section) => (
            <div key={section.title}>
              <h4
                className="
                  text-sm uppercase tracking-widest
                  text-background/90 mb-5
                "
              >
                {section.title}
              </h4>

              <div className="space-y-3">
                {section.items.map((item) => (
                  <div
                    key={item}
                    className="
                      text-background/80
                      hover:text-white
                      text-lg font-medium
                      transition-colors
                      cursor-pointer
                    "
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
