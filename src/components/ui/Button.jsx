import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useMagneticEffect } from '@/hooks/useMagneticEffect';

const variants = {
  primary: 'bg-gradient-to-r from-primary to-primary-dark text-white hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] overflow-hidden group',
  secondary: 'bg-surface-light text-text border border-border hover:border-primary/40 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] group',
  accent: 'bg-gradient-to-r from-accent to-accent-dark text-background hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] overflow-hidden group',
  ghost: 'bg-transparent text-muted hover:text-text hover:bg-surface-light/50 group',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  magnetic = true,
  className,
  icon: Icon,
  iconPosition = 'left',
  ...props
}) {
  const { ref, handleMouseMove, handleMouseLeave } = useMagneticEffect(0.2);

  return (
    <motion.button
      ref={magnetic ? ref : undefined}
      onMouseMove={magnetic ? handleMouseMove : undefined}
      onMouseLeave={magnetic ? handleMouseLeave : undefined}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'relative inline-flex items-center justify-center gap-2 font-semibold rounded-xl',
        'transition-all duration-300 ease-out cursor-pointer',
        'focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {/* Shimmer sweep effect */}
      {(variant === 'primary' || variant === 'accent') && (
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
      )}
      
      <span className="relative z-10 flex items-center gap-2">
        {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" />}
        {children}
        {Icon && iconPosition === 'right' && <Icon className="w-5 h-5" />}
      </span>
    </motion.button>
  );
}
