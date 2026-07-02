export default function Button({ children, variant = "primary", href = "#" }) {
  const baseStyle =
    "inline-flex items-center justify-center rounded-xl px-7 py-4 font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-blue-600 text-white shadow-lg shadow-blue-600/30 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-500/50",

    secondary:
      "border border-white/20 bg-white/5 text-white hover:bg-white hover:text-black hover:-translate-y-1",
  };

  return (
    <a href={href} className={`${baseStyle} ${variants[variant]}`}>
      {children}
    </a>
  );
}
