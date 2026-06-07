export default function GradientText({ children, className = '', animated = false }) {
  return (
    <span className={`${animated ? 'gradient-text-animated' : 'gradient-text'} ${className}`}>
      {children}
    </span>
  );
}
