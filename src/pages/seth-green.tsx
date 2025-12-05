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
              <SplitText text="seth-green" />
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              my project for solder
            </p>
          </AnimatedContent>

          <AnimatedContent distance={60} duration={0.8} delay={0.2}>
            <img 
              src="/images/dinosaur.png" 
              alt="Dinosaur" 
              className="w-full rounded-3xl shadow-2xl mb-12"
            />
          </AnimatedContent>

          <AnimatedContent distance={60} duration={0.8} delay={0.4}>
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-4">what is it</h2>
              <p className="text-gray-700 mb-6">
                This was my project for solder when i started taking hackclub seriously and wanted to go into chip design so my sister pushed me to do solder so i could really know what it meant to design pcbs
              </p>
              
              <h3 className="text-2xl font-bold mb-4">features/what i would change</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>It was supposed to light up and "roar" when you pressed the button</li>
                <li>Never finished it either because i was lazy</li>
                <li>Im actually really proud of the dinosaur design for the pcb because it was really hard to make it</li>
                <li>I wish that i couldve made it have more features</li>
              </ul>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </div>
  )
}