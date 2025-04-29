'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqs } from '@/lib/constants';
import FAQ from '@/components/servicesections/FAQ';
export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen pt-24 bg-gray-50 dark:bg-zinc-900">
    <FAQ />
    </main>
  );
}
