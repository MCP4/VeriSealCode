import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import PricingCard from '../components/PricingCard';
import CheckoutButton from '../components/CheckoutButton';
import { POD_SIZES, BELIEVER, PLEDGE_TIERS, COMPLETE_SET } from '../lib/pricingTiers';
import usePageMeta from '../lib/usePageMeta';

const PROGRESS = [
  'Refining the mechanical design for modular mounting and durability',
  'Integrating NFC and biometric access hardware with secure firmware',
  'Tuning sensor fusion for reliable tamper and motion detection across every use case',
];

const BACKING = [
  { title: 'Build the hardware', desc: 'Build and test our first production-ready pod chassis and mounting ecosystem.' },
  { title: 'Finish the software', desc: 'Finalize the access and telemetry software that makes the system truly smart.' },
  { title: 'Run real pilots', desc: 'Run pilot programs in real environments: delivery, dorms, vehicles, and workplaces.' },
];

export default function PricingPage() {
  usePageMeta(
    'Reserve Your VeriSeal — Pricing',
    'Pick the pod size that fits your life, or grab the Complete Set and get a third pod on us. Early tiers are capped.'
  );

  return (
    <>
      <NavBar />

      <main style={{ paddingTop: 68 }}>
        {/* Hero */}
        <section style={{ background: 'var(--color-dark)', padding: '80px 32px 56px' }}>
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
              Reserve your VeriSeal.
            </h1>
            <p style={{ margin: 0, fontSize: 18, color: 'rgba(255,255,255,0.6)', maxWidth: 560, lineHeight: 1.6, marginLeft: 'auto', marginRight: 'auto' }}>
              Pick the pod size that fits your life, or grab the Complete Set and get a third pod on us. Early tiers are capped — the deepest savings go to the fastest backers.
            </p>
          </div>
        </section>

        {/* Pod sizes reference */}
        <section style={{ background: 'var(--color-dark)', padding: '0 32px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono, JetBrains Mono, monospace)',
                fontSize: 11,
                color: 'rgba(255,255,255,0.4)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: 20,
                textAlign: 'center',
              }}
            >
              Three pod sizes — every pod ships with full NFC + biometric access and live telemetry
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="podsize-grid">
              {POD_SIZES.map((p) => (
                <div
                  key={p.name}
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 'var(--radius-card)',
                    padding: '24px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12, marginBottom: 8 }}>
                    <h3 style={{ margin: 0, fontWeight: 700, fontSize: 17, color: '#fff' }}>{p.name}</h3>
                    <span style={{ fontWeight: 800, fontSize: 20, color: 'var(--color-primary)' }}>{p.price}</span>
                  </div>
                  <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Believer banner */}
        <section style={{ background: 'var(--color-dark)', padding: '32px 32px 0' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div
              style={{
                background: 'var(--color-deep)',
                border: '1.5px solid rgba(62,207,207,0.25)',
                borderRadius: 'var(--radius-card)',
                padding: '32px',
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: 32,
                alignItems: 'center',
              }}
              className="believer-banner"
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, flexWrap: 'wrap', marginBottom: 12 }}>
                  <h2 style={{ margin: 0, fontWeight: 700, fontSize: 24, color: '#fff' }}>{BELIEVER.tier}</h2>
                  <span style={{ fontWeight: 800, fontSize: 32, color: 'var(--color-primary)' }}>{BELIEVER.price}</span>
                </div>
                <p style={{ margin: 0, fontSize: 15, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, maxWidth: 720 }}>
                  {BELIEVER.blurb}
                </p>
              </div>
              <CheckoutButton stripeKey={BELIEVER.stripeKey}>Pledge $1</CheckoutButton>
            </div>
          </div>
        </section>

        {/* Pledge tiers grid */}
        <section style={{ background: 'var(--color-dark)', padding: '40px 32px 16px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 24,
                alignItems: 'start',
              }}
              className="pricing-full-grid"
            >
              {PLEDGE_TIERS.map((tier) => (
                <PricingCard key={tier.stripeKey} {...tier} cta="Reserve Yours" />
              ))}
            </div>
          </div>
        </section>

        {/* The Complete Set — flagship */}
        <section style={{ background: 'var(--color-dark)', padding: '24px 32px 80px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div
              style={{
                background: 'linear-gradient(135deg, var(--color-deep), #115c34)',
                border: '2px solid var(--color-primary)',
                borderRadius: 'var(--radius-card)',
                padding: '40px',
                boxShadow: 'var(--shadow-floating)',
                display: 'grid',
                gridTemplateColumns: '1.4fr 1fr',
                gap: 40,
                alignItems: 'center',
              }}
              className="complete-set"
            >
              <div>
                <span
                  style={{
                    display: 'inline-block',
                    background: 'var(--color-nfc)',
                    color: 'var(--color-dark)',
                    borderRadius: 100,
                    padding: '4px 14px',
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    marginBottom: 16,
                  }}
                >
                  {COMPLETE_SET.badge}
                </span>
                <h2 style={{ margin: '0 0 16px', fontWeight: 800, fontSize: 'clamp(24px, 3vw, 34px)', color: '#fff', letterSpacing: '-0.01em', lineHeight: 1.15 }}>
                  {COMPLETE_SET.tier}
                </h2>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {COMPLETE_SET.features.map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 15, color: 'rgba(255,255,255,0.92)', lineHeight: 1.5 }}>
                      <span style={{ color: 'var(--color-nfc)', flexShrink: 0, marginTop: 2 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 64, fontWeight: 800, color: 'var(--color-primary)', lineHeight: 1, letterSpacing: '-0.02em' }}>
                  {COMPLETE_SET.price}
                </div>
                <div style={{ margin: '12px 0 24px', fontFamily: 'var(--font-mono, JetBrains Mono, monospace)', fontSize: 13, color: 'var(--color-nfc)' }}>
                  {COMPLETE_SET.save} vs. buying every piece separately
                </div>
                <CheckoutButton stripeKey={COMPLETE_SET.stripeKey}>Claim the Complete Set</CheckoutButton>
                <p style={{ margin: '16px 0 0', fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
                  Bundle all the sizes and the Medium Pod is on us. Quantities at the lowest tiers are strictly limited.
                </p>
              </div>
            </div>

            <p
              style={{
                textAlign: 'center',
                marginTop: 28,
                fontSize: 13,
                color: 'rgba(255,255,255,0.35)',
                fontFamily: 'var(--font-mono, JetBrains Mono, monospace)',
              }}
            >
              Payments processed securely via Stripe. All prices in USD. Limited tiers are first come, first served.
            </p>
          </div>
        </section>

        {/* Where we are now */}
        <section style={{ background: 'var(--color-bg-alt)', padding: '80px 32px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="status-grid">
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono, JetBrains Mono, monospace)',
                  fontSize: 12,
                  color: 'var(--color-primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: 16,
                }}
              >
                Where We Are Now
              </div>
              <h2 style={{ margin: '0 0 16px', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 36px)', color: 'var(--color-dark)', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
                From locked architecture to first integrated prototype.
              </h2>
              <p style={{ margin: 0, fontSize: 16, color: 'var(--color-text)', lineHeight: 1.7 }}>
                We&apos;ve locked in the core product: a single pod chassis, a modular mounting family, an NFC and biometric access stack, and a telemetry pipeline streaming geo-location, motion, force, and lid-state data. Now we&apos;re moving from concept validation into our first integrated prototype phase — and your support takes us from working prototype to a product in your hands.
              </p>
            </div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {PROGRESS.map((item, i) => (
                <li
                  key={i}
                  style={{
                    background: '#fff',
                    borderRadius: 'var(--radius-card)',
                    boxShadow: 'var(--shadow-card)',
                    padding: '20px 24px',
                    display: 'flex',
                    gap: 16,
                    alignItems: 'flex-start',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono, JetBrains Mono, monospace)',
                      fontSize: 13,
                      fontWeight: 700,
                      color: 'var(--color-primary)',
                      flexShrink: 0,
                      marginTop: 1,
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span style={{ fontSize: 15, color: 'var(--color-dark)', lineHeight: 1.5 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* What your backing makes possible */}
        <section style={{ background: '#fff', padding: '80px 32px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ margin: '0 0 12px', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 36px)', color: 'var(--color-dark)', letterSpacing: '-0.01em' }}>
              What your backing makes possible
            </h2>
            <p style={{ margin: '0 0 48px', fontSize: 16, color: 'var(--color-text)', maxWidth: 620, lineHeight: 1.7 }}>
              Early backers aren&apos;t just customers — you&apos;re collaborators building a brand-new category of adaptable, sensor-aware secure storage. You&apos;ll be among the first to receive a pod and mounting kit, and you&apos;ll help shape the software profiles we ship.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="includes-grid">
              {BACKING.map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: 'var(--color-bg)',
                    borderRadius: 'var(--radius-card)',
                    boxShadow: 'var(--shadow-card)',
                    padding: '28px',
                  }}
                >
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--color-primary)', marginBottom: 16 }} />
                  <h3 style={{ margin: '0 0 8px', fontWeight: 700, fontSize: 16, color: 'var(--color-dark)' }}>{item.title}</h3>
                  <p style={{ margin: 0, fontSize: 14, color: 'var(--color-text)', lineHeight: 1.6 }}>{item.desc}</p>
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
          .podsize-grid { grid-template-columns: 1fr !important; }
          .includes-grid { grid-template-columns: 1fr !important; }
          .believer-banner { grid-template-columns: 1fr !important; }
          .complete-set { grid-template-columns: 1fr !important; }
          .status-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </>
  );
}
