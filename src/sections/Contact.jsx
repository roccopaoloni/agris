import React, { useEffect, useRef } from 'react';
import './Contact.css';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { Mail, MapPin, Clock } from 'lucide-react';

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
                <MapPin size={24} />
              </div>
              <div>
                <h5>Ubicación Base</h5>
                <p>Bahía Blanca, Buenos Aires, Argentina</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <Clock size={24} />
              </div>
              <div>
                <h5>Horario de Atención</h5>
                <p>Lunes a Viernes de 8:00 a 18:00 hs</p>
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
