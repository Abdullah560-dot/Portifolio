import { lazy, Suspense, useEffect, useState } from 'react';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const FloatingParticles = lazy(() => import('@/components/effects/FloatingParticles'));
const CustomCursor = lazy(() => import('@/components/effects/CustomCursor'));
const ScrollProgressBar = lazy(() => import('@/components/effects/ScrollProgressBar'));

// Lazy-loaded sections for code splitting
const Hero = lazy(() => import('@/components/sections/Hero'));
const About = lazy(() => import('@/components/sections/About'));
const Skills = lazy(() => import('@/components/sections/Skills'));
const Projects = lazy(() => import('@/components/sections/Projects'));
const Services = lazy(() => import('@/components/sections/Services'));
const Process = lazy(() => import('@/components/sections/Process'));
const Philosophy = lazy(() => import('@/components/sections/Philosophy'));
const Testimonials = lazy(() => import('@/components/sections/Testimonials'));
const Contact = lazy(() => import('@/components/sections/Contact'));

function SectionFallback() {
  return (
    <div className="min-h-[40vh] flex items-center justify-center">
      <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function App() {
  const [showEnhancements, setShowEnhancements] = useState(false);

  useEffect(() => {
    const scheduleEnhancements = () => setShowEnhancements(true);
    const idleCallback = window.requestIdleCallback?.(scheduleEnhancements, {
      timeout: 2000,
    });
    const timeout = idleCallback === undefined
      ? window.setTimeout(scheduleEnhancements, 1000)
      : undefined;

    return () => {
      if (idleCallback !== undefined) window.cancelIdleCallback?.(idleCallback);
      if (timeout !== undefined) window.clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {showEnhancements && (
        <Suspense fallback={null}>
          <CustomCursor />
          <ScrollProgressBar />
          <FloatingParticles count={24} />
        </Suspense>
      )}

      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      <Navbar />

      <main>
        <Suspense fallback={<SectionFallback />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Services />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Process />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Philosophy />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>

      <Footer />

    </>
  );
}

export default App;
