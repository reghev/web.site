import { SplitText } from '@/components/ui/split-text'
import Carousel from '@/components/Carousel'
import Footer from '@/components/Footer'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function Home() {
  const projects = [
    {
      title: "ice cream tier list",
      description: "my FACTUAL opinions on ice cream (100% objective btw)",
      image: "/images/icecream.png",
      link: "https://tiermaker.com/create/top-40-ice-cream-flavors-15607441"
    },
    {
      title: "best protein powder of all time",
      description: "my take on all important protein powders",
      image: "/images/protein.png",
      link: "https://tiermaker.com/create/protein-powder-tier-list-17372092"
    },
    {
      title: "Energy Drinks tier list",
      description: "this took way too long",
      image: "/images/monster.jpg",
      link: "https://tiermaker.com/create/absolute-best-energy-drinks-16706475"
    }
  ]

  return (
    <div className="w-screen min-h-screen">
      <div className="m-8 flex items-center justify-center">
        <div className="text-5xl border border-3 rounded-xl p-4 bg-base-300">
          <SplitText text="welcome to my website" className="font-bold" />
        </div>
      </div>

      <Carousel />

      <div className="w-screen mt-12">
        <div className="m-8 flex items-center justify-center">
          <div className="text-5xl border border-3 rounded-xl p-4 bg-base-300">
            <SplitText text="useless stuff" className="font-bold" />
          </div>
        </div>

        <div className="flex flex-row justify-center items-start gap-[15px] mt-12">
          {projects.map((project, index) => (
            <Card key={index} className="w-96">
              <CardHeader>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-[200px] object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="mt-2">{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    check it out
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="pt-48">
        <Footer />
      </div>
    </div>
  )
}