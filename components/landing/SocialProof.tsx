"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const announcements = [
  {
    title: "Unlock intelligent tracking",
    desc: "Feel the power of real-time active tracking across your entire fitness journey. Our sensors learn you.",
    link: "Watch now",
  },
  {
    title: "Meet FitTrack AI",
    desc: "AI is here to stay, but only FitTrack makes it easy to optimize your cardiovascular health and recovery right out of the box.",
    link: "AI features",
  },
  {
    title: "Cut routines the smart way",
    desc: "Find out how to use strategic insights to burn fat and increase muscle while spending less time in the gym.",
    link: "Get the playbook",
  },
];

export function SocialProof() {
  return (
    <section className="bg-linear-to-b from-secondary  to-background py-20    text-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-foreground/70">
            NEW AT FITTRACK
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-medium mt-3 mb-6">
            FitTrack Relate 2026
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed font-medium">
            FitTrack Relate, our global personal wellness event, showed us the
            future of intelligent recovery. If you missed it, no worries. You
            can still relive the action. Or check out our product announcements
            below.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {announcements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card-foreground p-8 border border-black/10 flex flex-col justify-between min-h-[220px]"
            >
              <div>
                <h3 className="text-xl font-heading font-medium mb-3 text-background">
                  {item.title}
                </h3>
                <p className="text-sm text-background/70 leading-relaxed mb-6 font-medium">
                  {item.desc}
                </p>
              </div>
              <Link
                href="#"
                className="text-sm font-bold underline hover:no-underline text-background"
              >
                {item.link}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
