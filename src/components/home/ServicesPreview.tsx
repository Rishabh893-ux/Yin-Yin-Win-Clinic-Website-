import { ArrowRight } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import ServiceCard from './ServiceCard'
import { services } from '@/data/clinic'

export default function ServicesPreview() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="What We Treat"
            title="Comprehensive care, close to home"
            description="From annual checkups to chronic condition management, our practice covers the everyday health needs of the whole family."
          />
          <Button to="/services" variant="outline" icon={<ArrowRight size={16} />} className="shrink-0">
            View all services
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </Container>
    </section>
  )
}
