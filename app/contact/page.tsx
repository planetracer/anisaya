'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', type: 'other', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thanks for reaching out! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', phone: '', type: 'other', message: '' });
  };

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="font-fredoka text-hero-mobile md:text-hero text-brand-purple mb-4">
          Questions? We're here to help
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <a href="tel:contact" className="card text-center hover:border-brand-purple transition-colors">
            <div className="text-4xl mb-2">📞</div>
            <h3 className="font-fredoka text-h3-mobile md:text-h3 text-brand-purple">Call or text</h3>
            <p className="text-brand-gray text-small mt-2">[INSERT PHONE]</p>
          </a>

          <a href="mailto:contact@email.com" className="card text-center hover:border-brand-purple transition-colors">
            <div className="text-4xl mb-2">✉️</div>
            <h3 className="font-fredoka text-h3-mobile md:text-h3 text-brand-purple">Email us</h3>
            <p className="text-brand-gray text-small mt-2">[INSERT EMAIL]</p>
          </a>

          <div className="card text-center">
            <div className="text-4xl mb-2">🕐</div>
            <h3 className="font-fredoka text-h3-mobile md:text-h3 text-brand-purple">Hours</h3>
            <p className="text-brand-gray text-small mt-2">[INSERT HOURS]</p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-6">
            Send us a message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-small font-semibold text-brand-ink mb-2">Name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="form-field w-full"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-small font-semibold text-brand-ink mb-2">Email *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-field w-full"
                  required
                />
              </div>
              <div>
                <label className="block text-small font-semibold text-brand-ink mb-2">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="form-field w-full"
                />
              </div>
            </div>

            <div>
              <label className="block text-small font-semibold text-brand-ink mb-2">I'm a... *</label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="form-field w-full"
                required
              >
                <option value="new-client">New client</option>
                <option value="current-client">Current client</option>
                <option value="realtor">Realtor or property manager</option>
                <option value="applicant">Job applicant</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-small font-semibold text-brand-ink mb-2">Message *</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="form-field w-full h-32 resize-none"
                required
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              Send message
            </button>
          </form>
        </div>

        <div className="bg-brand-lilac-white rounded-[20px] p-8 text-center">
          <p className="text-body text-brand-gray mb-4">
            We typically reply within 2 business hours
          </p>
          <p className="text-small text-brand-gray">
            For immediate assistance, call us: [INSERT PHONE]
          </p>
        </div>
      </div>
    </div>
  );
}
