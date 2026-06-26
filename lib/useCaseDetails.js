export const USE_CASE_DETAILS = {
  'food-delivery': {
    socialProofCount: 2400,
    howItWorksSteps: [
      { number: 1, title: 'Courier Arms Pod', description: 'NFC badge tap seals and logs the drop with a GPS-verified timestamp.' },
      { number: 2, title: 'Pod Left at Door', description: 'GPS tracking goes active. Status turns amber. You get notified instantly.' },
      { number: 3, title: 'You Get Notified', description: 'Push notification via delivery app integration — meal arrived, pod sealed.' },
      { number: 4, title: 'Face ID + Tap', description: 'Biometric auth then NFC tap to unlock. Meal retrieved, event logged.' },
    ],
    whyVeriSeal: [
      { icon: 'nfc', title: 'Seamless Courier Handoff', description: 'One NFC tap arms the pod and logs the delivery. No app needed for the courier.' },
      { icon: 'location', title: 'Live GPS Status', description: 'Track your delivery from drop to pickup with real-time geo-location updates.' },
      { icon: 'shield-check', title: 'App Integration', description: 'Works with Uber Eats, DoorDash, and meal kit services via delivery webhooks.' },
    ],
  },
  'roommate-dorm': {
    socialProofCount: 1800,
    howItWorksSteps: [
      { number: 1, title: 'Mount in Your Space', description: 'Adhesive or screw mount to any surface — desk, shelf, closet, or wall.' },
      { number: 2, title: 'Pair Your Phone', description: 'Face ID becomes your key. No shared codes, no lost keys, no awkward conversations.' },
      { number: 3, title: 'Set Boundaries', description: 'Your pod, your rules. Roommates see it locked. You see every access event.' },
      { number: 4, title: 'Full History', description: 'Every open/close logged with a timestamp. Know exactly what happened and when.' },
    ],
    whyVeriSeal: [
      { icon: 'biometric', title: 'Biometric Only', description: 'Your face is the only key. No shared codes or spare keys that get passed around.' },
      { icon: 'shield-check', title: 'Tamper Alerts', description: 'Motion and force sensors trigger immediate alerts if someone tries to access your pod.' },
      { icon: 'verified', title: 'No Landlord Conflict', description: 'Adhesive mounting leaves no permanent marks. Security without lease violations.' },
    ],
  },
  'childproof': {
    socialProofCount: 3100,
    howItWorksSteps: [
      { number: 1, title: 'Mount Where You Need It', description: 'Kitchen cabinet, medicine shelf, or garage — install in minutes with no tools.' },
      { number: 2, title: 'Parent-Only Access', description: 'Only your biometric unlocks it. No codes a curious child can watch and memorize.' },
      { number: 3, title: 'Instant Alert', description: 'Any touch or tamper attempt sends a push notification to your phone immediately.' },
      { number: 4, title: 'Quick Access', description: 'You unlock in under a second when you need it. Child-resistant, not adult-resistant.' },
    ],
    whyVeriSeal: [
      { icon: 'verified', title: 'No Codes to Memorize', description: 'Children cannot crack a biometric lock by watching you enter a combination.' },
      { icon: 'shield-check', title: 'Tamper Telemetry', description: 'Immediate alerts when the pod is touched, moved, or forced — even when you\'re in another room.' },
      { icon: 'lock', title: 'Medication Safe', description: 'Meets household safety standards for prescription medication storage.' },
    ],
  },
  'firearm': {
    socialProofCount: 2900,
    howItWorksSteps: [
      { number: 1, title: 'Secure Storage', description: 'Mount in your bedroom, vehicle, or safe room. Biometric access in under a second.' },
      { number: 2, title: 'Quick Access', description: 'Face ID unlocks in 0.8 seconds. Fast enough when it matters, locked otherwise.' },
      { number: 3, title: 'Grant Guest Access', description: 'Issue a one-time NFC token to a trusted adult. Revoke it from your phone instantly.' },
      { number: 4, title: 'Full Audit Log', description: 'Every access event logged with biometric ID, timestamp, and GPS location.' },
    ],
    whyVeriSeal: [
      { icon: 'biometric', title: 'Sub-Second Unlock', description: 'Biometric access fast enough for home defense, locked tight against unauthorized hands.' },
      { icon: 'verified', title: 'Responsible Ownership', description: 'Meet safe storage requirements in states requiring secure firearm storage.' },
      { icon: 'shield-check', title: 'Family Safe', description: 'Children cannot access the pod. You can. The difference is biometric.' },
    ],
  },
  'car-trunk': {
    socialProofCount: 1600,
    howItWorksSteps: [
      { number: 1, title: 'Mount in Your Vehicle', description: 'Trunk mount kit attaches to cargo rails or wheel wells. Stays put on any road.' },
      { number: 2, title: 'Pair While Parked', description: 'Sync to your phone in 60 seconds. GPS tracking goes live immediately.' },
      { number: 3, title: 'Leave Your Car', description: 'Valuables locked. Pod monitoring active. You get notified of any movement.' },
      { number: 4, title: 'Tap to Retrieve', description: 'NFC tap + Face ID unlocks in under a second. Faster than any combination lock.' },
    ],
    whyVeriSeal: [
      { icon: 'location', title: 'GPS Active', description: 'Real-time vehicle-level location tracking for everything inside the pod.' },
      { icon: 'shield-check', title: 'Smash-and-Grab Defense', description: 'Force sensors trigger immediate alerts if someone breaks in and tries to access the pod.' },
      { icon: 'nfc', title: 'Gig Worker Ready', description: 'Rideshare and delivery drivers: keep your essentials locked between shifts.' },
    ],
  },
  'boat-outdoor': {
    socialProofCount: 980,
    howItWorksSteps: [
      { number: 1, title: 'Marine Mount', description: 'Stainless steel mount kit rated for saltwater environments. Install on deck or below.' },
      { number: 2, title: 'Weather-Sealed', description: 'IP67 rated enclosure handles rain, spray, and submersion up to 1 meter.' },
      { number: 3, title: 'Biometric at Sea', description: 'Wet finger recognition. Biometric unlock works in rain, salt water, and gloves.' },
      { number: 4, title: 'Satellite Telemetry', description: 'GPS-verified event log even when out of cellular range via satellite fallback.' },
    ],
    whyVeriSeal: [
      { icon: 'pod-open', title: 'IP67 Waterproof', description: 'Sealed against dust and water. Built for the conditions your valuables actually face.' },
      { icon: 'location', title: 'Off-Grid Tracking', description: 'GPS event logging with satellite fallback for open water and backcountry use.' },
      { icon: 'biometric', title: 'Wet-Hand Biometric', description: 'Fingerprint and face recognition calibrated for wet, gloved, or sunscreened hands.' },
    ],
  },
  'travel-hotel': {
    socialProofCount: 2200,
    howItWorksSteps: [
      { number: 1, title: 'Pack It Anywhere', description: 'Compact form factor fits in a carry-on, backpack, or personal item bag.' },
      { number: 2, title: 'Attach Anywhere', description: 'Luggage tether, bed frame loop, or hotel furniture lock — three mounting options.' },
      { number: 3, title: 'Your Phone Is Your Key', description: 'No hotel safe codes to forget. Face ID unlocks it worldwide, on any network.' },
      { number: 4, title: 'Tamper Alerts Anywhere', description: 'Motion and force alerts reach your phone even when you\'re at the pool.' },
    ],
    whyVeriSeal: [
      { icon: 'chain-of-custody', title: 'Bring Your Own Safe', description: 'Hotel safes are managed by hotel staff. VeriSeal is managed only by you.' },
      { icon: 'location', title: 'Global GPS', description: 'Real-time location and tamper telemetry in 190+ countries.' },
      { icon: 'nfc', title: 'Luggage Tether', description: 'Cable loop attachment secures the pod to immovable hotel furniture.' },
    ],
  },
  'package-theft': {
    socialProofCount: 4100,
    howItWorksSteps: [
      { number: 1, title: 'Install at Your Door', description: 'Wall mount or ground anchor at your delivery entrance. Setup takes 10 minutes.' },
      { number: 2, title: 'Share Courier Token', description: 'One-time NFC delivery token sent to the carrier. Valid for a single drop.' },
      { number: 3, title: 'Package Sealed', description: 'Courier taps to confirm delivery. Pod seals and timestamps the drop.' },
      { number: 4, title: 'You Retrieve It', description: 'Biometric + NFC tap retrieves your package. Token expires immediately after.' },
    ],
    whyVeriSeal: [
      { icon: 'nfc', title: 'One-Time Courier Tokens', description: 'Valid for a single delivery. Expires after use. No repeat access for anyone.' },
      { icon: 'location', title: 'Delivery Confirmation', description: 'GPS-verified, timestamped delivery record for every package dropped.' },
      { icon: 'shield-check', title: 'Porch Pirate Proof', description: 'Tamper-resistant enclosure with force sensors and immediate alert on any intrusion attempt.' },
    ],
  },
  'workplace': {
    socialProofCount: 1400,
    howItWorksSteps: [
      { number: 1, title: 'Desk or Locker Mount', description: 'Adhesive or screw mount at any workstation, locker bay, or open shelf.' },
      { number: 2, title: 'Employee Biometric', description: 'Each employee syncs their own Face ID. No shared codes, no HR overhead.' },
      { number: 3, title: 'Guest Tokens', description: 'Grant a colleague temporary access via one-time NFC token. Revoke instantly.' },
      { number: 4, title: 'Compliance Log', description: 'Audit trail of every access event for compliance, insurance, and HR records.' },
    ],
    whyVeriSeal: [
      { icon: 'biometric', title: 'Per-Employee Access', description: 'Each pod is linked to one biometric identity. No shared combinations that leak.' },
      { icon: 'verified', title: 'Audit Trail', description: 'Full access log with timestamps for compliance and workplace security policies.' },
      { icon: 'shield-check', title: 'Open-Plan Ready', description: 'Secures valuables in environments where locking doors isn\'t an option.' },
    ],
  },
  'gym-fitness': {
    socialProofCount: 3300,
    howItWorksSteps: [
      { number: 1, title: 'Bring It In', description: 'Compact enough to fit in any gym bag. Take it to any gym, anywhere, any time.' },
      { number: 2, title: 'Lock Anywhere', description: 'Cable loop secures to any bench, rack, or locker room fixture.' },
      { number: 3, title: 'Work Out', description: 'Phone, wallet, keys locked and monitored. Motion alert if anyone touches it.' },
      { number: 4, title: 'Tap to Retrieve', description: 'NFC tap + Face ID. Faster than a combination lock. Cleaner than a shared locker.' },
    ],
    whyVeriSeal: [
      { icon: 'mascot', title: 'No More Gym Lockers', description: 'Bring your own secure storage. No coins, no codes, no shared space.' },
      { icon: 'shield-check', title: 'Motion Alerts', description: 'Tamper notification the instant anyone touches your pod while you\'re on the floor.' },
      { icon: 'verified', title: 'Hygienic', description: 'Your pod, your biometric, your space. No shared keypad surfaces.' },
    ],
  },
};
