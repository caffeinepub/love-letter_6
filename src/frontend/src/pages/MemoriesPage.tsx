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
    {
      src: '/assets/memory-4.jpg',
      alt: 'Our memory 4',
      caption: 'Har moment tumhare saath important hai.',
    },
    {
      src: '/assets/memory-5.jpg',
      alt: 'Our memory 5',
      caption: 'Tum meri safe place ho.',
    },
    {
      src: '/assets/memory-6.jpg',
      alt: 'Our memory 6',
      caption: 'Hum perfect nahi, par real hain.',
    },
    {
      src: '/assets/memory-7.jpg',
      alt: 'Our memory 7',
      caption: 'Tumhare bina sab adhura lagta hai.',
    },
    {
      src: '/assets/memory-8.jpg',
      alt: 'Our memory 8',
      caption: 'Yeh sab yaadein mere liye priceless hain.',
    },
    {
      src: '/assets/memory-9.jpg',
      alt: 'Our memory 9',
      caption: 'Main yeh sab lose nahi karna chahta.',
    },
  ];

  return (
    <section className="section-padding text-center">
      <h2 className="heading-secondary mb-10">Hamari Beautiful Story</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
        {memories.map((memory, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={memory.src}
              alt={memory.alt}
              className="gallery-image w-full aspect-square object-cover"
            />
            <p className="text-base md:text-lg mt-3 text-gray-700 px-2">{memory.caption}</p>
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
