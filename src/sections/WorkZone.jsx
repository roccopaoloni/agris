import React, { useEffect, useRef } from 'react';
import './WorkZone.css';
import SectionTitle from '../components/SectionTitle';
import { MapPin } from 'lucide-react';

const WorkZone = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section className="section" id="work-zone">
      <div className="container">
        <div className="work-zone-grid" ref={ref}>
          <div className="work-zone-content fade-in">
            <SectionTitle title="Nuestra Zona de Trabajo" align="left" />
            <p className="work-zone-desc">
              Brindamos servicios de asesoramiento y administración en diversas regiones, 
              adaptándonos a las particularidades agroclimáticas y productivas de cada zona.
            </p>
            <ul className="work-zone-list">
              <li><MapPin size={20} className="pin-icon"/> Región Pampeana Norte</li>
              <li><MapPin size={20} className="pin-icon"/> Provincia de Córdoba (Sur)</li>
              <li><MapPin size={20} className="pin-icon"/> Provincia de Santa Fe</li>
              <li><MapPin size={20} className="pin-icon"/> Entre Ríos</li>
            </ul>
          </div>
          <div className="work-zone-map fade-in">
            {/* Unsplash placeholder related to map/field map */}
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Mapa de zona de trabajo" 
              className="map-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkZone;
