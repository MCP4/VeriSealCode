export default function HeroButton({ children, variant = 'primary' }) {
  const isPrimary = variant === 'primary';
  return (
    <button
      style={{
        background: isPrimary ? 'var(--color-primary)' : 'transparent',
        color: '#fff',
        border: isPrimary ? 'none' : '2px solid rgba(255,255,255,0.35)',
        borderRadius: 'var(--radius-button)',
        padding: '14px 32px',
        fontWeight: 600,
        fontSize: 16,
        cursor: 'pointer',
        transition: 'transform 150ms ease, background 150ms ease, border-color 150ms ease',
        letterSpacing: '-0.01em',
        fontFamily: 'inherit',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = isPrimary ? 'var(--color-deep)' : 'rgba(255,255,255,0.1)';
        if (!isPrimary) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = isPrimary ? 'var(--color-primary)' : 'transparent';
        if (!isPrimary) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)';
      }}
      onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.97)')}
      onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      {children}
    </button>
  );
}
