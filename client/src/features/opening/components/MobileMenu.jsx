import Button from "../../../components/ui/Button";
import { navigation } from "../../../content/navigation";

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-40 bg-black/70 backdrop-blur-sm
          transition-opacity duration-300

          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      {/* Menu */}
      <aside
        className={`
          fixed top-0 right-0 z-50
          h-screen w-[300px]
          border-l border-white/10
          bg-[#0B0B0F]
          shadow-2xl

          transition-transform duration-300

          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b border-white/10 p-6">
          <h2 className="text-xl font-bold text-white">Karan Onkar</h2>

          <button
            onClick={onClose}
            className="text-3xl text-white transition hover:text-blue-500"
          >
            ×
          </button>
        </div>

        {/* Navigation */}

        <nav className="flex flex-col gap-6 p-6">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={onClose}
              className="text-lg text-slate-300 transition hover:text-white"
            >
              {item.title}
            </a>
          ))}
        </nav>

        {/* Resume */}

        <div className="px-6">
          <Button>Resume ↗</Button>
        </div>
      </aside>
    </>
  );
}
