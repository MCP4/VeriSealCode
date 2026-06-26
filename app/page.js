import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import EmailCapture from '../components/EmailCapture';
import HeroButton from '../components/HeroButton';
import Image from 'next/image';
import Link from 'next/link';

// ─── SVG helpers ─────────────────────────────────────────────────────────────

function GrainTexture() {
  return (
    <svg
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.03, pointerEvents: 'none' }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain)" />
    </svg>
  );
}

function CapabilityIcon({ type }) {
  const s = { width: 26, height: 26, viewBox: '0 0 24 24', fill: 'none', stroke: '#fff', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };
  if (type === 'nfc') return (
    <svg {...s}>
      <path d="M6 6A8.5 8.5 0 0112 4a8.5 8.5 0 016 2.5" />
      <path d="M4 9.5A10.5 10.5 0 0112 7a10.5 10.5 0 018 3.3" />
      <circle cx="12" cy="16" r="2" fill="#fff" stroke="none" />
      <path d="M12 14v-3" />
    </svg>
  );
  if (type === 'telemetry') return (
    <svg {...s}>
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
  return (
    <svg {...s}>
      <rect x="2" y="7" width="20" height="14" rx="3" />
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      <circle cx="12" cy="14" r="2" fill="#fff" stroke="none" />
    </svg>
  );
}

const CAPABILITIES = [
  {
    type: 'nfc',
    title: 'NFC + Biometric Access',
    body: 'One-tap unlock for owners. Revocable one-time tokens for couriers, family, or guests. No keys. No codes. No risk.',
  },
  {
    type: 'telemetry',
    title: 'Tamper Telemetry',
    body: 'Geo-location, motion, force, and lid-state events streamed live to your phone. You always know what happened and when.',
  },
  {
    type: 'modular',
    title: 'Modular Form Factor',
    body: 'Mounting kits for walls, vehicle interiors, marine environments, and luggage. One pod, every context.',
  },
];

const TRUST_ITEMS = ['NFC Verified', 'GPS Tracked', 'Biometric Unlocked', '10 Use Cases'];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <NavBar />

      {/* ── 1. Hero ── */}
      <section
        style={{
          minHeight: '100vh',
          background: 'var(--color-dark)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{
            position: 'absolute', bottom: '-10%', left: '-5%',
            width: '55%', paddingBottom: '55%', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(26,122,69,0.15) 0%, transparent 70%)',
          }} />
          <div style={{
            position: 'absolute', top: '-5%', right: '5%',
            width: '35%', paddingBottom: '35%', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(62,207,207,0.08) 0%, transparent 70%)',
          }} />
        </div>
        <GrainTexture />

        <div
          style={{
            maxWidth: 1200, margin: '0 auto', padding: '120px 32px 80px',
            display: 'grid', gridTemplateColumns: '1fr', gap: 64,
            width: '100%', position: 'relative', zIndex: 1,
          }}
          className="hero-grid"
        >
          <div style={{ maxWidth: 680 }}>
            <div style={{ fontFamily: 'var(--font-mono, JetBrains Mono, monospace)', fontSize: 12, color: 'var(--color-nfc)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 24 }}>
              Smart Storage Platform
            </div>
            <h1 style={{ margin: 0, fontWeight: 800, fontSize: 'clamp(36px, 5vw, 64px)', color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 24 }}>
              One pod. Anywhere you need it secure.
            </h1>
            <p style={{ margin: 0, fontSize: 18, color: 'var(--color-text)', lineHeight: 1.7, maxWidth: 540, marginBottom: 40 }}>
              VeriSeal uses NFC authentication and biometric verification to protect what matters — at your door, in your car, at the gym, on the water, or across the world.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 40 }}>
              <Link href="/pricing" style={{ textDecoration: 'none' }}>
                <HeroButton variant="primary">Back the Launch</HeroButton>
              </Link>
              <Link href="/use-cases" style={{ textDecoration: 'none' }}>
                <HeroButton variant="outline">See All Use Cases</HeroButton>
              </Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, marginBottom: 32 }}>
              {TRUST_ITEMS.map((item) => (
                <span key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono, JetBrains Mono, monospace)', fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0, display: 'inline-block' }} />
                  {item}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href={process.env.NEXT_PUBLIC_TIKTOK_URL || '#'} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '9px 18px', borderRadius: 'var(--radius-button)', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', textDecoration: 'none', fontSize: 14, fontWeight: 500, transition: 'background 150ms ease' }} className="hero-social-link">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.73a8.27 8.27 0 004.83 1.54V6.79a4.85 4.85 0 01-1.06-.1z" />
                </svg>
                Follow on TikTok
              </a>
              <a href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#'} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '9px 18px', borderRadius: 'var(--radius-button)', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', textDecoration: 'none', fontSize: 14, fontWeight: 500, transition: 'background 150ms ease' }} className="hero-social-link">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Follow on Instagram
              </a>
            </div>
          </div>

          <div className="hero-illustration" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{
              borderRadius: 28,
              width: '100%',
              maxWidth: 440,
              aspectRatio: '4/3',
              overflow: 'hidden',
              position: 'relative',
              margin: '0 auto',
              boxShadow: 'var(--shadow-elevated)',
            }}>
              <Image
                src="/images/seal-2.png"
                alt="VeriSeal mascot tapping NFC pod at door"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                priority
              />
            </div>
          </div>
        </div>

        <style>{`
          @media (min-width: 900px) {
            .hero-grid { grid-template-columns: 3fr 2fr !important; align-items: center; }
          }
          .hero-social-link:hover { background: rgba(255,255,255,0.14) !important; }
        `}</style>
      </section>

      {/* ── 2. Email Capture ── */}
      <section style={{ background: 'var(--color-dark)', padding: '0 32px 80px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 64, textAlign: 'center', marginBottom: 40 }}>
            <h2 style={{ margin: '0 0 12px', fontWeight: 700, fontSize: 'clamp(22px, 3vw, 32px)', color: '#fff', letterSpacing: '-0.01em' }}>
              Get early access.
            </h2>
            <p style={{ margin: 0, fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
              Join the list. Be first to know when VeriSeal ships — no spam, just launch updates and backer perks.
            </p>
          </div>
          <EmailCapture />
        </div>
      </section>

      {/* ── 3. Product Showcase ── */}
      <section style={{ background: 'var(--color-bg)', padding: '96px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{ fontFamily: 'var(--font-mono, JetBrains Mono, monospace)', fontSize: 12, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>
              The Hardware
            </div>
            <h2 style={{ margin: 0, fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 40px)', color: 'var(--color-dark)', letterSpacing: '-0.01em' }}>
              Built for every environment.
            </h2>
          </div>

          {/* Family shot — full width */}
          <div style={{
            borderRadius: 'var(--radius-card)',
            overflow: 'hidden',
            position: 'relative',
            aspectRatio: '16/7',
            marginBottom: 24,
            boxShadow: 'var(--shadow-card)',
            background: 'var(--color-bg-alt)',
          }}>
            <Image
              src="/images/family-photo.png"
              alt="VeriSeal pod family — all sizes and form factors"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>

          {/* Individual product shots */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="product-grid">
            <div style={{
              borderRadius: 'var(--radius-card)',
              overflow: 'hidden',
              position: 'relative',
              aspectRatio: '4/3',
              boxShadow: 'var(--shadow-card)',
              background: 'var(--color-bg-alt)',
            }}>
              <Image
                src="/images/large-design.png"
                alt="VeriSeal large pod"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                padding: '20px 24px',
                background: 'linear-gradient(transparent, rgba(13,31,26,0.72))',
              }}>
                <div style={{ fontFamily: 'var(--font-mono, JetBrains Mono, monospace)', fontSize: 11, color: 'var(--color-nfc)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Large Pod</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: '#fff', marginTop: 4 }}>Maximum capacity. Same one-tap access.</div>
              </div>
            </div>

            <div style={{
              borderRadius: 'var(--radius-card)',
              overflow: 'hidden',
              position: 'relative',
              aspectRatio: '4/3',
              boxShadow: 'var(--shadow-card)',
              background: 'var(--color-bg-alt)',
            }}>
              <Image
                src="/images/medium-design.png"
                alt="VeriSeal medium pod"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                padding: '20px 24px',
                background: 'linear-gradient(transparent, rgba(13,31,26,0.72))',
              }}>
                <div style={{ fontFamily: 'var(--font-mono, JetBrains Mono, monospace)', fontSize: 11, color: 'var(--color-nfc)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Medium Pod</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: '#fff', marginTop: 4 }}>Compact form. Outdoor-ready.</div>
              </div>
            </div>
          </div>
        </div>
        <style>{`@media (max-width: 768px) { .product-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* ── 4. Core Capabilities ── */}
      <section style={{ background: 'var(--color-bg-alt)', padding: '96px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ margin: '0 0 48px', fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 40px)', color: 'var(--color-dark)', letterSpacing: '-0.01em', textAlign: 'center' }}>
            One platform. Every environment.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="cap-grid">
            {CAPABILITIES.map((cap) => (
              <div key={cap.type} style={{ background: '#fff', borderRadius: 'var(--radius-card)', boxShadow: 'var(--shadow-card)', padding: '32px' }}>
                <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-icon)', background: 'var(--color-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <CapabilityIcon type={cap.type} />
                </div>
                <h3 style={{ margin: '0 0 12px', fontWeight: 700, fontSize: 18, color: 'var(--color-dark)' }}>{cap.title}</h3>
                <p style={{ margin: 0, fontSize: 15, color: 'var(--color-text)', lineHeight: 1.7 }}>{cap.body}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 900px) { .cap-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* ── 5. Mascot ── */}
      <section style={{ background: '#fff', padding: '96px 32px' }}>
        <div
          style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}
          className="mascot-grid"
        >
          <div style={{ borderRadius: 24, overflow: 'hidden', position: 'relative', aspectRatio: '4/3' }}>
            <Image
              src="/images/seal-1.png"
              alt="VeriSeal mascot with pod"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-mono, JetBrains Mono, monospace)', fontSize: 12, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>
              Secure by Nature
            </div>
            <h2 style={{ margin: '0 0 20px', fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 40px)', color: 'var(--color-dark)', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
              Meet the seal.
            </h2>
            <p style={{ margin: '0 0 24px', fontSize: 16, color: 'var(--color-text)', lineHeight: 1.7 }}>
              VeriSeal&apos;s mascot isn&apos;t decoration. Seals are naturally airtight, intelligent, and agile. So is the product. The character carries the brand voice across social, packaging, and every campaign — because trust is easier when it has a face.
            </p>
            <p style={{ margin: '0 0 32px', fontSize: 14, color: 'var(--color-text)', lineHeight: 1.7 }}>
              Follow the campaign on TikTok and Instagram to see the seal in action.
            </p>
            <div style={{ display: 'flex', gap: 16 }}>
              <a href={process.env.NEXT_PUBLIC_TIKTOK_URL || '#'} target="_blank" rel="noopener noreferrer" className="mascot-social-btn mascot-social-dark">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.73a8.27 8.27 0 004.83 1.54V6.79a4.85 4.85 0 01-1.06-.1z" />
                </svg>
                TikTok
              </a>
              <a href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#'} target="_blank" rel="noopener noreferrer" className="mascot-social-btn mascot-social-outline">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Instagram
              </a>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .mascot-grid { grid-template-columns: 1fr !important; } }
          .mascot-social-btn {
            display: inline-flex; align-items: center; gap: 8px;
            padding: 10px 20px; border-radius: var(--radius-button);
            text-decoration: none; font-size: 14px; font-weight: 600;
            transition: opacity 150ms ease;
          }
          .mascot-social-btn:hover { opacity: 0.8; }
          .mascot-social-dark { background: var(--color-dark); color: #fff; }
          .mascot-social-outline { background: transparent; color: var(--color-dark); border: 1.5px solid var(--color-border); }
        `}</style>
      </section>

      <Footer />
    </>
  );
}
