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
  const techLogos = [
    { src: "/logos/react.png", alt: "React" },
    { src: "/logos/typescript.png", alt: "TypeScript" },
    { src: "/logos/tailwind.png", alt: "Tailwind" },
    { src: "/logos/pat.jpg", alt: "pat" },
    { src: "/logos/js.png", alt: "Java Script" },
    { src: "/logos/github.png", alt: "Gurthub😂👋" },
    { src: "/logos/download.png", alt: "Python" },
    { src: "/logos/cow.png", alt: "cow" },
    { src: "/logos/clash.png", alt: "clash" },
  ]

  const skills = [
    {
      name: "Graphic Design",
      icon: "🎨",
      description: "Created over 30+ logos for companies, clients, and others"
    },
    {
      name: "Web Development",
      icon: "💻",
      description: "Built multiple websites using applications like react, typescript, javascript, html, and css"
    },
    {
      name: "Electrical Engineering*",
      icon: "⚡",
      description: "Made a few projects using Kicad and various tools to design and build PCBs and other electronics"
    },
    {
      name: "Physio Science",
      icon: "🧬",
      description: "Avid researcher of the fields of physio science, sports science, nutrition, and overall anatomical science"
    },
    {
      name: "Branding",
      icon: "✨",
      description: "Crafting memorable brand experiences and identities"
    },
    {
      name: "Fitness Advisor",
      icon: "💪",
      description: "Made multiple people personalized fitness plans and helped them with nutrition and educated them on physio science"
    },
  ]

  const [selectedSkill, setSelectedSkill] = useState<string>(skills[0].name);

  const placeholders = [
    <img key="drmikescreaminghisballsoff" src="/thingies/drmikescreaminghisballsoff.png" alt="" className="my-auto w-6 h-6 sm:w-8 sm:h-8" />,
    <img key="kihng azoulay and ali sohbh" src="/thingies/kihng azoulay and ali sohbh.png" alt="" className="my-auto w-6 h-6 sm:w-8 sm:h-8" />,
    <img key="or just control c then control v" src="/thingies/or just control c then control v.png" alt="" className="my-auto w-6 h-6 sm:w-8 sm:h-8" />,
    <img key="pat" src="/thingies/pat.jpg" alt="" className="my-auto w-6 h-6 sm:w-8 sm:h-8" />,
    <img key="charlie" src="/thingies/charchar.jpg" alt="" className="my-auto w-6 h-6 sm:w-8 sm:h-8" />,
    <img key="monkey thinking" src="/thingies/monkey.jpg" alt="" className="my-auto w-6 h-6 sm:w-8 sm:h-8" />,
    <img key="charlie" src="/thingies/charchar.jpg" alt="" className="my-auto w-6 h-6 sm:w-8 sm:h-8" />,

  ]


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
              text="Building cool stuff one project at a time"
              delay={140}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-[clamp(3rem,8vw,6.5rem)] font-extrabold tracking-tight text-white mb-6 leading-[0.95]"
            />

            <AnimatedContent distance={60} direction="vertical" duration={1} delay={0.5}>
              <p className="text-[clamp(1.25rem,3vw,2rem)] font-medium tracking-tight text-white mb-6 leading-relaxed">
                13-year-old developer, hackclub enthusiast, amatuer powerlifter and bodybuilder,
                Third place at NASA SpaceApps 2022 Cleveland. "You dont learn if you dont try".
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
                  <Link to="about">About Me</Link>
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
                      {[...skills, ...skills].flatMap((skill, i) => [
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
                        </button>,
                        <span key={`shape-${i}`} className="text-white/40">
                          {placeholders[i % placeholders.length]}
                        </span>
                      ]).slice(0, -1)}
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
          </div>

          <div className="max-w-3xl mx-auto relative">
            <AnimatedContent distance={60} duration={0.8}>
              <div className="rounded-3xl bg-white/[0.03] backdrop-blur-xl p-12 md:p-16 hover:bg-white/[0.06] transition-all">
                <h3 className="text-[clamp(2rem,4vw,6rem)] font-extrabold tracking-tight text-white mb-6 leading-[0.95] text-center">
                  About Me
                </h3>
                <p className="text-[clamp(1rem,2vw,1.125rem)] font-extralight tracking-wider text-gray-300/80 leading-loose">
                  Hey, Im raghav i like lifting, science, tech, music, and im a scout, Im a hackclubber and ive been to a couple hackathons
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

          <div className="relative z-10">
            <Marquee className="[--duration:30s]" pauseOnHover>
              {techLogos.map((logo, i) => (
                <div key={i} className="flex items-center justify-center w-32 h-32 mx-4">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-16 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </Marquee>
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
                From Hackclub projects to random tier lists, I've been doing all sorts of things.
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