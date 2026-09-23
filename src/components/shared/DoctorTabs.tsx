import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Building2, Info } from 'lucide-react'
import { doctor } from '@/data/clinic'

const tabs = ['Hospital Affiliations', 'Credentials'] as const
type Tab = (typeof tabs)[number]

export default function DoctorTabs() {
  const [active, setActive] = useState<Tab>(tabs[0])

  return (
    <div className="rounded-2xl border border-ink-100 bg-white">
      <div className="flex overflow-x-auto border-b border-ink-100 px-2" role="tablist" aria-label="Doctor details">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={active === tab}
            onClick={() => setActive(tab)}
            className={`relative shrink-0 whitespace-nowrap px-4 py-4 text-sm font-medium transition-colors ${
              active === tab ? 'text-teal-800' : 'text-ink-500 hover:text-ink-800'
            }`}
          >
            {tab}
            {active === tab && (
              <motion.span
                layoutId="doctor-tab-underline"
                className="absolute inset-x-3 -bottom-px h-[2px] rounded-full bg-teal-700"
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
              />
            )}
          </button>
        ))}
      </div>

      <div className="relative min-h-[9rem] overflow-hidden p-6">
        <AnimatePresence mode="wait">
          {active === 'Hospital Affiliations' && (
            <motion.div
              key="affiliations"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex items-center gap-2.5 text-ink-900">
                <Building2 size={18} className="text-teal-700" />
                <h3 className="font-medium">Hospital Affiliations</h3>
              </div>
              <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {doctor.affiliations.map((a) => (
                  <li key={a} className="flex items-center gap-2 text-sm text-ink-600">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                    {a}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {active === 'Credentials' && (
            <motion.div
              key="credentials"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="flex items-start gap-3 rounded-xl bg-sand-50 p-4 text-sm text-ink-500"
            >
              <Info size={18} className="mt-0.5 shrink-0 text-ink-400" />
              <p>{doctor.credentialsPlaceholder}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
