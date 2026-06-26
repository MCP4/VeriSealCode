'use client';

import Link from 'next/link';
import { USE_CASES } from '../lib/useCases';

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.21 8.21 0 004.84 1.56V6.8a4.85 4.85 0 01-1.07-.11z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="4" />
      <path d="M7 10v7" />
      <path d="M11 10v7" />
      <path d="M11 14a3 3 0 016 0v3" />
      <circle cx="7" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const leftUseCases = USE_CASES.slice(0, 5);
const rightUseCases = USE_CASES.slice(5);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: 'var(--color-dark)', color: '#fff' }}>
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '64px 32px 40px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          gap: 48,
        }}
        className="footer-grid"
      >
        {/* Col 1 — Brand */}
        <div>
          <div style={{ fontWeight: 700, fontSize: 20, color: '#fff', letterSpacing: '-0.02em', marginBottom: 8 }}>
            VeriSeal
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono, JetBrains Mono, monospace)',
              fontSize: 11,
              color: 'var(--color-nfc)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}
          >
            Secure by Nature
          </div>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, margin: 0 }}>
            A modular NFC and biometric-secured pod engineered as a hardware-software platform, not a single-purpose safe.
          </p>
        </div>

        {/* Col 2 — Use Cases left */}
        <div>
          <div style={{ fontWeight: 600, fontSize: 13, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 20 }}>
            Use Cases
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {leftUseCases.map((uc) => (
                <Link
                  key={uc.id}
                  href={`/use-cases/${uc.id}`}
                  style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.6)', fontSize: 14, transition: 'color 150ms ease' }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--color-primary)')}
                  onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.6)')}
                >
                  {uc.label}
                </Link>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {rightUseCases.map((uc) => (
                <Link
                  key={uc.id}
                  href={`/use-cases/${uc.id}`}
                  style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.6)', fontSize: 14, transition: 'color 150ms ease' }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--color-primary)')}
                  onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.6)')}
                >
                  {uc.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Col 3 — Social */}
        <div>
          <div style={{ fontWeight: 600, fontSize: 13, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 20 }}>
            Follow the Campaign
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <a
              href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#'}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: 'rgba(255,255,255,0.6)', fontSize: 14, transition: 'color 150ms ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
            >
              <InstagramIcon /> Instagram
            </a>
            <a
              href={process.env.NEXT_PUBLIC_TIKTOK_URL || '#'}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: 'rgba(255,255,255,0.6)', fontSize: 14, transition: 'color 150ms ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
            >
              <TikTokIcon /> TikTok
            </a>
            <a
              href={process.env.NEXT_PUBLIC_LINKEDIN_URL || '#'}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: 'rgba(255,255,255,0.6)', fontSize: 14, transition: 'color 150ms ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
            >
              <LinkedInIcon /> LinkedIn
            </a>
          </div>
        </div>

        {/* Col 4 — Legal */}
        <div>
          <div style={{ fontWeight: 600, fontSize: 13, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 20 }}>
            Legal
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Link href="/privacy" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>
              Privacy Policy
            </Link>
            <Link href="/terms" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '20px 32px',
          borderTop: '1px solid var(--color-deep)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono, JetBrains Mono, monospace)',
            fontSize: 12,
            color: 'var(--color-text)',
          }}
        >
          © {year} VeriSeal. All rights reserved.
        </span>
        <span
          style={{
            fontFamily: 'var(--font-mono, JetBrains Mono, monospace)',
            fontSize: 12,
            color: 'var(--color-nfc)',
            opacity: 0.7,
          }}
        >
          NFC-AUTH :: SECURE-BY-NATURE
        </span>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
