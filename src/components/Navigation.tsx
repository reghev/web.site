import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15)
    }
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    handleScroll()
    handleResize()
    
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const isActive = (path: string) => {
    return location.pathname === path
  }

  const navItems = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Projects', href: '/projects' },
    { title: 'Guestbook', href: '/guestbook' },
  ]

  return (
    <header>
      <div
        className="fixed top-0 right-0 left-0 mx-auto -z-50"
        style={{ filter: "blur(clamp(200px, 10vw, 250px))" }}
      >
        <span
          className="absolute top-0 right-0 left-0 m-0 mx-auto h-[25vh] w-[90vw] bg-white/20 p-0 sm:h-[15vh] md:h-[10vh] md:w-[80vw]"
          style={{
            clipPath: "polygon(0% 51%, 50% 0%, 100% 51%, 100% 100%, 0% 100%)",
          }}
        />
      </div>
      <nav
        className={`fixed top-0 right-0 left-0 z-50 border-b border-white/10 p-4 backdrop-blur-2xl transition-all duration-300 ${
          isScrolled ? 'bg-black/50' : 'bg-black/30'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between md:px-8">
          <div className="flex items-center gap-4">
            {isMobile && (
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-gray-300 transition-colors"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            )}
            
            <Link to="/" className="relative group">
              <motion.span 
                className="text-base sm:text-xl font-bold text-white"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                raghav.fit

                
              </motion.span>
            </Link>
          </div>
          {!isMobile && (
            <div className="flex items-center gap-6">
              <nav className="flex gap-6 font-mono text-xs">
                {navItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className={`transition-colors duration-300 ${
                      isActive(item.href)
                        ? 'text-white font-semibold font-'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
        {isMobile && isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 pt-4 border-t border-white/10"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  )
}