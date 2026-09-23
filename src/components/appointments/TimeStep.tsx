import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'
import { availableTimes } from '@/data/clinic'

export default function TimeStep({
  value,
  onChange,
  date,
}: {
  value: string
  onChange: (v: string) => void
  date: string
}) {
  const formattedDate = date
    ? new Date(`${date}T00:00:00`).toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
      })
    : ''

  return (
    <div>
      <h2 className="font-display text-2xl font-medium text-ink-900">Pick a time</h2>
      <p className="mt-1.5 flex items-center gap-1.5 text-sm text-ink-500">
        <Clock size={14} />
        Available slots for {formattedDate}
      </p>

      <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {availableTimes.map((t, i) => {
          const selected = value === t
          return (
            <motion.button
              key={t}
              type="button"
              onClick={() => onChange(t)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.02 }}
              className={`rounded-xl border py-3 text-sm font-medium transition-all duration-200 ${
                selected
                  ? 'border-teal-700 bg-teal-700 text-white shadow-soft'
                  : 'border-ink-200 bg-white text-ink-700 hover:border-teal-400 hover:bg-teal-50/40'
              }`}
            >
              {t}
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}
