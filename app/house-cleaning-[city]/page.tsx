'use client';

import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/settings';
import { useParams } from 'next/navigation';

const cityData: Record<string, { name: string; title: string; desc: string }> = {
  'allen-tx': { name: 'Allen', title: 'House Cleaning in Allen, TX', desc: 'Professional home cleaning services in Allen' },
  'plano-tx': { name: 'Plano', title: 'House Cleaning in Plano, TX', desc: 'Expert cleaning services for Plano homes' },
  'mckinney-tx': { name: 'McKinney', title: 'House Cleaning in McKinney, TX', desc: 'Quality cleaning for McKinney residents' },
  'frisco-tx': { name: 'Frisco', title: 'House Cleaning in Frisco, TX', desc: 'Professional cleaning in Frisco' },
  'wylie-tx': { name: 'Wylie', title: 'House Cleaning in Wylie, TX', desc: 'Reliable cleaning services in Wylie' },
  'prosper-tx': { name: 'Prosper', title: 'House Cleaning in Prosper, TX', desc: 'Home cleaning for Prosper families' },
  'lucas-tx': { name: 'Lucas', title: 'House Cleaning in Lucas, TX', desc: 'Professional cleaning in Lucas' },
  'murphy-tx': { name: 'Murphy', title: 'House Cleaning in Murphy, TX', desc: 'Quality home cleaning in Murphy' },
  'celina-tx': { name: 'Celina', title: 'House Cleaning in Celina, TX', desc: 'Expert cleaning services in Celina' },
  'fairview-tx': { name: 'Fairview', title: 'House Cleaning in Fairview, TX', desc: 'Professional cleaning in Fairview' },
  'sachse-tx': { name: 'Sachse', title: 'House Cleaning in Sachse, TX', desc: 'Quality cleaning for Sachse homes' },
  'carrollton-tx': { name: 'Carrollton', title: 'House Cleaning in Carrollton, TX', desc: 'Professional services in Carrollton' },
};

export default function CityPage() {
  const params = useParams();
  const city = params.city as string;
  const cityInfo = cityData[city];

  if (!cityInfo) {
    return (
      <div className="min-h-screen bg-white py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h1 className="text-h2 text-brand-purple mb-4">City not found</h1>
          <Link href="/" className="text-brand-purple hover:underline">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="section bg-brand-lilac-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-fredoka text-hero-mobile md:text-hero text-brand-purple mb-4">
            {cityInfo.title}
          </h1>
          <p className="text-body text-brand-gray mb-8">
            {cityInfo.desc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-4">
                About Cleaning in {cityInfo.name}
              </h2>
              <p className="text-body text-brand-gray mb-4">
                At Anisaya Cleaning, we've been proudly serving {cityInfo.name} with professional house cleaning for {BUSINESS_INFO.yearsExperience} years. Our team is fully background-checked, insured, and bonded to ensure your home is in safe, reliable hands.
              </p>
              <p className="text-body text-brand-gray mb-4">
                Whether you need a one-time deep clean, regular maintenance cleaning, or move-in/move-out service, we have the expertise and attention to detail to leave your {cityInfo.name} home sparkling.
              </p>
            </div>

            <div>
              <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-4">
                Our Services
              </h2>
              <ul className="space-y-3 text-body text-brand-gray">
                <li className="flex gap-3">
                  <span className="text-brand-purple font-bold">✓</span>
                  <span>Standard Cleaning (weekly, bi-weekly, monthly)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-purple font-bold">✓</span>
                  <span>Deep Cleaning</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-purple font-bold">✓</span>
                  <span>Move-in/Move-out Cleaning</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-purple font-bold">✓</span>
                  <span>Add-ons: Windows, Carpet, Oven, Fridge</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-purple font-bold">✓</span>
                  <span>24-hour Re-clean Guarantee</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-[20px] border border-brand-lavender-mist p-8 mb-8">
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-4 text-center">
              Why Choose Anisaya?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">✓</div>
                <p className="font-semibold text-brand-ink">Background-Checked Cleaners</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🛡</div>
                <p className="font-semibold text-brand-ink">Insured & Bonded</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">⏰</div>
                <p className="font-semibold text-brand-ink">24-Hour Guarantee</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-6">
              Ready to Schedule?
            </h2>
            <div className="space-y-3">
              <Link href="/quote" className="btn-primary inline-block">
                Get Instant Quote
              </Link>
              <div className="text-body text-brand-gray">
                or call {BUSINESS_INFO.phone}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-8 text-center">
            Serving All Areas
          </h2>
          <p className="text-body text-brand-gray text-center mb-6">
            {BUSINESS_INFO.serviceArea.join(', ')}
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/" className="text-brand-purple hover:underline">
              ← Back to home
            </Link>
            <Link href="/quote" className="text-brand-purple hover:underline">
              Get quote →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
