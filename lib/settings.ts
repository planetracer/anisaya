export const BUSINESS_INFO = {
  name: 'Anisaya Cleaning',
  phone: '[INSERT PHONE]',
  email: '[INSERT EMAIL]',
  hours: '[INSERT HOURS]',
  serviceArea: ['Allen', 'Plano', 'McKinney', 'Frisco'],
};

export const PRICING = {
  salesTax: 0.0825,
  promo: {
    code: 'ANI25',
    discount: 0.25,
    appliesTo: 'first_clean_only',
  },
  baseRates: {
    // Per square foot for base clean
    standard: {
      under1000: 120,
      '1000-2000': 150,
      '2000-3000': 180,
      '3000+': 210,
    },
    deep: {
      under1000: 190,
      '1000-2000': 240,
      '2000-3000': 290,
      '3000+': 340,
    },
    moveInMoveOut: {
      under1000: 230,
      '1000-2000': 310,
      '2000-3000': 390,
      '3000+': 470,
    },
  },
  frequencyMultipliers: {
    oneTime: 1.0,
    monthly: 1.0,
    biweekly: 0.95,
    weekly: 0.9,
  },
  addOns: {
    insideWindows: 30,
    carpetCleaning: 50,
    ovenCleaning: 25,
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
