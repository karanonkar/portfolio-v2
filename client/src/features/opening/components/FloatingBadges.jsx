import { motion } from "framer-motion";

export default function FloatingBadges() {
  const badges = [
    {
      label: "⚛ React",
      className: "top-6 left-10",
    },
    {
      label: "</>",
      className: "top-28 right-12",
    },
    {
      label: "🐙 Git",
      className: "bottom-36 left-8",
    },
    {
      label: "🍃 MongoDB",
      className: "bottom-20 right-8",
    },
  ];

  return (
    <>
      {badges.map((badge, index) => (
        <motion.div
          key={badge.label}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: [0, -6, 0] }}
          transition={{
            duration: 2.4 + index * 0.2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.06, y: -3 }}
          className={`absolute ${badge.className} rounded-full border border-white/10 bg-black/50 px-5 py-3 text-sm text-white shadow-lg backdrop-blur-xl`}
        >
          {badge.label}
        </motion.div>
      ))}
    </>
  );
}
