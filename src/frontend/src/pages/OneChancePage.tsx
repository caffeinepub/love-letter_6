import { useNavigate } from '@tanstack/react-router';

export function OneChancePage() {
  const navigate = useNavigate();

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
        <button className="btn-love">Let's Try Again ❤️</button>
        <button className="btn-time">Mujhe Thoda Time Chahiye 🤍</button>
      </div>

      <button
        className="btn-love mt-4"
        onClick={() => navigate({ to: '/question' })}
      >
        Next →
      </button>
    </section>
  );
}
