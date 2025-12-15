import { useState } from 'react'
import { SplitText } from '@/components/ui/split-text'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Waves from '@/components/Waves'
import ClickSpark from '@/components/ClickSpark'

export default function About() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const images = [
    {
      src: 'images/tuff.jpg',
      alt: 'frostymobile',
      caption: 'me next to the frostymobile'
    },
    {
      src: 'images/friends.jpg',
      alt: 'laim',
      caption: 'freinds'
    },
    {
      src: 'images/fb.jpg',
      alt: 'fb',
      caption: 'go rcoks'
    },
  ]

  return (
    <div className="min-h-screen bg-black relative">
      <ClickSpark />
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

        <div className="flex items-center justify-center pt-32 pb-12 px-8">
          <div className="text-5xl border-2 border-white rounded-xl p-4 bg-black/50">
            <SplitText text="about me" className="font-bold text-white" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-8 pb-8 space-y-8">
          <Card className="bg-black border-2 border-white">
            <CardHeader>
              <CardTitle className="text-3xl text-white">Hi, I'm Raghav!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-white">
                I'm Raghav, A little bit about me is I'm 13, I'm into bodybuilding and powerlifting and I'm a hackclubber. I was 3rd in NASA's spaceapps hackathon in Cleveland in 2022 and I am incredibly lazy and haven't done anything generally useful for hackclub YET. My favorite band is Nirvana and my favorite artist is 21 Savage, I play guitar, violin, bass and spend my time in school, eating, sleeping, or lighting things on fire (still got that 4.0 gpa tho). If you need anything which I doubt you do from me then feel free to contact me at raghavmadiraju@gmail.com or slack or go to the footer and look for alternate contact.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black border-2 border-white">
            <CardHeader>
              <CardTitle className="text-3xl text-white">Gallery</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-square overflow-hidden rounded-lg border-2 border-white/50 hover:border-white cursor-pointer transition-all duration-300 hover:scale-105"
                    onClick={() => setSelectedImage(image.src)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    {image.caption && (
                      <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs p-2 text-center">
                        {image.caption}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="pt-24">
          <Footer />
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            
          </button>
          <div className="relative max-w-7xl max-h-full">
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg border-2 border-white"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-white text-center mt-4 text-sm">
              Click outside to close
            </p>
          </div>
        </div>
      )}
    </div>
  )
}