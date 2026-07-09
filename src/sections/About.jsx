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
              src="/Ingeniero en el campo.jpeg" 
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
              <li><strong>Posgrado:</strong> Magíster</li>
              <li><strong>Enfoque:</strong> Producción sustentable</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
