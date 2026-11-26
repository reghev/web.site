import Waves from '../components/Waves';
import BlurText from '../components/BlurText';

export default function Now() {
  function handleAnimationComplete(): void {
    throw new Error('Function not implemented.')
  }
  return (

    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <Waves
          lineColor="#ffffff05"
          backgroundColor="rgba(0,0,0,1)"
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
        <div className="max-w-4xl w-full text-center">

          <BlurText
            text="Making things as to not be useless slowly but surely"
            delay={140}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-[clamp(3rem,8vw,6.5rem)] font-extrabold tracking-tight text-white mb-6 leading-[0.95]"
          />
        </div>
    </div>
  );
}
