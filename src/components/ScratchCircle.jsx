import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import './ScratchCircle.css';

const ScratchCircle = ({ label, value, index }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isScratched, setIsScratched] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const isDrawing = useRef(false);
  const scratchedPixelsCount = useRef(0);

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const size = canvas.offsetWidth || 140;
    
    // Crisp display
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    // Luxury Astral Gold Foil Gradient
    const gradient = ctx.createRadialGradient(size / 2, size / 2, 5, size / 2, size / 2, size / 2);
    gradient.addColorStop(0, '#FFF3C4');
    gradient.addColorStop(0.35, '#F5D061');
    gradient.addColorStop(0.75, '#D4AF37');
    gradient.addColorStop(1, '#684B0E');

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    ctx.fill();

    // Astral Rune Rings
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2 - 7, 0, Math.PI * 2);
    ctx.stroke();

    ctx.strokeStyle = 'rgba(104, 75, 14, 0.4)';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2 - 13, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);

    // Text on magical foil
    ctx.fillStyle = '#3F2C04';
    ctx.font = '700 11px Cinzel, serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('✦ RASCA AQUÍ ✦', size / 2, size / 2 - 7);

    ctx.fillStyle = '#5A4109';
    ctx.font = '600 11px Montserrat, sans-serif';
    ctx.fillText(label, size / 2, size / 2 + 12);
  }, [label]);

  useEffect(() => {
    initCanvas();
    const handleResize = () => {
      if (!isRevealed) initCanvas();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [initCanvas, isRevealed]);

  const scratch = (clientX, clientY) => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 18, 0, Math.PI * 2);
    ctx.fill();

    scratchedPixelsCount.current += 1;
    if (!isScratched) setIsScratched(true);

    if (scratchedPixelsCount.current > 24 && !isRevealed) {
      revealFull();
    }
  };

  const revealFull = () => {
    setIsRevealed(true);
    setIsScratched(true);
  };

  // Mouse handlers
  const handleMouseDown = (e) => {
    isDrawing.current = true;
    scratch(e.clientX, e.clientY);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing.current) return;
    scratch(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    isDrawing.current = true;
    const touch = e.touches[0];
    scratch(touch.clientX, touch.clientY);
  };

  const handleTouchMove = (e) => {
    if (!isDrawing.current) return;
    const touch = e.touches[0];
    scratch(touch.clientX, touch.clientY);
  };

  const handleTouchEnd = () => {
    isDrawing.current = false;
  };

  return (
    <motion.div 
      className="scratch-circle-wrapper"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      ref={containerRef}
    >
      <div className={`scratch-circle-inner ${isRevealed ? 'revealed' : ''}`}>
        {/* Revealed Content Behind: Astral Night Nebula */}
        <div className="scratch-revealed-content">
          <span className="scratch-label">{label}</span>
          <span className="scratch-value">{value}</span>
          {isRevealed && (
            <motion.div 
              className="sparkle-badge"
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 12 }}
            >
              <Sparkles size={16} className="text-gold" />
            </motion.div>
          )}
        </div>

        {/* Scratch Canvas Overlay */}
        <AnimatePresence>
          {!isRevealed && (
            <motion.canvas
              ref={canvasRef}
              className="scratch-canvas"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              exit={{ opacity: 0, scale: 1.1, filter: 'blur(8px)' }}
              transition={{ duration: 0.4 }}
              title="Rasca con el mouse o dedo para revelar"
            />
          )}
        </AnimatePresence>
      </div>

      {!isRevealed && (
        <button 
          className="scratch-tap-btn"
          onClick={revealFull}
          title="Toca para descubrir"
        >
          {isScratched ? "✦ Descubrir" : "✦ Rasca o toca"}
        </button>
      )}
    </motion.div>
  );
};

export default ScratchCircle;
