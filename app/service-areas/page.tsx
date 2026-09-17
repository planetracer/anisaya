import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/settings';

export default function ServiceAreasPage() {
  const areas = [
    {
      city: 'Allen',
      description: 'Professional house cleaning throughout Allen, TX',
      zipCodes: '75013, 75014',
    },
    {
      city: 'Plano',
      description: 'Trusted cleaning services in Plano, TX',
      zipCodes: '75074, 75075',
    },
    {
      city: 'McKinney',
      description: 'Quality home cleaning in McKinney, TX',
      zipCodes: '75001, 75002',
    },
    {
      city: 'Frisco',
      description: 'Expert cleaning for Frisco residents',
      zipCodes: '75003',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="section bg-brand-lilac-white">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="font-fredoka text-hero-mobile md:text-hero text-brand-purple mb-4">
            Service Areas
          </h1>
          <p className="text-body text-brand-gray mb-8">
            Anisaya Cleaning proudly serves the Dallas-Fort Worth area with professional, reliable cleaning services.
          </p>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="section bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-12">
            We serve {BUSINESS_INFO.serviceArea.length} cities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {areas.map((area) => (
              <div key={area.city} className="card border-l-4 border-l-brand-purple">
                <h3 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-2">
                  {area.city}
                </h3>
                <p className="text-body text-brand-gray mb-4">{area.description}</p>
                <p className="text-small text-brand-gray mb-6">Zip codes: {area.zipCodes}</p>
                <Link href="/quote" className="text-brand-purple hover:underline font-semibold">
                  Get quote for {area.city} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Info */}
      <section className="section bg-brand-lilac-white">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-4">
            Service Area Details
          </h2>
          <div className="space-y-4 text-body text-brand-gray">
            <p>
              All four cities are served with the same high-quality cleaning standards and professional team members.
            </p>
            <p>
              We offer same-week scheduling and flexible time slots to fit your busy schedule.
            </p>
            <p>
              If your address is outside our listed service areas, reach out and we can discuss options.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-purple text-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-fredoka text-h2-mobile md:text-h2 mb-4">
            Ready to book?
          </h2>
          <p className="text-body mb-8">
            Get an instant quote for your area
          </p>
          <Link href="/quote" className="btn-primary bg-white text-brand-purple hover:bg-brand-lilac-white">
            Get instant quote
          </Link>
        </div>
      </section>
    </div>
  );
}
