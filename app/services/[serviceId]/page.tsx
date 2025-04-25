import { allServices } from "@/lib/constants";
import { notFound } from "next/navigation";
import ClientServicePage from "./ClientServicePage";

interface ServicePageProps {
  params: {
    serviceId: string;
  };
}

export default function Page({ params }: ServicePageProps) {
  const fullService = allServices[params.serviceId as keyof typeof allServices];
  if (!fullService) notFound();

  // ✅ Strip non-serializable values (like icon components)
  const { title, description, services } = fullService;
  const sanitizedService = { title, description, services, serviceId: params.serviceId };

  return <ClientServicePage service={sanitizedService} />;
}

export function generateStaticParams() {
  return Object.keys(allServices).map((serviceId) => ({
    serviceId,
  }));
}
