'use client';

import { useState } from 'react';
import Link from 'next/link';
import UseCaseIcon from './UseCaseIcon';

export default function UseCaseCard({ useCase, size = 'grid', dimmed = false }) {
  const [hovered, setHovered] = useState(false);
  const isExpanded = size === 'expanded';

  return (
    <Link href={`/use-cases/${useCase.id}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: '#fff',
          borderRadius: 'var(--radius-card)',
          boxShadow: hovered ? 'var(--shadow-elevated)' : 'var(--shadow-card)',
          padding: isExpanded ? '32px' : '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          border: `1.5px solid ${hovered ? 'var(--color-primary)' : 'transparent'}`,
          cursor: 'pointer',
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
          transition: 'transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease',
          height: '100%',
          opacity: dimmed ? 0.4 : 1,
        }}
      >
        <div
          style={{
            width: isExpanded ? 52 : 44,
            height: isExpanded ? 52 : 44,
            borderRadius: 'var(--radius-icon)',
            background: 'var(--color-deep)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <UseCaseIcon icon={useCase.icon} size={isExpanded ? 26 : 22} color="#fff" />
        </div>

        <div style={{ flex: 1 }}>
          <h3
            style={{
              margin: 0,
              fontWeight: 600,
              fontSize: isExpanded ? 18 : 16,
              color: 'var(--color-dark)',
              lineHeight: 1.3,
              marginBottom: 8,
            }}
          >
            {useCase.label}
          </h3>
          <p
            style={{
              margin: 0,
              fontWeight: 400,
              fontSize: 14,
              color: 'var(--color-text)',
              lineHeight: 1.6,
            }}
          >
            {useCase.hook}
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <span style={{ color: 'var(--color-primary)', fontSize: 18, fontWeight: 300 }}>→</span>
        </div>
      </div>
    </Link>
  );
}
