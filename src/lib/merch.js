// Denny the seal merch catalog. `stripeKey` maps to CHECKOUT_ITEMS in server.js.
// `image` points at an existing asset in /public/images.
export const MERCH = [
  {
    stripeKey: 'denny-sticker-pack',
    name: 'Denny Sticker Pack',
    price: '$8',
    blurb: 'Twelve die-cut vinyl Dennys — every mood, from "access granted" to "tamper detected."',
    image: '/images/seal-2.png',
    tag: 'Fan favorite',
  },
  {
    stripeKey: 'denny-plush',
    name: 'Denny Plush',
    price: '$24',
    blurb: 'A huggable, airtight-soft Denny in his signature teal jacket. Guards your desk, not your valuables.',
    image: '/images/seal-1.png',
    tag: 'Bestseller',
  },
  {
    stripeKey: 'denny-tee',
    name: 'Denny Tee',
    price: '$28',
    blurb: 'Soft cotton tee with Denny tapping an NFC pod. Secure by nature, comfy by design.',
    image: '/images/seal-2.png',
    tag: null,
  },
  {
    stripeKey: 'denny-hoodie',
    name: 'Denny Hoodie',
    price: '$48',
    blurb: 'Heavyweight fleece hoodie in deep-sea green. Denny embroidered over the heart.',
    image: '/images/seal-1.png',
    tag: null,
  },
  {
    stripeKey: 'denny-mug',
    name: 'Denny Enamel Mug',
    price: '$16',
    blurb: 'Camp-style enamel mug. Denny keeps your coffee — and your secrets — sealed.',
    image: '/images/seal-2.png',
    tag: null,
  },
  {
    stripeKey: 'denny-tote',
    name: 'Denny Canvas Tote',
    price: '$18',
    blurb: 'Sturdy canvas tote with the full Denny lineup. Carry the whole pod, all ten use cases.',
    image: '/images/family-photo.png',
    tag: null,
  },
];
