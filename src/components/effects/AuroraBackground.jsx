import { useRef, useEffect } from 'react';

export default function AuroraBackground() {
  const isMobile =
    typeof window !== 'undefined' &&
    window.matchMedia('(max-width: 767px)').matches;

  if (isMobile) {
    // Lightweight version for mobile — no blur filter, no blend mode, no animation
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute -top-20 -left-20 h-64 w-64 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.6) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute top-10 -right-20 h-56 w-56 rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(6,182,212,0.6) 0%, transparent 70%)',
          }}
        />
      </div>
    );
  }

  // Desktop version — keep full quality effects
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className="aurora-blob absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full opacity-30 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.5) 0%, transparent 70%)',
          filter: 'blur(80px)',
          willChange: 'transform',
        }}
      />
      <div
        className="aurora-blob absolute top-20 -right-40 h-[500px] w-[500px] rounded-full opacity-25 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.5) 0%, transparent 70%)',
          filter: 'blur(80px)',
          willChange: 'transform',
        }}
      />
      <div
        className="aurora-blob absolute -bottom-20 left-1/3 h-[400px] w-[400px] rounded-full opacity-20 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)',
          filter: 'blur(60px)',
          willChange: 'transform',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
}
