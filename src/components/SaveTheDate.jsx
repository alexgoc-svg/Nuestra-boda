import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Download } from 'lucide-react';
import { weddingData } from '../config/weddingData';
import { getGoogleCalendarUrl, downloadIcsFile } from '../utils/calendar';
import ScratchCircle from './ScratchCircle';
import './SaveTheDate.css';

const SaveTheDate = () => {
  const { day, month, year, fullDateText } = weddingData.date;
  const googleCalendarUrl = getGoogleCalendarUrl(weddingData.calendar);

  const scratchItems = [
    { label: "DÍA", value: day },
    { label: "MES", value: month },
    { label: "AÑO", value: year }
  ];

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
        
        <div className="scratch-circles-container">
          {scratchItems.map((item, index) => (
            <ScratchCircle 
              key={item.label}
              label={item.label}
              value={item.value}
              index={index}
            />
          ))}
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
