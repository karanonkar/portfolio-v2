export default function Text({ children, className = "" }) {
  return (
    <p className={`text-lg leading-8 text-gray-400 ${className}`}>{children}</p>
  );
}
