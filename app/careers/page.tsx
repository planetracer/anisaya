'use client';

import { useState } from 'react';

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    zipCode: '',
    daysAvailable: [] as string[],
    timesAvailable: [] as string[],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Would submit to backend
    console.log('Application submitted:', formData);
    alert('Thanks for applying! We\'ll be in touch soon.');
    setFormData({ name: '', phone: '', email: '', zipCode: '', daysAvailable: [], timesAvailable: [] });
  };

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-2xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="font-fredoka text-hero-mobile md:text-hero text-brand-purple mb-4">
            Join the Anisaya team
          </h1>
          <p className="text-body text-brand-gray">
            We're looking for reliable, detail-oriented cleaners to serve our growing clientele.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-4">
              Why work with us
            </h2>
            <ul className="space-y-3 text-body text-brand-gray">
              <li>✓ Competitive pay - [INSERT DETAILS]</li>
              <li>✓ Flexible daytime schedules</li>
              <li>✓ Jobs grouped close together</li>
              <li>✓ Supplies provided</li>
              <li>✓ Keep your tips</li>
            </ul>
          </section>

          <section>
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-4">
              What we look for
            </h2>
            <ul className="space-y-3 text-body text-brand-gray">
              <li>✓ 18 or older and authorized to work in the US</li>
              <li>✓ Reliable transportation</li>
              <li>✓ Willing to pass a background check</li>
              <li>✓ Cleaning experience preferred, not required - we train you</li>
              <li>✓ Detail-oriented, on time, and respectful in clients' homes</li>
            </ul>
          </section>

          <section>
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-4">
              How hiring works
            </h2>
            <ol className="space-y-3 text-body text-brand-gray">
              <li>1. Apply through this form (takes 3 minutes)</li>
              <li>2. Short phone call with our team</li>
              <li>3. Background check</li>
              <li>4. Paid trial clean</li>
              <li>5. Start earning!</li>
            </ol>
          </section>

          <section>
            <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-8">
              Apply now
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-small font-semibold text-brand-ink mb-2">
                  Full name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-field w-full"
                  required
                />
              </div>

              <div>
                <label className="block text-small font-semibold text-brand-ink mb-2">
                  Mobile phone *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="form-field w-full"
                  required
                />
              </div>

              <div>
                <label className="block text-small font-semibold text-brand-ink mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-field w-full"
                  required
                />
              </div>

              <div>
                <label className="block text-small font-semibold text-brand-ink mb-2">
                  Zip code *
                </label>
                <input
                  type="text"
                  value={formData.zipCode}
                  onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                  className="form-field w-full"
                  required
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Submit application
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
