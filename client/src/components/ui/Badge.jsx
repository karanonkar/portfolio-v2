export default function Badge({ children }) {
  return (
    <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur-md">
      {children}
    </span>
  );
}
