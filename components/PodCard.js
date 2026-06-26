import NFCPulse from './NFCPulse';

function SealSilhouette({ size = 80, color = 'var(--color-primary)' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="44" rx="20" ry="26" fill={color} opacity="0.8" />
      <ellipse cx="40" cy="38" rx="14" ry="16" fill={color} />
      <circle cx="34" cy="34" r="2.5" fill="var(--color-dark)" />
      <circle cx="46" cy="34" r="2.5" fill="var(--color-dark)" />
      <path d="M35 42c1.5 2.5 8.5 2.5 10 0" stroke="var(--color-dark)" strokeWidth="2" strokeLinecap="round" />
      <path d="M22 56c-6 2-10 0-11-4" stroke={color} strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
      <path d="M58 56c6 2 10 0 11-4" stroke={color} strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

export default function PodCard({ name, description, useCases = [], imagePlaceholder = true }) {
  return (
    <div
      style={{
        background: 'var(--color-bg)',
        borderRadius: 'var(--radius-card)',
        boxShadow: 'var(--shadow-card)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Image area */}
      <div
        style={{
          background: 'var(--color-dark)',
          height: 200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 120, height: 120 }}>
          <div style={{ position: 'absolute' }}>
            <NFCPulse color="var(--color-nfc)" size={120} />
          </div>
          <SealSilhouette size={80} />
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '24px' }}>
        <h3 style={{ margin: 0, fontWeight: 700, fontSize: 18, color: 'var(--color-dark)', marginBottom: 8 }}>
          {name}
        </h3>
        <p style={{ margin: 0, fontSize: 14, color: 'var(--color-text)', lineHeight: 1.6, marginBottom: 16 }}>
          {description}
        </p>
        {useCases.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {useCases.map((uc) => (
              <span
                key={uc}
                style={{
                  background: 'var(--color-bg-alt)',
                  color: 'var(--color-deep)',
                  borderRadius: 100,
                  padding: '3px 10px',
                  fontSize: 12,
                  fontWeight: 500,
                }}
              >
                {uc}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
