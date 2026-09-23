import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function SelectCard({
  title,
  description,
  icon,
  selected,
  onClick,
}: {
  title: string
  description?: string
  icon?: ReactNode
  selected: boolean
  onClick: () => void
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      className={`relative flex w-full items-start gap-4 rounded-2xl border p-5 text-left transition-all duration-200 ${
        selected
          ? 'border-teal-700 bg-teal-50/60 shadow-sm ring-1 ring-teal-700'
          : 'border-ink-200 bg-white hover:border-teal-400 hover:bg-teal-50/30'
      }`}
    >
      {icon && (
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
            selected ? 'bg-teal-700 text-white' : 'bg-ink-50 text-ink-600'
          }`}
        >
          {icon}
        </span>
      )}
      <span className="flex-1">
        <span className="block font-medium text-ink-900">{title}</span>
        {description && <span className="mt-0.5 block text-sm text-ink-500">{description}</span>}
      </span>
      <span
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors ${
          selected ? 'border-teal-700 bg-teal-700 text-white' : 'border-ink-300 text-transparent'
        }`}
      >
        <Check size={12} />
      </span>
    </motion.button>
  )
}
