export default function Heading({ children, className = "" }) {
  return (
    <h2
      className={`text-4xl font-bold tracking-tight lg:text-6xl ${className}`}
    >
      {children}
    </h2>
  );
}
