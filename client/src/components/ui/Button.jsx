export default function Button({ children, variant = "primary", onClick }) {
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",

    secondary: "border border-white/15 hover:bg-white/5 text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`

        rounded-xl

        px-6

        py-3

        font-medium

        transition-all

        duration-300

        ${variants[variant]}

      `}
    >
      {children}
    </button>
  );
}
