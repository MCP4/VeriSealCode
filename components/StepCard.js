export default function StepCard({ number, title, description, variant = 'light' }) {
  const isDark = variant === 'dark';

  return (
    <div
      style={{
        display: 'flex',
        gap: 16,
        padding: '20px 0',
        borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'var(--color-border)'}`,
      }}
    >
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: 'var(--radius-icon)',
          background: isDark ? 'rgba(45, 191, 110, 0.15)' : 'var(--color-bg-alt)',
          border: `1.5px solid ${isDark ? 'var(--color-primary)' : 'var(--color-border)'}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          fontFamily: 'var(--font-mono, JetBrains Mono, monospace)',
          fontSize: 13,
          fontWeight: 700,
          color: 'var(--color-primary)',
        }}
      >
        {String(number).padStart(2, '0')}
      </div>
      <div>
        <div
          style={{
            fontWeight: 600,
            fontSize: 15,
            color: isDark ? '#fff' : 'var(--color-dark)',
            marginBottom: 4,
            lineHeight: 1.3,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 14,
            color: isDark ? 'rgba(255,255,255,0.72)' : 'var(--color-text)',
            lineHeight: 1.6,
          }}
        >
          {description}
        </div>
      </div>
    </div>
  );
}
