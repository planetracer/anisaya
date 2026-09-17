export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="font-fredoka text-hero-mobile md:text-hero text-brand-purple mb-8">
          Terms & Policies
        </h1>

        <div className="space-y-8 text-brand-gray">
          <section>
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-2">
              Cancellation policy
            </h2>
            <p>
              You can cancel or reschedule your appointment for free up to 48 hours before your scheduled service. Cancellations within 48 hours may be subject to a fee.
            </p>
          </section>

          <section>
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-2">
              Re-clean guarantee
            </h2>
            <p>
              If we miss anything during your cleaning, we'll return within 24 hours to make it right at no charge. Simply let us know within 24 hours of your service.
            </p>
          </section>

          <section>
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-2">
              Damage policy
            </h2>
            <p>
              We're fully insured and bonded. In the unlikely event something is damaged during cleaning, we'll make it right. Please report any damage within 24 hours.
            </p>
          </section>

          <section>
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-2">
              Payment terms
            </h2>
            <p>
              Payment is due at the time of booking. We accept all major credit cards. Recurring services may be billed according to your schedule.
            </p>
          </section>

          <section>
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-2">
              Service agreement
            </h2>
            <p>
              By booking with Anisaya Cleaning, you agree to these terms and conditions. We reserve the right to refuse service to anyone who violates our policies.
            </p>
          </section>

          <section>
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-2">
              Access requirements
            </h2>
            <p>
              For your appointment, we need reliable access to your home. This can be via unlocked door, garage, key code, or similar arrangement arranged during booking.
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
