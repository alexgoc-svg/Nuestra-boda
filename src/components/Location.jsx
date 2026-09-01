import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import { weddingData } from '../config/weddingData';
import './Location.css';

const LocationCard = ({ title, locationName, time, address, mapUrl, delay }) => (
  <motion.div 
    className="location-card"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
  >
    <div className="location-icon">
      <MapPin size={32} />
    </div>
    <h3 className="location-title">{title}</h3>
    <h4 className="location-name">{locationName}</h4>
    <div className="location-details">
      <p className="location-time">{time}</p>
      <p className="location-address">{address}</p>
    </div>
    <a 
      href={mapUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="btn-primary map-btn"
    >
      <Navigation size={16} />
      Cómo llegar
    </a>
  </motion.div>
);

const Location = () => {
  return (
    <section className="section location-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Ubicaciones
        </motion.h2>
        
        <div className="locations-wrapper">
          {weddingData.locations.map((loc, idx) => (
            <LocationCard 
              key={loc.id || idx}
              title={loc.title}
              locationName={loc.name}
              time={loc.time}
              address={loc.address}
              mapUrl={loc.mapUrl}
              delay={0.1 * (idx + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Location;
