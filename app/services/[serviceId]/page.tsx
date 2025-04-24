import { allServices } from "@/lib/constants";
import { notFound } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface ServicePageProps {
  params: {
    serviceId: string;
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = allServices[params.serviceId as keyof typeof allServices];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24">
      <div className="container py-12">
        <div className="max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            {service.title}
          </h1>
          <p className="text-xl text-muted-foreground">{service.description}</p>
        </div>
        
        <div className="grid gap-12">
          <section>
            <h2 className="text-2xl font-semibold mb-8">Our Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {service.services.map((item, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50"
                >
                  <div className="flex items-start space-x-4">
                    <div className="shrink-0 p-2 rounded-lg bg-primary/10">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">{item}</h3>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section className="bg-muted/30 rounded-2xl p-8 md:p-12">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
              <p className="text-muted-foreground mb-8">
                Let's discuss how our {service.title.toLowerCase()} services can help your business grow.
              </p>
              <Button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600">
                Contact Us
              </Button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return Object.keys(allServices).map((serviceId) => ({
    serviceId,
  }));
}