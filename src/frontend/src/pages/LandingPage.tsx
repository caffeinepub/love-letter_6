import { useNavigate } from '@tanstack/react-router';

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <section className="section-padding text-center flex flex-col items-center justify-center min-h-[80vh]">
      <h1 className="heading-primary mb-6 max-w-3xl">
        Hey tannu 🌷… Main Give Up Nahi Kar Raha ❤️
      </h1>
      <p className="text-xl mb-10 max-w-xl">
        Mujhe pata hai tum hurt ho… par main effort dena chahta hoon.
      </p>
      <button
        className="btn-love text-lg px-8 py-4"
        onClick={() => navigate({ to: '/memories' })}
      >
        Please ek baar padh lo 🥺
      </button>
    </section>
  );
}
