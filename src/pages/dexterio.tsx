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
                  <SplitText text="Timothy Dexter" className="font-bold text-white" />
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-medium mb-12">
                <ShinyText
                  text="jorge washeton"
                  disabled={false}
                  speed={5}
                  className="text-2xl md:text-3xl"
                />
              </div>
            </AnimatedContent>

            <AnimatedContent distance={60} duration={0.8} delay={0.2}>
              <Link to="/dexterio" className="block">
                <img
                  src="/images/timothy.jpg"
                  alt="dexterio"
                  className="w-full rounded-3xl shadow-2xl mb-12 cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </AnimatedContent>
            <AnimatedContent distance={60} duration={0.8} delay={0.2}>
              <Link to="/dexterio" className="block">
                <img
                  src="/images/aaa.jpg"
                  alt="dexterio"
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
                        In our times, we have been known to mistake the "great mistake" of thinking differently for being wrong. I feel everyone can unanimously agree that this is wrong. However what isnt wrong, is shaming dimwits for acting like they had a lobotomy and giving others one in the process, Introducing, Timothy Dexter, one of, if not the, Biggest idiot i have ever had the mis pleasure of reading about, and let me tell you this ones a real treat, Dexter was born in 1747 in Massachusetts, and had no formal education what so ever, dropping out of second grade at the ripe ol age of 8 yet somehow managed to become a millionaire, and not just any millionaire, but one who made his fortune through the most absurd and idiotic means possible, such as shipping coal to Newcastle (a city known for its coal mines) and shipping gloves to the West Indies (a tropical region where gloves are not needed). Despite his lack of education and common sense, Dexter was known for his eccentricity and confidence, often proclaiming himself a genius and a prophet. He even went as far as to publish a book called "A Pickle for the Knowing Ones," which was filled with nonsensical ramblings and bizarre illustrations. Dexter's story serves as a reminder that sometimes, ignorance can lead to unexpected success, but it also highlights the importance of critical thinking and common sense in navigating the world. As a young lad reading this, I see no more importance than taking in how sometimes being stupid can actually benefit you, and how survival of the fittest only matters if you know what that means. Dexter being the numbskulled moron he was obviously had some pretty interesting encounters, like when someone was making a statue of Thomas Jefferson and upon the sight of the guy painting him as the "Father of the declaration of independece" made him go guano insane, and instead saying that he wrote the constitution, which isnt true to the slightest degree he happened to be in france, but hey who would dare to question such a brilliant, sophisticated, knowledgeable man like him, litteraly anyone because he isnt any of those, and when the painter did, dexter threatened him with a long rifle while shooting around him as to make sure he changes it, this was 10 years after it happened so its equivelent to saying that jensen huang didnt found nvidia, steve jobs did, Another example would be when he staged his own funeral to see the reactions of the people closest to him were, and on the sight that his wife (whom he abused, called a ghost, and said that she didnt exist while saying she was a spirit because his house was built on an indian reservation) beat the crap out of her with a stick i presume he thought was cool and kept because thats the type of person i think he is. As you saw in the home page there was a bunch of puncuation, that isnt me slamming my head against my keyboard because i dont like coding, but its an exerpt from his book titled "A Pickle For The Knowing Ones" That bunch of punctuation was in response to a bunch of people buying the first of dexters book, wondering why it looks like it was writen like a dog on salvia, and then telling dexter how almost every single word was spelled wrong and no one knew what the hell he was talking about, so in classic dexter fashion, he basically said in the second iteration that anyone who complains can go bite him and then put that half a page of dots and squiggles saying if they wanted punctuation this is how theyll get it, for referance 10s of thousands of copies were sold by this bumbling idiot
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