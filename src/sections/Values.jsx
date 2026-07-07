import React, { useEffect, useRef } from 'react';
import './Values.css';
import SectionTitle from '../components/SectionTitle';
import { ShieldCheck, Handshake, Sprout, Target, ArrowRightLeft, FileCheck2 } from 'lucide-react';

const values = [
  { icon: ShieldCheck, title: 'Profesionalismo', desc: 'Asesoramiento técnico basado en ciencia y datos.' },
  { icon: Handshake, title: 'Confianza', desc: 'Relaciones a largo plazo con el productor.' },
  { icon: Sprout, title: 'Sustentabilidad', desc: 'Cuidado del suelo y los recursos naturales.' },
  { icon: Target, title: 'Planificación', desc: 'Anticipación y estrategia para cada campaña.' },
  { icon: ArrowRightLeft, title: 'Transparencia', desc: 'Claridad total en la gestión de números.' },
  { icon: FileCheck2, title: 'Compromiso', desc: 'Dedicación absoluta al éxito del establecimiento.' }
];

const Values = () => {
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
    <section className="section" id="values">
      <div className="container">
        <SectionTitle 
          title="Nuestros Valores" 
          subtitle="Los pilares que sostienen nuestro trabajo diario y nuestra relación con los clientes."
        />
        
        <div className="values-grid fade-in" ref={ref}>
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div className="value-card" key={index}>
                <div className="value-icon-container">
                  <IconComponent size={32} />
                </div>
                <div className="value-content">
                  <h4 className="value-title">{value.title}</h4>
                  <p className="value-desc">{value.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;
