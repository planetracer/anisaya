'use client';

import { useState } from 'react';
import { PRICING, BUSINESS_INFO } from '@/lib/settings';
import type { QuoteData } from '../QuoteForm';

interface PriceStepProps {
  data: QuoteData;
  onBack: () => void;
  onBookNow?: () => void;
  onChatOpen?: () => void;
}

export default function PriceStep({ data, onBack, onBookNow, onChatOpen }: PriceStepProps) {
  const [promoCode, setPromoCode] = useState('');
  const [showPromoField, setShowPromoField] = useState(false);
  const [appliedPromo, setAppliedPromo] = useState('');

  // Calculate base price
  const pricingKey = data.squareFootage as keyof typeof PRICING.baseRates.standard;
  const cleaningTypeKey = data.cleaningType as 'standard' | 'deep' | 'moveInMoveOut';

  let basePrice = PRICING.baseRates[cleaningTypeKey][pricingKey] || 150;

  // Add extra room charges
  const bedrooms = parseInt(data.bedrooms) || 0;
  const fullBaths = parseInt(data.fullBathrooms) || 0;
  const halfBaths = parseInt(data.halfBathrooms) || 0;

  if (bedrooms > 3) {
    basePrice += (bedrooms - 3) * PRICING.extraRoomCharges.bedroomAbove3;
  }
  if (fullBaths > 2) {
    basePrice += (fullBaths - 2) * PRICING.extraRoomCharges.bathroomAbove2;
  }
  if (halfBaths > 0) {
    basePrice += halfBaths * PRICING.extraRoomCharges.halfBathroom;
  }

  // Apply frequency multiplier
  const frequencyMultiplier = PRICING.frequencyMultipliers[data.frequency as keyof typeof PRICING.frequencyMultipliers] || 1;
  let price = basePrice * frequencyMultiplier;

  // Add-ons
  const addOnPrices = PRICING.addOns;

  let addOnTotal = 0;
  (data.addOns || []).forEach((addon) => {
    addOnTotal += addOnPrices[addon as keyof typeof addOnPrices] || 0;
  });

  price += addOnTotal;

  // Round to nearest $5
  price = Math.round(price / 5) * 5;

  // Apply promo
  let discountedPrice = price;
  let oldPrice = price;
  let finalPrice = price;

  if (appliedPromo === 'ANI25' || promoCode.toUpperCase() === 'ANI25') {
    discountedPrice = Math.round((price * (1 - PRICING.promo.discount)) / 5) * 5;
    oldPrice = price;
    finalPrice = discountedPrice;
  }

  // Calculate tax on final price
  const taxAmount = finalPrice * PRICING.salesTax;
  const totalWithTax = finalPrice + taxAmount;

  const handleApplyPromo = (code: string) => {
    if (code.toUpperCase() === 'ANI25') {
      setAppliedPromo('ANI25');
      setPromoCode('');
      setShowPromoField(false);
    } else {
      setAppliedPromo('');
    }
  };


  return (
    <div>
      <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-2">
        Here's your price
      </h2>
      <p className="text-brand-gray text-body mb-6">
        Per visit for your {data.cleaningType === 'moveInMoveOut' ? 'move' : data.frequency}
      </p>

      {/* Price Display */}
      <div className="card mb-6 bg-gradient-to-br from-brand-lilac-white to-white border-brand-purple border-2">
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-5xl font-fredoka font-bold text-brand-purple">
            ${finalPrice.toFixed(0)}
          </span>
          {appliedPromo && oldPrice !== finalPrice && (
            <span className="text-xl line-through text-brand-gray">${oldPrice.toFixed(0)}</span>
          )}
        </div>
        <p className="text-small text-brand-gray">
          Plus ${taxAmount.toFixed(2)} sales tax = ${totalWithTax.toFixed(2)} total
        </p>
        <p className="text-xs text-brand-gray mt-3">
          Final price confirmed if your home details match
        </p>
      </div>

      {/* Promo Code Section */}
      {!appliedPromo && (
        <div className="mb-6">
          {!showPromoField ? (
            <button
              type="button"
              onClick={() => setShowPromoField(true)}
              className="text-small text-brand-purple hover:underline font-semibold"
            >
              Have a promo code?
            </button>
          ) : (
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                className="form-field flex-1"
              />
              <button
                type="button"
                onClick={() => handleApplyPromo(promoCode)}
                className="btn-secondary px-4"
              >
                Apply
              </button>
            </div>
          )}
        </div>
      )}

      {appliedPromo === 'ANI25' && (
        <div className="bg-brand-pink bg-opacity-20 border border-brand-pink rounded-lg p-4 mb-6">
          <p className="text-small font-semibold text-brand-ink">
            ✓ ANI25 applied - 25% off your first clean!
          </p>
        </div>
      )}

      {/* Booking Details */}
      {data.preferredDate && data.preferredTime && (
        <div className="bg-brand-pink bg-opacity-10 border border-brand-pink rounded-lg p-4 mb-6">
          <p className="text-small font-semibold text-brand-ink mb-2">Your appointment:</p>
          <p className="text-small text-brand-ink">
            {new Date(data.preferredDate + 'T00:00:00').toLocaleDateString('en-US', {
              weekday: 'short',
              month: 'short',
              day: 'numeric',
            })}{' '}
            at {data.preferredTime}
          </p>
          <p className="text-xs text-brand-gray mt-2">
            Our cleaner will confirm 24 hours before your appointment
          </p>
        </div>
      )}

      {/* What's Included */}
      <details className="mb-6 cursor-pointer">
        <summary className="text-small font-semibold text-brand-purple hover:text-brand-ink transition-colors">
          See what's included
        </summary>
        <div className="mt-4 text-small text-brand-ink space-y-2">
          <p className="font-semibold">Your {data.cleaningType} includes:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Kitchen counters & appliances</li>
            <li>Bathrooms - toilets, tubs, mirrors</li>
            <li>Bedrooms - dusting, vacuuming</li>
            <li>Living areas - dusting, vacuuming</li>
            {data.addOns && data.addOns.length > 0 && (
              <>
                <li className="font-semibold mt-2">Plus your add-ons:</li>
                {data.addOns.map((addon) => (
                  <li key={addon}>
                    {addon === 'windows' && 'Inside windows'}
                    {addon === 'carpet' && 'Carpet cleaning'}
                    {addon === 'oven' && 'Oven cleaning'}
                    {addon === 'fridge' && 'Fridge cleaning'}
                  </li>
                ))}
              </>
            )}
          </ul>
        </div>
      </details>

      {/* Actions */}
      <div className="flex flex-col gap-3 mb-6">
        <button
          onClick={onBookNow}
          className="btn-primary w-full"
        >
          Book now
        </button>
        <button
          onClick={async () => {
            try {
              const response = await fetch('/api/send-quote', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  firstName: data.firstName,
                  email: data.email,
                  phone: data.phone,
                  zipCode: data.zipCode,
                  homeDetails: {
                    squareFootage: data.squareFootage,
                    bedrooms: data.bedrooms,
                    fullBathrooms: data.fullBathrooms,
                    halfBathrooms: data.halfBathrooms,
                    pets: data.pets,
                  },
                  cleaningType: data.cleaningType,
                  frequency: data.frequency,
                  addOns: data.addOns,
                  price: totalWithTax,
                }),
              });
              if (response.ok) {
                alert(`Thanks ${data.firstName}! We'll contact you at ${data.email} with more details.`);
                window.location.href = '/';
              }
            } catch (error) {
              alert('Error sending quote request. Please try again.');
            }
          }}
          className="btn-secondary w-full"
        >
          Send quote request
        </button>
        <button
          onClick={onChatOpen}
          className="text-small text-brand-purple hover:underline font-semibold text-center w-full"
        >
          Chat with us
        </button>
      </div>

      <button
        type="button"
        onClick={onBack}
        className="block mx-auto text-small text-brand-purple hover:underline"
      >
        Go back
      </button>
    </div>
  );
}
