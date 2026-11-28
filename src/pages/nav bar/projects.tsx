import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Waves from '@/components/Waves'
import { useState } from 'react'

function ImageWithLoader({ src, alt, className, onClick }: { src: string; alt: string; className: string; onClick?: () => void }) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="relative w-full h-full" onClick={onClick}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"
            style={{
              backgroundSize: '200% 100%',
              animation: 'shimmer 2s infinite'
            }}
          />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 ${onClick ? 'cursor-pointer' : ''}`}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
      />
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  )
}

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <Waves
          lineColor="#0F0F0F"
          backgroundColor="rgba(15, 15, 15, 1)"
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
        <Navigation />

        <section className="pt-32 pb-20 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-mono">
              Things I've Built
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-mono">
              stuff i do
            </p>
          </div>
        </section>
        <section className="py-20 px-8 border-t border-white/10 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 font-mono">
                (finished) Hackclub Projects
              </h2>
              <p className="text-gray-500 font-mono">
                Things I built for Hackclub stuff
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">




              /*claude car*/
              <Card className="border border-white/10 shadow-xl transition-all duration-300 rounded-2xl overflow-hidden bg-black/50 backdrop-blur-sm hover:border-white/30 hover:-translate-y-1 group">
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithLoader
                    src="/images/projectcards/stasis2.jpg"
                    alt="Clutch ClaudeBot9000"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onClick={() => setSelectedImage("/images/stasis2.jpg")}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-white font-mono">Clutch ClaudeBot9000</CardTitle>
                  <CardDescription className="text-sm text-gray-400 font-mono">
                    Mine and my friends projects for Hackclub's Stasis
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex gap-2 font-mono">
                  <Button asChild className="font-mono flex-1 bg-white text-black hover:bg-gray-200 rounded-full transition-all">
                    <a href="https://github.com/Dynix7/Stasis-Project" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="font-mono flex-1 border border-white/20 text-white hover:bg-white hover:text-black rounded-full transition-all font-mono">
                    <Link to="/project/ClutchClaudeBot9000">Details</Link>
                  </Button>
                </CardFooter>
              </Card>



              /*tv remote*/
              <Card className="border border-white/10 shadow-xl transition-all duration-300 rounded-2xl overflow-hidden bg-black/50 backdrop-blur-sm hover:border-white/30 hover:-translate-y-1 group">
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithLoader
                    src="/images/projectcards/WHYISTHETVTURNINGOFF.png"
                    alt="WHYISTHETVTURNINGOFF"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onClick={() => setSelectedImage("/images/WHYISTHETVTURNINGOFF.png")}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-white font-mono">WHYISTHETVTURNINGOFF</CardTitle>
                  <CardDescription className="text-sm text-gray-400 font-mono">
                    Something I made for something I guess
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex gap-2 ">
                  <Button asChild className="font-mono flex-1 bg-white text-black hover:bg-gray-200 rounded-full transition-all font-mono">
                    <a href="https://github.com/reghev/WHYISTHETVTURNINGOFF" target="_blank" rel="noopener noreferrer font-mono">
                      GitHub
                    </a>
                  </Button>
                  <Button asChild variant="outline" className=" font-mono flex-1 border border-white/20 text-white hover:bg-white hover:text-black rounded-full transition-all">
                    <Link to="/project/WHYISTHETVTURNINGOFF">Details</Link>
                  </Button>
                </CardFooter>
              </Card>



              /*raghav.beer*/
              <Card className="border border-white/10 shadow-xl transition-all duration-300 rounded-2xl overflow-hidden bg-black/50 backdrop-blur-sm hover:border-white/30 hover:-translate-y-1 group">
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithLoader
                    src="/images/projectcards/raghav.beer.png"
                    alt="raghav.beer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onClick={() => setSelectedImage("/images/raghav.beer.png")}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-white">raghav.beer</CardTitle>
                  <CardDescription className="text-sm text-gray-400 font-mono">
                    One of my projects for Terra
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex gap-2">
                  <Button asChild className="font-mo Wow, this my goodness gracious just all the brown sugar melting into that cara it's also got such like this kind of nineteen sixties you know can pineapple canned marichino cherries perfect yep truly truly perfect wow this is the wish bite did you know that I had a friend whono flex-1 bg-white text-black hover:bg-gray-200 rounded-full transition-all">
                    <a href="https://github.com/reghev/thebeginningoftheend" target="_blank" rel="noopener noreferrer font-mono">
                      GitHub
                    </a>
                  </Button>
                  <Button asChild variant="outline" className=" font-mono flex-1 border border-white/20 text-white hover:bg-white hover:text-black rounded-full transition-all">
                    <Link to="/project/raghavdotbeer">Details</Link>
                  </Button>
                  <Button asChild variant="outline" className="font-mono flex-1 border border-white/20 text-white hover:bg-white hover:text-black rounded-full transition-all font-mono">
                    <Link to="https://raghav.beer">Demo!</Link>
                  </Button>
                </CardFooter>
              </Card>





              /*mark-wahlberg*/
              <Card className="border border-white/10 shadow-xl transition-all duration-300 rounded-2xl overflow-hidden bg-black/50 backdrop-blur-sm hover:border-white/30 hover:-translate-y-1 group">
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithLoader
                    src="/images/projectcards/pathfinder1.png"
                    alt="Pathfinder"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onClick={() => setSelectedImage("/images/pathfinder1.png")}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-mono text-xl text-white">mark-wahlberg</CardTitle>
                  <CardDescription className="font-mono text-sm text-gray-400">
                    My project for pathfinder
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex gap-2">
                  <Button asChild className=" font-mono flex-1 bg-white text-black hover:bg-gray-200 rounded-full transition-all">
                    <a href="https://github.com/reghev/mark-wahlberg" target="_blank" rel="noopener noreferrer font-mono">
                      GitHub
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="font-mono flex-1 border border-white/20 text-white hover:bg-white hover:text-black rounded-full transition-all">
                    <Link to="/project/pathfinder">Details</Link>
                  </Button>
                </CardFooter>
              </Card>



              /*seth-blue*/
              <Card className="border border-white/10 shadow-xl transition-all duration-300 rounded-2xl overflow-hidden bg-black/50 backdrop-blur-sm hover:border-white/30 hover:-translate-y-1 group">
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithLoader
                    src="/images/projectcards/reality1.webp"
                    alt="Reality"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onClick={() => setSelectedImage("/images/reality1.webp")}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-mono text-xl text-white">seth-blue</CardTitle>
                  <CardDescription className=" font-mono text-sm text-gray-400">
                    My project for reality
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex gap-2">
                  <Button asChild className="font-mono flex-1 bg-white text-black hover:bg-gray-200 rounded-full transition-all">
                    <a href="https://github.com/reghev/seth-blue" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </Button>
                  <Button asChild variant="outline" className=" font-mono flex-1 border border-white/20 text-white hover:bg-white hover:text-black rounded-full transition-all">
                    <Link to="/project/reality">Details</Link>
                  </Button>
                </CardFooter>
              </Card>



              /*seth-green*/
              <Card className="border border-white/10 shadow-xl transition-all duration-300 rounded-2xl overflow-hidden bg-black/50 backdrop-blur-sm hover:border-white/30 hover:-translate-y-1 group">
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithLoader
                    src="/images/projectcards/solder1.png"
                    alt="Solder"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onClick={() => setSelectedImage("/images/solder1.png")}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-white font-mono ">seth-green</CardTitle>
                  <CardDescription className="text-sm text-gray-400 font-mono ">
                    My project for solder
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex gap-2 font-mono ">
                  <Button asChild className="font-mono flex-1 bg-white text-black hover:bg-gray-200 rounded-full transition-all">
                    <a href="https://github.com/reghev/seth-green" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="font-mono flex-1 border border-white/20 text-white hover:bg-white hover:text-black rounded-full transition-all">
                    <Link to="/project/solder">Details</Link>
                  </Button>
                </CardFooter>
              </Card>



              /*web.site*/
              <Card className="border border-white/10 shadow-xl transition-all duration-300 rounded-2xl overflow-hidden bg-black/50 backdrop-blur-sm hover:border-white/30 hover:-translate-y-1 group">
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithLoader
                    src="/images/projectcards/web.site.png"
                    alt="raghav.beer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onClick={() => setSelectedImage("/images/raghav.beer.png")}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-white">raghav.beer</CardTitle>
                  <CardDescription className="text-sm text-gray-400 font-mono">
                    Personal website
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex gap-2">
                  <Button asChild className="font-mono flex-1 bg-white text-black hover:bg-gray-200 rounded-full transition-all">
                    <a href="https://github.com/reghev/web.site" target="_blank" rel="noopener noreferrer font-mono">
                      GitHub
                    </a>
                  </Button>
                  <Button asChild variant="outline" className=" font-mono flex-1 border border-white/20 text-white hover:bg-white hover:text-black rounded-full transition-all">
                    <Link to="/">Details</Link>
                  </Button>
                  <Button asChild variant="outline" className="font-mono flex-1 border border-white/20 text-white hover:bg-white hover:text-black rounded-full transition-all font-mono">
                    <Link to="https://raghav.fit">Demo!</Link>
                  </Button>
                </CardFooter>
              </Card>



            </div>
          </div>
        </section>
        <Footer />
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="font-mono absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <div className="relative max-w-7xl max-h-full">
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain rounded-xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  )
}