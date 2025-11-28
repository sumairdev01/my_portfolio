import { motion } from "framer-motion";
import { Code2, Rocket, Cpu } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Plant Disease Detection",
    description:
      "A deep learning based system to detect plant diseases from images using Flask API and React.",
    tech: ["Flask", "React", "TensorFlow", "Python"],
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "A scalable online store with secure payments, user authentication, and admin dashboard.",
    tech: ["Django", "React", "PostgreSQL", "Stripe"],
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A modern developer portfolio showcasing AI tools, projects, and skills with sleek animations.",
    tech: ["React", "Framer Motion", "TailwindCSS"],
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0a0f25] via-[#0d1b3b] to-[#132c5d] text-white px-8 py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-10 left-20 w-80 h-80 bg-blue-500/20 blur-3xl rounded-full animate-pulse -z-10" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-cyan-400/20 blur-3xl rounded-full animate-pulse -z-10" />

      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text mb-3">
          My Projects
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          A showcase of my latest development work — from AI innovations to
          full-stack web applications.
        </p>
      </motion.div>

      {/* Project Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05, rotate: -1 }}
            className="relative bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all"
          >
            {/* Icon */}
            <div className="flex justify-center mb-4">
              {index === 0 && <Cpu className="w-10 h-10 text-blue-400" />}
              {index === 1 && <Rocket className="w-10 h-10 text-cyan-400" />}
              {index === 2 && <Code2 className="w-10 h-10 text-purple-400" />}
            </div>

            <h2 className="text-2xl font-bold text-blue-300 mb-3 text-center">
              {project.title}
            </h2>
            <p className="text-gray-300 mb-4 text-center leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap justify-center gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-sm bg-gradient-to-r from-blue-500/30 to-cyan-500/30 text-blue-100 px-3 py-1 rounded-full border border-blue-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Subtle Glow Border */}
            <div className="absolute inset-0 rounded-2xl border border-transparent hover:border-blue-500/40 transition-all"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
