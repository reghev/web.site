import { SplitText } from '@/components/ui/split-text'
import AnimatedContent from '@/components/ui/animated-content'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import Waves from '@/components/Waves'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import ShinyText from '@/components/ShinyText'
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
                  <SplitText text="Super Awesome Lie Detector" className="font-bold text-white" />
                </div>
              </div>
            <div className="text-2xl md:text-3xl font-medium mb-12">
                <ShinyText
                  text="It's so good it doesn't detect lies"
                  disabled={false}
                  speed={5}
                  className="text-2xl md:text-3xl"
                />
              </div>
            </AnimatedContent>

            <AnimatedContent distance={60} duration={0.8} delay={0.2}>
              <img
                src="/images/liedetector.png"
                alt="liedetector"
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
                        This was for Stasis but ended up never finishing it which is insane 
                      </p>

                      <CardHeader>
                        <CardTitle className="text-3xl text-white">What does it do?</CardTitle>
                      </CardHeader>
                      <p className="text-lg text-white">
                        It records your voice and then either a red or green LED lights up but it doesn't have any code to detect lies let alone even know anything at all so all it does is just take the audio recording and then send it to me where i put it in a public google sheet and train AI off of it cause i thought itd be funny
                      </p>

                      <CardHeader>
                        <CardTitle className="text-3xl text-white">what would you change?</CardTitle>
                      </CardHeader>
                      <ul className="list-disc list-inside text-white text-lg space-y-2 mb-6">
                        <li>Making it is definitely up there</li>
                        <li>If it could look funny</li>
                        <li>If it actually could detect lies I just make it so it doesn't have to for funnies</li>
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