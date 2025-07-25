import { useEffect, useState } from 'react';

interface Wave {
  id: number;
  x: number;
  y: number;
  isClick: boolean;
}

const CursorWaves = () => {
  const [waves, setWaves] = useState<Wave[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let waveId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Create wave on mouse move (less frequent)
      if (Math.random() > 0.95) {
        const newWave: Wave = {
          id: waveId++,
          x: e.clientX,
          y: e.clientY,
          isClick: false
        };
        
        setWaves(prev => [...prev, newWave]);
        
        // Remove wave after animation
        setTimeout(() => {
          setWaves(prev => prev.filter(wave => wave.id !== newWave.id));
        }, 1000);
      }
    };

    const handleClick = (e: MouseEvent) => {
      const newWave: Wave = {
        id: waveId++,
        x: e.clientX,
        y: e.clientY,
        isClick: true
      };
      
      setWaves(prev => [...prev, newWave]);
      
      // Remove wave after animation
      setTimeout(() => {
        setWaves(prev => prev.filter(wave => wave.id !== newWave.id));
      }, 1500);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      {/* Cursor follower */}
      <div 
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className="w-5 h-5 bg-white rounded-full opacity-50 animate-pulse" />
      </div>

      {/* Wave effects */}
      {waves.map(wave => (
        <div
          key={wave.id}
          className="fixed pointer-events-none z-40"
          style={{
            left: wave.x,
            top: wave.y,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div 
            className={`rounded-full border-2 border-primary/30 animate-ping ${
              wave.isClick ? 'w-20 h-20' : 'w-10 h-10'
            }`}
            style={{
              animationDuration: wave.isClick ? '1.5s' : '1s',
              animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
            }}
          />
        </div>
      ))}
    </>
  );
};

export default CursorWaves;