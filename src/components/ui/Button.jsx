//Componente: Button
//Descripción: Este componente es un botón reutilizable con diferentes variantes estilísticas. Sirve como base para otros botones específicos en la aplicación.
import React from 'react';
const Button = ({ 
  children, 
  onClick, 
  variant, 
  size,
  disabled,
  className,
  type 
}) => {
  return (
    <button 
      type={type || 'button'}
      className={`btn btn-${variant || 'primary'} btn-${size || 'medium'} ${className || ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
export default Button;