import { SplitText } from '@/components/ui/split-text'
import AnimatedContent from '@/components/ui/animated-content'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import Waves from '@/components/Waves'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import ShinyText from '@/components/ShinyText'
import { Link } from 'react-router-dom'

export default function Fuzzgenes() {
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

        <div className="pt-32 pb-20 px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedContent distance={60} duration={0.8}>
              <div className=" flex items-center justify-center mt-24 mb-12">
                <div className="text-5xl border-2 border-white rounded-xl p-4 bg-black/50">
                  <SplitText text="fuzzgenes" className="font-bold text-white" />
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-medium mb-12">
                <ShinyText
                  text="best philosipher of all time"
                  disabled={false}
                  speed={5}
                  className="text-2xl md:text-3xl"
                />
              </div>
            </AnimatedContent>

            <AnimatedContent distance={60} duration={0.8} delay={0.2}>
              <Link to="/fuzzgenes" className="block">
                <img
                  src="/images/fuzzgenes.png"
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
                        Diogenes was a greek philosipher who is the most down to earth and humble guy i can think of mostly because he was homeless and lived in a barrel in the middle of the market, often considered the worlds first shitposter paving the road for many like DocuDubery or the very famous Anger from inside out and inside out 2 both masterpi, Out of everything known about him these are the most interesting ones, like the fact that when he wasnt happy, he just jerked off, infront of everybody, his cinicistic beliefs differed to ours where instead cinicists today go bald and work at starbucks to spit in people who order the Charlie Kirk starbucks drink, he instead pissed on people, stating "I pissed on the man who called me a dog. Why was he so surprised." Absolute legend, When plato stated that a human can only be described as a featherless bird, diogenes did the most unemployed funniest act possible and plucked every feather from a bird who probobly looked at him wrong and then burst into platos class to show him his "person" and promptly left, Another time when Alexander the Great, the guy who conquered most of the known world, and yknow, killed his cousin to acend to the throne, met diogenes, he happened to be his biggest fan asking if anything could be done for him, Diogenes promptly said for him to get out of my sunlight, prompting alexander to stand there like a non bp user and then say "if i were not alexander, then i would be diogenes" and to which diogenes responded "if i were not diogenes, then i would also wish to be diogenes" Another time in which they met Alexander asked why he was digging around in the dirt to which diogenes had the absolute quote of the century stating "I am searching for the bones of your father but cannot distinguish them from those of a slave." I can only imagine the bystanders having the same reaction as when the one girl was talking about mojonomo yolo or whatever the hell it was, Diogenes lived to the ripe old age of 90 and we can assume that if there is a god, him and diogenes made a bet that he can get away with whatever the hell he wants and can still live 10 times longer than the average hamster. 
                      </p>

                      <CardHeader>
                        <CardTitle className="text-3xl text-white">also what</CardTitle>
                      </CardHeader>
                      <p className="text-lg text-white">
                        diogenes is definitely the best philosipher of all time, fight me
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