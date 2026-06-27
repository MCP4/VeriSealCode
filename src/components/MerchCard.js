import { useState } from 'react';

export default function MerchCard({ name, price, blurb, image, tag, stripeKey }) {
  const [loading, setLoading] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleBuy = async () => {
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
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        borderRadius: 'var(--radius-card)',
        boxShadow: hovered ? 'var(--shadow-elevated)' : 'var(--shadow-card)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        border: `1.5px solid ${hovered ? 'var(--color-primary)' : 'transparent'}`,
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease',
        height: '100%',
      }}
    >
      {/* Image */}
      <div
        style={{
          position: 'relative',
          aspectRatio: '4/3',
          background: 'var(--color-bg-alt)',
          overflow: 'hidden',
        }}
      >
        <img
          src={image}
          alt={`${name} — Denny the seal merch`}
          loading="lazy"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
        {tag && (
          <span
            style={{
              position: 'absolute',
              top: 12,
              left: 12,
              background: 'var(--color-nfc)',
              color: 'var(--color-dark)',
              borderRadius: 100,
              padding: '4px 12px',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.04em',
            }}
          >
            {tag}
          </span>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12 }}>
          <h3 style={{ margin: 0, fontWeight: 700, fontSize: 18, color: 'var(--color-dark)' }}>{name}</h3>
          <span style={{ fontWeight: 800, fontSize: 20, color: 'var(--color-primary)', whiteSpace: 'nowrap' }}>{price}</span>
        </div>
        <p style={{ margin: 0, fontSize: 14, color: 'var(--color-text)', lineHeight: 1.6, flex: 1 }}>{blurb}</p>
        <button
          onClick={handleBuy}
          disabled={loading}
          style={{
            marginTop: 4,
            background: 'var(--color-primary)',
            color: '#fff',
            border: 'none',
            borderRadius: 'var(--radius-button)',
            padding: '12px',
            fontWeight: 600,
            fontSize: 15,
            cursor: loading ? 'wait' : 'pointer',
            transition: 'transform 150ms ease, background 150ms ease',
            opacity: loading ? 0.7 : 1,
            fontFamily: 'inherit',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--color-deep)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--color-primary)')}
          onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.97)')}
          onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          {loading ? 'Loading…' : 'Add to bag'}
        </button>
      </div>
    </div>
  );
}
