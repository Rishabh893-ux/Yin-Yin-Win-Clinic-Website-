import { CheckCircle2, Calendar, Clock, UserRound, Stethoscope, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from '../ui/Button'
import { clinic, specialties } from '@/data/clinic'
import type { BookingData } from './types'

export default function ConfirmationStep({
  data,
  reference,
}: {
  data: BookingData
  reference: string
}) {
  const specialtyLabel = specialties.find((s) => s.id === data.specialty)?.label ?? data.specialty
  const doctorLabel = data.doctor === 'no-preference' ? 'No preference' : 'Dr. Yin Yin Win'
  const formattedDate = data.date
    ? new Date(`${data.date}T00:00:00`).toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : ''

  return (
    <div className="text-center">
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-50 text-teal-700"
      >
        <CheckCircle2 size={32} strokeWidth={1.75} />
      </motion.div>

      <h2 className="mt-6 font-display text-2xl font-medium text-ink-900 sm:text-3xl">
        Appointment requested
      </h2>
      <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-ink-500">
        Thank you, {data.firstName}. Your request has been received — our office will
        call you at {data.phone || 'the number provided'} shortly to confirm this booking.
      </p>

      <div className="mx-auto mt-8 max-w-md rounded-2xl border border-ink-100 bg-white p-6 text-left">
        <div className="flex items-center justify-between border-b border-ink-100 pb-4">
          <span className="text-xs font-medium uppercase tracking-wide text-ink-400">Reference</span>
          <span className="font-mono text-sm font-medium text-ink-800">{reference}</span>
        </div>
        <ul className="mt-4 space-y-3.5">
          <li className="flex items-center gap-3 text-sm">
            <Stethoscope size={16} className="shrink-0 text-teal-700" />
            <span className="text-ink-700">{specialtyLabel}</span>
          </li>
          <li className="flex items-center gap-3 text-sm">
            <UserRound size={16} className="shrink-0 text-teal-700" />
            <span className="text-ink-700">{doctorLabel}</span>
          </li>
          <li className="flex items-center gap-3 text-sm">
            <Calendar size={16} className="shrink-0 text-teal-700" />
            <span className="text-ink-700">{formattedDate}</span>
          </li>
          <li className="flex items-center gap-3 text-sm">
            <Clock size={16} className="shrink-0 text-teal-700" />
            <span className="text-ink-700">{data.time}</span>
          </li>
        </ul>
      </div>

      <p className="mx-auto mt-6 max-w-sm text-xs text-ink-400">
        Need to make changes, or booking urgently? Call the office directly.
      </p>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
        <Button href={`tel:${clinic.phone.replace(/[^\d+]/g, '')}`} variant="outline" icon={<Phone size={16} />}>
          {clinic.phoneDisplay}
        </Button>
        <Button to="/">Back to home</Button>
      </div>
    </div>
  )
}
