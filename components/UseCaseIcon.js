export default function UseCaseIcon({ icon, size = 22, color = '#fff' }) {
  const s = size;
  const props = { width: s, height: s, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };

  switch (icon) {
    case 'pod-sealed':
      return (
        <svg {...props}>
          <rect x="3" y="7" width="18" height="12" rx="3" />
          <path d="M3 11h18" />
          <circle cx="12" cy="15" r="1.5" fill={color} stroke="none" />
        </svg>
      );
    case 'shield-check':
      return (
        <svg {...props}>
          <path d="M12 2l8 3.5v5.5c0 4.5-3.5 8.5-8 10-4.5-1.5-8-5.5-8-10V5.5L12 2z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case 'verified':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case 'lock':
      return (
        <svg {...props}>
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <path d="M8 11V7a4 4 0 018 0v4" />
          <circle cx="12" cy="16" r="1.5" fill={color} stroke="none" />
        </svg>
      );
    case 'location':
      return (
        <svg {...props}>
          <path d="M12 2C8.7 2 6 4.7 6 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.3-2.7-6-6-6z" />
          <circle cx="12" cy="8" r="2" />
        </svg>
      );
    case 'pod-open':
      return (
        <svg {...props}>
          <rect x="3" y="10" width="18" height="10" rx="3" />
          <path d="M3 14h18" />
          <path d="M7 10V7a5 5 0 0110 0v3" />
        </svg>
      );
    case 'chain-of-custody':
      return (
        <svg {...props}>
          <path d="M5 9a3 3 0 100 6 3 3 0 000-6z" />
          <path d="M19 9a3 3 0 100 6 3 3 0 000-6z" />
          <path d="M8 12h8" />
        </svg>
      );
    case 'nfc':
      return (
        <svg {...props}>
          <path d="M6.3 6.3A8.5 8.5 0 0112 4a8.5 8.5 0 016 2.5" />
          <path d="M4 9.5A10.5 10.5 0 0112 7a10.5 10.5 0 018 3.3" />
          <circle cx="12" cy="16" r="2" fill={color} stroke="none" />
          <path d="M12 14v-3" />
        </svg>
      );
    case 'biometric':
      return (
        <svg {...props}>
          <path d="M7 3H5a2 2 0 00-2 2v2" />
          <path d="M17 3h2a2 2 0 012 2v2" />
          <path d="M7 21H5a2 2 0 01-2-2v-2" />
          <path d="M17 21h2a2 2 0 002-2v-2" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 9V7" />
        </svg>
      );
    case 'mascot':
    default:
      return (
        <svg {...props}>
          <ellipse cx="12" cy="12" rx="7" ry="9" />
          <path d="M9 9.5c0-1.5 1.3-2.5 3-2.5s3 1 3 2.5" />
          <circle cx="10" cy="11" r="0.8" fill={color} stroke="none" />
          <circle cx="14" cy="11" r="0.8" fill={color} stroke="none" />
          <path d="M10 14.5c.5.8 3.5.8 4 0" />
        </svg>
      );
  }
}
