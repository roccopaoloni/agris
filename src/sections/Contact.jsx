import React, { useEffect, useRef } from 'react';
import './Contact.css';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';

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
                <Phone size={24} />
              </div>
              <div>
                <h5>Teléfono</h5>
                <p>+54 9 11 0000-0000</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <Mail size={24} />
              </div>
              <div>
                <h5>Email</h5>
                <p>contacto@agrisconsultora.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <MapPin size={24} />
              </div>
              <div>
                <h5>Ubicación Base</h5>
                <p>Ciudad de Buenos Aires, Argentina</p>
              </div>
            </div>
          </div>
          
          <div className="contact-actions">
            <Button href="https://wa.me/5491100000000" variant="accent" className="full-width">
              <MessageCircle size={20} /> Escribinos por WhatsApp
            </Button>
            <Button href="mailto:contacto@agrisconsultora.com" variant="outline" className="full-width">
              <Mail size={20} /> Enviar un Correo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
