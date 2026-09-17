'use client';

import { useState } from 'react';
import CustomSelect from '../CustomSelect';
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
    if (squareFootage && bedrooms && fullBathrooms && pets) {
      const sqftMap: { [key: string]: string } = {
        'Under 1,000 sqft': 'under1000',
        '1,000 - 2,000 sqft': '1000-2000',
        '2,000 - 3,000 sqft': '2000-3000',
        '3,000+ sqft': '3000+',
      };

      const petMap: { [key: string]: string } = {
        'None': 'none',
        '1': '1',
        '2+': '2+',
      };

      onChange({
        squareFootage: sqftMap[squareFootage],
        bedrooms,
        fullBathrooms,
        halfBathrooms: halfBathrooms || '0',
        pets: petMap[pets],
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
        <CustomSelect
          label="Square footage"
          value={squareFootage}
          onChange={setSquareFootage}
          options={['Under 1,000 sqft', '1,000 - 2,000 sqft', '2,000 - 3,000 sqft', '3,000+ sqft']}
        />

        <CustomSelect
          label="Bedrooms"
          value={bedrooms}
          onChange={setBedrooms}
          options={['1', '2', '3', '4', '5', '6+']}
        />

        <CustomSelect
          label="Full bathrooms"
          value={fullBathrooms}
          onChange={setFullBathrooms}
          options={['1', '2', '3', '4', '5+']}
        />

        <CustomSelect
          label="Half bathrooms"
          value={halfBathrooms}
          onChange={setHalfBathrooms}
          options={['0', '1', '2', '3']}
        />

        <CustomSelect
          label="Pets"
          value={pets}
          onChange={setPets}
          options={['None', '1', '2+']}
        />
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
