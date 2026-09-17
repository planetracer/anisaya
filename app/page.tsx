'use client';

import Link from 'next/link';
import { useState } from 'react';
import CustomSelect from '@/components/CustomSelect';
import { BUSINESS_INFO } from '@/lib/settings';

export default function Home() {
  const [homeSize, setHomeSize] = useState('');
  const [bedrooms, setBedrooms] = useState('');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section bg-brand-lilac-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-fredoka text-hero-mobile md:text-hero text-brand-purple mb-4 leading-tight">
              A clean home, without giving up your weekend
            </h1>
            <p className="text-body text-brand-gray mb-6">
              House cleaning in {BUSINESS_INFO.serviceArea.join(', ')}
            </p>

            {/* Mini Quote Box */}
            <div className="bg-white border border-brand-lavender-mist rounded-[20px] p-6 mb-4">
              <div className="space-y-3 mb-4">
                <CustomSelect
                  label="Home size"
                  value={homeSize}
                  onChange={setHomeSize}
                  options={['Under 1,000 sqft', '1,000 - 2,000 sqft', '2,000 - 3,000 sqft', '3,000+ sqft']}
                />
                <CustomSelect
                  label="Bedrooms"
                  value={bedrooms}
                  onChange={setBedrooms}
                  options={['1', '2', '3', '4', '5+']}
                />
              </div>
              <Link href="/quote" className="btn-primary w-full block text-center">
                See my price
              </Link>
            </div>
            <Link href="tel:contact-number" className="text-small text-brand-purple hover:underline">
              Or call or text {BUSINESS_INFO.phone}
            </Link>
          </div>

          <div className="relative h-80 bg-gradient-to-br from-brand-lavender-mist to-brand-lilac-white rounded-[20px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop"
              alt="Clean bright living room with modern furniture"
              className="w-full h-full object-cover brightness-95"
            />
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="section bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: '✓', label: 'Background-checked cleaners', color: 'bg-brand-purple' },
              { icon: '🛡', label: 'Insured and bonded', color: 'bg-brand-purple' },
              { icon: '⏰', label: '24-hour re-clean guarantee', color: 'bg-brand-purple' },
              { icon: '★', label: 'Google reviews', color: 'bg-brand-purple' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3`}>
                  {item.icon}
                </div>
                <p className="text-body font-semibold text-brand-ink">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section bg-brand-lilac-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-12 text-center">
            How it works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '1', title: 'Get an instant quote', desc: 'Answer a few questions, get your exact price' },
              { num: '2', title: 'Pick your date', desc: 'Choose when works best for you' },
              { num: '3', title: 'Come home to clean', desc: 'Enjoy your freshly cleaned home' },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-brand-purple text-white rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="font-fredoka text-h3-mobile md:text-h3 text-brand-purple mb-2">
                  {step.title}
                </h3>
                <p className="text-brand-gray">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-12">
            Our services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Standard Cleaning', price: '$120+', desc: 'Perfect for recurring clients' },
              { name: 'Deep Cleaning', price: '$190+', desc: 'Ideal for first cleans' },
              { name: 'Move-in / Move-out', price: '$230+', desc: 'Complete move day cleaning' },
            ].map((service, i) => (
              <div key={i} className="card">
                <h3 className="font-fredoka text-h3-mobile md:text-h3 text-brand-purple mb-2">
                  {service.name}
                </h3>
                <p className="text-brand-gray text-small mb-4">{service.desc}</p>
                <p className="text-h3 text-brand-purple font-fredoka mb-4">Starting at {service.price}</p>
                <Link href="/services" className="text-brand-purple hover:underline text-small font-semibold">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Band */}
      <section className="section bg-brand-purple text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-fredoka text-h2-mobile md:text-h2 mb-4">
            New clients get $25 off through end of year
          </h2>
          <p className="text-body mb-6">
            Use code ANI25 on any service
          </p>
          <Link href="/quote" className="btn-primary bg-white text-brand-purple hover:bg-brand-lilac-white">
            Get my instant quote
          </Link>
        </div>
      </section>

      {/* Service Area */}
      <section className="section bg-brand-lilac-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-8 text-center">
            Serving your area
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {BUSINESS_INFO.serviceArea.map((city) => (
              <Link
                key={city}
                href={`/house-cleaning-${city.toLowerCase()}-tx`}
                className="card text-center hover:border-brand-purple transition-colors"
              >
                <p className="font-fredoka text-h3-mobile md:text-h3 text-brand-purple">
                  {city}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-8 text-center">
            Common questions
          </h2>
          <div className="space-y-4">
            {[
              { q: 'How is my price calculated?', a: 'We use home size, rooms, and service type to calculate your exact price.' },
              { q: 'Do I need to be home?', a: 'No, we just need a way to access your home.' },
              { q: 'What\'s included in a cleaning?', a: 'All our cleans include kitchen, bathrooms, bedrooms, and living areas.' },
              { q: 'Will I get the same cleaner?', a: 'We assign the same cleaner when possible for consistency.' },
            ].map((item, i) => (
              <details key={i} className="cursor-pointer">
                <summary className="font-semibold text-brand-ink hover:text-brand-purple transition-colors py-3 border-b border-brand-lavender-mist">
                  {item.q}
                </summary>
                <p className="text-brand-gray py-3">{item.a}</p>
              </details>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="text-brand-purple hover:underline font-semibold">
              See all FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-brand-purple text-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-fredoka text-h2-mobile md:text-h2 mb-4">
            Ready to book?
          </h2>
          <Link href="/quote" className="btn-primary bg-white text-brand-purple hover:bg-brand-lilac-white">
            Get my instant quote
          </Link>
        </div>
      </section>
    </div>
  );
}
