// Pod sizes — informational reference. Every pod ships with the full NFC +
// biometric access stack and live telemetry; mounts are sold per configuration.
export const POD_SIZES = [
  {
    name: 'Small Pod',
    price: '$199',
    desc: 'Compact and portable. Built for travel, gym lockers, glove boxes, and carry-on valuables.',
  },
  {
    name: 'Medium Pod',
    price: '$279',
    desc: 'The everyday all-rounder. Included free as a bonus in the Complete Set.',
  },
  {
    name: 'Large Pod',
    price: '$329',
    desc: 'Maximum capacity. Built for porch deliveries, trunks, and shared-space storage.',
  },
];

// The $1 entry pledge — a full-width banner above the tier grid.
export const BELIEVER = {
  tier: 'The Believer',
  price: '$1',
  stripeKey: 'believer',
  blurb:
    'Not ready to commit to a pod yet? Lock in your spot for $1. Join the founding backer list, get first access to production updates, and reserve a guaranteed discounted price on every future VeriSeal release. One dollar now, real savings later — and your name on the wall of people who backed the idea early.',
};

// Backable pledge tiers. Each is a single Stripe SKU.
export const PLEDGE_TIERS = [
  {
    tier: 'Super Early Bird · Small',
    price: '$159',
    save: 'Save 36%',
    badge: 'Limited',
    highlighted: false,
    stripeKey: 'seb-small',
    features: ['Small Pod', '1 mounting kit', 'Full NFC + biometric access', 'Live telemetry layer'],
  },
  {
    tier: 'Super Early Bird · Large',
    price: '$229',
    save: 'Save 39%',
    badge: 'Limited',
    highlighted: true,
    stripeKey: 'seb-large',
    features: ['Large Pod', '1 mounting kit', 'Full NFC + biometric access', 'Live telemetry layer'],
  },
  {
    tier: 'Early Bird · Small',
    price: '$179',
    save: 'Save 28%',
    badge: 'Limited',
    highlighted: false,
    stripeKey: 'eb-small',
    features: ['Small Pod', '1 mounting kit', 'Full NFC + biometric access', 'Live telemetry layer'],
  },
  {
    tier: 'Early Bird · Large',
    price: '$259',
    save: 'Save 31%',
    badge: 'Limited',
    highlighted: false,
    stripeKey: 'eb-large',
    features: ['Large Pod', '1 mounting kit', 'Full NFC + biometric access', 'Live telemetry layer'],
  },
  {
    tier: 'Campaign Standard · Small',
    price: '$199',
    save: 'Save 20%',
    badge: null,
    highlighted: false,
    stripeKey: 'std-small',
    features: ['Small Pod', '1 mounting kit', 'Full NFC + biometric access', 'Live telemetry layer'],
  },
  {
    tier: 'Campaign Standard · Large',
    price: '$299',
    save: 'Save 21%',
    badge: null,
    highlighted: false,
    stripeKey: 'std-large',
    features: ['Large Pod', '1 mounting kit', 'Full NFC + biometric access', 'Live telemetry layer'],
  },
  {
    tier: 'Multi-Mount Bundle · Small',
    price: '$239',
    save: 'Save 31%',
    badge: null,
    highlighted: false,
    stripeKey: 'multi-small',
    features: ['Small Pod', 'Porch, vehicle + travel mounts', 'One pod that follows you everywhere', 'Live telemetry layer'],
  },
  {
    tier: 'Multi-Mount Bundle · Large',
    price: '$329',
    save: 'Save 31%',
    badge: null,
    highlighted: false,
    stripeKey: 'multi-large',
    features: ['Large Pod', 'Porch, vehicle + travel mounts', 'One pod that follows you everywhere', 'Live telemetry layer'],
  },
  {
    tier: 'Household Pack',
    price: '$449',
    save: 'Save 31%',
    badge: 'Best value',
    highlighted: false,
    stripeKey: 'household',
    features: ['Any two pods — mix sizes', 'Four assorted mounts', 'Covers the whole home', 'Full access + telemetry on every pod'],
  },
];

// The flagship perk — rendered as a highlighted feature card below the grid.
export const COMPLETE_SET = {
  tier: 'The Complete Set — Founding Backer',
  price: '$599',
  save: 'Save over 40%',
  badge: 'Flagship',
  stripeKey: 'complete',
  features: [
    'Small Pod + Large Pod',
    'Medium Pod included FREE — a $279 value',
    'Full mounting set: porch, vehicle, travel, and marine',
    'Private channel to influence our software roadmap and ship-list',
  ],
};
