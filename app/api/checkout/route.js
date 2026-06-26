import Stripe from 'stripe';

const TIER_PRICES = {
  early: {
    name: 'VeriSeal Early Backer — 1 Pod',
    amount: 4900,
  },
  pilot: {
    name: 'VeriSeal Pilot Partner — 5 Pods',
    amount: 29900,
  },
  business: {
    name: 'VeriSeal Business — 20 Pods',
    amount: 99900,
  },
};

export async function POST(request) {
  try {
    const { tier } = await request.json();

    const tierConfig = TIER_PRICES[tier];
    if (!tierConfig) {
      return Response.json({ error: 'Invalid tier' }, { status: 400 });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2023-10-16',
    });

    const origin = request.headers.get('origin') || 'http://localhost:3000';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: { name: tierConfig.name },
            unit_amount: tierConfig.amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${origin}/pricing?success=true`,
      cancel_url: `${origin}/pricing?canceled=true`,
    });

    return Response.json({ url: session.url });
  } catch (err) {
    console.error('Stripe checkout error:', err);
    return Response.json({ error: 'Checkout failed' }, { status: 500 });
  }
}
