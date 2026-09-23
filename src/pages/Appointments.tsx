import PageTransition from '../components/ui/PageTransition'
import PageHeader from '../components/shared/PageHeader'
import Container from '../components/ui/Container'
import BookingWizard from '../components/appointments/BookingWizard'
import Seo from '../components/shared/Seo'
import corridorImg from '@/assets/clinic-corridor-dark.jpg'

export default function Appointments() {
  return (
    <PageTransition>
      <Seo
        title="Book an Appointment | Yin Yin Win Medical PC"
        description="Schedule your visit with Yin Yin Win Medical PC in a few quick steps — choose a specialty, provider, date, and time."
      />
      <PageHeader
        eyebrow="Book Online"
        title="Schedule your visit"
        description="Answer a few quick questions and we'll have everything ready for your appointment. Takes about 2 minutes."
        image={corridorImg}
      />

      <section className="py-16 sm:py-24">
        <Container>
          <BookingWizard />
        </Container>
      </section>
    </PageTransition>
  )
}
