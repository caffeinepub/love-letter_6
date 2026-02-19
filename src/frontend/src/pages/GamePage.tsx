import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useHeartAnimation } from '../hooks/useHeartAnimation';

export function GamePage() {
  const navigate = useNavigate();
  const triggerHearts = useHeartAnimation();
  
  const [noButtonPosition, setNoButtonPosition] = useState({ left: 0, top: 0 });
  const [showPlayfulMessage, setShowPlayfulMessage] = useState(false);
  const [showYesMessage, setShowYesMessage] = useState(false);

  const handleNoClick = () => {
    setShowPlayfulMessage(true);
    const randomLeft = Math.random() * 100 - 50;
    const randomTop = Math.random() * 80 - 40;
    setNoButtonPosition({ left: randomLeft, top: randomTop });
    
    setTimeout(() => {
      setShowPlayfulMessage(false);
    }, 2000);
  };

  const handleYesClick = () => {
    setShowYesMessage(true);
    triggerHearts();
  };

  return (
    <section className="section-padding text-center flex flex-col items-center justify-center min-h-[70vh]">
      <h2 className="heading-secondary mb-8">Important Question 😌</h2>
      
      <div className="p-6 bg-white/50 backdrop-blur-sm rounded-2xl shadow-romantic max-w-md mx-auto">
        <h3 className="text-xl font-semibold mb-6">Kya tum mujhe ek chance dogi?</h3>
        
        <div className="flex flex-wrap justify-center gap-6 mb-6 relative">
          <button
            className="btn-no"
            style={{
              position: 'relative',
              left: `${noButtonPosition.left}px`,
              top: `${noButtonPosition.top}px`,
              transition: 'all 0.3s ease',
            }}
            onClick={handleNoClick}
          >
            Nahi 😡
          </button>
          <button className="btn-love" onClick={handleYesClick}>
            Haan ❤️
          </button>
        </div>

        {showPlayfulMessage && (
          <div className="popup-message mb-4">
            Sach me? Soch lo phir se 😏
          </div>
        )}

        {showYesMessage && (
          <p className="response-text glowing-text text-lg">
            Mujhe pata tha ❤️ Thank you for trusting us.
          </p>
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <button
          className="btn-time"
          onClick={() => navigate({ to: '/one-chance' })}
        >
          ← Back
        </button>
        <button
          className="btn-love"
          onClick={() => navigate({ to: '/final' })}
        >
          Next →
        </button>
      </div>
    </section>
  );
}
