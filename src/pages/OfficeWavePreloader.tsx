import { useState, useEffect, useRef } from 'react'

interface OfficeWavePreloaderProps {
  onFinish: () => void;
}

export default function OfficeWavePreloader({ onFinish }: OfficeWavePreloaderProps) {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState<string[]>([
    'THE END IS NEVER THE',
    '',
    '',
    '',
    '',
    '',
    '',
  ])
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  const handleCommand = (cmd: string) => {
    if (cmd.toLowerCase() === 'end') {
      setOutput(prev => [...prev, `> ${cmd}`, 'WELCOME', 'STANLEY'])
      setTimeout(() => onFinish(), 1000)
    } else if (cmd.toLowerCase() === 'help') {
      setOutput(prev => [...prev, `> ${cmd}`, 'Available commands: CLEAR'])
    } else if (cmd.toLowerCase() === 'clear') {
      setOutput([])
    } else {
      setOutput(prev => [...prev, `> ${cmd}`, 'Command not recognized.'])
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (input.trim()) {
        handleCommand(input)
        setInput('')
      }
    }
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [output])

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center"
      onClick={() => inputRef.current?.focus()}
      style={{
        backgroundImage: 'url(/images/stanley-office2.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <style>
        {`
          @keyframes blink {
            0%, 49% { opacity: 1; }
            50%, 100% { opacity: 0; }
          }

          @keyframes scanline {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
          }

          .terminal-scroll::-webkit-scrollbar {
            display: none;
          }
          .terminal-scroll {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
      <div className="w-screen h-screen flex items-center justify-center p-4">
        <div className="relative w-64 h-96 sm:w-80 sm:h-[480px] md:w-96 md:h-[576px] lg:w-[420px] lg:h-[630px]">
          <div
            className="absolute inset-0 z-20 pointer-events-none opacity-15"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(51, 255, 51, 0.1) 2px, rgba(51, 255, 51, 0.1) 4px)',
            }}
          />

          <div
            className="absolute inset-x-0 h-16 z-30 pointer-events-none opacity-20"
            style={{
              background: 'linear-gradient(to bottom, transparent, rgba(51, 255, 51, 0.2), transparent)',
              animation: 'scanline 8s linear infinite'
            }}
          />

          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, transparent 20%, rgba(0, 0, 0, 0.5) 100%)',
            }}
          />
          <div
            ref={terminalRef}
            className="relative z-40 w-full h-full p-3 sm:p-4 overflow-y-auto font-mono text-[#33ff33] terminal-scroll text-xs sm:text-sm md:text-base"
          >
            <div className="space-y-0">
              {output.map((line, index) => (
                <div
                  key={index}
                  className="leading-tight"
                  style={{
                    fontFamily: "'Courier New', monospace",
                    textShadow: '0 0 6px rgba(51, 255, 51, 0.7)',
                    letterSpacing: '0.03em'
                  }}
                >
                  {line || '\u00A0'}
                </div>
              ))}
              <div className="flex items-center">
                <span className="mr-1" style={{ textShadow: '0 0 6px rgba(51, 255, 51, 0.7)' }}>&gt;</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent border-none outline-none text-[#33ff33] uppercase"
                  style={{
                    fontFamily: "'Courier New', monospace",
                    textShadow: '0 0 6px rgba(51, 255, 51, 0.7)',
                    caretColor: '#33ff33',
                    fontSize: 'inherit'
                  }}
                  autoComplete="off"
                />
                <span
                  className="inline-block w-1 h-2 bg-[#33ff33] ml-0.5"
                  style={{ animation: 'blink 1s step-end infinite' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}