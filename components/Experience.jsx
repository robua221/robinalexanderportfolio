"use client";
import { motion } from "framer-motion";

const items = [
  {
    title: "Software Developer Engineer",
    company: "MOGI I/O",
    date: "Aug 2022 – Jul 2023",
    details: [
      "Built and deployed production applications using TypeScript, Node.js, PostgreSQL, and AWS.",
      "Improved API response time 25% by optimizing REST APIs, PostgreSQL queries, and Redis caching.",
      "Reduced UI defects 35% through modular components, testing, and structured code reviews.",
      "Reduced deployment time 30% by implementing CI/CD pipelines with Docker and GitHub Actions.",
      "Developed backend services and API integrations supporting application functionality and business workflows.",
      "Investigated application and API issues through debugging, testing, and collaboration with QA and engineering teams.",
      "Collaborated with product, design, data, and QA teams to translate requirements into technical solutions.",
    ],
  },
  {
    title: "Software Developer Engineer",
    company: "DYNAPT",
    date: "Jul 2021 – Aug 2022",
    details: [
      "Improved data retrieval time 40% by redesigning PostgreSQL schemas and optimizing SQL queries across relational data models.",
      "Developed backend services using Node.js, Python, PostgreSQL, REST APIs, and AWS.",
      "Built backend automation solutions using Node.js and Python to improve application workflows and reduce repetitive development tasks.",
      "Increased application reliability through Jest unit and integration testing, code reviews, and CI/CD workflows.",
      "Investigated production issues across application, database, and API layers to identify and resolve software defects.",
      "Collaborated with product managers, designers, and QA engineers in Agile sprints, tracking development tasks through Jira.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="my-16">
      <motion.h2
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        className="text-2xl font-semibold"
      >
        Experience
      </motion.h2>
      <div className="mt-6 space-y-4">
        {items.map((it) => (
          <motion.div
            key={it.company}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="container-card p-5"
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold">{it.title}</h4>
                <p className="text-sm text-muted">
                  {it.company} • {it.date}
                </p>
                <ul className="mt-3 text-sm text-muted list-disc pl-5 space-y-1">
                  {it.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
