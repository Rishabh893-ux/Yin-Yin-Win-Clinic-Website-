import { motion } from 'framer-motion'
import { HeartHandshake, Users, Clock3, Languages, ArrowRight } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import CountUp from '../shared/CountUp'
import { reviewThemes } from '@/data/clinic'
import waitingRoomImg from '@/assets/waiting-room-reception.jpg'

const practiceThemeLabels = ['Friendly staff', 'Efficient staff', 'Easy scheduling', 'Family doctor']
const practiceThemes = reviewThemes.filter((t) => practiceThemeLabels.includes(t.label))

const values = [
  {
    icon: HeartHandshake,
    title: 'Patient-first, always',
    description: 'Every visit is unhurried — time to ask questions and truly understand your care plan.',
  },
  {
    icon: Users,
    title: 'Rooted in community',
    description: 'A neighborhood practice serving Chinatown families for years, built on trust and word of mouth.',
  },
  {
    icon: Languages,
    title: 'Care without a language barrier',
    description: 'Visits comfortably conducted in English, Cantonese, or Mandarin.',
  },
  {
    icon: Clock3,
    title: 'Available when you need us',
    description: 'Open seven days a week, with same-week sick visits whenever possible.',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-sand-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="About the Practice"
          title="A neighborhood practice, built on trust"
          description="Yin Yin Win Medical PC has been a fixture of Chinatown's Mott Street for years — a place where patients are known by name, not just chart number."
        />

        <div className="mt-12 grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow">Our Story</p>
            <h3 className="mt-4 text-balance font-display text-2xl font-medium leading-[1.2] text-ink-900 sm:text-3xl">
              Internal medicine, practiced the way it should be
            </h3>
            <div className="mt-6 space-y-4 text-[1.02rem] leading-relaxed text-ink-500">
              <p>
                Located on the first floor of the Mietz Building at 128 Mott Street, the
                practice was founded on a simple idea: that good primary care starts with
                genuinely listening to patients. That approach has earned the trust of the
                community, reflected in a 4.8-star rating across 185 Google reviews.
              </p>
              <p>
                As a practice affiliated with several major NYC hospital systems, we're able
                to coordinate referrals and specialist care smoothly when it's needed, while
                keeping your primary relationship centered here, with a doctor who knows you.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {practiceThemes.map((theme) => (
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

            <a href="#doctor" className="inline-block">
              <Button variant="outline" className="mt-7" icon={<ArrowRight size={16} />}>
                Meet Dr. Win
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-teal-800 to-ink-900 p-9 text-white"
          >
            <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.06]" />
            <p className="eyebrow relative text-teal-300">By The Numbers</p>
            <div className="relative mt-6 grid grid-cols-2 gap-6">
              <div>
                <CountUp value={4.8} decimals={1} className="font-display text-4xl" />
                <p className="mt-1 text-sm text-teal-200">Average rating</p>
              </div>
              <div>
                <CountUp value={185} suffix="+" className="font-display text-4xl" />
                <p className="mt-1 text-sm text-teal-200">Patient reviews</p>
              </div>
              <div>
                <CountUp value={7} className="font-display text-4xl" />
                <p className="mt-1 text-sm text-teal-200">Days open weekly</p>
              </div>
              <div>
                <CountUp value={4} className="font-display text-4xl" />
                <p className="mt-1 text-sm text-teal-200">Hospital affiliations</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 grid grid-cols-1 items-center gap-8 overflow-hidden rounded-[2rem] border border-ink-100 bg-white p-2 shadow-sm sm:grid-cols-[1fr_1.3fr] sm:p-3"
        >
          <img
            src={waitingRoomImg}
            alt="A calm, plant-filled waiting area"
            className="h-56 w-full rounded-[1.5rem] object-cover sm:h-72"
          />
          <div className="px-4 pb-4 sm:pl-0 sm:pr-8">
            <p className="eyebrow">The Space</p>
            <p className="mt-3 text-[1.02rem] leading-relaxed text-ink-500">
              A calm, unhurried atmosphere is part of the care — comfortable seating,
              natural light, and a pace that never feels rushed, from the waiting room
              to the exam room.
            </p>
          </div>
        </motion.div>

        <div className="mt-16">
          <SectionHeading eyebrow="What We Value" title="Principles behind every visit" align="center" />
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flex gap-4 rounded-2xl border border-ink-100 bg-white p-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                  <v.icon size={20} strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="font-display text-lg text-ink-900">{v.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{v.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
