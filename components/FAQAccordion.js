'use client';

import { useState } from 'react';

function ChevronIcon({ open }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--color-primary)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 200ms ease',
        flexShrink: 0,
      }}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function FAQAccordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            style={{
              borderBottom: '1px solid var(--color-border)',
              overflow: 'hidden',
            }}
          >
            <button
              onClick={() => toggle(i)}
              style={{
                width: '100%',
                background: 'none',
                border: 'none',
                textAlign: 'left',
                padding: '20px 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 16,
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              <span
                style={{
                  fontWeight: 600,
                  fontSize: 16,
                  color: 'var(--color-dark)',
                  lineHeight: 1.4,
                }}
              >
                {item.question}
              </span>
              <ChevronIcon open={isOpen} />
            </button>

            <div
              style={{
                maxHeight: isOpen ? '400px' : '0',
                overflow: 'hidden',
                transition: 'max-height 280ms ease',
              }}
            >
              <div
                style={{
                  paddingBottom: 20,
                  paddingLeft: 0,
                  borderLeft: isOpen ? '3px solid var(--color-deep)' : '3px solid transparent',
                  paddingLeft: isOpen ? 16 : 0,
                  transition: 'border-color 280ms ease, padding-left 280ms ease',
                }}
              >
                <p style={{ margin: 0, fontSize: 15, color: 'var(--color-text)', lineHeight: 1.7 }}>
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
