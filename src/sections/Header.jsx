import React, { useState, useEffect } from 'react';
import './Header.css';
import { Menu, X } from 'lucide-react';
import Button from '../components/Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#" className="logo">
          <img src="/icon.jpg" alt="Logo Agris" className="logo-img" />
          <span className="logo-text">Agris</span>
        </a>

        <nav className={`desktop-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>Sobre Nosotros</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>Servicios</a>
          <a href="#gallery" onClick={() => setMobileMenuOpen(false)}>Campo</a>
          <Button href="#contact" variant="accent" onClick={() => setMobileMenuOpen(false)}>
            Contacto
          </Button>
        </nav>

        <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
