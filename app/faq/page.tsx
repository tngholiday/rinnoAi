'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqs } from '@/lib/constants';

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen pt-24 bg-gray-50 dark:bg-zinc-900">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl font-bold mb-10 text-center">Frequently Asked Questions</h1>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md p-6 transition-all duration-300"
              >
                <button
                  className="flex items-center justify-between w-full text-left"
                  onClick={() => toggleFAQ(idx)}
                >
                  <h2 className="text-lg font-semibold text-gray-900">{faq.question}</h2>
                  {isOpen ? (
                    <ChevronUp className="text-blue-600" />
                  ) : (
                    <ChevronDown className="text-gray-400" />
                  )}
                </button>
                <div
                  className={`mt-4 text-muted-foreground text-sm leading-relaxed transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
