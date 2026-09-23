import { motion } from 'framer-motion'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import RatingStars from '../ui/RatingStars'
import CountUp from '../shared/CountUp'
import { clinic, reviewThemes, ratingBreakdown } from '@/data/clinic'

const doctorThemeLabels = [
  'Experienced doctor',
  'Health advice',
  'Clear explanations',
  'Attentive listening',
  'Bedside manner',
  'Primary care doctor',
]
const themeGroups = [
  { label: 'About Dr. Win', items: reviewThemes.filter((t) => doctorThemeLabels.includes(t.label)) },
  { label: 'About the practice', items: reviewThemes.filter((t) => !doctorThemeLabels.includes(t.label)) },
]

export default function ReviewsSection() {
  return (
    <section id="reviews" className="scroll-mt-24 bg-sand-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Patient Reviews"
          title="What patients are saying"
          description="Aggregate rating and the most common review themes from our Google Business listing."
        />

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-ink-100 bg-white p-8"
          >
            <CountUp value={clinic.rating} decimals={1} className="font-display text-6xl text-ink-900" />
            <RatingStars rating={clinic.rating} size={22} className="mt-3" />
            <p className="mt-2 text-sm text-ink-500">Based on {clinic.reviewCount} Google reviews</p>

            <div className="mt-7 space-y-2.5">
              {ratingBreakdown.map((row, i) => (
                <div key={row.stars} className="flex items-center gap-3">
                  <span className="w-4 text-xs text-ink-500">{row.stars}</span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-ink-100">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${row.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full rounded-full bg-amber-400"
                    />
                  </div>
                  <span className="w-9 text-right text-xs text-ink-400">{row.percent}%</span>
                </div>
              ))}
            </div>

            <a
              href="https://www.google.com/search?q=Yin+Yin+Win+Medical+PC"
              target="_blank"
              rel="noreferrer"
              className="link-underline mt-7 inline-block text-sm font-medium text-teal-700"
            >
              View on Google →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-display text-2xl font-medium text-ink-900">Common themes across reviews</h3>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink-500">
              Rather than fabricate quotes, we've summarized the recurring, verifiable
              themes patients raise most often in their Google reviews.
            </p>

            <div className="mt-8 space-y-8">
              {themeGroups.map((group) => (
                <div key={group.label}>
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-400">{group.label}</p>
                  <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {group.items.map((theme, i) => (
                      <motion.div
                        key={theme.label}
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                        className="flex items-center justify-between rounded-xl border border-ink-100 bg-white px-5 py-4"
                      >
                        <span className="text-sm font-medium text-ink-800">{theme.label}</span>
                        <span className="flex h-7 min-w-7 items-center justify-center rounded-full bg-teal-50 px-2 text-xs font-semibold text-teal-700">
                          {theme.count}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
