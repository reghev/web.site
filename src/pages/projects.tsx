import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Waves from '@/components/Waves'
import { useState } from 'react'
import { Cursor } from '@/components/cursor'

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
<Cursor />
      <div className="relative z-10">
        <Navigation />

        <section className="pt-32 pb-20 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Things I've Built
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              From Hackclub projects to random tier lists, here's everything I've been working on.
            </p>
          </div>
        </section>

        <section className="py-20 px-8 border-t border-white/10 relative">

          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Hackclub Projects
              </h2>
              <p className="text-gray-500">
                Things I built for Hackclub challenges
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border border-white/10 shadow-xl transition-all duration-300 rounded-2xl overflow-hidden bg-black/50 backdrop-blur-sm hover:border-white/30 hover:-translate-y-1 group">
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithLoader
                    src="/images/pathfinder1.png"
                    alt="Pathfinder"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onClick={() => setSelectedImage("/images/pathfinder1.png")}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-white">mark-wahlberg</CardTitle>
                  <CardDescription className="text-sm text-gray-400">
                    My project for pathfinder
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex gap-2">
                  <Button asChild className="flex-1 bg-white text-black hover:bg-gray-200 rounded-full transition-all">
                    <a href="https://github.com/reghev/mark-wahlberg" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1 border border-white/20 text-white hover:bg-white hover:text-black rounded-full transition-all">
                    <Link to="/project/pathfinder">Details</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border border-white/10 shadow-xl transition-all duration-300 rounded-2xl overflow-hidden bg-black/50 backdrop-blur-sm hover:border-white/30 hover:-translate-y-1 group">
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithLoader
                    src="/images/reality1.webp"
                    alt="Reality"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onClick={() => setSelectedImage("/images/reality1.webp")}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-white">seth-blue</CardTitle>
                  <CardDescription className="text-sm text-gray-400">
                    My project for reality
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex gap-2">
                  <Button asChild className="flex-1 bg-white text-black hover:bg-gray-200 rounded-full transition-all">
                    <a href="https://github.com/reghev/seth-blue" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1 border border-white/20 text-white hover:bg-white hover:text-black rounded-full transition-all">
                    <Link to="/project/reality">Details</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border border-white/10 shadow-xl transition-all duration-300 rounded-2xl overflow-hidden bg-black/50 backdrop-blur-sm hover:border-white/30 hover:-translate-y-1 group">
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithLoader
                    src="/images/solder1.png"
                    alt="Solder"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onClick={() => setSelectedImage("/images/solder1.png")}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-white">seth-green</CardTitle>
                  <CardDescription className="text-sm text-gray-400">
                    My project for solder
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex gap-2">
                  <Button asChild className="flex-1 bg-white text-black hover:bg-gray-200 rounded-full transition-all">
                    <a href="https://github.com/reghev/seth-green" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1 border border-white/20 text-white hover:bg-white hover:text-black rounded-full transition-all">
                    <Link to="/project/solder">Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 px-8 border-t border-white/10 relative">

          <div 
            className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Random Stuff
              </h2>
              <p className="text-gray-500">
                Things nobody asked for but I made anyway
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {[
                { img: "/images/icecream.png", title: "Ice Cream Tier List", desc: "My factual opinions", link: "https://tiermaker.com/create/top-40-ice-cream-flavors-15607441", page: "/tl/icecream" },
                { img: "/images/protein.png", title: "Protein Rankings", desc: "Every powder that matters", link: "https://tiermaker.com/create/protein-powder-tier-list-17372092", page: "/tl/proteinpowder" },
                { img: "/images/energydrinks.png", title: "Energy Drinks", desc: "This took way too long", link: "https://tiermaker.com/create/absolute-best-energy-drinks-16706475", page: "/tl/energydrinks" },
              ].map((item, i) => (
                <Card key={i} className="border border-white/10 shadow-xl transition-all duration-300 rounded-2xl overflow-hidden bg-black/50 backdrop-blur-sm hover:border-white/30 hover:-translate-y-1 group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <ImageWithLoader
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onClick={() => setSelectedImage(item.img)}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-white">{item.title}</CardTitle>
                    <CardDescription className="text-sm text-gray-400">{item.desc}</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex gap-2">
                    <Button asChild className="flex-1 bg-white text-black hover:bg-gray-200 rounded-full transition-all">
                      <a href={item.link} target="_blank" rel="noopener noreferrer">View List</a>
                    </Button>
                    <Button asChild variant="outline" className="flex-1 border border-white/20 text-white hover:bg-white hover:text-black rounded-full transition-all">
                      <Link to={item.page}>Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { img: "/images/diogenenes.png", title: "Diogenes Poster", desc: "The best philosopher", page: "/fuzzgenes" },
                { img: "/images/timothy.jpg", title: "Timothy Dexter Essay", desc: "America's eccentric millionaire", page: "/dexterio" },
                { img: "/images/minipekka.jpg", title: "Clash Rankings", desc: "Every card and deck", page: "/clash" },
              ].map((item, i) => (
                <Card key={i} className="border border-white/10 shadow-xl transition-all duration-300 rounded-2xl overflow-hidden bg-black/50 backdrop-blur-sm hover:border-white/30 hover:-translate-y-1 group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <ImageWithLoader
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onClick={() => setSelectedImage(item.img)}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-white">{item.title}</CardTitle>
                    <CardDescription className="text-sm text-gray-400">{item.desc}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full border border-white/20 text-white hover:bg-white hover:text-black rounded-full transition-all">
                      <Link to={item.page}>View →</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
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
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors z-10"
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