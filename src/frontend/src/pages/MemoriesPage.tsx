import { useNavigate } from '@tanstack/react-router';

export function MemoriesPage() {
  const navigate = useNavigate();

  const memories = [
    {
      src: '/assets/memory-1.jpg',
      alt: 'Our memory 1',
      caption: 'Tum meri peace ho.',
    },
    {
      src: '/assets/memory-2.jpg',
      alt: 'Our memory 2',
      caption: 'Main tumhe akela feel nahi hone dunga.',
    },
    {
      src: '/assets/memory-3.jpg',
      alt: 'Our memory 3',
      caption: 'Jo humne banaya hai woh special hai.',
    },
  ];

  return (
    <section className="section-padding text-center">
      <h2 className="heading-secondary mb-10">Hamari Beautiful memories</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
        {memories.map((memory, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={memory.src}
              alt={memory.alt}
              className="gallery-image w-full max-w-xs h-64 object-cover"
            />
            <p className="text-lg mt-4 text-gray-700">{memory.caption}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <button
          className="btn-time"
          onClick={() => navigate({ to: '/' })}
        >
          ← Back
        </button>
        <button
          className="btn-love"
          onClick={() => navigate({ to: '/understanding' })}
        >
          Next →
        </button>
      </div>
    </section>
  );
}
