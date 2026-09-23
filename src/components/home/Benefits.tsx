import { motion } from 'framer-motion'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import { benefits } from '@/data/clinic'
import { getIcon } from '@/lib/icons'
import { HeartHandshake } from 'lucide-react'

export default function Benefits() {
  return (
    <section className="bg-ink-950 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why Patients Stay"
          title="Care built around continuity, not turnover"
          light
        />

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => {
            const Icon = getIcon(b.icon, HeartHandshake)
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group bg-ink-950 p-7 transition-colors duration-300 hover:bg-ink-900"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-teal-400 transition-colors duration-300 group-hover:bg-teal-400 group-hover:text-ink-950">
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-display text-lg text-white">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">{b.description}</p>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
