'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import { allServices } from "@/lib/constants";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* 🌟 Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-[#0b0f1a] dark:via-[#1a1e2b] dark:to-[#1e2230]">
        <div className="container max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          >
            Elevate Your Digital Presence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            We craft scalable, modern software solutions tailored to your business needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8"
          >
            <Link
              href="#services"
              className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 🚀 Services Section */}
      <section
        id="services"
        className="container max-w-7xl mx-auto py-20 px-6"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Our Services
          </h2>
          
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(allServices).map(([key, service]) => {
            const Icon = service.icon;
            return (
              <Link key={key} href={`/services/${key}`}>
                <div className="p-[2px] rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
                  <Card className="group h-full p-6 rounded-xl bg-white dark:bg-zinc-900 transition-all duration-300">
                    <div className="relative">
                      <div className="flex items-center mb-3 space-x-3">
                        <Icon className="h-6 w-6 text-primary " />
                        <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      <ul className="space-y-3 mb-8">
                        {service.services.slice(0, 3).map((svc, index) => {
                          const slug = svc.toLowerCase().replace(/\s+/g, "-");
                          const url = `/services/${key}/${slug}`;
                          return (
                            <li key={index} className="flex items-center text-sm">
                              <ChevronRight className="h-4 w-4 text-primary mr-2 shrink-0" />
                              <Link
                                href={url}
                                className="hover:text-primary hover:underline text-muted-foreground transition-colors"
                              >
                                {svc}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>

                      <div className="absolute -bottom-5 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </div>
                  </Card>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
