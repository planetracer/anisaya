import Link from 'next/link';

export default function DeepCleaningPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="font-fredoka text-hero-mobile md:text-hero text-brand-purple mb-4">
          Deep Cleaning
        </h1>
        <p className="text-body text-brand-gray mb-2">For first cleans and refreshes</p>
        <p className="text-h3 text-brand-purple font-fredoka mb-8">Starting at $190</p>

        <Link href="/quote" className="btn-primary mb-12 inline-block">
          Get my instant quote
        </Link>

        <div className="space-y-8">
          <section>
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-4">
              Best for
            </h2>
            <ul className="space-y-2 text-body text-brand-gray">
              <li>✓ Not cleaned in over a month, or getting ready for guests</li>
              <li>✓ Want a complete refresh of your home</li>
              <li>✓ Seasonal deep cleans or after major events</li>
            </ul>
          </section>

          <section>
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-4">
              What's included
            </h2>
            <p className="text-body text-brand-gray mb-6">
              <strong>Everything in Standard Cleaning, plus:</strong>
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="font-fredoka text-h3 text-brand-purple mb-3">Kitchen</h3>
                <ul className="space-y-1 text-body text-brand-gray">
                  <li>✓ Cabinet fronts fully wiped</li>
                  <li>✓ Inside oven (add-on included in deep)</li>
                  <li>✓ Inside refrigerator (add-on included)</li>
                  <li>✓ Inside dishwasher (add-on included)</li>
                  <li>✓ Inside cabinets and drawers hand-wiped</li>
                  <li>✓ Grout scrubbed</li>
                  <li>✓ Soap scum and hard water spots removed</li>
                </ul>
              </div>

              <div>
                <h3 className="font-fredoka text-h3 text-brand-purple mb-3">Bathrooms</h3>
                <ul className="space-y-1 text-body text-brand-gray">
                  <li>✓ Grout scrubbed</li>
                  <li>✓ Soap scum and hard water spots removed fully</li>
                  <li>✓ Outside of vanity cabinets fully wiped</li>
                  <li>✓ Inside vanity cabinets and drawers</li>
                  <li>✓ All soap scum removed</li>
                </ul>
              </div>

              <div>
                <h3 className="font-fredoka text-h3 text-brand-purple mb-3">Bedrooms & Living Areas</h3>
                <ul className="space-y-1 text-body text-brand-gray">
                  <li>✓ Ceiling fans fully dusted</li>
                  <li>✓ Baseboards hand-wiped</li>
                  <li>✓ Doors and door frames wiped</li>
                  <li>✓ Window sills and tracks cleaned</li>
                  <li>✓ Interior window glass</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-4">
              Not included
            </h2>
            <ul className="space-y-1 text-body text-brand-gray">
              <li>• Inside closets and shelves</li>
              <li>• Wall marks spot-cleaned</li>
              <li>• Outside windows or pressure washing</li>
              <li>• Laundry, dishes, or patio areas</li>
            </ul>
          </section>

          <section className="bg-brand-lilac-white rounded-[20px] p-8">
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-4">
              Ready to book?
            </h2>
            <Link href="/quote" className="btn-primary inline-block">
              Get your instant quote
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
