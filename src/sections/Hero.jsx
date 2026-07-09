import React from 'react';
import './Hero.css';
import Button from '../components/Button';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src="https://assets.mixkit.co/videos/preview/mixkit-wheat-field-at-sunset-1002-large.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      <div className="container hero-content text-center fade-in visible">
        <h1 className="hero-title">Administración y Producción</h1>
        <h2 className="hero-subtitle">Ing. Agrónomo Pablo Paoloni</h2>
        <p className="hero-desc">
          Administración y asesoramiento integral de establecimientos agrícolas y ganaderos.
        </p>
        <div className="hero-actions">
          <Button href="#contact" variant="accent">Contacto</Button>
          <Button href="#services" variant="outline" style={{ color: '#fff', borderColor: '#fff' }}>Nuestros Servicios</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
