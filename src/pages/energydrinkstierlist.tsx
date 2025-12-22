import { SplitText } from '@/components/ui/split-text'
import AnimatedContent from '@/components/ui/animated-content'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import Waves from '@/components/Waves'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import ShinyText from '@/components/ShinyText'
import { Link } from 'react-router-dom'
import { Cursor } from '@/components/cursor'

export default function About() {
  return (
    <div className="h-full bg-black relative">
      <Navigation />
      <div className="fixed inset-0 pointer-events-none">
        <Waves
          lineColor="#ffffff05"
          backgroundColor="rgba(0, 0, 0, 1)"
          waveSpeedX={0.003}
          waveSpeedY={0.002}
          waveAmpX={30}
          waveAmpY={15}
          friction={0.95}
          tension={0.01}
          maxCursorMove={80}
          xGap={16}
          yGap={40}
        />
      </div>
      <div className="relative z-10">
<Cursor />
        <div className="pt-32 pb-20 px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedContent distance={60} duration={0.8}>
              <div className=" flex items-center justify-center mt-24 mb-12">
                <div className="text-5xl border-2 border-white rounded-xl p-4 bg-black/50">
                  <SplitText text="ilovemangomonster" className="font-bold text-white" />
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-medium mb-12">
                <ShinyText
                  text="every single energy drink ranked"
                  disabled={false}
                  speed={5}
                  className="text-2xl md:text-3xl"
                />
              </div>
            </AnimatedContent>

            <AnimatedContent distance={60} duration={0.8} delay={0.2}>
              <Link to="/tl/energydrinks" className="block">
                <img
                  src="/images/energydrinks.png"
                  alt="energydrinks"
                  className="w-full rounded-3xl shadow-2xl mb-12 cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </AnimatedContent>

            <AnimatedContent distance={60} duration={0.8} delay={0.4}>
              <div className="max-w-4xl mx-auto p-8">
                <Card className="bg-black border-2 border-white">
                  <CardContent className="space-y-6">

                    <div className="prose prose-lg max-w-none">
                      <CardHeader>
                        <CardTitle className="text-3xl text-white">what</CardTitle>
                      </CardHeader>
                      <p className="text-lg text-white">
                        I got really bored and didnt think it would take me 2 hours
                      </p>

                      <CardHeader>
                        <CardTitle className="text-3xl text-white">also what</CardTitle>
                      </CardHeader>
                      <p className="text-lg text-white">
                        I wanted to rank every single energy drink
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedContent>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  )
}