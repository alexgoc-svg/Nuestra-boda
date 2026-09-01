import React, { useEffect, useRef } from 'react';
import './MagicParticles.css';

const MagicParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Generate magical stardust particles
    const particleCount = Math.min(Math.floor(window.innerWidth / 15), 65);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 0.5,
        color: ['#F5D061', '#FFE58F', '#A5F3FC', '#C7D2FE', '#FFFFFF'][Math.floor(Math.random() * 5)],
        alpha: Math.random() * 0.7 + 0.2,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: -Math.random() * 0.5 - 0.1, // gently float upward
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleDir: 1
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        // Twinkle alpha
        p.alpha += p.twinkleSpeed * p.twinkleDir;
        if (p.alpha > 0.85) {
          p.alpha = 0.85;
          p.twinkleDir = -1;
        } else if (p.alpha < 0.2) {
          p.alpha = 0.2;
          p.twinkleDir = 1;
        }

        // Move
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around
        if (p.y < 0) p.y = height;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        // Draw glowing particle
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = p.radius * 6;
        ctx.shadowColor = p.color;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="magic-particles-canvas" />;
};

export default MagicParticles;
