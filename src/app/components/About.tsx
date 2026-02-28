import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Award, Heart } from 'lucide-react';

export function About() {
  const milestones = [
    {
      icon: Heart,
      year: "Childhood",
      title: "Gaming Passion",
      description: "Discovered my love for technology through gaming experiences"
    },
    {
      icon: Calendar,
      year: "2020",
      title: "Started Programming",
      description: "Began my journey into the world of software development"
    },
    {
      icon: Award,
      year: "2024",
      title: "Professional Work",
      description: "Started taking on commissions and building real-world solutions"
    }
  ];

  return (
    <section className="py-24 bg-white" id="about">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
           A developer focused on building intelligent systems and scalable applications
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <milestone.icon className="text-white" size={24} />
              </div>
              <div className="text-sm text-purple-600 font-semibold mb-2">{milestone.year}</div>
              <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
              <p className="text-gray-600">{milestone.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 p-1 rounded-2xl"
        >
          <div className="bg-white p-6 md:p-8 lg:p-12 rounded-2xl">
            <h3 className="text-xl md:text-2xl font-bold mb-4">My Journey</h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
              My passion for programming was ignited through my childhood love of gaming. What started as curiosity about how games worked evolved into a deep fascination with software development.
            </p>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
              Since 2020, I've been on an intensive learning journey, mastering various technologies and frameworks. I specialize in backend development with Python, building everything from web applications with Flask and Django to computer vision solutions.
            </p>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              In 2024, I began taking on professional commissions, applying my skills to real-world problems. I'm also a certified Azure DP-900 professional, combining my backend expertise with cloud technologies to deliver scalable, modern solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}