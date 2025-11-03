"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";

const ThreeHero = dynamic(() => import("./ThreeHero"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative mb-24">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-50 -z-10">
        <ThreeHero />
      </div>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-12 items-center relative">

        {/* Left Section: Text */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-bold"
          >
         Hi, I'm <span className="text-primary">Robin Alexander</span>
          </motion.h1>

      <p className="mt-3 text-muted">
  Full-Stack JavaScript & React-Native Developer  
  — building scalable Web, Mobile & Web3 applications with modern JS technologies.
</p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 flex gap-3 flex-wrap"
          >
            <a
              href="https://linkedin.com/in/robin-alexander9899"
              target="_blank"
              className="border px-4 py-2 rounded"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/robua221"
              target="_blank"
              className="border px-4 py-2 rounded"
            >
              GitHub
            </a>

            <a
              href="#projects"
              className="bg-primary px-4 py-2 rounded text-black font-medium"
            >
              Projects
            </a>

            <a
              href="/Robin_Alexander_CV.pdf"
              download
              className="border border-primary text-primary px-4 py-2 rounded hover:bg-primary hover:text-black"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Right Section: Avatar */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            y: [0, -8, 0] // floating effect
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
            y: {
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity
            }
          }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full">
            {/* Glow Halo */}
            <div className="absolute inset-0 rounded-full bg-primary/30 blur-[120px] -z-10"></div>

            {/* Avatar */}
            <div className="rounded-full overflow-hidden border-4 border-primary shadow-xl shadow-primary/30">
              <Image
                src="/avatar.jpg"
                alt="Robin Alexander"
                width={400}
                height={400}
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
