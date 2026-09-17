'use client';

import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/settings';

export default function LucasPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="section bg-brand-lilac-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-fredoka text-hero-mobile md:text-hero text-brand-purple mb-4">
            House Cleaning in Lucas, TX
          </h1>
          <p className="text-body text-brand-gray mb-8">
            Professional home cleaning services in Lucas
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-4">
                About Cleaning in Lucas
              </h2>
              <p className="text-body text-brand-gray mb-4">
                At Anisaya Cleaning, we've been proudly serving Lucas with professional house cleaning for {BUSINESS_INFO.yearsExperience} years. Our team is fully background-checked, insured, and bonded.
              </p>
              <p className="text-body text-brand-gray mb-4">
                Whether you need a one-time deep clean, regular maintenance cleaning, or move-in/move-out service, we have the expertise to leave your Lucas home sparkling.
              </p>
            </div>

            <div>
              <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-4">
                Our Services
              </h2>
              <ul className="space-y-3 text-body text-brand-gray">
                <li className="flex gap-3"><span className="text-brand-purple font-bold">✓</span><span>Standard Cleaning</span></li>
                <li className="flex gap-3"><span className="text-brand-purple font-bold">✓</span><span>Deep Cleaning</span></li>
                <li className="flex gap-3"><span className="text-brand-purple font-bold">✓</span><span>Move-in/Move-out</span></li>
                <li className="flex gap-3"><span className="text-brand-purple font-bold">✓</span><span>Add-ons Available</span></li>
                <li className="flex gap-3"><span className="text-brand-purple font-bold">✓</span><span>24-hour Guarantee</span></li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-6">
              Ready to Schedule?
            </h2>
            <Link href="/quote" className="btn-primary inline-block mb-4">
              Get Instant Quote
            </Link>
            <div className="text-body text-brand-gray">or call {BUSINESS_INFO.phone}</div>
          </div>
        </div>
      </section>
    </div>
  );
}
