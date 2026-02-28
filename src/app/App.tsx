import React, { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import metaImg from '@/assets/meta.png';
import iconImg from '@/assets/icon.png';

export default function App() {
  useEffect(() => {
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
    const metaUrl = metaImg.startsWith('http') ? metaImg : `${baseUrl}${metaImg}`;

    const setMeta = (attr: string, value: string, isProperty = false) => {
      const key = isProperty ? 'property' : 'name';
      let el = document.querySelector(`meta[${key}="${attr}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(key, attr);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };
    setMeta('og:image', metaUrl, true);
    setMeta('twitter:image', metaUrl);
    setMeta('twitter:card', 'summary_large_image');

    const link = document.querySelector("link[rel~='icon']") || document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = iconImg;
    if (!document.querySelector("link[rel~='icon']")) {
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <TechStack />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}