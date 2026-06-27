import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import usePageMeta from '../lib/usePageMeta';

const CONTENT = {
  privacy: {
    title: 'Privacy Policy',
    intro: 'How VeriSeal handles the information you share with us.',
    sections: [
      { h: 'What we collect', p: 'When you join the launch list we store your email address. When you place an order, payment is handled by Stripe — we never see or store your card details.' },
      { h: 'How we use it', p: 'We use your email only to send launch updates, backer perks, and order confirmations. We do not sell or rent your information to anyone.' },
      { h: 'Telemetry data', p: 'Pod telemetry (access, motion, GPS, lid-state) is tied to your account and visible only to you. You can export or delete your log at any time from the VeriSeal app.' },
      { h: 'Contact', p: 'Questions about your data? Reach out and Denny will point you to a human.' },
    ],
  },
  terms: {
    title: 'Terms of Service',
    intro: 'The basics of backing and using VeriSeal.',
    sections: [
      { h: 'Crowdfunding', p: 'Backing the launch reserves your pod(s) at the listed tier. Estimated ship dates are targets, not guarantees; we will keep you updated if anything changes.' },
      { h: 'Merch orders', p: 'Denny merch ships separately from hardware. Standard returns apply on unopened items within 30 days of delivery.' },
      { h: 'Acceptable use', p: 'VeriSeal is a security product. Use it lawfully and in line with local regulations for storing the items you choose to secure.' },
      { h: 'Changes', p: 'We may update these terms as the product evolves. Material changes will be announced to the launch list before they take effect.' },
    ],
  },
};

export default function LegalPage({ kind = 'privacy' }) {
  const data = CONTENT[kind] || CONTENT.privacy;
  usePageMeta(`${data.title} — VeriSeal`, data.intro);

  return (
    <>
      <NavBar />

      <main style={{ paddingTop: 68 }}>
        <section style={{ background: 'var(--color-dark)', padding: '80px 32px 64px' }}>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
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
              Legal
            </div>
            <h1 style={{ margin: '0 0 12px', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 52px)', color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              {data.title}
            </h1>
            <p style={{ margin: 0, fontSize: 18, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
              {data.intro}
            </p>
          </div>
        </section>

        <section style={{ background: '#fff', padding: '64px 32px 96px' }}>
          <div style={{ maxWidth: 720, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 32 }}>
            {data.sections.map((s) => (
              <div key={s.h}>
                <h2 style={{ margin: '0 0 8px', fontWeight: 700, fontSize: 20, color: 'var(--color-dark)', letterSpacing: '-0.01em' }}>
                  {s.h}
                </h2>
                <p style={{ margin: 0, fontSize: 15, color: 'var(--color-text)', lineHeight: 1.7 }}>
                  {s.p}
                </p>
              </div>
            ))}
            <p style={{ margin: '16px 0 0', fontSize: 13, color: 'var(--color-text)', fontFamily: 'var(--font-mono, JetBrains Mono, monospace)' }}>
              This is placeholder copy for the campaign. Replace with reviewed legal text before public launch.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
