import Link from 'next/link';

export default function DeepCleaningPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-3xl mx-auto px-6">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="font-fredoka text-hero-mobile md:text-hero text-brand-purple mb-4">
            Deep Cleaning
          </h1>
          <p className="text-body text-brand-gray mb-4">
            The most thorough clean possible. Perfect for first-time clients or when your home needs serious attention.
          </p>
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <p className="text-h3 text-brand-purple font-fredoka">Starting at <span className="font-bold">$190</span></p>
            <Link href="/quote" className="btn-primary">
              Get your instant quote →
            </Link>
          </div>
        </div>

        <div className="space-y-12">
          {/* Who It's For */}
          <section>
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-6">
              Perfect for you if...
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-brand-lilac-white rounded-[16px] p-6">
                <p className="text-h3 font-fredoka text-brand-purple mb-3">✓ First-time clean</p>
                <p className="text-body text-brand-gray">
                  Moving into a new place and need everything fresh? Deep cleaning is the perfect starting point for your home.
                </p>
              </div>
              <div className="bg-brand-lilac-white rounded-[16px] p-6">
                <p className="text-h3 font-fredoka text-brand-purple mb-3">✓ After major events</p>
                <p className="text-body text-brand-gray">
                  Post-party, post-remodel, or after kids gone to college. Sometimes homes need serious refreshing.
                </p>
              </div>
              <div className="bg-brand-lilac-white rounded-[16px] p-6">
                <p className="text-h3 font-fredoka text-brand-purple mb-3">✓ Long overdue for deep clean</p>
                <p className="text-body text-brand-gray">
                  If it's been a while since your last professional deep clean, this service tackles accumulated dirt and dust.
                </p>
              </div>
              <div className="bg-brand-lilac-white rounded-[16px] p-6">
                <p className="text-h3 font-fredoka text-brand-purple mb-3">✓ Allergy concerns</p>
                <p className="text-body text-brand-gray">
                  Deep cleaning removes dust mites, allergens, and pollutants. Great for health-conscious homeowners.
                </p>
              </div>
            </div>
          </section>

          {/* What's Included */}
          <section>
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-6">
              Everything we clean
            </h2>
            <p className="text-body text-brand-gray mb-8">
              Deep cleaning includes everything in standard cleaning, plus these extra services that go the extra mile:
            </p>

            {/* Standard Cleaning Included Box */}
            <div className="bg-brand-lavender-mist rounded-[16px] p-6 mb-8">
              <p className="font-semibold text-brand-ink mb-4">✓ Includes ALL Standard Cleaning services:</p>
              <ul className="text-body text-brand-gray space-y-2">
                <li>• Complete kitchen, bathrooms, bedrooms, and living areas</li>
                <li>• All surfaces wiped and dusted</li>
                <li>• All floors vacuumed and mopped</li>
                <li>• 100% satisfaction guarantee</li>
              </ul>
            </div>

            {/* Deep Cleaning Extras */}
            <div className="space-y-8">
              {/* Kitchen Deep Clean */}
              <div className="border-l-4 border-brand-purple pl-6">
                <h3 className="font-fredoka text-h3 text-brand-purple mb-4">Kitchen (Extra Deep)</h3>
                <ul className="space-y-3 text-body text-brand-gray">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-purple font-bold mt-1">+</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Inside microwave</p>
                      <p className="text-small text-brand-gray">Thoroughly cleaned, radiation vents included</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-purple font-bold mt-1">+</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Inside oven</p>
                      <p className="text-small text-brand-gray">Baked-on residue removed, glass gleaming</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-purple font-bold mt-1">+</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Inside stovetop</p>
                      <p className="text-small text-brand-gray">Grates removed and soaked, burners cleaned</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-purple font-bold mt-1">+</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Refrigerator interior</p>
                      <p className="text-small text-brand-gray">Shelves, drawers, and walls sanitized and organized</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-purple font-bold mt-1">+</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Inside cabinets and drawers</p>
                      <p className="text-small text-brand-gray">Dust removed, organized, shelf liners replaced</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-purple font-bold mt-1">+</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Baseboards and edges</p>
                      <p className="text-small text-brand-gray">Detailed cleaning along all edges and corners</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-purple font-bold mt-1">+</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Light fixtures and inside cabinets</p>
                      <p className="text-small text-brand-gray">All surfaces, inside and out, get detailed attention</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Bathroom Deep Clean */}
              <div className="border-l-4 border-brand-pink pl-6">
                <h3 className="font-fredoka text-h3 text-brand-pink mb-4">Bathrooms (Extra Deep)</h3>
                <ul className="space-y-3 text-body text-brand-gray">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-pink font-bold mt-1">+</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Inside toilet</p>
                      <p className="text-small text-brand-gray">Extra scrubbing under the rim and waterline</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-pink font-bold mt-1">+</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Grout and tile</p>
                      <p className="text-small text-brand-gray">Deep scrubbed, mold and mildew removed</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-pink font-bold mt-1">+</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Shower/tub interior</p>
                      <p className="text-small text-brand-gray">Soap scum and hard water stains removed</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-pink font-bold mt-1">+</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Inside cabinets and drawers</p>
                      <p className="text-small text-brand-gray">Organized, wiped clean, moisture removed</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-pink font-bold mt-1">+</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Baseboards and corners</p>
                      <p className="text-small text-brand-gray">Mold and mildew treated, detail scrubbed</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-pink font-bold mt-1">+</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Windows and mirrors</p>
                      <p className="text-small text-brand-gray">Streak-free and crystal clear, frames included</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Bedrooms & Living Areas Deep Clean */}
              <div className="border-l-4 border-brand-violet pl-6">
                <h3 className="font-fredoka text-h3 text-brand-violet mb-4">Bedrooms & Living Areas (Extra Deep)</h3>
                <ul className="space-y-3 text-body text-brand-gray">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-violet font-bold mt-1">+</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Ceiling fans and light fixtures</p>
                      <p className="text-small text-brand-gray">Thoroughly cleaned including blades and bases</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-violet font-bold mt-1">+</span>
                    <div>
                      <p className="font-semibold text-brand-ink">All baseboards</p>
                      <p className="text-small text-brand-gray">Dust and marks removed throughout</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-violet font-bold mt-1">+</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Inside closets</p>
                      <p className="text-small text-brand-gray">Shelves and floors dusted and organized</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-violet font-bold mt-1">+</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Window sills and tracks</p>
                      <p className="text-small text-brand-gray">All dust and debris removed</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-violet font-bold mt-1">+</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Carpet shampooing</p>
                      <p className="text-small text-brand-gray">Professional steam cleaning for refreshed carpets</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-violet font-bold mt-1">+</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Walls and corners</p>
                      <p className="text-small text-brand-gray">Spider webs, dust, and marks removed</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Time Estimates */}
          <section className="bg-brand-lilac-white rounded-[20px] p-8">
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-6">
              How long does deep cleaning take?
            </h2>
            <p className="text-body text-brand-gray mb-8">
              Deep cleaning is more thorough than standard, so it takes longer. Here's what to expect:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🏘️</div>
                <div>
                  <p className="font-semibold text-brand-ink mb-2">Small homes (under 1,000 sq ft)</p>
                  <p className="text-body text-brand-gray">3-3.5 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">🏠</div>
                <div>
                  <p className="font-semibold text-brand-ink mb-2">Medium homes (1,000-2,000 sq ft)</p>
                  <p className="text-body text-brand-gray">4-4.5 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">🏡</div>
                <div>
                  <p className="font-semibold text-brand-ink mb-2">Larger homes (2,000-3,000 sq ft)</p>
                  <p className="text-body text-brand-gray">5-5.5 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">🏰</div>
                <div>
                  <p className="font-semibold text-brand-ink mb-2">Larger homes (3,000+ sq ft)</p>
                  <p className="text-body text-brand-gray">6+ hours (may be two-day project)</p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Breakdown */}
          <section>
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-6">
              Our deep cleaning pricing
            </h2>
            <p className="text-body text-brand-gray mb-8">
              Transparent pricing with no hidden fees. Here are typical examples:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-brand-lilac-white to-white border-2 border-brand-purple rounded-[16px] p-6">
                <p className="font-fredoka text-h3 text-brand-purple mb-4">First-Time Deep Clean</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-brand-lavender-mist">
                    <span className="text-body text-brand-gray">Small home (1BR/1BA)</span>
                    <span className="font-fredoka text-h3 text-brand-purple">$209</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-brand-lavender-mist">
                    <span className="text-body text-brand-gray">Medium home (3BR/2BA)</span>
                    <span className="font-fredoka text-h3 text-brand-purple">$308</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-brand-lavender-mist">
                    <span className="text-body text-brand-gray">Large home (4BR/2.5BA)</span>
                    <span className="font-fredoka text-h3 text-brand-purple">$408</span>
                  </div>
                  <p className="text-small text-brand-gray pt-2">Plus tax • Most thorough option</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-brand-lilac-white to-white border-2 border-brand-pink rounded-[16px] p-6">
                <p className="font-fredoka text-h3 text-brand-pink mb-4">Recurring Deep Clean</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-brand-lavender-mist">
                    <span className="text-body text-brand-gray">Small home (monthly)</span>
                    <span className="font-fredoka text-h3 text-brand-purple">$190</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-brand-lavender-mist">
                    <span className="text-body text-brand-gray">Medium home (monthly)</span>
                    <span className="font-fredoka text-h3 text-brand-purple">$280</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-brand-lavender-mist">
                    <span className="text-body text-brand-gray">Large home (monthly)</span>
                    <span className="font-fredoka text-h3 text-brand-purple">$370</span>
                  </div>
                  <p className="text-small text-brand-gray pt-2">Plus tax • Available as one-time</p>
                </div>
              </div>
            </div>

            <div className="bg-brand-lavender-mist rounded-[16px] p-6">
              <p className="font-semibold text-brand-ink mb-3">💡 Pro tip:</p>
              <p className="text-body text-brand-gray">
                Many clients do one deep clean initially, then switch to monthly standard cleanings to maintain the fresh, clean home. We can help you figure out the best plan for your needs.
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section>
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-6">
              Questions about deep cleaning
            </h2>
            <div className="space-y-4">
              <details className="bg-brand-lilac-white rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-brand-ink flex items-center justify-between">
                  Is deep cleaning the same as move-in/move-out cleaning?
                  <span className="text-brand-purple group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-body text-brand-gray mt-4">
                  Deep cleaning is our most thorough standard service. Move-in/move-out cleaning is more specialized for vacant homes and includes additional detail work like cleaning inside appliances, shampooing all carpets, and detailed window work.
                </p>
              </details>

              <details className="bg-brand-lilac-white rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-brand-ink flex items-center justify-between">
                  How often should I get deep cleaning?
                  <span className="text-brand-purple group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-body text-brand-gray mt-4">
                  Most homes benefit from deep cleaning once or twice a year. If you get regular standard cleanings, annual deep cleans are perfect. If you do your own regular maintenance, deep cleaning every 6 months is ideal.
                </p>
              </details>

              <details className="bg-brand-lilac-white rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-brand-ink flex items-center justify-between">
                  Can you combine deep cleaning with carpet shampooing?
                  <span className="text-brand-purple group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-body text-brand-gray mt-4">
                  Yes! Carpet shampooing is included in our deep cleaning package. We'll professionally steam clean all carpeted areas as part of the service.
                </p>
              </details>

              <details className="bg-brand-lilac-white rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-brand-ink flex items-center justify-between">
                  Will deep cleaning remove all stains?
                  <span className="text-brand-purple group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-body text-brand-gray mt-4">
                  We'll remove most stains, but some permanent damage or set-in stains may not fully disappear. We'll do our absolute best and can discuss specific concerns before we start.
                </p>
              </details>

              <details className="bg-brand-lilac-white rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-brand-ink flex items-center justify-between">
                  Is your 24-hour guarantee included?
                  <span className="text-brand-purple group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-body text-brand-gray mt-4">
                  Absolutely! If you're not completely satisfied with your deep clean, we'll re-clean for free within 24 hours. No questions asked.
                </p>
              </details>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-brand-purple to-brand-deep-purple rounded-[20px] p-12 text-center text-white">
            <h2 className="font-fredoka text-h2-mobile md:text-h2 mb-4">
              Ready for a thorough cleaning?
            </h2>
            <p className="text-body mb-8 max-w-xl mx-auto opacity-90">
              Book your deep cleaning now. We'll make your home sparkle like new.
            </p>
            <Link href="/quote" className="btn-primary inline-block">
              Get instant quote →
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
