import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import './Countdown.css';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0
  });

  useEffect(() => {
    const targetDate = new Date(weddingData.date.iso).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
          horas: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutos: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          segundos: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: 'DÍAS', value: timeLeft.dias },
    { label: 'HORAS', value: timeLeft.horas },
    { label: 'MINUTOS', value: timeLeft.minutos },
    { label: 'SEGUNDOS', value: timeLeft.segundos }
  ];

  return (
    <section className="section countdown-section">
      <div className="container">
        <div className="countdown-wrapper">
          {timeUnits.map((unit, index) => (
            <motion.div 
              key={unit.label}
              className="countdown-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="countdown-number">
                {unit.value.toString().padStart(2, '0')}
              </div>
              <div className="countdown-label">{unit.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countdown;
