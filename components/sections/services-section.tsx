"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { services } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { BrainCircuit, Code2, Cloud, Smartphone } from "lucide-react";

const icons = {
  BrainCircuit,
  Code2,
  Cloud,
  Smartphone,
};

export function ServicesSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="services" className="py-20 bg-muted/50 px-5">
      <div className="   container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a wide range of cutting-edge software solutions to help your business thrive in the digital world.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = icons[service.icon as keyof typeof icons];
            return (
              <motion.div
                key={index}
                variants={item}
                className={cn(
                  "relative group rounded-xl p-6 transition-all duration-300",
                  "bg-card hover:shadow-xl hover:-translate-y-1"
                )}
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                  {IconComponent && <IconComponent className="h-6 w-6" />}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
                <div className="absolute inset-0 rounded-xl border border-transparent transition-all duration-300 group-hover:border-primary/20" />
                <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}