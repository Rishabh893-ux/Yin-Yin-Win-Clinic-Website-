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
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative mx-auto w-full max-w-sm lg:mx-0">
          <div className="aspect-[4/5] w-full shadow-card">
            <DoctorAvatar />
          </div>
          <div className="absolute -bottom-5 -right-5 rounded-2xl border border-ink-100 bg-white px-5 py-4 shadow-card">
            <p className="font-display text-xl text-ink-900">4 Hospitals</p>
            <p className="text-xs text-ink-400">Affiliated network</p>
          </div>
        </div>

        <div>
          <p className="eyebrow">Meet Your Doctor</p>
          <h2 className="mt-4 text-balance text-3xl font-medium leading-[1.15] text-ink-900 sm:text-4xl">
            {doctor.name}
          </h2>
          <p className="mt-1 text-teal-700 font-medium">{doctor.title}</p>
          <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-ink-500">{doctor.bio}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-2 text-sm text-ink-600">
              <Languages size={16} className="text-teal-600" />
              {doctor.languages.join(' · ')}
            </div>
            <div className="flex items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-2 text-sm text-ink-600">
              <Building2 size={16} className="text-teal-600" />
              {doctor.affiliations.length} hospital affiliations
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {doctorThemes.map((theme) => (
              <span
                key={theme.label}
                className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3 py-1.5 text-xs font-medium text-teal-800"
              >
                {theme.label} · {theme.count}
              </span>
            ))}
          </div>

          <Button to="/doctors" variant="secondary" className="mt-8" icon={<ArrowRight size={16} />}>
            Learn more about Dr. Win
          </Button>
        </div>
      </Container>
    </section>
  )
}
