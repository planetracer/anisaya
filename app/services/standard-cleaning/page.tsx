import Link from 'next/link';

export default function StandardCleaningPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="font-fredoka text-hero-mobile md:text-hero text-brand-purple mb-4">
          Standard Cleaning
        </h1>
        <p className="text-body text-brand-gray mb-2">Perfect for recurring clients</p>
        <p className="text-h3 text-brand-purple font-fredoka mb-8">Starting at $120</p>

        <Link href="/quote" className="btn-primary mb-12 inline-block">
          Get my instant quote
        </Link>

        <div className="space-y-8">
          <section>
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-4">
              Best for
            </h2>
            <ul className="space-y-2 text-body text-brand-gray">
              <li>✓ Cleaned in the last 4 weeks and want to keep it that way</li>
              <li>✓ Weekly, every-2-weeks, or monthly recurring service</li>
              <li>✓ Homes that are regularly maintained</li>
            </ul>
          </section>

          <section>
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-4">
              What's included
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-fredoka text-h3 text-brand-purple mb-3">Kitchen</h3>
                <ul className="space-y-1 text-body text-brand-gray">
                  <li>✓ Countertops and backsplash wiped</li>
                  <li>✓ Sink scrubbed, faucet shined</li>
                  <li>✓ Microwave inside and out</li>
                  <li>✓ Stovetop cleaned</li>
                  <li>✓ Oven door and backsplash degreased</li>
                  <li>✓ Outside of appliances wiped</li>
                  <li>✓ Cabinet fronts spot-cleaned</li>
                  <li>✓ Trash emptied</li>
                  <li>✓ Floors vacuumed and mopped</li>
                </ul>
              </div>

              <div>
                <h3 className="font-fredoka text-h3 text-brand-purple mb-3">Bathrooms</h3>
                <ul className="space-y-1 text-body text-brand-gray">
                  <li>✓ Toilet cleaned and disinfected</li>
                  <li>✓ Mirror and glass doors scrubbed</li>
                  <li>✓ Sink, counter, faucet shined</li>
                  <li>✓ Faucet bases and fixtures detailed</li>
                  <li>✓ Outside of vanity cabinets spot-cleaned</li>
                  <li>✓ Towels folded or hung</li>
                  <li>✓ Trash emptied</li>
                  <li>✓ Floors vacuumed and mopped</li>
                </ul>
              </div>

              <div>
                <h3 className="font-fredoka text-h3 text-brand-purple mb-3">Bedrooms & Living Areas</h3>
                <ul className="space-y-1 text-body text-brand-gray">
                  <li>✓ Reachable surfaces and decor dusted</li>
                  <li>✓ Light switches and door handles wiped</li>
                  <li>✓ Ceiling fan blades reachable only</li>
                  <li>✓ Beds made</li>
                  <li>✓ Items folded and straightened</li>
                  <li>✓ Carpets vacuumed, hard floors mopped</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-4">
              Not included
            </h2>
            <ul className="space-y-1 text-body text-brand-gray">
              <li>• Inside appliances (fridge, oven, dishwasher) - available as add-ons</li>
              <li>• Inside cabinets and drawers</li>
              <li>• Baseboards or window sills</li>
              <li>• Outside windows, carpet shampooing, or pressure washing</li>
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
