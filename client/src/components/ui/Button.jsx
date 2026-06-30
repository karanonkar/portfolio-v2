export default function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500 ${className}`}
    >
      {children}
    </button>
  );
}
