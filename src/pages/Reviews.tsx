import { motion } from 'framer-motion'
import PageTransition from '../components/ui/PageTransition'
import PageHeader from '../components/shared/PageHeader'
import Container from '../components/ui/Container'
import RatingStars from '../components/ui/RatingStars'
import Seo from '../components/shared/Seo'
import CountUp from '../components/shared/CountUp'
import { clinic, reviewThemes, ratingBreakdown } from '@/data/clinic'
import corridorImg from '@/assets/clinic-corridor-dark.jpg'

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

export default function Reviews() {
  return (
    <PageTransition>
      <Seo
        title="Patient Reviews | Yin Yin Win Medical PC"
        description="4.8 out of 5 stars from 185+ Google reviews. See the most common themes patients mention about Yin Yin Win Medical PC in Chinatown, NYC."
      />
      <PageHeader
        eyebrow="Patient Reviews"
        title="What patients are saying"
        description="Aggregate rating and the most common review themes from our Google Business listing."
        image={corridorImg}
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            {/* Summary */}
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

            {/* Themes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="font-display text-2xl font-medium text-ink-900">
                Common themes across reviews
              </h2>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink-500">
                Rather than fabricate quotes, we've summarized the recurring, verifiable
                themes patients raise most often in their Google reviews.
              </p>

              <div className="mt-8 space-y-8">
                {themeGroups.map((group) => (
                  <div key={group.label}>
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-400">
                      {group.label}
                    </p>
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
    </PageTransition>
  )
}
