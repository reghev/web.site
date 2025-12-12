import React from 'react';

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({ text, disabled = false, speed = 5, className = '' }) => {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`inline-block ${className}`}
      style={{
        backgroundImage: 'linear-gradient(120deg, rgba(181, 181, 181, 0.64) 40%, rgba(255, 255, 255, 0.9) 50%, rgba(181, 181, 181, 0.64) 60%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'transparent',
        animation: disabled ? 'none' : `shine ${animationDuration} linear infinite`,
      }}
    >
      <style>
        {`
          @keyframes shine {
            0% {
              background-position: 100%;
            }
            100% {
              background-position: -100%;
            }
          }
        `}
      </style>
      {text}
    </span>
  );
};

export default ShinyText;