import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { AboutSection } from "@/components/sections/about-section";
import { TeamSection } from "@/components/sections/team-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaSection } from "@/components/sections/cta-section";
import { SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiTypescript, SiPostgresql, SiDocker, SiGraphql } from "react-icons/si";
import Contact from "@/components/servicesections/Contact";
import WorkWithUs from "@/components/servicesections/WorkWithUs";
export default function Home() {

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
  return (
    <main className="min-h-screen ">
     
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <section className="py-16 overflow-hidden container mx-auto max-w-7xl px-5">
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
      <TeamSection />
      <WorkWithUs/>
      <TestimonialsSection />
      <CtaSection />
      <Contact />
    
    </main>
  );
}