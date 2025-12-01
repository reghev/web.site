import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

interface AnimatedContentProps {
  children: React.ReactNode
  className?: string
  distance?: number
  direction?: 'horizontal' | 'vertical'
  reverse?: boolean
  duration?: number
  delay?: number
  ease?: string
  initialOpacity?: number
  animateOpacity?: boolean
  scale?: number
  threshold?: number
}

export default function AnimatedContent({
  children,
  className,
  distance = 50,
  direction = 'vertical',
  reverse = false,
  duration = 0.5,
  delay = 0,
  ease = 'easeOut',
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
}: AnimatedContentProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: threshold })

  const direction_offset = reverse ? -distance : distance

  const x = direction === 'horizontal' ? direction_offset : 0
  const y = direction === 'vertical' ? direction_offset : 0

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: animateOpacity ? initialOpacity : 1,
        x,
        y,
        scale,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
            }
          : {}
      }
      transition={{
        duration,
        delay,
        ease,
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}