'use client'

import { motion } from "framer-motion";
import { Activity, ChevronRight, Headset, Users, Rocket, Shield, CheckCircle, Code, Paintbrush, Megaphone, Settings, Database, Layers2, Cloud, Layers, PenTool, ShoppingCart, Apple, Smartphone, Gamepad, BrainCircuit } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiTypescript, SiPostgresql, SiDocker, SiGraphql } from "react-icons/si";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
interface ClientServicePageProps {
  service: {
    title: string;
    description: string;
    services: string[];
    serviceId: string;
    
  };
}

const serviceImages = [
    "https://www.bigscal.com/wp-content/uploads/2024/02/Custom-Software-Development-Services-714x430.webp", // Tech/dev
    "https://www.binaryfolks.com/media/blog/How%20to%20choose%20the%20right%20software%20development%20company/Intro.png", // Teamwork
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVNn5VnDYNIwmA_3oJNIGpqxh4vC6ijC5R5ND7GgdJ0ZecrD6mHWT_-Nj7jUWR7sZUclY&usqp=CAU", // UI/UX
    "https://www.pixerea.co.in/images/software-development.png", // Analytics
    "https://images.unsplash.com/photo-1509395176047-4a66953fd231", // Strategy
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085"  // Software
  ];

  
const techIcons = [
    { icon: SiReact, name: "React" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: SiTailwindcss, name: "Tailwind CSS" },
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiPostgresql, name: "PostgreSQL" },
    { icon: SiDocker, name: "Docker" },
    { icon: SiGraphql, name: "GraphQL" },
  ];
  
export default function ClientServicePage({ service }: ClientServicePageProps) {
  const iconMap: Record<string, JSX.Element> = {
    "Custom Software Development": <Code className="h-5 w-5 text-primary" />,
    "Enterprise Software Solutions": <Database className="h-5 w-5 text-primary" />,
    "SaaS Product Development": <Cloud className="h-5 w-5 text-primary" />,
    "API Development & Integration": <Layers className="h-5 w-5 text-primary" />,
    "Legacy Software Modernization": <Layers2 className="h-5 w-5 text-primary" />,
    "Website Design & Development": <PenTool className="h-5 w-5 text-primary" />,
    "Custom Web App Development": <Code className="h-5 w-5 text-primary" />,
    "E-commerce Solutions": <ShoppingCart className="h-5 w-5 text-primary" />,
    "Frontend Development": <Code className="h-5 w-5 text-primary" />,
    "Backend Development": <Database className="h-5 w-5 text-primary" />,
    "Android App Development": <Smartphone className="h-5 w-5 text-primary" />,
    "iOS App Development": <Apple className="h-5 w-5 text-primary" />,
    "Cross-platform App Development": <Smartphone className="h-5 w-5 text-primary" />,
    "2D & 3D Game Design": <Gamepad className="h-5 w-5 text-primary" />,
    "Unity Game Development": <Gamepad className="h-5 w-5 text-primary" />,
    "HTML5 Game Development": <Gamepad className="h-5 w-5 text-primary" />,
    "AI-powered Chatbots": <BrainCircuit className="h-5 w-5 text-primary" />,
    "Natural Language Processing": <BrainCircuit className="h-5 w-5 text-primary" />,
    "Machine Learning Model Training": <BrainCircuit className="h-5 w-5 text-primary" />,
    "Cloud App Development": <Cloud className="h-5 w-5 text-primary" />,
    "DevOps & CI/CD Services": <Settings className="h-5 w-5 text-primary" />,
    "Cloud Security Solutions": <Shield className="h-5 w-5 text-primary" />,
    "Manual Testing": <CheckCircle className="h-5 w-5 text-primary" />,
    "Automated Testing": <CheckCircle className="h-5 w-5 text-primary" />,
    "Performance Testing": <CheckCircle className="h-5 w-5 text-primary" />,
    "Mobile App & Web App Design": <Paintbrush className="h-5 w-5 text-primary" />,
    "Design Systems & Branding": <Paintbrush className="h-5 w-5 text-primary" />,
    "Search Engine Optimization": <Megaphone className="h-5 w-5 text-primary" />,
    "Social Media Marketing": <Megaphone className="h-5 w-5 text-primary" />,
    "Content Marketing": <Megaphone className="h-5 w-5 text-primary" />,  
    "Web & App Security": <Shield className="h-5 w-5 text-primary" />,
    "Penetration Testing": <Shield className="h-5 w-5 text-primary" />,
    "Data Encryption & Privacy": <Shield className="h-5 w-5 text-primary" />,
    "Security Compliance": <Shield className="h-5 w-5 text-primary" />,   
    
    


  };
  return (
    <main className="min-h-screen pt-20">
      {/* 1. Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-[#0b0f1a] dark:via-[#1a1e2b] dark:to-[#1e2230] py-20">
        <div className="container max-w-4xl mx-auto text-center px-6">
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {service.description}
          </p>
        </div>
      </section>

      <div className="container max-w-7xl mx-auto  py-20 space-y-24">

        {/* 2. Detailed Services */}
        <section>
      <h2 className="text-3xl font-bold mb-10">Our Services</h2>

      <Swiper
      slidesPerView={1}
      spaceBetween={20}
      pagination={{ clickable: true }}
      loop={true} // 🔁 Infinite loop
      autoplay={{ delay: 3000, disableOnInteraction: false }} // 🔄 Auto-scroll
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
        1280: { slidesPerView: 3 },
      }}
      modules={[Pagination]}
      className="!pb-10"
      >
        {service.services.map((item: string, index: number) => {
          const imageUrl = serviceImages[index % serviceImages.length];
          const serviceSlug = item.toLowerCase().replace(/\s+/g, "-");
          const icon = iconMap[item]

          return (
            <SwiperSlide key={index}>
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.4 }}
    className="relative h-60 rounded-2xl p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden"
  >
    {/* Background image layer */}
    <div
      className="absolute inset-0 rounded-xl bg-cover bg-center z-0"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    {/* Optional dark overlay for readability */}
    <div className="absolute inset-0 z-0 bg-black/30 backdrop-blur-sm rounded-xl" />

    <Link href={`/services/${service.serviceId}/${serviceSlug}`} className="relative z-10 block h-full w-full">
      <Card className="h-full w-full rounded-2xl bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xs flex items-center px-5 py-4 space-x-4 transition-all duration-300 hover:bg-white/80 dark:hover:bg-zinc-900/80">
        <div className="shrink-0 p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors shadow-inner">
          {icon}
        </div>
        <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {item}
        </h3>
      </Card>
    </Link>
  </motion.div>
</SwiperSlide>

          );
        })}
      </Swiper>
    </section>

<section className="bg-muted/30 dark:bg-muted/20 rounded-2xl">
  <h2 className="text-3xl font-bold mb-8 text-foreground">Why Choose Us?</h2>

  <div className="grid md:grid-cols-2 gap-8 text-muted-foreground">
    <div className="flex items-start space-x-4">
      <CheckCircle className="text-primary w-6 h-6 mt-1" />
      <div>
        <h3 className="font-semibold text-lg text-foreground mb-1">Proven Expertise</h3>
        <p>Our expert team brings years of hands-on experience across industries to deliver reliable and innovative solutions.</p>
      </div>
    </div>

    <div className="flex items-start space-x-4">
      <Users className="text-primary w-6 h-6 mt-1" />
      <div>
        <h3 className="font-semibold text-lg text-foreground mb-1">Client-Centric Approach</h3>
        <p>We listen, adapt, and align with your goals using agile methodology for seamless collaboration and transparent development.</p>
      </div>
    </div>

    <div className="flex items-start space-x-4">
      <Rocket className="text-primary w-6 h-6 mt-1" />
      <div>
        <h3 className="font-semibold text-lg text-foreground mb-1">Modern & Scalable</h3>
        <p>Built with modern UI/UX, our solutions are optimized for performance, scalability, and long-term growth.</p>
      </div>
    </div>

    <div className="flex items-start space-x-4">
      <Shield className="text-primary w-6 h-6 mt-1" />
      <div>
        <h3 className="font-semibold text-lg text-foreground mb-1">Security First</h3>
        <p>Security is built into every layer of our solutions to protect your data and give you peace of mind.</p>
      </div>
    </div>

    <div className="flex items-start space-x-4">
      <Activity className="text-primary w-6 h-6 mt-1" />
      <div>
        <h3 className="font-semibold text-lg text-foreground mb-1">Data-Driven Insights</h3>
        <p>We integrate analytics and KPIs to help you make smarter decisions and measure success effectively.</p>
      </div>
    </div>

    <div className="flex items-start space-x-4">
      <Headset className="text-primary w-6 h-6 mt-1" />
      <div>
        <h3 className="font-semibold text-lg text-foreground mb-1">End-to-End Support</h3>
        <p>From consultation to launch and beyond, our dedicated team is with you every step of the way.</p>
      </div>
    </div>
  </div>
</section>

       {/* 4. Technologies We Use */}
       <section className="py-16 overflow-hidden">
      <h2 className="text-3xl font-bold mb-8 text-foreground pb-10">Technologies We Use</h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex space-x-16 animate-marquee text-muted-foreground text-4xl">
          {techIcons.map(({ icon: Icon, name }, idx) => (
            <div key={idx} className="flex flex-col items-center min-w-[120px]">
              <Icon className="mb-2 h-14 w-14 text-primary hover:scale-110 transition-transform duration-300" />
              <span className="text-sm">{name}</span>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {techIcons.map(({ icon: Icon, name }, idx) => (
            <div key={`dup-${idx}`} className="flex flex-col items-center min-w-[120px]">
              <Icon className="mb-2 h-14 w-14 text-primary hover:scale-110 transition-transform duration-300" />
              <span className="text-sm">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>


        {/* 5. Call to Action */}
        <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl p-10 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Business?</h2>
          <p className="mb-6">
            Let’s talk about how our {service.title.toLowerCase()} services can transform your company.
          </p>
          <Button variant="secondary" className="bg-white text-black hover:bg-gray-100">
            Contact Us
          </Button>
        </section>

      </div>
    </main>
  );
}
