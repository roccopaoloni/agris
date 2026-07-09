import React, { useState, useCallback } from 'react';
import './Gallery.css';
import SectionTitle from '../components/SectionTitle';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/gaucho.jpg',
  '/girasol.jpg',
  '/girasoles.jpg',
  '/girasoles_separados.jpg',
  '/siembra.jpg',
  '/vacas.jpg'
];

const Gallery = () => {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((index) => {
    setCurrent(index);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="section section-alt" id="gallery">
      <div className="container gallery-container">
        <SectionTitle 
          title="El Campo en Foco" 
          subtitle="Una visión práctica y directa del trabajo diario en los establecimientos."
        />
        
        <div className="gallery-block">
          <div className="gallery-layout">
            
            {/* Thumbnails (Left side) */}
            <div className="gallery-thumbnails">
              {images.map((src, index) => (
                <button
                  key={index}
                  className={`gallery-thumb ${index === current ? 'active' : ''}`}
                  onClick={() => goTo(index)}
                  aria-label={`Ver imagen ${index + 1}`}
                >
                  <img src={src} alt={`Miniatura ${index + 1}`} loading="lazy" />
                </button>
              ))}
            </div>

            {/* Main Carousel (Right side) */}
            <div className="gallery-main">
              <div 
                className="gallery-track" 
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {images.map((src, index) => (
                  <div className="gallery-slide" key={index}>
                    <img src={src} alt={`Galería campo ${index + 1}`} loading="lazy" />
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button className="gallery-nav gallery-nav-prev" onClick={prev} aria-label="Anterior">
                <ChevronLeft size={24} />
              </button>
              <button className="gallery-nav gallery-nav-next" onClick={next} aria-label="Siguiente">
                <ChevronRight size={24} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
