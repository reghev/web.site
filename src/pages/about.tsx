import { SplitText } from '@/components/ui/split-text'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function About() {
  return (
    <div className="min-h-screen bg-base-200">
      <Navigation />

      <div className="m-8 flex items-center justify-center pt-20">
        <div className="text-5xl border border-3 rounded-xl p-4 bg-base-300">
          <SplitText text="about me" className="font-bold" />
        </div>
      </div>
      

      <div className="max-w-4xl mx-auto p-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Hi, I'm Raghav!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg">
              I'm Raghav, A litle bit about me is im 13 im into bodybuilding and powerlifting and im a hackclubber, I was 3rd in NASA's spaceapps hackathon in cleveland in 2022
            </p>
            
            
            
            
          </CardContent>
        </Card>
      </div>

      <div className="pt-24">
        <Footer />
      </div>
    </div>
  )
}