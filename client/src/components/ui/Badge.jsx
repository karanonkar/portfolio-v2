export default function Badge({ children }) {
  return (
    <span
      className="

        rounded-full

        border

        border-white/10

        bg-white/5

        px-4

        py-2

        text-xs

        tracking-[0.2em]

        uppercase

      "
    >
      {children}
    </span>
  );
}
