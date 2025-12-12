import React from 'react';

type StarBorderProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T> & {
  as?: T;
  className?: string;
  children?: React.ReactNode;
  color?: string;
  speed?: string;
  thickness?: number;
};

const StarBorder = <T extends React.ElementType = 'div'>({
  as,
  className = '',
  color = '#481c81',
  speed = '6s',
  thickness = 3,
  children,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || 'div';

  return (
    <>
      <style>
        {`
          @keyframes star-movement-bottom {
            0% {
              transform: translate(0%, 0%);
              opacity: 1;
            }
            100% {
              transform: translate(-100%, 0%);
              opacity: 0;
            }
          }
          
          @keyframes star-movement-top {
            0% {
              transform: translate(0%, 0%);
              opacity: 1;
            }
            100% {
              transform: translate(100%, 0%);
              opacity: 0;
            }
          }
          
          .animate-star-bottom {
            animation: star-movement-bottom linear infinite alternate;
          }
          
          .animate-star-top {
            animation: star-movement-top linear infinite alternate;
          }
        `}
      </style>
      <Component
        className={`relative inline-block overflow-hidden rounded-[20px] ${className}`}
        {...(rest as any)}
        style={{
          padding: `${thickness}px`,
          ...(rest as any).style
        }}
      >
        <div
          className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-bottom z-0"
          style={{
            background: `radial-gradient(circle, ${color}, transparent 10%)`,
            animationDuration: speed
          }}
        ></div>
        <div
          className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full animate-star-top z-0"
          style={{
            background: `radial-gradient(circle, ${color}, transparent 10%)`,
            animationDuration: speed
          }}
        ></div>
        <div className="relative z-10 rounded-[20px] bg-black">
          {children}
        </div>
      </Component>
    </>
  );
};

export default StarBorder;