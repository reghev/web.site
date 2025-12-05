import { SplitText } from '@/components/ui/split-text'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Waves from '@/components/Waves'
import ClickSpark from '@/components/ClickSpark'

export default function About() {
  return (
    <div className="h-full bg-black relative">
      <ClickSpark />
      <Navigation/>
      {/* Waves background for entire page */}
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
   

    <div className=" flex items-center justify-center ">
          <div className="text-5xl border-2 border-white rounded-xl p-4 bg-black/50">
            <SplitText text="about me" className="font-bold text-white" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto p-8">
          <Card className="bg-white border-2 border-white">
            <CardHeader>
              <CardTitle className="text-3xl">Hi, I'm Raghav!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg">
                I'm Raghav, A little bit about me is I'm 13, I'm into bodybuilding and powerlifting and I'm a hackclubber. I was 3rd in NASA's spaceapps hackathon in Cleveland in 2022 and I am incredibly lazy and haven't done anything generally useful for hackclub YET. My favorite band is Nirvana and my favorite artist is 21 Savage, I play guitar, violin, bass and spend my time in school, eating, sleeping, or lighting things on fire (still got that 4.0 gpa tho). If you need anything which I doubt you do from me then feel free to contact me at raghavmadiraju@gmail.com or slack or go to the footer and look for alternate contact.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="pt-24">
          <Footer />
        </div>
      </div>
    </div>
  )
}