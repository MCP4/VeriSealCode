import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Use Cases', href: '/use-cases' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Shop Denny', href: '/shop' },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(247, 254, 250, 0.92)' : 'var(--color-bg)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
        transition: 'background 200ms ease, border-color 200ms ease',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 32px',
          height: 68,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Wordmark */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <div style={{ height: 54, overflow: 'hidden', flexShrink: 0 }}>
            <img src="/images/pfp-veriseal-updated.png" alt="VeriSeal" style={{ height: 72, width: 'auto', display: 'block' }} />
          </div>
        </Link>

        {/* Desktop nav links */}
        <div
          style={{
            display: 'flex',
            gap: 40,
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
          className="desktop-nav"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              style={{
                textDecoration: 'none',
                color: 'var(--color-text)',
                fontWeight: 500,
                fontSize: 15,
                transition: 'color 150ms ease',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--color-primary)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--color-text)')}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Link to="/pricing" className="desktop-nav" style={{ textDecoration: 'none' }}>
            <button
              style={{
                background: 'var(--color-primary)',
                color: '#fff',
                border: 'none',
                borderRadius: 'var(--radius-button)',
                padding: '10px 22px',
                fontWeight: 600,
                fontSize: 14,
                cursor: 'pointer',
                transition: 'transform 150ms ease, background 150ms ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--color-deep)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--color-primary)')}
              onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.97)')}
              onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              Back the Launch
            </button>
          </Link>

          {/* Hamburger */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 8,
              display: 'none',
              flexDirection: 'column',
              gap: 5,
            }}
            aria-label="Toggle menu"
          >
            <span style={{ display: 'block', width: 22, height: 2, background: 'var(--color-dark)', borderRadius: 2, transition: 'transform 200ms ease', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ display: 'block', width: 22, height: 2, background: 'var(--color-dark)', borderRadius: 2, opacity: menuOpen ? 0 : 1, transition: 'opacity 200ms ease' }} />
            <span style={{ display: 'block', width: 22, height: 2, background: 'var(--color-dark)', borderRadius: 2, transition: 'transform 200ms ease', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: 'var(--color-bg)',
            borderTop: '1px solid var(--color-border)',
            padding: '16px 32px 24px',
          }}
          className="mobile-menu"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '12px 0',
                textDecoration: 'none',
                color: 'var(--color-dark)',
                fontWeight: 500,
                fontSize: 17,
                borderBottom: '1px solid var(--color-border)',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/pricing" onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none' }}>
            <button
              style={{
                marginTop: 20,
                width: '100%',
                background: 'var(--color-primary)',
                color: '#fff',
                border: 'none',
                borderRadius: 'var(--radius-button)',
                padding: '14px',
                fontWeight: 600,
                fontSize: 15,
                cursor: 'pointer',
              }}
            >
              Back the Launch
            </button>
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
