"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Particles from "@tsparticles/react"
import { loadSlim } from "tsparticles-slim"

export default function Home() {
  const fullText = `> whoami
Oscar Canoa Galeano
Software Developer
Building scalable & interactive systems`

  const [displayedText, setDisplayedText] = useState("")
  const [index, setIndex] = useState(0)
  const [showButton, setShowButton] = useState(false)

  const particlesInit = async (engine: any) => {
    await loadSlim(engine)
  }

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index])
        setIndex(index + 1)
      }, 20)
      return () => clearTimeout(timeout)
    } else {
      setTimeout(() => setShowButton(true), 400)
    }
  }, [index])

  return (
<main className="animated-bg text-gray-300 font-mono scroll-smooth relative">
  
      {/* PARTICLES */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 40 },
            size: { value: 2 },
            move: { speed: 0.4 },
            opacity: { value: 0.15 },
            color: { value: "#22d3ee" }
          }
        }}
        className="fixed top-0 left-0 w-full h-full -z-10"
      />

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-lg border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-white font-semibold text-lg tracking-wide">
            OSCAR CANOA
          </h1>

          <div className="hidden md:flex space-x-8 text-gray-400 text-sm">
            <NavButton target="projects">Projects</NavButton>
            <NavButton target="skills">Skills</NavButton>
            <NavButton target="contact">Contact</NavButton>

            <a
              href="/resume.pdf"
              download
              className="border border-cyan-400 px-4 py-1 text-cyan-400 hover:bg-cyan-400 hover:text-black transition rounded"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 text-center">
        <div className="text-xl md:text-3xl whitespace-pre-line font-light">
          {displayedText}
          <span className="animate-pulse text-cyan-400">|</span>
        </div>

        {showButton && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-12 px-8 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 rounded-md shadow-lg shadow-cyan-500/20"
          >
            Enter Portfolio ↓
          </motion.button>
        )}
      </section>

      {/* ABOUT */}
<section className="min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-10 py-24">
  <h2 className="text-3xl md:text-5xl text-white mb-10 font-semibold">
    About Me
  </h2>

  <p className="max-w-3xl text-gray-400 leading-relaxed text-lg">
    Software Developer graduating in April 2026 with a strong foundation in
    full-stack development, mobile applications, and immersive systems.
    Passionate about building scalable, user-focused applications with clean
    architecture and modern technologies.
  </p>

  <a
    href="/Oscar_Canoa_Resume.pdf"
    download
    className="mt-10 px-8 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 rounded-md shadow-lg shadow-cyan-500/20"
  >
    Download Resume
  </a>
</section>

      {/* PROJECTS */}
      <section id="projects" className="min-h-screen px-6 md:px-10 py-24">
        <h2 className="text-3xl md:text-5xl text-white mb-16 font-semibold text-center">
          Featured Projects
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 }
            }
          }}
          className="grid md:grid-cols-3 gap-10"
        >
          <ProjectCard title="Job Tracker" />
          <ProjectCard title="Yuba App" />
          <ProjectCard title="VR Framework" />
        </motion.div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="min-h-screen px-6 md:px-10 py-24 bg-black/40 backdrop-blur-md">
        <h2 className="text-3xl md:text-5xl text-white mb-16 text-center">
          Skills
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12 text-center"
        >
          <Skill title="Languages" items={["Python", "Java", "Kotlin", "C++"]} />
          <Skill title="Frontend" items={["React", "Next.js", "Tailwind"]} />
          <Skill title="Concepts" items={["OOP", "MVVM", "System Design"]} />
        </motion.div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="min-h-screen flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl text-white mb-8">Contact</h2>
        <p className="text-cyan-400 mb-2">oscar.canoa@outlook.fr</p>
        <p className="text-gray-400">github.com/Oscaar-cg</p>
      </section>

    </main>
  )
}

function NavButton({ target, children }: any) {
  return (
    <button
      onClick={() =>
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth" })
      }
      className="hover:text-white transition duration-300"
    >
      {children}
    </button>
  )
}

function ProjectCard({ title }: any) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 }
      }}
      className="
        bg-[#1a1a1a] 
        p-8 
        rounded-xl 
        border border-gray-800
        hover:border-cyan-400
        hover:shadow-lg 
        hover:shadow-cyan-500/20
        hover:-translate-y-2
        transition-all 
        duration-500
      "
    >
      <h3 className="text-xl text-white mb-3">
        {title}
      </h3>

      <p className="text-gray-400 mb-5 text-sm leading-relaxed">
        Modern scalable application built with strong architecture principles and clean code structure.
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        <span className="text-xs bg-cyan-600/20 text-cyan-400 px-3 py-1 rounded">
          React
        </span>
        <span className="text-xs bg-cyan-600/20 text-cyan-400 px-3 py-1 rounded">
          TypeScript
        </span>
        <span className="text-xs bg-cyan-600/20 text-cyan-400 px-3 py-1 rounded">
          Tailwind
        </span>
      </div>

      <a
        href="#"
        className="text-cyan-400 text-sm hover:underline"
      >
        View Project →
      </a>
    </motion.div>
  )
}

function Skill({ title, items }: any) {
  return (
    <div>
      <h3 className="text-cyan-400 mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-400">
        {items.map((item: string) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}