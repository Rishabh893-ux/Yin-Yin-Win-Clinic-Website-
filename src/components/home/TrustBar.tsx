import { motion } from 'framer-motion'
import { CalendarDays, Languages, ShieldCheck, Building2 } from 'lucide-react'
import Container from '../ui/Container'

const items = [
  { icon: CalendarDays, label: 'Open 7 days a week' },
  { icon: Languages, label: 'English · Cantonese · Mandarin' },
  { icon: ShieldCheck, label: 'Wheelchair accessible' },
  { icon: Building2, label: 'NYC hospital affiliations' },
]

export default function TrustBar() {
  return (
    <div className="border-y border-ink-100 bg-white/60">
      <Container className="grid grid-cols-2 gap-6 py-7 sm:grid-cols-4 sm:gap-4">
        {items.map(({ icon: Icon, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="flex items-center gap-3"
          >
            <Icon size={18} className="shrink-0 text-teal-700" />
            <span className="text-sm font-medium text-ink-600">{label}</span>
          </motion.div>
        ))}
      </Container>
    </div>
  )
}
