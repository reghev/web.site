import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Waves from '@/components/Waves'
import { SplitText } from '@/components/ui/split-text'
import { Cursor } from '@/components/cursor'
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
      <Cursor />
      <div className="relative z-10">
        <Navigation />

        <section className="pt-40 pb-24 px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              <SplitText text="about me" />
            </h1>
          </div>
        </section>

        <section className="pb-32 px-8">
          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10">
              <h2 className="text-3xl text-white font-semibold mb-6">
                Hi, I'm Raghav
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Im 14 and I do literally nothing with my time except for school and lifting, I like to code sometimes
                <br /><br />
                I play guitar and bass and read alot
                <br /><br />
                If you need anything — which you probably don'  t — email me at
                <span className="text-white font-medium"> raghavmadiraju@gmail.com</span>.
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
            '/thingies/castle1.jpg',
            '/thingies/castle2.jpg',
            '/thingies/md.jpeg',
            '/thingies/snowcastle.jpeg',

            ]}   
            fit={0.8}
            minRadius={600}
            maxVerticalRotationDeg={0}
            segments={34}  
            dragDampening={2}
            fitBasis={'auto'}
            overlayBlurColor={'rgba(0, 0, 0, 0.5)'}
          />
        </div>

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
