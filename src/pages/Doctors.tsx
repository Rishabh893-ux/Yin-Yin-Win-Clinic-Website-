import { motion } from 'framer-motion'
import { CalendarPlus, Languages, Stethoscope, MapPin } from 'lucide-react'
import PageTransition from '../components/ui/PageTransition'
import PageHeader from '../components/shared/PageHeader'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import Seo from '../components/shared/Seo'
import DoctorTabs from '../components/shared/DoctorTabs'
import DoctorAvatar from '../components/shared/DoctorAvatar'
import { doctor, reviewThemes } from '@/data/clinic'
import corridorImg from '@/assets/clinic-corridor-dark.jpg'

const doctorThemeLabels = [
  'Experienced doctor',
  'Health advice',
  'Clear explanations',
  'Attentive listening',
  'Bedside manner',
]
const doctorThemes = reviewThemes.filter((t) => doctorThemeLabels.includes(t.label))

export default function Doctors() {
  return (
    <PageTransition>
      <Seo
        title="Meet Dr. Yin Yin Win | Yin Yin Win Medical PC"
        description="Dr. Yin Yin Win, M.D., leads internal medicine and primary care at Yin Yin Win Medical PC, affiliated with NewYork-Presbyterian, Mount Sinai, and Maimonides Medical Center."
      />
      <PageHeader
        eyebrow="Our Physician"
        title="Meet Dr. Yin Yin Win"
        description="Leading internal medicine and primary care at the practice, with a reputation for thorough, patient-centered visits."
        image={corridorImg}
      />

      <section className="py-20 sm:py-28">
        <Container className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <DoctorAvatar size={132} className="mx-auto" />

            <h1 className="mt-7 text-balance font-display text-3xl font-medium text-ink-900 sm:text-4xl">
              {doctor.name}
            </h1>
            <p className="mt-2 text-lg font-medium text-teal-700">{doctor.title}</p>

            <p className="mx-auto mt-6 text-[1.05rem] leading-relaxed text-ink-500">{doctor.bio}</p>

            <div className="mt-7 flex flex-wrap justify-center gap-2.5">
              {doctorThemes.map((theme) => (
                <span
                  key={theme.label}
                  className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-3.5 py-2 text-sm text-ink-700"
                >
                  {theme.label}
                  <span className="rounded-full bg-teal-50 px-2 py-0.5 text-xs font-semibold text-teal-700">
                    {theme.count}
                  </span>
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <div className="flex items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-2 text-sm text-ink-600">
                <Stethoscope size={16} className="text-teal-600" />
                Internal medicine &amp; primary care
              </div>
              <div className="flex items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-2 text-sm text-ink-600">
                <Languages size={16} className="text-teal-600" />
                {doctor.languages.join(' · ')}
              </div>
              <div className="flex items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-2 text-sm text-ink-600">
                <MapPin size={16} className="text-teal-600" />
                128 Mott St Ste 601
              </div>
            </div>

            <Button to="/appointments" size="lg" className="mt-9" icon={<CalendarPlus size={18} />}>
              Book with Dr. Win
            </Button>
          </motion.div>
        </Container>
      </section>

      <section className="bg-sand-50 py-20 sm:py-28">
        <Container className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <DoctorTabs />
          </motion.div>
        </Container>
      </section>
    </PageTransition>
  )
}
