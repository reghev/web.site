import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Waves from '@/components/Waves'
import DomeGallery from '@/components/DomeGallery';

export default function about() {
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
