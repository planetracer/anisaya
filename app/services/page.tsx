import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      name: 'Standard Cleaning',
      price: 'Starting at $120',
      description: 'Perfect for recurring clients',
      href: '/services/standard-cleaning',
      color: 'bg-brand-purple',
      best_for: 'Recurring clients who want their home maintained regularly',
      kitchen: ['Sink cleaned and shined', 'Counters wiped down', 'Appliance exteriors wiped', 'Floor vacuumed and mopped'],
      bathrooms: ['Toilet cleaned and disinfected', 'Sink cleaned and shined', 'Shower/tub cleaned', 'Floor vacuumed and mopped'],
      other: ['Dust all surfaces', 'Vacuum all bedrooms and living areas', 'Mop all hard floors', 'Empty trash'],
    },
    {
      name: 'Deep Cleaning',
      price: 'Starting at $190',
      description: 'For first cleans and refreshes',
      href: '/services/deep-cleaning',
      color: 'bg-brand-pink',
      best_for: 'Homes not cleaned in over a month or getting ready for guests',
      kitchen: ['Everything in Standard, plus:', 'Cabinet fronts fully wiped', 'Inside oven cleaned', 'Inside fridge cleaned', 'Inside dishwasher cleaned', 'Grout scrubbed', 'Hard water spots removed'],
      bathrooms: ['Everything in Standard, plus:', 'Grout scrubbed', 'Soap scum fully removed', 'Hard water spots removed', 'Inside cabinet drawers wiped'],
      other: ['Baseboards hand-wiped', 'Ceiling fans fully dusted', 'Door frames wiped', 'Window sills and tracks cleaned'],
    },
    {
      name: 'Move-in / Move-out',
      price: 'Starting at $230',
      description: 'Complete move day cleaning',
      href: '/services/move-in-move-out',
      color: 'bg-brand-violet',
      best_for: 'Empty homes needing complete cleaning for moving day',
      kitchen: ['Everything in Deep, plus:', 'Inside all cabinets and drawers', 'Wall marks spot-cleaned', 'Baseboards hand-wiped'],
      bathrooms: ['Everything in Deep, plus:', 'Inside all vanity cabinets', 'All fixtures shine', 'Wall marks cleaned'],
      other: ['Inside closets and shelves', 'Behind all furniture', 'Wall spots cleaned', 'All hard-to-reach areas'],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="section bg-brand-lilac-white">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="font-fredoka text-hero-mobile md:text-hero text-brand-purple mb-4">
            Our Cleaning Services
          </h1>
          <p className="text-body text-brand-gray mb-8">
            Choose the service that fits your needs. Every tier includes attention to detail and professional cleaners.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="section bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {services.map((service, i) => (
              <div key={i} className={`${service.color} text-white rounded-[20px] p-8`}>
                <h2 className="font-fredoka text-h2-mobile md:text-h2 mb-2">{service.name}</h2>
                <p className="text-h3 font-fredoka mb-1">{service.price}</p>
                <p className="text-small mb-6 opacity-90">{service.description}</p>
                <Link href={service.href} className="inline-block bg-white text-brand-purple font-semibold px-6 py-2 rounded-full hover:bg-brand-lilac-white transition-colors">
                  Learn more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Comparison */}
      <section className="section bg-brand-lilac-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-8 text-center">
            What's Included
          </h2>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto mb-8">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-brand-purple">
                  <th className="text-left py-4 px-4 font-fredoka text-h3 text-brand-purple">Service Area</th>
                  <th className="text-left py-4 px-4 font-fredoka text-h3 text-brand-purple">Standard</th>
                  <th className="text-left py-4 px-4 font-fredoka text-h3 text-brand-purple">Deep</th>
                  <th className="text-left py-4 px-4 font-fredoka text-h3 text-brand-purple">Move-in/out</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brand-lavender-mist bg-white">
                  <td colSpan={4} className="py-4 px-4 font-fredoka text-h3 text-brand-purple">Kitchen</td>
                </tr>
                <tr className="border-b border-brand-lavender-mist bg-white">
                  <td className="py-3 px-4 text-brand-gray">Sink & counters</td>
                  <td className="py-3 px-4">✓</td>
                  <td className="py-3 px-4">✓</td>
                  <td className="py-3 px-4">✓</td>
                </tr>
                <tr className="border-b border-brand-lavender-mist bg-white">
                  <td className="py-3 px-4 text-brand-gray">Inside oven</td>
                  <td className="py-3 px-4">-</td>
                  <td className="py-3 px-4">✓</td>
                  <td className="py-3 px-4">✓</td>
                </tr>
                <tr className="border-b border-brand-lavender-mist bg-white">
                  <td className="py-3 px-4 text-brand-gray">Inside fridge</td>
                  <td className="py-3 px-4">-</td>
                  <td className="py-3 px-4">✓</td>
                  <td className="py-3 px-4">✓</td>
                </tr>
                <tr className="border-b border-brand-lavender-mist bg-white">
                  <td className="py-3 px-4 text-brand-gray">Inside dishwasher</td>
                  <td className="py-3 px-4">-</td>
                  <td className="py-3 px-4">✓</td>
                  <td className="py-3 px-4">✓</td>
                </tr>
                <tr className="border-b border-brand-lavender-mist bg-white">
                  <td className="py-3 px-4 text-brand-gray">Cabinet interiors</td>
                  <td className="py-3 px-4">-</td>
                  <td className="py-3 px-4">✓</td>
                  <td className="py-3 px-4">✓</td>
                </tr>
                <tr className="border-b border-brand-lavender-mist bg-white">
                  <td className="py-3 px-4 text-brand-gray">Grout scrubbed</td>
                  <td className="py-3 px-4">-</td>
                  <td className="py-3 px-4">✓</td>
                  <td className="py-3 px-4">✓</td>
                </tr>

                <tr className="border-b border-brand-lavender-mist bg-white">
                  <td colSpan={4} className="py-4 px-4 font-fredoka text-h3 text-brand-purple">Bathrooms</td>
                </tr>
                <tr className="border-b border-brand-lavender-mist bg-white">
                  <td className="py-3 px-4 text-brand-gray">Toilet & sink</td>
                  <td className="py-3 px-4">✓</td>
                  <td className="py-3 px-4">✓</td>
                  <td className="py-3 px-4">✓</td>
                </tr>
                <tr className="border-b border-brand-lavender-mist bg-white">
                  <td className="py-3 px-4 text-brand-gray">Shower/tub cleaned</td>
                  <td className="py-3 px-4">✓</td>
                  <td className="py-3 px-4">✓</td>
                  <td className="py-3 px-4">✓</td>
                </tr>
                <tr className="border-b border-brand-lavender-mist bg-white">
                  <td className="py-3 px-4 text-brand-gray">Grout scrubbed</td>
                  <td className="py-3 px-4">-</td>
                  <td className="py-3 px-4">✓</td>
                  <td className="py-3 px-4">✓</td>
                </tr>
                <tr className="border-b border-brand-lavender-mist bg-white">
                  <td className="py-3 px-4 text-brand-gray">Hard water spots removed</td>
                  <td className="py-3 px-4">-</td>
                  <td className="py-3 px-4">✓</td>
                  <td className="py-3 px-4">✓</td>
                </tr>
                <tr className="border-b border-brand-lavender-mist bg-white">
                  <td className="py-3 px-4 text-brand-gray">Cabinet interiors</td>
                  <td className="py-3 px-4">-</td>
                  <td className="py-3 px-4">✓</td>
                  <td className="py-3 px-4">✓</td>
                </tr>

                <tr className="border-b border-brand-lavender-mist bg-white">
                  <td colSpan={4} className="py-4 px-4 font-fredoka text-h3 text-brand-purple">Bedrooms & Living Areas</td>
                </tr>
                <tr className="border-b border-brand-lavender-mist bg-white">
                  <td className="py-3 px-4 text-brand-gray">Dust & vacuum</td>
                  <td className="py-3 px-4">✓</td>
                  <td className="py-3 px-4">✓</td>
                  <td className="py-3 px-4">✓</td>
                </tr>
                <tr className="border-b border-brand-lavender-mist bg-white">
                  <td className="py-3 px-4 text-brand-gray">Ceiling fans dusted</td>
                  <td className="py-3 px-4">-</td>
                  <td className="py-3 px-4">✓</td>
                  <td className="py-3 px-4">✓</td>
                </tr>
                <tr className="border-b border-brand-lavender-mist bg-white">
                  <td className="py-3 px-4 text-brand-gray">Baseboards wiped</td>
                  <td className="py-3 px-4">-</td>
                  <td className="py-3 px-4">✓</td>
                  <td className="py-3 px-4">✓</td>
                </tr>
                <tr className="border-b border-brand-lavender-mist bg-white">
                  <td className="py-3 px-4 text-brand-gray">Window sills & tracks</td>
                  <td className="py-3 px-4">-</td>
                  <td className="py-3 px-4">✓</td>
                  <td className="py-3 px-4">✓</td>
                </tr>
                <tr className="border-b border-brand-lavender-mist bg-white">
                  <td className="py-3 px-4 text-brand-gray">Inside closets & shelves</td>
                  <td className="py-3 px-4">-</td>
                  <td className="py-3 px-4">-</td>
                  <td className="py-3 px-4">✓</td>
                </tr>
                <tr className="border-b border-brand-lavender-mist bg-white">
                  <td className="py-3 px-4 text-brand-gray">Behind furniture</td>
                  <td className="py-3 px-4">-</td>
                  <td className="py-3 px-4">-</td>
                  <td className="py-3 px-4">✓</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Accordion */}
          <div className="md:hidden space-y-4">
            {services.map((service, idx) => (
              <details key={idx} className="bg-white rounded-[20px] p-6 border border-brand-lavender-mist">
                <summary className="cursor-pointer font-fredoka text-h3 text-brand-purple hover:text-brand-pink transition-colors">
                  {service.name}
                </summary>
                <div className="mt-4 space-y-4 text-brand-gray">
                  <div>
                    <h4 className="font-fredoka text-h4 text-brand-purple mb-2">Kitchen</h4>
                    <ul className="text-small space-y-1">
                      {service.kitchen.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-fredoka text-h4 text-brand-purple mb-2">Bathrooms</h4>
                    <ul className="text-small space-y-1">
                      {service.bathrooms.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-fredoka text-h4 text-brand-purple mb-2">Other Areas</h4>
                    <ul className="text-small space-y-1">
                      {service.other.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-4">
            Not sure which service is right for you?
          </h2>
          <p className="text-body text-brand-gray mb-8">
            Get an instant quote and we'll help you choose the perfect cleaning service.
          </p>
          <Link href="/quote" className="btn-primary inline-block">
            Get an instant quote
          </Link>
        </div>
      </section>
    </div>
  );
}
