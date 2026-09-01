import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { weddingData } from '../config/weddingData';
import './Hero.css';

const Hero = () => {
  const { names, subtitle, quote } = weddingData.couple;
  const { videoUrl, posterUrl } = weddingData.hero;

  return (
    <section className="hero-section">
      <div className="hero-video-wrapper">
        <video 
          key={videoUrl}
          className="hero-video"
          autoPlay 
          loop 
          muted 
          playsInline
          poster={posterUrl}
        >
          <source src={videoUrl} type="video/mp4" />
          Tu navegador no soporta video HTML5.
        </video>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="hero-text-container"
        >
          <h2 className="hero-subtitle">{subtitle}</h2>
          <h1 className="hero-title">{names}</h1>
          <p className="hero-quote">{quote}</p>
        </motion.div>
      </div>

      <motion.div 
        className="hero-scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="scroll-text">Desliza</span>
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
