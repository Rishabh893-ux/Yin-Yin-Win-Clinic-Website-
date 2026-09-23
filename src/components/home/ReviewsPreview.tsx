import { ArrowRight } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import RatingStars from '../ui/RatingStars'
import ThemesMarquee from './ThemesMarquee'
import { clinic } from '@/data/clinic'

export default function ReviewsPreview() {
  return (
    <section className="overflow-hidden bg-sand-50 py-20 sm:py-28">
      <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading eyebrow="Patient Reviews" title="Rated 4.8 out of 5 on Google" />
        <div className="flex items-end gap-4">
          <span className="font-display text-6xl text-ink-900">{clinic.rating}</span>
          <div className="pb-1.5">
            <RatingStars rating={clinic.rating} size={20} />
            <p className="mt-1.5 text-sm text-ink-500">{clinic.reviewCount} verified Google reviews</p>
          </div>
        </div>
      </Container>

      <div className="mt-12">
        <Container className="mb-5">
          <span className="text-sm font-medium text-ink-500">The most common themes patients mention:</span>
        </Container>
        <ThemesMarquee />
      </div>

      <Container className="mt-10">
        <Button to="/reviews" variant="outline" icon={<ArrowRight size={16} />}>
          Read all reviews
        </Button>
      </Container>
    </section>
  )
}
