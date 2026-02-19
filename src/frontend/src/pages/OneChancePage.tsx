import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useHeartAnimation } from '../hooks/useHeartAnimation';

export function OneChancePage() {
  const navigate = useNavigate();
  const triggerHearts = useHeartAnimation();
  
  const [showLoveMessage, setShowLoveMessage] = useState(false);
  const [timeButtonPosition, setTimeButtonPosition] = useState({ left: 0, top: 0 });

  const handleTryAgainClick = () => {
    setShowLoveMessage(true);
    triggerHearts();
  };

  const handleTimeClick = () => {
    const randomLeft = Math.random() * 100 - 50;
    const randomTop = Math.random() * 80 - 40;
    setTimeButtonPosition({ left: randomLeft, top: randomTop });
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

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <button
          className="btn-time"
          onClick={() => navigate({ to: '/understanding' })}
        >
          ← Back
        </button>
        <button
          className="btn-love"
          onClick={() => navigate({ to: '/game' })}
        >
          Next →
        </button>
      </div>
    </section>
  );
}
