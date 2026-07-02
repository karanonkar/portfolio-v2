import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#07070B]">
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.22, 0.35, 0.22] }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[150px]"
      />

      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.18, 0.3, 0.18] }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute right-[-100px] top-[20%] h-[350px] w-[350px] rounded-full bg-violet-600/20 blur-[140px]"
      />

      <motion.div
        animate={{ scale: [1, 1.06, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{
          duration: 13,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-120px] left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]"
      />
    </div>
  );
}
