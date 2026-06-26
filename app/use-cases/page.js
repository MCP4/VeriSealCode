import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import UseCaseCard from '../../components/UseCaseCard';
import { USE_CASES } from '../../lib/useCases';

export const metadata = {
  title: 'Use Cases — VeriSeal',
  description: 'Ten distinct use cases for the VeriSeal NFC and biometric security pod.',
};

export default function UseCasesPage() {
  return (
    <>
      <NavBar />

      <main style={{ paddingTop: 68 }}>
        {/* Header */}
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
              Built for Your Life
            </div>
            <h1
              style={{
                margin: 0,
                fontWeight: 800,
                fontSize: 'clamp(32px, 5vw, 56px)',
                color: '#fff',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                marginBottom: 16,
              }}
            >
              Ten ways VeriSeal fits where you need it.
            </h1>
            <p style={{ margin: 0, fontSize: 18, color: 'rgba(255,255,255,0.6)', maxWidth: 560, lineHeight: 1.6 }}>
              One modular pod. Ten distinct use cases. Running in parallel to find out which narratives the market responds to.
            </p>
          </div>
        </section>

        {/* Cards grid */}
        <section style={{ background: 'var(--color-bg)', padding: '64px 32px 96px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 20,
              }}
              className="uc-grid"
            >
              {USE_CASES.map((uc) => (
                <UseCaseCard key={uc.id} useCase={uc} size="expanded" />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 1024px) {
          .uc-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .uc-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
