import { clinic, doctor } from '@/data/clinic'

/** JSON-LD structured data for the practice, built only from real, provided clinic facts. */
export function buildMedicalBusinessSchema(origin: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: clinic.name,
    url: origin,
    telephone: clinic.phone,
    faxNumber: clinic.fax,
    address: {
      '@type': 'PostalAddress',
      streetAddress: clinic.addressLine1,
      addressLocality: clinic.city,
      addressRegion: clinic.state,
      postalCode: clinic.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: clinic.lat,
      longitude: clinic.lng,
    },
    openingHoursSpecification: clinic.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.day,
      opens: '09:00',
      closes: '17:30',
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: clinic.rating,
      reviewCount: clinic.reviewCount,
    },
    paymentAccepted: clinic.payments.join(', '),
    isAccessibleForFree: false,
    medicalSpecialty: 'Internal Medicine',
    employee: {
      '@type': 'Physician',
      name: doctor.name,
      medicalSpecialty: 'Internal Medicine',
      knowsLanguage: doctor.languages,
    },
  } as const
}
