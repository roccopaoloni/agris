import React from 'react';
import './Button.css';

const Button = ({ children, variant = 'primary', href, className = '', ...props }) => {
  const baseClass = `btn btn-${variant} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={baseClass} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={baseClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
