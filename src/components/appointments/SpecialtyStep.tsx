import SelectCard from './SelectCard'
import { specialties, services } from '@/data/clinic'
import { getIcon } from '@/lib/icons'

const iconFor: Record<string, string> = {
  'primary-care': 'Stethoscope',
  chronic: 'HeartPulse',
  'sick-visit': 'Thermometer',
  'womens-health': 'HeartHandshake',
  'senior-care': 'Users',
  'follow-up': 'FlaskConical',
}

export default function SpecialtyStep({
  value,
  onChange,
}: {
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div>
      <h2 className="font-display text-2xl font-medium text-ink-900">What's this visit for?</h2>
      <p className="mt-1.5 text-sm text-ink-500">Choose the option that best matches your reason for visiting.</p>

      <div className="mt-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        {specialties.map((s) => {
          const Icon = getIcon(iconFor[s.id] ?? 'Stethoscope')
          const matched = services.find((sv) => sv.slug.includes(s.id.split('-')[0]))
          return (
            <SelectCard
              key={s.id}
              title={s.label}
              description={matched?.summary}
              icon={<Icon size={18} strokeWidth={1.75} />}
              selected={value === s.id}
              onClick={() => onChange(s.id)}
            />
          )
        })}
      </div>
    </div>
  )
}
