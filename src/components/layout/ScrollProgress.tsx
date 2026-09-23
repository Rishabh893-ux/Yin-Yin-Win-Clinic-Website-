import { motion, useScroll, useSpring } from 'framer-motion'

/** Thin scroll-position indicator fixed beneath the sticky navbar. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 300, damping: 40, restDelta: 0.001 })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[60] h-[2.5px] w-full origin-left bg-teal-600"
      aria-hidden="true"
    />
  )
}
