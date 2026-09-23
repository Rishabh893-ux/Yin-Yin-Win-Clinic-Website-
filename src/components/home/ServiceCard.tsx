import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import type { Service } from '@/data/clinic'
import { getIcon } from '@/lib/icons'

export default function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  const Icon = getIcon(service.icon)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        to={`/services#${service.slug}`}
        className="group relative flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
      >
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition-colors group-hover:bg-teal-700 group-hover:text-white">
            <Icon size={22} strokeWidth={1.75} />
          </div>
          <ArrowUpRight
            size={18}
            className="text-ink-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal-700"
          />
        </div>
        <h3 className="mt-5 font-display text-lg font-medium text-ink-900">{service.name}</h3>
        <p className="mt-2.5 text-[0.925rem] leading-relaxed text-ink-500">{service.summary}</p>
      </Link>
    </motion.div>
  )
}
