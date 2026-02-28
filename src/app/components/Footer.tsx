import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">Desir</h3>
            <p className="text-sm md:text-base text-purple-200">
              Backend Developer specializing in Python, cloud solutions, and computer vision. Available for freelance work.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm md:text-base">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm md:text-base text-purple-200 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#tech" className="text-sm md:text-base text-purple-200 hover:text-white transition-colors">
                  Tech Stack
                </a>
              </li>
              <li>
                <a href="#projects" className="text-sm md:text-base text-purple-200 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm md:text-base text-purple-200 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm md:text-base">Connect</h4>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/trjdsk"
                target="_blank"
                whileHover={{ scale: 1.1, y: -5 }}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -5 }}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.1, y: -5 }}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-sm md:text-base text-purple-200 flex items-center justify-center gap-2">
            Made with <Heart size={16} className="fill-pink-400 text-pink-400" /> by Desir © 2026
          </p>
        </div>
      </div>
    </footer>
  );
}