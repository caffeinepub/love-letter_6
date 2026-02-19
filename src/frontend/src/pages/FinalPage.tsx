import { useEffect } from 'react';
import { useHeartAnimation } from '../hooks/useHeartAnimation';

export function FinalPage() {
  const triggerHearts = useHeartAnimation();

  useEffect(() => {
    triggerHearts();
  }, [triggerHearts]);

  return (
    <section className="section-padding text-center flex flex-col items-center justify-center min-h-[80vh] final-page-bg">
      <h1 className="heading-primary glowing-text mb-8 max-w-3xl">
        Main Aaj Bhi Tumhe Choose Karta Hoon.
      </h1>
      
      <div className="text-xl leading-relaxed max-w-xl mx-auto space-y-4">
        <p>Breakup solution nahi hota.</p>
        <p>Effort solution hota hai.</p>
        <p>Aur main ready hoon.</p>
      </div>

      <div className="mt-8 text-4xl animate-pulse">❤️</div>
    </section>
  );
}
