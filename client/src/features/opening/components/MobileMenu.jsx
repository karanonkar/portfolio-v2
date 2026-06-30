export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 lg:hidden">
      <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
        <h2 className="text-xl font-bold text-white">Karan Onkar</h2>

        <button onClick={onClose} className="text-3xl text-white">
          ×
        </button>
      </div>

      <div className="flex flex-col gap-6 p-6 text-white">
        <a href="#journey">Journey</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}
