import React, { useEffect, useRef } from 'react';
import './Contact.css';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { Mail, MapPin, ExternalLink } from 'lucide-react';

const LinkedinIcon = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Contact = () => {
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
    <section className="section" id="contact">
      <div className="container">
        <SectionTitle 
          title="Contacto" 
          subtitle="Estamos a su disposición para coordinar una reunión inicial y evaluar cómo podemos sumar valor a su establecimiento."
        />
        
        <div className="contact-card fade-in" ref={ref}>
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <Mail size={24} />
              </div>
              <div>
                <h5>Email</h5>
                <p>agris.paoloni@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <LinkedinIcon size={24} />
              </div>
              <div>
                <h5>LinkedIn</h5>
                <p>
                  <a href="https://www.linkedin.com/in/pablo-paoloni-0231538/" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'var(--color-primary)', fontWeight: '500', textDecoration: 'underline' }}>
                    Pablo Paoloni <ExternalLink size={14} />
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <MapPin size={24} />
              </div>
              <div>
                <h5>Ubicación Base</h5>
                <p>Bahía Blanca, Buenos Aires, Argentina</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form action="https://api.web3forms.com/submit" method="POST" className="contact-form">
              <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY} />
              <input type="hidden" name="subject" value="Nuevo mensaje desde la web de Agris" />
              
              <div className="form-group">
                <input type="text" name="name" required placeholder="Nombre completo" />
              </div>
              
              <div className="form-group">
                <input type="email" name="email" required placeholder="Correo electrónico" />
              </div>
              
              <div className="form-group">
                <textarea name="message" rows="5" required placeholder="¿En qué podemos ayudarle?"></textarea>
              </div>
              
              <Button type="submit" variant="accent" className="full-width">
                <Mail size={20} /> Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
