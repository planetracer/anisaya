import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/settings';

export default function ServiceAreasPage() {
  const areas = [
    {
      city: 'Allen',
      description: 'Professional house cleaning throughout Allen, TX',
      neighborhoods: 'Heritage Distillery, Watters Creek, Old Town Allen, Auburn Hills',
      highlights: 'Our home base - serving both new and established neighborhoods',
    },
    {
      city: 'Plano',
      description: 'Trusted cleaning services in Plano, TX',
      neighborhoods: 'Downtown Plano, Park Cities, Spring Creek, Lakeside',
      highlights: 'Expert service for all home sizes from townhomes to large estates',
    },
    {
      city: 'McKinney',
      description: 'Quality home cleaning in McKinney, TX',
      neighborhoods: 'Old Town McKinney, Adriatica, The Highlands, Stonebridge',
      highlights: 'Same-day booking available for most requests',
    },
    {
      city: 'Frisco',
      description: 'Expert cleaning for Frisco residents',
      neighborhoods: 'The Columns, Coppell Ranch, Star Canyon, Prairie Grass Ranch',
      highlights: 'Specialized service for upscale homes and active families',
    },
    {
      city: 'Wylie',
      description: 'Professional cleaning services throughout Wylie',
      neighborhoods: 'Downtown Wylie, Lakepoint, Creekside',
      highlights: 'Growing community with personalized service',
    },
    {
      city: 'Prosper',
      description: 'Quality home cleaning in Prosper, TX',
      neighborhoods: 'Downtown Prosper, Northlake',
      highlights: 'Quick scheduling for northern communities',
    },
    {
      city: 'Lucas',
      description: 'Expert cleaning for Lucas residents',
      neighborhoods: 'Lucas Ranch, Lucas Town Center',
      highlights: 'Serving the Lucas community with pride',
    },
    {
      city: 'Murphy',
      description: 'Professional cleaning services in Murphy',
      neighborhoods: 'Murphy Ranch, Heritage area',
      highlights: 'Flexible scheduling for busy families',
    },
    {
      city: 'Celina',
      description: 'Quality home cleaning in Celina, TX',
      neighborhoods: 'Celina city limits',
      highlights: 'Personalized service for growing community',
    },
    {
      city: 'Fairview',
      description: 'Expert cleaning for Fairview residents',
      neighborhoods: 'Fairview area',
      highlights: 'Small town service with big-city quality',
    },
    {
      city: 'Sachse',
      description: 'Professional cleaning throughout Sachse',
      neighborhoods: 'Sachse community',
      highlights: 'Reliable service for eastern areas',
    },
    {
      city: 'Carrollton',
      description: 'Quality home cleaning in Carrollton',
      neighborhoods: 'Carrollton areas',
      highlights: 'Expert service across the community',
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
          <p className="text-body text-brand-gray mb-4">
            We service a 15-mile radius around Allen, covering Allen, Plano, McKinney, Frisco and surrounding areas.
          </p>
          <p className="text-small text-brand-gray">
            If you're unsure whether your address is covered, just enter your zip code in the quote form and we'll let you know!
          </p>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="section bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-12">
            We serve 12+ cities within 15 miles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {areas.map((area) => (
              <div key={area.city} className="card border-l-4 border-l-brand-purple">
                <h3 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-3">
                  {area.city}
                </h3>
                <p className="text-body text-brand-gray mb-4">{area.description}</p>

                <div className="mb-4">
                  <p className="text-small font-semibold text-brand-purple mb-1">Popular Neighborhoods:</p>
                  <p className="text-small text-brand-gray">{area.neighborhoods}</p>
                </div>

                <div className="mb-6">
                  <p className="text-small font-semibold text-brand-purple mb-1">Why choose Anisaya in {area.city}:</p>
                  <p className="text-small text-brand-gray">✓ {area.highlights}</p>
                </div>

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
            Our Service Radius
          </h2>
          <div className="space-y-4 text-body text-brand-gray">
            <p>
              We service a <strong>15-mile radius around Allen (75002)</strong>, covering 12+ cities including:
            </p>
            <p className="text-small">
              Allen • Plano • McKinney • Frisco • Wylie • Prosper • Lucas • Murphy • Celina • Fairview • Sachse • Carrollton • and more
            </p>
            <p>
              All areas receive the same professional standards and service quality. We offer same-week scheduling and flexible time slots to fit your busy schedule.
            </p>
            <p>
              <strong>Not sure if we cover your address?</strong> Simply enter your zip code in our instant quote form and we'll confirm service availability right away.
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
