import { ArrowRight, Languages, Building2 } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import DoctorAvatar from '../shared/DoctorAvatar'
import { doctor, reviewThemes } from '@/data/clinic'

const doctorThemeLabels = ['Experienced doctor', 'Clear explanations', 'Attentive listening']
const doctorThemes = reviewThemes.filter((t) => doctorThemeLabels.includes(t.label))

export default function DoctorPreview() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="mx-auto max-w-2xl text-center">
        <DoctorAvatar size={112} className="mx-auto" />

        <p className="eyebrow mt-6 justify-center">Meet Your Doctor</p>
        <h2 className="mt-3 text-balance text-3xl font-medium leading-[1.15] text-ink-900 sm:text-4xl">
          {doctor.name}
        </h2>
        <p className="mt-1 font-medium text-teal-700">{doctor.title}</p>
        <p className="mx-auto mt-5 max-w-xl text-[1.02rem] leading-relaxed text-ink-500">{doctor.bio}</p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {doctorThemes.map((theme) => (
            <span
              key={theme.label}
              className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3 py-1.5 text-xs font-medium text-teal-800"
            >
              {theme.label} · {theme.count}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-2 text-sm text-ink-600">
            <Languages size={16} className="text-teal-600" />
            {doctor.languages.join(' · ')}
          </div>
          <div className="flex items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-2 text-sm text-ink-600">
            <Building2 size={16} className="text-teal-600" />
            {doctor.affiliations.length} hospital affiliations
          </div>
        </div>

        <Button to="/doctors" variant="secondary" className="mt-8" icon={<ArrowRight size={16} />}>
          Learn more about Dr. Win
        </Button>
      </Container>
    </section>
  )
}
