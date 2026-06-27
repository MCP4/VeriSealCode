import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import usePageMeta from '../lib/usePageMeta';

export default function NotFoundPage() {
  usePageMeta('Page not found — VeriSeal');

  return (
    <>
      <NavBar />

      <main
        style={{
          paddingTop: 68,
          background: 'var(--color-dark)',
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '120px 32px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 480 }}>
          <img
            src="/images/seal-2.png"
            alt="Denny the seal looking puzzled"
            style={{ width: 160, height: 160, objectFit: 'contain', marginBottom: 24 }}
          />
          <div
            style={{
              fontFamily: 'var(--font-mono, JetBrains Mono, monospace)',
              fontSize: 12,
              color: 'var(--color-nfc)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: 16,
            }}
          >
            404 — Access Not Found
          </div>
          <h1 style={{ margin: '0 0 12px', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 44px)', color: '#fff', letterSpacing: '-0.02em' }}>
            Denny can&apos;t unlock this one.
          </h1>
          <p style={{ margin: '0 0 32px', fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
            The page you were looking for isn&apos;t here. Let&apos;s get you back somewhere secure.
          </p>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <button
              style={{
                background: 'var(--color-primary)',
                color: '#fff',
                border: 'none',
                borderRadius: 'var(--radius-button)',
                padding: '14px 32px',
                fontWeight: 600,
                fontSize: 16,
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              Back to home
            </button>
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
