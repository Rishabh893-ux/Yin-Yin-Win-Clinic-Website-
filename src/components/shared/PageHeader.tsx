import { motion } from 'framer-motion'
import Container from '../ui/Container'

export default function PageHeader({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string
  title: string
  description?: string
  /** Optional background photo, dimmed under a dark overlay so text stays legible. */
  image?: string
}) {
  return (
    <section className="relative overflow-hidden bg-ink-950 pb-20 pt-28 sm:pb-24 sm:pt-36">
      {image && (
        <>
          <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/80 to-ink-950/60" />
        </>
      )}
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.05]" />
      <div className="pointer-events-none absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-teal-600/25 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-[-20%] left-[-5%] h-64 w-64 rounded-full bg-amber-500/10 blur-[100px]" />
      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="eyebrow text-teal-300">{eyebrow}</p>
          <h1 className="mt-4 text-balance text-4xl font-medium leading-[1.1] text-white sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-300">{description}</p>
          )}
        </motion.div>
      </Container>
    </section>
  )
}
