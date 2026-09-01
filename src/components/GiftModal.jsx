import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, ExternalLink, CreditCard, ShoppingBag } from 'lucide-react';
import { weddingData } from '../config/weddingData';
import './GiftModal.css';

const GiftModal = ({ isOpen, onClose }) => {
  const [copiedClabe, setCopiedClabe] = useState(false);
  const [copiedAccount, setCopiedAccount] = useState(false);

  const { gifts } = weddingData;

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'clabe') {
      setCopiedClabe(true);
      setTimeout(() => setCopiedClabe(false), 2000);
    } else {
      setCopiedAccount(true);
      setTimeout(() => setCopiedAccount(false), 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose}>
        <motion.div 
          className="modal-card"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar modal">
            <X size={24} />
          </button>

          <h3 className="modal-title">{gifts.title}</h3>
          <p className="modal-subtitle">{gifts.note}</p>

          <div className="gift-section">
            <h4 className="gift-section-title">
              <CreditCard size={20} className="text-gold" />
              Transferencia Bancaria
            </h4>
            <div className="bank-info-box">
              <p><strong>Beneficiario:</strong> {gifts.bankAccount.beneficiary}</p>
              <p><strong>Banco:</strong> {gifts.bankAccount.bank}</p>
              
              <div className="copy-row">
                <p><strong>CLABE:</strong> <code>{gifts.bankAccount.clabe}</code></p>
                <button 
                  className="btn-copy"
                  onClick={() => copyToClipboard(gifts.bankAccount.clabe, 'clabe')}
                  title="Copiar CLABE"
                >
                  {copiedClabe ? <><Check size={14} /> ¡Copiado!</> : <><Copy size={14} /> Copiar</>}
                </button>
              </div>

              <div className="copy-row">
                <p><strong>No. Cuenta:</strong> <code>{gifts.bankAccount.account}</code></p>
                <button 
                  className="btn-copy"
                  onClick={() => copyToClipboard(gifts.bankAccount.account, 'account')}
                  title="Copiar Cuenta"
                >
                  {copiedAccount ? <><Check size={14} /> ¡Copiado!</> : <><Copy size={14} /> Copiar</>}
                </button>
              </div>
            </div>
          </div>

          <div className="gift-section">
            <h4 className="gift-section-title">
              <ShoppingBag size={20} className="text-gold" />
              Tiendas Departamentales
            </h4>
            <div className="registries-grid">
              {gifts.registries.map((reg, idx) => (
                <a 
                  key={idx}
                  href={reg.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="registry-link"
                >
                  <div>
                    <span className="registry-store">{reg.store}</span>
                    <span className="registry-number">Evento: {reg.eventNumber}</span>
                  </div>
                  <ExternalLink size={16} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default GiftModal;
