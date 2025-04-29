import About from "@/components/servicesections/About";
import Contact from "@/components/servicesections/Contact";
import FAQ from "@/components/servicesections/FAQ";
import Hero from "@/components/servicesections/Hero";
import Pricing from "@/components/servicesections/Pricing";
import Services from "@/components/servicesections/Services";
import ServiceDetails from "@/components/servicesections/ServiceDetails";
import Team from "@/components/servicesections/Team";
import Testimonials from "@/components/servicesections/Testimonials";
import WorkWithUs from "@/components/servicesections/WorkWithUs";
import { allServices } from "@/lib/constants";
import { notFound } from "next/navigation";
import { SiDocker, SiGraphql, SiMysql, SiMongodb, SiPostgresql, SiReact } from "react-icons/si";
import { SiTailwindcss, SiNextdotjs, SiNodedotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";

// Generate static paths for every sub-service across all service categories
export async function generateStaticParams() {
  return Object.entries(allServices).flatMap(([serviceId, service]) =>
    service.services.map((item) => ({
      serviceId,
      subServiceSlug: item.toLowerCase().replace(/\s+/g, "-"),
    }))
  );
}

interface SubServicePageProps {
  params: { serviceId: string; subServiceSlug: string };
}

export default function SubServicePage({ params }: SubServicePageProps) {
  const service = allServices[params.serviceId as keyof typeof allServices];
  if (!service) notFound();

  const subServiceName = service.services.find(
    (item) => item.toLowerCase().replace(/\s+/g, "-") === params.subServiceSlug
  );
  if (!subServiceName) notFound();

  const techIcons = [
    { icon: SiReact, name: "React" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: SiTailwindcss, name: "Tailwind CSS" },
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiPostgresql, name: "PostgreSQL" },
    { icon: SiDocker, name: "Docker" },
    { icon: SiGraphql, name: "GraphQL" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiMysql, name: "MySQL" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiMongodb, name: "MongoDB" },
  ]
  
  return (
    <main className=" ">
      <div className=" ">
      
         <Hero />
         {/* <Services /> */}
         <About serviceKey={params.serviceId} />
         <ServiceDetails serviceKey={params.serviceId} subServiceSlug={params.subServiceSlug} />
         <WorkWithUs />
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

    
         <FAQ />
         <Contact />
         
         
                 </div>
      
    </main>
  );
} 