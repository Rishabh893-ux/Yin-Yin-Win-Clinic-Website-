import { useMemo } from 'react'
import { motion } from 'framer-motion'

function buildDays(count: number) {
  const days: { iso: string; weekday: string; day: number; month: string }[] = []
  const today = new Date()
  for (let i = 0; i < count; i++) {
    const d = new Date(today)
    d.setDate(today.getDate() + i)
    days.push({
      iso: d.toISOString().slice(0, 10),
      weekday: d.toLocaleDateString('en-US', { weekday: 'short' }),
      day: d.getDate(),
      month: d.toLocaleDateString('en-US', { month: 'short' }),
    })
  }
  return days
}

export default function DateStep({
  value,
  onChange,
}: {
  value: string
  onChange: (v: string) => void
}) {
  const days = useMemo(() => buildDays(21), [])

  return (
    <div>
      <h2 className="font-display text-2xl font-medium text-ink-900">Pick a date</h2>
      <p className="mt-1.5 text-sm text-ink-500">
        The practice is open seven days a week — choose whatever works best for you.
      </p>

      <div className="mt-7 grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-7">
        {days.map((d, i) => {
          const selected = value === d.iso
          return (
            <motion.button
              key={d.iso}
              type="button"
              onClick={() => onChange(d.iso)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.015 }}
              className={`flex flex-col items-center rounded-xl border py-3.5 transition-all duration-200 ${
                selected
                  ? 'border-teal-700 bg-teal-700 text-white shadow-soft'
                  : 'border-ink-200 bg-white text-ink-700 hover:border-teal-400 hover:bg-teal-50/40'
              }`}
            >
              <span className={`text-[0.65rem] font-medium uppercase tracking-wide ${selected ? 'text-teal-100' : 'text-ink-400'}`}>
                {d.weekday}
              </span>
              <span className="mt-1 text-lg font-semibold">{d.day}</span>
              <span className={`text-[0.65rem] ${selected ? 'text-teal-100' : 'text-ink-400'}`}>{d.month}</span>
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}
