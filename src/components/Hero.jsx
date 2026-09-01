import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { weddingData } from '../config/weddingData';
import './Hero.css';

const getYouTubeId = (url) => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

const Hero = () => {
  const { names, subtitle, quote } = weddingData.couple;
  const { videoUrl, posterUrl } = weddingData.hero;
  const youtubeId = getYouTubeId(videoUrl);

  return (
    <section className="hero-section">
      <div className="hero-video-wrapper">
        {youtubeId ? (
          <iframe
            className="hero-video hero-iframe"
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1`}
            title="Hero Video Background"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
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
        )}
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
