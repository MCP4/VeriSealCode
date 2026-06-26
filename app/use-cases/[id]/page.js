import { notFound } from 'next/navigation';
import NavBar from '../../../components/NavBar';
import Footer from '../../../components/Footer';
import StepCard from '../../../components/StepCard';
import EmailCapture from '../../../components/EmailCapture';
import UseCaseIcon from '../../../components/UseCaseIcon';
import { USE_CASES } from '../../../lib/useCases';
import { USE_CASE_DETAILS } from '../../../lib/useCaseDetails';
import Link from 'next/link';

export function generateStaticParams() {
  return USE_CASES.map((uc) => ({ id: uc.id }));
}

export function generateMetadata({ params }) {
  const uc = USE_CASES.find((u) => u.id === params.id);
  if (!uc) return {};
  return {
    title: `VeriSeal — ${uc.label}`,
    description: uc.hook,
  };
}

export default function UseCaseDetailPage({ params }) {
  const useCase = USE_CASES.find((u) => u.id === params.id);
  if (!useCase) notFound();

  const details = USE_CASE_DETAILS[params.id] || {};
  const steps = details.howItWorksSteps || [];
  const whyCards = details.whyVeriSeal || [];
  const count = details.socialProofCount || 0;

  return (
    <>
      <NavBar />

      <main style={{ paddingTop: 68 }}>
        {/* Hero */}
        <section
          style={{
            background: 'var(--color-dark)',
            padding: '80px 32px 64px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              bottom: '-20%',
              left: '-5%',
              width: '40%',
              paddingBottom: '40%',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(26,122,69,0.18) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />
          <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <Link
              href="/use-cases"
              className="detail-back-link"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                textDecoration: 'none',
                color: 'rgba(255,255,255,0.5)',
                fontSize: 13,
                fontWeight: 500,
                marginBottom: 32,
              }}
            >
              ← All Use Cases
            </Link>

            <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 64, alignItems: 'center' }} className="detail-hero-grid">
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono, JetBrains Mono, monospace)',
                    fontSize: 11,
                    color: 'var(--color-nfc)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: 16,
                  }}
                >
                  Use Case
                </div>
                <h1
                  style={{
                    margin: '0 0 24px',
                    fontWeight: 800,
                    fontSize: 'clamp(28px, 4vw, 52px)',
                    color: '#fff',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                  }}
                >
                  {useCase.hook}
                </h1>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {useCase.audiences.map((aud) => (
                    <span
                      key={aud}
                      style={{
                        background: 'rgba(45, 191, 110, 0.12)',
                        color: 'var(--color-primary)',
                        borderRadius: 100,
                        padding: '5px 14px',
                        fontSize: 13,
                        fontWeight: 500,
                      }}
                    >
                      {aud}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pod illustration */}
              <div
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  borderRadius: 24,
                  minHeight: 240,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
                  <div
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: 'var(--radius-icon)',
                      background: 'var(--color-deep)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <UseCaseIcon icon={useCase.icon} size={36} color="#fff" />
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 18, color: '#fff' }}>{useCase.label}</div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono, JetBrains Mono, monospace)',
                      fontSize: 11,
                      color: 'var(--color-nfc)',
                    }}
                  >
                    VeriSeal Pod
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why VeriSeal */}
        {whyCards.length > 0 && (
          <section style={{ background: 'var(--color-bg-alt)', padding: '80px 32px' }}>
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
                Why VeriSeal for {useCase.label.toLowerCase()}?
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="why-grid">
                {whyCards.map((card) => (
                  <div
                    key={card.title}
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
                      <UseCaseIcon icon={card.icon} size={22} color="#fff" />
                    </div>
                    <h3 style={{ margin: '0 0 8px', fontWeight: 700, fontSize: 16, color: 'var(--color-dark)' }}>
                      {card.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: 14, color: 'var(--color-text)', lineHeight: 1.6 }}>
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* How It Works */}
        {steps.length > 0 && (
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
                How it works
              </h2>
              {steps.map((s) => (
                <StepCard key={s.number} {...s} variant="light" />
              ))}
            </div>
          </section>
        )}

        {/* Social proof */}
        {count > 0 && (
          <section style={{ background: 'var(--color-bg-alt)', padding: '56px 32px' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
              <p style={{ margin: 0, fontSize: 18, color: 'var(--color-dark)', fontWeight: 600 }}>
                Join{' '}
                <span style={{ color: 'var(--color-primary)' }}>
                  {count.toLocaleString()}
                </span>{' '}
                others securing their {useCase.label.toLowerCase()}.
              </p>
            </div>
          </section>
        )}

        {/* CTA */}
        <section style={{ background: 'var(--color-dark)', padding: '80px 32px' }}>
          <div style={{ maxWidth: 680, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <h2
                style={{
                  margin: '0 0 16px',
                  fontWeight: 700,
                  fontSize: 'clamp(24px, 3.5vw, 36px)',
                  color: '#fff',
                  letterSpacing: '-0.01em',
                }}
              >
                Ready to secure your {useCase.label.toLowerCase()}?
              </h2>
              <p style={{ margin: '0 0 32px', fontSize: 16, color: 'rgba(255,255,255,0.55)' }}>
                Join the list and be first to know when VeriSeal ships.
              </p>
              <Link href="/pricing" style={{ textDecoration: 'none' }}>
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
                    marginBottom: 16,
                  }}
                >
                  Back the Launch
                </button>
              </Link>
            </div>

            <div
              style={{
                background: 'rgba(255,255,255,0.04)',
                borderRadius: 'var(--radius-card)',
                padding: '32px',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <EmailCapture />
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .detail-hero-grid { grid-template-columns: 1fr !important; }
          .why-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
