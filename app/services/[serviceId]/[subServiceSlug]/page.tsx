

import About from "@/components/servicesections/About";
import Contact from "@/components/servicesections/Contact";
import FAQ from "@/components/servicesections/FAQ";
import Hero from "@/components/servicesections/Hero";
import Pricing from "@/components/servicesections/Pricing";
import Services from "@/components/servicesections/Services";
import Team from "@/components/servicesections/Team";
import Testimonials from "@/components/servicesections/Testimonials";
import { allServices } from "@/lib/constants";
import { notFound } from "next/navigation";

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

  return (
    <main className=" ">
      <div className=" ">
      
         <Hero />
         <Services />
         <About />
         <Team />
         <Testimonials />
         <Pricing />
         <FAQ />
         <Contact />
         
         
                 </div>
      
    </main>
  );
} 