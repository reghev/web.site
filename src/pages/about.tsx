import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Waves from '@/components/Waves'
import ClickSpark from '@/components/ClickSpark'
import { SplitText } from '@/components/ui/split-text'
import { Cursor } from '@/components/cursor'

export default function About() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const images = [
    { src: 'images/tuff.jpg', caption: 'me next to the frostymobile' },
    { src: 'images/mmm.jpg', caption: 'aw da' },
    { src: 'images/fb.jpg', caption: 'go rocks' },
    { src: 'images/pat.jpg', caption: 'gso rock' },
    { src: 'images/friends.jpg', caption: 'friends' },
  ]

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <ClickSpark />

      <div className="fixed inset-0 pointer-events-none">
        <Waves
          lineColor="#ffffff05"
          backgroundColor="rgba(0,0,0,1)"
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

        <section className="pt-40 pb-24 px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              <SplitText text="about me" />
            </h1>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              some context behind the code, lifting, and random ideas
            </p>
          </div>
        </section>

        <section className="pb-32 px-8">
          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10">
              <h2 className="text-3xl text-white font-semibold mb-6">
                Hi, I’m Raghav
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm 13, into bodybuilding and powerlifting, and a Hack Clubber.
                I placed 3rd at NASA SpaceApps Cleveland in 2022 and spend most of
                my time building things, lifting, listening to Nirvana, or
                researching something I probably don’t need to know.
                <br /><br />
                I play guitar, violin, bass, and somehow still maintain a 4.0 GPA
                while lighting things on fire (educationally).
                <br /><br />
                If you need anything — which you probably don’t — email me at
                <span className="text-white font-medium"> raghavmadiraju@gmail.com</span>.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-8">
          <div className="h-px bg-white/10 mb-32" />
        </div>

        <section className="pb-40 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12">
              life outside the editor
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {images.map((image, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedImage(image.src)}
                  className="group relative aspect-[4/5] overflow-hidden rounded-2xl cursor-pointer"
                >
                  <img
                    src={image.src}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors" />

                  {image.caption && (
                    <div className="absolute bottom-4 left-4 right-4 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      {image.caption}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt=""
            className="max-h-[90vh] max-w-full rounded-xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}
