import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { weddingData } from '../config/weddingData';
import './AudioPlayer.css';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setHasInteracted(true);
      }).catch(err => {
        console.log("Audio play blocked or error:", err);
      });
    }
  };

  useEffect(() => {
    // Attempt graceful start on first touch/click anywhere if not yet started
    const handleFirstUserGesture = () => {
      if (!hasInteracted && audioRef.current && !isPlaying) {
        // Optional auto-prompt or keep manual
      }
    };

    window.addEventListener('click', handleFirstUserGesture, { once: true });
    return () => window.removeEventListener('click', handleFirstUserGesture);
  }, [hasInteracted, isPlaying]);

  return (
    <div className="audio-player-container">
      <audio 
        ref={audioRef} 
        src={weddingData.music.url} 
        loop 
        preload="auto"
      />
      <button 
        className={`audio-btn ${isPlaying ? 'playing' : ''}`}
        onClick={togglePlay}
        aria-label={isPlaying ? "Pausar música de fondo" : "Reproducir música de fondo"}
        title={isPlaying ? `Pausar música (${weddingData.music.title})` : "Reproducir música"}
      >
        <div className="audio-icon-wrapper">
          {isPlaying ? (
            <>
              <Volume2 size={20} className="audio-icon" />
              <span className="sound-wave-bar bar-1"></span>
              <span className="sound-wave-bar bar-2"></span>
              <span className="sound-wave-bar bar-3"></span>
            </>
          ) : (
            <>
              <VolumeX size={20} className="audio-icon muted" />
              <span className="play-hint-tag">Música</span>
            </>
          )}
        </div>
      </button>
    </div>
  );
};

export default AudioPlayer;
