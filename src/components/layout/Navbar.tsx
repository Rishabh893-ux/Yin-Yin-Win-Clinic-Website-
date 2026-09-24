import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Phone, CalendarPlus } from 'lucide-react'
import Container from '../ui/Container'
import BrandMark from '../ui/BrandMark'
import { clinic } from '@/data/clinic'

const sectionLinks = [
  { id: 'services', to: '/#services', label: 'Services' },
  { id: 'about', to: '/#about', label: 'About' },
  { id: 'doctor', to: '/#doctor', label: 'Doctor' },
  { id: 'reviews', to: '/#reviews', label: 'Reviews' },
  { id: 'faq', to: '/#faq', label: 'FAQ' },
  { id: 'contact', to: '/#contact', label: 'Contact' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection(null)
      return
    }
    const elements = sectionLinks
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null)
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible.length === 0) return
        const topMost = visible.reduce((a, b) => (a.boundingClientRect.top < b.boundingClientRect.top ? a : b))
        setActiveSection(topMost.target.id)
      },
      { rootMargin: '-96px 0px -60% 0px', threshold: 0 },
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#fbfaf7]/90 backdrop-blur-md shadow-[0_1px_0_rgba(15,20,20,0.06)]' : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex h-[72px] items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2.5 shrink-0" onClick={() => setOpen(false)}>
            <BrandMark size={36} />
            <span className="leading-tight">
              <span className="block font-display text-[1.05rem] font-medium text-ink-900">Yin Yin Win</span>
              <span className="block text-[0.65rem] font-medium uppercase tracking-[0.14em] text-ink-400">Medical PC</span>
            </span>
          </NavLink>

          <nav className="hidden lg:flex items-center gap-1">
            {sectionLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-teal-50 text-teal-800'
                    : 'text-ink-600 hover:bg-ink-50 hover:text-teal-800'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${clinic.phone.replace(/[^\d+]/g, '')}`}
              className="flex items-center gap-2 text-sm font-medium text-ink-700 hover:text-teal-800 transition-colors"
            >
              <Phone size={16} />
              {clinic.phoneDisplay}
            </a>
            <NavLink
              to="/appointments"
              className="inline-flex items-center gap-2 rounded-full bg-teal-700 px-5 py-2.5 text-sm font-medium text-white shadow-soft transition-all hover:bg-teal-800 hover:shadow-lift"
            >
              <CalendarPlus size={16} />
              Book Appointment
            </NavLink>
          </div>

          <button
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full text-ink-700 hover:bg-ink-50"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav-menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden border-t border-ink-100 bg-[#fbfaf7]"
          >
            <Container className="py-4 flex flex-col gap-1">
              {sectionLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-[0.95rem] font-medium ${
                    activeSection === item.id ? 'bg-teal-50 text-teal-800' : 'text-ink-700 hover:bg-ink-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-3 flex flex-col gap-2.5 px-1">
                <a
                  href={`tel:${clinic.phone.replace(/[^\d+]/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-200 px-5 py-3 text-sm font-medium text-ink-700"
                >
                  <Phone size={16} /> Call {clinic.phoneDisplay}
                </a>
                <NavLink
                  to="/appointments"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-700 px-5 py-3 text-sm font-medium text-white"
                >
                  <CalendarPlus size={16} /> Book Appointment
                </NavLink>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
