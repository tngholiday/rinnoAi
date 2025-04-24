import { motion } from "framer-motion";
import Link from "next/link";
import { allServices } from "@/lib/constants";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="   container max-w-7xl mx-auto py-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive software development and technology solutions to transform your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(allServices).map(([key, service]) => (
            <Link key={key} href={`/services/${key}`}>
              <Card className="group h-full p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
                <div className="relative">
                  <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.services.slice(0, 3).map((item, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <ChevronRight className="h-4 w-4 text-primary mr-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}