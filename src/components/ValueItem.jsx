import React, { useEffect, useRef } from 'react';
import './ValueItem.css';

const ValueItem = ({ icon: Icon, title, delay = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
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
  }, [delay]);

  return (
    <div ref={ref} className="value-item fade-in">
      <div className="value-icon">
        <Icon size={40} />
      </div>
      <h4 className="value-title">{title}</h4>
    </div>
  );
};

export default ValueItem;
