import { MapPin, Clock, Phone, ArrowRight } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import { clinic } from '@/data/clinic'
import { buildMapEmbedSrc } from '@/lib/maps'

export default function LocationPreview() {
  const mapSrc = buildMapEmbedSrc(clinic.mapQuery)

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Find Us" title="Visit the practice on Mott Street" />

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col justify-between rounded-2xl border border-ink-100 bg-white p-7 shadow-sm">
            <div className="space-y-5">
              <div className="flex gap-3.5">
                <MapPin size={20} className="mt-0.5 shrink-0 text-teal-700" />
                <div>
                  <p className="font-medium text-ink-900">{clinic.addressLine1}</p>
                  <p className="text-sm text-ink-500">{clinic.addressLine2}</p>
                  <p className="text-sm text-ink-500">
                    {clinic.city}, {clinic.state} {clinic.zip}
                  </p>
                </div>
              </div>
              <div className="flex gap-3.5">
                <Clock size={20} className="mt-0.5 shrink-0 text-teal-700" />
                <div>
                  <p className="font-medium text-ink-900">{clinic.hoursNote}</p>
                  <p className="text-sm text-ink-500">9:00 AM – 5:30 PM</p>
                </div>
              </div>
              <div className="flex gap-3.5">
                <Phone size={20} className="mt-0.5 shrink-0 text-teal-700" />
                <a href={`tel:${clinic.phone.replace(/[^\d+]/g, '')}`} className="font-medium text-ink-900 hover:text-teal-700">
                  {clinic.phoneDisplay}
                </a>
              </div>
            </div>
            <Button to="/contact" variant="outline" className="mt-8" icon={<ArrowRight size={16} />}>
              Get directions
            </Button>
          </div>

          <div className="overflow-hidden rounded-2xl border border-ink-100 shadow-sm">
            <iframe
              title="Yin Yin Win Medical PC location map"
              src={mapSrc}
              className="h-[320px] w-full lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
