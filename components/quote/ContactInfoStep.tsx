'use client';

import { useState } from 'react';
import { calculateQuotePrice } from '@/lib/calculatePrice';
import type { QuoteData } from '../QuoteForm';

interface ContactInfoStepProps {
  data: Partial<QuoteData>;
  onChange: (data: Partial<QuoteData>) => void;
  onBack: () => void;
}

export default function ContactInfoStep({ data, onChange, onBack }: ContactInfoStepProps) {
  const [firstName, setFirstName] = useState(data.firstName || '');
  const [email, setEmail] = useState(data.email || '');
  const [phone, setPhone] = useState(data.phone || '');
  const [agreed, setAgreed] = useState(true);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!firstName.trim()) newErrors.firstName = 'First name required';
    if (!email.includes('@')) newErrors.email = 'Valid email required';
    if (!phone.replace(/\D/g, '').match(/^\d{10}$/)) newErrors.phone = 'Valid phone required';
    if (!agreed) newErrors.agreed = 'You must agree to continue';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      // Calculate estimated price
      const estimatedPrice = calculateQuotePrice(data);

      // Send contact info to Discord
      await fetch('/api/send-quote-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          firstName,
          email,
          phone: phone.replace(/\D/g, ''),
          price: estimatedPrice,
        }),
      });
    } catch (error) {
      console.error('Error sending quote request:', error);
    } finally {
      setIsSubmitting(false);
      onChange({
        firstName,
        email,
        phone: phone.replace(/\D/g, ''),
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-2">
        Let's confirm your details
      </h2>
      <p className="text-brand-gray text-body mb-6">
        We'll use this to send you your quote and booking confirmation
      </p>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-small font-nunito font-semibold text-brand-ink mb-2">
            First name
          </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
              setErrors((prev) => ({ ...prev, firstName: '' }));
            }}
            placeholder="Sarah"
            className={`form-field w-full ${errors.firstName ? 'border-red-500' : ''}`}
            required
          />
          {errors.firstName && <p className="text-red-500 text-small mt-1">{errors.firstName}</p>}
        </div>

        <div>
          <label className="block text-small font-nunito font-semibold text-brand-ink mb-2">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors((prev) => ({ ...prev, email: '' }));
            }}
            placeholder="sarah@email.com"
            className={`form-field w-full ${errors.email ? 'border-red-500' : ''}`}
            required
          />
          {errors.email && <p className="text-red-500 text-small mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-small font-nunito font-semibold text-brand-ink mb-2">
            Mobile phone
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => {
              const cleaned = e.target.value.replace(/\D/g, '').slice(0, 10);
              setPhone(cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3'));
              setErrors((prev) => ({ ...prev, phone: '' }));
            }}
            placeholder="(555) 555-1234"
            className={`form-field w-full ${errors.phone ? 'border-red-500' : ''}`}
            required
          />
          {errors.phone && <p className="text-red-500 text-small mt-1">{errors.phone}</p>}
        </div>

        <label className="flex items-start gap-3 mt-6">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => {
              setAgreed(e.target.checked);
              setErrors((prev) => ({ ...prev, agreed: '' }));
            }}
            className="mt-1 w-5 h-5 flex-shrink-0"
            required
          />
          <span className="text-small text-brand-gray">
            I agree to get texts and emails about my quote and booking. Reply STOP to opt out.
          </span>
        </label>
        {errors.agreed && <p className="text-red-500 text-small mt-2">{errors.agreed}</p>}
      </div>

      <div className="flex gap-4">
        <button
          type="button"
          onClick={onBack}
          className="btn-secondary flex-1"
        >
          Back
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Loading...' : 'Show my price'}
        </button>
      </div>
    </form>
  );
}
