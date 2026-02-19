import { useCallback } from 'react';

export function useHeartAnimation() {
  const triggerHearts = useCallback(() => {
    for (let i = 0; i < 20; i++) {
      const heart = document.createElement('div');
      heart.className = 'floating-heart';
      heart.textContent = '❤️';
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.fontSize = `${Math.random() * 20 + 15}px`;
      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 5000);
    }
  }, []);

  return triggerHearts;
}
