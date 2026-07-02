import { motion } from "framer-motion";

import heroImage from "../../../assets/images/hero.png";
import FloatingBadges from "./FloatingBadges";

export default function HeroIllustration() {
  return (
    <div className="relative flex items-center justify-center overflow-visible">
      <motion.div
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 8.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute h-[480px] w-[480px] rounded-full bg-blue-500/25 blur-[170px]"
      />

      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2], x: [0, 10, 0], y: [0, 20, 0] }}
        transition={{ duration: 9.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute right-0 top-12 h-80 w-80 rounded-full bg-violet-500/20 blur-[150px]"
      />

      <FloatingBadges />

      <motion.img
        src={heroImage}
        alt="Karan Onkar Workspace"
        initial={{ opacity: 0, y: 22, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        whileHover={{ scale: 1.03, y: -8, rotate: -1 }}
        className="relative z-20 h-auto w-full max-w-[620px] object-contain drop-shadow-[0_35px_90px_rgba(59,130,246,0.45)]"
      />
    </div>
  );
}
