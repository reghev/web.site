import { useEffect, useState } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export default function GlitchText({ text, className = '' }: GlitchTextProps) {
  const [glitchText, setGlitchText] = useState(text);
  const chars = '!<>-_\\/[]{}—=+*^?#________';

  useEffect(() => {
    let frame = 0;
    const interval = setInterval(() => {
      if (frame < 3) {
        setGlitchText(
          text
            .split('')
            .map((char) => {
              if (Math.random() < 0.3) {
                return chars[Math.floor(Math.random() * chars.length)];
              }
              return char;
            })
            .join('')
        );
        frame++;
      } else {
        setGlitchText(text);
        frame = 0;
      }
    }, 50);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className={`inline-block relative ${className}`}>
      <span className="relative z-10">{glitchText}</span>
      <span
        className="absolute top-0 left-0 opacity-80"
        style={{
          textShadow: '2px 0 #ff00de, -2px 0 #00fff9',
          animation: 'glitch 0.3s infinite'
        }}
      >
        {text}
      </span>
    </span>
  );
}