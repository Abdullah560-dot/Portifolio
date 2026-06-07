import { cn } from '@/lib/utils';

export default function Badge({ children, className, variant = 'default' }) {
  const variants = {
    default: 'bg-primary/10 text-primary border-primary/20',
    accent: 'bg-accent/10 text-accent border-accent/20',
    muted: 'bg-surface-light text-muted border-border',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border',
        'transition-colors duration-200',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
