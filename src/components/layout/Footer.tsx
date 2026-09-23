import { Link } from 'react-router-dom'
import { MapPin, Phone, Clock, Printer } from 'lucide-react'
import Container from '../ui/Container'
import BrandMark from '../ui/BrandMark'
import { clinic } from '@/data/clinic'

const columns = [
  {
    title: 'Practice',
    links: [
      { to: '/#about', label: 'About Us' },
      { to: '/#doctor', label: 'Our Doctor' },
      { to: '/#services', label: 'Services' },
      { to: '/#reviews', label: 'Patient Reviews' },
    ],
  },
  {
    title: 'Visit',
    links: [
      { to: '/appointments', label: 'Book an Appointment' },
      { to: '/#contact', label: 'Contact & Location' },
      { to: '/#faq', label: 'FAQ' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-ink-950 pb-20 text-ink-200 lg:pb-0">
      <Container className="py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1.1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <BrandMark size={36} />
              <span className="font-display text-lg text-white">Yin Yin Win Medical PC</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-400">
              Internal medicine &amp; primary care in the heart of Chinatown — attentive,
              unhurried visits from a doctor who knows your history.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-amber-400">
              <span className="font-semibold text-white">{clinic.rating}</span>
              <span aria-hidden>★★★★★</span>
              <span className="text-ink-400">({clinic.reviewCount} Google reviews)</span>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">{col.title}</h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-sm text-ink-300 hover:text-teal-300 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm text-ink-300">
              <li className="flex gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-teal-400" />
                <span>
                  {clinic.addressLine1}, {clinic.addressLine2}
                  <br />
                  {clinic.city}, {clinic.state} {clinic.zip}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-teal-400" />
                <a href={`tel:${clinic.phone.replace(/[^\d+]/g, '')}`} className="hover:text-teal-300 transition-colors">
                  {clinic.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Printer size={18} className="mt-0.5 shrink-0 text-teal-400" />
                <span>Fax: {clinic.fax}</span>
              </li>
              <li className="flex gap-3">
                <Clock size={18} className="mt-0.5 shrink-0 text-teal-400" />
                <span>{clinic.hoursNote}, 9:00 AM – 5:30 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Yin Yin Win Medical PC. All rights reserved.</p>
          <p>128 Mott St Ste 601, New York, NY 10013 · Mietz Building, Floor 1</p>
        </div>
      </Container>
    </footer>
  )
}
