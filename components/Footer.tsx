import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/settings';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-deep-purple text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="text-2xl font-fredoka font-bold mb-2">anisaya</div>
            <div className="text-sm text-brand-lavender-mist mb-4">
              Professional house cleaning in {BUSINESS_INFO.serviceArea.join(', ')}
            </div>
            <div className="text-sm text-brand-lavender-mist">
              Serving: {BUSINESS_INFO.serviceArea.join(', ')}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-fredoka font-bold mb-4">Services</h3>
            <nav className="space-y-2">
              <Link href="/services/standard-cleaning" className="block text-brand-lavender-mist hover:text-white transition-colors text-sm">
                Standard Cleaning
              </Link>
              <Link href="/services/deep-cleaning" className="block text-brand-lavender-mist hover:text-white transition-colors text-sm">
                Deep Cleaning
              </Link>
              <Link href="/services/move-in-move-out" className="block text-brand-lavender-mist hover:text-white transition-colors text-sm">
                Move-in / Move-out
              </Link>
              <Link href="/quote" className="block text-brand-lavender-mist hover:text-white transition-colors text-sm">
                Get Quote
              </Link>
            </nav>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-fredoka font-bold mb-4">Company</h3>
            <nav className="space-y-2">
              <Link href="/about" className="block text-brand-lavender-mist hover:text-white transition-colors text-sm">
                About
              </Link>
              <Link href="/faq" className="block text-brand-lavender-mist hover:text-white transition-colors text-sm">
                FAQ
              </Link>
              <Link href="/careers" className="block text-brand-lavender-mist hover:text-white transition-colors text-sm">
                Careers
              </Link>
              <Link href="/contact" className="block text-brand-lavender-mist hover:text-white transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-fredoka font-bold mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="block text-brand-lavender-mist hover:text-white transition-colors">
                {BUSINESS_INFO.phone}
              </a>
              <a href={`mailto:${BUSINESS_INFO.email}`} className="block text-brand-lavender-mist hover:text-white transition-colors">
                {BUSINESS_INFO.email}
              </a>
              <p className="text-brand-lavender-mist">{BUSINESS_INFO.hours}</p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-brand-lavender-mist hover:text-white transition-colors">Instagram</a>
                <a href="#" className="text-brand-lavender-mist hover:text-white transition-colors">Facebook</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-brand-lavender-mist pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-lavender-mist">
            <p>&copy; {currentYear} Anisaya Cleaning. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms & Policies
              </Link>
              <span>Insured and bonded</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
