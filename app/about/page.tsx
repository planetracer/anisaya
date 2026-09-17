import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="font-fredoka text-hero-mobile md:text-hero text-brand-purple mb-12">
          About Anisaya
        </h1>

        <div className="space-y-12">
          <section>
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-4">
              Our story
            </h2>
            <p className="text-body text-brand-gray leading-relaxed">
              [Add your story here about why you started Anisaya Cleaning and your mission]
            </p>
            <div className="w-full h-64 bg-brand-lilac-white rounded-[20px] mt-6 flex items-center justify-center">
              <span className="text-6xl">📷</span>
            </div>
          </section>

          <section>
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-4">
              How we choose cleaners
            </h2>
            <ul className="space-y-3 text-body text-brand-gray">
              <li>✓ Background checks for your peace of mind</li>
              <li>✓ Trial cleans to ensure quality</li>
              <li>✓ Training on our detailed checklists</li>
            </ul>
          </section>

          <section>
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-4">
              Our promises
            </h2>
            <ul className="space-y-3 text-body text-brand-gray">
              <li>✓ Re-clean within 24 hours if anything's missed</li>
              <li>✓ Same cleaner when possible for consistency</li>
              <li>✓ Clear, upfront pricing with no surprises</li>
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
