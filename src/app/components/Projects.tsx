import React from 'react';
import { motion } from 'motion/react';
import { Github, Lock } from 'lucide-react';
import marauderImg from '../../assets/marauder.png';
import portfolioImg from '../../assets/portfolio.png';
import tlsImg from '../../assets/tls.webp';
import tiktalkImg from '../../assets/tiktalk.png';
import jsonvizImg from '../../assets/jsonviz.png';
import scraperImg from '../../assets/scraper.png';
import cutterImg from '../../assets/cutter.png';
import orangeImg from '../../assets/orange.png';

export function Projects() {
  const projects = [
    {
      title: "Marauder",
      type: "Personal Project",
      status: "ongoing" as const,
      description: "Offline-first password manager with Python backend and browser extension. Features local encrypted storage, secure key derivation, and password generation. AES-256 encrypted vault with PBKDF2 key derivation.",
      tags: ["Python", "Tauri", "Rust", "WebExtension"],
      image: marauderImg,
      github: "https://github.com/desir-arm4n/Marauder"
    },
    {
      title: "Portfolio",
      type: "Personal Project",
      status: "finished" as const,
      description: "Clean, modern portfolio showcasing ML, computer vision, and full-stack work. Built with React, Vite, and Tailwind. Responsive layout with Motion animations.",
      tags: ["React", "Vite", "Tailwind", "Motion"],
      image: portfolioImg,
      github: "https://github.com/desir-arm4n/Portfolio"
    },
    {
      title: "Touchless Lock System",
      type: "Academic",
      status: "finished" as const,
      description: "Contributed computer vision pipeline, model training, and inference for touchless door lock system. Real-time palm detection with MediaPipe and LBP features. 30 FPS inference on standard hardware.",
      tags: ["Python", "OpenCV", "MediaPipe", "SQLite"],
      image: tlsImg,
      github: "https://github.com/desir-arm4n/TLS"
    },
    {
      title: "TikTalk",
      type: "Contribution",
      status: "finished" as const,
      description: "Contributed Socket.io configurations and security implementations for anonymous chat app serving Bicol University students. Real-time messaging for the student community.",
      tags: ["Next.js", "TypeScript", "Socket.io", "Firebase"],
      image: tiktalkImg,
      github: "https://github.com/zombiewav/randomchatforBU",
      private: true
    },
    {
      title: "JSON Visualizer",
      type: "Personal Project",
      status: "finished" as const,
      description: "Interactive JSON data visualization tool with Streamlit and Tkinter UI for easy data exploration and analysis. Dual interface for web and desktop workflows.",
      tags: ["Python", "Streamlit", "Tkinter"],
      image: jsonvizImg,
      github: "https://github.com/desir-arm4n/JSON-Visualizer"
    },
    {
      title: "Web Scraper",
      type: "Personal Project",
      status: "ongoing" as const,
      description: "Web scraping application with Flask API endpoints and asynchronous background jobs for automated data extraction. MySQL-backed persistence with configurable concurrency.",
      tags: ["Python", "Flask", "MySQL", "Threading"],
      image: scraperImg,
      github: "https://github.com/desir-arm4n/scraper"
    },
    {
      title: "Automatic Bottle Strip Cutter",
      type: "Academic",
      status: "finished" as const,
      description: "Arduino-based automation for cutting plastic bottle strips safely and consistently. Uses an infrared sensor for detection and timing, with a motorized cutting mechanism for multi-purpose strips (craft, recycling, or prototyping).",
      tags: ["Arduino", "C++", "Infrared Sensor", "Automation"],
      image: cutterImg,
      github: "https://github.com/desir-arm4n",
      private: true
    },
    {
      title: "Orange Ripeness Quality Classifier",
      type: "Academic",
      status: "finished" as const,
      description: "YOLOv8-based classifier trained on a custom dataset to detect ripe, unripe or rotten oranges. Captures 360° views via conveyor belt; achieves 96% accuracy with ~3.4% variance at 60 FPS on Raspberry Pi.",
      tags: ["Python", "Raspberry Pi", "YOLOv8", "OpenCV", "MediaPipe"],
      image: orangeImg,
      github: "https://github.com/desir-arm4n",
      private: true
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
          {projects.slice(0, -2).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden bg-gray-100 flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-1 min-h-0">
                <h3 className="text-xl font-bold group-hover:text-purple-600 transition-colors mb-2">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 font-medium">
                    {project.type}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    project.status === 'ongoing'
                      ? 'bg-amber-100 text-amber-700'
                      : 'bg-green-100 text-green-700'
                  }`}>
                    {project.status === 'ongoing' ? 'Ongoing' : 'Finished'}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 text-sm flex-1">
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

                <div className="flex gap-4 mt-auto">
                  {project.private ? (
                    <span className="flex items-center gap-2 text-gray-500 text-sm">
                      <Lock size={18} />
                      Private
                    </span>
                  ) : (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors"
                    >
                      <Github size={18} />
                      <span className="text-sm">Code</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
          <div className="sm:col-span-2 lg:col-span-3 flex justify-center gap-6 md:gap-8 flex-wrap">
            {projects.slice(-2).map((project, index) => (
              <motion.div
                key={projects.length - 2 + index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (projects.length - 2 + index) * 0.1 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col w-full sm:max-w-[calc(50%-12px)] lg:max-w-[calc(33.333%-22px)]"
              >
                <div className="relative h-48 overflow-hidden bg-gray-100 flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-1 min-h-0">
                  <h3 className="text-xl font-bold group-hover:text-purple-600 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 font-medium">
                      {project.type}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      project.status === 'ongoing'
                        ? 'bg-amber-100 text-amber-700'
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {project.status === 'ongoing' ? 'Ongoing' : 'Finished'}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm flex-1">
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

                  <div className="flex gap-4 mt-auto">
                    {project.private ? (
                      <span className="flex items-center gap-2 text-gray-500 text-sm">
                        <Lock size={18} />
                        Private
                      </span>
                    ) : (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors"
                      >
                        <Github size={18} />
                        <span className="text-sm">Code</span>
                      </a>
                    )}
                  </div>
                </div>

                <div className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}