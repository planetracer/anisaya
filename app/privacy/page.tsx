export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="font-fredoka text-hero-mobile md:text-hero text-brand-purple mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-sm max-w-none text-brand-gray space-y-6">
          <section>
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-2">
              Our commitment to your privacy
            </h2>
            <p>
              [Add your privacy policy here. This should explain how you collect, use, and protect customer information.]
            </p>
          </section>

          <section>
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-2">
              Information we collect
            </h2>
            <p>
              We collect information you provide when booking a cleaning or applying to work with us, including your name, email, phone, and address.
            </p>
          </section>

          <section>
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-2">
              How we use your information
            </h2>
            <p>
              We use your information to process your booking, send you updates, and improve our services. We never share your information with third parties without your consent.
            </p>
          </section>

          <section>
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-2">
              Contact us
            </h2>
            <p>
              If you have questions about our privacy practices, email us at [INSERT EMAIL].
            </p>
          </section>

          <p className="text-small text-brand-gray italic">
            Last updated: [INSERT DATE]
          </p>
        </div>
      </div>
    </div>
  );
}
