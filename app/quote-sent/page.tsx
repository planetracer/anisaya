'use client';

import Link from 'next/link';

export default function QuoteSentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-lilac-white to-white flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        {/* Checkmark */}
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 bg-brand-pink rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <h1 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-4">
          Quote Request Sent!
        </h1>

        <p className="text-body text-brand-gray mb-8">
          Thanks for choosing Anisaya Cleaning. We received your quote request and will reach out to you within 24 hours at the email and phone number you provided.
        </p>

        <div className="bg-brand-purple bg-opacity-10 border border-brand-purple rounded-lg p-6 mb-8">
          <p className="text-small text-brand-ink">
            <strong>What happens next?</strong>
          </p>
          <ul className="text-small text-brand-gray mt-3 space-y-2 text-left">
            <li>✓ We review your home details</li>
            <li>✓ Confirm service availability</li>
            <li>✓ Send you a personalized quote</li>
            <li>✓ Help you schedule your cleaning</li>
          </ul>
        </div>

        <div className="space-y-3">
          <Link href="/quote" className="btn-primary w-full block">
            Get another quote
          </Link>
          <Link href="/" className="btn-secondary w-full block">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
