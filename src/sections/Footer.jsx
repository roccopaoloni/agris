import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/icon.jpg" alt="Logo Agris" className="footer-img" />
            <span className="footer-text">Agris</span>
          </div>
          
          <div className="footer-links">
            <a href="#home">Inicio</a>
            <a href="#about">Sobre Nosotros</a>
            <a href="#services">Servicios</a>
            <a href="#contact">Contacto</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Agris Consultora. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
