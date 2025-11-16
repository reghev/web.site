import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  animationFrom?: {
    opacity: number;
    y?: number;
  };
  animationTo?: {
    opacity: number;
    y?: number;
  };
}

export function SplitText({
  text,
  className,
  delay = 0.05,
  animationFrom = { opacity: 0, y: 20 },
  animationTo = { opacity: 1, y: 0 },
}: SplitTextProps) {
  const letters = Array.from(text);

  return (
    <div className={cn("flex", className)}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={animationFrom}
          animate={animationTo}
          transition={{
            duration: 0.5,
            delay: index * delay,
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  );
}