'use client';

import { useState, useEffect } from 'react';
import QuoteForm from '@/components/QuoteForm';

export default function QuotePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="font-fredoka text-hero-mobile md:text-hero text-brand-purple mb-2">
            Get your price in 60 seconds
          </h1>
          <p className="text-brand-gray text-body">
            Answer a few quick questions and we'll show you exactly how much your clean costs.
          </p>
        </div>

        <QuoteForm />
      </div>
    </div>
  );
}
