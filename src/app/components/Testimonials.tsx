import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Aira',
    position: 'Student',
    project: 'Touchless Lock System',
    paragraphs: [
      "Thank you to the three of you for helping us with our device. We really appreciate the time and effort you gave throughout the whole process.",
      "When it came to the device, you were very consistent in giving updates, fixing issues, and making improvements whenever needed.",
      "Especially when there were malfunctions, you responded and took action so quickly. Most especially you, Kuya Veigar."
    ],
    highlight: "Especially when there were malfunctions, you responded and took action so quickly. Most especially you, Kuya Veigar."
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white" id="testimonials">
      <style>{`.testimonial-content::-webkit-scrollbar { display: none; }`}</style>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            What clients and collaborators say about working together
          </p>
        </motion.div>

        <div className="max-w-xl mx-auto space-y-8">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-visible rounded-2xl border-l-4 border-purple-400 bg-white p-6 sm:p-8 shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-200/60 hover:-translate-y-0.5 ring-1 ring-purple-100/60 hover:ring-purple-200/50 transition-all duration-300"
            >
              <Quote className="absolute top-5 right-5 w-12 h-12 text-purple-300 group-hover:text-purple-400/90 transition-colors duration-300" aria-hidden />
              <div className="pr-10">
                <div className="mb-5">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-purple-500 mb-1.5">
                    {testimonial.project}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400 mt-0.5">{testimonial.position}</p>
                </div>
                <div
                  className="testimonial-content text-gray-600 text-sm leading-relaxed max-h-40 min-h-0 overflow-y-auto overflow-x-hidden pr-2 italic overscroll-contain max-w-[95%]"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' } as React.CSSProperties}
                >
                  “{testimonial.paragraphs.map((para, i) =>
                    para === testimonial.highlight ? (
                      <span key={i} className={i === 0 ? 'block' : 'block mt-2'}><strong className="font-semibold not-italic text-gray-700">{para}</strong></span>
                    ) : (
                      <span key={i} className={i === 0 ? 'block' : 'block mt-2'}>{para}</span>
                    )
                  )}”
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}