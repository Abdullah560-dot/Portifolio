import { motion } from 'framer-motion';
import { fadeInUp, textRevealContainer, textRevealChar, viewportConfig } from '@/utils/animations';

export default function SectionHeading({ title, subtitle, label, align = 'center' }) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  // Split title into array of characters (preserving spaces)
  const letters = Array.from(title);

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className={`flex flex-col ${alignClass} mb-16 md:mb-20`}
    >
      {label && (
        <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full bg-primary/10 text-primary border border-primary/20">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          {label}
        </span>
      )}
      <motion.h2 
        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2"
        variants={textRevealContainer}
      >
        <span className="gradient-text inline-flex overflow-hidden pb-2">
          {letters.map((char, index) => (
            <motion.span
              key={index}
              variants={textRevealChar}
              className="inline-block"
              style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      </motion.h2>
      {subtitle && (
        <motion.p 
          variants={fadeInUp}
          className="mt-4 max-w-2xl text-muted text-base md:text-lg leading-relaxed font-sans"
        >
          {subtitle}
        </motion.p>
      )}
      <div className="mt-8 flex items-center gap-2">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/60" />
        <div className="h-1.5 w-1.5 rounded-full bg-accent glow-accent" />
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/60" />
      </div>
    </motion.div>
  );
}
