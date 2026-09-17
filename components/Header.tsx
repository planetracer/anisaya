'use client';

import Link from 'next/link';
import { useState } from 'react';
import { BUSINESS_INFO } from '@/lib/settings';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white border-b border-brand-lavender-mist z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo - Bubble Design from Brand Guide */}
        <Link href="/" className="flex-shrink-0 flex items-center gap-2">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            {/* Main purple bubble */}
            <circle cx="12" cy="12" r="8" fill="#5B4B9A" stroke="#5B4B9A" strokeWidth="1"/>
            {/* Small pink bubble */}
            <circle cx="24" cy="8" r="5" fill="#E58FB8" opacity="0.9"/>
            {/* Tiny pink accent */}
            <circle cx="30" cy="16" r="3" fill="#E58FB8" opacity="0.7"/>
            {/* Soft violet bubble */}
            <circle cx="20" cy="26" r="6" fill="#7A6DB0" opacity="0.8"/>
          </svg>
          <div>
            <div className="text-lg font-fredoka font-bold text-brand-purple">
              anisaya
            </div>
            <div className="text-xs text-brand-violet leading-none">cleaning co.</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="relative group">
            <button className="text-brand-ink hover:text-brand-purple transition-colors">
              Services
            </button>
            <div className="absolute hidden group-hover:block bg-white border border-brand-lavender-mist rounded-lg shadow-2xl p-2 mt-2 w-48 z-50">
              <Link href="/services/standard-cleaning" className="block px-4 py-3 hover:bg-brand-lilac-white rounded">Standard Cleaning</Link>
              <Link href="/services/deep-cleaning" className="block px-4 py-3 hover:bg-brand-lilac-white rounded">Deep Cleaning</Link>
              <Link href="/services/move-in-move-out" className="block px-4 py-3 hover:bg-brand-lilac-white rounded">Move-in / Move-out</Link>
            </div>
          </div>

          <div className="relative group">
            <button className="text-brand-ink hover:text-brand-purple transition-colors">
              Service Areas
            </button>
            <div className="absolute hidden group-hover:block bg-white border border-brand-lavender-mist rounded-lg shadow-2xl p-2 mt-2 w-40 z-50">
              <Link href="/house-cleaning-allen-tx" className="block px-4 py-3 hover:bg-brand-lilac-white rounded">Allen</Link>
              <Link href="/house-cleaning-plano-tx" className="block px-4 py-3 hover:bg-brand-lilac-white rounded">Plano</Link>
              <Link href="/house-cleaning-mckinney-tx" className="block px-4 py-3 hover:bg-brand-lilac-white rounded">McKinney</Link>
              <Link href="/house-cleaning-frisco-tx" className="block px-4 py-3 hover:bg-brand-lilac-white rounded">Frisco</Link>
            </div>
          </div>

          <Link href="/about" className="text-brand-ink hover:text-brand-purple transition-colors">About</Link>
          <Link href="/faq" className="text-brand-ink hover:text-brand-purple transition-colors">FAQ</Link>
          <Link href="/careers" className="text-brand-ink hover:text-brand-purple transition-colors">Careers</Link>
        </nav>

        {/* Desktop Right: Phone & CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`} className="text-brand-purple font-semibold hover:underline">
            {BUSINESS_INFO.phone}
          </a>
          <Link href="/quote" className="btn-primary">
            Get my instant quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-brand-purple"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-brand-lilac-white p-6 border-t border-brand-lavender-mist">
          <div className="space-y-4">
            <Link href="/services" className="block text-brand-ink hover:text-brand-purple">Services</Link>
            <Link href="/about" className="block text-brand-ink hover:text-brand-purple">About</Link>
            <Link href="/faq" className="block text-brand-ink hover:text-brand-purple">FAQ</Link>
            <Link href="/careers" className="block text-brand-ink hover:text-brand-purple">Careers</Link>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="block text-brand-purple font-semibold">
              {BUSINESS_INFO.phone}
            </a>
            <Link href="/quote" className="block btn-primary text-center">
              Get my instant quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
