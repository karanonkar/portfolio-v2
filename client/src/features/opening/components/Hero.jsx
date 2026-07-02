import { motion } from "framer-motion";

import Container from "../../../layouts/Container";

import HeroContent from "./HeroContent";
import HeroActions from "./HeroActions";
import HeroIllustration from "./HeroIllustration";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-32 lg:pt-24">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-12">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <HeroContent />
            <HeroActions />
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            className="flex justify-center lg:col-span-7"
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </Container>

      <motion.a
        href="#journey"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          duration: 2.2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.35em] text-slate-400 transition hover:text-blue-400"
      >
        <span>Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-transparent via-slate-400 to-transparent" />
      </motion.a>
    </section>
  );
}
