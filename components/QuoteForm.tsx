'use client';

import { useState } from 'react';
import { BUSINESS_INFO, PRICING, SERVICES } from '@/lib/settings';
import ZipCodeStep from './quote/ZipCodeStep';
import HomeDetailsStep from './quote/HomeDetailsStep';
import CleaningTypeStep from './quote/CleaningTypeStep';
import ContactInfoStep from './quote/ContactInfoStep';
import PriceStep from './quote/PriceStep';

export type QuoteData = {
  zipCode: string;
  squareFootage: string;
  bedrooms: string;
  fullBathrooms: string;
  halfBathrooms: string;
  pets: string;
  cleaningType: 'standard' | 'deep' | 'moveInMoveOut';
  frequency: 'weekly' | 'biweekly' | 'monthly' | 'oneTime';
  addOns: string[];
  firstName: string;
  email: string;
  phone: string;
  promoCode: string;
};

type Step = 'zipCode' | 'homeDetails' | 'cleaningType' | 'contactInfo' | 'price' | 'booking';

export default function QuoteForm() {
  const [step, setStep] = useState<Step>('zipCode');
  const [quoteData, setQuoteData] = useState<Partial<QuoteData>>({});
  const [serviceAreaZipCodes] = useState(['75013', '75074', '75075', '75001', '75002', '75003']);

  const updateQuoteData = (data: Partial<QuoteData>) => {
    setQuoteData((prev) => ({ ...prev, ...data }));
  };

  const isInServiceArea = (zip: string) => {
    return serviceAreaZipCodes.includes(zip);
  };

  const progressSteps = ['Zip Code', 'Home Details', 'Service', 'Contact', 'Price'];
  const stepIndex = ['zipCode', 'homeDetails', 'cleaningType', 'contactInfo', 'price'].indexOf(step);

  return (
    <div>
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {progressSteps.map((s, i) => (
            <div
              key={i}
              className={`h-1 flex-1 mx-1 rounded-full transition-colors ${
                i <= stepIndex ? 'bg-brand-purple' : 'bg-brand-lavender-mist'
              }`}
            />
          ))}
        </div>
        <p className="text-small text-brand-gray text-center">
          Step {stepIndex + 1} of {progressSteps.length}
        </p>
      </div>

      {/* Steps */}
      <div className="bg-brand-lilac-white rounded-[20px] p-8">
        {step === 'zipCode' && (
          <ZipCodeStep
            value={quoteData.zipCode || ''}
            onChange={(zipCode) => {
              updateQuoteData({ zipCode });
              if (isInServiceArea(zipCode)) {
                setStep('homeDetails');
              }
            }}
            inServiceArea={isInServiceArea}
          />
        )}

        {step === 'homeDetails' && (
          <HomeDetailsStep
            data={quoteData}
            onChange={(data) => {
              updateQuoteData(data);
              setStep('cleaningType');
            }}
            onBack={() => setStep('zipCode')}
          />
        )}

        {step === 'cleaningType' && (
          <CleaningTypeStep
            data={quoteData}
            onChange={(data) => {
              updateQuoteData(data);
              setStep('contactInfo');
            }}
            onBack={() => setStep('homeDetails')}
          />
        )}

        {step === 'contactInfo' && (
          <ContactInfoStep
            data={quoteData}
            onChange={(data) => {
              updateQuoteData(data);
              setStep('price');
            }}
            onBack={() => setStep('cleaningType')}
          />
        )}

        {step === 'price' && (
          <PriceStep
            data={quoteData as QuoteData}
            onBack={() => setStep('contactInfo')}
          />
        )}
      </div>
    </div>
  );
}
