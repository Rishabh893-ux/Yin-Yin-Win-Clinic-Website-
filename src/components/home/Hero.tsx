import { motion, useReducedMotion } from 'framer-motion'
import { CalendarPlus, Phone, ShieldCheck, MapPin, ChevronDown, Stethoscope } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import RatingStars from '../ui/RatingStars'
import CountUp from '../shared/CountUp'
import MagneticButton from '../ui/MagneticButton'
import OpenStatus from '../shared/OpenStatus'
import { clinic } from '@/data/clinic'

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-[#fbfaf7] pb-16 pt-14 sm:pb-24 sm:pt-16 lg:pt-20">
      <div className="pointer-events-none absolute -top-40 right-[-15%] h-[32rem] w-[32rem] rounded-full bg-teal-100/70 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-32 left-[-10%] h-80 w-80 rounded-full bg-sand-200/60 blur-[100px]" />

      <Container className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <div className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />
              Internal Medicine &amp; Primary Care · Chinatown, NYC
            </div>
            <OpenStatus />
          </div>

          <h1 className="mt-5 text-balance text-[2.6rem] font-medium leading-[1.08] text-ink-900 sm:text-6xl">
            Attentive, unhurried
            <span className="block italic text-teal-700">primary care</span>
            on Mott Street.
          </h1>

          <p className="mt-6 max-w-lg text-[1.08rem] leading-relaxed text-ink-500">
            Yin Yin Win Medical PC has spent years earning the trust of the Chinatown
            community — one thorough visit at a time. Preventive checkups, chronic
            care, and same-week sick visits, from a doctor who remembers your story.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <MagneticButton>
              <Button to="/appointments" size="lg" icon={<CalendarPlus size={18} />}>
                Book Appointment
              </Button>
            </MagneticButton>
            <Button
              href={`tel:${clinic.phone.replace(/[^\d+]/g, '')}`}
              variant="outline"
              size="lg"
              icon={<Phone size={18} />}
            >
              Call the Clinic
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-ink-100 pt-7">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display text-2xl font-medium text-ink-900">{clinic.rating}</span>
                <RatingStars rating={clinic.rating} />
              </div>
              <p className="mt-1 text-xs text-ink-400">{clinic.reviewCount} Google reviews</p>
            </div>
            <div className="h-9 w-px bg-ink-100" />
            <div className="flex items-center gap-2 text-sm text-ink-500">
              <ShieldCheck size={18} className="text-teal-600" />
              Wheelchair accessible
            </div>
            <div className="flex items-center gap-2 text-sm text-ink-500">
              <MapPin size={18} className="text-teal-600" />
              {clinic.neighborhood}
            </div>
          </div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-teal-700 via-teal-800 to-ink-900 p-8 shadow-lift sm:p-10">
            <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.06]" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -bottom-16 -left-10 h-52 w-52 rounded-full border border-white/10" />

            <div className="relative flex items-center justify-between">
              <span className="eyebrow text-teal-200">Practice Snapshot</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
                <Stethoscope size={18} strokeWidth={1.75} />
              </span>
            </div>

            <p className="relative mt-6 font-display text-2xl leading-snug text-white">
              Dr. Yin Yin Win, M.D.
            </p>
            <p className="relative mt-1 text-sm text-teal-200">Internal Medicine · 128 Mott St, Ste 601</p>

            <div className="relative mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                <CountUp value={clinic.rating} decimals={1} suffix="★" className="font-display text-2xl text-white" />
                <p className="mt-1 text-xs text-teal-200">{clinic.reviewCount} reviews</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                <p className="font-display text-2xl text-white">7 / 7</p>
                <p className="mt-1 text-xs text-teal-200">Days a week</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                <CountUp value={3} className="font-display text-2xl text-white" />
                <p className="mt-1 text-xs text-teal-200">Languages spoken</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                <CountUp value={4} className="font-display text-2xl text-white" />
                <p className="mt-1 text-xs text-teal-200">Hospital affiliations</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 -mt-6 ml-6 hidden max-w-[13rem] rounded-2xl border border-ink-100 bg-white p-4 shadow-card sm:block"
          >
            <div className="flex items-center gap-2">
              <RatingStars rating={5} size={13} />
            </div>
            <p className="mt-2 text-xs leading-relaxed text-ink-500">
              "Friendly staff" and "clear explanations" are the most common words
              patients use in their reviews.
            </p>
          </motion.div>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="pointer-events-none relative mt-2 hidden justify-center sm:flex"
        aria-hidden="true"
      >
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1 text-ink-300"
        >
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.14em]">Scroll</span>
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}
