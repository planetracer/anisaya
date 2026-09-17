import Link from 'next/link';

export default function MoveInMoveOutPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="font-fredoka text-hero-mobile md:text-hero text-brand-purple mb-4">
          Move-in / Move-out Cleaning
        </h1>
        <p className="text-body text-brand-gray mb-2">Complete cleaning for moving day</p>
        <p className="text-h3 text-brand-purple font-fredoka mb-8">Starting at $230</p>

        <Link href="/quote" className="btn-primary mb-12 inline-block">
          Get my instant quote
        </Link>

        <div className="space-y-8">
          <section>
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-4">
              Best for
            </h2>
            <ul className="space-y-2 text-body text-brand-gray">
              <li>✓ Moving out of an empty home and want it spotless for the next tenant</li>
              <li>✓ Moving into an empty home that needs complete cleaning</li>
              <li>✓ Renters, homeowners, and realtors</li>
            </ul>
          </section>

          <section>
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-4">
              What's included
            </h2>
            <p className="text-body text-brand-gray mb-6">
              <strong>Everything in Deep Cleaning, plus:</strong>
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="font-fredoka text-h3 text-brand-purple mb-3">Complete Interior</h3>
                <ul className="space-y-1 text-body text-brand-gray">
                  <li>✓ Inside every cabinet and drawer</li>
                  <li>✓ Inside closets and shelves</li>
                  <li>✓ Behind light furniture (home is empty)</li>
                  <li>✓ Wall marks spot-cleaned</li>
                  <li>✓ All hard-to-reach areas</li>
                </ul>
              </div>

              <div>
                <h3 className="font-fredoka text-h3 text-brand-purple mb-3">Kitchen</h3>
                <ul className="space-y-1 text-body text-brand-gray">
                  <li>✓ Cabinet fronts fully wiped</li>
                  <li>✓ Inside oven completely cleaned</li>
                  <li>✓ Inside refrigerator completely cleaned</li>
                  <li>✓ Inside dishwasher completely cleaned</li>
                  <li>✓ Inside all cabinets and drawers</li>
                  <li>✓ All grout scrubbed</li>
                  <li>✓ Baseboards hand-wiped</li>
                </ul>
              </div>

              <div>
                <h3 className="font-fredoka text-h3 text-brand-purple mb-3">Bathrooms</h3>
                <ul className="space-y-1 text-body text-brand-gray">
                  <li>✓ All grout scrubbed and cleaned</li>
                  <li>✓ All soap scum and hard water spots removed</li>
                  <li>✓ Inside all vanity cabinets and drawers</li>
                  <li>✓ Outside of vanity cabinets fully wiped</li>
                  <li>✓ Baseboards hand-wiped</li>
                  <li>✓ All fixtures shine</li>
                </ul>
              </div>

              <div>
                <h3 className="font-fredoka text-h3 text-brand-purple mb-3">Bedrooms & Living Areas</h3>
                <ul className="space-y-1 text-body text-brand-gray">
                  <li>✓ Ceiling fans fully dusted</li>
                  <li>✓ All baseboards hand-wiped</li>
                  <li>✓ Doors and door frames wiped</li>
                  <li>✓ Window sills, tracks, and interior glass</li>
                  <li>✓ Inside closets and shelves</li>
                  <li>✓ Wall marks spot-cleaned</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-4">
              Perfect for
            </h2>
            <div className="bg-brand-lilac-white rounded-[20px] p-6 mb-6">
              <h3 className="font-fredoka text-h3 text-brand-purple mb-3">Realtors & Property Managers</h3>
              <p className="text-body text-brand-gray mb-4">
                Prepare empty homes for showing or turnovers. We handle everything so the next tenant can move in the same day.
              </p>
              <Link href="/contact" className="btn-secondary inline-block">
                Contact us for repeat pricing
              </Link>
            </div>
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
