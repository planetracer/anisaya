import Link from 'next/link';

export default function PlanoPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="font-fredoka text-hero-mobile md:text-hero text-brand-purple mb-4">
          House cleaning in Plano, TX
        </h1>
        <p className="text-body text-brand-gray mb-12">
          Professional house cleaning services in Plano. Recurring, deep, and move-in/move-out cleaning.
        </p>

        {/* Service CTA */}
        <div className="bg-brand-lilac-white rounded-[20px] p-8 mb-12">
          <div className="mb-6">
            <label className="block text-small font-semibold text-brand-ink mb-2">
              Neighborhoods served
            </label>
            <p className="text-body text-brand-gray">
              We serve Plano and surrounding areas. Let us know your neighborhood during your quote.
            </p>
          </div>
          <Link href="/quote" className="btn-primary block text-center">
            Get your instant quote
          </Link>
        </div>

        {/* Services */}
        <section className="mb-12">
          <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-6">
            Services in Plano
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Standard Cleaning', price: '$120+', desc: 'Recurring maintenance' },
              { name: 'Deep Cleaning', price: '$190+', desc: 'First cleans and one-time' },
              { name: 'Move-in / Move-out', price: '$230+', desc: 'Complete moving day' },
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
        </section>

        {/* City FAQ */}
        <section>
          <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-6">
            Plano cleaning FAQs
          </h2>
          <div className="space-y-2">
            {[
              { q: 'How soon can you come out to Plano?', a: 'We usually have availability within a week. During peak seasons, it may take 2 weeks.' },
              { q: 'Do you clean commercial properties in Plano?', a: 'We focus on residential cleaning. Contact us to discuss your specific needs.' },
              { q: 'Are you insured and bonded?', a: 'Yes, we\'re fully insured and bonded for your peace of mind.' },
            ].map((faq, i) => (
              <details key={i} className="cursor-pointer">
                <summary className="font-semibold text-brand-ink hover:text-brand-purple transition-colors py-3 border-b border-brand-lavender-mist">
                  {faq.q}
                </summary>
                <p className="text-brand-gray py-3">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
