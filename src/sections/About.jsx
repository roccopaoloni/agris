import React, { useEffect, useRef } from 'react';
import './About.css';
import SectionTitle from '../components/SectionTitle';

const About = () => {
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
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrapper fade-in" ref={ref}>
            <img 
              src="https://images.unsplash.com/photo-1595804368541-10492e85a666?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Ingeniero en el campo" 
              className="about-img"
            />
            <div className="about-experience">
              <span className="exp-number">15+</span>
              <span className="exp-text">Años de<br/>Experiencia</span>
            </div>
          </div>
          
          <div className="about-content">
            <SectionTitle title="Sobre Nosotros" align="left" />
            
            <p className="about-text">
              Somos una empresa dedicada a la <strong>gestión integral y asesoramiento agronómico</strong>, 
              con un enfoque práctico y orientado a resultados. Entendemos que cada establecimiento es único y 
              requiere una planificación a medida para maximizar su rentabilidad de forma sustentable.
            </p>
            
            <p className="about-text">
              Nuestro compromiso es acompañar al productor en la toma de decisiones, aportando 
              experiencia técnica, orden administrativo y una visión empresarial del campo.
            </p>
            
            <ul className="about-list">
              <li><strong>Ing. Agrónomo:</strong> Pablo Paoloni</li>
              <li><strong>Universidad:</strong> Universidad Nacional del Sur</li>
              <li><strong>Matrícula:</strong> CPIA N° 00000</li>
              <li><strong>Especialización:</strong> Administración Rural y Agronegocios</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
