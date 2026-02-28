import React from 'react';
import { motion } from 'motion/react';
import { Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: "Marauder",
      type: "Personal Project",
      description: "Offline-first password manager with Python backend and browser extension. Features local encrypted storage, secure key derivation, and password generation. AES-256 encrypted vault with PBKDF2 key derivation.",
      tags: ["Python", "Tauri", "Rust", "WebExtension"],
      gradient: "from-purple-500 to-pink-500",
      github: "https://github.com/trjdsk/Marauder"
    },
    {
      title: "Portfolio",
      type: "Personal Project",
      description: "Clean, modern portfolio showcasing ML, computer vision, and full-stack work. Built with React, Vite, and Tailwind. Responsive layout with Motion animations.",
      tags: ["React", "Vite", "Tailwind", "Motion"],
      gradient: "from-gray-700 to-purple-600",
      github: "https://github.com/trjdsk/Portfolio"
    },
    {
      title: "Touchless Lock System",
      type: "Academic",
      description: "Contributed computer vision pipeline, model training, and inference for touchless door lock system. Real-time palm detection with MediaPipe and LBP features. 30 FPS inference on standard hardware.",
      tags: ["Python", "OpenCV", "MediaPipe", "SQLite"],
      gradient: "from-pink-500 to-blue-500",
      github: "https://github.com/trjdsk/TLS"
    },
    {
      title: "TikTalk",
      type: "Contribution",
      description: "Contributed Socket.io configurations and security implementations for anonymous chat app serving Bicol University students. Real-time messaging for the student community.",
      tags: ["Next.js", "TypeScript", "Socket.io", "Firebase"],
      gradient: "from-blue-500 to-indigo-500",
      github: "https://github.com/zombiewav/randomchatforBU"
    },
    {
      title: "JSON Visualizer",
      type: "Personal Project",
      description: "Interactive JSON data visualization tool with Streamlit and Tkinter UI for easy data exploration and analysis. Dual interface for web and desktop workflows.",
      tags: ["Python", "Streamlit", "Tkinter"],
      gradient: "from-indigo-500 to-purple-500",
      github: "https://github.com/trjdsk/JSON-Visualizer"
    },
    {
      title: "Web Scraper",
      type: "Personal Project",
      description: "Web scraping application with Flask API endpoints and asynchronous background jobs for automated data extraction. MySQL-backed persistence with configurable concurrency.",
      tags: ["Python", "Flask", "MySQL", "Threading"],
      gradient: "from-purple-500 to-pink-500",
      github: "https://github.com/trjdsk/scraper"
    }
  ];

  return (
    <section className="py-24 bg-white" id="projects">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            A showcase of innovative solutions built with modern technologies
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`} />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 font-medium">
                    {project.type}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                </div>
              </div>

              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}