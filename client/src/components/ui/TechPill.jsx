export default function TechPill({ name }) {
  return (
    <span
      className="
        rounded-full
        border
        border-white/10
        bg-white/5
        px-4
        py-2
        text-sm
        font-medium
        text-gray-300
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-500
        hover:bg-blue-600/20
        hover:text-white
      "
    >
      {name}
    </span>
  );
}
