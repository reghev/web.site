import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface AnimatedLogoProps {
  image1: string
  image2: string
  alt?: string
  size?: number
}

export default function AnimatedLogo({ 
  image1, 
  image2, 
  alt = "Logo", 
  size = 48 
}: AnimatedLogoProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div 
      className="relative cursor-pointer"
      style={{ width: size, height: size }}
      onClick={handleClick}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={isFlipped ? 'image2' : 'image1'}
          src={isFlipped ? image2 : image1}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ 
            clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
            opacity: 0 
          }}
          animate={{ 
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            opacity: 1 
          }}
          exit={{ 
            clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
            opacity: 0 
          }}
          transition={{ 
            duration: 0.5,
            ease: "easeInOut"
          }}
        />
      </AnimatePresence>
      <motion.div
        className="absolute inset-0 rounded-full bg-purple-500/20"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1.2, opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  )
}