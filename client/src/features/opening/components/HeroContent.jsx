import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = [
  "MERN experiences",
  "full-stack products",
  "clean user journeys",
];

export default function HeroContent() {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 90;

    const timeout = window.setTimeout(() => {
      if (!isDeleting && displayedText === currentRole) {
        window.setTimeout(() => setIsDeleting(true), 1200);
        return;
      }

      if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        return;
      }

      setDisplayedText((prev) =>
        isDeleting ? prev.slice(0, -1) : currentRole.slice(0, prev.length + 1),
      );
    }, typingSpeed);

    return () => window.clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm tracking-[0.25em] text-gray-300 backdrop-blur-md"
      >
        <span className="mr-3 h-2.5 w-2.5 rounded-full bg-blue-400" />
        FULL STACK MERN DEVELOPER
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mt-8 text-5xl font-black uppercase leading-[0.92] text-white md:text-6xl xl:text-7xl"
      >
        FROM SMALL
        <br />
        TOWN TO BUILDING
        <br />
        MODERN
        <br />
        <span className="text-blue-500">SOFTWARE.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-8 max-w-xl text-xl leading-9 text-gray-300"
      >
        I build modern web applications using the MERN Stack, transforming ideas
        into scalable digital products.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-6 max-w-xl text-lg leading-8 text-gray-400"
      >
        <span className="font-semibold text-white">Currently shaping:</span>
        <span className="ml-2 text-blue-400">{displayedText}</span>
        <span className="ml-1 animate-pulse text-blue-400">|</span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="mt-8 max-w-xl text-lg leading-9 text-gray-500"
      >
        My journey began in Itarsi and continues with constant learning, problem
        solving, and building software that creates real-world impact.
      </motion.p>
    </>
  );
}
