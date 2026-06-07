import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

const Input = forwardRef(({ label, error, id, className, ...props }, ref) => {
  return (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-text-secondary">
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={id}
        className={cn(
          'w-full px-4 py-3 rounded-xl',
          'bg-surface-light/50 border border-border',
          'text-text placeholder:text-muted/60',
          'transition-all duration-200',
          'focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20',
          'hover:border-primary/30',
          error && 'border-error/50 focus:border-error/50 focus:ring-error/20',
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-xs text-error mt-1">{error}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export const Textarea = forwardRef(({ label, error, id, className, ...props }, ref) => {
  return (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-text-secondary">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        id={id}
        className={cn(
          'w-full px-4 py-3 rounded-xl resize-none',
          'bg-surface-light/50 border border-border',
          'text-text placeholder:text-muted/60',
          'transition-all duration-200',
          'focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20',
          'hover:border-primary/30',
          error && 'border-error/50 focus:border-error/50 focus:ring-error/20',
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-xs text-error mt-1">{error}</p>
      )}
    </div>
  );
});

Textarea.displayName = 'Textarea';

export default Input;
