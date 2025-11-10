import { useState, useEffect } from 'react'

export default function Footer() {
  const [randomText, setRandomText] = useState('building legos')

  useEffect(() => {
    const phrases = [
      "building legos",
      "coding cool stuff",
      "doing things",
      "being here",
      "playing stanley parable",
      "burning things"
    ]
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)]
    setRandomText(randomPhrase)
  }, [])

  return (
    <footer className="bg-base-200 text-base-content p-10">
      <div className="footer">
        <aside>
          <img src="/images/MISSING.png" className="w-[100px] h-[100px]" alt="logo" />
          <p className="font-mono">
            raghav.fit
            <br />
            <span>{randomText}</span> right now
          </p>
        </aside>
        
        <nav>
          <h6 className="footer-title">Contact</h6>
          <a 
            href="mailto:raghavmadiraju@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="link link-hover flex items-center gap-2"
          >
            <img src="https://api.iconify.design/material-symbols:mail-rounded.svg" className="w-4 h-4" alt="email" />
            Email
          </a>
          <a 
            href="https://www.linkedin.com/in/raghav-madiraju-1363bb338" 
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover flex items-center gap-2"
          >
            <img src="https://api.iconify.design/line-md:linkedin.svg" className="w-4 h-4" alt="linkedin" />
            Linkedin
          </a>
          <a 
            href="https://github.com/reghev" 
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover flex items-center gap-2"
          >
            <img src="https://api.iconify.design/mdi:github.svg" className="w-4 h-4" alt="github" />
            Github
          </a>
        </nav>
        
        <nav>
          <h6 className="footer-title">More ME</h6>
          <a 
            href="https://www.instagram.com/reghevbetta" 
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover flex items-center gap-2"
          >
            <img src="https://api.iconify.design/uil:instagram.svg" className="w-4 h-4" alt="instagram" />
            Insta
          </a>
          <a 
            href="https://open.spotify.com/user/31wwc5ku5rmuahl5br5ca4po3ila" 
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover flex items-center gap-2"
          >
            <img src="https://api.iconify.design/logos:spotify-icon.svg" className="w-4 h-4" alt="spotify" />
            Spotify
          </a>
          <a 
            href="https://steamcommunity.com/id/reghevbetta/" 
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover flex items-center gap-2"
          >
            <img src="https://api.iconify.design/mdi:steam.svg" className="w-4 h-4" alt="steam" />
            Steam
          </a>
        </nav>
      </div>
    </footer>
  )
}import { useState, useEffect } from 'react'

export default function Footer() {
  const [randomText, setRandomText] = useState('building legos')

  useEffect(() => {
    const phrases = [
      "building legos",
      "coding cool stuff",
      "doing things",
      "being here",
      "playing stanley parable",
      "burning things"
    ]
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)]
    setRandomText(randomPhrase)
  }, [])

  return (
    <footer className="bg-base-200 text-base-content p-10">
      <div className="footer">
        <aside>
          <img src="/images/MISSING.png" className="w-[100px] h-[100px]" alt="logo" />
          <p className="font-mono">
            raghav.fit
            <br />
            <span>{randomText}</span> right now
          </p>
        </aside>
        
        <nav>
          <h6 className="footer-title">Contact</h6>
          <a 
            href="mailto:raghavmadiraju@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="link link-hover flex items-center gap-2"
          >
            <img src="https://api.iconify.design/material-symbols:mail-rounded.svg" className="w-4 h-4" alt="email" />
            Email
          </a>
          <a 
            href="https://www.linkedin.com/in/raghav-madiraju-1363bb338" 
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover flex items-center gap-2"
          >
            <img src="https://api.iconify.design/line-md:linkedin.svg" className="w-4 h-4" alt="linkedin" />
            Linkedin
          </a>
          <a 
            href="https://github.com/reghev" 
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover flex items-center gap-2"
          >
            <img src="https://api.iconify.design/mdi:github.svg" className="w-4 h-4" alt="github" />
            Github
          </a>
        </nav>
        
        <nav>
          <h6 className="footer-title">More ME</h6>
          <a 
            href="https://www.instagram.com/reghevbetta" 
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover flex items-center gap-2"
          >
            <img src="https://api.iconify.design/uil:instagram.svg" className="w-4 h-4" alt="instagram" />
            Insta
          </a>
          <a 
            href="https://open.spotify.com/user/31wwc5ku5rmuahl5br5ca4po3ila" 
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover flex items-center gap-2"
          >
            <img src="https://api.iconify.design/logos:spotify-icon.svg" className="w-4 h-4" alt="spotify" />
            Spotify
          </a>
          <a 
            href="https://steamcommunity.com/id/reghevbetta/" 
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover flex items-center gap-2"
          >
            <img src="https://api.iconify.design/mdi:steam.svg" className="w-4 h-4" alt="steam" />
            Steam
          </a>
        </nav>
      </div>
    </footer>
  )
}