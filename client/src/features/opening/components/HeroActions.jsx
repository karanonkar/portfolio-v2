import { motion } from "framer-motion";

const skills = ["React", "Node.js", "Express", "MongoDB", "Java", "Git"];

export default function HeroActions() {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap gap-5">
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-[0_0_35px_rgba(59,130,246,0.25)] transition hover:bg-blue-500"
        >
          🚀 View Projects
        </motion.a>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition hover:border-blue-500"
        >
          📄 Let&apos;s Connect
        </motion.a>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="mt-14 flex flex-wrap gap-4"
      >
        {skills.map((skill, index) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.3 + index * 0.05 }}
            className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-lg text-gray-300 backdrop-blur"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
