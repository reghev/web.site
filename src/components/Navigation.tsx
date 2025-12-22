import { Link, useLocation } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Navigation() {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const navOpacity = useTransform(scrollY, [0, 100], [0.9, 0.95])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <motion.nav 
      style={{ opacity: navOpacity }}
      className={`fixed top-0 w-full backdrop-blur-xl z-50 border-b transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 border-white/30 shadow-lg shadow-white/10' 
          : 'bg-black/90 border-gray-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <Link to="/" className="relative group">
          <motion.span 
            className="text-xl font-bold text-white"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            raghav
            <span className="text-gray-400">.fit</span>
          </motion.span>
          <motion.div
            className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-gray-400 to-white"
            initial={{ width: 0 }}
            whileHover={{ width: '100%' }}
            transition={{ duration: 0.3 }}
          />
        </Link>
        
        <div className="flex gap-8 relative">
          <NavLink to="/" isActive={isActive('/')}>
            Home
          </NavLink>
          
          <NavLink to="/about" isActive={isActive('/about')}>
            About
          </NavLink>

          <NavLink to="/projects" isActive={isActive('/projects')}>
            Projects
          </NavLink>

           <NavLink to="/guestbook" isActive={isActive('/guestbook')}>
            Guestbook
          </NavLink>
        </div>
      </div>
      <motion.div
        className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ width: '50%' }}
      />
    </motion.nav>
  )
}

function NavLink({ to, isActive, children }: { to: string; isActive: boolean; children: React.ReactNode }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link 
      to={to}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative py-2 group"
    >
      <motion.span
        className={`relative z-10 transition-colors duration-300 ${
          isActive ? 'text-white font-semibold' : 'text-gray-400'
        }`}
        animate={{
          color: isHovered || isActive ? '#ffffff' : '#9ca3af'
        }}
      >
        {children}
      </motion.span>
      {(isActive || isHovered) && (
        <motion.div
          layoutId="navIndicator"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-400 via-white to-gray-400"
          initial={false}
          transition={{ 
            type: "spring", 
            stiffness: 400, 
            damping: 30,
            mass: 0.8
          }}
        />
      )}
      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-white/10 rounded-lg -z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        />
      )}
      {isActive && (
        <>
          <motion.div
            className="absolute -top-1 left-1/4 w-1 h-1 bg-gray-400 rounded-full"
            animate={{
              y: [0, -8, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -top-1 left-1/2 w-1 h-1 bg-white rounded-full"
            animate={{
              y: [0, -8, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.66
            }}
          />
          <motion.div
            className="absolute -top-1 right-1/4 w-1 h-1 bg-gray-400 rounded-full"
            animate={{
              y: [0, -8, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.33
            }}
          />
        </>
      )}
    </Link>
  )
}