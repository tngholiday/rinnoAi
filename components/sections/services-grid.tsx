"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { allServices } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function ServicesGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {Object.entries(allServices).map(([key, category]) => (
        <motion.div
          key={key}
          variants={item}
          className="bg-card rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-2xl font-semibold mb-4">{category.title}</h2>
          <p className="text-muted-foreground mb-6">{category.description}</p>
          <ul className="space-y-3 mb-6">
            {category.services.map((service, index) => (
              <li key={index} className="flex items-center">
                <ChevronRight className="h-4 w-4 text-primary mr-2" />
                <span>{service}</span>
              </li>
            ))}
          </ul>
          <Button
            className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white"
          >
            Learn More
          </Button>
        </motion.div>
      ))}
    </motion.div>
  );
}