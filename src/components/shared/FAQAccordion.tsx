import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'

type FaqItem = { question: string; answer: string }

export default function FAQAccordion({ items }: { items: FaqItem[] }) {
  const [openQuestion, setOpenQuestion] = useState<string | null>(items[0]?.question ?? null)

  useEffect(() => {
    setOpenQuestion(items[0]?.question ?? null)
  }, [items])

  return (
    <motion.div layout className="divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white">
      <AnimatePresence initial={false}>
        {items.map((item) => {
          const isOpen = openQuestion === item.question
          return (
            <motion.div
              key={item.question}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <button
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpenQuestion(isOpen ? null : item.question)}
                aria-expanded={isOpen}
              >
                <span className="text-[0.98rem] font-medium text-ink-900">{item.question}</span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink-50 text-ink-600 transition-transform duration-300 ${
                    isOpen ? 'rotate-45 bg-teal-700 text-white' : ''
                  }`}
                >
                  <Plus size={16} />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-[0.925rem] leading-relaxed text-ink-500">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </AnimatePresence>
    </motion.div>
  )
}
