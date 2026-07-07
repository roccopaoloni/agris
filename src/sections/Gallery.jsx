import React from 'react';
import './Gallery.css';
import SectionTitle from '../components/SectionTitle';

const images = [
  'https://images.unsplash.com/photo-1592982537447-6f2963162b1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1628189678822-b5e804f5e27a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1589923188900-85dae523342b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
];

const Gallery = () => {
  return (
    <section className="section section-alt" id="gallery">
      <div className="container">
        <SectionTitle 
          title="El Campo en Foco" 
          subtitle="Una visión práctica y directa del trabajo diario en los establecimientos."
        />
        
        <div className="gallery-grid">
          {images.map((src, index) => (
            <div className={`gallery-item item-${index}`} key={index}>
              <img src={src} alt={`Galería campo ${index + 1}`} />
              <div className="gallery-overlay"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
