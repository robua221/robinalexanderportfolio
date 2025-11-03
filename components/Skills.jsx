"use client";
import { motion } from "framer-motion";

const skills = [
  "JavaScript","React","Node.js","Express","MongoDB","SQL","React Native",
  "Redux","HTML","CSS","Git","Docker","AWS","Solidity","Web3","Blockchain","Swift","Android","Firebase"
];

export default function Skills() {
  return (
    <section id="skills" className="my-16 scroll-mt-28">
      <motion.h2 initial={{x:-20,opacity:0}} whileInView={{x:0,opacity:1}} className="text-2xl font-semibold">
        Skills
      </motion.h2>

      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {skills.map(s => (
          <motion.span key={s} whileHover={{scale:1.05}} className="container-card px-3 py-2 text-sm text-muted">
            {s}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}
