import { UserRound, Sparkles } from 'lucide-react'
import SelectCard from './SelectCard'
import { doctor } from '@/data/clinic'

const options = [
  {
    id: 'yin-yin-win',
    title: doctor.name,
    description: doctor.title,
    icon: <UserRound size={18} strokeWidth={1.75} />,
  },
  {
    id: 'no-preference',
    title: 'No preference',
    description: 'Book with the next available provider at the practice.',
    icon: <Sparkles size={18} strokeWidth={1.75} />,
  },
]

export default function DoctorStep({
  value,
  onChange,
}: {
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div>
      <h2 className="font-display text-2xl font-medium text-ink-900">Choose your provider</h2>
      <p className="mt-1.5 text-sm text-ink-500">Select who you'd like to see for this visit.</p>

      <div className="mt-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        {options.map((opt) => (
          <SelectCard
            key={opt.id}
            title={opt.title}
            description={opt.description}
            icon={opt.icon}
            selected={value === opt.id}
            onClick={() => onChange(opt.id)}
          />
        ))}
      </div>
    </div>
  )
}
