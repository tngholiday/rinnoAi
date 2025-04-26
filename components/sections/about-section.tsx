"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Code, Zap, LineChart, Users } from "lucide-react";

export function AboutSection() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="about" className="py-20 px-5">
      <div className="   container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transforming Ideas into{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Powerful Solutions
              </span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Founded in 2018, RinnoAI Softwares has been at the forefront of
              technological innovation, helping businesses leverage the power of
              artificial intelligence and cutting-edge software solutions to
              achieve their goals.
            </p>
            <p className="text-muted-foreground mb-8">
              Our team of dedicated experts combines technical excellence with
              creative problem-solving to deliver solutions that drive real
              business value. We believe in building long-term partnerships with
              our clients, working collaboratively to understand their unique
              challenges and opportunities.
            </p>
            <Button
              onClick={() => router.push('/blog')}
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium"
            >
              Learn Our Story
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-card rounded-xl p-6 shadow-md">
              <Code className="h-10 w-10 text-blue-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Expert Development</h3>
              <p className="text-muted-foreground text-sm">
                Our developers use the latest technologies and best practices.
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-md">
              <Zap className="h-10 w-10 text-purple-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Rapid Innovation</h3>
              <p className="text-muted-foreground text-sm">
                We move quickly to turn ideas into functional software.
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-md">
              <LineChart className="h-10 w-10 text-pink-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Data-Driven</h3>
              <p className="text-muted-foreground text-sm">
                We leverage data to build intelligent, adaptive solutions.
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-md">
              <Users className="h-10 w-10 text-orange-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Client Partnership</h3>
              <p className="text-muted-foreground text-sm">
                We work closely with you to ensure project success.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}