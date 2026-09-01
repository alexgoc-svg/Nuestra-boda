import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Download } from 'lucide-react';
import { weddingData } from '../config/weddingData';
import { getGoogleCalendarUrl, downloadIcsFile } from '../utils/calendar';
import './SaveTheDate.css';

const FlipCard = ({ label, value }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flip-card-container" onClick={() => setIsFlipped(!isFlipped)}>
      <motion.div
        className="flip-card-inner"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="flip-card-front">
          <span>{label}</span>
          <p className="tap-hint">Toca para revelar</p>
        </div>
        <div className="flip-card-back">
          <span>{value}</span>
        </div>
      </motion.div>
    </div>
  );
};

const SaveTheDate = () => {
  const { day, month, year, fullDateText } = weddingData.date;
  const googleCalendarUrl = getGoogleCalendarUrl(weddingData.calendar);

  return (
    <section className="section save-date-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="section-title">Reserva la fecha</h2>
          <p className="save-date-full">{fullDateText}</p>
        </motion.div>
        
        <div className="cards-wrapper">
          <FlipCard label="DÍA" value={day} />
          <FlipCard label="MES" value={month} />
          <FlipCard label="AÑO" value={year} />
        </div>

        <motion.div 
          className="calendar-actions-wrapper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a 
            href={googleCalendarUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-calendar btn-google"
          >
            <Calendar size={18} />
            Google Calendar
          </a>

          <button 
            onClick={() => downloadIcsFile(weddingData.calendar)}
            className="btn-calendar btn-ical"
            title="Descargar evento para Apple Calendar, Outlook u otros"
          >
            <Download size={18} />
            Apple / Outlook (.ics)
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SaveTheDate;
