'use client';

export default function NFCPulse({ color = '#3ECFCF', size = 80 }) {
  const ringStyle = {
    width: size,
    height: size,
    borderRadius: '50%',
    border: `2px solid ${color}`,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) scale(1)',
    opacity: 0.8,
    animation: 'pulse-nfc 1.8s ease-out infinite',
  };

  const ring2Style = {
    ...ringStyle,
    animationDelay: '0.6s',
  };

  const ring3Style = {
    ...ringStyle,
    animationDelay: '1.2s',
  };

  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <div style={ringStyle} />
      <div style={ring2Style} />
      <div style={ring3Style} />
    </div>
  );
}
