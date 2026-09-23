import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import StepIndicator from './StepIndicator'
import SpecialtyStep from './SpecialtyStep'
import DoctorStep from './DoctorStep'
import DateStep from './DateStep'
import TimeStep from './TimeStep'
import DetailsStep, { type DetailsErrors } from './DetailsStep'
import ConfirmationStep from './ConfirmationStep'
import Button from '../ui/Button'
import { initialBookingData, steps, type BookingData } from './types'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phoneRegex = /^[\d\s()+.-]{7,20}$/
const DRAFT_KEY = 'yyw-booking-draft'

function validateDetails(data: BookingData): DetailsErrors {
  const errors: DetailsErrors = {}
  if (!data.firstName.trim()) errors.firstName = 'First name is required'
  if (!data.lastName.trim()) errors.lastName = 'Last name is required'
  if (!data.phone.trim()) errors.phone = 'Phone number is required'
  else if (!phoneRegex.test(data.phone)) errors.phone = 'Enter a valid phone number'
  if (!data.email.trim()) errors.email = 'Email is required'
  else if (!emailRegex.test(data.email)) errors.email = 'Enter a valid email address'
  if (!data.dob) errors.dob = 'Date of birth is required'
  if (!data.reason.trim()) errors.reason = 'Please share a reason for your visit'
  return errors
}

function generateReference() {
  const rand = Math.random().toString(36).slice(2, 7).toUpperCase()
  return `YYW-${rand}`
}

function loadDraft(): { data: BookingData; stepIndex: number } | null {
  try {
    const raw = sessionStorage.getItem(DRAFT_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (typeof parsed !== 'object' || !parsed.data) return null
    return { data: { ...initialBookingData, ...parsed.data }, stepIndex: Math.min(parsed.stepIndex ?? 0, steps.length - 2) }
  } catch {
    return null
  }
}

export default function BookingWizard() {
  const draft = useMemo(loadDraft, [])
  const [stepIndex, setStepIndex] = useState(draft?.stepIndex ?? 0)
  const [data, setData] = useState<BookingData>(draft?.data ?? initialBookingData)
  const [errors, setErrors] = useState<DetailsErrors>({})
  const [direction, setDirection] = useState(1)
  const reference = useMemo(() => generateReference(), [])

  const isFinal = stepIndex === steps.length - 1

  useEffect(() => {
    if (isFinal) {
      sessionStorage.removeItem(DRAFT_KEY)
      return
    }
    sessionStorage.setItem(DRAFT_KEY, JSON.stringify({ data, stepIndex }))
  }, [data, stepIndex, isFinal])

  const update = (patch: Partial<BookingData>) => setData((d) => ({ ...d, ...patch }))

  const canProceed = () => {
    switch (stepIndex) {
      case 0:
        return Boolean(data.specialty)
      case 1:
        return Boolean(data.doctor)
      case 2:
        return Boolean(data.date)
      case 3:
        return Boolean(data.time)
      case 4:
        return true
      default:
        return true
    }
  }

  const goNext = () => {
    if (stepIndex === 4) {
      const validationErrors = validateDetails(data)
      setErrors(validationErrors)
      if (Object.keys(validationErrors).length > 0) return
    }
    if (!canProceed()) return
    setDirection(1)
    setStepIndex((i) => Math.min(i + 1, steps.length - 1))
  }

  const goBack = () => {
    setDirection(-1)
    setStepIndex((i) => Math.max(i - 1, 0))
  }

  return (
    <div className="mx-auto max-w-3xl">
      <StepIndicator current={stepIndex} />

      <form
        className="rounded-[1.75rem] border border-ink-100 bg-white p-6 shadow-sm sm:p-10"
        onSubmit={(e) => {
          e.preventDefault()
          goNext()
        }}
      >
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={stepIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction * 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -24 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {stepIndex === 0 && (
                <SpecialtyStep value={data.specialty} onChange={(v) => update({ specialty: v })} />
              )}
              {stepIndex === 1 && (
                <DoctorStep value={data.doctor} onChange={(v) => update({ doctor: v })} />
              )}
              {stepIndex === 2 && <DateStep value={data.date} onChange={(v) => update({ date: v })} />}
              {stepIndex === 3 && (
                <TimeStep value={data.time} onChange={(v) => update({ time: v })} date={data.date} />
              )}
              {stepIndex === 4 && <DetailsStep data={data} errors={errors} onChange={update} />}
              {stepIndex === 5 && <ConfirmationStep data={data} reference={reference} />}
            </motion.div>
          </AnimatePresence>
        </div>

        {!isFinal && (
          <div className="mt-9 flex items-center justify-between border-t border-ink-100 pt-6">
            <Button
              type="button"
              variant="ghost"
              onClick={goBack}
              icon={<ArrowLeft size={16} />}
              iconPosition="left"
              className={stepIndex === 0 ? 'invisible' : ''}
            >
              Back
            </Button>
            <Button type="submit" disabled={!canProceed()} icon={<ArrowRight size={16} />}>
              {stepIndex === 4 ? 'Review & Confirm' : 'Continue'}
            </Button>
          </div>
        )}
      </form>
    </div>
  )
}
