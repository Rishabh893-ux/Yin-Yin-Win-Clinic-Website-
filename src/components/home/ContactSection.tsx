import { motion } from 'framer-motion'
import { MapPin, Phone, Printer, Clock, CreditCard, Accessibility, CalendarCheck, ClipboardList } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import { clinic } from '@/data/clinic'
import { buildMapEmbedSrc } from '@/lib/maps'
import exteriorImg from '@/assets/clinic-exterior.jpg'

export default function ContactSection() {
  const mapSrc = buildMapEmbedSrc(clinic.mapQuery)
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(clinic.mapQuery)}`

  return (
    <section id="contact" className="scroll-mt-24 bg-sand-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Contact & Location"
          title="Get in touch"
          description="Call, visit, or book online — we're here seven days a week to help."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr]">
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
        </div>
      </Container>
    </section>
  )
}
