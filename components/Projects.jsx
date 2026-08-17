"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "AI-Powered Career SaaS Platform",
    desc: "Full-stack career platform with AI resume analysis, ATS scoring, job matching, resume building, interview preparation, Google OAuth, and Razorpay subscriptions.",
    tech: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "TypeScript",
      "Gemini API",
      "Razorpay",
    ],
    github: "#",
    demo: "#",
  },
  {
    title: "Real-Time Chat Application",
    desc: "Full-stack real-time messaging application with JWT authentication, instant messaging, online/offline status, image sharing, email notifications, and API rate limiting.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "JWT",
      "Tailwind CSS",
      "Zustand",
      "Cloudinary",
      "Resend",
      "Arcjet",
    ],
    github: "#",
    demo: "#",
  },
  {
    title: "FitFlex App",
    desc: "AI-powered fitness mobile app with a virtual trainer, nearby gym discovery, Apple Watch integration, and fitness-related content.",
    tech: [
      "React Native",
      "Firebase",
      "Google Maps API",
      "YouTube API",
    ],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="my-16">
      <motion.h2
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        className="text-2xl font-semibold"
      >
        Projects
      </motion.h2>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <motion.div
            key={p.title}
            whileHover={{ y: -6 }}
            className="container-card p-5"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold">{p.title}</h3>

                <p className="text-sm text-muted mt-2">
                  {p.desc}
                </p>

                <div className="mt-3 flex gap-2 flex-wrap">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 bg-white/3 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-right">
                <a
                  href={p.demo}
                  className="text-sm block text-primary mb-2"
                >
                  Live
                </a>

                <a
                  href={p.github}
                  className="text-sm block text-muted"
                >
                  Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
