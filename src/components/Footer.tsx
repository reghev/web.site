import { useState, useEffect } from 'react'
import AnimatedLogo from './AnimatedLogo'
import { Link } from 'react-router-dom'

function FooterRandomText() {
  const [randomText, setRandomText] = useState('building legos')

  useEffect(() => {
    const phrases = [
      "building legos",
      "poorly coding stuff",
      "doing things",
      "being here",
      "playing stanley parable",
      "burning things",
      "lifting weights",
      "listening to nirvana",
      "thinking about food",
      "avoiding homework",
      "daydreaming about hackclub",
      "looking at fender custom shop",
      "waiting for summer",
      "pondering existence",
      "pcpartpicker connoisseur",
    ]
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)]
    setRandomText(randomPhrase)
  }, [])

  return (
    <p className="text-sm text-gray-500">
      {randomText} since a little bit ago
    </p>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black relative">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <AnimatedLogo
                image1="/images/FOUND.png"
                image2="/images/MISSING.png"
                alt="Logo"
                size={48}
              />
              <h3 className="font-bold text-xl text-white">raghav.fit</h3>
            </div>
            <FooterRandomText />
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white text-sm uppercase tracking-wider">
              Navigation
            </h3>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-gray-500 hover:text-white transition-colors text-smtext-white font-semibold mb-6 font-mono">
                Home
              </Link>
              <Link to="/about" className="text-gray-500 hover:text-white transition-colors text-smtext-white font-semibold mb-6 font-mono">
                About
              </Link>
              <Link to="/projects" className="text-gray-500 hover:text-white transition-colors text-smtext-white font-semibold mb-6 font-mono">
                Projects
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white text-sm uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://github.com/reghev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors text-sm"
              >
                <h3 className="text-gray-500 hover:text-white transition-colors text-smtext-white font-semibold mb-6 font-mono">
              github
            </h3>
                <img
                src="https://img.icons8.com/?size=100&id=bQfpMAcJiPCD&format=png&color=000000"
                alt="github"
                className="w-4 h-4 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/raghav-madiraju-1363bb338"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors text-sm"
              >
                <h3 className="text-gray-500 hover:text-white transition-colors text-smtext-white font-semibold mb-6 font-mono">
              linkedin
            </h3>
                <img
                src="https://img.icons8.com/?size=100&id=60ZV_wYC0BM2&format=png&color=000000"
                alt="linkedin"
                className="w-4 h-4"
                />
              </a>
              <a
                href="mailto:raghavmadiraju@gmail.com"
                className="text-gray-500 hover:text-white transition-colors text-sm"
              >
                <h3 className="text-gray-500 hover:text-white transition-colors text-smtext-white font-semibold mb-6 font-mono">
              email
            </h3>
                <img
                src="https://img.icons8.com/?size=100&id=80664&format=png&color=000000"
                alt="gmail"
                className="w-4 h-4"
                />
              </a>
              <a
                href="https://www.instagram.com/reghevbetta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors text-sm"
              >
                <h3 className="text-gray-500 hover:text-white transition-colors text-smtext-white font-semibold mb-6 font-mono">
              instagram
            </h3>
                <img
                src="https://img.icons8.com/?size=100&id=hK7HDtSy9QsB&format=png&color=000000"
                alt="instagram"
                className="w-4 h-4"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 raghav.fit · Built with React & Tailwind
            </p>
            <div className="flex gap-6 text-sm">
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}