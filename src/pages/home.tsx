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

          <div className="max-w-4xl w-full text-center">

            <BlurText
              text="Making things as to not be useless slowly but surely"
              delay={140}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-[clamp(3rem,8vw,6.5rem)] font-extrabold tracking-tight text-white mb-6 leading-[0.95] font-mono"
            />

            <AnimatedContent distance={60} direction="vertical" duration={1} delay={0.5}>
              <p className="text-[clamp(1.25rem,3vw,2rem)] font-medium tracking-tight text-white mb-6 leading-relaxed font-mono">
                14-year-old developer, hacker, amateur powerlifter and bodybuilder. "The dream of a person defines more than themselves, but the entire world for who they choose to use as their canvas."
              </p>
            </AnimatedContent>
          </div>
        </section>


        <section className="py-40 px-8 text-center relative border-t border-white/10 bg-black overflow-hidden">
          <div className="relative z-10">
            <AnimatedContent distance={60} duration={0.8}>
              <h2 className="text-6xl font-bold text-white mb-6 leading-tight font-mono">
                want to see how i waste my time?
              </h2>
              <Button
                asChild
                className="bg-white text-black rounded-full px-12 py-7 text-xl font-medium transition-all hover:scale-[1.04] hover:shadow-[0_0_40px_rgba(255,255,255,0.35)] font-mono"
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