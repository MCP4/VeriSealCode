import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import MerchCard from '../components/MerchCard';
import CoverImage from '../components/CoverImage';
import { MERCH } from '../lib/merch';
import usePageMeta from '../lib/usePageMeta';

export default function ShopPage() {
  usePageMeta(
    'Shop Denny — VeriSeal',
    'Take Denny the seal home. Stickers, plush, tees, hoodies, mugs and totes — official VeriSeal merch.'
  );

  return (
    <>
      <NavBar />

      <main style={{ paddingTop: 68 }}>
        {/* Hero */}
        <section style={{ background: 'var(--color-dark)', padding: '80px 32px 64px', position: 'relative', overflow: 'hidden' }}>
          <div
            style={{
              position: 'absolute', bottom: '-20%', right: '-5%',
              width: '40%', paddingBottom: '40%', borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(62,207,207,0.10) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 64, alignItems: 'center' }}
            className="shop-hero-grid"
          >
            <div>
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
                Official Merch
              </div>
              <h1
                style={{
                  margin: '0 0 16px',
                  fontWeight: 800,
                  fontSize: 'clamp(32px, 5vw, 56px)',
                  color: '#fff',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                }}
              >
                Take Denny home.
              </h1>
              <p style={{ margin: 0, fontSize: 18, color: 'rgba(255,255,255,0.6)', maxWidth: 520, lineHeight: 1.6 }}>
                Denny the seal guards your pod — now he can guard your desk, your bag, and your morning coffee. Every order supports the launch.
              </p>
            </div>

            <div style={{ borderRadius: 24, overflow: 'hidden', position: 'relative', aspectRatio: '4/3', boxShadow: 'var(--shadow-elevated)' }}>
              <CoverImage src="/images/seal-1.png" alt="Denny the seal, VeriSeal mascot" priority />
            </div>
          </div>
        </section>

        {/* Products */}
        <section style={{ background: 'var(--color-bg)', padding: '64px 32px 96px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div
              style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}
              className="merch-grid"
            >
              {MERCH.map((item) => (
                <MerchCard key={item.stripeKey} {...item} />
              ))}
            </div>

            <p
              style={{
                textAlign: 'center',
                marginTop: 40,
                fontSize: 13,
                color: 'var(--color-text)',
                fontFamily: 'var(--font-mono, JetBrains Mono, monospace)',
              }}
            >
              Checkout processed securely via Stripe. All prices in USD. Ships worldwide.
            </p>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 1024px) {
          .merch-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 900px) {
          .shop-hero-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .merch-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
