'use client';

import { useState } from 'react';

interface ZipCodeStepProps {
  value: string;
  onChange: (zipCode: string) => void;
  inServiceArea: (zip: string) => boolean;
}

export default function ZipCodeStep({ value, onChange, inServiceArea }: ZipCodeStepProps) {
  const [inputValue, setInputValue] = useState(value);
  const [error, setError] = useState('');
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputValue.trim()) {
      setError('Please enter your zip code');
      return;
    }

    if (inServiceArea(inputValue)) {
      onChange(inputValue);
    } else {
      setError('');
      setSubmitted(true);
    }
  };

  if (submitted && !inServiceArea(inputValue)) {
    return (
      <div className="text-center py-8">
        <div className="text-4xl mb-4">📍</div>
        <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-4">
          We're not in your area yet
        </h2>
        <p className="text-brand-gray text-body mb-6">
          Enter your email to get notified when we expand to your neighborhood
        </p>

        <form onSubmit={(e) => {
          e.preventDefault();
          // Would submit to backend
          alert(`Joined waitlist: ${waitlistEmail}`);
          setSubmitted(false);
          setInputValue('');
          setWaitlistEmail('');
        }} className="max-w-sm mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            value={waitlistEmail}
            onChange={(e) => setWaitlistEmail(e.target.value)}
            className="form-field w-full mb-4"
            required
          />
          <button type="submit" className="btn-primary w-full">
            Notify me
          </button>
        </form>

        <button
          onClick={() => {
            setSubmitted(false);
            setInputValue('');
            setError('');
          }}
          className="text-brand-purple hover:underline mt-6 text-small"
        >
          Try another zip code
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-2">
        What's your zip code?
      </h2>
      <p className="text-brand-gray text-body mb-6">
        We serve Allen, Plano, McKinney, and Frisco.
      </p>

      <input
        type="text"
        placeholder="75013"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value.replace(/\D/g, '').slice(0, 5));
          setError('');
        }}
        className={`form-field w-full mb-2 text-h3 ${error ? 'border-red-500' : ''}`}
        maxLength={5}
      />

      {error && <p className="text-red-500 text-small mb-6">{error}</p>}

      <button type="submit" className="btn-primary w-full mb-4">
        Continue
      </button>

      <a href={`tel:${process.env.NEXT_PUBLIC_PHONE || '[INSERT PHONE]'}`} className="block text-center text-small text-brand-purple hover:underline">
        Or call or text
      </a>
    </form>
  );
}
