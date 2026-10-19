import { useEffect, useRef, useCallback } from 'react';

export default function FloatingParticles({ count = 24 }) {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const animationRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  // Only run on desktop with no reduced-motion preference
  const canAnimate =
    typeof window !== 'undefined' &&
    window.matchMedia('(min-width: 1024px) and (prefers-reduced-motion: no-preference)').matches;

  const initParticles = useCallback((width, height) => {
    particles.current = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
      color: Math.random() > 0.5 ? '99,102,241' : '34,211,238',
    }));
  }, [count]);

  useEffect(() => {
    if (!canAnimate) return undefined;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;
    initParticles(width, height);

    let resizeTimer;
    const handleResize = () => {
      // Debounce resize to avoid thrashing
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        initParticles(width, height);
      }, 200);
    };

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Pre-compute squared connection threshold to avoid sqrt per pair
    const CONNECT_DIST = 120;
    const CONNECT_DIST_SQ = CONNECT_DIST * CONNECT_DIST;
    const MOUSE_DIST = 150;
    const MOUSE_DIST_SQ = MOUSE_DIST * MOUSE_DIST;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      const pts = particles.current;

      // --- Move particles ---
      for (let k = 0; k < pts.length; k++) {
        const p = pts[k];
        p.x += p.vx;
        p.y += p.vy;

        // Mouse repulsion — use squared distance
        const dxM = p.x - mouseRef.current.x;
        const dyM = p.y - mouseRef.current.y;
        const distSqM = dxM * dxM + dyM * dyM;
        if (distSqM < MOUSE_DIST_SQ && distSqM > 0) {
          const force = (MOUSE_DIST - Math.sqrt(distSqM)) / MOUSE_DIST;
          p.x += dxM * force * 0.03;
          p.y += dyM * force * 0.03;
        }

        // Wrap around
        if (p.x < 0) p.x = width;
        else if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        else if (p.y > height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
        ctx.fill();
      }

      // --- Draw connections (O(n²) — limit with squared distance check first) ---
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const distSq = dx * dx + dy * dy;

          if (distSq < CONNECT_DIST_SQ) {
            const dist = Math.sqrt(distSq);
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.06 * (1 - dist / CONNECT_DIST)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [canAnimate, initParticles]);

  if (!canAnimate) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
      style={{ willChange: 'transform' }}
    />
  );
}
