"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started on your wellness journey.",
    features: [
      "Basic workout tracking",
      "Up to 3 custom routines",
      "Standard analytics",
      "Community access",
    ],
    button: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "/mo",
    description: "Everything you need to take your physical training to the next level.",
    features: [
      "Unlimited active logs",
      "Advanced nutrition analytics",
      "Premium heart rate zones",
      "Priority advisory support",
      "Wearable integration",
    ],
    button: "Start Free Trial",
    popular: true,
  },
  {
    name: "Elite",
    price: "$29",
    period: "/mo",
    description: "For serious athletic optimization and personal coaches.",
    features: [
      "Everything in Pro",
      "1-on-1 performance consultation",
      "Biometric recovery mapping",
      "Dynamic workout scaling",
      "Early beta features",
    ],
    button: "Upgrade to Elite",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-background border-t border-b border-black/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-primary font-sans block mb-4">
            SIMPLE PRICING
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-medium text-foreground">
            Choose your wellness plan
          </h2>
          <p className="text-base text-foreground/75 mt-4 font-medium">
            Clear, transparent tier systems tailored to fit your specific fitness goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-background rounded-3xl p-8 flex flex-col justify-between border relative transition-all duration-300 ${
                plan.popular 
                  ? "border-primary shadow-lg ring-1 ring-primary" 
                  : "border-forground/10 hover:border-black/20"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                  Most Popular
                </div>
              )}
              
              <div>
                <div className="mb-6">
                  <h3 className="text-2xl font-heading font-semibold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm font-medium">{plan.description}</p>
                </div>
                
                <div className="mb-8 flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold text-foreground">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground font-semibold">{plan.period}</span>}
                </div>

                <hr className="border-border mb-6" />

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                      <Check className="w-5 h-5 text-primary shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                variant={plan.popular ? "default" : "outline"} 
                className="w-full h-11 text-sm font-semibold"
              >
                {plan.button}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
