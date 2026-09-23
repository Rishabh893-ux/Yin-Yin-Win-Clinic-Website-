import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import Container from '../ui/Container'
import { services } from '@/data/clinic'
import { getIcon } from '@/lib/icons'
import examRoomImg from '@/assets/exam-room.jpg'

export default function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="What We Treat"
          title="Comprehensive care, close to home"
          description="From annual checkups to chronic condition management, our practice covers the everyday health needs of the whole family."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="my-12 overflow-hidden rounded-[2rem] border border-ink-100 bg-white p-2 shadow-sm sm:p-3"
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

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {services.map((service, i) => {
            const Icon = getIcon(service.icon)
            return (
              <motion.article
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
                className="flex gap-5 rounded-2xl border border-ink-100 bg-white p-7 transition-shadow hover:shadow-card"
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
      </Container>
    </section>
  )
}
