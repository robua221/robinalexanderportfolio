"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./animations";

export default function About() {
  return (
    <section id="about" className="my-16 scroll-mt-28">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-2xl font-semibold"
      >
        About Me
      </motion.h2>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-4 container-card p-6"
      >
        <p className="text-muted leading-relaxed">
          <span className="block mb-2">
            I am a <strong>Full-Stack JavaScript Developer</strong> with
            experience building web and mobile applications using modern tools
            and frameworks. I work primarily with the MERN stack and
            React-Native, and I enjoy designing clean frontend interfaces,
            writing efficient backend APIs, and integrating cloud technologies
            to deliver complete solutions.
          </span>

          <span className="block mb-2">
            I completed the <strong>Blockchain Development program</strong> at
            George Brown College, where I built a strong foundation in
            distributed systems, smart contracts, and modern web technologies. I
            am currently pursuing the{" "}
            <strong>Mobile Application Development program</strong> at George
            Brown College, expanding my skills in{" "}
            <strong>Swift, Firebase, and iOS development</strong> alongside
            cross-platform mobile engineering with React-Native.
          </span>

          <span className="block mb-2">
            During my internships, I worked on real product features, API
            development, performance improvements, deployment pipelines, and
            cross-team collaboration in agile environments. These experiences
            strengthened my problem-solving ability, attention to detail, and
            understanding of full-cycle software development.
          </span>

          <span className="block">
            I enjoy learning and working with new technologies and I am
            currently exploring <strong>Web3 and cloud architecture</strong>{" "}
            while continuing to build projects that help me grow as a developer
            and deliver meaningful digital experiences.
          </span>
        </p>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-white mb-2">Key Skills</h4>
            <ul className="text-sm text-muted space-y-2 list-disc pl-5">
              <li>MERN Stack (React, Next.js, Node.js, Express, MongoDB)</li>
              <li>Cross-platform mobile apps with React-Native</li>
              <li>Swift, Firebase & iOS fundamentals</li>
              <li>REST APIs, database design & backend development</li>
              <li>AWS / Firebase / CI-CD basics</li>
              <li>Version control, debugging & optimization</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-white mb-2">Education</h4>
            <p className="text-sm text-muted">
              <strong>Mobile Application Development</strong> — George Brown
              College (Canada)
            </p>
            <p className="text-sm text-muted">
              <strong>Blockchain Development</strong> — George Brown College
              (Canada)
            </p>
            <p className="text-sm text-muted">
              <strong>Masters in Computer Application</strong> — Jamia Hamdard
              University (India)
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
