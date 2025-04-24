import { industries } from '@/lib/constants';
import { notFound } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Industries from '@/components/servicesections/Industries';

// Pre-generate industry IDs for static export
export async function generateStaticParams() {
  return Object.keys(industries).map((industryId) => ({ industryId }));
}

export default function IndustryPage({ params }: { params: { industryId: string } }) {
  const industry = industries[params.industryId as keyof typeof industries];
  if (!industry) notFound();

  return (
    <main className="min-h-screen ">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        {/* Hero */}
       <Industries />
      </div>
    </main>
  );
}