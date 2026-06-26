import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import PricingCard from '../../components/PricingCard';
import { PRICING_TIERS } from '../../lib/pricingTiers';

export const metadata = {
  title: 'VeriSeal — Pricing & Crowdfunding',
  description: 'Back the VeriSeal launch. Choose your tier and get early access before the public launch.',
};

export default function PricingPage() {
  return (
    <>
      <NavBar />

      <main style={{ paddingTop: 68 }}>
        {/* Hero */}
        <section style={{ background: 'var(--color-dark)', padding: '80px 32px 64px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
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
              Crowdfunding Campaign
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
              Back the launch.
            </h1>
            <p style={{ margin: 0, fontSize: 18, color: 'rgba(255,255,255,0.6)', maxWidth: 480, lineHeight: 1.6, marginLeft: 'auto', marginRight: 'auto' }}>
              Ten use cases. One pod. Early backers get in before the market finds out.
            </p>
          </div>
        </section>

        {/* Tiers */}
        <section style={{ background: 'var(--color-dark)', padding: '0 32px 96px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 24,
                alignItems: 'start',
                paddingTop: 24,
                paddingBottom: 16,
              }}
              className="pricing-full-grid"
            >
              {PRICING_TIERS.map((tier) => (
                <PricingCard key={tier.tier} {...tier} />
              ))}
            </div>

            <p
              style={{
                textAlign: 'center',
                marginTop: 32,
                fontSize: 13,
                color: 'rgba(255,255,255,0.35)',
                fontFamily: 'var(--font-mono, JetBrains Mono, monospace)',
              }}
            >
              Payments processed securely via Stripe. All prices in USD.
            </p>
          </div>
        </section>

        {/* What&apos;s included detail */}
        <section style={{ background: 'var(--color-bg-alt)', padding: '80px 32px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <h2
              style={{
                margin: '0 0 12px',
                fontWeight: 700,
                fontSize: 'clamp(24px, 3vw, 36px)',
                color: 'var(--color-dark)',
                letterSpacing: '-0.01em',
              }}
            >
              Every tier includes
            </h2>
            <p style={{ margin: '0 0 48px', fontSize: 16, color: 'var(--color-text)' }}>
              Regardless of tier, every backer gets access to the VeriSeal platform.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="includes-grid">
              {[
                { title: 'VeriSeal App', desc: 'iOS and Android. Biometric pairing, token management, tamper telemetry, and firmware updates.' },
                { title: 'Full Telemetry', desc: 'GPS-verified event log for every access, motion, and force event. Exportable as signed PDF.' },
                { title: 'Mounting Hardware', desc: 'Universal adhesive base plate and bolt-mount bracket. Additional kits available separately.' },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: '#fff',
                    borderRadius: 'var(--radius-card)',
                    boxShadow: 'var(--shadow-card)',
                    padding: '28px',
                  }}
                >
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      background: 'var(--color-primary)',
                      marginBottom: 16,
                    }}
                  />
                  <h3 style={{ margin: '0 0 8px', fontWeight: 700, fontSize: 16, color: 'var(--color-dark)' }}>
                    {item.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: 14, color: 'var(--color-text)', lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .pricing-full-grid { grid-template-columns: 1fr !important; }
          .includes-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
