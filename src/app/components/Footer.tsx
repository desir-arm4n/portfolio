import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Heart, Coffee } from 'lucide-react';
import { navigateToHash } from '../utils/hashNav';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900 text-white py-5">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-2">Desir</h3>
            <p className="text-sm md:text-base text-purple-200">
              Backend Developer specializing in Python, cloud solutions, and computer vision. Available for freelance work.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-sm md:text-base">Quick Links</h4>
            <ul className="space-y-1">
              <li>
                <a href="#hero" onClick={(e) => { e.preventDefault(); navigateToHash('#hero'); }} className="text-sm md:text-base text-purple-200 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => { e.preventDefault(); navigateToHash('#about'); }} className="text-sm md:text-base text-purple-200 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#tech" onClick={(e) => { e.preventDefault(); navigateToHash('#tech'); }} className="text-sm md:text-base text-purple-200 hover:text-white transition-colors">
                  Tech Stack
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => { e.preventDefault(); navigateToHash('#projects'); }} className="text-sm md:text-base text-purple-200 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); navigateToHash('#contact'); }} className="text-sm md:text-base text-purple-200 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-sm md:text-base">Connect</h4>
            <div className="flex gap-3">
              <motion.a
                href="https://github.com/desir-arm4n"
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
                href="mailto:desir.arm4n@proton.me"
                whileHover={{ scale: 1.1, y: -5 }}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Mail size={20} />
              </motion.a>
              <motion.a
                href="https://buymeacoffee.com/desir.arm4n"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                title="Buy me a coffee"
              >
                <Coffee size={20} />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-4 text-center">
          <p className="text-sm text-purple-200 flex items-center justify-center gap-2">
            Made with <Heart size={16} className="fill-pink-400 text-pink-400" /> by Desir © 2026
          </p>
        </div>
      </div>
    </footer>
  );
}