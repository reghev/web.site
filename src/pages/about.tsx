import { SplitText } from '@/components/ui/split-text'
import Breadcrumbs from '@/components/Breadcrumbs'
import Footer from '@/components/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function About() {
  return (
    <div className="w-screen min-h-screen">
      <Breadcrumbs />

      <div className="m-8 flex items-center justify-center">
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
              Write your introduction here...
            </p>
            
            <div>
              <h3 className="text-2xl font-bold mb-2">What I Do</h3>
              <p>
                Talk about your interests, hobbies, what you're learning, etc...
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-2">Skills</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Skill 1</li>
                <li>Skill 2</li>
                <li>Skill 3</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-2">Interests</h3>
              <p>
                Your hobbies and interests...
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="pt-48">
        <Footer />
      </div>
    </div>
  )
}