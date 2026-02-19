import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useHeartAnimation } from '../hooks/useHeartAnimation';

export function QuestionPage() {
  const navigate = useNavigate();
  const triggerHearts = useHeartAnimation();
  const [noButtonPosition, setNoButtonPosition] = useState({ left: 0, top: 0 });
  const [showResponse, setShowResponse] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleNoClick = () => {
    setShowPopup(true);
    const randomLeft = Math.random() * 200 - 100;
    const randomTop = Math.random() * 100 - 50;
    setNoButtonPosition({ left: randomLeft, top: randomTop });
    
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  const handleYesClick = () => {
    setShowResponse(true);
    triggerHearts();
  };

  return (
    <section className="section-padding text-center flex flex-col items-center justify-center min-h-[70vh]">
      <h2 className="heading-secondary mb-6">Important Question 😌</h2>
      <p className="text-xl mb-10">Kya tum abhi bhi mujhse pyaar karti ho?</p>
      
      <div className="flex flex-wrap justify-center gap-6 mb-8 relative">
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
          Haan Obviously ❤️
        </button>
      </div>

      {showPopup && (
        <div className="popup-message mb-4">
          Sach me? Soch lo phir se 😏
        </div>
      )}

      {showResponse && (
        <p className="response-text mb-8">
          Mujhe pata tha ❤️
        </p>
      )}

      <button
        className="btn-love mt-4"
        onClick={() => navigate({ to: '/final' })}
      >
        Next →
      </button>
    </section>
  );
}
