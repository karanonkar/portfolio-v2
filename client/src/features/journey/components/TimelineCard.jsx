export default function TimelineCard({ year, title, description, isLast }) {
  return (
    <div className="relative flex gap-6">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-[18px] top-10 h-full w-[2px] bg-white/10" />
      )}

      {/* Dot */}
      <div className="relative z-10 mt-1 h-10 w-10 rounded-full border border-blue-500/40 bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
        <div className="h-3 w-3 rounded-full bg-white" />
      </div>

      {/* Card */}
      <div className="mb-10 flex-1 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:border-blue-500/40 hover:bg-white/10 hover:-translate-y-1">
        <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
          {year}
        </span>

        <h3 className="mt-2 text-2xl font-bold text-white">{title}</h3>

        <p className="mt-3 leading-7 text-gray-400">{description}</p>
      </div>
    </div>
  );
}
