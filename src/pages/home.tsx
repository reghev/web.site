import { SplitText } from '@/components/ui/split-text'
import AnimatedContent from '@/components/ui/animated-content'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import Navigation from '@/components/Navigation'
import ShinyText from '@/components/ShinyText'
import Footer from '@/components/Footer'
import Waves from '@/components/Waves'
import { useState } from 'react'

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black relative">


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
        <Navigation />

        <section className="min-h-screen flex items-center justify-center pt-20 px-8 relative">
          <div className="max-w-5xl text-center relative z-10">
            <AnimatedContent distance={80} direction="vertical" duration={1} delay={0.2}>
              <h1 className="text-7xl md:text-8xl font-bold text-white mb-6 leading-tight">
                <SplitText text="raghav.fit" className="inline-block" delay={0.03} />
              </h1>
            </AnimatedContent>

            <AnimatedContent distance={60} direction="vertical" duration={1} delay={0.5}>
              <div className="text-2xl md:text-3xl font-medium mb-12">
                <ShinyText
                  text="In search of good enough"
                  disabled={false}
                  speed={5}
                  className="text-2xl md:text-3xl"
                />
              </div>
            </AnimatedContent>

            <AnimatedContent distance={40} direction="vertical" duration={1} delay={0.8}>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button asChild className="border-2 border-black text-white hover:bg-black bg-white hover:border-white text-black hover:text-white rounded-full px-8 py-6 text-lg transition-all">
                  <Link to="/about">Learn more</Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-2 hover:border-black border-white text-white hover:bg-white bg-black hover:text-black rounded-full px-8 py-6 text-lg transition-all"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View projects
                </Button>
              </div>
            </AnimatedContent>
          </div>
        </section>

        <section className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <AnimatedContent distance={60} duration={0.8}>
              <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 text-white">
                Hackclub projects
              </h2>
              <p className="text-xl text-gray-400 text-center mb-16 font-medium">
                stuff i did thats pretty cool
              </p>
            </AnimatedContent>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedContent distance={80} duration={0.8} delay={0}>
                <Card className="border-2 border-black shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden bg-black hover:-translate-y-2 ">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src="/images/pathfinder1.png"
                      alt="Pathfinder"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">mark-wahlberg</CardTitle>
                    <CardDescription className="text-base text-gray-600">
                      My project for pathfinder
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex flex-col gap-3">
                    <Button asChild className="w-full bg-white text-black hover:bg-gray-800 rounded-full py-6 transition-all">
                      <a href="https://github.com/reghev/mark-wahlberg" target="_blank" rel="noopener noreferrer">
                        View Project →
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full border-2 border-white text-white hover:bg-black hover:text-white rounded-full py-6 transition-all">
                      <Link to="/project/pathfinder" className="block group">
                        More info
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedContent>

              <AnimatedContent distance={80} duration={0.8} delay={0.2}>
                <Card className="border-2 border-black shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden bg-black hover:-translate-y-2 ">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src="/images/reality1.webp"
                      alt="Reality"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">take-a-chill-pill</CardTitle>
                    <CardDescription className="text-base text-gray-600">
                      My project for reality
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex flex-col gap-3">
                    <Button asChild className="w-full bg-white text-black hover:bg-gray-800 rounded-full py-6 transition-all">
                      <a href="https://github.com/reghev/seth-blue" target="_blank" rel="noopener noreferrer">
                        View Project →
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full border-2 border-white text-white hover:bg-white hover:text-black rounded-full py-6 transition-all">
                      <Link to="/project/reality" className="block group">
                        More info
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedContent>

              <AnimatedContent distance={80} duration={0.8} delay={0.2}>
                <Card className="border-2 border-black shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden bg-black hover:-translate-y-2 ">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src="/images/solder1.png"
                      alt="Reality"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">take-a-chill-pill</CardTitle>
                    <CardDescription className="text-base text-gray-600">
                      My project for solder
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex flex-col gap-3">
                    <Button asChild className="w-full bg-white text-black hover:bg-gray-800 rounded-full py-6 transition-all">
                      <a href="https://github.com/reghev/seth-green" target="_blank" rel="noopener noreferrer">
                        View Project →
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full border-2 border-white text-white hover:bg-white hover:text-black rounded-full py-6 transition-all">
                      <Link to="/project/reality" className="block group">
                        More info
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedContent>
            </div>
          </div>
        </section>

        <section id="projects" className="py-32 px-8">
          <div className="max-w-7xl mx-auto">
            <AnimatedContent distance={60} duration={0.8}>
              <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 text-white">
                Projects
              </h2>
              <p className="text-xl text-gray-400 text-center mb-20 font-medium">
                Rankings and reviews you didn't ask for
              </p>
            </AnimatedContent>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedContent distance={80} duration={0.8} delay={0}>
                <Card className="border-2 border-white shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden bg-white hover:-translate-y-2 ">
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
                  <CardFooter className="flex flex-col gap-3">
                    <Button asChild className="w-full bg-black text-white hover:bg-gray-800 rounded-full py-6 transition-all">
                      <a href="https://tiermaker.com/create/top-40-ice-cream-flavors-15607441" target="_blank" rel="noopener noreferrer">
                        View Tier List →
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full border-2 border-black text-black hover:bg-black hover:text-white rounded-full py-6 transition-all">
                      <Link to="/tl/icecream" className="block group">
                        More info
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedContent>

              <AnimatedContent distance={80} duration={0.8} delay={0.2}>
                <Card className="border-2 border-white shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden bg-white hover:-translate-y-2">
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
                  <CardFooter className="flex flex-col gap-3">
                    <Button asChild className="w-full bg-black text-white hover:bg-gray-800 rounded-full py-6 transition-all">
                      <a href="https://tiermaker.com/create/protein-powder-tier-list-17372092" target="_blank" rel="noopener noreferrer">
                        View Tier List →
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full border-2 border-black text-black hover:bg-black hover:text-white rounded-full py-6 transition-all">
                      <Link to="/tl/proteinpowder" className="block group">
                        More info
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedContent>

              <AnimatedContent distance={80} duration={0.8} delay={0.4}>
                <Card className="border-2 border-white shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden bg-white hover:-translate-y-2">
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
                  <CardFooter className="flex flex-col gap-3">
                    <Button asChild className="w-full bg-black text-white hover:bg-gray-800 rounded-full py-6 transition-all">
                      <a href="https://tiermaker.com/create/absolute-best-energy-drinks-16706475" target="_blank" rel="noopener noreferrer">
                        View Tier List →
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full border-2 border-black text-black hover:bg-black hover:text-white rounded-full py-6 transition-all">
                      <Link to="/tl/energydrinks" className="block group">
                        More info
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedContent>
            </div>
          </div>
        </section>
        <div className="pt-24">
          <Footer />
        </div>
      </div>
    </div>
  )
}