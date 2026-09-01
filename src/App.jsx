import React from 'react';
import Hero from './components/Hero';
import SaveTheDate from './components/SaveTheDate';
import Countdown from './components/Countdown';
import Location from './components/Location';
import Gallery from './components/Gallery';
import Rsvp from './components/Rsvp';
import AudioPlayer from './components/AudioPlayer';
import MagicParticles from './components/MagicParticles';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <MagicParticles />
      <AudioPlayer />
      <Hero />
      <SaveTheDate />
      <Countdown />
      <Location />
      <Gallery />
      <Rsvp />
    </div>
  );
}

export default App;
