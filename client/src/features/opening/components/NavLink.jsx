export default function NavLink({ href, children, active = false }) {
  return (
    <a
      href={href}
      className={`
        group
        relative
        inline-flex
        items-center
        py-2
        text-[15px]
        font-medium
        tracking-wide
        transition-colors
        duration-300

        ${active ? "text-white" : "text-slate-400 hover:text-white"}
      `}
    >
      {children}

      <span
        className={`
          absolute
          left-0
          -bottom-1
          h-[2px]
          rounded-full
          bg-blue-500
          transition-all
          duration-300

          ${active ? "w-full" : "w-0 group-hover:w-full"}
        `}
      />
    </a>
  );
}
