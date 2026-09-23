import { useMemo, useState } from 'react'
import PageTransition from '../components/ui/PageTransition'
import PageHeader from '../components/shared/PageHeader'
import Container from '../components/ui/Container'
import FAQAccordion from '../components/shared/FAQAccordion'
import Seo from '../components/shared/Seo'
import { faqs, faqCategories, type FaqCategory } from '@/data/clinic'
import corridorImg from '@/assets/clinic-corridor-dark.jpg'

export default function FAQ() {
  const [category, setCategory] = useState<FaqCategory>('All')

  const filtered = useMemo(
    () => (category === 'All' ? faqs : faqs.filter((f) => f.category === category)),
    [category],
  )

  return (
    <PageTransition>
      <Seo
        title="FAQ | Yin Yin Win Medical PC"
        description="Common questions about booking, insurance, languages, accessibility, prescription refills, and lab work at Yin Yin Win Medical PC."
      />
      <PageHeader
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Answers to the questions we hear most from patients, new and returning."
        image={corridorImg}
      />

      <section className="py-20 sm:py-28">
        <Container className="mx-auto max-w-3xl">
          <div className="mb-8 flex flex-wrap gap-2.5" role="tablist" aria-label="Filter FAQs by category">
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
    </PageTransition>
  )
}
