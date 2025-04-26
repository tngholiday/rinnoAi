'use client';
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Icon, Puzzle } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function IndustriesPage({ industries }: { industries: any }) {
  const FallbackIcon = () => <Puzzle className="w-6 h-6" />;
  return (
    <main className="min-h-screen pt-20">
      
      {/* 1️⃣ Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-[#0b0f1a] dark:via-[#1a1e2b] dark:to-[#1e2230]">
        <div className="container max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          >
            {industries.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            {industries.description}
          </motion.p>
        </div>
      </section>

      {/* 2️⃣ Industry Highlights */}
<section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900">
  <div className="container max-w-6xl mx-auto px-6">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl font-extrabold text-start bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-16"
    >
      Key Industry Solutions
    </motion.h2>

    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
  {industries.solutions?.map((solution: any, index: number) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
    >
      <Card className="group flex flex-col justify-center p-8 h-full min-h-[200px] rounded-3xl bg-gradient-to-br from-blue-50 via-purple-100 to-pink-100 dark:from-blue-950 dark:via-purple-900 dark:to-pink-900 border border-transparent hover:border-primary/60 shadow-lg hover:shadow-2xl transition-all duration-300">
  <div>
    <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-all">
      {solution.icon || <FallbackIcon />}
    </div>
    <h3 className="text-2xl font-bold mb-2 text-primary group-hover:text-pink-600 transition-colors">
      {solution.title}
    </h3>
    <p className="text-base text-primary/80 group-hover:text-primary transition-colors">
      {solution.description}
    </p>
  </div>
  <div className="mt-6 h-[3px] w-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-500 group-hover:w-24" />
</Card>

    </motion.div>
  ))}
</div>

  </div>
</section>



<section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-900">
  <div className="container max-w-5xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500">
      Why Choose Us
    </h2>

    <ul className="grid sm:grid-cols-2 gap-6 text-left">
      {[
        {
          title: "Proven Industry Experience",
          description: "Years of hands-on domain expertise across sectors.",
          icon: "✅",
        },
        {
          title: "Scalable & Flexible Solutions",
          description: "Custom-fit architectures that grow with your business.",
          icon: "📈",
        },
        {
          title: "Fast Time-to-Market",
          description: "Agile development ensuring rapid, efficient delivery.",
          icon: "⚡",
        },
        {
          title: "Robust Security & Compliance",
          description: "Built-in protections and audit-ready systems.",
          icon: "🔒",
        },
      ].map((item, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="flex items-start gap-4 p-6 rounded-2xl bg-white/80 dark:bg-zinc-900 border border-zinc-100 dark:border-white/10 shadow hover:shadow-xl transition-all duration-300"
        >
          <div className="text-3xl">{item.icon}</div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
              {item.title}
            </h3>
            <p className="text-muted-foreground text-sm">{item.description}</p>
          </div>
        </motion.li>
      ))}
    </ul>
  </div>
</section>


<section className="py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900">
  <div className="container max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
      Trusted by Industry Leaders
    </h2>
    <div className="flex flex-wrap justify-center items-center gap-8">
      {/* Replace these with actual logos/images */}
      {["https://mir-s3-cdn-cf.behance.net/projects/404/935db3219049933.Y3JvcCwyNTE3LDE5NjgsNDkyLDA.jpg", "https://thumbs.dreamstime.com/b/law-building-justice-logo-design-illustration-law-building-justice-logo-design-illustration-143092173.jpg", "https://i.pinimg.com/736x/1c/75/2d/1c752dff2a9146ad762eedc2d4836b00.jpg", "https://static.vecteezy.com/system/resources/thumbnails/003/808/376/small/handshake-heart-symbol-icon-for-web-presentation-logo-infographic-business-idea-inspiration-feed-story-partnership-client-free-vector.jpg"].map((logo, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          className="h-16 w-36 bg-white dark:bg-zinc-800 rounded-xl shadow-md p-2 flex items-center justify-center hover:shadow-xl transition"
        >
          <img
            src={logo}
            alt={`Client logo ${index + 1}`}
            className="h-10 object-contain grayscale hover:grayscale-0 transition"
          />
        </motion.div>
      ))}
    </div>

    {/* Optional Testimonials */}
    <div className="mt-16 grid md:grid-cols-2 gap-8 text-left">
      {[
        {
          quote: "Their platform transformed our operations. Extremely reliable and scalable.",
          name: "Samantha Lee",
          role: "CTO, HealthSync",
        },
        {
          quote: "Our team saved 40% in dev time thanks to their flexible architecture.",
          name: "Michael Chen",
          role: "Head of Engineering, LogiTech",
        },
      ].map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
          className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-md border dark:border-white/10"
        >
          <p className="text-muted-foreground italic mb-4">“{testimonial.quote}”</p>
          <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


<section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-zinc-900 dark:to-zinc-800">
  <div className="container max-w-4xl mx-auto px-6">
    <h2 className="text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500">
      Frequently Asked Questions
    </h2>
    <div className="space-y-6">
      {[
        {
          question: "How does your platform adapt to industry needs?",
          answer:
            "We tailor our technology stacks to suit specific workflows, compliance needs, and scalability demands of each sector.",
        },
        {
          question: "What’s the onboarding process?",
          answer:
            "A dedicated solutions architect will work with you to ensure smooth integration and adoption, step-by-step.",
        },
        {
          question: "Do you offer custom development?",
          answer:
            "Absolutely. We provide customizable modules that align with your business goals and operational needs.",
        },
        {
          question: "How secure is your infrastructure?",
          answer:
            "We adhere to industry-leading security standards, including end-to-end encryption and regular compliance audits.",
        },
      ].map((faq, i) => (
        <div
          key={i}
          className="p-6 rounded-xl bg-white dark:bg-zinc-900 shadow-md border border-transparent hover:border-primary/30 transition-all"
        >
          <h3 className="text-lg font-semibold mb-2 text-foreground">{faq.question}</h3>
          <p className="text-muted-foreground">{faq.answer}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* 7️⃣ Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white text-center">
        <div className="container max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Ready to transform your industry?</h2>
          <p className="mb-8 text-lg">Talk to our experts and start building industry-leading solutions today.</p>
          <Link href="/contact" className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition">
            Get in Touch
          </Link>
        </div>
      </section>

    </main>
  );
}
