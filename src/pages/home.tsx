import AnimatedContent from '@/components/ui/animated-content'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Waves from '@/components/Waves'
import { Marquee } from '@/components/Marquee'
import { Cursor } from '@/components/cursor'
import { useState } from 'react'
import BlurText from '@/components/BlurText'



export default function home() {

  const skills = [
    {
      name: "Hackathon(ing?)",
      icon: "",
      description: "Gone to over 8 hackathons, won none, top 3 at 3"
    },
    {
      name: "Code(ing?)",
      icon: "💻",
      description: "Used my massive amounts of freetime to build PCBs websites and various other useless objects"
    },
    {
      name: "Hardware(ing?)",
      icon: "⚡",
      description: "Made a few projects using Kicad and various tools to design and build PCBs and other electronics"
    },
    {
      name: "Powerlifting",
      icon: "",
      description: "Been to over 5 powerlifting meets, won 1 and top 3 and 4"
    },
    {
      name: "Volunteering",
      icon: "",
      description: "Volunteered at various hackathons aswell as educational camps for computer engineering"
    },
  ]

  const [selectedSkill, setSelectedSkill] = useState<string>(skills[0].name);



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

            <AnimatedContent distance={40} direction="vertical" duration={1} delay={0.7}>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button
                  asChild
                  className="relative overflow-hidden rounded-full bg-white text-black px-8 py-6 text-lg font-medium transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,255,255,0.35)]"
                >
                  <Link to="/projects">View My Work</Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="border border-white/30 text-white backdrop-blur-md hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg transition-all "
                >
                  <Link to="/about">About Me</Link>
                </Button>
              </div>
            </AnimatedContent>
          </div>
        </section>

        <section className="py-16 px-8 border-y border-white/10 relative overflow-hidden bg-black">

          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          <section className="py-24 px-8 border-y border-white/10 relative overflow-hidden bg-black">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto">
              <AnimatedContent distance={30} duration={0.6}>
                <div className="mb-16 max-w-4xl mx-auto">
                  <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-12 md:p-16 transition-all">
                    <div className="flex flex-col md:flex-row items-start gap-8">
                      <div className="text-7xl md:text-8xl">
                        {skills.find(s => s.name === selectedSkill)?.icon || '💼'}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                          {selectedSkill}
                        </h3>
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                          {skills.find(s => s.name === selectedSkill)?.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full overflow-visible">
                  <Marquee pauseOnHover className="[--duration:60s]">
  <div className="flex items-center gap-3">
    {[...skills, ...skills].map((skill, i) => (
      <button
        key={`skill-${i}`}
        onClick={() => setSelectedSkill(skill.name)}
        onMouseEnter={() => setSelectedSkill(skill.name)}
        className={`px-6 py-3 rounded-full border whitespace-nowrap transition-all cursor-pointer text-lg font-medium
          ${selectedSkill === skill.name
            ? 'border-white bg-white text-black'
            : 'border-white/20 bg-black text-gray-400 hover:text-white hover:border-white/50 hover:bg-white/5'
          }
        `}
      >
        {skill.name}
      </button>
    ))}
  </div>
</Marquee>
                </div>
              </AnimatedContent>
            </div>
          </section>

        </section>

        <section className="py-40 px-8 relative">
          <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-[2px]" />

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

          <div className="max-w-3xl mx-auto relative">
            <AnimatedContent distance={60} duration={0.8}>
              <div className="rounded-3xl bg-white/[0.03] backdrop-blur-xl p-12 md:p-16 hover:bg-white/[0.06] transition-all">
                <h3 className="text-[clamp(2rem,4vw,6rem)] font-extrabold tracking-tight text-white mb-6 leading-[0.95] text-center">
                  About Me
                </h3>
                <p className="text-[clamp(1rem,2vw,1.125rem)] font-extralight tracking-wider text-gray-300/80 leading-loose">
                  Whats up reader, Im Raghav, I lift, I code, and I try not to be useless, check out some stuff or do something else i guess?.
                </p>
              </div>
            </AnimatedContent>
          </div>
        </section>

        <section className="py-32 px-8 border-t border-white/10 bg-gradient-to-b from-black via-white/[0.02] to-black relative">
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }} />

          <div className="max-w-6xl mx-auto mb-16 text-center relative z-10">
            <AnimatedContent distance={60} duration={0.8}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Tech Stack
              </h2>
              <p className="text-gray-500 text-lg">
                stuff i use and sometimes understand
              </p>
            </AnimatedContent>
          </div>

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
              <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">
                Stuff I do to not waste time but end up wasting time
              </p>
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