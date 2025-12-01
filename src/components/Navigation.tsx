import { Link, useLocation } from 'react-router-dom'

export default function Navigation() {
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold hover:text-gray-600 transition-colors">
          Raghav
        </Link>
        
        <div className="flex gap-2 bg-gray-100 p-1 rounded-full">
          <Link
            to="/"
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              isActive('/') 
                ? 'bg-black text-white shadow-md' 
                : 'text-gray-600 hover:text-black'
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              isActive('/about') 
                ? 'bg-black text-white shadow-md' 
                : 'text-gray-600 hover:text-black'
            }`}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}