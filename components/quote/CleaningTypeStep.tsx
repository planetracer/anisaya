'use client';

import { useState } from 'react';
import type { QuoteData } from '../QuoteForm';

interface CleaningTypeStepProps {
  data: Partial<QuoteData>;
  onChange: (data: Partial<QuoteData>) => void;
  onBack: () => void;
}

export default function CleaningTypeStep({ data, onChange, onBack }: CleaningTypeStepProps) {
  const [cleaningType, setCleaningType] = useState<'standard' | 'deep' | 'moveInMoveOut'>(
    (data.cleaningType as any) || 'standard'
  );
  const [frequency, setFrequency] = useState<'weekly' | 'biweekly' | 'monthly' | 'oneTime'>(
    (data.frequency as any) || 'monthly'
  );
  const [addOns, setAddOns] = useState<string[]>(data.addOns || []);

  const handleAddOnChange = (addOn: string) => {
    setAddOns((prev) =>
      prev.includes(addOn) ? prev.filter((a) => a !== addOn) : [...prev, addOn]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedFrequency = (cleaningType === 'deep' || cleaningType === 'moveInMoveOut')
      ? 'oneTime'
      : frequency;

    onChange({
      cleaningType,
      frequency: selectedFrequency,
      addOns,
    });
  };

  const services = [
    {
      id: 'standard',
      name: 'Standard Cleaning',
      description: 'Regular maintenance cleaning',
      best: 'Recurring clients',
    },
    {
      id: 'deep',
      name: 'Deep Cleaning',
      description: 'Thorough cleaning for first-time clients',
      best: 'First cleans and one-time jobs',
    },
    {
      id: 'moveInMoveOut',
      name: 'Move-in / Move-out',
      description: 'Complete cleaning for moving day',
      best: 'Renters, owners, realtors',
    },
  ];

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-2">
        What type of cleaning?
      </h2>
      <p className="text-brand-gray text-body mb-6">
        We offer three types of cleaning
      </p>

      {/* Service Cards */}
      <div className="space-y-3 mb-8">
        {services.map((service) => (
          <label
            key={service.id}
            className={`card cursor-pointer border-2 transition-all p-4 flex items-start gap-3 ${
              cleaningType === service.id
                ? 'border-brand-purple bg-brand-lilac-white'
                : 'border-brand-lavender-mist'
            }`}
          >
            <input
              type="radio"
              name="cleaningType"
              value={service.id}
              checked={cleaningType === service.id as any}
              onChange={(e) => setCleaningType(e.target.value as any)}
              className="mt-1 flex-shrink-0"
            />
            <div className="flex-1">
              <span className="font-fredoka font-semibold text-brand-purple block">{service.name}</span>
              <p className="text-brand-gray text-small mt-1">{service.description}</p>
              <p className="text-brand-violet text-small mt-2">Best for: {service.best}</p>
            </div>
          </label>
        ))}
      </div>

      {/* Frequency */}
      {cleaningType === 'standard' && (
        <div className="mb-8">
          <label className="block text-small font-nunito font-semibold text-brand-ink mb-3">
            How often?
          </label>
          <div className="grid grid-cols-2 gap-3">
            {(['weekly', 'biweekly', 'monthly', 'oneTime'] as const).map((freq) => (
              <button
                key={freq}
                type="button"
                onClick={() => setFrequency(freq)}
                className={`py-3 px-4 rounded-lg border-2 transition-all font-small text-center ${
                  frequency === freq
                    ? 'border-brand-purple bg-brand-purple text-white'
                    : 'border-brand-lavender-mist text-brand-ink hover:border-brand-purple'
                }`}
              >
                {freq === 'oneTime' ? 'One time' : freq.charAt(0).toUpperCase() + freq.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}

      {cleaningType === 'deep' && (
        <div className="mb-8 p-4 bg-brand-pink bg-opacity-10 rounded-lg border border-brand-pink">
          <p className="text-small text-brand-ink">
            <strong>Type:</strong> One-time deep cleaning
          </p>
        </div>
      )}

      {cleaningType === 'moveInMoveOut' && (
        <div className="mb-8 p-4 bg-brand-violet bg-opacity-10 rounded-lg border border-brand-violet">
          <p className="text-small text-brand-ink">
            <strong>Type:</strong> One-time move-in or move-out cleaning
          </p>
        </div>
      )}

      {/* Add-ons */}
      <div className="mb-8">
        <label className="block text-small font-nunito font-semibold text-brand-ink mb-3">
          Add-ons (optional)
        </label>
        <div className="space-y-2">
          {[
            { id: 'windows', label: 'Inside windows (+$30)' },
            { id: 'carpet', label: 'Carpet cleaning (+$50)' },
            { id: 'oven', label: 'Oven cleaning (+$25)' },
            { id: 'fridge', label: 'Fridge cleaning (+$20)' },
          ].map((addon) => (
            <label key={addon.id} className="flex items-center">
              <input
                type="checkbox"
                checked={addOns.includes(addon.id)}
                onChange={() => handleAddOnChange(addon.id)}
                className="mr-3 w-5 h-5"
              />
              <span className="text-brand-ink">{addon.label}</span>
            </label>
          ))}
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
