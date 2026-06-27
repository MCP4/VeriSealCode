import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import FAQAccordion from '../components/FAQAccordion';
import UseCaseIcon from '../components/UseCaseIcon';
import { FAQ_ITEMS } from '../lib/faqItems';
import usePageMeta from '../lib/usePageMeta';

const STEPS = [
  {
    number: 1,
    title: 'Unlock with a tap or a touch.',
    body: 'One-tap NFC unlocking with your smartphone or NFC card. Biometric authentication — fingerprint or face — confirms the person holding the phone is actually you.',
  },
  {
    number: 2,
    title: 'Share access without sharing trust.',
    body: 'Issue revocable one-time tokens to couriers, neighbors, roommates, or guests. Make them time-bound, single-use, or locked to a specific location profile. Hand out access, not your keys.',
  },
  {
    number: 3,
    title: 'Monitor tampering in real time.',
    body: 'Integrated sensors stream geo-location, motion, force, and lid-state events. Get instant alerts if someone moves, shakes, pries, or opens your pod unexpectedly — and see a full timeline of every access event: who, when, and under what conditions.',
  },
];

const SCENARIOS = [
  {
    icon: 'shield-check',
    title: 'Dorms & shared apartments',
    body: 'Use it as a shared-space safe. Roommates get personal access, guests get limited tokens, and you get a full log of who opened it and when.',
  },
  {
    icon: 'pod-sealed',
    title: 'Porch & food delivery',
    body: 'Mount a pod near your door, share a one-time code with your driver, and get notified the moment they open and close it — plus any tampering after.',
  },
  {
    icon: 'location',
    title: 'Vehicle trunks & rideshare',
    body: 'Attach the pod with a vehicle mount for trunk deliveries or shared-car storage. If anyone tries to move or force it, you get alerts and a complete sensor trail.',
  },
  {
    icon: 'biometric',
    title: 'Gyms & workplaces',
    body: 'Replace flimsy lockers with a pod that understands users, not just keys. Members and coworkers unlock with NFC or biometrics instead of padlocks.',
  },
  {
    icon: 'chain-of-custody',
    title: 'Travel & marine',
    body: 'Dock the pod into luggage, a boat cabin, or an RV. Keep passports, electronics, and cash in a monitored, movable safe. New environment? Switch the profile, not the product.',
  },
];

export default function HowItWorksPage() {
  usePageMeta(
    'How It Works — VeriSeal',
    'As easy as tapping to pay, with the security depth of a professional access-control system.'
  );

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
              As easy as tapping to pay.
            </h1>
            <p style={{ margin: 0, fontSize: 18, color: 'rgba(255,255,255,0.6)', maxWidth: 620, lineHeight: 1.6 }}>
              VeriSeal feels as simple as tapping your phone at a checkout terminal, with the security depth of a professional access-control system.
            </p>
          </div>
        </section>

        {/* Three steps */}
        <section style={{ background: 'var(--color-dark)', padding: '0 32px 80px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="steps-grid">
              {STEPS.map((s) => (
                <div
                  key={s.number}
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 'var(--radius-card)',
                    padding: '32px',
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 'var(--radius-icon)',
                      background: 'var(--color-deep)',
                      border: '1.5px solid var(--color-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-mono, JetBrains Mono, monospace)',
                      fontSize: 15,
                      fontWeight: 700,
                      color: 'var(--color-primary)',
                      marginBottom: 20,
                    }}
                  >
                    {String(s.number).padStart(2, '0')}
                  </div>
                  <h3 style={{ margin: '0 0 12px', fontWeight: 700, fontSize: 19, color: '#fff', lineHeight: 1.25 }}>{s.title}</h3>
                  <p style={{ margin: 0, fontSize: 15, color: 'rgba(255,255,255,0.72)', lineHeight: 1.7 }}>{s.body}</p>
                </div>
              ))}
            </div>

            {/* Closing line */}
            <div
              style={{
                marginTop: 48,
                background: 'var(--color-deep)',
                borderRadius: 'var(--radius-card)',
                padding: '24px 32px',
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontFamily: 'var(--font-mono, JetBrains Mono, monospace)',
                  fontSize: 14,
                  color: 'var(--color-nfc)',
                  lineHeight: 1.7,
                  textAlign: 'center',
                }}
              >
                Controlled access plus real-time sensing is what turns VeriSeal from “just a box with a lock” into an active guardian for your deliveries and valuables.
              </p>
            </div>
          </div>
        </section>

        {/* Real scenarios */}
        <section style={{ background: 'var(--color-bg)', padding: '80px 32px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ marginBottom: 12 }}>
              <div style={{ fontFamily: 'var(--font-mono, JetBrains Mono, monospace)', fontSize: 12, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>
                Real Scenarios
              </div>
              <h2 style={{ margin: 0, fontWeight: 700, fontSize: 'clamp(24px, 3vw, 36px)', color: 'var(--color-dark)', letterSpacing: '-0.01em' }}>
                Built for everyday, messy situations.
              </h2>
            </div>
            <p style={{ margin: '0 0 40px', fontSize: 16, color: 'var(--color-text)', maxWidth: 620, lineHeight: 1.7 }}>
              We designed VeriSeal around situations where trust is partial, spaces are shared, and everyone is busy.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="scenarios-grid">
              {SCENARIOS.map((s) => (
                <div
                  key={s.title}
                  style={{
                    background: '#fff',
                    borderRadius: 'var(--radius-card)',
                    boxShadow: 'var(--shadow-card)',
                    padding: '28px',
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 'var(--radius-icon)',
                      background: 'var(--color-deep)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 16,
                    }}
                  >
                    <UseCaseIcon icon={s.icon} size={22} color="#fff" />
                  </div>
                  <h3 style={{ margin: '0 0 8px', fontWeight: 700, fontSize: 16, color: 'var(--color-dark)' }}>{s.title}</h3>
                  <p style={{ margin: 0, fontSize: 14, color: 'var(--color-text)', lineHeight: 1.6 }}>{s.body}</p>
                </div>
              ))}
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
        @media (max-width: 900px) {
          .steps-grid { grid-template-columns: 1fr !important; }
          .scenarios-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 1024px) and (min-width: 901px) {
          .scenarios-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </>
  );
}
