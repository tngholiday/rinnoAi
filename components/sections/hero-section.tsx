"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative py-24 md:py-32 overflow-hidden px-5" >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20" />
      
      {/* Animated brackets */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.4, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute left-0 top-1/2 -translate-y-1/2 text-[20rem] font-bold text-blue-500/20 hidden lg:block"
      >
        {"{"}
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.4, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 text-[20rem] font-bold text-pink-500/20 hidden lg:block"
      >
        {"}"}
      </motion.div>
      
      <div className="   container max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tighter mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                Innovative Software
              </span>
              <br /> Solutions for the Future
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            We build cutting-edge software powered by artificial intelligence to help businesses transform and thrive in the digital age.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button onClick={() => router.push('/about')} size="lg" className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-medium">
              Get Started
            </Button>
            <Button onClick={() => router.push('/blog')} size="lg" variant="outline" className="group">
              Learn More <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}