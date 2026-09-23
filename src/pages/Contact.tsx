import { motion } from 'framer-motion'
import { MapPin, Phone, Printer, Clock, CreditCard, Accessibility, CalendarCheck, ClipboardList } from 'lucide-react'
import PageTransition from '../components/ui/PageTransition'
import PageHeader from '../components/shared/PageHeader'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import Seo from '../components/shared/Seo'
import { clinic } from '@/data/clinic'
import { buildMapEmbedSrc } from '@/lib/maps'
import exteriorImg from '@/assets/clinic-exterior.jpg'
import corridorImg from '@/assets/clinic-corridor-dark.jpg'

export default function Contact() {
  const mapSrc = buildMapEmbedSrc(clinic.mapQuery)
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(clinic.mapQuery)}`

  return (
    <PageTransition>
      <Seo
        title="Contact & Location | Yin Yin Win Medical PC"
        description="Visit Yin Yin Win Medical PC at 128 Mott St Ste 601, New York, NY 10013. Open 7 days a week, 9:00 AM–5:30 PM. Wheelchair accessible, credit & debit cards accepted."
      />
      <PageHeader
        eyebrow="Contact & Location"
        title="Get in touch"
        description="Call, visit, or book online — we're here seven days a week to help."
        image={corridorImg}
      />

      <section className="py-20 sm:py-28">
        <Container className="grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <div className="overflow-hidden rounded-2xl border border-ink-100 bg-white p-2 shadow-sm">
              <img
                src={exteriorImg}
                alt="The clinic's street-level entrance"
                className="h-40 w-full rounded-xl object-cover sm:h-48"
              />
            </div>

            <div className="rounded-2xl border border-ink-100 bg-white p-6">
              <div className="flex items-start gap-3.5">
                <MapPin size={20} className="mt-0.5 shrink-0 text-teal-700" />
                <div>
                  <h3 className="font-medium text-ink-900">Address</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-500">
                    {clinic.addressLine1}
                    <br />
                    {clinic.addressLine2}
                    <br />
                    {clinic.city}, {clinic.state} {clinic.zip}
                  </p>
                  <a
                    href={directionsHref}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline mt-2 inline-block text-sm font-medium text-teal-700"
                  >
                    Get directions →
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-ink-100 bg-white p-6">
              <div className="flex items-start gap-3.5">
                <Phone size={20} className="mt-0.5 shrink-0 text-teal-700" />
                <div>
                  <h3 className="font-medium text-ink-900">Phone &amp; Fax</h3>
                  <a
                    href={`tel:${clinic.phone.replace(/[^\d+]/g, '')}`}
                    className="mt-1 block text-sm text-ink-600 hover:text-teal-700"
                  >
                    {clinic.phoneDisplay}
                  </a>
                  <p className="flex items-center gap-1.5 text-sm text-ink-500">
                    <Printer size={14} /> Fax: {clinic.fax}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-ink-100 bg-white p-6">
              <div className="flex items-start gap-3.5">
                <Clock size={20} className="mt-0.5 shrink-0 text-teal-700" />
                <div className="w-full">
                  <h3 className="font-medium text-ink-900">Hours</h3>
                  <p className="mt-0.5 text-xs text-teal-700">{clinic.hoursNote}</p>
                  <ul className="mt-2.5 divide-y divide-ink-100">
                    {clinic.hours.map((h) => (
                      <li key={h.day} className="flex justify-between py-1.5 text-sm">
                        <span className="text-ink-500">{h.day}</span>
                        <span className="font-medium text-ink-800">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <Button to="/appointments" size="lg" className="w-full" icon={<CalendarCheck size={18} />}>
              Book Appointment
            </Button>
          </motion.div>

          {/* Map + amenities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="overflow-hidden rounded-2xl border border-ink-100 shadow-sm">
              <iframe
                title="Yin Yin Win Medical PC location map"
                src={mapSrc}
                className="h-[360px] w-full sm:h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-ink-100 bg-white p-6">
                <div className="flex items-center gap-2.5 text-ink-900">
                  <Accessibility size={18} className="text-teal-700" />
                  <h3 className="font-medium">Accessibility</h3>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {clinic.accessibility.map((a) => (
                    <li key={a} className="flex items-center gap-2 text-sm text-ink-600">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                      {a}
                    </li>
                  ))}
                  {clinic.amenities.map((a) => (
                    <li key={a} className="flex items-center gap-2 text-sm text-ink-600">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-ink-100 bg-white p-6">
                <div className="flex items-center gap-2.5 text-ink-900">
                  <CreditCard size={18} className="text-teal-700" />
                  <h3 className="font-medium">Payments &amp; Booking</h3>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {clinic.payments.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-ink-600">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                      {p} accepted
                    </li>
                  ))}
                  {clinic.planning.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-ink-600">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border border-ink-100 bg-white p-6">
              <div className="flex items-center gap-2.5 text-ink-900">
                <ClipboardList size={18} className="text-teal-700" />
                <h3 className="font-medium">What to bring to your first visit</h3>
              </div>
              <ul className="mt-3 space-y-1.5">
                {['Photo ID', 'Insurance card (if applicable)', 'A list of current medications', 'Any relevant prior medical records'].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-ink-600">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </motion.div>
        </Container>
      </section>
    </PageTransition>
  )
}
