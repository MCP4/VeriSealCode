import { useState } from 'react';

// Shared Stripe-checkout button used by the Believer banner and Complete Set
// feature card. `variant` controls the look against light vs. dark backgrounds.
export default function CheckoutButton({ stripeKey, children, variant = 'primary' }) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tier: stripeKey }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch (err) {
      console.error('Checkout error:', err);
    } finally {
      setLoading(false);
    }
  };

  const isOutline = variant === 'outline';

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      style={{
        background: isOutline ? 'transparent' : 'var(--color-primary)',
        color: '#fff',
        border: isOutline ? '2px solid rgba(255,255,255,0.4)' : 'none',
        borderRadius: 'var(--radius-button)',
        padding: '14px 32px',
        fontWeight: 600,
        fontSize: 16,
        cursor: loading ? 'wait' : 'pointer',
        transition: 'transform 150ms ease, background 150ms ease, border-color 150ms ease',
        opacity: loading ? 0.7 : 1,
        whiteSpace: 'nowrap',
        fontFamily: 'inherit',
      }}
      onMouseEnter={(e) => {
        if (isOutline) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)';
        else e.currentTarget.style.background = 'var(--color-deep)';
      }}
      onMouseLeave={(e) => {
        if (isOutline) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
        else e.currentTarget.style.background = 'var(--color-primary)';
      }}
      onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.97)')}
      onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      {loading ? 'Loading…' : children}
    </button>
  );
}
