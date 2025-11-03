"use client";
import { motion } from "framer-motion";

const items = [
  {
    title: "Software Development Engineer Intern",
    company: "MOGI I/O",
    date: "Jan 2023 – Aug 2023",
    details: [
      "Built dynamic applications using JavaScript and React Native/Angular.",
      "Integrated CI/CD with Git, increasing efficiency by 30%.",
      "Implemented Node.js APIs improving responsiveness by 25%."
    ]
  },
  {
    title: "Software Development Engineer Intern",
    company: "DYNAPT",
    date: "May 2022 – Nov 2022",
    details: [
      "Created RESTful APIs using Node.js.",
      "Optimized data retrieval with MongoDB & SQL resulting in 40% faster queries."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="my-16">
      <motion.h2 initial={{ x:-20, opacity:0 }} whileInView={{ x:0, opacity:1 }} className="text-2xl font-semibold">Experience</motion.h2>
      <div className="mt-6 space-y-4">
        {items.map((it) => (
          <motion.div key={it.company} initial={{ opacity:0, y:8 }} whileInView={{ opacity:1, y:0 }} className="container-card p-5">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold">{it.title}</h4>
                <p className="text-sm text-muted">{it.company} • {it.date}</p>
                <ul className="mt-3 text-sm text-muted list-disc pl-5 space-y-1">
                  {it.details.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
