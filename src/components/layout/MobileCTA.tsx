import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { CalendarPlus, Phone } from 'lucide-react'
import Button from '../ui/Button'
import { clinic } from '@/data/clinic'

/** Sticky bottom call/book bar for small screens, hidden on the booking page itself. */
export default function MobileCTA() {
  const { pathname } = useLocation()
  const hidden = pathname === '/appointments'

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-100 bg-[#fbfaf7]/95 px-4 py-3 backdrop-blur-md lg:hidden"
          style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
        >
          <div className="flex items-center gap-2.5">
            <Button
              href={`tel:${clinic.phone.replace(/[^\d+]/g, '')}`}
              variant="outline"
              className="flex-1"
              icon={<Phone size={16} />}
            >
              Call
            </Button>
            <Button to="/appointments" className="flex-1" icon={<CalendarPlus size={16} />}>
              Book
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
