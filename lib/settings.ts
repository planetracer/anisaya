export const BUSINESS_INFO = {
  name: 'Anisaya Cleaning',
  phone: '(972) 555-0123',
  email: 'info@anisaya.com',
  hours: 'Mon-Sat 8am-6pm CST',
  serviceArea: ['Allen', 'Plano', 'McKinney', 'Frisco'],
  ownerName: 'Aisha',
  ownerStory: 'I started Anisaya Cleaning because I wanted to provide the kind of reliable, trustworthy cleaning service I wished existed when I first moved to Texas. After 8 years in the industry, I built this company around three values: background-checked cleaners you can trust, transparent pricing with no surprises, and a 24-hour re-clean guarantee because your satisfaction matters.',
  yearsExperience: 8,
};

export const PRICING = {
  salesTax: 0.0825,
  promo: {
    code: 'ANI25',
    discount: 0.25,
    appliesTo: 'first_clean_only',
  },
  baseRates: {
    // Base price by square footage range
    standard: {
      under1000: 120,
      '1000-2000': 160,
      '2000-3000': 210,
      '3000+': 280,
    },
    deep: {
      under1000: 190,
      '1000-2000': 280,
      '2000-3000': 370,
      '3000+': 480,
    },
    moveInMoveOut: {
      under1000: 230,
      '1000-2000': 350,
      '2000-3000': 480,
      '3000+': 620,
    },
  },
  // Extra charges per room beyond standard
  extraRoomCharges: {
    bedroomAbove3: 40,
    bathroomAbove2: 35,
    halfBathroom: 15,
  },
  frequencyMultipliers: {
    oneTime: 1.1,
    monthly: 1.0,
    biweekly: 0.97,
    weekly: 0.92,
  },
  addOns: {
    windows: 30,
    carpet: 50,
    oven: 25,
    fridge: 20,
  },
};

export const SERVICES = {
  standard: {
    name: 'Standard Cleaning',
    description: 'Regular maintenance cleaning',
    startingPrice: 120,
    best: 'Recurring clients',
    frequency: ['weekly', 'biweekly', 'monthly', 'oneTime'],
  },
  deep: {
    name: 'Deep Cleaning',
    description: 'Thorough cleaning for first-time clients',
    startingPrice: 190,
    best: 'First cleans and one-time jobs',
  },
  moveInMoveOut: {
    name: 'Move-in / Move-out',
    description: 'Complete cleaning for moving day',
    startingPrice: 230,
    best: 'Renters, owners, realtors',
  },
};
