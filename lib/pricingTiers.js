export const PRICING_TIERS = [
  {
    tier: 'Early Backer',
    price: '$49',
    priceNum: 4900,
    stripeKey: 'early',
    highlighted: false,
    badge: null,
    features: [
      '1 VeriSeal pod unit',
      'Early access before public launch',
      'Name in campaign credits',
      'Digital setup guide',
    ],
  },
  {
    tier: 'Pilot Partner',
    price: '$299',
    priceNum: 29900,
    stripeKey: 'pilot',
    highlighted: true,
    badge: 'Most Popular',
    features: [
      '5 VeriSeal pod units',
      'Onboarding support call',
      'Monthly product check-ins',
      'Input on next mounting kit',
    ],
  },
  {
    tier: 'Business',
    price: '$999',
    priceNum: 99900,
    stripeKey: 'business',
    highlighted: false,
    badge: null,
    features: [
      '20 VeriSeal pod units',
      'Dedicated integration support',
      'Co-marketing opportunity',
      'Priority access to B2B API',
    ],
  },
];
