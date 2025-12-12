import { SplitText } from '@/components/ui/split-text'
import AnimatedContent from '@/components/ui/animated-content'
import Footer from '@/components/Footer'
import ClickSpark from '@/components/ClickSpark'
import Navigation from '@/components/Navigation'
import Waves from '@/components/Waves'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import ShinyText from '@/components/ShinyText'

export default function About() {
  return (
    <div className="h-full bg-black relative">
      <ClickSpark />
      <Navigation />
      <div className="fixed inset-0 pointer-events-none">
        <Waves
          lineColor="#481c81"
          backgroundColor="rgba(0, 0, 0, 0.22)"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />
      </div>
      <div className="relative z-10">

        <div className="pt-32 pb-20 px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedContent distance={60} duration={0.8}>
              <div className=" flex items-center justify-center mt-24 mb-12">
                <div className="text-5xl border-2 border-white rounded-xl p-4 bg-black/50">
                  <SplitText text="mark-wahlberg" className="font-bold text-white" />
                </div>
              </div>
            <div className="text-2xl md:text-3xl font-medium mb-12">
                <ShinyText
                  text="i really like ted"
                  disabled={false}
                  speed={5}
                  className="text-2xl md:text-3xl"
                />
              </div>
            </AnimatedContent>

            <AnimatedContent distance={60} duration={0.8} delay={0.2}>
              <img
                src="/images/lois.png"
                alt="pathfinder"
                className="w-full rounded-3xl shadow-2xl mb-12"
              />
            </AnimatedContent>

            <AnimatedContent distance={60} duration={0.8} delay={0.4}>
              <div className="max-w-4xl mx-auto p-8">
                <Card className="bg-black border-2 border-white">
                  <CardContent className="space-y-6">

                    <div className="prose prose-lg max-w-none">
                      <CardHeader>
                        <CardTitle className="text-3xl text-white">About this project</CardTitle>
                      </CardHeader>
                      <p className="text-lg text-white">
                        This was for Pathfinder and the only reason i did it was because my sister made pathfinder
                      </p>

                      <CardHeader>
                        <CardTitle className="text-3xl text-white">What does it do?</CardTitle>
                      </CardHeader>
                      <p className="text-lg text-white">
                        I wanted to have a macropad that lights up and looks cool on my shelf
                      </p>

                      <CardHeader>
                        <CardTitle className="text-3xl text-white">what would you change?</CardTitle>
                      </CardHeader>
                      <ul className="list-disc list-inside text-white text-lg space-y-2 mb-6">
                        <li>Making it more than desk fodder would be number one</li>
                        <li>something that has a purpose other than being rgb throwup would be nice</li>
                        <li>if at the time i knew how to code like sensors would be sick because i had access to them</li>
                      </ul>
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