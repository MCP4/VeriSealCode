import { useState } from 'react';

export default function PricingCard({ tier, price, save = null, features, highlighted = false, badge = null, stripeKey, cta = 'Reserve Yours' }) {
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

  return (
    <div
      style={{
        background: 'var(--color-deep)',
        border: highlighted ? '2px solid var(--color-primary)' : '1.5px solid rgba(255,255,255,0.08)',
        borderRadius: 'var(--radius-card)',
        padding: '36px 32px',
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        position: 'relative',
        boxShadow: highlighted ? 'var(--shadow-floating)' : 'none',
        transform: highlighted ? 'translateY(-8px)' : 'none',
      }}
    >
      {badge && (
        <div
          style={{
            position: 'absolute',
            top: -14,
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'var(--color-nfc)',
            color: 'var(--color-dark)',
            borderRadius: 100,
            padding: '4px 16px',
            fontSize: 12,
            fontWeight: 700,
            whiteSpace: 'nowrap',
            letterSpacing: '0.04em',
          }}
        >
          {badge}
        </div>
      )}

      <div>
        <div style={{ fontSize: 12, fontWeight: 700, color: highlighted ? 'var(--color-nfc)' : 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12, fontFamily: 'var(--font-mono, JetBrains Mono, monospace)' }}>
          {tier}
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
          <div style={{ fontSize: 48, fontWeight: 800, color: 'var(--color-primary)', lineHeight: 1, letterSpacing: '-0.02em' }}>
            {price}
          </div>
          {save && (
            <span
              style={{
                background: 'rgba(45, 191, 110, 0.18)',
                color: 'var(--color-primary)',
                borderRadius: 100,
                padding: '4px 12px',
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
                fontFamily: 'var(--font-mono, JetBrains Mono, monospace)',
              }}
            >
              {save}
            </span>
          )}
        </div>
      </div>

      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {features.map((f, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.9)', lineHeight: 1.5 }}>
            <span style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: 2 }}>✓</span>
            {f}
          </li>
        ))}
      </ul>

      <button
        onClick={handleCheckout}
        disabled={loading}
        style={{
          marginTop: 'auto',
          background: highlighted ? 'var(--color-primary)' : 'transparent',
          color: highlighted ? '#fff' : 'var(--color-primary)',
          border: `2px solid var(--color-primary)`,
          borderRadius: 'var(--radius-button)',
          padding: '14px',
          fontWeight: 600,
          fontSize: 15,
          cursor: loading ? 'wait' : 'pointer',
          transition: 'transform 150ms ease, background 150ms ease, color 150ms ease',
          opacity: loading ? 0.7 : 1,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'var(--color-primary)';
          e.currentTarget.style.color = '#fff';
        }}
        onMouseLeave={(e) => {
          if (!highlighted) {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--color-primary)';
          }
        }}
        onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.97)')}
        onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        {loading ? 'Loading…' : cta}
      </button>
    </div>
  );
}
