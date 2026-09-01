import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift, Shirt, MessageCircle, UserCheck, Users } from 'lucide-react';
import { weddingData } from '../config/weddingData';
import GiftModal from './GiftModal';
import './Rsvp.css';

const Rsvp = () => {
  const [isGiftModalOpen, setIsGiftModalOpen] = useState(false);
  const [guestName, setGuestName] = useState('');
  const [passesCount, setPassesCount] = useState('1');
  const [dietary, setDietary] = useState('');

  const { dressCode, gifts, rsvp, couple } = weddingData;

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    
    let text = `¡Hola ${couple.names}! `;
    if (guestName.trim()) {
      text += `Soy *${guestName.trim()}* y confirmo con alegría mi asistencia para *${passesCount} persona(s)* a su boda.`;
    } else {
      text += rsvp.defaultMessage;
    }

    if (dietary.trim()) {
      text += ` (Nota / Restricción: ${dietary.trim()})`;
    }

    const whatsappUrl = `https://wa.me/${rsvp.phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="section rsvp-section">
      <div className="container">
        <motion.div 
          className="rsvp-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="info-grid">
            <div className="info-card">
              <Shirt size={40} className="info-icon" />
              <h3 className="info-title">{dressCode.title}</h3>
              <p className="info-desc">{dressCode.category}</p>
              <p className="info-subdesc">{dressCode.note}</p>
            </div>

            <div className="info-card">
              <Gift size={40} className="info-icon" />
              <h3 className="info-title">{gifts.title}</h3>
              <p className="info-desc">Tu presencia es nuestro mejor regalo.</p>
              <p className="info-subdesc">Pero si deseas tener un detalle con nosotros, puedes consultar nuestras opciones.</p>
              <button 
                className="btn-secondary"
                onClick={() => setIsGiftModalOpen(true)}
              >
                Ver opciones de regalo
              </button>
            </div>
          </div>

          <div className="rsvp-action">
            <h2 className="rsvp-title">RSVP</h2>
            <p className="rsvp-text">Por favor, confirma tu asistencia antes del <strong>{rsvp.deadline}</strong>.</p>
            
            <form className="rsvp-form" onSubmit={handleWhatsAppSend}>
              <div className="form-group">
                <label htmlFor="guest-name">
                  <UserCheck size={16} /> Tu Nombre Completo
                </label>
                <input 
                  id="guest-name"
                  type="text" 
                  className="form-input" 
                  placeholder="Ej. Carlos Mendoza" 
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="passes">
                    <Users size={16} /> No. de Personas
                  </label>
                  <select 
                    id="passes"
                    className="form-select"
                    value={passesCount}
                    onChange={(e) => setPassesCount(e.target.value)}
                  >
                    <option value="1">1 Persona</option>
                    <option value="2">2 Personas</option>
                    <option value="3">3 Personas</option>
                    <option value="4">4 Personas</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="dietary">
                    Alergias / Preferencias (Opcional)
                  </label>
                  <input 
                    id="dietary"
                    type="text" 
                    className="form-input" 
                    placeholder="Ej. Vegetariano / Sin gluten" 
                    value={dietary}
                    onChange={(e) => setDietary(e.target.value)}
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="btn-primary whatsapp-btn"
              >
                <MessageCircle size={20} />
                Confirmar por WhatsApp
              </button>
            </form>
          </div>

          <div className="closing-message">
            <p>{couple.closingMessage}</p>
            <h3>{couple.names}</h3>
          </div>
        </motion.div>
      </div>

      <GiftModal 
        isOpen={isGiftModalOpen} 
        onClose={() => setIsGiftModalOpen(false)} 
      />
    </section>
  );
};

export default Rsvp;
