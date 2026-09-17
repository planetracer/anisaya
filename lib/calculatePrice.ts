import { PRICING } from './settings';

export function calculateQuotePrice(quoteData: {
  squareFootage?: string;
  bedrooms?: string;
  fullBathrooms?: string;
  halfBathrooms?: string;
  cleaningType?: 'standard' | 'deep' | 'moveInMoveOut';
  frequency?: string;
  addOns?: string[];
}): number {
  const pricingKey = quoteData.squareFootage as keyof typeof PRICING.baseRates.standard;
  const cleaningTypeKey = quoteData.cleaningType as 'standard' | 'deep' | 'moveInMoveOut' || 'standard';

  let basePrice = PRICING.baseRates[cleaningTypeKey][pricingKey] || 150;

  // Add extra room charges
  const bedrooms = parseInt(quoteData.bedrooms || '0') || 0;
  const fullBaths = parseInt(quoteData.fullBathrooms || '0') || 0;
  const halfBaths = parseInt(quoteData.halfBathrooms || '0') || 0;

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
  const frequencyMultiplier = PRICING.frequencyMultipliers[quoteData.frequency as keyof typeof PRICING.frequencyMultipliers] || 1;
  let price = basePrice * frequencyMultiplier;

  // Add-ons
  const addOnPrices = PRICING.addOns;
  let addOnTotal = 0;
  (quoteData.addOns || []).forEach((addon) => {
    addOnTotal += addOnPrices[addon as keyof typeof addOnPrices] || 0;
  });

  price += addOnTotal;

  // Round to nearest $5
  price = Math.round(price / 5) * 5;

  return price;
}
