// VeriSeal production server.
// Serves the Create React App build and hosts the Stripe checkout + email
// subscribe endpoints. This is the single process Railway runs (`node server.js`).

const path = require('path');
const express = require('express');
const Stripe = require('stripe');

const app = express();
const PORT = process.env.PORT || 3001;
const BUILD_DIR = path.join(__dirname, 'build');

app.use(express.json());

// ─── Pricing catalog ────────────────────────────────────────────────────────
// Crowdfunding pledge tiers + Denny the seal merch. Amounts are in cents (USD).
const CHECKOUT_ITEMS = {
  // Crowdfunding pledge tiers
  believer:     { name: 'VeriSeal — The Believer',                                amount: 100 },
  'seb-small':  { name: 'VeriSeal Super Early Bird — Small Pod + 1 Mount',        amount: 15900 },
  'seb-large':  { name: 'VeriSeal Super Early Bird — Large Pod + 1 Mount',        amount: 22900 },
  'eb-small':   { name: 'VeriSeal Early Bird — Small Pod + 1 Mount',              amount: 17900 },
  'eb-large':   { name: 'VeriSeal Early Bird — Large Pod + 1 Mount',              amount: 25900 },
  'std-small':  { name: 'VeriSeal — Small Pod + 1 Mount',                         amount: 19900 },
  'std-large':  { name: 'VeriSeal — Large Pod + 1 Mount',                         amount: 29900 },
  'multi-small':{ name: 'VeriSeal Multi-Mount Bundle — Small Pod + 3 Mounts',     amount: 23900 },
  'multi-large':{ name: 'VeriSeal Multi-Mount Bundle — Large Pod + 3 Mounts',     amount: 32900 },
  household:    { name: 'VeriSeal Household Pack — 2 Pods + 4 Mounts',            amount: 44900 },
  complete:     { name: 'VeriSeal Complete Set — Founding Backer',                amount: 59900 },
  // Denny the seal merch
  'denny-sticker-pack': { name: 'Denny the Seal — Sticker Pack',     amount: 800 },
  'denny-plush':        { name: 'Denny the Seal — Plush Toy',        amount: 2400 },
  'denny-tee':          { name: 'Denny the Seal — T-Shirt',          amount: 2800 },
  'denny-mug':          { name: 'Denny the Seal — Enamel Mug',       amount: 1600 },
  'denny-hoodie':       { name: 'Denny the Seal — Hoodie',           amount: 4800 },
  'denny-tote':         { name: 'Denny the Seal — Canvas Tote',      amount: 1800 },
};

// ─── Stripe checkout ─────────────────────────────────────────────────────────
app.post('/api/checkout', async (req, res) => {
  try {
    const { tier } = req.body || {};
    const item = CHECKOUT_ITEMS[tier];
    if (!item) {
      return res.status(400).json({ error: 'Invalid item' });
    }

    if (!process.env.STRIPE_SECRET_KEY) {
      console.error('Checkout requested but STRIPE_SECRET_KEY is not set.');
      return res.status(500).json({ error: 'Payments are not configured yet.' });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2023-10-16',
    });

    const origin =
      req.headers.origin ||
      `${req.protocol}://${req.get('host')}` ||
      'http://localhost:3000';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: { name: item.name },
            unit_amount: item.amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${origin}/pricing?success=true`,
      cancel_url: `${origin}/pricing?canceled=true`,
    });

    return res.json({ url: session.url });
  } catch (err) {
    console.error('Stripe checkout error:', err);
    return res.status(500).json({ error: 'Checkout failed' });
  }
});

// ─── Email subscribe ─────────────────────────────────────────────────────────
app.post('/api/subscribe', (req, res) => {
  try {
    const { email, useCases = [] } = req.body || {};
    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Valid email required' });
    }

    // TODO: Integrate with an email platform (Klaviyo, Mailchimp, etc.).
    // The useCases array carries selected use-case IDs for segmentation.
    console.log('[subscribe]', { email, useCases });

    return res.json({ success: true });
  } catch (err) {
    console.error('Subscribe error:', err);
    return res.status(500).json({ error: 'Subscription failed' });
  }
});

// ─── Static build + SPA fallback ─────────────────────────────────────────────
app.use(express.static(BUILD_DIR));

app.get('*', (req, res) => {
  res.sendFile(path.join(BUILD_DIR, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`VeriSeal server listening on port ${PORT}`);
});
