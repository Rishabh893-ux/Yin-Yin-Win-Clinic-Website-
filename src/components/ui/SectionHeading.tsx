import { motion } from 'framer-motion'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  light?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-xl'}
    >
      {eyebrow && (
        <p className={`eyebrow mb-3 ${light ? 'text-teal-300' : ''}`}>{eyebrow}</p>
      )}
      <h2 className={`text-balance text-3xl sm:text-4xl font-medium leading-[1.15] ${light ? 'text-white' : 'text-ink-900'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-[1.05rem] leading-relaxed ${light ? 'text-ink-200' : 'text-ink-500'}`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
