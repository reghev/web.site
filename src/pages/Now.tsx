import Waves from '../components/Waves';


export default function Now() {

  return (
<div className="min-h-screen bg-black relative overflow-hidden">
  
    <div className="min-h-screen bg-black relative overflow-hidden">
      
      <div className="fixed inset-0 pointer-events-none">
        <Waves
          lineColor="#0F0F0F"
          backgroundColor="rgba(15, 15, 15, 1)"
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
      
    </div>
  </div>

  );
}
