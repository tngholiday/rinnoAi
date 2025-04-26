import { industries } from "@/lib/constants";
import { notFound } from "next/navigation";
import IndustriesPage from "./ClientIndustriesPage";

interface IndustriesPageProps {
  params: {
    industriesId: string;
  };
}

export default function Page({ params }: IndustriesPageProps) {
  const fullIndustries = industries[params.industriesId as keyof typeof industries];
  
  if (!fullIndustries) notFound();

  // ✅ Only pick serializable fields
  const { title, description, solutions } = fullIndustries;

  const sanitizedIndustries = {
    title,
    description,
    solutions: solutions.map((sol: any) => ({
      title: sol.title,
      description: sol.description,
      iconName: sol.iconName || "", 
    })),
    industriesId: params.industriesId
  };

  return <IndustriesPage industries={sanitizedIndustries} />;
}


export function generateStaticParams() {
  return Object.keys(industries).map((industriesId) => ({
    industriesId,
  }));
}
