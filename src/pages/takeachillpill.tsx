import { SplitText } from '@/components/ui/split-text'
import AnimatedContent from '@/components/ui/animated-content'

import { Link } from 'react-router-dom'

import Navigation from '@/components/Navigation'


export default function About() {
  return (
    <div className="w-screen min-h-screen">
      <Navigation />

      <div className="pt-32 pb-20 px-8">
        <div className="max-w-4xl mx-auto">
          <AnimatedContent distance={60} duration={0.8}>
            <Link to="/" className="text-gray-600 hover:text-black mb-8 inline-flex items-center gap-2">
              ← Back to Home
            </Link>
            
            <h1 className="text-6xl font-bold mb-6">
              <SplitText text="seth-blue" />
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              My first chrome extension called takeachillpill
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
                I wanted to make something for Reality so i made something to help with my screentime that would time your website uses and redirect you to pictures of pills if you exceeded the time you set for the website
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Changes I would make</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>A functioning extension would be priority number one because i never really got it to work</li>
                <li>A better UI than what i was planning because it was really basic and some more colors and better layout would be really helpful</li>
                <li>Making it funnier</li>
              </ul>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </div>
  )
}