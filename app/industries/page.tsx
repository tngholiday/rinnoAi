'use client'
import { motion } from "framer-motion";
import Link from "next/link";

export default function Industriespage() {
  return (
    <main className="min-h-screen pt-20">
      {/* 🌟 Hero Section */}
      

{/* 🧩 Industry Overview */}
<section 
  className="relative py-24 dark:bg-gray-900 overflow-hidden"
>
  {/* Background Image */}
  <div 
    className="absolute inset-0"
    style={{
      backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYRmih65KfiDGdzev-i78QyQswAAY3xnXo2w&s')", // 🌟 Put your background image here
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.2, // Make it subtle
    }}
  />

  {/* Overlay for better text contrast */}
  <div className="absolute  " />

  {/* Content */}
  <div className="relative container max-w-6xl mx-auto px-6 text-center">
    <motion.h2 
      
      className="text-4xl font-bold mb-6 text-gray-900 dark:text-white"
    >
      Empowering Every Sector
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="text-lg text-muted-foreground max-w-2xl mx-auto"
    >
      We bring innovation, strategy, and deep industry knowledge to help you unlock your full potential.
    </motion.p>
  </div>
</section>


      <section id="industries" className="py-20  dark:from-zinc-900 dark:to-zinc-800">
  <div className="container max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-extrabold text-center mb-14 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500">
      Industries We Serve
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
  {[
    { title: "Healthcare", desc: "Secure, compliant platforms for patient engagement and data management.", link: "/industries/healthcare" },
    { title: "Logistics", desc: "Robust fintech solutions with an emphasis on security and scalability.", link: "/industries/logistics" },
    { title: "E-commerce", desc: "Dynamic storefronts, inventory systems, and payment gateways.", link: "/industries/ecommerce" },
    { title: "Education", desc: "E-learning platforms, virtual classrooms, and content delivery tools.", link: "/industries/education" },
    { title: "Travel & Hospitality", desc: "Booking engines, itineraries, and mobile experiences.", link: "/industries/travel" },
  ].map(({ title, desc, link }, idx) => (
    <Link 
      key={idx} 
      href={link}
      className="group relative flex flex-col justify-between rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gradient-to-r from-purple-400 via-pink-400 to-blue-400 overflow-hidden"
      style={{
        minHeight: '220px',
        backgroundImage: 'linear-gradient(white, white), linear-gradient(to right, #a855f7, #ec4899, #3b82f6)',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
      }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-20 group-hover:opacity-20 transition-all duration-300"
        style={{
          backgroundImage: 'url(https://media.istockphoto.com/id/1354854651/vector/modern-science-or-technology-abstract-background-using-cogwheel-wireframe-spot-surface.jpg?s=612x612&w=0&k=20&c=cgoQwIyJklV3xtMipO1AMqRnMG_PU0nFWCtDI82dXp0=)', // 🌟 your subtle pattern or image path here
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-3 text-gray-900  group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-base group-hover:text-foreground transition-colors">
          {desc}
        </p>
      </div>

      {/* Underline Animation */}
      <div className="relative z-10 mt-6 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-16" />
    </Link>
  ))}
</div>

  </div>
</section>

{/* 💡 Why Choose Us */}
<section className="relative py-24 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-[#0f111a] dark:to-[#1a1d2b] overflow-hidden">
  {/* Decorative blurred backgrounds */}
  <div className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-primary/30 rounded-full blur-3xl opacity-20"></div>
  <div className="absolute bottom-[-80px] right-[-80px] w-96 h-96 bg-pink-400/20 rounded-full blur-3xl opacity-20"></div>

  <div className="relative container max-w-7xl mx-auto px-6 text-center">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-5xl font-extrabold mb-6 text-gray-900 dark:text-white"
    >
      Why Choose Us?
    </motion.h2>
    <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mb-16 text-lg">
      We deliver more than just code — we bring vision, velocity, and value to every project.
    </p>

    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {[
        { icon: "🚀", title: "Expert Domain Knowledge", desc: "Deep expertise across healthcare, finance, retail, and more." },
        { icon: "🎯", title: "Tailored Solutions", desc: "Custom-built strategies that match your unique business goals." },
        { icon: "🔒", title: "Security & Scalability", desc: "Enterprise-grade platforms with built-in security and growth potential." },
        { icon: "⚡", title: "Agile Development", desc: "Quick iterations with a sharp focus on quality and delivery speed." },
        { icon: "🔄", title: "Continuous Optimization", desc: "We don't stop at launch — we evolve your product with you." },
        { icon: "🛠️", title: "Latest Tech Stack", desc: "React, Next.js, Tailwind, AI-driven automation, and cloud-native architecture." }
      ].map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.15, duration: 0.6 }}
          className="group relative p-8 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md rounded-3xl border border-transparent hover:border-primary/40 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
        >
          <div className="text-5xl mb-6 transition-transform group-hover:scale-110">{item.icon}</div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
            {item.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-16" />
        </motion.div>
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
