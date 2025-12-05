import { SplitText } from '@/components/ui/split-text'
import AnimatedContent from '@/components/ui/animated-content'


import { Link } from 'react-router-dom'

import Navigation from '@/components/Navigation'

export default function About() {
  return (
    <div className="w-screen min-h-screen">
      <Navigation />

      {/* Project Content */}
      <div className="pt-32 pb-20 px-8">
        <div className="max-w-4xl mx-auto">
          <AnimatedContent distance={60} duration={0.8}>
            <Link to="/" className="text-gray-600 hover:text-black mb-8 inline-flex items-center gap-2">
              ← Back to Home
            </Link>
            
            <h1 className="text-6xl font-bold mb-6">
              <SplitText text="mark-wahlberg" />
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              i really like ted
            </p>
          </AnimatedContent>

          <AnimatedContent distance={60} duration={0.8} delay={0.2}>
            <img 
              src="/images/lois.png" 
              alt="Matrix Project" 
              className="w-full rounded-3xl shadow-2xl mb-12"
            />
          </AnimatedContent>

          <AnimatedContent distance={60} duration={0.8} delay={0.4}>
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-4">About This Project</h2>
              <p className="text-gray-700 mb-6">
                This was for Pathfinder and the only reason i did it was because my sister made pathfinder
              </p>
              
              <h3 className="text-2xl font-bold mb-4">what does it do</h3>
              <p className="text-gray-700 mb-6">
                I wanted to have a macropad that lights up and looks cool on my shelf
              </p>

              <h3 className="text-2xl font-bold mb-4">what would you change?</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Making it more than desk fodder would be number one</li>
                <li>something that has a purpose other than being rgb throwup would be nice</li>
                <li>if at the time i knew how to code like sensors would be sick because i had access to them with this</li>
              </ul>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </div>
  )
}