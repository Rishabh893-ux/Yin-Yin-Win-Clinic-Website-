import { motion } from 'framer-motion'
import { CalendarPlus } from 'lucide-react'
import PageTransition from '../components/ui/PageTransition'
import PageHeader from '../components/shared/PageHeader'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import Seo from '../components/shared/Seo'
import { services } from '@/data/clinic'
import { getIcon } from '@/lib/icons'
import examRoomImg from '@/assets/exam-room.jpg'
import corridorImg from '@/assets/clinic-corridor-dark.jpg'

export default function Services() {
  return (
    <PageTransition>
      <Seo
        title="Services | Yin Yin Win Medical PC"
        description="Primary care, chronic condition management, sick visits, women's health, senior care, and lab diagnostics at Yin Yin Win Medical PC in Chinatown, NYC."
      />
      <PageHeader
        eyebrow="Services"
        title="Care for every stage of life"
        description="A full range of internal medicine and primary care services, delivered with the same attentive, unhurried approach at every visit."
        image={corridorImg}
      />

      <section className="py-20 sm:py-28">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 overflow-hidden rounded-[2rem] border border-ink-100 bg-white p-2 shadow-sm sm:p-3"
          >
            <img
              src={examRoomImg}
              alt="A quiet exam room, ready for a visit"
              className="h-48 w-full rounded-[1.5rem] object-cover sm:h-64"
            />
            <div className="px-4 pb-2 pt-4 sm:px-5">
              <p className="eyebrow">The Space</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                Every visit takes place in a calm, unhurried exam room — never rushed, always ready.
              </p>
            </div>
          </motion.div>

          <div className="mb-10 flex flex-wrap gap-2.5">
            {services.map((service) => (
              <a
                key={service.slug}
                href={`#${service.slug}`}
                className="rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-600 transition-colors hover:border-teal-400 hover:text-teal-800"
              >
                {service.name}
              </a>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {services.map((service, i) => {
              const Icon = getIcon(service.icon)
              return (
                <motion.article
                  key={service.slug}
                  id={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
                  className="flex scroll-mt-28 gap-5 rounded-2xl border border-ink-100 bg-white p-7 transition-shadow hover:shadow-card"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                    <Icon size={22} strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-medium text-ink-900">{service.name}</h3>
                    <p className="mt-2 text-[0.925rem] leading-relaxed text-ink-500">{service.detail}</p>
                  </div>
                </motion.article>
              )
            })}
          </div>

          <div className="mt-16 flex flex-col items-center gap-4 rounded-[2rem] bg-sand-50 px-8 py-12 text-center">
            <h2 className="font-display text-2xl font-medium text-ink-900 sm:text-3xl">
              Not sure which visit type you need?
            </h2>
            <p className="max-w-md text-[0.98rem] text-ink-500">
              Our team can help match you with the right kind of visit when you call or book online.
            </p>
            <Button to="/appointments" size="lg" className="mt-3" icon={<CalendarPlus size={18} />}>
              Book Appointment
            </Button>
          </div>
        </Container>
      </section>
    </PageTransition>
  )
}
