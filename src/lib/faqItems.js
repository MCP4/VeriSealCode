export const FAQ_ITEMS = [
  {
    question: 'When will VeriSeal ship?',
    answer:
      'Early backers will receive their units in the first production run, estimated Q3 2025. Pilot Partner and Business tiers ship first. All backers are notified with tracking and a setup guide before units leave the facility.',
  },
  {
    question: 'How does NFC unlock actually work?',
    answer:
      'VeriSeal uses a short-range NFC chip in the pod. Your phone or a provisioned NFC card taps the pod to initiate an authentication handshake. The pod verifies the token against its encrypted keychain and unlocks in under 0.5 seconds. No Bluetooth pairing required.',
  },
  {
    question: 'What if I lose my phone?',
    answer:
      'Your pod can be paired with up to three biometric devices and one backup NFC card (included). You can remotely revoke any device from veriseal.app. The pod stays sealed until a verified device authenticates — losing your phone does not leave your pod unsecured.',
  },
  {
    question: 'Can I grant temporary access to someone else?',
    answer:
      'Yes. The VeriSeal app lets you issue one-time NFC tokens with a configurable expiry (single use, 24 hours, or custom window). Send the token digitally to a courier, guest, or colleague. Revoke it instantly from your phone at any time.',
  },
  {
    question: 'Does it work with Uber Eats and DoorDash?',
    answer:
      'VeriSeal integrates with delivery platforms via a courier NFC token sent at the time of order. The courier taps to confirm delivery; the pod seals and logs it. Full API documentation for platform partners is available upon request.',
  },
  {
    question: 'What mounting options are available?',
    answer:
      'VeriSeal ships with an adhesive base plate and a universal bolt-mount bracket. Optional mounting kits include: wall anchor (drywall and stud), vehicle trunk rail, marine stainless frame, locker bar clamp, and luggage tether cable. All kits are sold separately.',
  },
  {
    question: 'What is the tamper telemetry log?',
    answer:
      'Every event — lid open, lid close, motion detected, force applied, NFC tap, GPS coordinate change — is recorded with a cryptographic timestamp and pushed to your phone. The log is exportable as a signed PDF for insurance, compliance, or legal use.',
  },
  {
    question: 'Is there a mobile app?',
    answer:
      'Yes. The VeriSeal app is available for iOS and Android at launch. It handles device pairing, token issuance, tamper alerts, telemetry review, and firmware updates. A web dashboard for Business tier accounts is also included.',
  },
];
