export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#07070B]">
      <div className="absolute left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[150px]" />

      <div className="absolute right-[-100px] top-[20%] h-[350px] w-[350px] rounded-full bg-violet-600/20 blur-[140px]" />

      <div className="absolute bottom-[-120px] left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />
    </div>
  );
}
