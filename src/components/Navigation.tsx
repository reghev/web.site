import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navigation() {
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold hover:text-gray-600 transition-colors">
          raghav.fit
        </Link>
        
        <div className="flex gap-8 relative">
          <Link 
            to="/" 
            className={`relative py-2 transition-colors ${
              isActive('/') ? 'text-black font-medium' : 'text-gray-600 hover:text-black'
            }`}
          >
            Home
            {isActive('/') && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </Link>
          
          <Link 
            to="/about" 
            className={`relative py-2 transition-colors ${
              isActive('/about') ? 'text-black font-medium' : 'text-gray-600 hover:text-black'
            }`}
          >
            About
            {isActive('/about') && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </Link>
        </div>
      </div>
    </nav>
  )
}