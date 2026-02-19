import { useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useHeartAnimation } from '../hooks/useHeartAnimation';

export function FinalPage() {
  const navigate = useNavigate();
  const triggerHearts = useHeartAnimation();

  useEffect(() => {
    triggerHearts();
  }, [triggerHearts]);

  return (
    <section className="section-padding text-center flex flex-col items-center justify-center min-h-[80vh]">
      <h1 className="heading-primary glowing-text mb-8 max-w-3xl">
        Main Aaj Bhi Tumhe Choose Karta Hoon.
      </h1>
      
      <div className="text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto mb-10">
        <p>
          Breakup solution nahi hota. Effort solution hota hai. Aur main ready hoon. Na pressure. Na ego. Bas pyaar aur consistency.
        </p>
      </div>

      <div className="mt-8 text-4xl animate-pulse">❤️</div>

      <div className="flex justify-center gap-4 mt-12">
        <button
          className="btn-time"
          onClick={() => navigate({ to: '/game' })}
        >
          ← Back
        </button>
      </div>
    </section>
  );
}
