import { CalendarPlus, Phone } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import { clinic } from '@/data/clinic'

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-teal-800 py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.06]" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <Container className="relative text-center">
        <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl font-medium leading-[1.15] text-white sm:text-4xl">
          Ready to feel heard at your next visit?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-[1.02rem] text-teal-100">
          Book online in a few steps, or call the office directly — our team is ready to help.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button to="/appointments" size="lg" variant="secondary" icon={<CalendarPlus size={18} />}>
            Book Appointment
          </Button>
          <Button
            href={`tel:${clinic.phone.replace(/[^\d+]/g, '')}`}
            size="lg"
            className="!bg-white !text-teal-800 hover:!bg-teal-50"
            icon={<Phone size={18} />}
          >
            {clinic.phoneDisplay}
          </Button>
        </div>
      </Container>
    </section>
  )
}
