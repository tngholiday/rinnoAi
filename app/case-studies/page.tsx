import { caseStudies } from '@/app/data/industries';
import Link from 'next/link';
import Image from 'next/image';
import { AboutSection } from "@/components/sections/about-section";
import { TeamSection } from "@/components/sections/team-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen pt-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Case Studies</h1>
          <p className="text-lg text-muted-foreground">
            Learn how we've driven results for clients across industries.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Link
              key={study.id}
              href={`/case-studies/${study.id}`}
              className="group block bg-gray-50 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 group-hover:text-primary">
                  {study.title}
                </h2>
                <p className="text-sm text-muted-foreground mb-2">{study.industry}</p>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {study.challenge}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* Additional Sections */}
      <AboutSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
} 