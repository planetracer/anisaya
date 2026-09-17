export default function FAQPage() {
  const faqs = [
    {
      category: 'Booking and pricing',
      questions: [
        { q: 'How is my price calculated?', a: 'We calculate based on your home size, number of rooms, and service type. Add-ons like carpet cleaning are priced separately.' },
        { q: 'Do I need to be home?', a: 'No, we just need a way to access your home. Most clients leave a key or unlock the door.' },
        { q: 'How do I use the ANI25 promo code?', a: 'Enter ANI25 on the price screen during your quote for $25 off any service through end of year.' },
        { q: 'Is sales tax included?', a: 'No, sales tax is added at checkout. Your quote shows the pre-tax price.' },
      ],
    },
    {
      category: 'The clean',
      questions: [
        { q: 'What\'s included in a standard clean?', a: 'Kitchen counters and appliances, bathrooms, bedrooms, and living areas.' },
        { q: 'Do you bring your own supplies?', a: 'Yes, we bring everything needed unless you prefer us to use yours.' },
        { q: 'What if I have pets?', a: 'Let us know during booking. We\'re pet-friendly and will take extra care.' },
        { q: 'Will I get the same cleaner?', a: 'We assign the same cleaner when possible to build a relationship and ensure consistency.' },
      ],
    },
    {
      category: 'Policies',
      questions: [
        { q: 'What\'s your cancellation policy?', a: 'Cancel or reschedule free up to 48 hours before your appointment.' },
        { q: 'What if something\'s missed?', a: 'We offer a 24-hour re-clean guarantee at no charge.' },
        { q: 'What if something breaks?', a: 'We\'re fully insured. Let us know immediately and we\'ll make it right.' },
      ],
    },
    {
      category: 'Payment',
      questions: [
        { q: 'When am I charged?', a: 'Payment is collected during booking for upfront bookings, or as specified in your service agreement.' },
        { q: 'What payment methods do you take?', a: 'We accept all major credit cards and digital payments through our booking system.' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="font-fredoka text-hero-mobile md:text-hero text-brand-purple mb-4">
          Frequently asked questions
        </h1>
        <p className="text-body text-brand-gray mb-12">
          Find answers to common questions about our services
        </p>

        <div className="space-y-8">
          {faqs.map((section, i) => (
            <div key={i}>
              <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-violet mb-4">
                {section.category}
              </h2>
              <div className="space-y-2">
                {section.questions.map((faq, j) => (
                  <details key={j} className="cursor-pointer">
                    <summary className="font-semibold text-brand-ink hover:text-brand-purple transition-colors py-3 border-b border-brand-lavender-mist">
                      {faq.q}
                    </summary>
                    <p className="text-brand-gray py-3">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
