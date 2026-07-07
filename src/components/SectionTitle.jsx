import React from 'react';
import './SectionTitle.css';
import { useEffect, useRef } from 'react';

const SectionTitle = ({ title, subtitle, align = 'center' }) => {
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
    <div ref={ref} className={`section-title text-${align} fade-in`}>
      <h2 className="title">{title}</h2>
      {subtitle && <p className="subtitle">{subtitle}</p>}
      <div className={`divider align-${align}`}></div>
    </div>
  );
};

export default SectionTitle;
