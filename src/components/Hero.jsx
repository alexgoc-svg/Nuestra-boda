import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { weddingData } from '../config/weddingData';
import './Hero.css';

const Hero = () => {
  const { names, subtitle, quote } = weddingData.couple;

  return (
    <section className="hero-section">
      <div className="hero-video-wrapper">
        <video 
          className="hero-video"
          autoPlay 
          loop 
          muted 
          playsInline
          poster="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-having-their-first-dance-41484-large.mp4" type="video/mp4" />
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
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
