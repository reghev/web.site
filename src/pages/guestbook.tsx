import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { SplitText } from '@/components/ui/split-text'
import AnimatedContent from '@/components/ui/animated-content'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Waves from '@/components/Waves'
import ShinyText from '@/components/ShinyText'

interface GuestBookEntry {
  name: string
  message: string
  timestamp: string
  id: number
}

declare global {
  interface Window {
    storage: {
      get: (key: string, shared: boolean) => Promise<{ key: string; value: string; shared: boolean } | null>
      set: (key: string, value: string, shared: boolean) => Promise<{ key: string; value: string; shared: boolean } | null>
      list: (prefix: string, shared: boolean) => Promise<{ keys: string[]; prefix?: string; shared: boolean } | null>
    }
  }
}

export default function GuestBook() {
  const [entries, setEntries] = useState<GuestBookEntry[]>([])
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [loadingText] = useState(() => {
    const loadingMessages = [
      'selecting entries that benefit me...',
      'reading your minds...',
      'judging your opinions...',
      'searching for compliments...',
      'filtering out the haters...',
      'calculating cool points...',
      'decoding your messages...',
      'vibing with the comments...',
      'processing your thoughts...',
      'loading epic signatures...'
    ]
    return loadingMessages[Math.floor(Math.random() * loadingMessages.length)]
  })

  useEffect(() => {
    loadEntries()
  }, [])

  const loadEntries = async () => {
    try {
      // Check if window.storage exists (Claude artifacts)
      if (typeof window !== 'undefined' && window.storage) {
        const keys = await window.storage.list('guestbook:', true)
        if (keys && keys.keys) {
          const allEntries = await Promise.all(
            keys.keys.map(async (key: string) => {
              const result = await window.storage.get(key, true)
              return result ? JSON.parse(result.value) as GuestBookEntry : null
            })
          )
          const validEntries = allEntries
            .filter((entry): entry is GuestBookEntry => entry !== null)
            .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
          setEntries(validEntries)
        }
      } else {
        // Fallback to localStorage
        const keys = Object.keys(localStorage).filter(k => k.startsWith('guestbook:'))
        const allEntries = keys.map(key => {
          try {
            return JSON.parse(localStorage.getItem(key) || '') as GuestBookEntry
          } catch {
            return null
          }
        })
        const validEntries = allEntries
          .filter((entry): entry is GuestBookEntry => entry !== null)
          .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
        setEntries(validEntries)
      }
    } catch (error) {
      console.log('Loading entries:', error)
      setEntries([])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async () => {
    if (!name.trim() || !message.trim()) return

    setIsSubmitting(true)
    try {
      const entry: GuestBookEntry = {
        name: name.trim(),
        message: message.trim(),
        timestamp: new Date().toISOString(),
        id: Date.now()
      }

      // Try window.storage first (Claude artifacts)
      if (typeof window !== 'undefined' && window.storage) {
        await window.storage.set(`guestbook:${entry.id}`, JSON.stringify(entry), true)
      } else {
        // Fallback to localStorage
        localStorage.setItem(`guestbook:${entry.id}`, JSON.stringify(entry))
      }
      
      setEntries([entry, ...entries])
      setName('')
      setMessage('')
    } catch (error) {
      console.error('Error saving entry:', error)
      alert('Failed to save your entry. Please try again!')
    } finally {
      setIsSubmitting(false)
    }
  }

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp)
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="min-h-screen bg-black relative">
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

      <div className="relative z-10">
        <Navigation />

        <section className="min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-8">
          <div className="max-w-4xl w-full">
            <AnimatedContent distance={60} duration={0.8}>
              <div className="flex items-center justify-center mb-8">
                <div className="text-5xl border-2 border-white rounded-xl p-4 bg-black/50">
                  <SplitText text="guest book" className="font-bold text-white" />
                </div>
              </div>
              <div className="text-xl text-gray-400 text-center mb-16 font-medium">
                <ShinyText
                  text="So, what did you think?"
                  disabled={false}
                  speed={5}
                  className="text-2xl md:text-3xl"
                />
              </div>
            </AnimatedContent>

            <AnimatedContent distance={60} duration={0.8} delay={0.2}>
              <Card className="bg-black border-2 border-white rounded-3xl mb-12 shadow-lg hover:shadow-2xl transition-all">
                <CardHeader>
                  <CardTitle className="text-3xl text-white">Sign the Guest Book</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Message
                      </label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="what were your thoughts, what should i add?"
                        className="w-full px-4 py-3 bg-black border-2 border-white rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                        rows={4}
                        maxLength={500}
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        {message.length}/128941924891 characters
                      </p>
                    </div>
                     <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="sign here"
                        className="w-full px-4 py-3 bg-black border-2 border-white rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors"
                        maxLength={50}
                      />
                    </div>
                    <Button
                      onClick={handleSubmit}
                      disabled={isSubmitting || !name.trim() || !message.trim()}
                      className="w-full bg-white text-black hover:bg-gray-800 hover:text-white border-2 border-white rounded-full py-6 text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Signing...' : 'Sign Guest Book'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedContent>

            <AnimatedContent distance={60} duration={0.8} delay={0.4}>
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-white text-center mb-8">
                  {entries.length} {entries.length === 1 ? 'Signature' : 'Signatures'}
                </h2>
                
                {isLoading ? (
                  <div className="text-center py-12">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
                    <p className="text-gray-400 mt-4 text-lg">{loadingText}</p>
                  </div>
                ) : entries.length === 0 ? (
                  <Card className="bg-black border-2 border-white rounded-3xl">
                    <CardContent className="py-12 text-center">
                      <p className="text-gray-400 text-xl">
                        No signatures yet. Be the first to sign!
                      </p>
                    </CardContent>
                  </Card>
                ) : (
                  entries.map((entry, index) => (
                    <AnimatedContent key={entry.id} distance={40} duration={0.6} delay={index * 0.1}>
                      <Card className="bg-black border-2 border-white rounded-3xl hover:border-purple-500 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-xl font-semibold text-white">
                                {entry.name}
                              </h3>
                              <p className="text-sm text-gray-400">
                                {formatDate(entry.timestamp)}
                              </p>
                            </div>
                          </div>
                          <p className="text-gray-300 whitespace-pre-wrap break-words text-lg">
                            {entry.message}
                          </p>
                        </CardContent>
                      </Card>
                    </AnimatedContent>
                  ))
                )}
              </div>
            </AnimatedContent>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  )
}