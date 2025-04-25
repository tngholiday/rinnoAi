'use client'
import { motion } from "framer-motion";
import Link from "next/link";

export default function Industriespage() {
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
              href="#industries"
              className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              Explore Industries
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 🧩 Industry Overview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Empowering Every Sector</h2>
          <p className="text-lg text-muted-foreground">
            We bring innovation, strategy, and deep industry knowledge to help you unlock your full potential.
          </p>
        </div>
      </section>

      {/* 🏭 Industries We Serve */}
      <section id="industries" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Healthcare", desc: "Secure, compliant platforms for patient engagement and data management." },
              { title: "Finance", desc: "Robust fintech solutions with an emphasis on security and scalability." },
              { title: "E-commerce", desc: "Dynamic storefronts, inventory systems, and payment gateways." },
              { title: "Education", desc: "E-learning platforms, virtual classrooms, and content delivery tools." },
              { title: "Real Estate", desc: "Custom portals, listing engines, and immersive 3D tours." },
              { title: "Travel & Hospitality", desc: "Booking engines, itineraries, and mobile experiences." }
            ].map(({ title, desc }, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 💡 Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-[#1a1e2b] dark:to-[#1e2230]">
        <div className="container max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Expert domain knowledge",
              "Tailored solutions for each industry",
              "Scalable and secure platforms",
              "Agile development process",
              "Ongoing support & optimization",
              "Cutting-edge tech stack"
            ].map((reason, idx) => (
              <div key={idx} className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md">
                <p className="text-base text-muted-foreground">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🚀 Call to Action */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="container max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Let’s Build the Future Together</h2>
          <p className="text-lg mb-8">
            Ready to transform your industry with tech-driven solutions? Connect with us to get started.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 rounded-full bg-white text-blue-600 font-semibold hover:bg-gray-200 transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
