import { useNavigate } from '@tanstack/react-router';

export function MemoriesPage() {
  const navigate = useNavigate();

  const memories = [
    'Tum meri peace ho.',
    'Main tumhe akela feel nahi hone dunga.',
    'Jo humne banaya hai woh special hai.',
    'Har moment tumhare saath important hai.',
    'Tum meri safe place ho.',
    'Hum perfect nahi, par real hain.',
    'Tumhare bina sab adhura lagta hai.',
    'Yeh sab yaadein mere liye priceless hain.',
    'Main yeh sab lose nahi karna chahta.',
  ];

  const photos = [
    '/assets/image1-4.jpg',
    '/assets/image2-4.jpg',
    '/assets/image3-5.jpg',
    '/assets/image4-5.jpg',
    '/assets/image5-5.jpg',
    '/assets/image6-5.jpg',
    '/assets/image7-5.jpg',
    '/assets/image8-4.jpg',
    '/assets/image9-4.jpg',
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Photo Collage Background */}
      <div className="memories-collage-background">
        {/* Photo collage layer - Grid layout to prevent overlap */}
        <div className="absolute inset-0 z-0 grid grid-cols-3 gap-4 p-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="memories-collage-photo relative w-full h-full"
              style={{
                transform: `rotate(${(index % 2 === 0 ? 1 : -1) * (Math.random() * 4 + 1)}deg)`,
              }}
            >
              <img
                src={photo}
                alt={`Memory ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Soft pink overlay */}
        <div className="absolute inset-0 z-20 bg-pink-200/30"></div>

        {/* Warm golden glow overlay */}
        <div className="absolute inset-0 z-30 bg-gradient-to-br from-gold-200/20 via-transparent to-pink-300/15 mix-blend-overlay"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-40 section-padding text-center flex flex-col items-center justify-center min-h-screen">
        <h2 className="heading-secondary mb-10 text-shadow-romantic">Hamari Beautiful Story</h2>
        
        <div className="max-w-3xl mx-auto mb-12 space-y-6 p-8">
          {memories.map((caption, index) => (
            <p key={index} className="text-lg md:text-2xl font-bold text-white leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {caption}
            </p>
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
      </div>
    </section>
  );
}
