import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function PageTransition({ children }: { children: ReactNode }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -8 }}
      transition={{ duration: prefersReducedMotion ? 0.15 : 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
