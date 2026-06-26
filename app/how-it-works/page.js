import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import StepCard from '../../components/StepCard';
import FAQAccordion from '../../components/FAQAccordion';
import { FAQ_ITEMS } from '../../lib/faqItems';

const DELIVERY_STEPS = [
  { number: 1, title: 'Courier Arms Pod', description: 'NFC badge tap seals and logs the drop with a cryptographic GPS-verified timestamp.' },
  { number: 2, title: 'Pod Left at Door', description: 'GPS tracking goes active. Status turns amber. Motion sensor arms. You get notified instantly via app push.' },
  { number: 3, title: 'You Get Notified', description: 'Push notification via delivery app integration. Meal arrived, pod sealed. Your delivery is logged and waiting.' },
  { number: 4, title: 'Face ID + Tap', description: 'Biometric auth then NFC tap to unlock. Meal retrieved. The event logs with your biometric ID and timestamp.' },
];

const PERSONAL_STEPS = [
  { number: 1, title: 'Mount Anywhere', description: 'Wall anchor, vehicle trunk rail, marine frame, locker bar, or luggage tether. Mounting kits for every environment.' },
  { number: 2, title: 'Pair Your Phone', description: 'Download the VeriSeal app, tap the pod, and scan Face ID. Setup completes in under 60 seconds.' },
  { number: 3, title: 'Grant Guest Access', description: 'Issue a revocable one-time NFC token from your phone. Set expiry to single-use, 24 hours, or custom window. Revoke instantly.' },
  { number: 4, title: 'Full Telemetry', description: 'Every event — open, close, motion, force, GPS — logged with a cryptographic timestamp and pushed to your phone in real time.' },
];

const COMPARISON_ROWS = [
  { attribute: 'Unlock method', delivery: 'NFC badge (courier) + Biometric (owner)', personal: 'Biometric (owner) + NFC token (guest)' },
  { attribute: 'Mounting', delivery: 'Wall anchor or door mount', personal: 'Wall, trunk, marine, locker, luggage' },
  { attribute: 'Telemetry', delivery: 'GPS, lid-state, courier NFC log', personal: 'GPS, motion, force, lid-state, full history' },
  { attribute: 'Guest access', delivery: 'One-time courier token, auto-expires', personal: 'Revocable token, configurable expiry' },
  { attribute: 'Return flow', delivery: 'Pod re-arms after owner retrieves delivery', personal: 'Manual re-arm or auto-lock timer' },
  { attribute: 'Compliance use', delivery: 'DEA medical chain of custody, signed audit', personal: 'Personal audit log, exportable PDF' },
  { attribute: 'Best for', delivery: 'Apartment, porch, office delivery drops', personal: 'Vehicle, gym, hotel, dorm, travel' },
];

export default function HowItWorksPage() {
  return (
    <>
      <NavBar />

      <main style={{ paddingTop: 68 }}>
        {/* Hero */}
        <section style={{ background: 'var(--color-dark)', padding: '80px 32px 64px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
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
              How It Works
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
              Secure by design. Simple by choice.
            </h1>
            <p style={{ margin: 0, fontSize: 18, color: 'rgba(255,255,255,0.6)', maxWidth: 560, lineHeight: 1.6 }}>
              VeriSeal operates across two primary tracks — delivery and personal security. Both use the same hardware, same NFC chip, and same biometric system.
            </p>
          </div>
        </section>

        {/* Two-track flow */}
        <section style={{ background: 'var(--color-dark)', padding: '0 32px 80px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }} className="tracks-grid">
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono, JetBrains Mono, monospace)',
                    fontSize: 11,
                    color: 'var(--color-nfc)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: 24,
                    padding: '12px 16px',
                    background: 'rgba(62,207,207,0.07)',
                    borderRadius: 8,
                    border: '1px solid rgba(62,207,207,0.15)',
                  }}
                >
                  Food & Delivery Track
                </div>
                {DELIVERY_STEPS.map((s) => (
                  <StepCard key={s.number} {...s} variant="dark" />
                ))}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono, JetBrains Mono, monospace)',
                    fontSize: 11,
                    color: 'var(--color-nfc)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: 24,
                    padding: '12px 16px',
                    background: 'rgba(62,207,207,0.07)',
                    borderRadius: 8,
                    border: '1px solid rgba(62,207,207,0.15)',
                  }}
                >
                  Personal Security Track
                </div>
                {PERSONAL_STEPS.map((s) => (
                  <StepCard key={s.number} {...s} variant="dark" />
                ))}
              </div>
            </div>

            {/* Compliance bar */}
            <div
              style={{
                marginTop: 48,
                background: 'var(--color-deep)',
                borderRadius: 'var(--radius-card)',
                padding: '20px 32px',
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontFamily: 'var(--font-mono, JetBrains Mono, monospace)',
                  fontSize: 13,
                  color: 'var(--color-nfc)',
                  lineHeight: 1.7,
                  textAlign: 'center',
                }}
              >
                Built for DEA chain of custody on medical deliveries. Every event produces a cryptographically signed, GPS-verified, timestamped audit record.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section style={{ background: 'var(--color-bg)', padding: '80px 32px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <h2
              style={{
                margin: '0 0 40px',
                fontWeight: 700,
                fontSize: 'clamp(24px, 3vw, 36px)',
                color: 'var(--color-dark)',
                letterSpacing: '-0.01em',
              }}
            >
              Delivery vs Personal Security
            </h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 600 }}>
                <thead>
                  <tr style={{ background: 'var(--color-primary)' }}>
                    <th style={{ padding: '16px 20px', textAlign: 'left', fontWeight: 700, fontSize: 13, color: '#fff', borderRadius: '12px 0 0 0' }}>
                      Attribute
                    </th>
                    <th style={{ padding: '16px 20px', textAlign: 'left', fontWeight: 700, fontSize: 13, color: '#fff' }}>
                      Delivery Track
                    </th>
                    <th style={{ padding: '16px 20px', textAlign: 'left', fontWeight: 700, fontSize: 13, color: '#fff', borderRadius: '0 12px 0 0' }}>
                      Personal Security Track
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row, i) => (
                    <tr
                      key={row.attribute}
                      style={{ background: i % 2 === 0 ? '#fff' : 'var(--color-bg-alt)' }}
                    >
                      <td
                        style={{
                          padding: '14px 20px',
                          fontWeight: 600,
                          fontSize: 14,
                          color: 'var(--color-dark)',
                          borderBottom: '1px solid var(--color-border)',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {row.attribute}
                      </td>
                      <td
                        style={{
                          padding: '14px 20px',
                          fontSize: 14,
                          color: 'var(--color-text)',
                          borderBottom: '1px solid var(--color-border)',
                          lineHeight: 1.5,
                        }}
                      >
                        {row.delivery}
                      </td>
                      <td
                        style={{
                          padding: '14px 20px',
                          fontSize: 14,
                          color: 'var(--color-text)',
                          borderBottom: '1px solid var(--color-border)',
                          lineHeight: 1.5,
                        }}
                      >
                        {row.personal}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        {/* FAQ */}
        <section style={{ background: '#fff', padding: '80px 32px' }}>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <h2
              style={{
                margin: '0 0 40px',
                fontWeight: 700,
                fontSize: 'clamp(24px, 3vw, 36px)',
                color: 'var(--color-dark)',
                letterSpacing: '-0.01em',
              }}
            >
              Frequently asked questions
            </h2>
            <FAQAccordion items={FAQ_ITEMS} />
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .tracks-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </>
  );
}
