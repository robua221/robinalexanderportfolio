"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "FitFlex App",
    desc: "Fitness App with AI assistant who acts as gym trainer .Features like show nearby gyms, connect to apple watch",
    tech: ["React Naive", "Firebase", "Google Map Api", "Youtube Api"],
    github: "#",
    demo: "#"
  },
  {
    title: "E-Commerce Mobile Shop",
    desc: "Second-hand phone sales app built with React Native & Redux — Add-to-cart flows.",
    tech: ["React Native","Redux"],
    github: "#",
    demo: "#"
  },
  {
    title: "Smart-Todo",
    desc: "Feature-rich task manager using MERN stack with CRUD & filters.",
    tech: ["React","Node","MongoDB"],
    github: "#",
    demo: "#"
  },
  {
    title: "News App",
    desc: "React app fetching real-time news from API & displaying categories.",
    tech: ["React","API"],
    github: "#",
    demo: "#"
  },
  {
    title: "Movie App",
    desc: "Random movies from API with search functionality.",
    tech: ["React","API"],
    github: "#",
    demo: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="my-16">
      <motion.h2 initial={{ x:-20, opacity:0 }} whileInView={{ x:0, opacity:1 }} className="text-2xl font-semibold">Projects</motion.h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <motion.div key={p.title} whileHover={{ y:-6 }} className="container-card p-5">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-muted mt-2">{p.desc}</p>
                <div className="mt-3 flex gap-2 flex-wrap">
                  {p.tech.map(t => <span key={t} className="text-xs px-2 py-1 bg-white/3 rounded-md">{t}</span>)}
                </div>
              </div>
              <div className="text-right">
                <a href={p.demo} className="text-sm block text-primary mb-2">Live</a>
                <a href={p.github} className="text-sm block text-muted">Code</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
