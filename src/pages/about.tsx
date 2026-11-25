import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Waves from '@/components/Waves'
import { SplitText } from '@/components/ui/split-text'
import DomeGallery from '@/components/DomeGallery';

export default function about() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">

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
      <div className="relative z-10">
        <Navigation />

        <section className="pt-40 pb-24 px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 font-mono text-xs text-gray-400">
              <SplitText text="about me" />
            </h1>
          </div>
        </section>

        <section className="pb-32 px-8">
          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10">
              <h2 className="text-3xl text-white font-semibold mb-6 font-mono text-xs text-gray-400">
                Hi, I'm Raghav
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed font-mono text-xs text-gray-400">
                I've been coding since about 10 years old and then built my first pc at 11. I started lifting at 12 and did my first powerlifting meet at 13, right now im working on renovating this website because its not what i want it to be.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-8">
          <div className="h-px bg-white/10 mb-32" />
        </div>

        <div style={{ width: '100vw', height: '100vh' }}>
          <DomeGallery
            images={[
              '/photodome/castle1.jpg',
              '/photodome/castle2.jpg',
              '/photodome/md.jpg',
              '/photodome/snowcastle.jpg',
              '/photodome/aust.jpg',
              '/photodome/montreal.jpeg',
              '/photodome/montreal2.jpeg',
              '/photodome/montreal3.jpeg',
              '/photodome/scremaing.jpeg',
              '/photodome/vienna.jpeg',
              '/photodome/vienna2.jpeg',
              '/photodome/vienna3.jpeg',
              '/photodome/tulum.jpeg',
              '/photodome/tulum2.jpeg',
              '/photodome/tulum3.jpeg',
              '/photodome/austin.jpeg',
              '/photodome/austin2.jpeg',
              '/photodome/aura.jpeg',


            ]}
            fit={1}
            minRadius={300}
            maxVerticalRotationDeg={20}
            segments={30}
            dragDampening={0}
            fitBasis={'auto'}
            overlayBlurColor={'rgba(0, 0, 0, 0.5)'}
            grayscale={false}
          />
        </div>
        <div className="h-px bg-white/10 mb-32" />

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
