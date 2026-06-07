import { useRef, useCallback } from 'react';

export function useMagneticEffect(strength = 0.3) {
  const ref = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    element.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  }, [strength]);

  const handleMouseLeave = useCallback(() => {
    const element = ref.current;
    if (!element) return;

    element.style.transform = 'translate(0, 0)';
    element.style.transition = 'transform 0.3s ease-out';

    setTimeout(() => {
      if (element) element.style.transition = '';
    }, 300);
  }, []);

  return { ref, handleMouseMove, handleMouseLeave };
}
