import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(false), 850);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="brand-intro pointer-events-none fixed inset-x-0 top-20 z-[60] flex justify-center px-4"
      aria-hidden="true"
    >
      <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-surface/90 px-4 py-3 shadow-xl shadow-black/20 backdrop-blur-md">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-sm font-bold text-white">
          AK
        </div>
        <div className="text-left leading-tight">
          <p className="text-sm font-semibold text-text">Abdullah Kaaka</p>
          <p className="text-xs text-muted">Front-End Developer</p>
        </div>
      </div>
    </div>
  );
}
