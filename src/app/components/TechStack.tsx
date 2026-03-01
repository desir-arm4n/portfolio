import React from 'react';
import { motion } from 'motion/react';
import { Brain, Code2, Database, Cloud, Cpu, Globe } from 'lucide-react';

export function TechStack() {
  const categories = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      color: "from-purple-600 to-purple-400",
      prominent: true,
      technologies: [
        "Python", "PyTorch", "TensorFlow", "OpenCV", "Scikit-learn", "NumPy", "Pandas", "MediaPipe"
      ]
    },
    {
      icon: Database,
      title: "Backend & Deployment",
      color: "from-pink-600 to-pink-400",
      prominent: false,
      technologies: ["Flask", "Django", "PostgreSQL", "MySQL", "MongoDB", "Azure Cloud", "Heroku"]
    },
    {
      icon: Globe,
      title: "Full Stack & Other Tools",
      color: "from-blue-600 to-blue-400",
      prominent: false,
      technologies: [
        "JavaScript", "TypeScript", "React", "Next.js", "Vue", "C", "C++", "C#", 
        "Arduino", "ESP32", "Raspberry Pi"
      ]
    }
  ];

  return (
    <section className="py-24 bg-white" id="tech">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            A diverse arsenal of technologies for building comprehensive solutions
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${category.prominent ? 'sm:col-span-2' : ''}`}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6`}>
                <category.icon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (techIndex * 0.05) }}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 p-1 rounded-2xl">
            <div className="bg-white px-6 md:px-8 py-3 md:py-4 rounded-2xl">
              <p className="text-sm md:text-base text-gray-700">
                <span className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Specialization:
                </span>{" "}
                Computer Vision • Backend Architecture • Cloud Solutions
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}