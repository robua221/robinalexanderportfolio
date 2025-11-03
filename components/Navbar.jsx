"use client";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { useState, useEffect } from "react";

const sections = ["about", "skills", "projects", "experience", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const pos = window.scrollY + window.innerHeight / 3;
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && pos >= el.offsetTop) setActive(id);
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-bg/80 backdrop-blur-md border-b border-white/10 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">

        {/* Logo */}
        <Link href="/" className="text-lg font-bold">Robin</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {sections.map(id => (
            <a key={id} href={`#${id}`}
              className={`text-sm uppercase tracking-wide ${active === id ? "text-primary" : "text-muted hover:text-white"}`}>
              {id}
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="hidden md:flex gap-4 text-lg">
          <a href="https://github.com/robua221" target="_blank"><FiGithub /></a>
          <a href="https://linkedin.com/in/robin-alexander9899" target="_blank"><FiLinkedin /></a>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col items-center bg-bg border-t border-white/10 pb-4">
          {sections.map(id => (
            <a
              key={id}
              onClick={() => setOpen(false)}
              href={`#${id}`}
              className="text-sm uppercase tracking-wide py-2 text-muted hover:text-primary"
            >
              {id}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
