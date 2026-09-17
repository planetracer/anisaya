'use client';

import { useState } from 'react';
import type { QuoteData } from '../QuoteForm';

interface HomeDetailsStepProps {
  data: Partial<QuoteData>;
  onChange: (data: Partial<QuoteData>) => void;
  onBack: () => void;
}

export default function HomeDetailsStep({ data, onChange, onBack }: HomeDetailsStepProps) {
  const [squareFootage, setSquareFootage] = useState(data.squareFootage || '');
  const [bedrooms, setBedrooms] = useState(data.bedrooms || '');
  const [fullBathrooms, setFullBathrooms] = useState(data.fullBathrooms || '');
  const [halfBathrooms, setHalfBathrooms] = useState(data.halfBathrooms || '');
  const [pets, setPets] = useState(data.pets || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (squareFootage && bedrooms && fullBathrooms !== undefined && pets !== undefined) {
      onChange({
        squareFootage,
        bedrooms,
        fullBathrooms,
        halfBathrooms: halfBathrooms || '0',
        pets,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-2">
        Tell us about your home
      </h2>
      <p className="text-brand-gray text-body mb-6">
        This helps us calculate your exact price
      </p>

      <div className="space-y-4 mb-6">
        {/* Square Footage */}
        <div>
          <label className="block text-small font-nunito font-semibold text-brand-ink mb-2">
            Square footage
          </label>
          <select
            value={squareFootage}
            onChange={(e) => setSquareFootage(e.target.value)}
            className="form-field w-full"
            required
          >
            <option value="">Select range</option>
            <option value="under1000">Under 1,000 sqft</option>
            <option value="1000-2000">1,000 - 2,000 sqft</option>
            <option value="2000-3000">2,000 - 3,000 sqft</option>
            <option value="3000+">3,000+ sqft</option>
          </select>
        </div>

        {/* Bedrooms */}
        <div>
          <label className="block text-small font-nunito font-semibold text-brand-ink mb-2">
            Bedrooms
          </label>
          <select
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            className="form-field w-full"
            required
          >
            <option value="">Select number</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6+">6+</option>
          </select>
        </div>

        {/* Full Bathrooms */}
        <div>
          <label className="block text-small font-nunito font-semibold text-brand-ink mb-2">
            Full bathrooms
          </label>
          <select
            value={fullBathrooms}
            onChange={(e) => setFullBathrooms(e.target.value)}
            className="form-field w-full"
            required
          >
            <option value="">Select number</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5+">5+</option>
          </select>
        </div>

        {/* Half Bathrooms */}
        <div>
          <label className="block text-small font-nunito font-semibold text-brand-ink mb-2">
            Half bathrooms
          </label>
          <select
            value={halfBathrooms}
            onChange={(e) => setHalfBathrooms(e.target.value)}
            className="form-field w-full"
          >
            <option value="">Select number</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>

        {/* Pets */}
        <div>
          <label className="block text-small font-nunito font-semibold text-brand-ink mb-2">
            Pets
          </label>
          <select
            value={pets}
            onChange={(e) => setPets(e.target.value)}
            className="form-field w-full"
            required
          >
            <option value="">Select option</option>
            <option value="none">None</option>
            <option value="1">1</option>
            <option value="2+">2+</option>
          </select>
        </div>
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
          className="btn-primary flex-1"
        >
          Continue
        </button>
      </div>
    </form>
  );
}
