const STATUS_CONFIG = {
  transit: {
    label: 'In Transit',
    bg: 'rgba(246, 173, 85, 0.15)',
    color: '#F6AD55',
    dot: '#F6AD55',
  },
  delivered: {
    label: 'Delivered',
    bg: 'rgba(56, 161, 105, 0.15)',
    color: '#38A169',
    dot: '#38A169',
  },
  alert: {
    label: 'Alert',
    bg: 'rgba(229, 62, 62, 0.15)',
    color: '#E53E3E',
    dot: '#E53E3E',
  },
};

export default function StatusBadge({ status = 'delivered' }) {
  const cfg = STATUS_CONFIG[status] || STATUS_CONFIG.delivered;

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        background: cfg.bg,
        color: cfg.color,
        borderRadius: 100,
        padding: '4px 12px',
        fontFamily: 'var(--font-mono, JetBrains Mono, monospace)',
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
      }}
    >
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: cfg.dot,
          display: 'inline-block',
          flexShrink: 0,
        }}
      />
      {cfg.label}
    </span>
  );
}
