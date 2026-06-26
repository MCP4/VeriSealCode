'use client';

import { useState } from 'react';

export default function EmailCapture() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '32px 0' }}>
        <div style={{ fontSize: 40, marginBottom: 16 }}>🦭</div>
        <h3 style={{ fontWeight: 700, fontSize: 22, color: 'var(--color-dark)', margin: '0 0 8px' }}>
          You&apos;re on the list.
        </h3>
        <p style={{ color: 'var(--color-text)', margin: 0 }}>
          We&apos;ll reach out with launch updates and early backer perks.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          style={{
            flex: '1 1 280px',
            padding: '14px 16px',
            borderRadius: 'var(--radius-input)',
            border: '1.5px solid var(--color-border)',
            background: '#fff',
            fontSize: 15,
            color: 'var(--color-dark)',
            outline: 'none',
            fontFamily: 'inherit',
            transition: 'border-color 150ms ease',
          }}
          onFocus={(e) => (e.target.style.borderColor = 'var(--color-primary)')}
          onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            background: 'var(--color-primary)',
            color: '#fff',
            border: 'none',
            borderRadius: 'var(--radius-button)',
            padding: '14px 28px',
            fontWeight: 600,
            fontSize: 15,
            cursor: loading ? 'wait' : 'pointer',
            transition: 'transform 150ms ease, background 150ms ease',
            opacity: loading ? 0.7 : 1,
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--color-deep)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--color-primary)')}
          onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.97)')}
          onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          {loading ? 'Joining…' : 'Join the List'}
        </button>
      </div>

      {error && (
        <p style={{ color: 'var(--color-alert)', fontSize: 13, margin: '12px 0 0' }}>{error}</p>
      )}
    </form>
  );
}
