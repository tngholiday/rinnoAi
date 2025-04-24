import { faqs } from '@/lib/constants';

export default function FAQPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <h1 className="text-4xl font-bold mb-6">FAQs</h1>
        <div className="space-y-8">
          {faqs.map((faq, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-semibold mb-2">{faq.question}</h2>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 