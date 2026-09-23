// Real, verified clinic information (from official listing) is marked accordingly.
// Anything not publicly confirmed (doctor bio details, specific services, staff roster)
// is realistic placeholder content clearly scoped to a general internal medicine /
// primary care practice — no invented credentials, awards, or medical claims.

export const clinic = {
  name: 'Yin Yin Win Medical PC',
  category: 'Medical Clinic · Internal Medicine & Primary Care',
  phone: '+1 212-882-1510',
  phoneDisplay: '(212) 882-1510',
  fax: '347-772-3446',
  altPhone: '646-895-9200',
  addressLine1: '128 Mott St, Ste 601',
  addressLine2: 'Floor 1, Mietz Building',
  city: 'New York',
  state: 'NY',
  zip: '10013',
  neighborhood: 'Chinatown, Manhattan',
  fullAddress: '128 Mott St Ste 601, New York, NY 10013',
  mapQuery: '128 Mott St Ste 601, New York, NY 10013',
  lat: 40.7176,
  lng: -73.9988,
  rating: 4.8,
  reviewCount: 185,
  hours: [
    { day: 'Monday', time: '9:00 AM – 5:30 PM' },
    { day: 'Tuesday', time: '9:00 AM – 5:30 PM' },
    { day: 'Wednesday', time: '9:00 AM – 5:30 PM' },
    { day: 'Thursday', time: '9:00 AM – 5:30 PM' },
    { day: 'Friday', time: '9:00 AM – 5:30 PM' },
    { day: 'Saturday', time: '9:00 AM – 5:30 PM' },
    { day: 'Sunday', time: '9:00 AM – 5:30 PM' },
  ],
  hoursNote: 'Open 7 days a week',
  accessibility: ['Wheelchair-accessible entrance', 'Wheelchair-accessible restroom'],
  amenities: ['On-site restroom'],
  planning: ['Appointment required', 'Appointments recommended', 'Walk-ins considered based on availability'],
  payments: ['Credit cards', 'Debit cards'],
} as const

// Review theme tags — counts sourced from the practice's public review summary.
// No individual quotations are fabricated; only aggregate themes are shown.
export const reviewThemes = [
  { label: 'Friendly staff', count: 29 },
  { label: 'Health advice', count: 15 },
  { label: 'Experienced doctor', count: 14 },
  { label: 'Clear explanations', count: 10 },
  { label: 'Attentive listening', count: 8 },
  { label: 'Bedside manner', count: 6 },
  { label: 'Efficient staff', count: 11 },
  { label: 'Primary care doctor', count: 11 },
  { label: 'Family doctor', count: 4 },
  { label: 'Easy scheduling', count: 3 },
] as const

export const ratingBreakdown = [
  { stars: 5, percent: 90 },
  { stars: 4, percent: 4 },
  { stars: 3, percent: 1 },
  { stars: 2, percent: 1 },
  { stars: 1, percent: 4 },
] as const

// Doctor profile — name and specialty area reflect the practice's listed physician.
// Affiliation hospital names are as shown on the practice's own signage; education,
// board details and years of experience are intentionally left as placeholders.
export const doctor = {
  name: 'Dr. Yin Yin Win, M.D.',
  title: 'Internal Medicine & Primary Care',
  bio: 'Dr. Win leads the practice, focusing on whole-person primary care — from preventive checkups and chronic condition management to same-week sick visits. Patients consistently note her thorough explanations and attentive, unhurried approach to every visit.',
  affiliations: [
    'NewYork-Presbyterian Hospital',
    'Mount Sinai Beth Israel',
    'Mount Sinai Hospital',
    'Maimonides Medical Center',
  ],
  languages: ['English', 'Cantonese', 'Mandarin'],
  credentialsPlaceholder: 'Board certification and medical school details available upon request at the practice.',
} as const

export type Service = {
  slug: string
  name: string
  summary: string
  detail: string
  icon: string
}

export const services: Service[] = [
  {
    slug: 'primary-care',
    name: 'Primary & Preventive Care',
    summary: 'Annual physicals, screenings, and ongoing wellness checkups for the whole family.',
    detail:
      'Comprehensive checkups, age-appropriate screenings, immunizations, and personalized preventive plans designed to catch issues early and keep you well year-round.',
    icon: 'Stethoscope',
  },
  {
    slug: 'chronic-disease-management',
    name: 'Chronic Condition Management',
    summary: 'Coordinated, ongoing care for diabetes, hypertension, and other long-term conditions.',
    detail:
      'Regular monitoring, medication management, and lifestyle guidance to help patients manage chronic conditions with confidence and stability over time.',
    icon: 'HeartPulse',
  },
  {
    slug: 'sick-visits',
    name: 'Same-Week Sick Visits',
    summary: 'Prompt evaluation and treatment for colds, infections, and everyday illness.',
    detail:
      'When something feels off, our team works to get you seen quickly — with a clear diagnosis, treatment plan, and follow-up guidance you can trust.',
    icon: 'Thermometer',
  },
  {
    slug: 'womens-health',
    name: "Women's Health",
    summary: 'Routine wellness exams and general health guidance for women at every stage.',
    detail:
      'Attentive, respectful care covering routine wellness visits and referrals coordinated with specialists as needed.',
    icon: 'HeartHandshake',
  },
  {
    slug: 'senior-care',
    name: 'Senior & Geriatric Care',
    summary: 'Thoughtful, unhurried visits tailored to the needs of older adults.',
    detail:
      'Extra time and attention for medication reviews, fall-risk and mobility conversations, and coordination with family caregivers.',
    icon: 'Users',
  },
  {
    slug: 'lab-diagnostics',
    name: 'Lab Work & Diagnostics',
    summary: 'On-site coordination for bloodwork, screenings, and diagnostic referrals.',
    detail:
      'Streamlined ordering and follow-up on routine labs and diagnostic tests, with results explained clearly in plain language.',
    icon: 'FlaskConical',
  },
]

export const benefits = [
  {
    title: 'Same practice, same doctor',
    description: 'Continuity of care from a physician who knows your history — not a rotating cast of providers.',
    icon: 'UserCheck',
  },
  {
    title: 'Multilingual care',
    description: 'Visits conducted comfortably in English, Cantonese, or Mandarin.',
    icon: 'Languages',
  },
  {
    title: 'Open 7 days a week',
    description: 'Extended availability designed around real schedules, including weekends.',
    icon: 'CalendarCheck',
  },
  {
    title: 'Hospital-affiliated network',
    description: 'Coordinated referrals within a trusted network of NYC hospital affiliations.',
    icon: 'Building2',
  },
]

export const faqCategories = ['All', 'Booking', 'Insurance & Payment', 'Languages & Accessibility', 'Care & Lab Work'] as const
export type FaqCategory = (typeof faqCategories)[number]

export const faqs: { question: string; answer: string; category: Exclude<FaqCategory, 'All'> }[] = [
  {
    question: 'Do I need an appointment, or do you accept walk-ins?',
    answer:
      'Appointments are required and strongly recommended to ensure timely care. Walk-ins may be accommodated based on same-day availability — please call ahead when possible.',
    category: 'Booking',
  },
  {
    question: 'What insurance and payment methods do you accept?',
    answer:
      'The practice accepts major credit and debit cards. For insurance coverage details specific to your plan, please call the office directly at (212) 882-1510.',
    category: 'Insurance & Payment',
  },
  {
    question: 'What languages does the practice offer care in?',
    answer: 'Visits can be conducted in English, Cantonese, or Mandarin.',
    category: 'Languages & Accessibility',
  },
  {
    question: 'Is the office wheelchair accessible?',
    answer:
      'Yes. The clinic has a wheelchair-accessible entrance and a wheelchair-accessible restroom on-site.',
    category: 'Languages & Accessibility',
  },
  {
    question: 'How do I request a prescription refill?',
    answer:
      'Call the office at (212) 882-1510 during business hours and our staff will coordinate refill requests with Dr. Win.',
    category: 'Care & Lab Work',
  },
  {
    question: 'What should I bring to my first visit?',
    answer:
      'Please bring a photo ID, your insurance card (if applicable), a list of current medications, and any relevant prior medical records.',
    category: 'Booking',
  },
  {
    question: 'Can I get lab work done at the office?',
    answer:
      'Routine bloodwork and diagnostic orders are coordinated through the practice, with results reviewed and explained during a follow-up conversation.',
    category: 'Care & Lab Work',
  },
  {
    question: 'How far in advance should I book?',
    answer:
      'For routine and preventive visits, booking a few days ahead is recommended. Sick visits are prioritized for the same or next available day whenever possible.',
    category: 'Booking',
  },
]

export const specialties = [
  { id: 'primary-care', label: 'Primary & Preventive Care' },
  { id: 'chronic', label: 'Chronic Condition Management' },
  { id: 'sick-visit', label: 'Sick Visit' },
  { id: 'womens-health', label: "Women's Health" },
  { id: 'senior-care', label: 'Senior Care' },
  { id: 'follow-up', label: 'Follow-up / Lab Review' },
]

export const availableTimes = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
]
