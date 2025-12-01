import { SplitText } from '@/components/ui/split-text'
import AnimatedContent from '@/components/ui/animated-content'
import Navigation from '@/components/Navigation'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function ProjectLois() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Raghav</h1>
          <div className="flex gap-8 text-sm">
            <Link to="/" className="hover:text-gray-600 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-gray-600 transition-colors">About</Link>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-8">
        <div className="max-w-4xl mx-auto">
          <AnimatedContent distance={60} duration={0.8}>
            <Link to="/" className="text-gray-600 hover:text-black mb-8 inline-flex items-center gap-2">
              ← Back to Home
            </Link>
            
            <h1 className="text-6xl font-bold mb-6">
              <SplitText text="Circuit Board Design" />
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Electronic engineering project
            </p>
          </AnimatedContent>

          <AnimatedContent distance={60} duration={0.8} delay={0.2}>
            <img 
              src="/images/bp.webp" 
              alt="Circuit Board" 
              className="w-full rounded-3xl shadow-2xl mb-12"
            />
          </AnimatedContent>

          <AnimatedContent distance={60} duration={0.8} delay={0.4}>
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
              <p className="text-gray-700 mb-6">
                A custom circuit board design showcasing electronic engineering principles 
                and PCB layout techniques.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Features</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Custom PCB layout</li>
                <li>Optimized component placement</li>
                <li>Professional manufacturing quality</li>
              </ul>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </div>
  )
}