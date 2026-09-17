import Link from 'next/link';

export default function MoveInMoveOutPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-3xl mx-auto px-6">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="font-fredoka text-hero-mobile md:text-hero text-brand-purple mb-4">
            Move-in / Move-out Cleaning
          </h1>
          <p className="text-body text-brand-gray mb-4">
            The most thorough cleaning possible. Designed specifically for empty homes with access to every nook and cranny.
          </p>
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <p className="text-h3 text-brand-purple font-fredoka">Starting at <span className="font-bold">$230</span></p>
            <Link href="/quote" className="btn-primary">
              Get your instant quote →
            </Link>
          </div>
        </div>

        <div className="space-y-12">
          {/* Who It's For */}
          <section>
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-6">
              Perfect for you if you're...
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-brand-lilac-white rounded-[16px] p-6">
                <p className="text-h3 font-fredoka text-brand-purple mb-3">✓ Moving Out</p>
                <p className="text-body text-brand-gray">
                  Rental agreement require a spotless move-out? We'll leave the place in perfect condition to secure your deposit.
                </p>
              </div>
              <div className="bg-brand-lilac-white rounded-[16px] p-6">
                <p className="text-h3 font-fredoka text-brand-purple mb-3">✓ Moving In</p>
                <p className="text-body text-brand-gray">
                  Want to deep clean your new empty home before moving furniture in? We clean everything from top to bottom.
                </p>
              </div>
              <div className="bg-brand-lilac-white rounded-[16px] p-6">
                <p className="text-h3 font-fredoka text-brand-purple mb-3">✓ Realtors & Agents</p>
                <p className="text-body text-brand-gray">
                  Prepare properties for showings or new tenants. We offer competitive repeat pricing for regular work.
                </p>
              </div>
              <div className="bg-brand-lilac-white rounded-[16px] p-6">
                <p className="text-h3 font-fredoka text-brand-purple mb-3">✓ Property Managers</p>
                <p className="text-body text-brand-gray">
                  Turnover cleaning between tenants. We get homes show-ready fast with guaranteed quality.
                </p>
              </div>
            </div>
          </section>

          {/* What's Included - Detailed */}
          <section>
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-6">
              Everything we clean - every inch
            </h2>
            <p className="text-body text-brand-gray mb-8">
              Move-in/move-out cleaning is our most comprehensive service. We clean everything, including areas normally off-limits when furniture is present. Perfect for empty homes.
            </p>

            {/* Includes Everything */}
            <div className="bg-brand-lavender-mist rounded-[16px] p-6 mb-8">
              <p className="font-semibold text-brand-ink mb-4">✓ Includes EVERYTHING from Deep Cleaning, plus:</p>
              <ul className="text-body text-brand-gray space-y-2">
                <li>• All areas behind where furniture would be</li>
                <li>• Complete interior of every cabinet, drawer, and closet</li>
                <li>• All baseboards, door frames, and corners</li>
                <li>• Professional carpet shampooing throughout</li>
                <li>• Window cleaning inside and sills</li>
              </ul>
            </div>

            {/* Detailed Breakdown */}
            <div className="space-y-8">
              {/* Kitchen */}
              <div className="border-l-4 border-brand-purple pl-6">
                <h3 className="font-fredoka text-h3 text-brand-purple mb-4">Kitchen (Complete)</h3>
                <ul className="space-y-3 text-body text-brand-gray">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-purple font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Inside every cabinet and drawer</p>
                      <p className="text-small text-brand-gray">Completely cleaned, wiped, degreased, and lined</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-purple font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Inside oven and stovetop</p>
                      <p className="text-small text-brand-gray">Completely cleaned, grates soaked and scrubbed, glass gleaming</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-purple font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Inside refrigerator</p>
                      <p className="text-small text-brand-gray">Every shelf, drawer, and wall sanitized and deodorized</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-purple font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Inside dishwasher</p>
                      <p className="text-small text-brand-gray">Complete deep clean, filters cleaned</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-purple font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Sink and faucet</p>
                      <p className="text-small text-brand-gray">Polished to shine, drains flushed</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-purple font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Countertops and backsplash</p>
                      <p className="text-small text-brand-gray">Grout lines scrubbed, all grease removed</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-purple font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-brand-ink">All baseboards and edges</p>
                      <p className="text-small text-brand-gray">Detailed hand-wiped along entire kitchen</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-purple font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Floors</p>
                      <p className="text-small text-brand-gray">Vacuumed, mopped, and polished</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Bathrooms */}
              <div className="border-l-4 border-brand-pink pl-6">
                <h3 className="font-fredoka text-h3 text-brand-pink mb-4">Bathrooms (Complete)</h3>
                <ul className="space-y-3 text-body text-brand-gray">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-pink font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Toilet and tank</p>
                      <p className="text-small text-brand-gray">Inside bowl scrubbed, tank cleaned, exterior polished</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-pink font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Shower/tub and walls</p>
                      <p className="text-small text-brand-gray">All soap scum removed, grout scrubbed, caulk cleaned</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-pink font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Inside vanity cabinets</p>
                      <p className="text-small text-brand-gray">Every shelf and drawer wiped and deodorized</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-pink font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Mirrors and windows</p>
                      <p className="text-small text-brand-gray">Streak-free, crystal clear, frames wiped</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-pink font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-brand-ink">All fixtures and faucets</p>
                      <p className="text-small text-brand-gray">Polished to shine, water stains removed</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-pink font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Baseboards and corners</p>
                      <p className="text-small text-brand-gray">Detail cleaned, mold treated if present</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-pink font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Floors</p>
                      <p className="text-small text-brand-gray">Vacuumed, mopped, and polished thoroughly</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Bedrooms & Living Areas */}
              <div className="border-l-4 border-brand-violet pl-6">
                <h3 className="font-fredoka text-h3 text-brand-violet mb-4">Bedrooms & Living Areas (Complete)</h3>
                <ul className="space-y-3 text-body text-brand-gray">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-violet font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Inside closets and shelves</p>
                      <p className="text-small text-brand-gray">Completely wiped down, deodorized, organized</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-violet font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-brand-ink">All baseboards</p>
                      <p className="text-small text-brand-gray">Hand-wiped throughout entire home</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-violet font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Ceiling fans and light fixtures</p>
                      <p className="text-small text-brand-gray">Completely cleaned inside and out</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-violet font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Windows and sills</p>
                      <p className="text-small text-brand-gray">Interior glass, tracks, and sills cleaned</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-violet font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Door frames and handles</p>
                      <p className="text-small text-brand-gray">All wiped and polished</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-violet font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Wall marks and smudges</p>
                      <p className="text-small text-brand-gray">Carefully spot-cleaned where possible</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-violet font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Carpet shampooing</p>
                      <p className="text-small text-brand-gray">Professional steam cleaning of all carpeted areas</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-violet font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-brand-ink">All floors</p>
                      <p className="text-small text-brand-gray">Vacuumed, mopped, and polished</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Timeline & Process */}
          <section className="bg-brand-lilac-white rounded-[20px] p-8">
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-6">
              How long does move-out cleaning take?
            </h2>
            <p className="text-body text-brand-gray mb-8">
              Since the home is empty, we can access every area and work efficiently. Times vary by home size:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🏘️</div>
                <div>
                  <p className="font-semibold text-brand-ink mb-2">Small homes (under 1,000 sq ft)</p>
                  <p className="text-body text-brand-gray">4-5 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">🏠</div>
                <div>
                  <p className="font-semibold text-brand-ink mb-2">Medium homes (1,000-2,000 sq ft)</p>
                  <p className="text-body text-brand-gray">5-6 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">🏡</div>
                <div>
                  <p className="font-semibold text-brand-ink mb-2">Larger homes (2,000-3,000 sq ft)</p>
                  <p className="text-body text-brand-gray">6-8 hours (may need 2 days)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">🏰</div>
                <div>
                  <p className="font-semibold text-brand-ink mb-2">Larger homes (3,000+ sq ft)</p>
                  <p className="text-body text-brand-gray">8+ hours (2-day project)</p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section>
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-6">
              Move-in / Move-out pricing
            </h2>
            <p className="text-body text-brand-gray mb-8">
              Transparent pricing. No extra charges. Here are typical examples for empty homes:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-brand-lilac-white to-white border-2 border-brand-purple rounded-[16px] p-6">
                <p className="font-fredoka text-h3 text-brand-purple mb-4">Moving Out/In</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-brand-lavender-mist">
                    <span className="text-body text-brand-gray">Small home (1BR/1BA)</span>
                    <span className="font-fredoka text-h3 text-brand-purple">$253</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-brand-lavender-mist">
                    <span className="text-body text-brand-gray">Medium home (3BR/2BA)</span>
                    <span className="font-fredoka text-h3 text-brand-purple">$385</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-brand-lavender-mist">
                    <span className="text-body text-brand-gray">Large home (4BR/2.5BA)</span>
                    <span className="font-fredoka text-h3 text-brand-purple">$527</span>
                  </div>
                  <p className="text-small text-brand-gray pt-2">Plus tax • One-time deep clean</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-brand-lilac-white to-white border-2 border-brand-pink rounded-[16px] p-6">
                <p className="font-fredoka text-h3 text-brand-pink mb-4">Realtors/Property Mgmt</p>
                <div className="space-y-3">
                  <p className="text-body text-brand-gray mb-4">
                    <span className="font-semibold">Volume Pricing Available</span>
                  </p>
                  <p className="text-small text-brand-gray mb-4">
                    We offer competitive recurring rates for realtors, property managers, and property management companies.
                  </p>
                  <Link href="/contact" className="btn-secondary inline-block">
                    Contact us for pricing
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-brand-lavender-mist rounded-[16px] p-6">
              <p className="font-semibold text-brand-ink mb-3">💡 Save even more:</p>
              <ul className="text-body text-brand-gray space-y-2">
                <li>• Book with at least 48 hours notice for on-time guarantee</li>
                <li>• Multiple properties get volume discounts</li>
                <li>• Recurring clean-between-tenant work qualifies for special pricing</li>
              </ul>
            </div>
          </section>

          {/* Why Choose Us */}
          <section>
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-6">
              Why realtors & property managers choose us
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="text-3xl flex-shrink-0">✓</div>
                <div>
                  <p className="font-semibold text-brand-ink mb-2">Fast turnaround</p>
                  <p className="text-body text-brand-gray">We can schedule quickly and work efficiently to meet tight deadlines.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl flex-shrink-0">✓</div>
                <div>
                  <p className="font-semibold text-brand-ink mb-2">Reliable team</p>
                  <p className="text-body text-brand-gray">Background-checked professionals show up on time, every time.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl flex-shrink-0">✓</div>
                <div>
                  <p className="font-semibold text-brand-ink mb-2">100% satisfaction</p>
                  <p className="text-body text-brand-gray">If anything isn't perfect, we'll re-clean for free within 24 hours.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl flex-shrink-0">✓</div>
                <div>
                  <p className="font-semibold text-brand-ink mb-2">Transparent pricing</p>
                  <p className="text-body text-brand-gray">No hidden fees, no surprises. Volume discounts available.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl flex-shrink-0">✓</div>
                <div>
                  <p className="font-semibold text-brand-ink mb-2">Documentation</p>
                  <p className="text-body text-brand-gray">Photos and reports available for lease disputes or insurance.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl flex-shrink-0">✓</div>
                <div>
                  <p className="font-semibold text-brand-ink mb-2">Local expertise</p>
                  <p className="text-body text-brand-gray">8 years serving Plano, Allen, Frisco, McKinney and surrounding areas.</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-6">
              Questions about move-in/move-out cleaning
            </h2>
            <div className="space-y-4">
              <details className="bg-brand-lilac-white rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-brand-ink flex items-center justify-between">
                  Can you work around my move-out deadline?
                  <span className="text-brand-purple group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-body text-brand-gray mt-4">
                  Yes! We understand tight timelines. If you give us at least 48 hours notice, we can accommodate most schedules. For urgent same-day requests, call us immediately at (469) 653-4650.
                </p>
              </details>

              <details className="bg-brand-lilac-white rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-brand-ink flex items-center justify-between">
                  Is move-in/move-out cleaning different from deep cleaning?
                  <span className="text-brand-purple group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-body text-brand-gray mt-4">
                  Yes. Move-in/move-out is more comprehensive because the home is empty. We can access areas behind appliances, inside every cabinet, and hard-to-reach spaces that aren't available when furniture is present.
                </p>
              </details>

              <details className="bg-brand-lilac-white rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-brand-ink flex items-center justify-between">
                  Can you remove wall marks or paint scuffs?
                  <span className="text-brand-purple group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-body text-brand-gray mt-4">
                  We can spot-clean most marks carefully, but paint scuffs or damage usually require repainting. We'll do our best without damaging walls, and can discuss specific concerns before we start.
                </p>
              </details>

              <details className="bg-brand-lilac-white rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-brand-ink flex items-center justify-between">
                  Do you offer invoices and documentation?
                  <span className="text-brand-purple group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-body text-brand-gray mt-4">
                  Absolutely. We provide itemized invoices and can include before/after photos. Perfect for lease disputes, insurance claims, or landlord records.
                </p>
              </details>

              <details className="bg-brand-lilac-white rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-brand-ink flex items-center justify-between">
                  What if the landlord isn't satisfied?
                  <span className="text-brand-purple group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-body text-brand-gray mt-4">
                  We guarantee 100% satisfaction. If the landlord identifies specific issues, we'll re-clean those areas for free within 24 hours. No questions asked.
                </p>
              </details>

              <details className="bg-brand-lilac-white rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-brand-ink flex items-center justify-between">
                  Do you offer discounts for realtors?
                  <span className="text-brand-purple group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-body text-brand-gray mt-4">
                  Yes! We offer competitive volume pricing for realtors and property management companies who need regular cleaning between tenants. Contact us at (469) 653-4650 or info@anisaya.com for pricing.
                </p>
              </details>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-brand-purple to-brand-deep-purple rounded-[20px] p-12 text-center text-white">
            <h2 className="font-fredoka text-h2-mobile md:text-h2 mb-4">
              Ready to book your move-out clean?
            </h2>
            <p className="text-body mb-8 max-w-xl mx-auto opacity-90">
              Get an instant quote now, or contact us for volume discounts for realtors and property managers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="btn-primary inline-block">
                Get instant quote
              </Link>
              <Link href="/contact" className="btn-secondary inline-block text-brand-purple hover:bg-brand-lavender-mist bg-white">
                Contact for pricing
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
