import { useNavigate } from '@tanstack/react-router';

export function UnderstandingPage() {
  const navigate = useNavigate();

  return (
    <section className="section-padding text-center flex flex-col items-center justify-center min-h-[70vh]">
      <h2 className="heading-secondary mb-8">Main Samajh Raha Hoon</h2>
      
      <div className="text-lg leading-relaxed max-w-2xl mx-auto space-y-4 mb-12">
        <p>Agar tumhe kabhi laga ki tum akeli effort kar rahi ho… I'm sorry.</p>
        <p>Agar kabhi tumhe laga ki main serious nahi tha… I'm sorry.</p>
        <p>Tum consistency deserve karti ho.</p>
        <p>Tum security deserve karti ho.</p>
        <p>Main sirf bolna nahi… actions se prove karna chahta hoon.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <button
          className="btn-time"
          onClick={() => navigate({ to: '/memories' })}
        >
          ← Back
        </button>
        <button
          className="btn-love"
          onClick={() => navigate({ to: '/one-chance' })}
        >
          Next →
        </button>
      </div>
    </section>
  );
}
