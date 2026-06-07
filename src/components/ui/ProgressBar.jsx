import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ProgressBar({ value, label, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-30px' });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-text-secondary">{label}</span>
        <span className="text-sm font-semibold text-primary">{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-surface-light overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${value}%` } : { width: 0 }}
          transition={{
            duration: 1,
            delay: delay,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>
    </div>
  );
}
