import { SplitText } from '@/components/ui/split-text'
import AnimatedContent from '@/components/ui/animated-content'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Waves from '@/components/Waves'
import GradientWaves from '@/components/GradientWaves'
import ShinyText from '@/components/ShinyText';
export default function Home() {
  return (
    <div className="min-h-screen bg-base-100">
      <GradientWaves
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

      <Navigation />


      {/* Hero Section */}
      <section className="min-h-screen bg-base-100 flex items-center justify-center pt-20 px-8 relative">

        <Waves
          lineColor="rgba(255, 255, 255, 0.1)"
          backgroundColor="black"
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

        {/* Hero Content */}
        <div className="max-w-5xl text-center relative z-10">

          <AnimatedContent
            distance={80}
            direction="vertical"
            duration={1}
            delay={0.2}
          >
            <h1 className="text-7xl md:text-8xl font-bold text-white mb-6 leading-tight">
              <SplitText text="Welcome." className="inline-block" delay={0.03} />
            </h1>
          </AnimatedContent>

          <AnimatedContent
            distance={60}
            direction="vertical"
            duration={1}
            delay={0.5}
          >

            <ShinyText
              text="In search of good enough"
              disabled={false}
              speed={3}
              className="text-2xl md:text-3xl text-gray-400 font-medium mb-12"
            />
          </AnimatedContent>

          <AnimatedContent
            distance={40}
            direction="vertical"
            duration={1}
            delay={0.8}
          >
            <div className="flex gap-4 justify-center">
              <Button
                asChild
                className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-6 text-lg"
              >
                <Link to="/about">Learn more</Link>
              </Button>
              <Button
                variant="outline"
                className="border-2 border-gray-300 hover:border-gray-400 hover:text-grey-400 rounded-full px-8 py-6 text-white"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View projects
              </Button>
            </div>
          </AnimatedContent>
        </div>
      </section>






      {/* Gallery Section */}

      <section className="min-h-screen bg-base-100">
        
          <GradientWaves
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

          <div className="max-w-6xl mx-auto">
            <AnimatedContent distance={60} duration={0.8}>
              <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">
                Hackclub projects
              </h2>
              <p className="text-xl text-gray-600 text-center mb-16 font-medium">
                stuff i did thats pretty cool
              </p>
            </AnimatedContent>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              <AnimatedContent distance={100} duration={0.8} delay={0}>
                <Link to="/project/matrix" className="block group">
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                    <img
                      src="/images/lois.png"
                      alt="Matrix Project"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-2xl font-semibold">View Project →</span>
                    </div>
                  </div>
                </Link>
              </AnimatedContent>

              <AnimatedContent distance={100} duration={0.8} delay={0.2}>
                <Link to="/project/circuit" className="block group">
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                    <img
                      src="/images/bp.webp"
                      alt="Circuit Board"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-2xl font-semibold">View Project →</span>
                    </div>
                  </div>
                </Link>
              </AnimatedContent>

              <AnimatedContent distance={100} duration={0.8} delay={0.4}>
                <Link to="/project/dinosaur" className="block group">
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                    <img
                      src="/images/dinosaur.png"
                      alt="Dinosaur Icon"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-2xl font-semibold">View Project →</span>
                    </div>
                  </div>
                </Link>
              </AnimatedContent>
            </div>
          </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen bg-base-100">
        <div className="max-w-7xl mx-auto">
          <AnimatedContent distance={60} duration={0.8}>
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">
              Projects
            </h2>
            <p className="text-xl text-gray-600 text-center mb-20 font-light">
              Rankings and reviews you didn't ask for
            </p>
          </AnimatedContent>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedContent distance={80} duration={0.8} delay={0}>
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden bg-white hover:-translate-y-2">
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
                  <Button
                    asChild
                    className="w-full bg-black text-white hover:bg-gray-800 rounded-full py-6"
                  >
                    <a href="https://tiermaker.com/create/top-40-ice-cream-flavors-15607441" target="_blank" rel="noopener noreferrer">
                      View →
                    </a>

                  </Button>
                </CardFooter>
              </Card>
            </AnimatedContent>

            <AnimatedContent distance={80} duration={0.8} delay={0.2}>
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden bg-white hover:-translate-y-2">
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
                  <Button
                    asChild
                    className="w-full bg-black text-white hover:bg-gray-800 rounded-full py-6"
                  >
                    <a href="https://tiermaker.com/create/protein-powder-tier-list-17372092" target="_blank" rel="noopener noreferrer">
                      View →
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedContent>

            <AnimatedContent distance={80} duration={0.8} delay={0.4}>
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden bg-white hover:-translate-y-2">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/images/monster.jpg"
                    alt="Energy Drinks"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">EVERY single energy drink ranked</CardTitle>
                  <CardDescription className="text-base text-gray-600">
                    this took way too long
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button
                    asChild
                    className="w-full bg-black text-white hover:bg-gray-800 rounded-full py-6"
                  >
                    <a href="https://tiermaker.com/create/absolute-best-energy-drinks-16706475" target="_blank" rel="noopener noreferrer">
                      View →
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedContent>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/images/MISSING.png" alt="Logo" className="w-12 h-12" />
                <h3 className="font-semibold text-xl">Raghav.fit</h3>
              </div>
              <FooterRandomText />
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:raghavmadiraju@gmail.com"
                  className="text-gray-600 hover:text-black transition-colors flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Email
                </a>
                <a
                  href="https://www.linkedin.com/in/raghav-madiraju-1363bb338"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://github.com/reghev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Social</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.instagram.com/reghevbetta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Instagram
                </a>
                <a
                  href="https://open.spotify.com/user/31wwc5ku5rmuahl5br5ca4po3ila"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                  Spotify
                </a>
                <a
                  href="https://steamcommunity.com/id/reghevbetta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z" />
                  </svg>
                  Steam
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
            © 2024 Raghav. All rights reserved.
          </div>
        </div>
      </footer>    </div>
  )
}

function FooterRandomText() {
  const [randomText, setRandomText] = useState('building legos')

  useEffect(() => {
    const phrases = [
      "building legos",
      "coding cool stuff",
      "doing things",
      "being here",
      "playing stanley parable",
      "burning things"
    ]
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)]
    setRandomText(randomPhrase)
  }, [])

  return (
    <p className="text-sm text-gray-600">
      {randomText} since a little bit ago
    </p>
  )
}