import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export interface ChromaItem {
  image: string;
  title: string;
  subtitle: string;
  handle?: string;
  location?: string;
  borderColor?: string;
  gradient?: string;
  url?: string;
}

export interface ChromaGridProps {
  items?: ChromaItem[];
  className?: string;
  radius?: number;
  damping?: number;
  fadeOut?: number;
  ease?: string;
}

type SetterFn = (v: number | string) => void;

const ChromaGrid: React.FC<ChromaGridProps> = ({
  items,
  className = '',
  radius = 300,
  damping = 0.45,
  fadeOut = 0.6,
  ease = 'power3.out'
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const setX = useRef<SetterFn | null>(null);
  const setY = useRef<SetterFn | null>(null);
  const pos = useRef({ x: 0, y: 0 });

  const demo: ChromaItem[] = [

    {
      image: 'data:image/jpeg;base64,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',
      title: 'Stanley P',
      subtitle: 'Monitors data coming from a computer screen and presses buttons appropriately without question.',
      handle: '@stanleyp',
      borderColor: '#06B6D4',
      gradient: 'linear-gradient(135deg,#06B6D4,#000)',
      url: 'https://stanleyparable.com'
    },
    {
      image: 'data:image/jpeg;base64,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',
      title: 'Dark P',
      subtitle: 'Prince',
      handle: '@dpthecp',
      borderColor: '#06B6D4',
      gradient: 'linear-gradient(135deg,#06B6D4,#000)',
      url: 'https://clashroyale.com'
    },
    {
      image: 'https://media.tenor.com/i3KB87XbafsAAAAM/patrick-patrick-star.gif',
      title: 'Patrick S',
      subtitle: '"or just control c then control v"',
      handle: '@pstarr',
      borderColor: '#06B6D4',
      gradient: 'linear-gradient(135deg,#06B6D4,#000)',
      url: 'patrickstar.com'
    },
    {
      image: 'data:image/jpeg;base64,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',
      title: 'Cat H',
      subtitle: 'I am indeed a cat, and this, indeed, is a hat.',
      handle: 'CatintheHat',
      borderColor: '#06B6D4',
      gradient: 'linear-gradient(135deg,#06B6D4,#000)',
      url: 'catinthehat.com'
    },
    {
      image: 'https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=204,height=204,fit=cover,f=auto/0dc045701d81d54357156c4f2731cd71/henry-stickmin.png',
      title: 'Henry S',
      subtitle: '???',
      handle: 'Chrstickman',
      borderColor: '#06B6D4',
      gradient: 'linear-gradient(135deg,#06B6D4,#000)',
      url: 'HenryStickmin.com'
    },
  ];

  const data = items?.length ? items : demo;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, '--x', 'px') as SetterFn;
    setY.current = gsap.quickSetter(el, '--y', 'px') as SetterFn;
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x: number, y: number) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true
    });
  };

  const handleMove = (e: React.PointerEvent) => {
    const r = rootRef.current!.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true
    });
  };

  const handleCardClick = (url?: string) => {
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCardMove: React.MouseEventHandler<HTMLElement> = e => {
    const c = e.currentTarget as HTMLElement;
    const rect = c.getBoundingClientRect();
    c.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    c.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={rootRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`relative w-full h-full flex flex-wrap justify-center items-start gap-3 ${className}`}
      style={
        {
          '--r': `${radius}px`,
          '--x': '50%',
          '--y': '50%'
        } as React.CSSProperties
      }
    >
      {data.map((c, i) => (
        <article
          key={i}
          onMouseMove={handleCardMove}
          onClick={() => handleCardClick(c.url)}
          className="group relative flex flex-col w-[300px] rounded-[20px] overflow-hidden border-2 border-transparent transition-colors duration-300 cursor-pointer"
          style={
            {
              '--card-border': c.borderColor || 'transparent',
              background: c.gradient,
              '--spotlight-color': 'rgba(255,255,255,0.3)'
            } as React.CSSProperties
          }
        >
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
            style={{
              background:
                'radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)'
            }}
          />
          <div className="relative z-10 flex-1 p-[10px] box-border">
            <img src={c.image} alt={c.title} loading="lazy" className="w-full h-full object-cover rounded-[10px]" />
          </div>
          <footer className="relative z-10 p-3 text-white font-sans grid grid-cols-[1fr_auto] gap-x-3 gap-y-1">
            <h3 className="m-0 text-[1.05rem] font-semibold">{c.title}</h3>
            {c.handle && <span className="text-[0.95rem] opacity-80 text-right">{c.handle}</span>}
            <p className="m-0 text-[0.85rem] opacity-85">{c.subtitle}</p>
            {c.location && <span className="text-[0.85rem] opacity-85 text-right">{c.location}</span>}
          </footer>
        </article>
      ))}
      <div
        className="absolute inset-0 pointer-events-none z-30"
        style={{
          backdropFilter: 'grayscale(1) brightness(0.78)',
          WebkitBackdropFilter: 'grayscale(1) brightness(0.78)',
          background: 'rgba(0,0,0,0.001)',
          maskImage:
            'radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)',
          WebkitMaskImage:
            'radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)'
        }}
      />
      <div
        ref={fadeRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-[250ms] z-40"
        style={{
          backdropFilter: 'grayscale(1) brightness(0.78)',
          WebkitBackdropFilter: 'grayscale(1) brightness(0.78)',
          background: 'rgba(0,0,0,0.001)',
          maskImage:
            'radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)',
          opacity: 1
        }}
      />
    </div>
  );
};

export default ChromaGrid;
