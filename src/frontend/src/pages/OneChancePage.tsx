import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useHeartAnimation } from '../hooks/useHeartAnimation';

export function OneChancePage() {
  const navigate = useNavigate();
  const triggerHearts = useHeartAnimation();
  
  const [showLoveMessage, setShowLoveMessage] = useState(false);
  const [timeButtonPosition, setTimeButtonPosition] = useState({ left: 0, top: 0 });
  const [showGame, setShowGame] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ left: 0, top: 0 });
  const [showPlayfulMessage, setShowPlayfulMessage] = useState(false);
  const [showYesMessage, setShowYesMessage] = useState(false);

  const handleTryAgainClick = () => {
    setShowLoveMessage(true);
    triggerHearts();
  };

  const handleTimeClick = () => {
    const randomLeft = Math.random() * 100 - 50;
    const randomTop = Math.random() * 80 - 40;
    setTimeButtonPosition({ left: randomLeft, top: randomTop });
    
    setTimeout(() => {
      setShowGame(true);
    }, 300);
  };

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
      <h2 className="heading-secondary mb-8">Ek Chance… Pyaar Ke Naam 🤍</h2>
      
      <div className="text-lg leading-relaxed max-w-xl mx-auto space-y-3 mb-10">
        <p>Main pressure nahi de raha.</p>
        <p>Bas ek real chance maang raha hoon.</p>
        <p>Try karne se sab ho jata hai.</p>
        <p>Is baar effort pura hoga.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button className="btn-love" onClick={handleTryAgainClick}>
          Let's Try Again ❤️
        </button>
        <button 
          className="btn-time"
          style={{
            position: 'relative',
            left: `${timeButtonPosition.left}px`,
            top: `${timeButtonPosition.top}px`,
            transition: 'all 0.3s ease',
          }}
          onClick={handleTimeClick}
        >
          Mujhe Thoda Time Chahiye 🤍
        </button>
      </div>

      {showLoveMessage && (
        <p className="response-text glowing-text mb-6 text-2xl">
          I Love You 💋
        </p>
      )}

      {showGame && (
        <div className="mt-8 p-6 bg-white/50 backdrop-blur-sm rounded-2xl shadow-romantic max-w-md mx-auto">
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
      )}

      <button
        className="btn-love mt-8"
        onClick={() => navigate({ to: '/final' })}
      >
        Next →
      </button>
    </section>
  );
}
