import { useMemo, useState } from 'react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import FAQAccordion from '../shared/FAQAccordion'
import { faqs, faqCategories, type FaqCategory } from '@/data/clinic'

export default function FaqSection() {
  const [category, setCategory] = useState<FaqCategory>('All')

  const filtered = useMemo(
    () => (category === 'All' ? faqs : faqs.filter((f) => f.category === category)),
    [category],
  )

  return (
    <section id="faq" className="scroll-mt-24 py-20 sm:py-28">
      <Container className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Answers to the questions we hear most from patients, new and returning."
        />

        <div className="mb-8 mt-10 flex flex-wrap gap-2.5" role="tablist" aria-label="Filter FAQs by category">
          {faqCategories.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={category === c}
              onClick={() => setCategory(c)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                category === c
                  ? 'border-teal-700 bg-teal-700 text-white'
                  : 'border-ink-200 bg-white text-ink-600 hover:border-teal-400 hover:text-teal-800'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <FAQAccordion items={filtered} />
      </Container>
    </section>
  )
}
