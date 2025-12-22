import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-100% - var(--gap))); }
        }
        
        @keyframes marquee-vertical {
          from { transform: translateY(0); }
          to { transform: translateY(calc(-100% - var(--gap))); }
        }
        
        .animate-marquee {
          animation: marquee var(--duration) linear infinite;
        }
        
        .animate-marquee-vertical {
          animation: marquee-vertical var(--duration) linear infinite;
        }
        
        .paused {
          animation-play-state: paused;
        }
        
        [dir="rtl"] .animate-marquee,
        .direction-reverse .animate-marquee {
          animation-direction: reverse;
        }
        
        [dir="rtl"] .animate-marquee-vertical,
        .direction-reverse .animate-marquee-vertical {
          animation-direction: reverse;
        }
      `}</style>
      
      <div
        {...props}
        className={cn(
          "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem]",
          {
            "flex-row": !vertical,
            "flex-col": vertical,
            "direction-reverse": reverse,
          },
          className,
        )}
      >
        {Array(repeat)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className={cn("flex shrink-0 justify-around gap-[var(--gap)]", {
                "animate-marquee flex-row": !vertical,
                "animate-marquee-vertical flex-col": vertical,
                "group-hover:paused": pauseOnHover,
              })}
            >
              {children}
            </div>
          ))}
      </div>
    </>
  );
}

// Example usage:
/*
<Marquee className="py-8" pauseOnHover>
  <div className="px-4 py-2 bg-white/10 rounded-lg">Item 1</div>
  <div className="px-4 py-2 bg-white/10 rounded-lg">Item 2</div>
  <div className="px-4 py-2 bg-white/10 rounded-lg">Item 3</div>
</Marquee>
*/