import Link from 'next/link';

export default function StandardCleaningPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-3xl mx-auto px-6">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="font-fredoka text-hero-mobile md:text-hero text-brand-purple mb-4">
            Standard Cleaning
          </h1>
          <p className="text-body text-brand-gray mb-4">
            Our most popular service. Perfect for homes that are regularly maintained and just need a refresh.
          </p>
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <p className="text-h3 text-brand-purple font-fredoka">Starting at <span className="font-bold">$120</span></p>
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
                <p className="text-h3 font-fredoka text-brand-purple mb-3">✓ Weekly Cleaners</p>
                <p className="text-body text-brand-gray">
                  Your home is already clean from your last visit. You just want to maintain that fresh, sparkly look and save time.
                </p>
              </div>
              <div className="bg-brand-lilac-white rounded-[16px] p-6">
                <p className="text-h3 font-fredoka text-brand-purple mb-3">✓ Every-2-Weeks Preference</p>
                <p className="text-body text-brand-gray">
                  You don't need deep cleaning, just regular upkeep. Most homeowners find this schedule keeps their home in perfect condition.
                </p>
              </div>
              <div className="bg-brand-lilac-white rounded-[16px] p-6">
                <p className="text-h3 font-fredoka text-brand-purple mb-3">✓ Monthly Maintenance</p>
                <p className="text-body text-brand-gray">
                  You like a thorough refresh once a month but handle day-to-day cleaning. This keeps everything in top shape.
                </p>
              </div>
              <div className="bg-brand-lilac-white rounded-[16px] p-6">
                <p className="text-h3 font-fredoka text-brand-purple mb-3">✓ Home Care Aware</p>
                <p className="text-body text-brand-gray">
                  You believe in preventative maintenance and want to extend the life of your furnishings and home surfaces.
                </p>
              </div>
            </div>
          </section>

          {/* What's Included - Detailed Breakdown */}
          <section>
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-6">
              Exactly what we clean
            </h2>
            <p className="text-body text-brand-gray mb-8">
              Our standard cleaning includes everything your home needs for regular maintenance. Here's the complete breakdown by room:
            </p>

            <div className="space-y-8">
              {/* Kitchen */}
              <div className="border-l-4 border-brand-purple pl-6">
                <h3 className="font-fredoka text-h3 text-brand-purple mb-4">Kitchen</h3>
                <ul className="space-y-3 text-body text-brand-gray">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-purple font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Countertops and backsplash</p>
                      <p className="text-small text-brand-gray">Wiped clean, crumbs removed, shined</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-purple font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Sink and faucet</p>
                      <p className="text-small text-brand-gray">Scrubbed, disinfected, polished to shine</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-purple font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Microwave</p>
                      <p className="text-small text-brand-gray">Interior and exterior cleaned</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-purple font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Stovetop and oven</p>
                      <p className="text-small text-brand-gray">Degreased, grates cleaned</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-purple font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Appliances</p>
                      <p className="text-small text-brand-gray">Outside of fridge, dishwasher, and other appliances wiped</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-purple font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Cabinet fronts</p>
                      <p className="text-small text-brand-gray">Spot-cleaned for visible marks</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-purple font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Trash and recycling</p>
                      <p className="text-small text-brand-gray">Emptied and bins lined</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-purple font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Floors</p>
                      <p className="text-small text-brand-gray">Vacuumed and mopped thoroughly</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Bathrooms */}
              <div className="border-l-4 border-brand-pink pl-6">
                <h3 className="font-fredoka text-h3 text-brand-pink mb-4">Bathrooms</h3>
                <ul className="space-y-3 text-body text-brand-gray">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-pink font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Toilet</p>
                      <p className="text-small text-brand-gray">Bowl cleaned and disinfected, exterior wiped</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-pink font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Shower/tub and glass doors</p>
                      <p className="text-small text-brand-gray">Scrubbed clean, water spots removed, glass shined</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-pink font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Sink and counter</p>
                      <p className="text-small text-brand-gray">Scrubbed and shined, no toothpaste residue</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-pink font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Faucets and fixtures</p>
                      <p className="text-small text-brand-gray">Polished to shine, bases detailed</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-pink font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Mirror</p>
                      <p className="text-small text-brand-gray">Streak-free and gleaming</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-pink font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Vanity and storage</p>
                      <p className="text-small text-brand-gray">Outside spot-cleaned</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-pink font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Towels</p>
                      <p className="text-small text-brand-gray">Folded neatly or hung properly</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-pink font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Trash</p>
                      <p className="text-small text-brand-gray">Emptied and lined</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-pink font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Floors</p>
                      <p className="text-small text-brand-gray">Vacuumed and mopped</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Bedrooms & Living Areas */}
              <div className="border-l-4 border-brand-violet pl-6">
                <h3 className="font-fredoka text-h3 text-brand-violet mb-4">Bedrooms & Living Areas</h3>
                <ul className="space-y-3 text-body text-brand-gray">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-violet font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Dusting</p>
                      <p className="text-small text-brand-gray">Surfaces, furniture, and décor dusted (reachable areas)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-violet font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Light switches and door handles</p>
                      <p className="text-small text-brand-gray">Wiped and disinfected</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-violet font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Ceiling fan blades</p>
                      <p className="text-small text-brand-gray">Dusted (reachable areas only)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-violet font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Beds</p>
                      <p className="text-small text-brand-gray">Made neatly with pillows properly placed</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-violet font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Personal items</p>
                      <p className="text-small text-brand-gray">Folded and straightened, organized on surfaces</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-violet font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-brand-ink">Carpets and hard floors</p>
                      <p className="text-small text-brand-gray">Vacuumed and mopped throughout</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Time Estimates */}
          <section className="bg-brand-lilac-white rounded-[20px] p-8">
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-6">
              How long does it take?
            </h2>
            <p className="text-body text-brand-gray mb-8">
              Our team works efficiently but thoroughly. Here's what to expect:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🏘️</div>
                <div>
                  <p className="font-semibold text-brand-ink mb-2">Small homes (under 1,000 sq ft)</p>
                  <p className="text-body text-brand-gray">2-2.5 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">🏠</div>
                <div>
                  <p className="font-semibold text-brand-ink mb-2">Medium homes (1,000-2,000 sq ft)</p>
                  <p className="text-body text-brand-gray">2.5-3 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">🏡</div>
                <div>
                  <p className="font-semibold text-brand-ink mb-2">Larger homes (2,000-3,000 sq ft)</p>
                  <p className="text-body text-brand-gray">3-3.5 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">🏰</div>
                <div>
                  <p className="font-semibold text-brand-ink mb-2">Larger homes (3,000+ sq ft)</p>
                  <p className="text-body text-brand-gray">3.5-4 hours</p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Breakdown */}
          <section>
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-6">
              See what you'll pay
            </h2>
            <p className="text-body text-brand-gray mb-8">
              Our pricing is transparent - no surprises. Here are examples for different home sizes:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-brand-lilac-white to-white border-2 border-brand-purple rounded-[16px] p-6">
                <p className="font-fredoka text-h3 text-brand-purple mb-4">One-Time Cleaning</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-brand-lavender-mist">
                    <span className="text-body text-brand-gray">Small home (1BR/1BA)</span>
                    <span className="font-fredoka text-h3 text-brand-purple">$132</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-brand-lavender-mist">
                    <span className="text-body text-brand-gray">Medium home (3BR/2BA)</span>
                    <span className="font-fredoka text-h3 text-brand-purple">$176</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-brand-lavender-mist">
                    <span className="text-body text-brand-gray">Large home (4BR/2.5BA)</span>
                    <span className="font-fredoka text-h3 text-brand-purple">$220</span>
                  </div>
                  <p className="text-small text-brand-gray pt-2">Plus tax • Final price depends on your home</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-brand-lilac-white to-white border-2 border-brand-pink rounded-[16px] p-6">
                <p className="font-fredoka text-h3 text-brand-pink mb-4">Monthly Recurring</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-brand-lavender-mist">
                    <span className="text-body text-brand-gray">Small home</span>
                    <span className="font-fredoka text-h3 text-brand-purple">$120</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-brand-lavender-mist">
                    <span className="text-body text-brand-gray">Medium home</span>
                    <span className="font-fredoka text-h3 text-brand-purple">$160</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-brand-lavender-mist">
                    <span className="text-body text-brand-gray">Large home</span>
                    <span className="font-fredoka text-h3 text-brand-purple">$200</span>
                  </div>
                  <p className="text-small text-brand-gray pt-2">Plus tax • Best savings with weekly</p>
                </div>
              </div>
            </div>

            <div className="bg-brand-lavender-mist rounded-[16px] p-6">
              <p className="font-semibold text-brand-ink mb-3">💡 Save more with regular service:</p>
              <ul className="space-y-2 text-body text-brand-gray">
                <li>• <span className="font-semibold">Weekly:</span> 8% discount per visit</li>
                <li>• <span className="font-semibold">Every 2 weeks:</span> 3% discount per visit</li>
                <li>• <span className="font-semibold">Monthly:</span> Standard pricing</li>
              </ul>
            </div>
          </section>

          {/* What's NOT Included */}
          <section>
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-6">
              What's not included (but you can add)
            </h2>
            <p className="text-body text-brand-gray mb-6">
              Standard cleaning focuses on regular maintenance. These services are available as add-ons:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-4 p-4 bg-brand-lilac-white rounded-lg">
                <span className="text-2xl">🪟</span>
                <div>
                  <p className="font-semibold text-brand-ink">Inside windows</p>
                  <p className="text-small text-brand-gray">+$30 • All interior windows throughout your home</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-brand-lilac-white rounded-lg">
                <span className="text-2xl">🧊</span>
                <div>
                  <p className="font-semibold text-brand-ink">Refrigerator interior</p>
                  <p className="text-small text-brand-gray">+$20 • Shelves wiped, organized, sanitized</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-brand-lilac-white rounded-lg">
                <span className="text-2xl">🔥</span>
                <div>
                  <p className="font-semibold text-brand-ink">Oven interior</p>
                  <p className="text-small text-brand-gray">+$25 • Deep clean, baked-on residue removed</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-brand-lilac-white rounded-lg">
                <span className="text-2xl">🧶</span>
                <div>
                  <p className="font-semibold text-brand-ink">Carpet cleaning</p>
                  <p className="text-small text-brand-gray">+$50 • Professional steam cleaning</p>
                </div>
              </div>
            </div>
          </section>

          {/* Before & After */}
          <section className="bg-brand-lilac-white rounded-[20px] p-8">
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-6">
              What to expect
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="bg-gray-200 rounded-lg h-64 mb-4 flex items-center justify-center">
                  <span className="text-gray-500 text-small">Before Photo</span>
                </div>
                <p className="font-fredoka text-h3 text-brand-gray">Your home before</p>
                <p className="text-body text-brand-gray">A bit cluttered, needs a refresh, surfaces dusty</p>
              </div>
              <div>
                <div className="bg-gray-200 rounded-lg h-64 mb-4 flex items-center justify-center">
                  <span className="text-gray-500 text-small">After Photo</span>
                </div>
                <p className="font-fredoka text-h3 text-brand-purple">Fresh and clean</p>
                <p className="text-body text-brand-gray">Sparkly surfaces, organized, fresh-smelling home</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section>
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-6">
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              <details className="bg-brand-lilac-white rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-brand-ink flex items-center justify-between">
                  Do you use eco-friendly products?
                  <span className="text-brand-purple group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-body text-brand-gray mt-4">
                  We use high-quality, safe cleaning products that are effective and gentle on your home. Let us know if you have specific product preferences or sensitivities, and we'll accommodate them.
                </p>
              </details>

              <details className="bg-brand-lilac-white rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-brand-ink flex items-center justify-between">
                  What if I'm not happy with the cleaning?
                  <span className="text-brand-purple group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-body text-brand-gray mt-4">
                  We guarantee 100% satisfaction. If you're not happy with your clean, we'll re-clean for free within 24 hours. No questions asked. Your satisfaction is our priority.
                </p>
              </details>

              <details className="bg-brand-lilac-white rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-brand-ink flex items-center justify-between">
                  How often should I get standard cleaning?
                  <span className="text-brand-purple group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-body text-brand-gray mt-4">
                  It depends on your lifestyle. Weekly works best for busy families. Every 2 weeks is our most popular option. Monthly can work if you do daily tidying. Our team can help you find the right schedule.
                </p>
              </details>

              <details className="bg-brand-lilac-white rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-brand-ink flex items-center justify-between">
                  Can you clean on specific days/times?
                  <span className="text-brand-purple group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-body text-brand-gray mt-4">
                  We're available Monday-Saturday, 8am-2pm. When you book, you can select your preferred date and time. We'll do our best to accommodate recurring appointments on the same day/time for your convenience.
                </p>
              </details>

              <details className="bg-brand-lilac-white rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-brand-ink flex items-center justify-between">
                  Will the same person clean my home?
                  <span className="text-brand-purple group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-body text-brand-gray mt-4">
                  We try to send the same trusted cleaner for recurring appointments so they learn your preferences. All our cleaners are background-checked and trained to our high standards.
                </p>
              </details>

              <details className="bg-brand-lilac-white rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-brand-ink flex items-center justify-between">
                  What if I need to reschedule or cancel?
                  <span className="text-brand-purple group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-body text-brand-gray mt-4">
                  You can reschedule or cancel through your account or by calling us. For recurring cleanings, you can pause, cancel, or adjust frequency anytime with 24 hours notice.
                </p>
              </details>
            </div>
          </section>

          {/* Customer Reviews Section */}
          <section className="bg-gradient-to-br from-brand-lilac-white to-white rounded-[20px] p-8">
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-6">
              What our customers say
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-brand-lavender-mist">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-body text-brand-gray mb-4 italic">
                  "Our home has never looked better. The team is so thorough and respectful of our space. We've been getting weekly cleanings for 3 months now!"
                </p>
                <p className="font-semibold text-brand-ink">Sarah M. • Plano, TX</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-brand-lavender-mist">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-body text-brand-gray mb-4 italic">
                  "I wasn't sure about hiring help, but Anisaya has made such a difference. Every other week, our home stays fresh and I get my weekends back. Highly recommend!"
                </p>
                <p className="font-semibold text-brand-ink">Michael R. • Frisco, TX</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-brand-lavender-mist">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-body text-brand-gray mb-4 italic">
                  "Transparent pricing, reliable service, and they actually listen to your preferences. This is the cleaning service I always wanted to find!"
                </p>
                <p className="font-semibold text-brand-ink">Jessica L. • McKinney, TX</p>
              </div>
            </div>
          </section>

          {/* Why Choose Anisaya */}
          <section>
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-6">
              Why choose Anisaya?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="text-3xl flex-shrink-0">✓</div>
                <div>
                  <p className="font-semibold text-brand-ink mb-2">Background-checked cleaners</p>
                  <p className="text-body text-brand-gray">Every cleaner on our team is thoroughly vetted so you can trust them in your home.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl flex-shrink-0">✓</div>
                <div>
                  <p className="font-semibold text-brand-ink mb-2">Transparent pricing</p>
                  <p className="text-body text-brand-gray">No surprises, no hidden fees. You know exactly what you'll pay before booking.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl flex-shrink-0">✓</div>
                <div>
                  <p className="font-semibold text-brand-ink mb-2">24-hour guarantee</p>
                  <p className="text-body text-brand-gray">Not satisfied? We'll re-clean for free within 24 hours. Your satisfaction is guaranteed.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl flex-shrink-0">✓</div>
                <div>
                  <p className="font-semibold text-brand-ink mb-2">Flexible scheduling</p>
                  <p className="text-body text-brand-gray">Available Monday-Saturday, 8am-2pm. Pause, resume, or cancel anytime.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl flex-shrink-0">✓</div>
                <div>
                  <p className="font-semibold text-brand-ink mb-2">8 years of experience</p>
                  <p className="text-body text-brand-gray">Aisha and her team know exactly how to get your home spotless, every time.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl flex-shrink-0">✓</div>
                <div>
                  <p className="font-semibold text-brand-ink mb-2">Promo code for new clients</p>
                  <p className="text-body text-brand-gray">First-time customers get $25 off with code ANI25. Seriously!</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-brand-purple to-brand-deep-purple rounded-[20px] p-12 text-center text-white">
            <h2 className="font-fredoka text-h2-mobile md:text-h2 mb-4">
              Ready to get your home cleaned?
            </h2>
            <p className="text-body mb-8 max-w-xl mx-auto opacity-90">
              Get an instant quote in 60 seconds. See exactly what you'll pay before you book.
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
