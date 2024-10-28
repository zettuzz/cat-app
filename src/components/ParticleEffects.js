import { useEffect, useState, useCallback } from 'react';
import './ParticleEffects.css';

export const ParticleEffects = () => {
  const [particles, setParticles] = useState([]);
  
  const random = (min, max) => Math.random() * (max - min) + min;
  
  const createParticle = useCallback(() => {
    return {
      id: Math.random(),
      x: random(0, 100),
      y: random(0, 100),
      size: random(2, 6), // Slightly smaller size range for more delicate particles
      speedX: random(-0.15, 0.15), // Slightly increased speed range
      speedY: random(-0.15, 0.15),
      opacity: random(0.3, 0.6), // Increased opacity range for better visibility
    };
  }, []);
  
  useEffect(() => {
    const particleCount = 100; // Increased from 30 to 100 particles
    const initialParticles = Array.from({ length: particleCount }, createParticle);
    setParticles(initialParticles);
  }, [createParticle]);
  
  useEffect(() => {
    const animationFrame = setInterval(() => {
      setParticles(currentParticles =>
        currentParticles.map(particle => {
          let newX = particle.x + particle.speedX;
          let newY = particle.y + particle.speedY;
          
          if (newX > 100) newX = 0;
          if (newX < 0) newX = 100;
          if (newY > 100) newY = 0;
          if (newY < 0) newY = 100;
          
          return {
            ...particle,
            x: newX,
            y: newY,
          };
        })
      );
    }, 50);
    
    return () => clearInterval(animationFrame);
  }, []);
  
  return (
    <div className="particle-container">
      {particles.length > 0 ? (
        particles.map(particle => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))
      ) : (
        <div className="fallback-message">No particles to display</div>
      )}
    </div>
  );
};

export default ParticleEffects;