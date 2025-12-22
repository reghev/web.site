import { SplitText } from '@/components/ui/split-text'
import AnimatedContent from '@/components/ui/animated-content'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import ShinyText from '@/components/ShinyText'
import { Button } from '@/components/ui/button'
import { Cursor } from '@/components/cursor'
import Waves from '@/components/Waves'

export default function About() {
  return (
    
    
    <div className="h-full bg-black relative">
      <Navigation />
      <div className="fixed inset-0 pointer-events-none">
      </div>
      <div className="relative z-10">
<Cursor />
        <div className="pt-32 pb-20 px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedContent distance={60} duration={0.8}>
              <div className=" flex items-center justify-center mt-24 mb-12">
                <div className="text-5xl border-2 border-white rounded-xl p-4 bg-black/50">
                  <SplitText text="Every single ice cream flavor ranked" className="font-bold text-white" />
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-medium mb-12">

                <ShinyText
                  text="i need to make my own tier list"
                  disabled={false}
                  speed={5}
                  className="text-2xl md:text-3xl"

                />

              </div>
              <div className="text-2xl md:text-3xl font-medium mb-12">
                <Button asChild className=" bg-black text-white hover:bg-gray-800 rounded-full py-6 transition-all">
                  <a href="https://tiermaker.com/create/top-40-ice-cream-flavors-15607441" target="_blank" rel="noopener noreferrer">
                    View Tier List →
                  </a>
                </Button>
              </div>
            </AnimatedContent>

            <AnimatedContent distance={60} duration={0.8} delay={0.2}>
              <img
                src="/images/icecream.png"
                alt="creamedice"
                className="w-full rounded-3xl shadow-2xl mb-12"
              />
            </AnimatedContent>

            <AnimatedContent distance={60} duration={0.8} delay={0.4}>
              <div className="max-w-4xl mx-auto p-8">
                <Card className="bg-black border-2 border-white">
                  <CardContent className="space-y-6">

                    <div className="prose prose-lg max-w-none">
                      <CardHeader>
                        <CardTitle className="text-2xl text-white"> For many years, philosophers have pondered a question so vast, so complex, so inexplicitly
                          unsolvable, some considered it to be their eternal punishment to bear the everlonging need to
                          answer what ubiquitously is considered a privlege no mere mortal can nay deserves to
                          answer.</CardTitle>
                      </CardHeader>
                      <p className="text-lg text-white">
                        to what can only be described as a proof of a higher being. A diety,
                        someone who posseses the eternal wisdom needed to answer this question,
                        the vast knowledge spanning from our amalgomation of stone floating in the
                        ever changing, ever expanding cosmos, farthest depths of our containment of exististance. But even it, fears those godforsaken 8 words made to be the greatest challenge the human race has yet to solve. But dear readers i dont come bearing inevitable depressions, But a solution to the epitome of thought considered a forever and constant impossible task.
                         "What is the best flavor of ice cream?" But fret not dear readers, for I bare the answers my predesors have failed. Here is an objectively correct tier list of ice cream that no one can contest 
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