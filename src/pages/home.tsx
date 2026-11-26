import AnimatedContent from '@/components/ui/animated-content'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Waves from '@/components/Waves'
import BlurText from '@/components/BlurText'



export default function home() {


  function handleAnimationComplete(): void {
    throw new Error('Function not implemented.')
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-white/10 blur-[140px] rounded-full" />
        <div className="absolute top-[30%] left-[10%] w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-white/5 blur-[140px] rounded-full" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="absolute inset-y-0 left-[20%] w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <div className="absolute inset-y-0 right-[30%] w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      </div>

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

        <section className="min-h-screen flex items-center justify-center px-8 relative">
          <div className="absolute inset-0 -z-10 flex justify-center items-center">
            <div className="w-[700px] h-[700px] rounded-full bg-gradient-to-br from-white/20 to-transparent blur-[160px]" />
          </div>

          <div className="max-w-4xl w-full text-center">

            <BlurText
              text="Making things as to not be useless slowly but surely"
              delay={140}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-[clamp(3rem,8vw,6.5rem)] font-extrabold tracking-tight text-white mb-6 leading-[0.95]"
            />

            <AnimatedContent distance={60} direction="vertical" duration={1} delay={0.5}>
              <p className="text-[clamp(1.25rem,3vw,2rem)] font-medium tracking-tight text-white mb-6 leading-relaxed">
                14-year-old developer, hacker, amateur powerlifter and bodybuilder. "The dream of a person defines more than themselves, but the entire world for who they choose to use as their canvas."
              </p>
            </AnimatedContent>
          </div>
        </section>

        <section className="py-16 px-8 border-y border-white/10 relative overflow-hidden bg-black">

          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        </section>

        <section className="py-40 px-8 relative">
          <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-[2px]" />


              /*gif stickers*/
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-10 left-[10%] rotate-[-8deg] group">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-white/10 backdrop-blur-sm rotate-[-2deg] z-10" />
              <div className="bg-white p-2 shadow-2xl">
                <img
                  src="/gifs/in utero.gif"
                  alt=""
                  className="w-32 h-32 object-cover"
                />
              </div>
            </div>
            <div className="absolute top-20 right-[15%] rotate-[12deg] group">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-white/10 backdrop-blur-sm rotate-[3deg] z-10" />
              <div className="bg-white p-2 shadow-2xl">
                <img
                  src="/gifs/trentwins.gif"
                  alt=""
                  className="w-40 h-40 object-cover"
                />
              </div>
            </div>
            <div className="absolute bottom-32 left-[8%] rotate-[6deg] group">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-white/10 backdrop-blur-sm rotate-[-4deg] z-10" />
              <div className="bg-white p-2 shadow-2xl">
                <img
                  src="/gifs/patrick.gif"
                  alt=""
                  className="w-36 h-36 object-cover"
                />
              </div>
            </div>
            <div className="absolute bottom-20 right-[12%] rotate-[-10deg] group">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-white/10 backdrop-blur-sm rotate-[2deg] z-10" />
              <div className="bg-white p-2 shadow-2xl">
                <img
                  src="/gifs/tspud.gif"
                  alt=""
                  className="w-32 h-32 object-cover"
                />
              </div>
            </div>
            <div className="absolute top-1/2 left-[5%] -translate-y-1/2 rotate-[-15deg] group">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-white/10 backdrop-blur-sm rotate-[5deg] z-10" />
              <div className="bg-white p-2 shadow-2xl">
                <img
                  src="/gifs/carterhere.gif"
                  alt=""
                  className="w-28 h-28 object-cover"
                />
              </div>
            </div>
          </div>





        </section>

        <section className="py-32 px-8 border-t border-white/10 bg-gradient-to-b from-black via-white/[0.02] to-black relative">
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }} />
        </section>

        <section className="py-40 px-8 text-center relative border-t border-white/10 bg-black overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] pointer-events-none" />

          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />

          <div className="relative z-10">
            <AnimatedContent distance={60} duration={0.8}>
              <h2 className="text-6xl font-bold text-white mb-6 leading-tight">
                want to see how i waste my time?
              </h2>
              <Button
                asChild
                className="bg-white text-black rounded-full px-12 py-7 text-xl font-medium transition-all hover:scale-[1.04] hover:shadow-[0_0_40px_rgba(255,255,255,0.35)]"
              >
                <Link to="/projects">View All Projects →</Link>
              </Button>
            </AnimatedContent>
          </div>
        </section>

        <Footer />
      </div>
      <div className="fixed inset-0 pointer-events-none opacity-[0.025] bg-[url('/noise.png')]" />
    </div>
  )
}