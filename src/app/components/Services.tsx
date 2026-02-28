import React from 'react';
import { motion } from 'motion/react';
import { Brain, Code } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Brain,
      title: "AI Solutions",
      color: "from-purple-600 to-purple-400",
      items: [
        "Custom model training",
        "Computer vision systems",
        "Automation and analytics",
        "AI integration into existing products"
      ]
    },
    {
      icon: Code,
      title: "Full Stack Development",
      color: "from-pink-600 to-pink-400",
      items: [
        "Web applications",
        "Admin dashboards",
        "REST APIs",
        "Cloud deployment"
      ]
    }
  ];

  return (
    <section className="py-24 bg-white" id="services">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            What I Build
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            Specialized solutions from intelligent systems to full-stack applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                <service.icon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-6">{service.title}</h3>
              <ul className="space-y-3">
                {service.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (index * 0.2) + (itemIndex * 0.1) }}
                    className="flex items-start"
                  >
                    <span className="inline-block w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
