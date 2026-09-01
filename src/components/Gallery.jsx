import React, { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { weddingData } from '../config/weddingData';
import './Gallery.css';

const Gallery = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true });
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const images = weddingData.gallery;

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="section gallery-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Nuestra Historia
        </motion.h2>
        
        <motion.div 
          className="embla" 
          ref={emblaRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="embla__container">
            {images.map((item, index) => (
              <div 
                className="embla__slide" 
                key={index}
                onClick={() => openLightbox(index)}
              >
                <div className="gallery-img-wrapper">
                  <img src={item.src} alt={item.caption || `Foto ${index + 1}`} className="gallery-img" />
                  <div className="gallery-img-overlay">
                    <Maximize2 size={24} className="gallery-zoom-icon" />
                    {item.caption && <span className="gallery-caption-preview">{item.caption}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        <p className="swipe-hint">Desliza o haz clic en una foto para ampliar</p>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="lightbox-backdrop" onClick={closeLightbox}>
            <motion.div 
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <button className="lightbox-close" onClick={closeLightbox} aria-label="Cerrar vista previa">
                <X size={28} />
              </button>

              <button className="lightbox-nav lightbox-prev" onClick={prevImage} aria-label="Foto anterior">
                <ChevronLeft size={36} />
              </button>

              <div className="lightbox-image-box">
                <img 
                  src={images[lightboxIndex].src} 
                  alt={images[lightboxIndex].caption || "Foto ampliada"} 
                  className="lightbox-img"
                />
                {images[lightboxIndex].caption && (
                  <p className="lightbox-caption">{images[lightboxIndex].caption}</p>
                )}
              </div>

              <button className="lightbox-nav lightbox-next" onClick={nextImage} aria-label="Siguiente foto">
                <ChevronRight size={36} />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
