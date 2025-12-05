import { SplitText } from '@/components/ui/split-text'
import AnimatedContent from '@/components/ui/animated-content'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import Navigation from '@/components/Navigation'
import ShinyText from '@/components/ShinyText'
import Footer from '@/components/Footer'
import Waves from '@/components/Waves';
import ClickSpark from '@/components/ClickSpark';
import CircularGallery from '@/components/CircularGallery'
import GlitchText from '@/components/GlitchText'

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative">
      <ClickSpark sparkColor="#ffffffff" />

      {/* Waves background for entire page */}
      <div className="fixed inset-0 pointer-events-none">
        <Waves
          lineColor="#481c81ff"
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
        <Navigation />

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center pt-20 px-8 relative">
          <div className="max-w-5xl text-center relative z-10">
            <AnimatedContent distance={80} direction="vertical" duration={1} delay={0.2}>
              <h1 className="text-7xl md:text-8xl font-bold text-white mb-6 leading-tight">
                <SplitText text="Welcome." className="inline-block" delay={0.03} />
              </h1>
            </AnimatedContent>

            <AnimatedContent distance={60} direction="vertical" duration={1} delay={0.5}>
              <div className="text-2xl md:text-3xl text-gray-400 font-medium mb-12">
                <ShinyText
                  text="In search of good "
                  disabled={false}
                  speed={3}
                  className="text-2xl md:text-3xl text-gray-400 font-medium"
                />
                <GlitchText
                  text="enough"
                  className="text-2xl md:text-3xl text-gray-400 font-medium"
                />
              </div>
            </AnimatedContent>

            <AnimatedContent distance={40} direction="vertical" duration={1} delay={0.8}>
              <div className="flex gap-4 justify-center">
                <Button asChild className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg">
                  <Link to="/about">Learn more</Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View projects
                </Button>
              </div>
            </AnimatedContent>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 px-8 h-screen">
          <div className="max-w-6xl mx-auto h-full">
            <AnimatedContent distance={60} duration={0.8}>
              <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 text-white">
                Hackclub projects
              </h2>
              <p className="text-xl text-gray-400 text-center mb-16 font-medium">
                stuff i did thats pretty cool
              </p>
            </AnimatedContent>

            <div className="h-[600px]">
              <CircularGallery
                items={[
                  { image: '/images/lois.png', text: 'Matrix Project' },
                  { image: '/images/bp.webp', text: 'Circuit Board' },
                  { image: '/images/dinosaur.png', text: 'Dinosaur' }
                ]}
                bend={3}
                textColor="#ffffff"
                borderRadius={0.05}
                scrollSpeed={2}
                scrollEase={0.05}
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-8">
          <div className="max-w-7xl mx-auto">
            <AnimatedContent distance={60} duration={0.8}>
              <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 text-white">
                Projects
              </h2>
              <p className="text-xl text-gray-400 text-center mb-20 font-light">
                Rankings and reviews you didn't ask for
              </p>
            </AnimatedContent>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedContent distance={80} duration={0.8} delay={0}>
                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden bg-white hover:-translate-y-2, border-2 border-white">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src="/images/icecream.png"
                      alt="Ice Cream"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">Ice Cream Tier List</CardTitle>
                    <CardDescription className="text-base text-gray-600">
                      My factual opinions on ice cream
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button asChild className="w-full bg-black text-white hover:bg-gray-800 rounded-full py-6">
                      <a href="https://tiermaker.com/create/top-40-ice-cream-flavors-15607441" target="_blank" rel="noopener noreferrer">
                        View →
                      </a>
                    </Button>
                    <Button asChild className="w-full bg-black text-white hover:bg-gray-800 rounded-full py-6">
                      <Link to="pages/icecreamtierlist">
                        More info
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedContent>

              <AnimatedContent distance={80} duration={0.8} delay={0.2}>
                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden bg-white hover:-translate-y-2, border-2 border-white">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src="/images/protein.png"
                      alt="Protein"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">Protein Powder Rankings</CardTitle>
                    <CardDescription className="text-base text-gray-600">
                      every single protein powder that matters
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button asChild className="w-full bg-black text-white hover:bg-gray-800 rounded-full py-6">
                      <a href="https://tiermaker.com/create/protein-powder-tier-list-17372092" target="_blank" rel="noopener noreferrer">
                        View →
                      </a>
                    </Button>
                    <Button asChild className="w-full bg-black text-white hover:bg-gray-800 rounded-full py-6">
                      <Link to='/pages/proteintierlist'>
                        More info
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedContent>

              <AnimatedContent distance={80} duration={0.8} delay={0.4}>
                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden bg-white hover:-translate-y-2, border-2 border-white">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src="/images/monster.jpg"
                      alt="Energy Drinks"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">Energy Drinks Ranked</CardTitle>
                    <CardDescription className="text-base text-gray-600">
                      this took way too long
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button asChild className="w-full bg-black text-white hover:bg-gray-800 rounded-full py-6">
                      <a href="https://tiermaker.com/create/absolute-best-energy-drinks-16706475" target="_blank" rel="noopener noreferrer">
                        View →
                      </a>
                    </Button>
                    <Button asChild className="w-full bg-black text-white hover:bg-gray-800 rounded-full py-6">
                      <Link to="pages/energydrinkstierlist">
                        More info
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedContent>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="pt-24">
          <Footer />
        </div>
      </div>
    </div>
  )
}